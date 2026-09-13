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

  const STOPWORDS = new Set([
    'a','an','the','to','of','is','are','was','were','be','being','been',
    'and','or','but','in','on','at','with','for','it','its','this','that',
    'i','you','your','me','my','do','does','doesnt','dont','cant','wont',
    'am','so','as','if','can','could','would','should','into','than','then',
    'not','no','always','very','really'
  ]);

  function normalize(str) {
    return str
      .toLowerCase()
      .replace(/[’‘]/g, "'")
      .replace(/[^a-z0-9'\s]/g, ' ')
      .replace(/'/g, '');
  }

  function tokenize(str) {
    return normalize(str).split(/\s+/).filter(Boolean);
  }

  // Light stemmer so "avoids"/"avoiding"/"avoidance" etc. can match each other.
  function stem(word) {
    if (word.length > 5 && word.endsWith('ies')) return word.slice(0, -3) + 'y';
    if (word.length > 5 && word.endsWith('ing')) return word.slice(0, -3);
    if (word.length > 5 && word.endsWith('ance')) return word.slice(0, -4);
    if (word.length > 4 && word.endsWith('ed')) return word.slice(0, -2);
    if (word.length > 4 && word.endsWith('es')) return word.slice(0, -2);
    if (word.length > 3 && word.endsWith('s') && !word.endsWith('ss')) return word.slice(0, -1);
    return word;
  }

  function stemSet(str) {
    return new Set(tokenize(str).map(stem));
  }

  // ---- Precompute searchable stems per emotion ----
  EMOTIONS.forEach(e => {
    e._stems = stemSet([
      e.name,
      e.definition,
      e.triggers,
      ...(e.predisposition || []),
      ...(e.bodyCues || []),
      catById[e.category].short
    ].join(' '));
  });

  // ---- Category chips ----
  function renderChips() {
    const allChip = makeChip('all', 'All emotions', null);
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
      <span class="card-trigger">Trigger: ${e.triggers}</span>
    `;
    card.addEventListener('click', () => openDetail(e));
    return card;
  }

  // ---- Detail panel ----
  function openDetail(e) {
    const cat = catById[e.category];
    detailContent.style.setProperty('--card-color', cat.color);
    const panel = document.querySelector('.detail-panel');
    panel.style.setProperty('--card-color', cat.color);

    const catLabel = cat.number ? `Category ${cat.number} · ${cat.title}` : cat.title;
    detailContent.innerHTML = `
      <div class="detail-cat"><span class="swatch"></span>${catLabel}</div>
      <h2 id="detail-name">${e.name}</h2>
      <p class="detail-def">${e.definition}</p>

      <div class="detail-block">
        <h4>Common Trigger</h4>
        <p class="plain">${e.triggers}</p>
      </div>

      <div class="detail-block">
        <h4>Predisposition — what to look for</h4>
        <ul>${(e.predisposition || []).map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      <div class="detail-block">
        <h4>Body &amp; Behavioral Cues</h4>
        <ul>${(e.bodyCues || []).map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      <div class="detail-block">
        <h4>Coaching Questions</h4>
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

  // ---- Transition (coaching pathway) detail panel ----
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
        <h4>What Shifts</h4>
        <p class="plain">${t.whatShifts}</p>
      </div>

      <div class="detail-block">
        <h4>Signs the Client Is Ready</h4>
        <ul>${t.readySigns.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      <div class="detail-block">
        <h4>Coach Moves</h4>
        <ul>${t.coachMoves.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      <div class="detail-block">
        <h4>Sample Coaching Language</h4>
        <ul>${t.sampleLanguage.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>
    `;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  detailClose.addEventListener('click', closeDetail);
  overlay.addEventListener('click', (ev) => { if (ev.target === overlay) closeDetail(); });
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape' && !overlay.hidden) closeDetail(); });

  // ---- Identify mode ----
  const EXAMPLES = [
    'avoids eye contact', 'over-apologizes', "can't say no", 'clenched jaw',
    'checks phone constantly', 'replays the past', 'defends reputation',
    'goes quiet', 'seeks reassurance', 'dismisses others'
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
    const allWords = tokenize(raw).map(stem);
    const meaningfulWords = allWords.filter(w => !STOPWORDS.has(w));
    const queryStems = meaningfulWords.length ? meaningfulWords : allWords;

    const scored = EMOTIONS
      .map(e => ({ e, score: queryStems.filter(w => e._stems.has(w)).length }))
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score || a.e.name.localeCompare(b.e.name));

    identifyEmpty.hidden = scored.length !== 0;
    scored.slice(0, 18).forEach(({ e }) => identifyResults.appendChild(makeCard(e)));
  }

  identifyInput.addEventListener('input', runIdentify);

  // ---- Pathways mode (Coaching Pathways library) ----
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

  // ---- Reference sections (Listening, Language) ----
  // Shared rendering for simple "distinction" reference content: a card grid that opens into
  // the same detail-panel pattern used everywhere else in the app.
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
        <h4>${componentsHeading || 'Components'}</h4>
        <ol class="components-list">${item.components.map(c => `<li><strong>${c.name}</strong> — ${c.detail}</li>`).join('')}</ol>
      </div>
    ` : '';

    detailContent.innerHTML = `
      <div class="detail-cat"><span class="swatch"></span>${label}</div>
      <h2 id="detail-name">${item.name}</h2>
      <p class="detail-def">${item.definition}</p>

      ${componentsHtml}

      <div class="detail-block">
        <h4>What It Looks Like When It Breaks Down</h4>
        <ul>${item.breakdown.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      <div class="detail-block">
        <h4>How to Strengthen This</h4>
        <ul>${item.practice.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      <div class="detail-block">
        <h4>Questions to Ask</h4>
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
    const label = 'Listening — Sieler';
    LISTENING_DISTINCTIONS.forEach(item => {
      listeningGrid.appendChild(makeReferenceCard(item, label, LISTENING_COLOR, () => openReferenceDetail(item, label, LISTENING_COLOR)));
    });
  }

  function renderLanguage() {
    if (!languageGrid) return;
    const label = 'Language — Speech Acts';
    SPEECH_ACTS.forEach(item => {
      languageGrid.appendChild(makeReferenceCard(item, label, LANGUAGE_COLOR, () => openReferenceDetail(item, label, LANGUAGE_COLOR, 'Components of an Effective Request')));
    });
  }

  // ---- Mode tabs ----
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

  // ---- Init ----
  renderChips();
  renderGrid();
  renderExamples();
  renderPathways();
  renderListening();
  renderLanguage();
})();
