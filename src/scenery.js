// ===== LENGUAMON scenery: extra trees, bushes, rocks and wildflowers, and a living landscape =====
// Decorations are scattered when a map is built, seeded by the map's name so they are always the same.
// Solid ones (trees, bushes, rocks, cacti) are only placed where the open tiles around them stay connected,
// so they never block a path, a door, a sign or a person.

// ---- new solid tiles ----
Object.assign(TILE, {
  'ɷ': { g: gAuto, solid: true, d(c, x, y) { // a round leafy bush
    const r = rng(x * 31 + y * 17), g = ['#4a8a3e', '#3f7c38', '#5a9a46'][(x + y) % 3];
    el(c, 8, 14.6, 6.4, 1.3, 'rgba(0,0,0,.18)');
    el(c, 8, 10, 6.4, 5, g, '#2a5a26', .6); el(c, 4.6, 10.6, 3.2, 2.8, g, '#2a5a26', .5); el(c, 11.6, 10.4, 3.4, 3, g, '#2a5a26', .5);
    el(c, 6.4, 8.2, 2.6, 1.6, 'rgba(255,255,255,.16)');
    if (r() < .45) for (let i = 0; i < 4; i++) el(c, 3.5 + r() * 9, 7.5 + r() * 5, .7, .7, ['#e86a8a', '#f4f0e8', '#f0c040'][(x + i) % 3]);
  } },
  'ʕ': { g: gSand, solid: true, d(c, x, y) { // a dry desert shrub (tumbleweed-like)
    const r = rng(x * 13 + y * 29);
    el(c, 8, 14.4, 5.6, 1.1, 'rgba(70,40,20,.2)');
    c.strokeStyle = '#8a6a3a'; c.lineWidth = .55; c.lineCap = 'round';
    for (let i = 0; i < 14; i++) { const a = -Math.PI * r(), l = 3 + r() * 4; c.beginPath(); c.moveTo(8, 13.6); c.quadraticCurveTo(8 + Math.cos(a) * l * .4, 13.6 + Math.sin(a) * l * .7, 8 + Math.cos(a) * l, 13.6 + Math.sin(a) * l); c.stroke(); }
    for (let i = 0; i < 6; i++) el(c, 3 + r() * 10, 7 + r() * 5, .8, .6, '#9aa060');
  } },
  'ʘ': { g: gAuto, solid: true, d(c, x, y) { // a pair of boulders
    el(c, 8, 14.2, 7, 1.4, 'rgba(0,0,0,.2)');
    c.beginPath(); c.moveTo(2, 14); c.quadraticCurveTo(2, 7, 7, 7); c.quadraticCurveTo(11, 7, 11, 14); c.closePath(); c.fillStyle = '#a49c90'; c.fill(); c.strokeStyle = '#6a645a'; c.lineWidth = .6; c.stroke();
    c.beginPath(); c.moveTo(9, 14.4); c.quadraticCurveTo(9, 10, 12, 10); c.quadraticCurveTo(15, 10, 15, 14.4); c.closePath(); c.fillStyle = '#8e877c'; c.fill(); c.stroke();
    el(c, 5.4, 9, 1.8, .9, 'rgba(255,255,255,.3)'); el(c, 11.5, 11.2, 1, .5, 'rgba(255,255,255,.25)');
  } },
});

