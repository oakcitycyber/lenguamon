// ===== LENGUAMON art: the American maps (English mode) =====
function gWalk(c, x, y) { R(c, 0, 0, 16, 16, '#cfcac0'); c.strokeStyle = 'rgba(120,112,100,.45)'; c.lineWidth = .4; c.strokeRect(.2, .2, 15.6, 15.6); c.beginPath(); c.moveTo(8, 0); c.lineTo(8, 16); c.stroke(); const r = rng(x * 7 + y * 31); c.fillStyle = 'rgba(90,80,70,.25)'; for (let i = 0; i < 4; i++) c.fillRect(r() * 16, r() * 16, .6, .5); }
function gAsphalt(c, x, y, nb) {
  R(c, 0, 0, 16, 16, '#5a5c62'); const r = rng(x * 11 + y * 17); c.fillStyle = 'rgba(255,255,255,.08)'; for (let i = 0; i < 10; i++) c.fillRect(r() * 16, r() * 16, .6, .6);
  if (nb.R === 'ǁ') { c.fillStyle = '#f0c030'; c.fillRect(15.3, 2, .9, 5); c.fillRect(15.3, 10, .9, 5); }
  if (nb.L === 'ǁ') { c.fillStyle = '#f0c030'; c.fillRect(-.2, 2, .9, 5); c.fillRect(-.2, 10, .9, 5); }
  if (nb.L !== 'ǁ' && nb.R === 'ǁ') { c.fillStyle = '#e8e4dc'; c.fillRect(.4, 0, .6, 16); }
  if (nb.R !== 'ǁ' && nb.L === 'ǁ') { c.fillStyle = '#e8e4dc'; c.fillRect(15, 0, .6, 16); }
}
function tallTree(c, col, dark, light, trunk, layers) {
  rrect(c, 7.1, 11, 1.8, 5, .4, trunk);
  for (let i = 0; i < layers; i++) { const y = 1 + i * 3.2, w = 3 + i * 1.6; c.beginPath(); c.moveTo(8, y); c.lineTo(8 - w, y + 5); c.lineTo(8 + w, y + 5); c.closePath(); c.fillStyle = i % 2 ? col : dark; c.fill(); c.strokeStyle = 'rgba(20,40,20,.5)'; c.lineWidth = .4; c.stroke(); }
  c.fillStyle = light; c.beginPath(); c.moveTo(8, 2); c.lineTo(6, 6); c.lineTo(8, 5.4); c.fill();
}
Object.assign(TILE, {
  'ǁ': { g: gAsphalt }, '▫': { g: gWalk }, 'ƃ': { g(c, x, y, nb) { R(c, 0, 0, 16, 16, '#5a5c62'); c.fillStyle = '#c0392b'; c.fillRect(0, 0, 1.4, 16); c.fillRect(14.6, 0, 1.4, 16); if (nb.R === 'ƃ') { c.fillStyle = '#f0c030'; c.fillRect(15.3, 3, .9, 4); c.fillRect(15.3, 10, .9, 4); } } },
  '≋': { g: gSand, solid: true, d(c, x, y) { R(c, 0, 0, 16, 16, '#3f86a8'); c.strokeStyle = 'rgba(200,235,250,.6)'; c.lineWidth = .6; const r = rng(x * 3 + y * 5); for (let i = 0; i < 3; i++) { const wx = r() * 10, wy = 2 + r() * 12; c.beginPath(); c.moveTo(wx, wy); c.quadraticCurveTo(wx + 1.5, wy - 1, wx + 3, wy); c.quadraticCurveTo(wx + 4.5, wy + 1, wx + 6, wy); c.stroke(); } } },
  '¦': { g: gAuto, solid: true, d(c) { c.fillStyle = '#8a5a34'; c.fillRect(1, 5, 2, 10); c.fillRect(13, 5, 2, 10); c.fillStyle = '#a8724a'; c.fillRect(0, 7, 16, 1.8); c.fillRect(0, 11.5, 16, 1.8); c.strokeStyle = '#5a3418'; c.lineWidth = .35; c.strokeRect(0, 7, 16, 1.8); c.strokeRect(0, 11.5, 16, 1.8); } },
  '♣': { g: gSand, solid: true, d(c) {
    el(c, 8, 15.4, 3, .8, 'rgba(0,0,0,.2)');
    const g = '#4f8a46', gd = '#2f5e2c';
    rrect(c, 6.2, 2, 3.6, 13.6, 1.8, g, gd, .5); rrect(c, 2.4, 6, 2.6, 6, 1.3, g, gd, .5); rrect(c, 2.4, 10, 4.6, 2.4, 1.2, g, gd, .5); rrect(c, 11, 4, 2.6, 6, 1.3, g, gd, .5); rrect(c, 9, 8, 4.6, 2.4, 1.2, g, gd, .5);
    c.strokeStyle = 'rgba(30,70,30,.5)'; c.lineWidth = .3; c.beginPath(); c.moveTo(8, 3); c.lineTo(8, 15); c.stroke(); el(c, 8, 2.2, .7, .5, '#f6e080');
  } },
  '◭': { g: gSand, solid: true, d(c, x, y) { const r = rng(x * 9 + y * 13);
    c.beginPath(); c.moveTo(0, 16); c.lineTo(1.5, 5 + r() * 2); c.lineTo(5, 3.5); c.lineTo(11, 3.2 + r() * 2); c.lineTo(14.5, 5); c.lineTo(16, 16); c.closePath(); c.fillStyle = '#c0663a'; c.fill(); c.strokeStyle = '#6a2e14'; c.lineWidth = .5; c.stroke();
    c.fillStyle = '#d8844e'; c.fillRect(2, 5, 12, 1.6); c.fillStyle = 'rgba(110,46,20,.45)'; c.fillRect(1, 9, 14.5, 1); c.fillRect(.6, 12.5, 15, 1); c.fillStyle = '#9a4a28'; c.beginPath(); c.moveTo(11, 4); c.lineTo(14.5, 5); c.lineTo(16, 16); c.lineTo(12, 16); c.fill(); } },
  'Ŧ': { g: gAuto, solid: true, d(c) { tallTree(c, '#2f6a3a', '#244f2e', '#5a9a58', '#8a3a24', 4); } },
  'ᛉ': { g: gAuto, solid: true, d(c) { tallTree(c, '#3a7448', '#2a5634', '#6aa868', '#6a4424', 3); } },
  'Ϙ': { g: gAuto, solid: true, d(c, x, y) { rrect(c, 7, 10, 2, 6, .5, '#6a4424'); const r = rng(x * 5 + y * 7); const col = ['#4f8f3c', '#5a9a44', '#6a9a3a'][Math.floor(r() * 3)];
    el(c, 8, 7, 6.6, 5.6, col, '#2e5a24', .6); el(c, 5.4, 5.6, 2.8, 2.2, 'rgba(255,255,255,.18)'); el(c, 10.5, 9, 2.4, 1.6, 'rgba(0,0,0,.12)'); } },
  '‡': { g: gGrass, enc: true, d(c, x, y) { R(c, 0, 0, 16, 16, '#9a7a4a'); c.fillStyle = '#7a5a34'; for (let i = 0; i < 4; i++) c.fillRect(i * 4 + 1.5, 0, .7, 16);
    for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) { const cx = i * 4 + 2, cy = j * 8 + 6; blade(c, cx, cy + 4, 7, -1.6, '#5a8a2a', .9); blade(c, cx, cy + 4, 6, 1.8, '#6a9a34', .9); rrect(c, cx - .6, cy - 1.6, 1.4, 3, .6, '#e8c040'); } } },
  '▤': { g: gFloor, solid: true, d(c) { R(c, 0, 0, 16, 16, '#efe2c4'); c.fillStyle = 'rgba(180,140,90,.25)'; for (let x = 1; x < 16; x += 4) c.fillRect(x, 0, 1.2, 9); R(c, 0, 9, 16, 7, '#8a5a34'); R(c, 0, 9, 16, 1, '#5a3418'); c.fillStyle = 'rgba(0,0,0,.18)'; for (let x = 3; x < 16; x += 5) c.fillRect(x, 10, .5, 6); } },
  '▚': { g(c, x, y) { R(c, 0, 0, 16, 16, '#b07a4a'); c.fillStyle = '#8a5a34'; for (let k = 0; k < 4; k++) c.fillRect(0, k * 4 + 3.6, 16, .4); c.fillRect(((x * 7 + y * 3) % 4) * 4, 0, .4, 16); c.fillStyle = 'rgba(255,230,190,.12)'; c.fillRect(0, 1, 16, 1); } },
  '▬': { g(c) { R(c, 0, 0, 16, 16, '#b07a4a'); }, solid: true, counter: true, d(c, x) { R(c, 0, 3, 16, 13, '#6a4028'); R(c, 0, 3, 16, 2.6, '#d8c8a8'); R(c, 0, 5.6, 16, .5, '#3e2414'); c.fillStyle = '#5a3420'; for (let k = 2; k < 16; k += 4) c.fillRect(k, 7, .5, 9); if (x % 3 === 0) { rrect(c, 4, -3, 8, 6.4, .8, '#c8ccd2', '#3a3e46', .5); R(c, 6, 1, 4, 1.4, '#3a3e46'); el(c, 8, 4.2, 1.6, .7, '#f4f0e8'); } } },
  '◙': { g(c, x, y) { TILE['▚'].g(c, x, y); }, solid: true, d(c) { el(c, 8, 15, 6, 1.2, 'rgba(0,0,0,.18)'); R(c, 7.4, 8, 1.2, 7, '#3a3a40'); el(c, 8, 8, 6, 3.4, '#8a5a34', '#4a2c18', .5); el(c, 6, 7.4, 1.4, 1, '#f4f0e8', '#8a8a8a', .3); el(c, 10.4, 8.2, 1.2, .9, '#e8c090'); for (const sx of [1.4, 14.6]) { el(c, sx, 11.6, 1.6, 1, '#2e6a46', '#1a3e28', .3); R(c, sx - .3, 12.4, .6, 3, '#3a3a40'); } } },
  '♫': { g(c) { R(c, 0, 0, 16, 16, '#efe2c4'); }, solid: true, d(c) { rrect(c, 2, 1, 12, 15, 5, '#c8762a', '#5a3418', .6); rrect(c, 4, 3, 8, 6, 3.6, '#f6d860', '#8a5a14', .4); c.fillStyle = '#e83a6a'; c.fillRect(4, 10, 8, 1); c.fillStyle = '#3ac0e0'; c.fillRect(4, 12, 8, 1); } },
  '◘': { g(c) { R(c, 0, 0, 16, 16, '#efe2c4'); }, solid: true, d(c, x) { if (x % 2) { rrect(c, 1, 1, 14, 9, .6, '#26302a', '#5a3a24', .8); c.fillStyle = '#f4ecd8'; for (let k = 0; k < 3; k++) c.fillRect(3, 3 + k * 2.2, 6 + (k % 2) * 3, .7); el(c, 12, 4, 1.2, 1.2, '#c8a060'); } else { R(c, 0, 8, 16, 8, '#6a4028'); rrect(c, 1, 9, 14, 6, .6, 'rgba(230,244,250,.7)', '#5a3a24', .5); for (const [px, col] of [[4, '#d8a050'], [8, '#c87a3a'], [12, '#e8c070']]) el(c, px, 12.6, 1.6, 1, col, '#7a4a20', .3); rrect(c, 3, 1, 10, 6, .4, '#4a7a4a'); c.fillStyle = '#2e5a2e'; for (let k = 0; k < 4; k++) el(c, 4 + k * 2.6, 2 + (k % 2), 1.4, 1.2, '#3e8a3e'); } } },
  '▒': { g(c, x, y) { R(c, 0, 0, 16, 16, '#3a5a8a'); c.strokeStyle = 'rgba(0,0,0,.25)'; c.lineWidth = .4; c.strokeRect(0, 0, 16, 16); } },
  '◫': { g(c) { R(c, 0, 0, 16, 16, '#3a5a8a'); }, solid: true, d(c, x, y, nb) { R(c, 0, 0, 16, 16, '#e8e2d0'); c.strokeStyle = '#c8323a'; c.lineWidth = .9; for (const [on, x1, y1, x2, y2] of [[!nb.u, 0, 1, 16, 1], [!nb.d, 0, 15, 16, 15], [!nb.l, 1, 0, 1, 16], [!nb.r, 15, 0, 15, 16]]) if (on) { c.beginPath(); c.moveTo(x1, y1); c.lineTo(x2, y2); c.stroke(); }
      for (const [on, px, py] of [[!nb.u && !nb.l, 1, 1], [!nb.u && !nb.r, 15, 1], [!nb.d && !nb.l, 1, 15], [!nb.d && !nb.r, 15, 15]]) if (on) el(c, px, py, 1.2, 1.2, '#2a2a30'); } },
  'ȸ': { g(c) { R(c, 0, 0, 16, 16, '#3a5a8a'); }, solid: true, d(c) { c.strokeStyle = '#2a2a2a'; c.lineWidth = .5; c.beginPath(); c.moveTo(8, 0); c.lineTo(8, 2); c.stroke(); rrect(c, 4.5, 2, 7, 12, 3, '#b8262e', '#5a1014', .6); R(c, 4.5, 6, 7, 1, '#2a2a2a'); el(c, 8, 15.2, 3, .7, 'rgba(0,0,0,.25)'); } },
  '⚲': { g(c) { R(c, 0, 0, 16, 16, '#efe2c4'); }, solid: true, d(c) { R(c, 1, 12, 14, 2, '#5a5c62'); R(c, 2, 3, 1.2, 9, '#5a5c62'); R(c, 12.8, 3, 1.2, 9, '#5a5c62'); for (const y of [5, 9]) { R(c, 2, y, 12, .9, '#8a8e96'); el(c, 4, y + .4, 1, 1.8, '#2a2a30'); el(c, 12, y + .4, 1, 1.8, '#2a2a30'); } } },
  '◚': { g: gFloor, solid: true, d(c) { rrect(c, 1, 4, 14, 10, 2.4, '#4a6a8a', '#22344a', .6); rrect(c, 2.6, 8, 10.8, 4.4, 1.2, '#5a7a9a'); el(c, 5, 7, 1.6, 1.2, '#e8b040'); } },
  '▭': { g: gFloor, solid: true, d(c) { R(c, 2, 11, 12, 4, '#6a4424'); rrect(c, 2, 2, 12, 8.4, .8, '#1a1a20', '#000', .5); R(c, 3, 3, 10, 6.4, '#3a5a8a'); el(c, 6, 5, 2, 1, 'rgba(255,255,255,.3)'); } },
});
for (const ch of 'ⓗⓢⓓⓖⓔⓕⓘⓙⓚⓛⓜⓝ') TILE[ch] = { g: gWalk, door: true };
TILE['ⓞ'] = { g: gAsphalt, door: true };

