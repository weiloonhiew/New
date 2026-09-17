/* Interior Design Quotation Builder — app logic */
(function(){
  "use strict";

  const STORAGE_KEY = "idq_state_v2";

  function freshState(){
    const sections = {};
    SECTIONS.forEach(s => sections[s] = []);
    return {
      company: COMPANY.name,
      docTitle: DOC_TITLE_DEFAULT,
      contractNo: "",
      date: new Date().toISOString().slice(0,10),
      owner1:"", nric1:"", owner2:"", nric2:"",
      contact1:"", contact2:"", email:"",
      premise:"", lock:"", address:"",
      discountPct: 0,
      gstPct: DEFAULT_GST*100,
      sections,
      paymentTerms: PAYMENT_TERMS.slice(),
      tnc: TERMS_AND_CONDITIONS.slice(),
      openSections: {}
    };
  }

  function loadState(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return freshState();
      const parsed = JSON.parse(raw);
      const fresh = freshState();
      // shallow-merge so new catalog sections introduced later still appear
      const merged = Object.assign(fresh, parsed);
      merged.sections = Object.assign(fresh.sections, parsed.sections || {});
      if(!Array.isArray(merged.paymentTerms) || !merged.paymentTerms.length) merged.paymentTerms = fresh.paymentTerms;
      if(!Array.isArray(merged.tnc) || !merged.tnc.length) merged.tnc = fresh.tnc;
      return merged;
    }catch(e){
      return freshState();
    }
  }

  function saveState(){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }catch(e){ /* storage unavailable — ignore */ }
  }

  let state = loadState();
  let pickerSection = null;

  /* ---------------- helpers ---------------- */
  function money(n){
    n = Number(n)||0;
    const neg = n < 0;
    const v = Math.abs(n).toLocaleString('en-SG', {minimumFractionDigits:2, maximumFractionDigits:2});
    return (neg?'-':'') + 'S$' + v;
  }
  function sellPrice(catalogEntry){
    if(catalogEntry.inc) return 0;
    const markup = DEFAULT_MARKUP;
    return catalogEntry.c / (1 - markup);
  }
  function lineAmount(item){
    if(item.inc) return 0;
    return (Number(item.qty)||0) * (Number(item.price)||0);
  }
  function sectionSubtotal(name){
    return (state.sections[name]||[]).reduce((sum,it)=> sum + lineAmount(it), 0);
  }
  function grandTotals(){
    const total = SECTIONS.reduce((s,name)=> s + sectionSubtotal(name), 0);
    const discountPct = Number(state.discountPct)||0;
    const discountAmt = -(total * discountPct/100);
    const net = total + discountAmt;
    const gstPct = Number(state.gstPct)||0;
    const gstAmt = net * gstPct/100;
    const grand = net + gstAmt;
    return {total, discountAmt, net, gstAmt, grand};
  }
  function toast(msg, isError){
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.className = 'toast show' + (isError?' error':'');
    clearTimeout(toast._t);
    toast._t = setTimeout(()=> el.className='toast', 2600);
  }

  /* ---------------- field binding ---------------- */
  const simpleFields = [
    ['f_company','company'], ['f_docTitle','docTitle'], ['f_contractNo','contractNo'], ['f_date','date'],
    ['f_owner1','owner1'], ['f_nric1','nric1'], ['f_owner2','owner2'], ['f_nric2','nric2'],
    ['f_contact1','contact1'], ['f_contact2','contact2'], ['f_email','email'],
    ['f_premise','premise'], ['f_lock','lock'], ['f_address','address']
  ];
  function renderFields(){
    simpleFields.forEach(([id,key])=>{
      document.getElementById(id).value = state[key] || '';
    });
    document.getElementById('f_discountPct').value = state.discountPct;
    document.getElementById('f_gstPct').value = state.gstPct;
  }
  function wireFields(){
    simpleFields.forEach(([id,key])=>{
      document.getElementById(id).addEventListener('input', e=>{
        state[key] = e.target.value;
        saveState();
        if(key==='company' || key==='docTitle') {/* no re-render needed, only affects export */}
      });
    });
    document.getElementById('f_discountPct').addEventListener('input', e=>{
      state.discountPct = e.target.value; saveState(); renderSummary();
    });
    document.getElementById('f_gstPct').addEventListener('input', e=>{
      state.gstPct = e.target.value; saveState(); renderSummary();
    });
  }

  /* ---------------- summary ---------------- */
  function renderSummary(){
    const t = grandTotals();
    document.getElementById('sumTotal').textContent = money(t.total);
    document.getElementById('sumDiscount').textContent = money(t.discountAmt);
    document.getElementById('sumNet').textContent = money(t.net);
    document.getElementById('sumGst').textContent = money(t.gstAmt);
    document.getElementById('sumGrand').textContent = money(t.grand);
    // section subtotal badges
    SECTIONS.forEach(name=>{
      const badge = document.querySelector(`.section-subtotal[data-section="${escapeHtml(name)}"]`);
      if(badge) badge.textContent = money(sectionSubtotal(name));
    });
    let count = 0;
    SECTIONS.forEach(n => count += (state.sections[n]||[]).length);
    document.getElementById('itemCountLabel').textContent = count ? `${count} line item${count===1?'':'s'} added` : 'No items added yet';
  }

  /* ---------------- sections rendering ---------------- */
  const sectionsContainer = document.getElementById('sectionsContainer');

  function renderSections(){
    sectionsContainer.innerHTML = '';
    SECTIONS.forEach((name, idx)=>{
      const items = state.sections[name]||[];
      const isOpen = state.openSections[name] ?? (items.length>0);
      const card = document.createElement('div');
      card.className = 'section-card' + (isOpen?' open':'');
      card.innerHTML = `
        <div class="section-header" data-toggle="${escapeHtml(name)}">
          <div class="left">
            <div class="section-num">${idx+1}</div>
            <div class="section-title">${escapeHtml(name)}</div>
          </div>
          <div style="display:flex;align-items:center;gap:14px;">
            <div class="section-meta">${items.length} item${items.length===1?'':'s'}</div>
            <div class="section-subtotal" data-section="${escapeHtml(name)}">${money(sectionSubtotal(name))}</div>
            <svg class="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M9 6l6 6-6 6"/></svg>
          </div>
        </div>
        <div class="section-body"></div>
      `;
      const body = card.querySelector('.section-body');
      body.appendChild(buildItemsTable(name, items));
      const addBtn = document.createElement('button');
      addBtn.className = 'add-item-btn';
      addBtn.textContent = '+ Add Item';
      addBtn.addEventListener('click', ()=> openPicker(name));
      body.appendChild(addBtn);

      card.querySelector('.section-header').addEventListener('click', ()=>{
        card.classList.toggle('open');
        state.openSections[name] = card.classList.contains('open');
        saveState();
      });
      sectionsContainer.appendChild(card);
    });
    renderSummary();
  }

  function buildItemsTable(sectionName, items){
    const scroller = document.createElement('div');
    scroller.className = 'table-scroll';
    const wrap = document.createElement('table');
    wrap.className = 'items';
    scroller.appendChild(wrap);
    if(!items.length){
      wrap.innerHTML = `<tbody><tr class="empty-row"><td colspan="5">No items yet — click "+ Add Item" to pick from the priced catalog.</td></tr></tbody>`;
      return scroller;
    }
    wrap.innerHTML = `<thead><tr>
        <th style="width:34%">Description</th><th>Unit</th><th>Qty</th><th>Unit Price</th><th>Amount</th><th></th>
      </tr></thead><tbody></tbody>`;
    const tbody = wrap.querySelector('tbody');
    items.forEach((item, i)=>{
      const tr = document.createElement('tr');

      const tdDesc = document.createElement('td');
      tdDesc.className = 'desc';
      if(item.custom){
        const inp = document.createElement('input');
        inp.className = 'custom-field';
        inp.value = item.desc;
        inp.placeholder = 'Item description';
        inp.addEventListener('input', e=>{ item.desc = e.target.value; saveState(); });
        tdDesc.appendChild(inp);
      }else{
        const span = document.createElement('span');
        span.className = 'desc-text';
        span.textContent = item.desc;
        tdDesc.appendChild(span);
        if(item.note){
          const note = document.createElement('span');
          note.className = 'desc-note';
          note.textContent = item.note;
          tdDesc.appendChild(note);
        }
      }
      tr.appendChild(tdDesc);

      const tdUnit = document.createElement('td');
      tdUnit.className = 'unit';
      if(item.custom){
        const inp = document.createElement('input');
        inp.className = 'custom-field';
        inp.style.width = '64px';
        inp.value = item.unit;
        inp.placeholder = 'Unit';
        inp.addEventListener('input', e=>{ item.unit = e.target.value; saveState(); });
        tdUnit.appendChild(inp);
      }else{
        tdUnit.textContent = item.unit;
      }
      tr.appendChild(tdUnit);

      const tdQty = document.createElement('td');
      const qtyInp = document.createElement('input');
      qtyInp.className = 'qty';
      qtyInp.type = 'number';
      qtyInp.step = 'any';
      qtyInp.min = '0';
      qtyInp.value = item.qty;
      qtyInp.addEventListener('input', e=>{
        item.qty = e.target.value;
        saveState();
        renderRowAmount(tr, item);
        renderSummary();
      });
      tdQty.appendChild(qtyInp);
      tr.appendChild(tdQty);

      const tdPrice = document.createElement('td');
      tdPrice.className = 'num';
      if(item.inc){
        tdPrice.innerHTML = '<span class="inc-pill">INC.</span>';
      }else{
        const priceInp = document.createElement('input');
        priceInp.className = 'qty';
        priceInp.type = 'number';
        priceInp.step = 'any';
        priceInp.min = '0';
        priceInp.value = round2(item.price);
        priceInp.addEventListener('input', e=>{
          item.price = e.target.value;
          saveState();
          renderRowAmount(tr, item);
          renderSummary();
        });
        tdPrice.appendChild(priceInp);
      }
      tr.appendChild(tdPrice);

      const tdAmt = document.createElement('td');
      tdAmt.className = 'num amt';
      tdAmt.textContent = item.inc ? 'INC.' : money(lineAmount(item));
      tr.appendChild(tdAmt);

      const tdDel = document.createElement('td');
      const delBtn = document.createElement('button');
      delBtn.className = 'danger-ghost';
      delBtn.textContent = '✕';
      delBtn.title = 'Remove item';
      delBtn.addEventListener('click', ()=>{
        state.sections[sectionName].splice(i,1);
        saveState();
        renderSections();
      });
      tdDel.appendChild(delBtn);
      tr.appendChild(tdDel);

      tbody.appendChild(tr);
    });
    return scroller;
  }
  function renderRowAmount(tr, item){
    tr.querySelector('td.amt').textContent = item.inc ? 'INC.' : money(lineAmount(item));
  }
  function round2(n){ return Math.round((Number(n)||0)*100)/100; }
  function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

  /* ---------------- item picker dialog ---------------- */
  const dlg = document.getElementById('pickerDialog');
  const pickerSearch = document.getElementById('pickerSearch');
  const pickerList = document.getElementById('pickerList');

  function openPicker(sectionName){
    pickerSection = sectionName;
    document.getElementById('pickerTitle').textContent = 'Add item — ' + sectionName;
    pickerSearch.value = '';
    renderPickerList('');
    dlg.showModal();
    setTimeout(()=>pickerSearch.focus(), 30);
  }
  function renderPickerList(q){
    const catalog = CATALOG[pickerSection] || [];
    const query = q.trim().toLowerCase();
    const filtered = query ? catalog.filter(it => it.d.toLowerCase().includes(query)) : catalog;
    pickerList.innerHTML = '';
    if(!filtered.length){
      pickerList.innerHTML = '<div class="picker-empty">No matching items — try a different search, or add a custom item below.</div>';
      return;
    }
    filtered.forEach(entry=>{
      const row = document.createElement('div');
      row.className = 'picker-item';
      const priceLabel = entry.inc ? 'INC.' : money(sellPrice(entry)) + ' / ' + entry.u;
      row.innerHTML = `
        <div>
          <div class="pi-desc">${escapeHtml(entry.d)}</div>
          ${entry.note ? `<div class="pi-note">${escapeHtml(entry.note)}</div>` : ''}
        </div>
        <div class="pi-price">${priceLabel}</div>
      `;
      row.addEventListener('click', ()=>{
        state.sections[pickerSection].push({
          desc: entry.d, unit: entry.u, qty: 1,
          price: round2(sellPrice(entry)), inc: !!entry.inc,
          note: entry.note || '', custom:false
        });
        saveState();
        dlg.close();
        renderSections();
        toast('Added to ' + pickerSection);
      });
      pickerList.appendChild(row);
    });
  }
  pickerSearch.addEventListener('input', e => renderPickerList(e.target.value));
  document.getElementById('pickerClose').addEventListener('click', ()=> dlg.close());
  document.getElementById('btnAddCustom').addEventListener('click', ()=>{
    state.sections[pickerSection].push({desc:'', unit:'', qty:1, price:0, inc:false, custom:true, note:''});
    saveState();
    dlg.close();
    renderSections();
  });
  dlg.addEventListener('click', (e)=>{ if(e.target===dlg) dlg.close(); });

  /* ---------------- terms tab ---------------- */
  function renderTerms(){
    const ptWrap = document.getElementById('paymentTermsList');
    ptWrap.innerHTML = '';
    state.paymentTerms.forEach((text,i)=>{
      ptWrap.appendChild(clauseRow(text, i, 'paymentTerms'));
    });
    const tncWrap = document.getElementById('tncList');
    tncWrap.innerHTML = '';
    state.tnc.forEach((text,i)=>{
      tncWrap.appendChild(clauseRow(text, i, 'tnc'));
    });
  }
  function clauseRow(text, i, key){
    const row = document.createElement('div');
    row.className = 'clause-row';
    row.innerHTML = `<div class="num">${i+1}.</div>`;
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.addEventListener('input', e=>{ state[key][i] = e.target.value; saveState(); });
    row.appendChild(ta);
    return row;
  }

  /* ---------------- directory tab ---------------- */
  function renderDirectory(filter){
    const wrap = document.getElementById('dirContainer');
    const q = (filter||'').trim().toLowerCase();
    wrap.innerHTML = '';
    CONTACT_DIRECTORY.forEach(group=>{
      const rows = q ? group.rows.filter(r =>
        (r.company||'').toLowerCase().includes(q) ||
        (r.contact||'').toLowerCase().includes(q) ||
        group.group.toLowerCase().includes(q)
      ) : group.rows;
      if(!rows.length) return;
      const div = document.createElement('div');
      div.className = 'dir-group';
      const tableRows = rows.map(r => `
        <tr>
          <td class="company">${escapeHtml(r.company||'')}</td>
          <td class="contact">${escapeHtml(r.contact||'')}</td>
          <td class="phone">${escapeHtml(r.mobile||'')}</td>
          <td class="phone">${escapeHtml(r.office||'')}</td>
        </tr>`).join('');
      div.innerHTML = `<h4>${escapeHtml(group.group)}</h4><table class="dir-table">${tableRows}</table>`;
      wrap.appendChild(div);
    });
    if(!wrap.children.length){
      wrap.innerHTML = '<div class="picker-empty">No matches.</div>';
    }
  }
  document.getElementById('dirSearch').addEventListener('input', e=> renderDirectory(e.target.value));

  /* ---------------- tabs ---------------- */
  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.tabpanel').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-'+btn.dataset.tab).classList.add('active');
    });
  });

  /* ---------------- new quotation ---------------- */
  document.getElementById('btnNew').addEventListener('click', ()=>{
    if(!confirm('Start a new quotation? This clears the client details and all added items on this device.')) return;
    state = freshState();
    saveState();
    renderFields();
    renderSections();
    renderTerms();
    toast('Started a new quotation');
  });

  /* ---------------- excel export ---------------- */
  function safeSheetName(name){
    return (name||'Quotation').replace(/[\\\/\?\*\[\]:]/g,' ').slice(0,31) || 'Quotation';
  }

  function buildWorkbook(){
    const NAVY = "1F3864", GREY = "595959";
    const rows = [];
    const styles = {}; // "r,c" -> style
    const merges = [];
    const rowHeights = {}; // r -> pt

    function push(a,b,c, opt){
      const r = rows.length;
      rows.push([a==null?'':a, b==null?'':b, c==null?'':c]);
      if(opt && opt.style){
        [0,1,2].forEach(ci=>{ if(opt.style[ci]) styles[r+','+ci] = opt.style[ci]; });
      }
      if(opt && opt.merge) merges.push({s:{r:r,c:0}, e:{r:r,c:2}});
      if(opt && opt.height) rowHeights[r] = opt.height;
      return r;
    }
    function wrapHeight(text, charsPerLine){
      const lines = Math.max(1, Math.ceil(String(text||'').length / charsPerLine));
      return lines*13 + 6;
    }

    const bold = (extra)=> Object.assign({font:{bold:true, name:'Calibri', sz:10}}, extra||{});
    const normal = (extra)=> Object.assign({font:{name:'Calibri', sz:10}}, extra||{});
    const thinBottom = {border:{bottom:{style:'thin', color:{rgb:'000000'}}}};
    const wrapAlign = {alignment:{wrapText:true, vertical:'top'}};
    const rightAlign = {alignment:{horizontal:'right', vertical:'center'}};

    // Header block
    push(state.company, '', '', {style:{0:{font:{bold:true, sz:16, color:{rgb:NAVY}}}}});
    push(COMPANY.legalName, '', '', {style:{0:{font:{italic:true, sz:9, color:{rgb:GREY}}}}});
    push(COMPANY.addressLine, '', '', {style:{0:{font:{sz:9, color:{rgb:GREY}}}}});
    push(COMPANY.telFax, '', '', {style:{0:{font:{sz:9, color:{rgb:GREY}}}}});
    push(COMPANY.website, '', '', {style:{0:{font:{sz:9, color:{rgb:GREY}}}}});
    push(COMPANY.regGst, '', '', {style:{0:{font:{sz:9, color:{rgb:GREY}}}}});
    push('Contract No:', state.contractNo, '', {style:{0:bold(), 1:normal(thinBottom)}});
    push('Date:', state.date, '', {style:{0:bold(), 1:normal(thinBottom)}});
    push('','','');

    const clientRows = [
      ['1st Owner:', state.owner1], ['NRIC No:', state.nric1],
      ['2nd Owner:', state.owner2], ['NRIC No:', state.nric2],
      ['Contact No: (1st Owner)', state.contact1], ['Contact No: (2nd Owner)', state.contact2],
      ['E-mail:', state.email],
      ['Premise Type:', state.premise], ['Lock No:', state.lock],
      ['Site Address:', state.address]
    ];
    clientRows.forEach(([l,v])=> push(l, v, '', {style:{0:bold(), 1:normal(thinBottom)}}));
    push('','','');

    // Doc title: plain bold black centered heading, no fill - matches the source contracts.
    push(state.docTitle, '', '', {merge:true, style:{0:{font:{bold:true, sz:16, color:{rgb:'000000'}}, alignment:{horizontal:'center', vertical:'center'}}}, height:22});
    const intro = INTRO_LINE(state.company);
    push(intro, '', '', {merge:true, style:{0:{font:{italic:true, sz:9}, alignment:{wrapText:true}}}, height: wrapHeight(intro, 90)});

    const GREYFILL = {patternType:'solid', fgColor:{rgb:'D9D9D9'}};
    push('S/N', 'Description', 'Amt in S($)', {style:{
      0:Object.assign(bold({}),{fill:GREYFILL,alignment:{horizontal:'center',vertical:'center'},border:{top:{style:'thin',color:{rgb:'000000'}},bottom:{style:'thin',color:{rgb:'000000'}}}}),
      1:Object.assign(bold({}),{fill:GREYFILL,alignment:{horizontal:'center',vertical:'center'},border:{top:{style:'thin',color:{rgb:'000000'}},bottom:{style:'thin',color:{rgb:'000000'}}}}),
      2:Object.assign(bold({}),{fill:GREYFILL,alignment:{horizontal:'center',vertical:'center'},border:{top:{style:'thin',color:{rgb:'000000'}},bottom:{style:'thin',color:{rgb:'000000'}}}})
    }});

    SECTIONS.forEach((name, si)=>{
      const items = state.sections[name]||[];
      if(!items.length) return;
      push(String(si+1), name, '', {style:{
        0:Object.assign(bold({font:{bold:true,sz:11}}),{fill:GREYFILL, alignment:{horizontal:'center'}}),
        1:Object.assign(bold({font:{bold:true,sz:11,underline:true}}),{fill:GREYFILL}),
        2:{fill:GREYFILL}
      }});
      items.forEach((item, ii)=>{
        const amountText = item.inc ? 'INC.' : lineAmount(item);
        const fullDesc = (!item.inc && item.qty) ? `${item.desc}  (Qty: ${item.qty}${item.unit? ' '+item.unit:''})` : item.desc;
        push(`${si+1}.${ii+1}`, fullDesc, amountText, {
          style:{
            0:normal({alignment:{horizontal:'center', vertical:'top'}}),
            1:normal(wrapAlign),
            2: item.inc ? normal({alignment:{horizontal:'center',vertical:'top'}}) : Object.assign(normal({alignment:{horizontal:'right',vertical:'top'}}),{numFmt:'#,##0.00'})
          },
          height: wrapHeight(fullDesc, 68)
        });
      });
      push('', 'SUB TOTAL:', sectionSubtotal(name), {style:{
        1: bold({alignment:{horizontal:'right'}}),
        2: Object.assign(bold({}), {numFmt:'#,##0.00', border:{top:{style:'thin',color:{rgb:'000000'}}, bottom:{style:'double',color:{rgb:'000000'}}}})
      }});
      push('','','');
    });

    // Totals block: red bold text in a bordered box, matching the source contracts.
    const t = grandTotals();
    const RED = 'FF0000';
    const boxSide = {style:'thin', color:{rgb:'000000'}};
    const totalStyle = (extra)=> Object.assign({font:{bold:true, name:'Calibri', sz:10, color:{rgb:RED}}, border:{top:boxSide,bottom:boxSide,left:boxSide,right:boxSide}}, extra||{});
    push('', 'TOTAL:', t.total, {style:{1:totalStyle({alignment:{horizontal:'right'}}), 2:totalStyle({numFmt:'#,##0.00'})}});
    push('', 'Discount:', t.discountAmt, {style:{1:totalStyle({alignment:{horizontal:'right'}}), 2:totalStyle({numFmt:'#,##0.00;-#,##0.00'})}});
    push('', 'TOTAL:', t.net, {style:{1:totalStyle({alignment:{horizontal:'right'}}), 2:totalStyle({numFmt:'#,##0.00'})}});
    push('', `${Number(state.gstPct)||0}% GST:`, t.gstAmt, {style:{1:totalStyle({alignment:{horizontal:'right'}}), 2:totalStyle({numFmt:'#,##0.00'})}});
    push('', 'GRAND TOTAL:', t.grand, {style:{
      1:totalStyle({font:{bold:true,sz:11,color:{rgb:RED}},alignment:{horizontal:'right'}}),
      2:totalStyle({font:{bold:true,sz:11,color:{rgb:RED}},numFmt:'#,##0.00'})
    }});
    push('','','');

    push('TERMS AND CONDITION PLEASE REFER BELOW','','',{merge:true, style:{0:bold({font:{bold:true,sz:11}})}});
    push('Payment Terms:','','',{style:{0:bold({font:{bold:true, underline:true}})}});
    state.paymentTerms.forEach(text=>{
      push(text,'','',{merge:true, style:{0:normal(wrapAlign)}, height: wrapHeight(text,90)});
    });
    push('Note:','','',{style:{0:bold()}});
    COMPANY.bankNote.forEach(text=>{
      push('- '+text,'','',{merge:true, style:{0:normal(wrapAlign)}, height: wrapHeight(text,90)});
    });
    push('','','');

    push('TERMS AND CONDITIONS','','',{merge:true, style:{0:bold({font:{bold:true,sz:11}})}});
    state.tnc.forEach((text,i)=>{
      push(`${i+1}. ${text}`,'','',{merge:true, style:{0:normal(wrapAlign)}, height: wrapHeight(text,90)});
    });
    push('','','');
    push('Attended and Managed By:', '', 'Acknowledged & Confirmed by Owner / Date:', {style:{0:bold({font:{bold:true,sz:9}}), 2:bold({font:{bold:true,sz:9}})}});

    const ws = XLSX.utils.aoa_to_sheet(rows);
    ws['!cols'] = [{wch:9},{wch:82},{wch:16}];
    ws['!merges'] = merges;
    ws['!rows'] = [];
    Object.entries(rowHeights).forEach(([r,h])=>{ ws['!rows'][Number(r)] = {hpt:h}; });
    Object.entries(styles).forEach(([k,st])=>{
      const [rr,cc] = k.split(',').map(Number);
      const ref = XLSX.utils.encode_cell({r:rr,c:cc});
      if(!ws[ref]) ws[ref] = {t:'s', v:''};
      ws[ref].s = st;
    });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, safeSheetName(state.docTitle));
    return wb;
  }

  async function exportToExcel(){
    if(typeof XLSX === 'undefined'){
      toast('The Excel library failed to load. Check your connection and try again.', true);
      return;
    }
    const btn = document.getElementById('btnExport');
    btn.disabled = true;
    try{
      const wb = buildWorkbook();
      const wbout = XLSX.write(wb, {bookType:'xlsx', type:'array'});
      const blob = new Blob([wbout], {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      const clientPart = (state.owner1 || 'Client').replace(/[\\\/:*?"<>|]/g,'').trim();
      const filename = `${(state.docTitle||'Quotation')} - ${clientPart} - ${state.date||''}.xlsx`.replace(/\s+/g,' ');

      const downloadsNS = (window.claude && window.claude.use) ? await window.claude.use('downloads') : null;
      if(!downloadsNS){
        toast('File export is unavailable in this view. Try opening the page directly.', true);
        return;
      }
      const result = await downloadsNS.save({filename, data: blob});
      toast(result.status === 'delivered' ? 'Quotation delivered.' : 'Quotation saved.');
    }catch(err){
      if(err && err.code === 'declined'){ /* user said no, no toast needed */ }
      else if(err && err.code){
        toast('Could not save the file: ' + err.code, true);
      }else{
        toast('Something went wrong building the Excel file.', true);
        console.error(err);
      }
    }finally{
      btn.disabled = false;
    }
  }
  document.getElementById('btnExport').addEventListener('click', exportToExcel);

  /* ---------------- init ---------------- */
  renderFields();
  wireFields();
  renderSections();
  renderTerms();
  renderDirectory('');
})();
