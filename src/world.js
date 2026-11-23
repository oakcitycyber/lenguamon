// ===== LENGUAMON world: maps, NPCs, movement, menus =====
const MAP_SRC = {
  world: {
    rows: [
      // SHIRAZ: Eram-style garden and the tomb of Hafez
      'TTTTTTTTTTTTTTTTTTTT', 'TT.T.T.T.NN.T.T.T.TT', 'T*.*.*.*.GG.*.*.*.*T', 'T........3=l.......T', 'T.~~~~.T.==.T.~~~~.T',
      'T.~~~~.T.==.T.~~~~.T', 'T*.....T.==.T.....*T', 'TP.**..T.==.T..**.PT', 'T.......S==........T', 'T*~~~~*..==..*~~~~*T',
      'T*~~~~*..==..*~~~~*T', 'T........==........T', 'TTTTTTTT.==.TTTTTTTT',
      // ROUTE 3: Shiraz road
      'T::::*...==...*::::T', 'T::::....==....::::T', 'T..LL....==a...LL..T', 'T.......:==:.......T', 'T*::::..:==:..::::*T',
      'T*::::...==...::::*T', 'T...R....==....R...T', 'T.::::...==...::::.T', 'TP::::...==...::::PT', 'T.::::*..==..*::::.T',
      'T........==........T', 'T..S.....==.....o..T',
      'TFFFFFFFF2FFFFFFFFFT',
      // ISFAHAN: bazaar, Shah Mosque, Si-o-se-pol over the Zayandeh river
      'T,AAA,,,,==,,,,AAA,T', 'T,KKK,,q,==,,,,KKK,T', 'T,,,,,,,,==,,,,,,,,T', 'T::::,,,,==,,IOOI,,T', 'T::::,,,,==,,IVVI,,T',
      'T::::,,,,==,,IVVI,,T', 'T,,,,,,S,==,,,,,,,,T', 'T~~~~~~~UBBU~~~~~~~T', 'T~~~~~~~UBBU~~~~~~~T', 'T~~~~~~~UBBU~~~~~~~T',
      'T,,,,,,,,==,,,,,,,,T', 'T::::,,R,==,R,,::::T', 'T::::,,,,==,,e,::::T', 'T,AAA,,,,==,,,,AAA,T', 'T,KKK,,,,==,,,,KKK,T',
      'T,,,,::::==::::,,,,T', 'T,,R,::::==::::,R,,T', 'T,,,,,,,,==,,,,,,,,T', 'T::::,,,,==,,i,::::T', 'T::::,,L,==,,,L::::T',
      'TT,,,,,,,==,,,,,,,TT',
      'TFFFFFFFF1FFFFFFFFFT',
      // ROUTE 1: Yazd desert road
      'T,,,J,,,,==,,,,J,,,T', 'T::::,,,,==,,,,::::T', 'T::::,,,,==,,g,::::T', 'T::::,,,,==,,,,::::T', 'T,,,,,J,,==,,J,,,,,T',
      'TJ,,:::::==:::::,,JT', 'T,,,:::::==:::::,,,T', 'T,,,:::::==:::::,,,T', 'T,,,,R,,,==,,,R,,,,T', 'TJ,,,,,,,==,,,,,,,JT',
      'T::::,,v,==,,,,::::T', 'T::::,,,,==,,,,::::T', 'T::::,,S,==,,,,::::T', 'T,,,,,,,,==,,,,,,,,T',
      'TFFFFFFFF9FFFFFFFFFT',
      // YAZD: windcatchers and the Amir Chakhmaq complex
      'T,,,,J,,,==,,,J,,,,T', 'T,,,,,,,,==,,,,,,,,T', 'T,,Y,,,,,==,,,Y,,Y,T', 'T,QQQQ,,,==,QQQQQQ,T', 'T,#hh#,,,==,#h##h#,T',
      'T,#H##,,,==,##M###,T', 'T,,=,,,,,==,,,=,,,,T', 'T,,============,,,,T', 'T,S,,,,,,==,,,,S,,,T', 'TJ,,,,,,,==,,~~~,,JT',
      'T,,s,,,,,==,,~~~,,,T', 'T,,,,,,,,==,,,,,,,,T', 'T,,,,,,,,==,,,nn,,,T', 'TIWWWWI,,==,^^^^^^,T', 'TIWWWWI,,==,#h##h#,T',
      'TIWWWWI,,==,##C###,T', 'T,,,,,,,,==,,,=,,,,T', 'T,J,,,,,,=======,,JT', 'TTTTTTTTTTTTTTTTTTTT',
    ],
    bases: { 1: '=', 2: '=', 3: '=', 9: '=', l: '.', a: '.', o: '.', q: ',', e: ',', i: ',', g: ',', v: ',', s: ',' },
    signs: [
      `SHIRAZ ${F('شیراز', 'shiraz')}<br>City of poets and gardens. Up ahead is the tomb of Hafez ${F('آرامگاه حافظ', 'aramgah-e hafez')}, seized by THE CENSOR!`,
      `${ROUTE_NAMES[3]}<br>Wild FOOD, FEELING, COLOR, BODY and WEATHER words bloom here.`,
      `ISFAHAN ${F('اصفهان نصف جهان', 'esfahan nesf-e jahan')}<br>"Isfahan is half the world!" The Shah Mosque is to the east. Si-o-se-pol bridge crosses the Zayandeh river ahead.`,
      `${ROUTE_NAMES[1]}<br>GREETINGS, QUESTIONS and CLASSROOM words hide in the desert brush.`,
      `YAZD ${F('یزد', 'yazd')}<br>City of windcatchers ${F('بادگیر', 'badgir')}. The Amir Chakhmaq complex stands to the south-west.`,
      `PROFESSOR HAYDEH'S SCHOOL ${F('مدرسه', 'madreseh')}<br>Lenguamon research and Persian lessons.`,
    ],
    doors: { H: { to: 'house', tx: 4, ty: 6 }, M: { to: 'school', tx: 4, ty: 6 }, C: { to: 'teahouse', tx: 4, ty: 6 } },
  },
  house: { rows: ['wwwwwwwwww', 'wbbfffffmw', 'wfcccccffw', 'wfcktkcfxw', 'wfcccccffw', 'wffffffffw', 'wpffffffpw', 'wwwwEwwwww'], bases: { x: 'f' }, exit: { to: 'world', door: 'H' } },
  school: { rows: ['wwwwwwwwww', 'wZZZZbbbpw', 'wfffyffffw', 'wffffffffw', 'wdfdfdfdfw', 'wffffffzfw', 'wdfdfdffpw', 'wwwwEwwwww'], bases: { y: 'f', z: 'f' }, exit: { to: 'world', door: 'M' } },
  teahouse: { rows: ['wwwwwwwwww', 'wmbbbbmbbw', 'wffffrfffw', 'wuuuuuuffw', 'wccccccccw', 'wctccctcjw', 'wccccccccw', 'wwwwEwwwww'], bases: { r: 'f', j: 'c' }, exit: { to: 'world', door: 'C' } },
};
const MAPS = {};
const NPC_POS = {}; // marker -> {map,x,y}
function buildMaps() {
  for (const [id, src] of Object.entries(MAP_SRC)) {
    const grid = src.rows.map(r => r.split(''));
    const m = { ...src, id, w: grid[0].length, h: grid.length, grid, signs: [], doors: {} };
    let si = 0;
    for (let y = 0; y < m.h; y++) for (let x = 0; x < m.w; x++) {
      const ch = grid[y][x];
      if (src.bases && src.bases[ch]) { NPC_POS[ch] = { map: id, x, y }; grid[y][x] = src.bases[ch]; }
      else if (ch === 'S') { m.signs.push({ x, y, text: (src.signs || [])[si++] || '' }); }
      else if (src.doors && src.doors[ch]) { m.doors[ch] = { x, y, ...src.doors[ch] }; }
    }
    m.canvas = renderMap(m);
    MAPS[id] = m;
  }
}
function regionOf(map, y) { if (map !== 'world') return 0; if (y >= 63 || y <= 12) return 0; if (y >= 48) return 1; if (y >= 26) return 2; return 3; }