// ---- American landmark and building drawings ----
const wins = (c, x0, y0, cols, rows, dx, dy, w, h, col) => { for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) R(c, x0 + i * dx, y0 + j * dy, w, h, col); };
function usDoor(c, x, H, col) { rrect(c, x + 4, H - 12, 8, 12, .6, col || '#6a3a1c', '#2a1408', .6); R(c, x + 5.5, H - 10.5, 5, 4, '#a8d0e8'); el(c, x + 10.4, H - 5, .6, .6, '#e8c040'); }
Object.assign(SPRITES, {
  adobe(c, W, H, s) {
    rrect(c, 1, 8, W - 2, H - 8, 2.4, '#d8a46c', '#7a4a24', .7); rrect(c, 4, 2, W - 16, 10, 2, '#cf9a62', '#7a4a24', .6);
    c.fillStyle = '#6a3a1c'; for (let x = 3; x < W - 2; x += 6) el(c, x, 10.5, 1, .8, '#6a3a1c');
    R(c, 6, 18, 7, 7, '#3a6a9a'); c.strokeStyle = '#2a4a6a'; c.lineWidth = .6; c.strokeRect(6, 18, 7, 7);
    R(c, W - 14, 18, 7, 7, '#3a6a9a'); c.strokeRect(W - 14, 18, 7, 7);
    usDoor(c, (s.door || 1) * 16, H, '#2a6a9a');
    for (const x of [8, W - 10]) { c.strokeStyle = '#a8261c'; c.lineWidth = 1; c.beginPath(); c.moveTo(x, 13); c.lineTo(x, 17); c.stroke(); el(c, x, 18, 1.2, 1.6, '#c8261c'); }
  },
  adobeschool(c, W, H, s) {
    SPRITES.adobe(c, W, H, s);
    rrect(c, W / 2 - 6, -6, 12, 12, 1.4, '#d8a46c', '#7a4a24', .6); c.beginPath(); c.arc(W / 2, 0, 3, Math.PI, 0); c.fillStyle = '#3a2a1a'; c.fill(); el(c, W / 2, 1.5, 1.4, 1.8, '#d8b040');
    rrect(c, W / 2 - 18, 12, 36, 6, 1, '#f4ead0', '#7a4a24', .5); c.fillStyle = '#2a3a6a'; c.font = 'bold 4.2px monospace'; c.textAlign = 'center'; c.fillText('ENGLISH SCHOOL', W / 2, 16.6);
  },
  chapel(c, W, H) {
    rrect(c, 4, 14, W - 8, H - 14, 2, '#d0a070', '#7a4a24', .7);
    rrect(c, W / 2 - 10, -2, 20, 20, 1.6, '#c8966a', '#7a4a24', .7); rrect(c, W / 2 - 7, -8, 14, 9, 1.4, '#c8966a', '#7a4a24', .6);
    c.beginPath(); c.arc(W / 2, -1, 3, Math.PI, 0); c.lineTo(W / 2 + 3, 3); c.lineTo(W / 2 - 3, 3); c.closePath(); c.fillStyle = '#3a2a1a'; c.fill();
    c.fillStyle = '#5a3a1c'; c.fillRect(W / 2 - .5, -14, 1, 7); c.fillRect(W / 2 - 3, -11.5, 6, 1);
    c.beginPath(); c.moveTo(W / 2 - 6, H); c.lineTo(W / 2 - 6, H - 14); c.quadraticCurveTo(W / 2, H - 22, W / 2 + 6, H - 14); c.lineTo(W / 2 + 6, H); c.closePath(); c.fillStyle = '#5a3418'; c.fill();
    R(c, 10, 22, 6, 8, '#3a6a9a'); R(c, W - 16, 22, 6, 8, '#3a6a9a');
  },
  diner(c, W, H, s) { // a neighbourhood café: brick front, big windows, green awning, tables outside
    const dx = (s.door || 2) * 16;
    rrect(c, 1, 4, W - 2, H - 4, .6, '#9a5a3e', '#3e2016', .8);
    c.fillStyle = 'rgba(70,30,20,.4)'; for (let y = 7; y < H; y += 3.2) for (let x = (y % 6.4 > 3 ? 2 : 5); x < W - 2; x += 6) c.fillRect(x, y, 5, .5);
    R(c, 1, 4, W - 2, 2.6, '#5a3020');
    rrect(c, W / 2 - 15, 7, 30, 7.4, 1.2, '#f4ecd8', '#2e5a3e', .7); c.fillStyle = '#2e6a46'; c.font = 'bold 6px serif'; c.textAlign = 'center'; c.fillText('CAFÉ', W / 2, 12.8);
    for (let x = 3; x < W - 3; x += 12) { if (Math.abs(x + 5 - (dx + 8)) < 10) continue; rrect(c, x, 20, 10, H - 25, .6, '#f4dc9a', '#3e2016', .6); c.fillStyle = 'rgba(255,255,255,.45)'; c.fillRect(x + 1.2, 21.2, 2.4, H - 28); c.fillStyle = '#6a3a24'; c.fillRect(x + 4.6, 20, .6, H - 25); }
    for (let x = 2; x < W - 2; x += 6) { c.beginPath(); c.moveTo(x, 15.5); c.lineTo(x + 6, 15.5); c.lineTo(x + 6, 19); c.quadraticCurveTo(x + 3, 21, x, 19); c.closePath(); c.fillStyle = (x / 6) % 2 < 1 ? '#2e6a46' : '#f4ecd8'; c.fill(); c.strokeStyle = '#1e3e2a'; c.lineWidth = .4; c.stroke(); }
    usDoor(c, dx, H, '#2e6a46');
    for (const tx of [5, W - 9]) { if (Math.abs(tx - dx - 8) < 12) continue; el(c, tx + 2, H - 3, 3, 1, '#3a3a40'); R(c, tx + 1.6, H - 3, .8, 3, '#3a3a40'); el(c, tx + 2, H - 3.4, .9, .5, '#f4f0e8'); }
  },
  gym(c, W, H, s) {
    rrect(c, 1, 2, W - 2, H - 2, .6, '#a84a34', '#4a1e14', .8);
    c.fillStyle = 'rgba(80,30,20,.45)'; for (let y = 5; y < H; y += 3.2) for (let x = (y % 6.4 > 3 ? 2 : 5); x < W - 2; x += 6) c.fillRect(x, y, 5, .5);
    R(c, 1, 2, W - 2, 3, '#6a2a1e');
    rrect(c, W / 2 - 18, 8, 36, 9, 1.4, '#1a1a22', '#f0c030', .7); c.fillStyle = '#f0c030'; c.font = 'bold 6.4px monospace'; c.textAlign = 'center'; c.fillText('BOXING GYM', W / 2, 14.6);
    for (const x of [6, W - 16]) { R(c, x, 22, 10, 10, '#2a3a4a'); c.strokeStyle = '#d8dce4'; c.lineWidth = .6; c.strokeRect(x, 22, 10, 10); }
    el(c, 9, 20, 3, 2.4, '#c8262e', '#4a1014', .5);
    usDoor(c, (s.door || 2) * 16, H, '#2a3a4a');
  },
  needle(c, W, H) {
    c.strokeStyle = '#d8dce4'; c.lineWidth = 1.6; c.beginPath(); c.moveTo(10, H); c.lineTo(15, 20); c.moveTo(22, H); c.lineTo(17, 20); c.moveTo(13, H); c.lineTo(16, 22); c.moveTo(19, H); c.lineTo(16, 22); c.stroke();
    c.strokeStyle = '#8a8e96'; c.lineWidth = .5; c.stroke();
    c.beginPath(); c.moveTo(1, 14); c.lineTo(31, 14); c.lineTo(27, 19); c.lineTo(5, 19); c.closePath(); c.fillStyle = '#e8eaee'; c.fill(); c.strokeStyle = '#4a4e58'; c.stroke();
    R(c, 3, 11, 26, 3, '#f0a030'); c.strokeRect(3, 11, 26, 3);
    c.beginPath(); c.moveTo(6, 11); c.quadraticCurveTo(16, 4, 26, 11); c.closePath(); c.fillStyle = '#d8dce4'; c.fill(); c.stroke();
    R(c, 15.4, -6, 1.2, 12, '#8a8e96'); el(c, 16, -6, 1.2, 1.2, '#ff3a4a');
  },
  pikeplace(c, W, H) {
    rrect(c, 1, 10, W - 2, H - 10, .6, '#e8dcc0', '#5a4a34', .6); R(c, 1, 10, W - 2, 3, '#2e6a4a');
    for (let x = 4; x < W - 4; x += 10) { rrect(c, x, 16, 8, 8, .6, '#f4f0e8', '#8a8478', .3); el(c, x + 2.5, 19, 1.4, 1, '#e8742a'); el(c, x + 5.5, 21, 1.4, 1, '#c8323a'); }
    rrect(c, W / 2 - 22, -2, 44, 10, 1.2, '#2a2a30', '#000', .6); c.fillStyle = '#ff4a4a'; c.font = 'bold 6px monospace'; c.textAlign = 'center'; c.fillText('PUBLIC MARKET', W / 2, 5);
    el(c, W / 2 + 26, 3, 4, 4, '#f4f0e8', '#2a2a30', .6); c.strokeStyle = '#2a2a30'; c.lineWidth = .5; c.beginPath(); c.moveTo(W / 2 + 26, 3); c.lineTo(W / 2 + 26, .6); c.moveTo(W / 2 + 26, 3); c.lineTo(W / 2 + 28, 3.4); c.stroke();
  },
  victorian(c, W, H) {
    const cols = ['#e8a0b8', '#a0c8e0', '#f0d080'];
    for (let i = 0; i < 3; i++) { const x = i * 16;
      c.beginPath(); c.moveTo(x + 1, 12); c.lineTo(x + 8, 1); c.lineTo(x + 15, 12); c.closePath(); c.fillStyle = '#5a4a5a'; c.fill(); c.strokeStyle = '#2a1a2a'; c.lineWidth = .5; c.stroke();
      rrect(c, x + 1.5, 11, 13, H - 11, .3, cols[i], '#4a3a4a', .5); R(c, x + 4, 14, 3, 5, '#f4f0e8'); R(c, x + 9, 14, 3, 5, '#f4f0e8'); R(c, x + 1.5, 21, 13, 1, '#f4f0e8'); R(c, x + 5.5, H - 8, 5, 8, '#5a3a2a'); }
  },
  cablecar(c, W, H) {
    R(c, 0, H - 4, W, 1, '#3a3a40');
    rrect(c, 3, 7, W - 6, H - 12, 2, '#c8323a', '#5a1014', .6); R(c, 3, 7, W - 6, 4, '#f0d080'); for (let x = 6; x < W - 6; x += 6) R(c, x, 12, 4, 6, '#a8d0e8');
    c.fillStyle = '#f0d080'; c.font = 'bold 3.6px monospace'; c.textAlign = 'center'; c.fillText('POWELL ST', W / 2, 23);
    for (const x of [10, W - 10]) el(c, x, H - 4, 2.2, 2.2, '#2a2a30');
  },
  transamerica(c, W, H) {
    for (const [x, w, h, col] of [[2, 12, 30, '#8a96a8'], [44, 14, 34, '#9aa4b4'], [32, 12, 24, '#7a8698']]) { rrect(c, x, H - h, w, h, .4, col, '#3a4250', .5); wins(c, x + 2, H - h + 3, Math.floor((w - 2) / 3), Math.floor((h - 4) / 4), 3, 4, 1.6, 2, 'rgba(240,230,170,.7)'); }
    c.beginPath(); c.moveTo(20, H); c.lineTo(25, -10); c.lineTo(30, H); c.closePath(); c.fillStyle = '#e8eaee'; c.fill(); c.strokeStyle = '#4a4e58'; c.lineWidth = .6; c.stroke();
    c.strokeStyle = 'rgba(90,96,110,.5)'; c.lineWidth = .3; for (let y = 0; y < H; y += 3) { const hw = (y + 10) / (H + 10) * 5; c.beginPath(); c.moveTo(25 - hw, y); c.lineTo(25 + hw, y); c.stroke(); }
  },
  goldengate(c, W, H) {
    for (const x of [-1, W - 5]) { rrect(c, x, -14, 6, H + 18, .4, '#c0392b', '#5a1410', .6); for (let y = -10; y < H; y += 9) R(c, x, y, 6, 1.4, '#8a1e14'); }
    c.strokeStyle = '#c0392b'; c.lineWidth = .9; c.beginPath(); c.moveTo(2, -14); c.quadraticCurveTo(W / 2, 30, W - 2, -14); c.stroke();
    c.lineWidth = .4; for (let x = 6; x < W - 6; x += 3) { const t = (x - 2) / (W - 4), yy = -14 + 4 * t * (1 - t) * 44; c.beginPath(); c.moveTo(x, yy); c.lineTo(x, H); c.stroke(); }
  },
  wharf(c, W, H) {
    rrect(c, 2, 10, W - 4, H - 10, .5, '#e8dcc0', '#5a4a34', .5);
    for (let x = 0; x < W; x += 8) { c.fillStyle = (x / 8) % 2 ? '#2a6aa8' : '#f4f0e8'; c.fillRect(x, 4, 8, 7); } R(c, 0, 4, W, 1, '#2a2a30');
    el(c, 12, 18, 5, 3, '#d89a4a', '#7a4a1a', .5); el(c, 30, 18, 4, 3, '#e8742a', '#8a3a14', .5);
  },
  statue(c, W, H) {
    el(c, W / 2, H - 6, 30, 7, '#7aa858', '#3a5a2a', .6); el(c, W / 2, H - 7, 22, 4, '#8ab868');
    rrect(c, W / 2 - 7, H - 26, 14, 20, .5, '#c8bca0', '#5a5040', .6); rrect(c, W / 2 - 9, H - 28, 18, 3, .4, '#b8ac90', '#5a5040', .5);
    const g = '#6ab8a0', gd = '#2e6a5a';
    c.beginPath(); c.moveTo(W / 2 - 6, H - 28); c.quadraticCurveTo(W / 2 - 7, H - 42, W / 2 - 3, H - 50); c.lineTo(W / 2 + 3, H - 50); c.quadraticCurveTo(W / 2 + 7, H - 42, W / 2 + 6, H - 28); c.closePath(); c.fillStyle = g; c.fill(); c.strokeStyle = gd; c.lineWidth = .6; c.stroke();
    el(c, W / 2, H - 53, 3.2, 3.6, g, gd, .6);
    for (let i = -3; i <= 3; i++) { c.beginPath(); c.moveTo(W / 2 + i * .9, H - 56); c.lineTo(W / 2 + i * 1.8, H - 60); c.strokeStyle = gd; c.lineWidth = .7; c.stroke(); }
    c.beginPath(); c.moveTo(W / 2 + 3, H - 46); c.lineTo(W / 2 + 7, H - 60); c.strokeStyle = g; c.lineWidth = 2.4; c.stroke();
    el(c, W / 2 + 7.6, H - 62, 1.8, 1.4, '#e8c040'); el(c, W / 2 + 7.6, H - 64.5, 1.4, 2, '#ffb030'); el(c, W / 2 + 7.6, H - 64, 3.5, 3.5, 'rgba(255,200,80,.35)');
    rrect(c, W / 2 - 8, H - 44, 4, 6, .4, '#5a8a78', gd, .4);
  },
  empire(c, W, H) {
    el(c, W / 2, H - 1, 15, 2, 'rgba(0,0,0,.25)');
    const g = c.createLinearGradient(0, 0, W, 0); g.addColorStop(0, '#d8d4c8'); g.addColorStop(1, '#9a968c');
    for (const [x, y, w] of [[2, H - 30, 28], [5, 36, 22], [8, 20, 16], [11, 12, 10]]) { c.fillStyle = g; c.fillRect(x, y, w, H - y); c.strokeStyle = '#4a4840'; c.lineWidth = .5; c.strokeRect(x, y, w, H - y); }
    c.strokeStyle = 'rgba(80,78,70,.5)'; c.lineWidth = .4; for (let x = 6; x < 28; x += 2.4) { c.beginPath(); c.moveTo(x, 22); c.lineTo(x, H); c.stroke(); }
    R(c, 13.5, 4, 5, 8, '#c8c4b8'); c.strokeRect(13.5, 4, 5, 8); R(c, 15.4, -10, 1.2, 15, '#8a8e96'); el(c, 16, -10, 1.6, 1.6, '#ff3a4a'); el(c, 16, -10, 4, 4, 'rgba(255,60,80,.25)');
  },
  timessq(c, W, H) {
    rrect(c, 1, 0, W - 2, H, .5, '#3a3e4a', '#1a1c22', .6);
    const ads = [['#e83a6a', 'NEW'], ['#3ac0e0', 'YORK'], ['#f0c030', 'SHOW'], ['#5ad06a', '24/7'], ['#c858e0', 'LIVE'], ['#ff7a30', 'EAT']];
    ads.forEach(([col, t], i) => { const x = 4 + (i % 3) * 25, y = 3 + Math.floor(i / 3) * 21; rrect(c, x, y, 22, 17, 1, col, '#fff', .4); c.fillStyle = '#fff'; c.font = 'bold 7px monospace'; c.textAlign = 'center'; c.fillText(t, x + 11, y + 11); });
  },
  arch(c, W, H) {
    c.beginPath(); c.moveTo(2, H); c.lineTo(2, 10); c.lineTo(W - 2, 10); c.lineTo(W - 2, H); c.lineTo(W - 14, H); c.lineTo(W - 14, 30); c.quadraticCurveTo(W / 2, 12, 14, 30); c.lineTo(14, H); c.closePath();
    c.fillStyle = '#f0ece2'; c.fill(); c.strokeStyle = '#6a6458'; c.lineWidth = .7; c.stroke();
    R(c, 0, 4, W, 7, '#e8e2d4'); c.strokeRect(0, 4, W, 7); c.strokeStyle = 'rgba(110,100,88,.5)'; c.lineWidth = .4; for (let x = 4; x < W; x += 4) { c.beginPath(); c.moveTo(x, 5); c.lineTo(x, 10); c.stroke(); }
    for (const x of [6, W - 10]) R(c, x, 14, 4, H - 16, 'rgba(160,150,130,.25)');
  },
  cart(c, W, H) {
    rrect(c, 4, 12, W - 8, 14, 1.4, '#d8dce4', '#4a4e58', .6); R(c, 4, 18, W - 8, 2, '#c8323a');
    c.beginPath(); c.moveTo(2, 10); c.lineTo(W / 2, 1); c.lineTo(W - 2, 10); c.closePath(); for (let i = 0; i < 6; i++) { } c.fillStyle = '#f0c030'; c.fill(); c.strokeStyle = '#8a5a14'; c.lineWidth = .5; c.stroke();
    c.strokeStyle = '#c8323a'; c.lineWidth = 1.2; c.beginPath(); c.moveTo(W / 2, 1); c.lineTo(W / 2 - 8, 10); c.moveTo(W / 2, 1); c.lineTo(W / 2 + 8, 10); c.stroke();
    c.fillStyle = '#2a2a30'; c.font = 'bold 4px monospace'; c.textAlign = 'center'; c.fillText('HOT DOGS', W / 2, 17);
    el(c, 10, 27, 2.4, 2.4, '#2a2a30'); el(c, W - 10, 27, 2.4, 2.4, '#2a2a30');
  },
  barn(c, W, H) {
    c.beginPath(); c.moveTo(4, 18); c.lineTo(12, 4); c.lineTo(36, 4); c.lineTo(44, 18); c.lineTo(44, H); c.lineTo(4, H); c.closePath(); c.fillStyle = '#b02a24'; c.fill(); c.strokeStyle = '#4a1210'; c.lineWidth = .7; c.stroke();
    c.beginPath(); c.moveTo(2, 19); c.lineTo(12, 3); c.lineTo(36, 3); c.lineTo(46, 19); c.strokeStyle = '#3a3a40'; c.lineWidth = 2; c.stroke();
    R(c, 16, 26, 16, H - 26, '#8a1e1a'); c.strokeStyle = '#f4f0e8'; c.lineWidth = 1; c.strokeRect(16, 26, 16, H - 26); c.beginPath(); c.moveTo(16, 26); c.lineTo(32, H); c.moveTo(32, 26); c.lineTo(16, H); c.stroke();
    R(c, 20, 10, 8, 7, '#f4f0e8'); R(c, 21, 11, 6, 5, '#3a2a1a');
    rrect(c, 50, 0, 12, H, 6, '#b8bcc4', '#4a4e58', .6); el(c, 56, 3, 6, 4, '#9aa0aa', '#4a4e58', .5); for (let y = 10; y < H; y += 6) R(c, 50, y, 12, .6, '#8a8e96');
  },
  chiskyline(c, W, H) {
    for (const [x, w, h, col] of [[0, 14, 30, '#7a8698'], [40, 18, 36, '#8a96a8'], [28, 12, 26, '#6a7688']]) { rrect(c, x, H - h, w, h, .4, col, '#3a4250', .5); wins(c, x + 2, H - h + 3, Math.floor((w - 2) / 3), Math.floor((h - 4) / 4), 3, 4, 1.6, 2, 'rgba(240,230,170,.7)'); }
    for (const [x, y, w] of [[14, 6, 14], [16, -4, 10], [18, -14, 6]]) { R(c, x, y, w, H - y, '#2a2c34'); c.strokeStyle = '#000'; c.lineWidth = .4; c.strokeRect(x, y, w, H - y); }
    wins(c, 15.5, 8, 4, 10, 3, 4, 1.4, 1.6, 'rgba(240,220,150,.55)');
    R(c, 18.6, -22, .8, 8, '#8a8e96'); R(c, 22.6, -22, .8, 8, '#8a8e96');
  },
  bean(c, W, H) {
    R(c, 0, 0, W, H, '#d8d4cc'); c.strokeStyle = 'rgba(120,112,100,.4)'; c.lineWidth = .4; for (let x = 0; x < W; x += 8) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, H); c.stroke(); }
    const g = c.createLinearGradient(0, 4, 0, H - 2); g.addColorStop(0, '#f4f8fc'); g.addColorStop(.35, '#8a9cb4'); g.addColorStop(.6, '#e8eef4'); g.addColorStop(1, '#6a7a90');
    c.beginPath(); c.moveTo(10, H - 4); c.bezierCurveTo(4, H - 4, 4, 6, 24, 5); c.lineTo(56, 5); c.bezierCurveTo(76, 6, 76, H - 4, 70, H - 4); c.quadraticCurveTo(66, H - 12, 40, H - 12); c.quadraticCurveTo(14, H - 12, 10, H - 4); c.closePath(); c.fillStyle = g; c.fill(); c.strokeStyle = '#4a5468'; c.lineWidth = .7; c.stroke();
    el(c, 30, 10, 10, 2, 'rgba(255,255,255,.7)');
  },
  fountain(c, W, H) {
    el(c, W / 2, H - 14, 20, 8, '#e8dcc0', '#7a6a50', .7); el(c, W / 2, H - 15, 17, 6, '#4f9cc0');
    el(c, W / 2, H - 20, 10, 4, '#e8dcc0', '#7a6a50', .6); el(c, W / 2, H - 21, 8, 3, '#5aa8c8'); rrect(c, W / 2 - 2, H - 30, 4, 10, 1, '#e8dcc0', '#7a6a50', .5);
    c.strokeStyle = 'rgba(230,248,255,.9)'; c.lineWidth = 1.2; c.beginPath(); c.moveTo(W / 2, H - 30); c.lineTo(W / 2, H - 46); c.stroke();
    for (const s of [-1, 1]) { c.beginPath(); c.moveTo(W / 2, H - 44); c.quadraticCurveTo(W / 2 + s * 8, H - 44, W / 2 + s * 10, H - 20); c.lineWidth = .8; c.stroke(); }
  },
  rushmore(c, W, H) {
    c.beginPath(); c.moveTo(0, H); c.lineTo(2, 12); c.quadraticCurveTo(14, 0, 32, 2); c.quadraticCurveTo(52, 0, 62, 10); c.lineTo(64, H); c.closePath(); c.fillStyle = '#bcb4a8'; c.fill(); c.strokeStyle = '#5a5248'; c.lineWidth = .7; c.stroke();
    for (const [x, y, s] of [[12, 16, 1], [26, 14, 1.05], [40, 17, .95], [53, 19, .9]]) {
      el(c, x, y, 5 * s, 7 * s, '#d4ccc0', '#7a7266', .5); c.strokeStyle = '#7a7266'; c.lineWidth = .5;
      c.beginPath(); c.moveTo(x - 2.4 * s, y - 1); c.lineTo(x - .8 * s, y - 1); c.moveTo(x + .8 * s, y - 1); c.lineTo(x + 2.4 * s, y - 1); c.moveTo(x, y); c.lineTo(x - .5, y + 2.4); c.moveTo(x - 1.6, y + 4); c.lineTo(x + 1.6, y + 4); c.stroke();
    }
    c.fillStyle = 'rgba(120,110,96,.4)'; for (let i = 0; i < 18; i++) c.fillRect(i * 3.6, H - 10 + (i % 3), 2.6, 10);
  },
  oldfaithful(c, W, H) {
    el(c, W / 2, H - 6, 20, 6, '#d8ccb0', '#8a7a5a', .6); el(c, W / 2, H - 6, 12, 3.4, '#c8b48a'); el(c, W / 2, H - 6, 4, 1.6, '#5aa8c8');
    const g = c.createLinearGradient(0, -20, 0, H - 6); g.addColorStop(0, 'rgba(255,255,255,.2)'); g.addColorStop(1, 'rgba(240,248,255,.95)');
    c.beginPath(); c.moveTo(W / 2 - 3, H - 6); c.bezierCurveTo(W / 2 - 4, 20, W / 2 - 14, 4, W / 2 - 10, -16); c.quadraticCurveTo(W / 2, -24, W / 2 + 10, -16); c.bezierCurveTo(W / 2 + 14, 4, W / 2 + 4, 20, W / 2 + 3, H - 6); c.closePath(); c.fillStyle = g; c.fill();
    for (const [x, y, r] of [[-8, -14, 6], [6, -16, 7], [0, -22, 6], [10, -6, 5], [-10, -2, 5]]) el(c, W / 2 + x, y, r, r * .8, 'rgba(255,255,255,.55)');
  },
  shield66(c, W, H) {
    c.beginPath(); c.moveTo(W / 2 - 9, 3); c.lineTo(W / 2 + 9, 3); c.quadraticCurveTo(W / 2 + 10, 10, W / 2, 14); c.quadraticCurveTo(W / 2 - 10, 10, W / 2 - 9, 3); c.closePath(); c.fillStyle = 'rgba(240,236,226,.85)'; c.fill(); c.strokeStyle = 'rgba(30,30,36,.8)'; c.lineWidth = .7; c.stroke();
    c.fillStyle = 'rgba(30,30,36,.85)'; c.font = 'bold 6px monospace'; c.textAlign = 'center'; c.fillText('66', W / 2, 11.4); c.font = 'bold 2.6px monospace'; c.fillText('US ROUTE', W / 2, 6);
  },
});
// sprite functions now receive the sprite spec as a third argument (for door positions)
function drawSprites(c, m) {
  for (const s of m.sprites || []) { c.save(); c.translate(s.x * TS, s.y * TS); SPRITES[s.id](c, s.w * TS, s.h * TS, s); c.restore(); }
}

