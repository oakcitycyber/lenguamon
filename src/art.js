// ===== LENGUAMON art: procedural pixel tiles, characters, monsters =====
const TS = 16;
const C = {
  grass: '#8cd060', grass2: '#6cb048', grassD: '#3c8a34', grassDD: '#2a6428',
  path: '#ecd6a0', path2: '#d8bc84', sand: '#f2e0b0', sand2: '#e0c890',
  water: '#40bcd8', water2: '#a8ecf4', rim: '#ecdcbc', rim2: '#c8b48c',
  cyp: '#2c6a3c', cyp2: '#4c9a4c', cypD: '#1a4628', trunk: '#6a4424',
  tree: '#3f8f3c', tree2: '#68b850', fruit: '#d82838', fruit2: '#ff7080',
  rock: '#a8a8b0', rockD: '#6a6a78', rockL: '#d8d8e0',
  adobe: '#dcaa6c', adobe2: '#c08c50', adobeL: '#ecc48c',
  dome: '#30b4b0', domeL: '#98e4dc', domeD: '#16767c', gold: '#f0c040', goldD: '#b08018',
  kashi: '#2858a8', kashiL: '#f4f0e0', kashiT: '#30b4b0',
  wood: '#8a5a30', woodL: '#b88048', woodD: '#5a3418', glass: '#284878', glassL: '#5888c0',
  out: '#202030', white: '#f8f4e8', red: '#c83038', navy: '#283878',
  floor: '#c89058', floorD: '#a87040', carpet: '#a8303a', carpet2: '#c84a48', wallIn: '#f0e4c8', wallInD: '#d8c8a0',
  board: '#2a5a3a', brass: '#e8b840', brassD: '#a07818', spiceO: '#f0a020', spiceY: '#f0d040', spiceR: '#a02838', spiceG: '#8ab848',
};
function R(ctx, x, y, w, h, c) { ctx.fillStyle = c; ctx.fillRect(x, y, w, h); }
function P(ctx, pts, c) { ctx.fillStyle = c; for (let i = 0; i < pts.length; i += 2) ctx.fillRect(pts[i], pts[i + 1], 1, 1); }

// ---- ground layers ----
function gGrass(c, x, y) { R(c, 0, 0, 16, 16, C.grass); const h = (x * 7 + y * 13) % 4; P(c, h < 2 ? [2, 3, 3, 3, 10, 9, 11, 9, 6, 13] : [5, 2, 12, 5, 13, 5, 3, 11, 9, 14], C.grass2); }
function gSand(c, x, y) { R(c, 0, 0, 16, 16, C.sand); P(c, (x + y) % 2 ? [3, 4, 11, 2, 7, 11, 13, 13] : [5, 6, 12, 9, 2, 13], C.sand2); }
function gPath(c, x, y) { R(c, 0, 0, 16, 16, C.path); P(c, (x + y) % 2 ? [4, 3, 12, 7, 6, 12] : [2, 9, 10, 2, 13, 13], C.path2); }
function gFloor(c) { R(c, 0, 0, 16, 16, C.floor); R(c, 0, 7, 16, 1, C.floorD); R(c, 0, 15, 16, 1, C.floorD); R(c, 5, 0, 1, 7, C.floorD); R(c, 11, 8, 1, 7, C.floorD); }
function gCarpet(c, x, y, nb) {
  R(c, 0, 0, 16, 16, C.carpet);
  // medallion pattern
  const ph = (x + y) % 2;
  if (ph) { P(c, [7, 4, 8, 4, 6, 5, 9, 5, 5, 6, 10, 6, 5, 9, 10, 9, 6, 10, 9, 10, 7, 11, 8, 11], C.gold); R(c, 7, 7, 2, 2, C.navy); }
  else { P(c, [2, 2, 13, 2, 2, 13, 13, 13], C.gold); R(c, 6, 6, 4, 4, C.carpet2); P(c, [7, 7, 8, 8], C.gold); }
  const bd = (side) => { };
  if (!nb.u) { R(c, 0, 0, 16, 3, C.navy); P(c, [2, 1, 6, 1, 10, 1, 14, 1], C.gold); }
  if (!nb.d) { R(c, 0, 13, 16, 3, C.navy); P(c, [2, 14, 6, 14, 10, 14, 14, 14], C.gold); }
  if (!nb.l) { R(c, 0, 0, 3, 16, C.navy); P(c, [1, 3, 1, 7, 1, 11], C.gold); }
  if (!nb.r) { R(c, 13, 0, 3, 16, C.navy); P(c, [14, 3, 14, 7, 14, 11], C.gold); }
}

