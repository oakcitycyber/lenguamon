// ===== LENGUAMON UI: text box, menus, fades, Persian markup =====
const F = (fa, tr) => `<span class="fa"><span class="fs" dir="rtl" lang="fa">${esc(fa)}</span><span class="ft">${esc(tr)}</span></span>`;
// E(): an English phrase with its Persian meaning underneath (English mode); PF(): Persian text inline
const E = (en, fa) => `<span class="fa en-w"><span class="es">${esc(en)}</span>${fa ? `<span class="ep" dir="rtl" lang="fa">${esc(fa)}</span>` : ''}</span>`;
// a line in English with its Persian translation underneath (the professor's instructions)
const BI = (en, fa) => `${en}<span class="bi-fa" dir="rtl" lang="fa">${esc(fa)}</span>`;
const PF = fa => `<span class="pi" dir="rtl" lang="fa">${esc(fa)}</span>`;
const W = w => LANG === 'en' ? E(splitAlts(w.tr)[0], '') : F(w.fa, splitAlts(w.tr)[0]);
// a word's meaning, as shown to the player (English for Persian learners, Persian for English learners)
const M = w => LANG === 'en' ? PF(w.en0) : esc(w.en0);
const DAF = () => (LANG === 'en' ? 'NOTEBOOK' : 'DAFTAR');
const B = s => `<b>${esc(s)}</b>`;
const nm = () => esc(S ? S.name : '');

function speedMs() { return [8, 22, 40][OPTS.speed] ?? 22; }

// typewriter that reveals plain text char by char and Persian blocks whole
function typeInto(el, html) {
  el.innerHTML = html;
  const units = [];
  (function walk(n) {
    for (const ch of [...n.childNodes]) {
      if (ch.nodeType === 3) { units.push({ t: ch, s: ch.textContent }); ch.textContent = ''; }
      else if (ch.classList && ch.classList.contains('fa')) { ch.style.visibility = 'hidden'; units.push({ e: ch }); }
      else if (ch.tagName === 'IMG') { ch.style.visibility = 'hidden'; units.push({ e: ch }); }
      else walk(ch);
    }
  })(el);
  let ui = 0, ci = 0, done = false, timer = null, n = 0;
  const finish = () => { for (const u of units) { if (u.t) u.t.textContent = u.s; else u.e.style.visibility = 'visible'; } done = true; clearInterval(timer); };
  const p = new Promise(res => {
    const tick = () => {
      if (done) { res(); return; }
      const u = units[ui]; if (!u) { finish(); res(); return; }
      if (u.e) { u.e.style.visibility = 'visible'; ui++; SND.fx('blip'); return; }
      ci++; u.t.textContent = u.s.slice(0, ci); if (++n % 3 === 0) SND.fx('blip');
      if (ci >= u.s.length) { ui++; ci = 0; }
    };
    timer = setInterval(() => { tick(); if (done) { clearInterval(timer); res(); } }, speedMs());
  });
  return { p, skip: () => { if (!done) { finish(); } }, isDone: () => done };
}

const TB = () => $('#textbox');
// say(pages): each page is html. Resolves after the last page is acknowledged.
// opts.keep: leave last page visible (for a question + menu)
async function say(pages, opts = {}) {
  if (!Array.isArray(pages)) pages = [pages];
  const box = TB(), body = box.querySelector('.tb-body'), arrow = box.querySelector('.tb-arrow');
  box.classList.add('show');
  for (let i = 0; i < pages.length; i++) {
    arrow.classList.remove('show');
    const tw = typeInto(body, pages[i]);
    const last = i === pages.length - 1;
    await new Promise(res => {
      let ready = false;
      const h = b => {
        if (b !== 'a' && b !== 'b') return;
        if (!tw.isDone()) { tw.skip(); return; }
        if (ready) { popH(h); SND.fx('blip'); res(); }
      };
      pushH(h);
      const waitDone = setInterval(() => {
        if (tw.isDone()) {
          clearInterval(waitDone); ready = true;
          if (last && opts.keep) { popH(h); res(); return; }
          arrow.classList.add('show');
          if (opts.auto) setTimeout(() => { if (handlers.includes(h)) { popH(h); res(); } }, opts.auto);
        }
      }, 16);
    });
  }
  arrow.classList.remove('show');
  if (!opts.keep) box.classList.remove('show');
}
function hideText() { TB().classList.remove('show'); }