// ---- the grand-finale cities: Mashhad (Persian game) and Washington, DC (English game) ----
for (const ch of 'ⓟⓠ') TILE[ch] = { g: gWalk, door: true };
// side gates out of Tehran and New York: an arch turned to face the road
TILE['⊐'] = { g: gPath, door: true, d(c) { c.save(); c.translate(16, 0); c.rotate(Math.PI / 2); TILE['0'].d(c); c.restore(); } };
TILE['⊏'] = { g: gAsphalt, door: true, d(c) {
  R(c, 3, 9, 1, 7, '#6a6e76'); R(c, 12, 9, 1, 7, '#6a6e76');
  rrect(c, 1.5, 1.5, 13, 8.5, 1, '#1e7a46', '#f4f4f0', .5);
  c.fillStyle = '#f4f4f0'; c.font = 'bold 3.4px Verdana'; c.textAlign = 'center'; c.fillText('I-95 S', 8, 5.2); c.fillText('D.C. →', 8, 8.8);
} };
Object.assign(SPRITES, {
  ferdowsi(c, W, H) { // a white stone tomb on a stepped platform, with square columns, in the style of Pasargadae and Persepolis
    el(c, W / 2, H - 1, 58, 3, 'rgba(0,0,0,.22)');
    for (let i = 0; i < 4; i++) { const w = W - 10 - i * 10, y = H - 5 - i * 4; rrect(c, (W - w) / 2, y, w, 4.4, .3, i % 2 ? '#ece6d6' : '#ddd5c0', '#7d7260', .5); }
    const top = H - 21, x0 = 34, w = W - 68;
    rrect(c, x0, top - 26, w, 26, .4, '#f2ecdc', '#7d7260', .5);
    for (let i = 0; i < 6; i++) { const cx = x0 + 6 + i * (w - 12) / 5; R(c, cx - 2, top - 24, 4, 22, '#e4dcc6'); c.strokeStyle = '#a89a80'; c.lineWidth = .4; c.strokeRect(cx - 2, top - 24, 4, 22); R(c, cx - 3, top - 26, 6, 2, '#d6ccb4'); }
    rrect(c, x0 - 3, top - 32, w + 6, 6, .4, '#e8e0cc', '#7d7260', .5);
    // the faravahar, the winged symbol of ancient Persia, over the entrance
    c.fillStyle = '#c8a040'; c.beginPath(); c.ellipse(W / 2, top - 29, 12, 1.6, 0, 0, 7); c.fill(); el(c, W / 2, top - 29.5, 2, 2, '#c8a040');
    rrect(c, W / 2 - 4, top - 14, 8, 12, .4, '#5a4a36');
    c.fillStyle = 'rgba(120,100,70,.5)'; c.font = '3px serif'; c.textAlign = 'center'; c.fillText('فردوسی', W / 2, top - 17);
    // a fountain pool in front
    el(c, W / 2, H - 1.5, 16, 1.6, '#4aa8c8', '#2a6a8a', .4);
  },
  khayyam(c, W, H) { // the modern tomb of Omar Khayyam: a criss-cross lattice of diamond ribs over a small plinth
    el(c, W / 2, H - 1, 28, 2.4, 'rgba(0,0,0,.22)');
    rrect(c, 8, H - 9, W - 16, 7, .4, '#d8d0c0', '#7d7260', .5);
    c.strokeStyle = '#e8e2d4'; c.lineWidth = 1.5;
    for (let i = 0; i < 10; i++) {
      const a = i / 10 * Math.PI, bx = W / 2 + Math.cos(a) * 26;
      c.beginPath(); c.moveTo(bx, H - 9); c.quadraticCurveTo(W / 2 + Math.cos(a) * 10, 8, W / 2, 3); c.stroke();
    }
    c.strokeStyle = '#3a8aa8'; c.lineWidth = .7;
    for (let k = 0; k < 4; k++) { const y = H - 14 - k * 7, rx = 22 - k * 5; c.beginPath(); c.ellipse(W / 2, y, rx, 2, 0, Math.PI, 0); c.stroke(); }
    el(c, W / 2, 3, 1.6, 1.6, '#3a8aa8');
    rrect(c, W / 2 - 5, H - 8, 10, 4, .3, '#f4f0e8', '#7d7260', .4);
    // turquoise tile garden around it
    for (const x of [3, W - 6]) rrect(c, x, H - 6, 3, 4, .3, '#40b0b0', '#206a6a', .4);
  },
  capitol(c, W, H) { // the US Capitol: a white dome on a long neoclassical building
    el(c, W / 2, H - 1, 60, 3, 'rgba(0,0,0,.22)');
    const wing = '#f2f0ea', ln = '#8a8a90';
    rrect(c, 4, H - 26, W - 8, 24, .5, wing, ln, .5);
    for (let x = 9; x < W - 8; x += 6) { R(c, x, H - 22, 2.4, 16, '#e0ded6'); }
    c.strokeStyle = ln; c.lineWidth = .4; for (let x = 9; x < W - 8; x += 6) c.strokeRect(x, H - 22, 2.4, 16);
    R(c, 4, H - 27, W - 8, 2, '#d8d6ce');
    // the central portico and steps
    c.beginPath(); c.moveTo(W / 2 - 20, H - 30); c.lineTo(W / 2, H - 38); c.lineTo(W / 2 + 20, H - 30); c.closePath(); c.fillStyle = wing; c.fill(); c.stroke();
    rrect(c, W / 2 - 20, H - 30, 40, 4, .3, '#e8e6de', ln, .4);
    for (let i = 0; i < 3; i++) R(c, W / 2 - 22 - i * 2, H - 4 + i, 44 + i * 4, 1.4, i % 2 ? '#d8d6ce' : '#e8e6de');
    // drum and dome
    rrect(c, W / 2 - 13, H - 46, 26, 9, .4, '#f2f0ea', ln, .5);
    for (let x = W / 2 - 11; x < W / 2 + 12; x += 3) R(c, x, H - 45, 1.2, 7, '#dcdad2');
    c.beginPath(); c.moveTo(W / 2 - 12, H - 46); c.bezierCurveTo(W / 2 - 12, H - 62, W / 2 + 12, H - 62, W / 2 + 12, H - 46); c.closePath();
    const g = c.createLinearGradient(W / 2 - 12, 0, W / 2 + 12, 0); g.addColorStop(0, '#ffffff'); g.addColorStop(1, '#c8c8d0'); c.fillStyle = g; c.fill(); c.strokeStyle = ln; c.stroke();
    c.strokeStyle = 'rgba(120,120,130,.5)'; for (const dx of [-6, 0, 6]) { c.beginPath(); c.moveTo(W / 2 + dx, H - 46); c.quadraticCurveTo(W / 2 + dx * .6, H - 56, W / 2, H - 58); c.stroke(); }
    R(c, W / 2 - 1.5, H - 64, 3, 5, '#f2f0ea'); el(c, W / 2, H - 65, 1.4, 1.6, '#8a8e96');
    // the flag
    R(c, W / 2 + 18, H - 52, .6, 14, '#6a6a70'); R(c, W / 2 + 18.6, H - 52, 6, 4, '#c8323a'); R(c, W / 2 + 18.6, H - 52, 2.6, 2, '#2a3a8a');
  },
  washmonument(c, W, H) { // a tall white marble obelisk
    el(c, W / 2, H - 1, 10, 2, 'rgba(0,0,0,.25)');
    c.beginPath(); c.moveTo(W / 2 - 5, H - 2); c.lineTo(W / 2 - 3.4, 8); c.lineTo(W / 2, 1); c.lineTo(W / 2 + 3.4, 8); c.lineTo(W / 2 + 5, H - 2); c.closePath();
    const g = c.createLinearGradient(W / 2 - 5, 0, W / 2 + 5, 0); g.addColorStop(0, '#f4f2ec'); g.addColorStop(1, '#b8b4aa'); c.fillStyle = g; c.fill(); c.strokeStyle = '#6a6860'; c.lineWidth = .5; c.stroke();
    c.strokeStyle = 'rgba(160,140,110,.6)'; c.beginPath(); c.moveTo(W / 2 - 4.5, H * .65); c.lineTo(W / 2 + 4.5, H * .65); c.stroke(); // the color change from the 20-year pause
    for (const dx of [-14, -9, 9, 14]) { R(c, W / 2 + dx, H - 12, .4, 10, '#6a6a70'); R(c, W / 2 + dx + .4, H - 12, 3, 2, ['#c8323a', '#f4f4f0'][Math.abs(dx) % 2]); }
  },
  libertybell(c, W, H) { // the Liberty Bell hanging in its wooden yoke
    el(c, W / 2, H - 1, 20, 2.2, 'rgba(0,0,0,.2)');
    R(c, 4, 4, 2.6, H - 6, '#6a4424'); R(c, W - 6.6, 4, 2.6, H - 6, '#6a4424'); rrect(c, 2, 2, W - 4, 4, .6, '#7a5030', '#3a2010', .5);
    c.beginPath(); c.moveTo(W / 2 - 6, 8); c.quadraticCurveTo(W / 2 - 7, 20, W / 2 - 12, 34); c.lineTo(W / 2 + 12, 34); c.quadraticCurveTo(W / 2 + 7, 20, W / 2 + 6, 8); c.closePath();
    const g = c.createLinearGradient(W / 2 - 12, 0, W / 2 + 12, 0); g.addColorStop(0, '#a88a50'); g.addColorStop(.4, '#c8a868'); g.addColorStop(1, '#6a5430'); c.fillStyle = g; c.fill(); c.strokeStyle = '#3a2a10'; c.lineWidth = .6; c.stroke();
    R(c, W / 2 - 12, 33, 24, 2, '#7a6038');
    c.strokeStyle = '#2a1a08'; c.lineWidth = .7; c.beginPath(); c.moveTo(W / 2 - 1, 34); c.lineTo(W / 2 + 1, 28); c.lineTo(W / 2 - .5, 23); c.lineTo(W / 2 + 1, 17); c.stroke(); // the famous crack
    c.strokeStyle = 'rgba(60,40,10,.6)'; c.lineWidth = .4; c.beginPath(); c.moveTo(W / 2 - 8, 14); c.lineTo(W / 2 + 8, 14); c.stroke();
  },
  fortmchenry(c, W, H) { // the star-shaped brick fort with its huge flag
    el(c, W / 2, H - 1, 30, 2.6, 'rgba(0,0,0,.2)');
    const cx = W / 2, cy = H - 15;
    c.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 9 : 19; c.lineTo(cx + Math.cos(a) * r * 1.4, cy + Math.sin(a) * r * .55); } c.closePath();
    c.fillStyle = '#b85a3a'; c.fill(); c.strokeStyle = '#5a2a1a'; c.lineWidth = .6; c.stroke();
    c.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? 6 : 13; c.lineTo(cx + Math.cos(a) * r * 1.4, cy - 2 + Math.sin(a) * r * .5); } c.closePath(); c.fillStyle = '#6a9a48'; c.fill();
    R(c, cx - .4, 2, .8, cy - 4, '#5a5a60');
    for (let i = 0; i < 7; i++) R(c, cx + .4, 2 + i * 1.4, 14, 1.4, i % 2 ? '#f4f4f0' : '#c8323a');
    R(c, cx + .4, 2, 6, 5.6, '#2a3a8a');
  },
});

