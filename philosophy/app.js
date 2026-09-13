(function () {
  const traditionById = Object.fromEntries(TRADITIONS.map(t => [t.id, t]));
  const categoryById = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));

  let activeTradition = TRADITIONS[0].id;
  let activeCategory = 'all';

  const tabsWrap = document.getElementById('tradition-tabs');
  const traditionIntro = document.getElementById('tradition-intro');
  const chipsWrap = document.getElementById('category-chips');
  const grid = document.getElementById('concept-grid');
  const searchInput = document.getElementById('search-input');
  const emptyState = document.getElementById('empty-state');

  const overlay = document.getElementById('detail-overlay');
  const detailContent = document.getElementById('detail-content');
  const detailClose = document.getElementById('detail-close');

  function normalize(str) {
    return (str || '').toLowerCase();
  }

  // ---- Tradition tabs ----
  function renderTabs() {
    TRADITIONS.forEach(t => {
      const btn = document.createElement('button');
      btn.className = 'tab-btn' + (t.id === activeTradition ? ' active' : '');
      btn.dataset.tradition = t.id;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', t.id === activeTradition ? 'true' : 'false');
      btn.textContent = t.name;
      btn.addEventListener('click', () => {
        if (activeTradition === t.id) return;
        activeTradition = t.id;
        activeCategory = 'all';
        searchInput.value = '';
        document.querySelectorAll('#tradition-tabs .tab-btn').forEach(b => {
          const isActive = b.dataset.tradition === t.id;
          b.classList.toggle('active', isActive);
          b.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        renderIntro();
        renderChips();
        renderGrid();
      });
      tabsWrap.appendChild(btn);
    });
  }

  function renderIntro() {
    const t = traditionById[activeTradition];
    traditionIntro.style.setProperty('--card-color', t.color);
    traditionIntro.innerHTML = `
      <h2>${t.name} <span class="tradition-subtitle">— ${t.subtitle}</span></h2>
      <p class="tradition-tagline">${t.tagline}</p>
      <p class="tradition-source">${t.source}</p>
    `;
  }

  // ---- Category chips ----
  function renderChips() {
    chipsWrap.innerHTML = '';
    const cats = CATEGORIES.filter(c => c.tradition === activeTradition);
    chipsWrap.appendChild(makeChip('all', 'All concepts', null));
    cats.forEach(cat => chipsWrap.appendChild(makeChip(cat.id, cat.short, cat.color)));
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

  // ---- Grid ----
  function currentList() {
    const query = normalize(searchInput.value.trim());
    return CONCEPTS.filter(c => {
      if (c.tradition !== activeTradition) return false;
      if (activeCategory !== 'all' && c.category !== activeCategory) return false;
      if (!query) return true;
      const haystack = normalize([
        c.name, c.subtitle, c.definition, c.essence,
        ...(c.marks || []), ...(c.misreadings || []), ...(c.questions || [])
      ].join(' '));
      return haystack.includes(query);
    });
  }

  function renderGrid() {
    grid.innerHTML = '';
    const list = currentList();
    emptyState.hidden = list.length !== 0;
    list.forEach(c => grid.appendChild(makeCard(c)));
  }

  function makeCard(c) {
    const cat = categoryById[c.category];
    const card = document.createElement('button');
    card.className = 'card';
    card.style.setProperty('--card-color', cat.color);
    card.innerHTML = `
      <span class="card-cat"><span class="swatch"></span>${cat.short}</span>
      <h3>${c.name}${c.subtitle ? ` <span class="card-subtitle">${c.subtitle}</span>` : ''}</h3>
      <p>${c.definition}</p>
      <span class="card-trigger">${c.essence}</span>
    `;
    card.addEventListener('click', () => openDetail(c));
    return card;
  }

  // ---- Detail panel ----
  function openDetail(c) {
    const cat = categoryById[c.category];
    const t = traditionById[c.tradition];
    detailContent.style.setProperty('--card-color', cat.color);
    const panel = document.querySelector('.detail-panel');
    panel.style.setProperty('--card-color', cat.color);

    detailContent.innerHTML = `
      <div class="detail-cat"><span class="swatch"></span>${t.name} · ${cat.title}</div>
      <h2 id="detail-name">${c.name}${c.subtitle ? ` <span class="detail-subtitle">${c.subtitle}</span>` : ''}</h2>
      <p class="detail-def">${c.definition}</p>

      <div class="detail-block">
        <h4>In One Line</h4>
        <p class="plain">${c.essence}</p>
      </div>

      <div class="detail-block">
        <h4>Key Distinctions</h4>
        <ul>${(c.marks || []).map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      <div class="detail-block">
        <h4>Common Misreadings</h4>
        <ul>${(c.misreadings || []).map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      <div class="detail-block">
        <h4>Questions to Sit With</h4>
        <ul>${(c.questions || []).map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      ${c.note ? `<div class="detail-note">${c.note}</div>` : ''}
    `;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeDetail() {
    overlay.hidden = true;
    document.body.style.overflow = '';
  }

  detailClose.addEventListener('click', closeDetail);
  overlay.addEventListener('click', (ev) => { if (ev.target === overlay) closeDetail(); });
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape' && !overlay.hidden) closeDetail(); });

  searchInput.addEventListener('input', renderGrid);

  // ---- Init ----
  renderTabs();
  renderIntro();
  renderChips();
  renderGrid();
})();