// ---- small things you can walk over, painted into the map ----
const DECOR = {
  tuft(c, x, y, r) { for (let i = 0; i < 2; i++) { const bx = 3 + r() * 10, by = 6 + r() * 8; for (let k = -1; k <= 1; k++) blade(c, bx + k * .8, by, 2.4 + r(), k * .9, k ? '#5a8a40' : '#4a7a36', .7); } },
  flowers(c, x, y, r) { const cols = ['#f4f0e8', '#f0c040', '#e86a8a', '#b88ae8']; for (let i = 0; i < 4; i++) { const fx = 2.5 + r() * 11, fy = 3 + r() * 10, col = cols[Math.floor(r() * 4)]; blade(c, fx, fy + 2.4, 2, 0, '#4a7a36', .5); for (let k = 0; k < 5; k++) { const a = k * 1.2566; el(c, fx + Math.cos(a) * .7, fy + Math.sin(a) * .7, .55, .55, col); } el(c, fx, fy, .35, .35, '#c88a20'); } },
  pebbles(c, x, y, r) { for (let i = 0; i < 4; i++) el(c, 2 + r() * 12, 3 + r() * 11, .6 + r() * .7, .4 + r() * .4, ['#a8a090', '#8a8478', '#c0b8a8'][i % 3], 'rgba(60,50,40,.35)', .25); },
  dryshrub(c, x, y, r) { c.strokeStyle = '#9a7a48'; c.lineWidth = .45; const bx = 4 + r() * 8, by = 10 + r() * 4; for (let i = 0; i < 7; i++) { const a = -Math.PI * (.1 + .8 * i / 6); c.beginPath(); c.moveTo(bx, by); c.lineTo(bx + Math.cos(a) * 2.6, by + Math.sin(a) * 2.6); c.stroke(); } },
};
// the routes and parks that get extra scenery: [map, first row, last row]
const SCENERY_ZONES = { world: [[48, 61], [13, 24], [26, 46]], north: [[66, 88], [29, 45], [4, 27]], us: [[48, 61], [13, 24], [26, 46]], usnorth: [[66, 88], [29, 45], [4, 27]], east: [[17, 45]], useast: [[17, 45]] };
// people who move aside after a boss: never wall them in
const MOVED_NPC_SPOTS = [[11, 48], [11, 26], [8, 63], [11, 27]];

function decorateMap(m) {
  const zones = SCENERY_ZONES[m.id]; if (!zones) return;
  const r = rng(hashStr('scenery|' + m.id)), us = m.id.startsWith('us');
  m.decor = [];
  const solid = (x, y) => { if (x < 0 || y < 0 || x >= m.w || y >= m.h) return true; const t = TILE[m.grid[y][x]]; return !t || !!t.solid; };
  // a new solid thing is only allowed if the open tiles around it stay connected to each other,
  // so any path that went through this tile can step around it
  const open = (x, y) => !solid(x, y) || Object.values(m.doors || {}).some(d => d.x === x && d.y === y);
  const safeToBlock = (cx, cy) => {
    const nb = [[1, 0], [-1, 0], [0, 1], [0, -1]].map(([dx, dy]) => [cx + dx, cy + dy]).filter(([x, y]) => open(x, y));
    if (nb.length <= 1) return true;
    const seen = new Set([nb[0].join()]), q = [nb[0]];
    while (q.length) { const [x, y] = q.pop(); for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const nx = x + dx, ny = y + dy, k = nx + ',' + ny; if (Math.abs(nx - cx) > 2 || Math.abs(ny - cy) > 2 || (nx === cx && ny === cy) || seen.has(k) || !open(nx, ny)) continue; seen.add(k); q.push([nx, ny]); } }
    return nb.every(p => seen.has(p.join()));
  };
  const npcNear = (x, y) => Object.values(NPC_POS).some(p => p.map === m.id && Math.abs(p.x - x) <= 1 && Math.abs(p.y - y) <= 1) || MOVED_NPC_SPOTS.some(([px, py]) => Math.abs(px - x) <= 1 && Math.abs(py - y) <= 1);
  const nearDoorOrSign = (x, y) => Object.values(m.doors || {}).some(d => Math.abs(d.x - x) + Math.abs(d.y - y) <= 2) || m.signs.some(s => Math.abs(s.x - x) + Math.abs(s.y - y) <= 1);
  for (const [y0, y1] of zones) {
    const city = y0 === 26 || y0 === 4;   // Isfahan / San Francisco and Tehran / New York: parks only, lightly
    for (let y = y0; y <= y1; y++) for (let x = 1; x < m.w - 1; x++) {
      const ch = m.grid[y][x];
      const tall = ch === ':' || ch === '¤' || ch === '‡';
      if (ch !== '.' && ch !== ',' && !(tall && !city)) continue;
      if (city && ch !== '.') continue;
      if (npcNear(x, y) || nearDoorOrSign(x, y)) continue;
      const roll = r();
      const grass = ch === '.' || ch === ':' || ch === '‡';
      // a few trees and bushes standing in the tall grass
      if (tall) { if (roll > .09 || (x >= 6 && x <= 13) || !safeToBlock(x, y)) continue; const desert = ch === '¤'; m.grid[y][x] = desert ? (us ? '♣' : 'ʕ') : (us ? (r() < .5 ? 'Ϙ' : 'ɷ') : (r() < .5 ? 'P' : 'ɷ')); continue; }
      // small walk-over details
      if (roll < (city ? .1 : .16)) { m.decor.push({ x, y, k: grass ? (r() < .5 ? 'flowers' : 'tuft') : (r() < .6 ? 'pebbles' : 'dryshrub'), s: Math.floor(r() * 1e9) }); continue; }
      // solid scenery: away from the lanes beside the road, and never cutting anything off
      if (x >= 6 && x <= 13) continue;
      if (roll > (city ? .12 : .4)) continue;
      const pick = r();
      const k = grass ? (us ? (pick < .35 ? 'Ϙ' : pick < .55 ? 'ᛉ' : pick < .85 ? 'ɷ' : 'ʘ') : (pick < .3 ? 'P' : pick < .45 ? 'T' : pick < .8 ? 'ɷ' : 'ʘ'))
        : (us ? (pick < .4 ? '♣' : pick < .7 ? 'ʕ' : 'R') : (pick < .45 ? 'ʕ' : pick < .8 ? 'R' : 'ʘ'));
      if (!safeToBlock(x, y)) continue;
      m.grid[y][x] = k;
    }
  }
}
function drawDecor(c, m) {
  for (const d of m.decor || []) { c.save(); c.translate(d.x * TS, d.y * TS); DECOR[d.k](c, d.x, d.y, rng(d.s)); c.restore(); }
}