function groundAt(m, x, y) {
  for (let r = 1; r <= 4; r++) for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
    if (Math.max(Math.abs(dx), Math.abs(dy)) !== r) continue;
    const ch = m && m.grid[y + dy] && m.grid[y + dy][x + dx];
    if (ch === ',') return 'sand'; if (ch === '.' || ch === ':' || ch === '*') return 'grass';
  }
  return 'grass';
}
function gAuto(c, x, y, nb, m) { (groundAt(m, x, y) === 'sand' ? gSand : gGrass)(c, x, y); }
function domeTile(c, nb, col) {
  if (nb.R === nb.self) { R(c, 4, 6, 12, 10, col.d); R(c, 6, 4, 10, 12, col.d); R(c, 5, 7, 11, 9, col.b); R(c, 7, 5, 9, 11, col.b); R(c, 7, 8, 3, 4, col.l); R(c, 9, 6, 2, 2, col.l); P(c, [8, 13, 11, 10, 13, 13, 12, 7, 14, 10], col.p); R(c, 15, 0, 1, 5, C.gold); P(c, [14, 1], C.gold); }
  else { R(c, 0, 6, 12, 10, col.d); R(c, 0, 4, 10, 12, col.d); R(c, 0, 7, 11, 9, col.b); R(c, 0, 5, 9, 11, col.b); P(c, [2, 10, 4, 13, 6, 8, 3, 7, 7, 12], col.p); R(c, 0, 0, 1, 5, C.gold); P(c, [1, 1], C.gold); }
}
// ---- tile painters: (ctx, x, y, nb, map) ----
const TILE = {
  '.': { g: gGrass }, ':': { g: gGrass, enc: true, d(c, x, y) { for (const [bx, by] of [[1, 2], [9, 2], [5, 9], [13, 9]]) { R(c, bx, by + 2, 1, 4, C.grassD); R(c, bx + 1, by, 1, 6, C.grassDD); R(c, bx + 2, by + 1, 1, 5, C.grassD); R(c, bx + 3, by + 3, 1, 3, C.grassDD); } } },
  '=': { g: gPath }, ',': { g: gSand },
  '*': { g: gGrass, d(c, x, y) { for (const [fx, fy] of [[3, 3], [10, 9]]) { P(c, [fx, fy - 1, fx - 1, fy, fx + 1, fy, fx, fy + 1], (x + y) % 2 ? C.fruit2 : C.white); P(c, [fx, fy], C.gold); P(c, [fx, fy + 2, fx + 1, fy + 3], C.grassD); } } },
  '~': { g: gGrass, solid: true, d(c, x, y, nb) {
      R(c, 0, 0, 16, 16, C.water); P(c, [3, 5, 4, 5, 5, 4, 10, 11, 11, 11, 12, 10, 9, 3, 10, 3], C.water2);
      if (!nb.u) { R(c, 0, 0, 16, 3, C.rim); R(c, 0, 3, 16, 1, C.rim2); }
      if (!nb.d) { R(c, 0, 13, 16, 3, C.rim); R(c, 0, 12, 16, 1, C.water2); }
      if (!nb.l) { R(c, 0, 0, 3, 16, C.rim); R(c, 3, 0, 1, 16, C.rim2); }
      if (!nb.r) { R(c, 13, 0, 3, 16, C.rim); R(c, 12, 0, 1, 16, C.rim2); }
      if (!nb.u) P(c, [5, 1, 10, 1], C.kashi); if (!nb.d) P(c, [5, 14, 10, 14], C.kashi);
    } },
  'T': { g: gAuto, solid: true, d(c) {
      R(c, 7, 13, 2, 3, C.trunk);
      const rows = [[7, 9], [6, 10], [6, 10], [5, 11], [5, 11], [4, 12], [4, 12], [4, 12], [4, 12], [5, 11], [5, 11], [6, 10], [7, 9]];
      rows.forEach(([a, b], i) => { R(c, a - 1, i, b - a + 2, 1, C.cypD); R(c, a, i, b - a, 1, C.cyp); });
      P(c, [7, 2, 6, 4, 7, 5, 6, 7, 7, 8, 6, 10, 8, 3, 9, 6, 9, 9], C.cyp2);
    } },
  'P': { g: gAuto, solid: true, d(c) {
      R(c, 7, 11, 2, 5, C.trunk);
      R(c, 3, 2, 10, 9, C.grassDD); R(c, 2, 4, 12, 5, C.grassDD); R(c, 4, 1, 8, 11, C.grassDD);
      R(c, 4, 2, 8, 8, C.tree); R(c, 3, 4, 10, 4, C.tree); R(c, 5, 2, 4, 2, C.tree2); R(c, 4, 4, 2, 2, C.tree2);
      for (const [fx, fy] of [[5, 6], [10, 4], [8, 8], [11, 8]]) { R(c, fx, fy, 2, 2, C.fruit); P(c, [fx, fy], C.fruit2); }
    } },
  'R': { g: gAuto, solid: true, d(c) { R(c, 2, 5, 12, 10, C.rockD); R(c, 3, 4, 10, 10, C.rock); R(c, 4, 5, 5, 3, C.rockL); R(c, 3, 13, 10, 1, C.rockD); } },
  'F': { g: gAuto, solid: true, d(c, x, y) { R(c, 0, 4, 16, 12, C.adobe); R(c, 0, 3, 16, 2, C.adobeL); R(c, 0, 15, 16, 1, C.adobe2); R(c, 0, 9, 16, 1, C.adobe2); R(c, (x % 2) ? 4 : 11, 5, 1, 4, C.adobe2); R(c, (x % 2) ? 9 : 2, 10, 1, 5, C.adobe2); if (x % 3 === 0) { R(c, 6, 5, 3, 3, C.kashi); P(c, [7, 6], C.kashiL); } } },
  'S': { g: gAuto, solid: true, sign: true, d(c) { R(c, 7, 9, 2, 7, C.woodD); R(c, 2, 2, 12, 8, C.woodD); R(c, 3, 3, 10, 6, C.woodL); R(c, 4, 4, 8, 1, C.wood); R(c, 4, 6, 6, 1, C.wood); } },
  'A': { g: gSand, solid: true, d(c) { for (let i = 0; i < 16; i += 4) { R(c, i, 0, 2, 11, C.red); R(c, i + 2, 0, 2, 11, C.white); } for (let i = 0; i < 16; i += 4) R(c, i + 1, 11, 2, 2, C.red); R(c, 0, 0, 16, 1, C.woodD); } },
  'K': { g: gSand, solid: true, d(c, x) { R(c, 0, 6, 16, 10, C.wood); R(c, 0, 6, 16, 2, C.woodL); R(c, 0, 15, 16, 1, C.woodD); const sp = [C.spiceO, C.spiceR, C.spiceY, C.spiceG]; for (let i = 0; i < 3; i++) { const col = sp[(x + i) % 4]; R(c, 1 + i * 5, 3, 4, 3, col); R(c, 2 + i * 5, 2, 2, 1, col); } } },
  'n': { g: gAuto, solid: true, d(c, x, y, nb) { domeTile(c, { ...nb, self: 'n' }, { b: C.dome, l: C.domeL, d: C.domeD, p: C.dome }); } },
  '^': { g: gAuto, solid: true, d(c, x, y, nb) {
      if (nb.U === 'n' || nb.U === 'O') { R(c, 0, 0, 16, 8, C.dome); R(c, 0, 0, 16, 1, C.dome); if (nb.R === 'n') R(c, 7, 0, 3, 5, C.domeL); }
      else { R(c, 0, 3, 16, 5, C.adobeL); for (let i = 0; i < 16; i += 4) R(c, i, 1, 2, 2, C.adobeL); }
      R(c, 0, 8, 16, 8, C.kashi); R(c, 0, 8, 16, 1, C.gold); R(c, 0, 15, 16, 1, C.gold);
      P(c, [3, 11, 2, 12, 4, 12, 3, 13, 11, 11, 10, 12, 12, 12, 11, 13], C.kashiL); P(c, [3, 12, 11, 12], C.gold); P(c, [7, 10, 7, 14, 6, 12, 8, 12], C.kashiT);
      if (nb.L !== '^') R(c, 0, 1, 1, 15, C.out); if (nb.R !== '^') R(c, 15, 1, 1, 15, C.out);
    } },
  '#': { g: gAuto, solid: true, d(c, x, y, nb) { wall(c, x, y, nb); } },
  'h': { g: gAuto, solid: true, d(c, x, y, nb) { wall(c, x, y, nb); R(c, 4, 3, 8, 10, C.woodD); R(c, 5, 4, 6, 8, C.glass); R(c, 6, 3, 4, 1, C.woodD); R(c, 7, 2, 2, 1, C.woodD); R(c, 7, 4, 2, 8, C.gold); R(c, 5, 7, 6, 1, C.gold); P(c, [6, 5, 9, 9], C.glassL); } },
  'D': { g: gAuto, solid: false, door: true, d: doorDraw }, 'H': { g: gAuto, door: true, d: doorDraw }, 'M': { g: gAuto, door: true, d: doorDraw }, 'C': { g: gAuto, door: true, d: doorDraw },

  // ---- Iranian landmarks ----
  'Y': { g: gAuto, solid: true, d(c) { R(c, 4, 1, 9, 15, C.out); R(c, 5, 2, 7, 14, C.adobe); R(c, 10, 2, 2, 14, C.adobe2); R(c, 4, 0, 9, 3, C.out); R(c, 5, 1, 7, 1, C.adobeL); for (const x of [6, 8, 10]) R(c, x, 4, 1, 7, '#3a2414'); R(c, 5, 12, 7, 1, C.adobe2); } },
  'Q': { g: gAuto, solid: true, d(c, x, y, nb) { R(c, 0, 5, 16, 11, C.adobeL); for (let i = 0; i < 16; i += 4) R(c, i, 2, 2, 3, C.adobeL); R(c, 0, 11, 16, 1, C.adobe2); R(c, 0, 14, 16, 2, C.adobe2); if (nb.L !== 'Q') R(c, 0, 2, 1, 14, C.out); if (nb.R !== 'Q') R(c, 15, 2, 1, 14, C.out); } },
  'I': { g: gAuto, solid: true, d(c, x, y, nb) {
      const top = nb.U !== 'I';
      R(c, 5, top ? 6 : 0, 6, top ? 10 : 16, C.out); R(c, 6, top ? 6 : 0, 4, top ? 10 : 16, '#d89a5a'); R(c, 9, top ? 6 : 0, 1, top ? 10 : 16, C.adobe2);
      R(c, 6, top ? 9 : 4, 4, 2, C.kashi); P(c, [7, top ? 9 : 4, 8, top ? 10 : 5], C.kashiT); R(c, 6, 13, 4, 1, C.kashiT);
      if (top) { R(c, 4, 4, 8, 2, C.out); R(c, 5, 4, 6, 1, C.kashiT); R(c, 6, 1, 4, 3, C.kashiT); R(c, 7, 0, 2, 1, C.gold); P(c, [6, 1, 9, 1], C.out); }
    } },
  'W': { g: gAuto, solid: true, d(c, x, y, nb) { R(c, 0, 0, 16, 16, '#dca66a'); R(c, 0, 0, 16, 1, C.adobe2); R(c, 0, 15, 16, 1, C.adobe2); R(c, 2, 2, 12, 14, '#ecc48c'); R(c, 4, 6, 8, 10, '#4a2c1c'); R(c, 5, 4, 6, 2, '#4a2c1c'); R(c, 7, 3, 2, 1, '#4a2c1c'); R(c, 5, 6, 6, 1, '#6a4028'); if (nb.D !== 'W') R(c, 4, 13, 8, 3, '#3a2014'); } },
  'V': { g: gAuto, solid: true, d(c, x, y, nb) { R(c, 0, 0, 16, 16, '#2858b0'); R(c, 0, 0, 16, 1, C.gold); P(c, [2, 3, 13, 3, 2, 12, 13, 12, 1, 7, 14, 7], '#f0e8c8'); R(c, 4, 4, 8, 12, '#1a3a80'); R(c, 5, 2, 6, 2, '#1a3a80'); R(c, 7, 1, 2, 1, '#1a3a80'); P(c, [6, 5, 9, 5, 7, 7, 8, 7, 6, 9, 9, 9], '#58b8e8'); R(c, 4, 4, 1, 12, C.gold); R(c, 11, 4, 1, 12, C.gold); if (nb.D !== 'V') R(c, 5, 12, 6, 4, '#2a1a10'); } },
  'O': { g: gAuto, solid: true, d(c, x, y, nb) { domeTile(c, { ...nb, self: 'O' }, { b: '#3a7ad8', l: '#9ac8f8', d: '#1a4a98', p: '#f0d860' }); } },
  'N': { g: gAuto, solid: true, d(c, x, y, nb) { domeTile(c, { ...nb, self: 'N' }, { b: '#38b0a0', l: '#a8f0e0', d: '#1a6a60', p: '#f0d860' }); } },
  'G': { g: gAuto, solid: true, d(c) { R(c, 0, 0, 16, 3, '#e8dcc4'); R(c, 0, 3, 16, 1, C.out); R(c, 0, 13, 16, 3, '#d8ccb4'); R(c, 0, 13, 16, 1, '#b8aa90'); for (const x of [2, 10]) { R(c, x, 4, 4, 9, C.out); R(c, x + 1, 4, 2, 9, '#f8f2e4'); R(c, x, 4, 4, 1, C.gold); } R(c, 6, 5, 4, 8, '#7a3a2a'); P(c, [7, 7, 8, 8, 7, 10], C.gold); } },
  'B': { g: gPath, d(c) { R(c, 0, 0, 16, 16, '#c8955a'); for (let y = 3; y < 16; y += 4) R(c, 0, y, 16, 1, '#a87440'); R(c, 7, 0, 1, 3, '#a87440'); R(c, 3, 4, 1, 3, '#a87440'); R(c, 11, 8, 1, 3, '#a87440'); } },
  'U': { g: gPath, solid: true, d(c, x) { R(c, 0, 0, 16, 16, '#b8844a'); R(c, 0, 0, 16, 2, '#d8a86a'); for (const ax of [1, 9]) { R(c, ax, 7, 6, 9, C.water); R(c, ax + 1, 5, 4, 2, C.water); P(c, [ax + 1, 12, ax + 4, 14], C.water2); } R(c, 0, 4, 16, 1, '#8a5a30'); } },
  'L': { g: gAuto, solid: true, d(c) { R(c, 6, 10, 4, 6, '#d8d0c0'); P(c, [7, 12, 8, 14], '#a8a090'); R(c, 1, 1, 14, 11, C.grassDD); R(c, 0, 3, 16, 7, C.grassDD); R(c, 2, 1, 12, 10, '#6ab84a'); R(c, 1, 3, 14, 6, '#6ab84a'); P(c, [4, 3, 5, 3, 9, 2, 10, 2, 3, 6, 12, 5, 7, 7], '#9ad870'); P(c, [5, 8, 10, 9, 12, 7, 3, 9], C.tree); } },
  'J': { g: gAuto, solid: true, d(c) { for (let y = 5; y < 16; y++) R(c, 7 + (y % 3 === 0 ? 0 : 0), y, 2, 1, y % 2 ? '#8a6234' : '#6a4424');
      const fr = [[0, 4], [2, 1], [5, 0], [11, 0], [14, 1], [16, 4]]; for (const [fx, fy] of fr) { c.strokeStyle = '#2f7a2f'; c.lineWidth = 2; c.beginPath(); c.moveTo(8, 5); c.quadraticCurveTo((8 + fx) / 2, fy - 2, fx, fy + 4); c.stroke(); } R(c, 6, 4, 4, 2, '#3f9a3f'); P(c, [6, 6, 9, 6, 7, 7], '#e07a2a'); } },
  // interiors
  'w': { g: gFloor, solid: true, d(c, x, y) { R(c, 0, 0, 16, 16, C.wallIn); R(c, 0, 0, 16, 4, C.wallInD); R(c, 0, 9, 16, 4, C.kashi); P(c, [2, 10, 6, 10, 10, 10, 14, 10, 4, 11, 8, 11, 12, 11, 0, 11], C.kashiL); R(c, 0, 9, 16, 1, C.gold); R(c, 0, 13, 16, 1, C.gold); R(c, 0, 15, 16, 1, C.wallInD); } },
  'f': { g: gFloor }, 'c': { g: gCarpet },
  'E': { g: gFloor, exit: true, d(c) { R(c, 2, 4, 12, 10, C.red); R(c, 3, 5, 10, 8, C.carpet2); P(c, [3, 14, 6, 14, 9, 14, 12, 14], C.gold); } },
  'b': { g: gFloor, solid: true, d(c) { R(c, 1, 0, 14, 16, C.woodD); R(c, 2, 1, 12, 14, C.wood); R(c, 2, 7, 12, 1, C.woodD); const cols = [C.red, C.kashi, C.gold, C.spiceG, C.dome]; for (let i = 0; i < 6; i++) { R(c, 3 + i * 2, 2, 1, 5, cols[i % 5]); R(c, 3 + i * 2, 9, 1, 5, cols[(i + 2) % 5]); } } },
  'm': { g: gFloor, solid: true, d(c) { R(c, 5, 2, 6, 2, C.brassD); R(c, 4, 4, 8, 8, C.brassD); R(c, 5, 4, 6, 8, C.brass); R(c, 6, 5, 2, 5, '#fff0a0'); R(c, 11, 7, 3, 1, C.brassD); R(c, 5, 12, 6, 2, C.brassD); R(c, 4, 14, 8, 1, C.woodD); R(c, 7, 0, 2, 2, C.red); } },
  't': { g: gCarpet, solid: true, d(c) { R(c, 1, 5, 14, 7, C.woodD); R(c, 2, 5, 12, 5, C.woodL); R(c, 2, 11, 2, 3, C.woodD); R(c, 12, 11, 2, 3, C.woodD); R(c, 5, 3, 2, 3, '#e8c8a0'); P(c, [5, 3, 6, 3], C.red); R(c, 9, 4, 3, 2, C.white); } },
  'k': { g: gCarpet, solid: true, d(c) { R(c, 2, 4, 12, 9, C.navy); R(c, 3, 5, 10, 7, C.spiceO); P(c, [5, 7, 8, 7, 11, 7, 6, 9, 9, 9], C.red); } },
  'u': { g: gFloor, solid: true, counter: true, d(c) { R(c, 0, 3, 16, 13, C.woodD); R(c, 0, 3, 16, 4, C.woodL); R(c, 0, 7, 16, 1, C.woodD); R(c, 3, 9, 10, 4, C.wood); } },
  'Z': { g: gFloor, solid: true, d(c, x) { R(c, 0, 1, 16, 12, C.woodD); R(c, 0, 2, 16, 10, C.board); if (x % 2) { P(c, [3, 6, 4, 7, 5, 7, 6, 6, 8, 5, 8, 6, 8, 7, 10, 7, 11, 7, 12, 6], C.white); } else { P(c, [4, 5, 5, 5, 6, 5, 4, 8, 6, 8, 10, 6, 11, 6, 12, 5, 12, 7], C.white); } R(c, 0, 13, 16, 2, C.woodL); } },
  'd': { g: gFloor, solid: true, d(c) { R(c, 2, 5, 12, 6, C.woodD); R(c, 3, 5, 10, 4, C.woodL); R(c, 3, 11, 2, 4, C.woodD); R(c, 11, 11, 2, 4, C.woodD); R(c, 5, 6, 4, 2, C.white); } },
  'p': { g: gFloor, solid: true, d(c) { R(c, 5, 10, 6, 5, '#c0603a'); R(c, 4, 10, 8, 2, '#d8784a'); R(c, 4, 3, 8, 7, C.tree); R(c, 6, 1, 4, 3, C.tree2); R(c, 3, 5, 2, 3, C.tree2); R(c, 11, 5, 2, 3, C.tree); } },
};
function wall(c, x, y, nb) { R(c, 0, 0, 16, 16, C.adobe); R(c, 0, 5, 16, 1, C.adobe2); R(c, 0, 11, 16, 1, C.adobe2); R(c, (x * 5) % 16, 0, 1, 5, C.adobe2); R(c, (x * 5 + 8) % 16, 6, 1, 5, C.adobe2); R(c, (x * 5 + 3) % 16, 12, 1, 4, C.adobe2); if (nb.L !== '#' && nb.L !== 'h' && !TILE[nb.L]?.door) R(c, 0, 0, 1, 16, C.out); if (nb.R !== '#' && nb.R !== 'h' && !TILE[nb.R]?.door) R(c, 15, 0, 1, 16, C.out); if (nb.D !== '#' && nb.D !== 'h' && !TILE[nb.D]?.door) R(c, 0, 15, 16, 1, C.adobe2); }
function doorDraw(c, x, y, nb) { wall(c, x, y, nb); R(c, 2, 2, 12, 14, C.kashiT); R(c, 3, 1, 10, 1, C.kashiT); R(c, 3, 3, 10, 13, C.woodD); R(c, 4, 4, 8, 12, C.wood); R(c, 5, 2, 6, 2, C.woodD); R(c, 7, 4, 2, 12, C.woodD); P(c, [5, 7, 10, 7, 5, 11, 10, 11], C.gold); P(c, [4, 2, 11, 2], C.gold); }