// ---- NPCs ----
const NPCS = [];
function npc(marker, def) { NPCS.push({ marker, dir: 'down', ...def }); }
function npcPos(n) { const p = NPC_POS[n.marker]; if (!p) return null; const o = n.where ? n.where() : null; return o ? { map: p.map, x: o[0], y: o[1] } : p; }
function npcAt(map, x, y) { for (const n of NPCS) { if (n.hidden && n.hidden()) continue; const p = npcPos(n); if (p && p.map === map && p.x === x && p.y === y) return n; } return null; }

// ---- player & world state ----
const PL = { x: 0, y: 0, dir: 'down', moving: false, t0: 0, fx: 0, fy: 0, step: 0, walkPh: 0 };
const DIRS = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
const MOVE_MS = 170;
let curMap = null, worldBusy = false, encounterCooldown = 0;
const cv = () => $('#cv');
function solidAt(m, x, y) {
  if (x < 0 || y < 0 || x >= m.w || y >= m.h) return true;
  const t = TILE[m.grid[y][x]]; if (!t || t.solid) return true;
  if (npcAt(m.id, x, y)) return true;
  return false;
}
function placePlayer(map, x, y, dir) { S.map = map; S.x = x; S.y = y; S.dir = dir || S.dir; curMap = MAPS[map]; PL.x = x; PL.y = y; PL.dir = S.dir; PL.moving = false; musicForPlace(); }
function musicForPlace() { const r = regionOf(S.map, S.y); SND.music(r === 0 ? 'town' : 'route'); }