// ---- the living landscape: drawn every frame over the map ----
const OUTDOOR = new Set(['world', 'north', 'us', 'usnorth', 'east', 'useast']);
const LEAFY = new Set(['T', 'P', 'Ϙ', 'ᛉ', 'ɷ']);
function drawAmbient(c, cx, cy, layer) {
  const m = curMap; if (!m) return;
  const t = performance.now() / 1000;
  const x0 = Math.max(0, Math.floor(cx / TS)), x1 = Math.min(m.w - 1, Math.ceil((cx + 160) / TS));
  const y0 = Math.max(0, Math.floor(cy / TS)), y1 = Math.min(m.h - 1, Math.ceil((cy + 144) / TS));
  if (layer === 'under') {
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      const ch = m.grid[y][x], X = x * TS - cx, Y = y * TS - cy;
      if (ch === '~' || ch === '≋') { // water sparkles drifting across
        for (let k = 0; k < 2; k++) {
          const ph = ((t * 3 + x * 5.3 + y * 3.1 + k * 7) % 16 + 16) % 16, yy = 5 + k * 6 + Math.sin(t * 1.6 + x + k) * .8;
          c.strokeStyle = `rgba(255,255,255,${.22 + .2 * Math.sin(t * 2 + x * 1.7 + y + k * 2)})`; c.lineWidth = .6;
          c.beginPath(); c.moveTo(X + ph - 2, Y + yy); c.quadraticCurveTo(X + ph, Y + yy - .9, X + ph + 2, Y + yy); c.stroke();
        }
      } else if (ch === ':' || ch === '‡' || ch === '¤') { // tall grass, wheat and scrub sway in the wind
        const col = ch === '‡' ? '#c8a85a' : ch === '¤' ? '#6e7e30' : '#3e7a30';
        for (const [bx, by] of [[3, 8], [9, 7], [6, 14], [13, 13]]) {
          const lean = Math.sin(t * 2.1 + x * .8 + y * .55 + bx * .3) * 1.3 + .5;
          c.strokeStyle = col; c.lineWidth = .8; c.lineCap = 'round';
          c.beginPath(); c.moveTo(X + bx, Y + by); c.quadraticCurveTo(X + bx + lean * .3, Y + by - 2.4, X + bx + lean, Y + by - 4.6); c.stroke();
        }
      } else if (OUTDOOR.has(m.id) && LEAFY.has(ch)) { // trees and bushes rustle: leaves catch the light as the wind moves them
        for (let k = 0; k < 3; k++) {
          const a = t * 1.3 + x * 1.9 + y * 1.1 + k * 2.1, lx = X + 4 + k * 4 + Math.sin(a) * 1.1, ly = Y + (ch === 'ɷ' ? 8 : 4) + (k % 2) * 3 + Math.cos(a * .8) * .6;
          c.fillStyle = `rgba(255,255,220,${.1 + .12 * (.5 + .5 * Math.sin(a * 1.7))})`; c.beginPath(); c.ellipse(lx, ly, 1.3, .7, Math.sin(a) * .6, 0, 7); c.fill();
        }
      } else if (ch === 'm' && !OUTDOOR.has(m.id)) { // steam from the samovar
        puffs(c, X + 8, Y + 2, t, x);
      } else if (ch === '▬' && x % 3 === 0) { // steam from the espresso machine
        puffs(c, X + 8, Y - 3, t, x);
      }
    }
    // wildflowers nod in the breeze
    for (const d of m.decor || []) {
      if (d.k !== 'flowers' || d.x < x0 || d.x > x1 || d.y < y0 || d.y > y1) continue;
      const X = d.x * TS - cx, Y = d.y * TS - cy, r = rng(d.s + 7);
      for (let i = 0; i < 2; i++) {
        const fx = 3 + r() * 10, fy = 7 + r() * 7, lean = Math.sin(t * 2 + d.x * .9 + d.y * .6 + i) * 1.2;
        c.strokeStyle = '#3e7a30'; c.lineWidth = .45; c.beginPath(); c.moveTo(X + fx, Y + fy); c.quadraticCurveTo(X + fx + lean * .4, Y + fy - 2, X + fx + lean, Y + fy - 3.6); c.stroke();
        el(c, X + fx + lean, Y + fy - 3.8, .9, .9, ['#f0c040', '#e86a8a', '#b88ae8', '#f4f0e8'][(d.x + d.y + i) % 4], 'rgba(80,40,40,.4)', .2);
      }
    }
    return;
  }
  if (!OUTDOOR.has(m.id)) return;
  // butterflies over the flowers
  for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
    const ch = m.grid[y][x]; if (ch !== '*' && ch !== '❀' && !((m.decor || []).length && (x * 7 + y * 3) % 11 === 0 && ch === '.')) continue;
    if ((x * 13 + y * 7) % 3) continue;
    const X = x * TS - cx + 8 + Math.sin(t * .9 + x) * 6, Y = y * TS - cy + 4 + Math.sin(t * 1.4 + y) * 3;
    const flap = Math.abs(Math.sin(t * 11 + x * 3)), col = ['#f4f0e8', '#f0a040', '#7ab0f0'][(x + y) % 3];
    c.fillStyle = col; c.strokeStyle = 'rgba(40,30,20,.5)'; c.lineWidth = .25;
    for (const s of [-1, 1]) { c.beginPath(); c.ellipse(X + s * flap * 1.1, Y, 1.1 * flap + .2, .9, 0, 0, 7); c.fill(); c.stroke(); }
    c.fillStyle = '#2a2018'; c.fillRect(X - .2, Y - .6, .4, 1.4);
  }
  // soft cloud shadows drifting over the land
  for (let k = 0; k < 2; k++) {
    const span = m.w * TS + 200, sx = ((t * 5 + k * 230 + hashStr(m.id) % 200) % span) - 100 - cx;
    const sy = ((k * 520 + 140) % (m.h * TS)) - cy;
    for (let rep = -1; rep <= 1; rep++) {
      const yy = sy + rep * 420; if (yy < -60 || yy > 200) continue;
      c.fillStyle = 'rgba(30,40,60,.07)';
      c.beginPath(); c.ellipse(sx, yy, 44, 18, 0, 0, 7); c.ellipse(sx + 26, yy + 6, 30, 14, 0, 0, 7); c.ellipse(sx - 24, yy + 8, 26, 12, 0, 0, 7); c.fill();
    }
  }
  // a little flock of birds now and then
  const cyc = 16, ph = (t % cyc) / cyc;
  if (ph < .55) {
    const bx = -20 + ph / .55 * 200, by = 22 + (Math.floor(t / cyc) * 37) % 60;
    for (const [ox, oy] of [[0, 0], [-7, 4], [-6, -4], [-13, 7]]) {
      const f = Math.sin(t * 9 + ox) * 1.6;
      c.strokeStyle = 'rgba(30,30,40,.75)'; c.lineWidth = .7; c.lineCap = 'round';
      c.beginPath(); c.moveTo(bx + ox - 2.4, by + oy - f); c.quadraticCurveTo(bx + ox - 1, by + oy - 1, bx + ox, by + oy); c.quadraticCurveTo(bx + ox + 1, by + oy - 1, bx + ox + 2.4, by + oy - f); c.stroke();
    }
  }
}
function puffs(c, x, y, t, seed) {
  for (let i = 0; i < 3; i++) {
    const p = ((t * .7 + i / 3 + seed * .13) % 1), yy = y - p * 9, xx = x + Math.sin(p * 6 + i) * 1.6;
    c.fillStyle = `rgba(255,255,255,${.45 * (1 - p)})`; c.beginPath(); c.arc(xx, yy, 1 + p * 2, 0, 7); c.fill();
  }
}