// render a whole map into an offscreen canvas
function renderMap(m) {
  const cv = document.createElement('canvas'); cv.width = m.w * TS; cv.height = m.h * TS;
  const ctx = cv.getContext('2d');
  for (let y = 0; y < m.h; y++) for (let x = 0; x < m.w; x++) {
    const ch = m.grid[y][x], t = TILE[ch] || TILE['.'];
    const at = (xx, yy) => (m.grid[yy] && m.grid[yy][xx]) || ' ';
    const same = (xx, yy) => { const o = at(xx, yy); return o === ch || (ch === 'c' && 't k'.includes(o) && o !== ' ') || (ch === '~' && o === '~'); };
    const nb = { u: same(x, y - 1), d: same(x, y + 1), l: same(x - 1, y), r: same(x + 1, y), U: at(x, y - 1), D: at(x, y + 1), L: at(x - 1, y), R: at(x + 1, y) };
    ctx.save(); ctx.translate(x * TS, y * TS);
    if (t.g) t.g(ctx, x, y, nb, m);
    if (t.d) t.d(ctx, x, y, nb, m);
    ctx.restore();
  }
  return cv;
}

// ---- characters ----
const LOOKS = {
  player: { skin: '#f4c8a0', hair: '#3a2818', top: '#2858a8', top2: '#183878', legs: '#303848' },
  haydeh: { skin: '#f0c49c', scarf: '#7a3a8a', scarf2: '#a860b8', top: '#f0ece0', top2: '#c8c0b0', legs: '#404058', glasses: true },
  maman: { skin: '#f0c49c', scarf: '#c84858', scarf2: '#e87888', top: '#5a8a4a', top2: '#3a6a30', legs: '#3a3040' },
  reza: { skin: '#e8b890', hair: '#909090', top: '#f0f0f0', top2: '#c8c8c8', legs: '#5a3a20', stache: true },
  mahmoud: { skin: '#e0b088', hair: '#e0e0e0', top: '#6a5a40', top2: '#4a3a28', legs: '#403020', stache: true },
  babak: { skin: '#e8b890', hair: '#201810', top: '#806040', top2: '#5a4028', legs: '#302820', stache: true },
  nasrin: { skin: '#f4c8a0', scarf: '#2f8a8a', scarf2: '#58b8b0', top: '#f0d070', top2: '#c8a040', legs: '#404058' },
  arash: { skin: '#f0c49c', hair: '#2a1a10', top: '#d83040', top2: '#a01828', legs: '#283048' },
  farhad: { skin: '#e8b890', hair: '#1a1008', top: '#48a060', top2: '#287040', legs: '#383020' },
  golnaz: { skin: '#f4c8a0', scarf: '#e07830', scarf2: '#f8a860', top: '#3a5aa8', top2: '#283c78', legs: '#303040' },
  dariush: { skin: '#e0b088', hair: '#181010', top: '#1a8a8a', top2: '#0c5c5c', legs: '#202030', stache: true, beard: true },
  kian: { skin: '#f4c8a0', hair: '#5a3818', top: '#f0c020', top2: '#c89000', legs: '#3858a8', small: true },
  maryam: { skin: '#f0c49c', scarf: '#3858b8', scarf2: '#6888e0', top: '#a83a5a', top2: '#782040', legs: '#303040' },
  navid: { skin: '#e8b890', hair: '#3a2818', top: '#c87830', top2: '#8a4a18', legs: '#403020' },
  leila: { skin: '#f0c49c', scarf: '#f0a020', scarf2: '#ffd060', top: '#c83038', top2: '#901820', legs: '#2a2a3a' },
  omid: { skin: '#e8b890', hair: '#2a1a10', top: '#8858c8', top2: '#5a3090', legs: '#302838' },
  parisa: { skin: '#f4c8a0', scarf: '#58a848', scarf2: '#88d070', top: '#f0e8d8', top2: '#c8c0a8', legs: '#3a4060' },
  basij: { skin: '#e8b890', hair: '#1a1410', top: '#8a8a58', top2: '#6a6a40', legs: '#4a4a38', stache: true, beard: true, kef: true },
  irgc: { skin: '#e8b890', hair: '#2a1a12', top: '#4b5a2e', top2: '#36421f', legs: '#36421f', stache: true, beard: true, cap: '#3d4a25' },
  censor: { skin: '#d8a888', hair: '#7a7a88', top: '#5a1828', top2: '#2a0c14', legs: '#1a1a1a', stache: true, cyber: true },
  shirin: { skin: '#f4c8a0', scarf: '#e05888', scarf2: '#ff90b8', top: '#30a8a0', top2: '#187870', legs: '#303048', flower: true },
};
function drawChar(ctx, px, py, L, dir, step) {
  const o = C.out, s = L.small ? 1 : 0;
  const top = 1 + s * 2;
  const rr = (x, y, w, h, c) => R(ctx, px + x, py + y, w, h, c);
  // legs
  const legY = 13;
  const lA = step === 1 ? -1 : 0, lB = step === 2 ? -1 : 0;
  rr(4, legY + lA, 4, 3 - lA, o); rr(8, legY + lB, 4, 3 - lB, o);
  rr(5, legY + lA, 2, 2 - lA, L.legs); rr(9, legY + lB, 2, 2 - lB, L.legs);
  // body
  rr(3, 8 + s, 10, 6 - s, o); rr(4, 9 + s, 8, 4 - s, L.top); rr(4, 12, 8, 1, L.top2);
  if (dir === 'down' || dir === 'up') { rr(3, 10 + s, 1, 2, L.skin); rr(12, 10 + s, 1, 2, L.skin); }
  else rr(dir === 'left' ? 9 : 6, 10 + s, 1, 2, L.skin);
  // head
  rr(3, top - 1, 10, 9, o);
  const hc = L.scarf || L.hair;
  rr(4, top, 8, 7, hc);
  if (dir === 'down') {
    rr(5, top + 2, 6, 5, L.skin); if (!L.scarf) rr(5, top + 2, 6, 1, hc);
    rr(6, top + 4, 1, 1, o); rr(9, top + 4, 1, 1, o);
    if (L.glasses) { rr(5, top + 3, 3, 1, o); rr(8, top + 3, 3, 1, o); }
    if (L.stache) rr(6, top + 6, 4, 1, L.hair);
    if (L.beard) rr(5, top + 6, 6, 1, L.hair);
    if (L.scarf) { rr(4, top + 6, 1, 2, hc); rr(11, top + 6, 1, 2, hc); rr(5, top, 6, 1, L.scarf2); }
  } else if (dir === 'up') {
    if (L.scarf) { rr(5, top + 1, 6, 1, L.scarf2); rr(4, top + 6, 8, 2, hc); }
  } else {
    const L2 = dir === 'left';
    rr(L2 ? 4 : 6, top + 2, 6, 5, L.skin); rr(L2 ? 9 : 4, top + 1, 3, 6, hc);
    rr(L2 ? 5 : 10, top + 4, 1, 1, o);
    if (L.glasses) rr(L2 ? 4 : 9, top + 3, 3, 1, o);
    if (L.stache) rr(L2 ? 4 : 9, top + 6, 3, 1, L.hair);
    if (L.scarf) rr(L2 ? 9 : 4, top + 6, 3, 2, hc);
  }
  if (L.kef) { rr(4, 8 + s, 8, 2, '#f4f0e4'); P(ctx, [px + 5, py + 8 + s, px + 7, py + 9 + s, px + 9, py + 8 + s, px + 11, py + 9 + s], '#1a1a1a'); }
  if (L.cap) { rr(3, top - 2, 10, 4, o); rr(4, top - 1, 8, 2, L.cap); if (dir === 'down') { rr(3, top + 1, 10, 1, o); P(ctx, [px + 7, py + top - 1, px + 8, py + top - 1], C.gold); } }
  if (L.cyber && dir === 'down') { rr(9, top + 4, 1, 1, '#ff2040'); rr(8, top + 3, 3, 1, '#4a4a58'); }
  if (L.flower) { rr(11, top - 1, 2, 2, '#fff070'); rr(12, top - 2, 1, 1, C.fruit2); }
}

const CHAR_URL = {};
function charUrl(look, dir = 'down') { const k = look + dir; if (CHAR_URL[k]) return CHAR_URL[k]; const cv = document.createElement('canvas'); cv.width = 16; cv.height = 16; drawChar(cv.getContext('2d'), 0, 0, LOOKS[look], dir, 0); return (CHAR_URL[k] = cv.toDataURL()); }