function drawWorld() {
  const c = cv().getContext('2d'); c.imageSmoothingEnabled = false;
  R(c, 0, 0, 160, 144, '#101018');
  if (!curMap) return;
  let px = PL.x * TS, py = PL.y * TS;
  if (PL.moving) { const k = clamp((performance.now() - PL.t0) / MOVE_MS, 0, 1); const [dx, dy] = DIRS[PL.dir]; px = (PL.x - dx * (1 - k)) * TS; py = (PL.y - dy * (1 - k)) * TS; }
  const mw = curMap.w * TS, mh = curMap.h * TS;
  let cx = px - 72, cy = py - 64;
  cx = mw <= 160 ? (mw - 160) / 2 : clamp(cx, 0, mw - 160);
  cy = mh <= 144 ? (mh - 144) / 2 : clamp(cy, 0, mh - 144);
  cx = Math.round(cx); cy = Math.round(cy);
  c.drawImage(curMap.canvas, -cx, -cy);
  const ents = [];
  for (const n of NPCS) { if (n.hidden && n.hidden()) continue; const p = npcPos(n); if (p && p.map === curMap.id) ents.push({ y: p.y * TS, draw: () => drawChar(c, p.x * TS - cx, p.y * TS - cy - 2, LOOKS[n.look], n.dir, 0) }); }
  let step = 0; if (PL.moving) { const k = (performance.now() - PL.t0) / MOVE_MS; step = k < 0.5 ? (PL.walkPh ? 1 : 2) : 0; }
  ents.push({ y: py, draw: () => drawChar(c, Math.round(px - cx), Math.round(py - cy - 2), LOOKS.player, PL.dir, step) });
  ents.sort((a, b) => a.y - b.y).forEach(e => e.draw());
  // tall grass over feet
  const t = curMap.grid[PL.y] && curMap.grid[PL.y][PL.x];
  if (t === ':' && !PL.moving) { c.save(); c.beginPath(); c.rect(px - cx, py - cy + 10, 16, 6); c.clip(); c.drawImage(curMap.canvas, -cx, -cy); c.restore(); }
}
let rafOn = false;
function loop() {
  if (worldActive()) tickWorld();
  if (!$('#battle').classList.contains('show') && !$('#title').classList.contains('show')) drawWorld();
  requestAnimationFrame(loop);
}
function worldActive() { return handlers[handlers.length - 1] === worldH && !worldBusy; }
function tickWorld() {
  const now = performance.now();
  if (PL.moving) {
    if (now - PL.t0 >= MOVE_MS) { PL.moving = false; onStep(); }
    else return;
  }
  if (!worldActive()) return;
  for (const d of ['up', 'down', 'left', 'right']) {
    if (!held[d]) continue;
    PL.dir = d; S.dir = d;
    const [dx, dy] = DIRS[d], nx = PL.x + dx, ny = PL.y + dy;
    if (solidAt(curMap, nx, ny)) { if (now - (PL.lastBump || 0) > 350) { SND.fx('bump'); PL.lastBump = now; } return; }
    PL.x = nx; PL.y = ny; S.x = nx; S.y = ny; PL.moving = true; PL.t0 = now; PL.walkPh ^= 1;
    return;
  }
}
async function onStep() {
  const ch = curMap.grid[PL.y][PL.x];
  // doors
  const door = Object.values(curMap.doors || {}).find(d => d.x === PL.x && d.y === PL.y);
  if (door) { await run(() => warp(door.to, door.tx, door.ty, 'up')); return; }
  if (TILE[ch] && TILE[ch].exit && curMap.exit) { const d = MAPS.world.doors[curMap.exit.door]; await run(() => warp('world', d.x, d.y + 1, 'down')); return; }
  // region change music
  musicForPlace();
  // guard / scripted tiles
  if (TILE[ch] && TILE[ch].enc) {
    if (encounterCooldown > 0) { encounterCooldown--; return; }
    if (rand() < 0.13) { await run(() => wildEncounter(regionOf('world', PL.y))); encounterCooldown = 2; }
  }
}
async function warp(to, x, y, dir) {
  SND.fx('door'); await fade(true, 180);
  placePlayer(to, x, y, dir); writeSave(); drawWorld();
  await fade(false, 180);
}
// run a script while the world is paused
async function run(fn) { worldBusy = true; try { await fn(); } finally { worldBusy = false; } }

