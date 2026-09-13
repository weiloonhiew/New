(function () {
  const catById = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));
  const emotionById = Object.fromEntries(EMOTIONS.map(e => [e.id, e]));

  const grid = document.getElementById('emotion-grid');
  const chipsWrap = document.getElementById('category-chips');
  const identifyInput = document.getElementById('identify-input');
  const identifyResults = document.getElementById('identify-results');
  const identifyEmpty = document.getElementById('identify-empty');
  const exampleTags = document.getElementById('example-tags');
  const overlay = document.getElementById('detail-overlay');
  const detailContent = document.getElementById('detail-content');
  const detailClose = document.getElementById('detail-close');

  let activeCategory = 'all';

  // 中文不用空格斷詞，也沒有英文那種字尾變化，直接把整段輸入當一個子字串比對，
  // 很少能命中——使用者打的詞組，幾乎不會恰好連續出現在資料裡。改用「雙字元組」
  // （bigram）切分連續的中文字：例如「下巴緊咬」會切成「下巴」「巴緊」「緊咬」，
  // 只要資料裡出現任一組合，就算部分命中，讓模糊比對更貼近中文的閱讀習慣。
  function normalize(str) {
    return str.toLowerCase().replace(/\s+/g, ' ').trim();
  }

  const CJK_RUN = /[一-鿿]+|[^一-鿿\s]+/g;

  function tokenize(str) {
    const runs = normalize(str).match(CJK_RUN) || [];
    const tokens = [];
    runs.forEach(run => {
      if (/[一-鿿]/.test(run)) {
        if (run.length === 1) {
          tokens.push(run);
        } else {
          for (let i = 0; i < run.length - 1; i++) tokens.push(run.slice(i, i + 2));
        }
      } else {
        tokens.push(run);
      }
    });
    return tokens;
  }

  // ---- 為每個情緒／心境預先建立可搜尋文字 ----
  EMOTIONS.forEach(e => {
    e._search = normalize([
      e.name,
      e.definition,
      e.triggers,
      ...(e.predisposition || []),
      ...(e.bodyCues || []),
      catById[e.category].short
    ].join(' '));
  });

  // ---- 分類篩選標籤 ----
  function renderChips() {
    const allChip = makeChip('all', '全部情緒', null);
    chipsWrap.appendChild(allChip);
    CATEGORIES.forEach(cat => {
      const label = cat.number ? `${cat.number}. ${cat.short}` : cat.short;
      chipsWrap.appendChild(makeChip(cat.id, label, cat.color));
    });
  }

  function makeChip(id, label, color) {
    const btn = document.createElement('button');
    btn.className = 'chip' + (id === activeCategory ? ' active' : '');
    btn.dataset.cat = id;
    if (color) {
      btn.style.setProperty('--chip-color', color);
      const dot = document.createElement('span');
      dot.className = 'dot';
      dot.style.background = color;
      btn.appendChild(dot);
    }
    btn.appendChild(document.createTextNode(label));
    btn.addEventListener('click', () => {
      activeCategory = id;
      document.querySelectorAll('.chip').forEach(c => c.classList.toggle('active', c.dataset.cat === id));
      renderGrid();
    });
    return btn;
  }

  function renderGrid() {
    grid.innerHTML = '';
    const list = activeCategory === 'all'
      ? EMOTIONS
      : EMOTIONS.filter(e => e.category === activeCategory);
    list.forEach(e => grid.appendChild(makeCard(e)));
  }

  function makeCard(e) {
    const cat = catById[e.category];
    const card = document.createElement('button');
    card.className = 'card';
    card.style.setProperty('--card-color', cat.color);
    card.innerHTML = `
      <span class="card-cat"><span class="swatch"></span>${cat.short}</span>
      <h3>${e.name}</h3>
      <p>${e.definition}</p>
      <span class="card-trigger">常見誘因：${e.triggers}</span>
    `;
    card.addEventListener('click', () => openDetail(e));
    return card;
  }

  // ---- 詳細面板 ----
  function openDetail(e) {
    const cat = catById[e.category];
    detailContent.style.setProperty('--card-color', cat.color);
    const panel = document.querySelector('.detail-panel');
    panel.style.setProperty('--card-color', cat.color);

    const catLabel = cat.number ? `第 ${cat.number} 類 · ${cat.title}` : cat.title;
    detailContent.innerHTML = `
      <div class="detail-cat"><span class="swatch"></span>${catLabel}</div>
      <h2 id="detail-name">${e.name}</h2>
      <p class="detail-def">${e.definition}</p>

      <div class="detail-block">
        <h4>常見誘因</h4>
        <p class="plain">${e.triggers}</p>
      </div>

      <div class="detail-block">
        <h4>行為傾向──觀察重點</h4>
        <ul>${(e.predisposition || []).map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      <div class="detail-block">
        <h4>身體與行為線索</h4>
        <ul>${(e.bodyCues || []).map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      <div class="detail-block">
        <h4>教練提問</h4>
        <ul>${(e.questions || []).map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      ${e.note ? `<div class="detail-note">${e.note}</div>` : ''}
    `;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeDetail() {
    overlay.hidden = true;
    document.body.style.overflow = '';
  }

  // ---- 教練路徑（心境轉換）詳細面板 ----
  function openTransitionDetail(t, group, color) {
    const fromEmotion = emotionById[t.from];
    const toEmotion = emotionById[t.to];
    detailContent.style.setProperty('--card-color', color);
    const panel = document.querySelector('.detail-panel');
    panel.style.setProperty('--card-color', color);

    detailContent.innerHTML = `
      <div class="detail-cat"><span class="swatch"></span>${group.source} · ${group.title}</div>
      <h2 id="detail-name">${fromEmotion.name} <span class="arrow-sep" aria-hidden="true">→</span> ${toEmotion.name}</h2>
      <p class="detail-def">${t.summary}</p>

      <div class="detail-block">
        <h4>轉變的關鍵</h4>
        <p class="plain">${t.whatShifts}</p>
      </div>

      <div class="detail-block">
        <h4>個案準備好轉變的訊號</h4>
        <ul>${t.readySigns.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      <div class="detail-block">
        <h4>教練可用的介入方式</h4>
        <ul>${t.coachMoves.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      <div class="detail-block">
        <h4>可參考的教練語言</h4>
        <ul>${t.sampleLanguage.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
    `;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  detailClose.addEventListener('click', closeDetail);
  overlay.addEventListener('click', (ev) => { if (ev.target === overlay) closeDetail(); });
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape' && !overlay.hidden) closeDetail(); });

  // ---- 辨識情緒 ----
  const EXAMPLES = [
    '不敢眼神接觸', '一直道歉', '不會拒絕', '下巴緊咬',
    '一直滑手機', '反覆回想過去', '極力維護面子',
    '突然沉默', '一直尋求保證', '看不起別人'
  ];

  function renderExamples() {
    EXAMPLES.forEach(ex => {
      const btn = document.createElement('button');
      btn.textContent = ex;
      btn.addEventListener('click', () => {
        identifyInput.value = ex;
        runIdentify();
      });
      exampleTags.appendChild(btn);
    });
  }

  function runIdentify() {
    const raw = identifyInput.value.trim();
    identifyResults.innerHTML = '';
    if (!raw) {
      identifyEmpty.hidden = true;
      return;
    }
    const words = tokenize(raw);

    const scored = EMOTIONS
      .map(e => ({ e, score: words.filter(w => e._search.includes(w)).length }))
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score || a.e.name.localeCompare(b.e.name, 'zh-Hant'));

    identifyEmpty.hidden = scored.length !== 0;
    scored.slice(0, 18).forEach(({ e }) => identifyResults.appendChild(makeCard(e)));
  }

  identifyInput.addEventListener('input', runIdentify);

  // ---- 教練路徑（Coaching Pathways）----
  const pathwaysGroups = document.getElementById('pathways-groups');

  function groupColor(group) {
    return catById[emotionById[group.steps[0]].category].color;
  }

  function renderGroupLadder(group, color) {
    const diagram = document.createElement('div');
    diagram.className = 'ladder-diagram';
    diagram.setAttribute('aria-hidden', 'true');
    group.steps.forEach((id, i) => {
      const mood = emotionById[id];
      const step = document.createElement('span');
      step.className = 'ladder-step';
      step.style.setProperty('--step-color', color);
      step.style.setProperty('--step-opacity', group.steps.length > 1 ? 0.45 + (i * 0.55) / (group.steps.length - 1) : 1);
      step.textContent = mood.name;
      diagram.appendChild(step);
      if (i < group.steps.length - 1) {
        const arrow = document.createElement('span');
        arrow.className = 'ladder-arrow';
        arrow.textContent = '→';
        diagram.appendChild(arrow);
      }
    });
    return diagram;
  }

  function makeTransitionCard(t, group, color) {
    const fromEmotion = emotionById[t.from];
    const toEmotion = emotionById[t.to];
    const card = document.createElement('button');
    card.className = 'card pathway-card';
    card.style.setProperty('--card-color', color);
    card.innerHTML = `
      <span class="card-cat"><span class="swatch"></span>${group.source}</span>
      <h3>${fromEmotion.name} <span class="arrow-sep" aria-hidden="true">→</span> ${toEmotion.name}</h3>
      <p>${t.summary}</p>
    `;
    card.addEventListener('click', () => openTransitionDetail(t, group, color));
    return card;
  }

  function renderPathways() {
    if (!pathwaysGroups) return;
    COACHING_PATHWAYS.forEach(group => {
      const color = groupColor(group);
      const section = document.createElement('div');
      section.className = 'pathway-group';
      section.style.setProperty('--card-color', color);

      const heading = document.createElement('h3');
      heading.innerHTML = `${group.title} <span class="group-source">— ${group.source}</span>`;
      section.appendChild(heading);

      const intro = document.createElement('p');
      intro.className = 'group-intro';
      intro.textContent = group.intro;
      section.appendChild(intro);

      section.appendChild(renderGroupLadder(group, color));

      const list = document.createElement('div');
      list.className = 'pathways-list';
      group.transitions.forEach(t => list.appendChild(makeTransitionCard(t, group, color)));
      section.appendChild(list);

      pathwaysGroups.appendChild(section);
    });
  }

  // ---- 參考資料區（傾聽、語言）----
  // 共用的卡片／詳細面板渲染邏輯，沿用整個網站一致的呈現方式。
  const LISTENING_COLOR = '#4B6A88';
  const LANGUAGE_COLOR = '#7A6B4B';

  function makeReferenceCard(item, label, color, onOpen) {
    const card = document.createElement('button');
    card.className = 'card';
    card.style.setProperty('--card-color', color);
    card.innerHTML = `
      <span class="card-cat"><span class="swatch"></span>${label}</span>
      <h3>${item.name}</h3>
      <p>${item.definition}</p>
    `;
    card.addEventListener('click', onOpen);
    return card;
  }

  function openReferenceDetail(item, label, color, componentsHeading) {
    detailContent.style.setProperty('--card-color', color);
    const panel = document.querySelector('.detail-panel');
    panel.style.setProperty('--card-color', color);

    const componentsHtml = item.components ? `
      <div class="detail-block">
        <h4>${componentsHeading || '組成要素'}</h4>
        <ol class="components-list">${item.components.map(c => `<li><strong>${c.name}</strong> — ${c.detail}</li>`).join('')}</ol>
      </div>
    ` : '';

    detailContent.innerHTML = `
      <div class="detail-cat"><span class="swatch"></span>${label}</div>
      <h2 id="detail-name">${item.name}</h2>
      <p class="detail-def">${item.definition}</p>

      ${componentsHtml}

      <div class="detail-block">
        <h4>失衡時的樣貌</h4>
        <ul>${item.breakdown.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      <div class="detail-block">
        <h4>如何強化這項能力</h4>
        <ul>${item.practice.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      <div class="detail-block">
        <h4>可以自問的問題</h4>
        <ul>${item.questions.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      ${item.note ? `<div class="detail-note">${item.note}</div>` : ''}
    `;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  const listeningGrid = document.getElementById('listening-grid');
  const languageGrid = document.getElementById('language-grid');

  function renderListening() {
    if (!listeningGrid) return;
    const label = '傾聽 — Sieler';
    LISTENING_DISTINCTIONS.forEach(item => {
      listeningGrid.appendChild(makeReferenceCard(item, label, LISTENING_COLOR, () => openReferenceDetail(item, label, LISTENING_COLOR)));
    });
  }

  function renderLanguage() {
    if (!languageGrid) return;
    const label = '語言 — 言語行為';
    SPEECH_ACTS.forEach(item => {
      languageGrid.appendChild(makeReferenceCard(item, label, LANGUAGE_COLOR, () => openReferenceDetail(item, label, LANGUAGE_COLOR, '有效請求的組成要素')));
    });
  }

  // ---- 分頁切換 ----
  const tabBtns = document.querySelectorAll('.tab-btn');
  const browsePanel = document.getElementById('browse-mode');
  const identifyPanel = document.getElementById('identify-mode');
  const pathwaysPanel = document.getElementById('pathways-mode');
  const listeningPanel = document.getElementById('listening-mode');
  const languagePanel = document.getElementById('language-mode');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const mode = btn.dataset.mode;
      browsePanel.hidden = mode !== 'browse';
      identifyPanel.hidden = mode !== 'identify';
      if (pathwaysPanel) pathwaysPanel.hidden = mode !== 'pathways';
      if (listeningPanel) listeningPanel.hidden = mode !== 'listening';
      if (languagePanel) languagePanel.hidden = mode !== 'language';
    });
  });

  // ---- 初始化 ----
  renderChips();
  renderGrid();
  renderExamples();
  renderPathways();
  renderListening();
  renderLanguage();
})();