// generic vertical/2-column menu. items: strings or {html, disabled}
function choose(items, opts = {}) {
  return new Promise(res => {
    const el = document.createElement('div');
    el.className = 'box menu ' + (opts.cls || '');
    Object.assign(el.style, opts.style || {});
    const cols = opts.cols || 1;
    el.style.gridTemplateColumns = `repeat(${cols}, auto)`;
    const rows = items.map((it, i) => {
      const d = document.createElement('div'); d.className = 'mi' + (it.disabled ? ' dis' : '');
      d.innerHTML = `<span class="cur">▶</span><span>${typeof it === 'string' ? esc(it) : it.html}</span>`;
      d.addEventListener('pointerdown', e => { e.stopPropagation(); if (it.disabled) return; idx = i; draw(); finish(i); });
      el.appendChild(d); return d;
    });
    (opts.parent || $('#screen')).appendChild(el);
    let idx = opts.start || 0;
    const draw = () => rows.forEach((r, i) => r.classList.toggle('sel', i === idx));
    draw();
    const finish = v => { popH(h); el.remove(); res(v); };
    const h = b => {
      const n = items.length;
      if (b === 'up') idx = (idx - cols + n) % n; else if (b === 'down') idx = (idx + cols) % n;
      else if (b === 'left' && cols > 1) idx = (idx - 1 + n) % n; else if (b === 'right' && cols > 1) idx = (idx + 1) % n;
      else if (b === 'a') { if (items[idx].disabled) { SND.fx('bump'); return; } SND.fx('select'); finish(idx); return; }
      else if ((b === 'b' || (b === 'start' && opts.startCloses)) && opts.cancel !== false) { SND.fx('cancel'); finish(-1); return; }
      else return;
      SND.fx('blip'); draw();
      if (opts.onMove) opts.onMove(idx);
    };
    pushH(h);
  });
}
async function ask(q, yes = 'YES', no = 'NO') {
  await say(q, { keep: true });
  const r = await choose([yes, no], { cls: 'yn' });
  hideText();
  return r === 0;
}
function fade(on, ms = 250) { const f = $('#fade'); f.style.transitionDuration = ms + 'ms'; f.classList.toggle('on', on); return sleep(ms); }
async function flash(n = 3) { const f = $('#flash'); for (let i = 0; i < n; i++) { f.classList.add('on'); await sleep(70); f.classList.remove('on'); await sleep(70); } }
function waitA() { return new Promise(res => { const h = b => { if (b === 'a' || b === 'b' || b === 'start') { popH(h); res(b); } }; pushH(h); }); }

// text input inside the screen (name entry); resolves with the string
function textInput(label, max = 10) {
  return new Promise(res => {
    const el = document.createElement('div'); el.className = 'box namebox';
    el.innerHTML = `<div class="nb-l">${label}</div><input maxlength="${max}" autocomplete="off" autocapitalize="characters" spellcheck="false"><div class="btnrow"><button class="okbtn">OK</button></div>`;
    $('#screen').appendChild(el);
    const inp = el.querySelector('input'); setTimeout(() => inp.focus(), 50);
    const block = () => { }; pushH(block);
    const done = () => { const v = inp.value.trim().toUpperCase().replace(/[^A-Z0-9 \-]/g, ''); if (!v) { inp.focus(); return; } SND.fx('select'); popH(block); el.remove(); res(v); };
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); done(); } e.stopPropagation(); });
    el.querySelector('.okbtn').addEventListener('click', done);
  });
}