function worldH(b) {
  if (worldBusy || PL.moving) return;
  if (b === 'a') run(interact);
  else if (b === 'start') run(startMenu);
}
async function interact() {
  const [dx, dy] = DIRS[PL.dir];
  let tx = PL.x + dx, ty = PL.y + dy;
  const t = curMap.grid[ty] && TILE[curMap.grid[ty][tx]];
  if (t && t.counter) { tx += dx; ty += dy; }
  const n = npcAt(curMap.id, tx, ty);
  if (n) { const back = { up: 'down', down: 'up', left: 'right', right: 'left' }; const od = n.dir; n.dir = back[PL.dir]; await n.talk(n); if (!n.fixed) n.dir = n.keepDir ? od : n.dir; writeSave(); return; }
  const sg = (curMap.signs || []).find(s => s.x === tx && s.y === ty);
  if (sg) { await say(sg.text); return; }
}

// ---- team helpers ----
const maxHp = lvl => 12 + lvl * 2;
const monW = m => WORD[m.key];
function makeMon(w) { return { key: w.key, lvl: w.level, xp: 0, hp: maxHp(w.level) }; }
function healTeam() { for (const m of S.team) m.hp = maxHp(m.lvl); }
const lead = () => S.team.find(m => m.hp > 0);
const teamAlive = () => S.team.some(m => m.hp > 0);
function caughtInRoute(r) { return wordsOfRoute(r).filter(w => S.caught[w.key]).length; }
function caughtCount() { return Object.keys(S.caught).filter(k => WORD[k]).length; }
function hpBar(m, max) { const pct = clamp(m.hp / max, 0, 1); const col = pct > 0.5 ? '#38c060' : pct > 0.2 ? '#f0c020' : '#e03030'; return `<span class="hpbar"><i style="width:${(pct * 100).toFixed(1)}%;background:${col}"></i></span>`; }