// ---- gym props that close off the left side of the gym floor ----
TILE['ɱ'] = { g: gFloor, solid: true, d(c) { // a floor stand of meel clubs
  el(c, 8, 14.6, 6.6, 1.2, 'rgba(0,0,0,.2)');
  rrect(c, 1.5, 12, 13, 2.4, .5, C.woodD, C.out, .4);
  for (const [cx, h] of [[3.6, 9], [6.6, 10.5], [9.6, 10.5], [12.6, 9]]) {
    c.beginPath(); c.moveTo(cx - .55, 12 - h); c.lineTo(cx + .55, 12 - h); c.lineTo(cx + 1.6, 11); c.quadraticCurveTo(cx, 12.6, cx - 1.6, 11); c.closePath();
    c.fillStyle = '#b8742e'; c.fill(); c.strokeStyle = C.out; c.lineWidth = .35; c.stroke(); R(c, cx - .9, 12 - h + 2.4, 1.8, .7, C.gold);
  }
} };
TILE['ɯ'] = { g(c) { R(c, 0, 0, 16, 16, '#3a5a8a'); c.strokeStyle = 'rgba(0,0,0,.25)'; c.lineWidth = .4; c.strokeRect(0, 0, 16, 16); }, solid: true, d(c) { // a weight bench with a barbell
  el(c, 8, 14.4, 7, 1.2, 'rgba(0,0,0,.25)');
  R(c, 4, 9, 1.2, 5, '#5a5c62'); R(c, 10.8, 9, 1.2, 5, '#5a5c62'); rrect(c, 2.5, 7.4, 11, 2.6, 1, '#2a2a30', '#111', .4);
  R(c, 1, 4.6, 14, .9, '#8a8e96'); for (const x of [1.4, 12.4]) rrect(c, x, 2.4, 2.2, 5.4, .6, '#1a1a20', '#000', .3);
} };
