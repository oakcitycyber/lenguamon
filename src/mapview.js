// ===== the map of Iran in the START menu, and the Cyrus the Great sightseeing mode =====
const GEO = {
  YAZD: [54.37, 31.9], ISFAHAN: [51.67, 32.65], SHIRAZ: [52.53, 29.6], PERSEPOLIS: [52.89, 29.93], PASARGADAE: [53.17, 30.2],
  KASHAN: [51.44, 33.98], TEHRAN: [51.39, 35.69], DAMAVAND: [52.11, 35.95],
};
const IRAN = [[44.8, 39.7], [46.5, 38.9], [47.9, 39.6], [48.4, 39.4], [48.0, 38.8], [48.9, 38.4], [49.0, 37.6], [50.2, 37.4], [51.5, 36.8], [53.9, 36.9], [54.0, 37.4], [55.5, 38.0], [57.3, 38.0], [59.2, 37.5], [60.4, 36.6], [61.2, 36.6], [61.1, 35.6], [60.7, 34.3], [60.9, 33.5], [60.6, 32.9], [60.8, 31.5], [61.7, 31.4], [61.8, 30.8], [60.9, 29.8], [61.6, 28.8], [62.7, 28.3], [62.8, 27.3], [63.3, 26.7], [61.6, 25.2], [59.6, 25.4], [58.0, 25.6], [57.3, 25.9], [57.0, 27.0], [56.3, 27.2], [55.5, 26.7], [54.7, 26.5], [53.5, 26.8], [52.5, 27.4], [51.4, 27.9], [50.8, 28.8], [50.1, 29.9], [49.5, 30.0], [48.9, 30.4], [48.0, 30.5], [47.7, 31.0], [47.7, 31.9], [47.0, 32.4], [46.1, 33.0], [45.4, 33.9], [45.6, 34.6], [45.9, 35.1], [46.2, 35.8], [45.4, 36.0], [44.8, 37.2], [44.2, 37.9], [44.4, 38.4], [44.0, 39.4]];
const CASPIAN = [[48.9, 38.4], [48.8, 39.2], [49.4, 40.0], [50.3, 40.4], [50.0, 41.0], [49.5, 41.6], [52.8, 41.6], [52.9, 40.6], [53.0, 40.0], [53.6, 39.4], [53.9, 38.6], [54.0, 37.4], [53.9, 36.9], [51.5, 36.8], [50.2, 37.4], [49.0, 37.6]];
const PX = ([lon, lat]) => [((lon - 43.5) * 10).toFixed(1), ((40.5 - lat) * 10).toFixed(1)];
const lerpGeo = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
// where on the map of Iran the player is right now
function whereNow() {
  let map = S.map, y = S.y;
  const src = MAP_SRC[map];
  if (src && src.exit) { const d = MAPS[src.exit.to].doors[src.exit.door]; map = src.exit.to; y = d.y; }
  const t = (hi, lo) => clamp((hi - y) / (hi - lo), 0, 1);
  if (map === 'world') {
    if (y >= 63) return { name: 'YAZD', geo: GEO.YAZD };
    if (y >= 48) return { name: 'YAZD DESERT ROAD', geo: lerpGeo(GEO.YAZD, GEO.ISFAHAN, t(62, 48)) };
    if (y >= 26) return { name: 'ISFAHAN', geo: GEO.ISFAHAN };
    if (y >= 13) return { name: 'SHIRAZ ROAD', geo: lerpGeo(GEO.ISFAHAN, GEO.SHIRAZ, t(25, 13)) };
    return { name: 'SHIRAZ', geo: GEO.SHIRAZ };
  }
  if (y >= 66) return { name: y >= 79 ? 'PASARGADAE, ZAGROS MOUNTAINS' : y >= 70 ? 'PERSEPOLIS, ZAGROS MOUNTAINS' : 'ZAGROS MOUNTAINS', geo: y >= 79 ? GEO.PASARGADAE : y >= 70 ? GEO.PERSEPOLIS : lerpGeo(GEO.PERSEPOLIS, GEO.KASHAN, t(69, 66) * .3) };
  if (y >= 46) return { name: 'KASHAN', geo: GEO.KASHAN };
  if (y >= 29) return { name: 'DASHT-E KAVIR', geo: lerpGeo(GEO.KASHAN, GEO.TEHRAN, t(45, 29)) };
  return { name: 'TEHRAN', geo: GEO.TEHRAN };
}
function markVisited() {
  if (!S || !S.map) return; const v = S.visited || (S.visited = {});
  const n = whereNow().name.split(',')[0]; if (GEO[n] && !v[n]) v[n] = 1;
}
function mapSvg() {
  const here = whereNow(), v = S.visited || {}, all = !!S.cyrus;
  const poly = pts => pts.map(p => PX(p).join(',')).join(' ');
  const mtn = (pts) => pts.map(p => { const [x, y] = PX(p).map(Number); return `<path d="M${x - 2.4},${y + 1.6} L${x},${y - 2} L${x + 2.4},${y + 1.6} Z" fill="#9a8468" stroke="#6a5640" stroke-width=".4"/>`; }).join('');
  const zagros = [[46.5, 35.5], [47.3, 34.6], [48.2, 33.8], [49.0, 33.0], [49.8, 32.2], [50.6, 31.4], [51.4, 30.7], [52.2, 29.9], [53.4, 29.0], [54.6, 28.3], [56.0, 27.8]];
  const alborz = [[49.5, 36.6], [50.5, 36.3], [51.5, 36.1], [52.6, 36.0], [53.8, 36.4], [55.0, 36.9], [56.2, 37.2]];
  const dots = (cx, cy, rx, ry, n) => { const r = rng(n); let s = ''; for (let i = 0; i < n; i++) { const a = r() * 6.28, d = Math.sqrt(r()); s += `<circle cx="${(cx + Math.cos(a) * rx * d).toFixed(1)}" cy="${(cy + Math.sin(a) * ry * d).toFixed(1)}" r=".55" fill="#c8a468"/>`; } return s; };
  const [kx, ky] = PX([54.2, 34.4]).map(Number), [lx, ly] = PX([58.4, 30.6]).map(Number);
  const route = ['YAZD', 'ISFAHAN', 'SHIRAZ', 'PERSEPOLIS', 'PASARGADAE', 'KASHAN', 'TEHRAN'].map(k => PX(GEO[k]).join(',')).join(' ');
  const city = (k, label, dx = 3, dy = 1.4, big) => { const [x, y] = PX(GEO[k]); const seen = all || v[k]; return `<circle cx="${x}" cy="${y}" r="${big ? 2.6 : 1.9}" fill="${seen ? '#c82838' : '#8a8478'}" stroke="#2b1d16" stroke-width=".6"/><text x="${+x + dx}" y="${+y + dy}" font-size="${big ? 5.4 : 4.4}" font-weight="700" fill="${seen ? '#2b1d16' : '#8a8478'}" font-family="ui-monospace,monospace">${label}</text>`; };
  const [hx, hy] = PX(here.geo);
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 160" class="mapsvg">
    <rect width="200" height="160" fill="#8cc0d4"/>
    <rect width="200" height="160" fill="#e2d2a8" opacity=".55"/>
    <polygon points="${poly(CASPIAN)}" fill="#8cc0d4" stroke="#4a7a90" stroke-width=".5"/>
    <polygon points="${poly(IRAN)}" fill="#f2e4c0" stroke="#5a4028" stroke-width="1"/>
    <path d="M${PX([50.4, 29.2]).join(',')} Q${PX([53, 26.2]).join(',')} ${PX([56.4, 26.4]).join(',')}" fill="none" stroke="#8cc0d4" stroke-width="0"/>
    ${dots(kx, ky, 16, 9, 70)}${dots(lx, ly, 12, 14, 60)}
    <text x="${kx - 14}" y="${ky + 1}" font-size="3.6" fill="#a07c40" font-family="ui-monospace,monospace" font-style="italic">DASHT-E KAVIR</text>
    <text x="${lx - 9}" y="${ly + 1}" font-size="3.6" fill="#a07c40" font-family="ui-monospace,monospace" font-style="italic">DASHT-E LUT</text>
    ${mtn(zagros)}${mtn(alborz)}
    <text x="${PX([47.2, 33.2])[0]}" y="${PX([47.2, 33.2])[1]}" font-size="3.6" fill="#6a5640" font-family="ui-monospace,monospace" font-style="italic" transform="rotate(38 ${PX([47.2, 33.2]).join(' ')})">ZAGROS</text>
    <text x="${PX([51.4, 37.1])[0]}" y="${PX([51.4, 37.1])[1]}" font-size="3.6" fill="#6a5640" font-family="ui-monospace,monospace" font-style="italic">ALBORZ</text>
    <text x="${PX([50.0, 39.4])[0]}" y="${PX([50.0, 39.4])[1]}" font-size="4" fill="#2e5a70" font-family="ui-monospace,monospace" font-style="italic">CASPIAN SEA</text>
    <text x="${PX([49.4, 26.6])[0]}" y="${PX([49.4, 26.6])[1]}" font-size="4" fill="#2e5a70" font-family="ui-monospace,monospace" font-style="italic">PERSIAN GULF</text>
    <polyline points="${route}" fill="none" stroke="#8a3a2a" stroke-width="1" stroke-dasharray="2 1.4"/>
    ${(() => { const [x, y] = PX(GEO.DAMAVAND); return `<path d="M${x - 3.2},${+y + 2} L${x},${y - 3} L${+x + 3.2},${+y + 2} Z" fill="#f4f2ec" stroke="#6a5640" stroke-width=".5"/>`; })()}
    ${city('TEHRAN', 'TEHRAN', -22, 1.8, true)}${city('KASHAN', 'KASHAN', -17.5, 1.4)}${city('ISFAHAN', 'ISFAHAN', -20.5, 1.4)}${city('YAZD', 'YAZD', 3, 1.4)}
    ${city('SHIRAZ', 'SHIRAZ', -16, 3.4)}${city('PERSEPOLIS', 'PERSEPOLIS', 3, 2.6)}${city('PASARGADAE', 'PASARGADAE', 3, -1.4)}
    <circle cx="${hx}" cy="${hy}" r="4.2" fill="none" stroke="#e8203a" stroke-width="1.2"><animate attributeName="r" values="2.6;5.4;2.6" dur="1.2s" repeatCount="indefinite"/></circle>
    <circle cx="${hx}" cy="${hy}" r="1.6" fill="#e8203a"/>
  </svg>`;
}
const DESTS = [
  ['YAZD', 'world', 9, 71], ['ISFAHAN', 'world', 9, 32], ['SHIRAZ', 'world', 9, 8],
  ['PERSEPOLIS', 'north', 9, 73], ['KASHAN', 'north', 9, 58], ['TEHRAN', 'north', 9, 20],
];
async function mapScreen() {
  const el = document.createElement('div'); el.className = 'layer mapv show'; $('#screen').appendChild(el);
  const here = whereNow();
  el.innerHTML = `<div class="mapwrap">${mapSvg()}<div class="map-cap">YOU ARE HERE: <b>${esc(here.name)}</b>${S.cyrus ? '<br><small>A: TRAVEL · B: BACK</small>' : '<br><small>B: BACK</small>'}</div></div>`;
  SND.fx('select');
  const r = await new Promise(res => { const h = b => { if (b === 'b' || b === 'start' || (b === 'a' && !S.cyrus)) { popH(h); res(null); } else if (b === 'a') { popH(h); res('travel'); } }; pushH(h); });
  if (r === 'travel') {
    await say('Where would Your Majesty like to go?', { keep: true });
    const i = await choose(DESTS.map(d => d[0]), { cls: 'travel' }); hideText();
    el.remove();
    if (i >= 0) { const [, m, x, y] = DESTS[i]; SND.fx('door'); await fade(true, 300); placePlayer(m, x, y, 'down'); writeSave(); drawWorld(); await fade(false, 300); return 'moved'; }
    return;
  }
  SND.fx('cancel'); el.remove();
}

// ---- Cyrus the Great: name your hero this to unlock every road, word and Lenguamon ----
const isCyrusName = n => norm(n).replace(/\s/g, '') === 'cyrusthegreat';
function evolvedMon(w, lvl) {
  const m = { key: w.key, lvl, xp: 0, hp: maxHp(lvl) };
  for (let i = 0; i < 2 && EVO[m.key]; i++) { m.base = m.base || m.key; m.key = EVO[m.key]; m.stage = (m.stage || 0) + 1; }
  return m;
}
function setupCyrus() {
  S.cyrus = true; S.daftar = 99;
  Object.assign(S.flags, { starter: true, b1: true, b2: true, b3: true, b4: true, b5: true, ending: true, noEnc: true });
  for (const w of WORDS) { S.caught[w.key] = true; S.seen[w.key] = true; }
  const team = [evolvedMon(WORDS.find(w => w.tr0 === 'salam'), 60)];
  const used = new Set([SPECIES_BY_ID.mouse.id]);
  for (const w of WORDS.slice().sort((a, b) => SPECIES.indexOf(b.sp) - SPECIES.indexOf(a.sp))) {
    if (team.length >= 6) break; if (used.has(w.sp.id) || !EVO[w.key]) continue;
    used.add(w.sp.id); team.push(evolvedMon(w, 60));
  }
  S.team = team; S.visited = Object.fromEntries(Object.keys(GEO).map(k => [k, 1]));
}