// ---- start menu and screens ----
async function startMenu() {
  SND.fx('select');
  let idx = 0;
  while (true) {
    const items = [
      { html: 'LENGUADEX', disabled: !S.flags.starter }, { html: 'LENGUAMON', disabled: !S.team.length }, 'DAFTAR', { html: esc(S.name) }, 'SAVE', 'OPTIONS', 'EXIT'];
    const r = await choose(items, { cls: 'startmenu', start: idx, startCloses: true });
    if (r < 0 || r === 6) return;
    idx = r;
    if (r === 0) await dexScreen();
    else if (r === 1) await teamScreen(false);
    else if (r === 2) await say([`DAFTAR ${F('دفتر', 'daftar')} = notebook.<br>You have ${B('x' + S.daftar)}.`, 'In battle, write a weakened wild Lenguamon into your DAFTAR by typing its Persian word. Weaker words are easier to catch!']);
    else if (r === 3) await say([`${B(S.name)}<br>KASHI BADGES: ${['b1', 'b2', 'b3'].map(b => S.flags[b] ? '◆' : '◇').join(' ')}<br>LENGUADEX: ${caughtCount()} / ${WORDS.length}`, `Route 1: ${caughtInRoute(1)}/${wordsOfRoute(1).length} · Route 2: ${caughtInRoute(2)}/${wordsOfRoute(2).length} · Route 3: ${caughtInRoute(3)}/${wordsOfRoute(3).length}<br>Save fades in about ${hoursLeft(S)}h if you stop playing.`]);
    else if (r === 4) { writeSave(); SND.fx('good'); await say([`${esc(S.name)} saved the game!`, 'Your save stays alive as long as you play at least once every 48 hours.']); }
    else if (r === 5) await optionsScreen();
  }
}
async function optionsScreen() {
  let idx = 0;
  while (true) {
    const items = [
      `TRANSLITERATION: ${OPTS.translit ? 'ON' : 'OFF'}`, `MUSIC: ${OPTS.music ? 'ON' : 'OFF'}`, `SOUND FX: ${OPTS.sfx ? 'ON' : 'OFF'}`, `TEXT SPEED: ${['FAST', 'MID', 'SLOW'][OPTS.speed]}`, 'BACK'];
    const r = await choose(items, { cls: 'opts', start: idx });
    if (r < 0 || r === 4) return; idx = r;
    if (r === 0) OPTS.translit = !OPTS.translit;
    if (r === 1) { OPTS.music = !OPTS.music; SND.refresh(); }
    if (r === 2) OPTS.sfx = !OPTS.sfx;
    if (r === 3) OPTS.speed = (OPTS.speed + 1) % 3;
    saveOpts();
  }
}
function dexEntryHtml(w) {
  const caught = S.caught[w.key], seen = S.seen[w.key];
  if (!seen && !caught) return `<div class="dx-d"><div class="dx-q">?</div><div><b>-----</b><br>Not seen yet.<br><small>${ROUTE_NAMES[w.route]}</small></div></div>`;
  const st = S.stats[w.key] || [0, 0];
  return `<div class="dx-d">${monImg(w)}<div><b>${esc(w.word)}</b> <small>Lv${w.level} ${TYPES[w.type].label}</small><br>${W(w)} <small>"${esc(w.en)}"</small><br><small>${esc(w.name)} ${F(speciesOf(w).fa, '')} · ${esc(speciesOf(w).name.toLowerCase())}${caught ? ` · ✓ ${st[0]} ✗ ${st[1]}` : ' · seen'}</small></div></div>`;
}
async function dexScreen() {
  const el = document.createElement('div'); el.className = 'layer dex show'; $('#screen').appendChild(el);
  let idx = 0; const per = 8;
  const draw = () => {
    const w = WORDS[idx]; const start = clamp(idx - 2, 0, WORDS.length - per);
    let list = '';
    for (let i = start; i < start + per; i++) {
      const x = WORDS[i]; const c = S.caught[x.key], s = S.seen[x.key];
      list += `<div class="dx-r${i === idx ? ' sel' : ''}"><span class="cur">▶</span>${String(i + 1).padStart(3, '0')} ${c ? '◆' : s ? '◇' : ' '} ${c || s ? esc(x.word) : '-----'}</div>`;
    }
    el.innerHTML = `<div class="box dx"><div class="dx-h">LENGUADEX <span>◆${caughtCount()} ◇${Object.keys(S.seen).length} / ${WORDS.length}</span></div>${dexEntryHtml(w)}<div class="dx-l">${list}</div><div class="dx-f">↑↓ move · ←→ page · A: add to team · B: back</div></div>`;
  };
  draw();
  await new Promise(res => {
    const h = async b => {
      if (b === 'up') idx = (idx - 1 + WORDS.length) % WORDS.length;
      else if (b === 'down') idx = (idx + 1) % WORDS.length;
      else if (b === 'left') idx = clamp(idx - per, 0, WORDS.length - 1);
      else if (b === 'right') idx = clamp(idx + per, 0, WORDS.length - 1);
      else if (b === 'b' || b === 'start') { SND.fx('cancel'); popH(h); el.remove(); res(); return; }
      else if (b === 'a') {
        const w = WORDS[idx];
        if (!S.caught[w.key]) { SND.fx('bump'); return; }
        if (S.team.some(m => m.key === w.key)) { await say(`${esc(w.name)} is already on your team.`); return; }
        if (S.team.length < 6) { S.team.push(makeMon(w)); SND.fx('good'); await say(`${esc(w.name)} joined your team!`); }
        else {
          await say(`Your team is full. Swap out which Lenguamon for ${esc(w.name)}?`, { keep: true });
          const r = await choose(S.team.map(m => `${monW(m).name} Lv${m.lvl}`), { cls: 'teamsel' }); hideText();
          if (r >= 0) { const old = S.team[r]; S.team[r] = makeMon(w); await say(`${esc(monW(old).name)} went back to the Lenguadex. ${esc(w.name)} joined the team!`); }
        }
        draw(); writeSave(); return;
      } else return;
      SND.fx('blip'); draw();
    };
    pushH(h);
  });
}
async function teamScreen(inBattle) {
  while (true) {
    const items = S.team.map((m, i) => ({ html: `<span class="tm">${monImg(monW(m), 'tiny')}<span>${esc(monW(m).name)} <small>${esc(monW(m).word)}</small><br><small>Lv${m.lvl} ${hpBar(m, maxHp(m.lvl))} ${m.hp}/${maxHp(m.lvl)}</small></span></span>` }));
    const r = await choose(items, { cls: 'team' });
    if (r < 0) return null;
    const m = S.team[r], w = monW(m);
    const sub = await choose(inBattle ? ['SEND OUT', 'INFO', 'CANCEL'] : ['MAKE LEAD', 'INFO', 'CANCEL'], { cls: 'sub' });
    if (sub === 0) {
      if (m.hp <= 0) { await say(`${esc(w.name)} has no energy left!`); continue; }
      if (inBattle) return r;
      S.team.splice(r, 1); S.team.unshift(m); SND.fx('good'); await say(`${esc(w.name)} is now your lead Lenguamon.`); writeSave();
    } else if (sub === 1) {
      await say([`${esc(w.name)} ${W(w)}<br>"${esc(w.en)}" · ${TYPES[w.type].label}`, `Lv${m.lvl} · XP ${m.xp}/${m.lvl * 8}<br>HP ${m.hp}/${maxHp(m.lvl)}`]);
    }
  }
}
