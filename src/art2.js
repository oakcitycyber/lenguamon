// ===== LENGUAMON art v2: smoother tiles and characters =====
// The world canvas now renders at 4x resolution. These declarations replace the blockier
// versions in art.js (later function declarations win), and swap in smooth natural tiles.
const SCALE = 4;
function el(c, x, y, rx, ry, fill, stroke, lw = .55) { c.beginPath(); c.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); if (fill) { c.fillStyle = fill; c.fill(); } if (stroke) { c.strokeStyle = stroke; c.lineWidth = lw; c.stroke(); } }
function rrect(c, x, y, w, h, r, fill, stroke, lw = .55) { c.beginPath(); c.roundRect(x, y, w, h, r); if (fill) { c.fillStyle = fill; c.fill(); } if (stroke) { c.strokeStyle = stroke === true ? C.out : stroke; c.lineWidth = lw; c.stroke(); } }
function blade(c, x, y, h, lean, col, w = .8) { c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + lean * .3, y - h * .6, x + lean, y - h); c.strokeStyle = col; c.lineWidth = w; c.lineCap = 'round'; c.stroke(); }

// ---- ground ----
function gGrass(c, x, y) {
  R(c, 0, 0, 16, 16, C.grass);
  const r = rng(x * 73 + y * 131);
  for (let i = 0; i < 3; i++) { const bx = 1.5 + r() * 12, by = 4 + r() * 10; blade(c, bx, by, 1.6, -.6, C.grass2, .55); blade(c, bx + 1, by, 2, .5, C.grass2, .55); }
}
function gSand(c, x, y) {
  R(c, 0, 0, 16, 16, C.sand);
  const r = rng(x * 57 + y * 97);
  for (let i = 0; i < 4; i++) el(c, 1 + r() * 14, 1 + r() * 14, .5 + r() * .5, .35, C.sand2);
}
function gPath(c, x, y) {
  R(c, 0, 0, 16, 16, C.path);
  const r = rng(x * 41 + y * 89);
  for (let i = 0; i < 3; i++) el(c, 1 + r() * 14, 1 + r() * 14, .7 + r() * .6, .45, C.path2);
}
// ---- domes: one smooth dome spread across two tiles ----
function domeTile(c, nb, col) {
  const left = nb.R === nb.self, cx = left ? 16 : 0;
  c.save(); c.beginPath(); c.rect(0, 0, 16, 16); c.clip();
  c.beginPath(); c.moveTo(cx - 12.5, 16); c.bezierCurveTo(cx - 12.5, 5, cx - 6, 2.5, cx, 2); c.bezierCurveTo(cx + 6, 2.5, cx + 12.5, 5, cx + 12.5, 16); c.closePath();
  c.fillStyle = col.b; c.fill(); c.strokeStyle = C.out; c.lineWidth = .6; c.stroke();
  c.beginPath(); c.moveTo(cx - 12.5, 16); c.bezierCurveTo(cx - 12.5, 11, cx - 10, 8, cx - 7, 6); c.lineTo(cx - 7, 16); c.fillStyle = col.d; c.globalAlpha = .35; c.fill(); c.globalAlpha = 1;
  el(c, cx - 5, 7.5, 2, 3.2, col.l); el(c, cx - 4.4, 5.6, .9, 1, '#ffffff');
  c.fillStyle = col.p; for (const [dx, dy] of [[-9, 12], [-3, 11], [3, 11], [9, 12], [-6, 14.5], [0, 14], [6, 14.5], [-1, 7.5], [5, 8]]) { c.beginPath(); c.arc(cx + dx, dy, .55, 0, 7); c.fill(); }
  c.fillStyle = C.gold; c.fillRect(cx - .35, -1, .7, 3.5); el(c, cx, -.2, .9, .9, C.gold, C.goldD, .3);
  c.restore();
}
// ---- characters: smooth chibi sprites, 16x16 logical units ----
function drawChar(ctx, px, py, L, dir, step) {
  // slim chibi: smaller head, narrow body, longer legs
  const c = ctx; c.save(); c.translate(px, py);
  el(c, 8, 15.4, 3.4, .9, 'rgba(0,0,0,.2)');
  if (dir === 'right') { c.translate(16, 0); c.scale(-1, 1); dir = 'left'; }
  if (L.small) { c.translate(8, 15.5); c.scale(.85, .85); c.translate(-8, -15.5); }
  c.lineJoin = 'round'; c.lineCap = 'round';
  const O = C.out, hairC = L.hair || '#2a1a10', st = L.hairStyle || 'short';
  const HX = 8, HY = 4.6, HR = 3.4;              // head centre and radius
  const la = step === 1 ? -.8 : 0, lb = step === 2 ? -.8 : 0;
  rrect(c, 6.15, 11.4 + la, 1.6, 4.1, .7, L.legs, true, .45); rrect(c, 8.25, 11.4 + lb, 1.6, 4.1, .7, L.legs, true, .45);
  if (st === 'long' && dir !== 'up') rrect(c, HX - 3.6, HY - .4, 7.2, 7.2, 2.6, hairC, true, .45);
  rrect(c, 5.2, 7.6, 5.6, 4.9, 1.8, L.top, true, .45);
  c.fillStyle = L.top2; c.fillRect(5.6, 11.4, 4.8, .7);
  if (L.coat) { c.fillStyle = L.top2; c.fillRect(7.75, 7.9, .5, 3.4); }
  if (L.kef) { rrect(c, 5.3, 7.3, 5.4, 1.6, .7, '#f4f0e4', true, .4); c.fillStyle = '#1a1a1a'; for (let i = 0; i < 4; i++) c.fillRect(5.8 + i * 1.3, 7.7 + (i % 2) * .6, .45, .45); }
  if (dir === 'left') { rrect(c, 8.5, 8.1, 1.4, 3.6, .7, L.top, true, .4); el(c, 9.2, 11.9, .6, .6, L.skin); }
  else { for (const ax of [4.3, 10.3]) { rrect(c, ax, 8.1, 1.4, 3.6, .7, L.top, true, .4); el(c, ax + .7, 11.9, .6, .6, L.skin); } }
  el(c, HX, HY, HR, HR * 1.02, L.skin, O, .45);
  const L0 = HX - HR - .1, R0 = HX + HR + .1, T0 = HY - HR - .6;
  if (dir === 'up') {
    el(c, HX, HY - .2, HR + .15, HR + .1, st === 'bald' ? L.skin : hairC, O, .45);
    if (st === 'long') rrect(c, L0, HY, R0 - L0, 6.2, 2.4, hairC, true, .45);
    if (st === 'bun') el(c, HX, T0 + .2, 1.5, 1.3, hairC, O, .45);
  } else if (dir === 'down') {
    if (st !== 'bald') {
      c.beginPath(); c.moveTo(L0, HY + .8); c.bezierCurveTo(L0 - .2, T0, R0 + .2, T0, R0, HY + .8);
      c.quadraticCurveTo(R0 - 1, HY - 1.6, HX + 1.3, HY - 1.3); c.quadraticCurveTo(HX, HY - .7, HX - 1.3, HY - 1.3); c.quadraticCurveTo(L0 + 1, HY - 1.6, L0, HY + .8);
      c.fillStyle = hairC; c.fill(); c.strokeStyle = O; c.lineWidth = .45; c.stroke();
      if (st === 'long') { rrect(c, L0 - .3, HY - .8, 1.4, 6, .7, hairC, true, .4); rrect(c, R0 - 1.1, HY - .8, 1.4, 6, .7, hairC, true, .4); }
      if (st === 'bun') el(c, HX, T0 + .1, 1.5, 1.3, hairC, O, .45);
    } else { c.beginPath(); c.arc(HX, HY, HR, Math.PI * 1.1, Math.PI * 1.9); c.strokeStyle = hairC; c.lineWidth = .8; c.stroke(); }
    const ey = HY + .5;
    el(c, HX - 1.35, ey, .45, .58, '#1e1410'); el(c, HX + 1.35, ey, .45, .58, '#1e1410');
    c.fillStyle = '#fff'; c.fillRect(HX - 1.32, ey - .38, .25, .25); c.fillRect(HX + 1.38, ey - .38, .25, .25);
    el(c, HX - 2.3, ey + 1.2, .6, .32, 'rgba(255,120,140,.45)'); el(c, HX + 2.3, ey + 1.2, .6, .32, 'rgba(255,120,140,.45)');
    if (L.cyber) { el(c, HX + 1.35, ey, 1, 1, '#3a3a48', O, .3); el(c, HX + 1.35, ey, .55, .55, '#ff2a4a'); }
    if (L.glasses) { c.strokeStyle = O; c.lineWidth = .35; c.beginPath(); c.arc(HX - 1.35, ey, .95, 0, 7); c.moveTo(HX + 2.3, ey); c.arc(HX + 1.35, ey, .95, 0, 7); c.moveTo(HX - .4, ey - .1); c.lineTo(HX + .4, ey - .1); c.stroke(); }
    if (L.beard) { c.beginPath(); c.moveTo(L0 + .5, HY + 1.1); c.quadraticCurveTo(L0 + .8, HY + 4.1, HX, HY + 3.9); c.quadraticCurveTo(R0 - .8, HY + 4.1, R0 - .5, HY + 1.1); c.quadraticCurveTo(R0 - 1.5, HY + 2.6, HX, HY + 2.5); c.quadraticCurveTo(L0 + 1.5, HY + 2.6, L0 + .5, HY + 1.1); c.fillStyle = hairC; c.fill(); }
    if (L.stache) { c.beginPath(); c.moveTo(HX - 1.3, HY + 2.1); c.quadraticCurveTo(HX, HY + 1.5, HX + 1.3, HY + 2.1); c.quadraticCurveTo(HX, HY + 2.6, HX - 1.3, HY + 2.1); c.fillStyle = hairC; c.fill(); }
    else { c.beginPath(); c.moveTo(HX - .6, HY + 2.2); c.quadraticCurveTo(HX, HY + 2.7, HX + .6, HY + 2.2); c.strokeStyle = '#7a3a3a'; c.lineWidth = .3; c.stroke(); }
  } else {
    if (st !== 'bald') {
      c.beginPath(); c.moveTo(L0 + .3, HY - 1); c.bezierCurveTo(L0 + .8, T0, R0 + .2, T0, R0, HY + .8); c.lineTo(R0 - .2, HY + 2.4);
      c.bezierCurveTo(R0 - 1.4, HY + 2.8, HX + 1.3, HY + 2.1, HX + 1.3, HY + .8); c.quadraticCurveTo(HX - .4, HY - 1.6, L0 + .3, HY - 1);
      c.fillStyle = hairC; c.fill(); c.strokeStyle = O; c.lineWidth = .45; c.stroke();
      if (st === 'long') rrect(c, HX + 1, HY - .3, 3, 6.4, 1.4, hairC, true, .4);
      if (st === 'bun') el(c, HX + 2.2, T0 + .5, 1.4, 1.2, hairC, O, .45);
    }
    const ey = HY + .5;
    el(c, HX - 2.1, ey, .45, .58, '#1e1410'); c.fillStyle = '#fff'; c.fillRect(HX - 2.25, ey - .38, .25, .25);
    el(c, HX - 1.4, ey + 1.2, .55, .3, 'rgba(255,120,140,.45)');
    if (L.cyber) { el(c, HX - 2.1, ey, .9, .9, '#3a3a48', O, .3); el(c, HX - 2.1, ey, .5, .5, '#ff2a4a'); }
    if (L.glasses) { c.beginPath(); c.arc(HX - 2.1, ey, .95, 0, 7); c.moveTo(HX - 1.15, ey - .2); c.lineTo(HX + 1.2, ey - .5); c.strokeStyle = O; c.lineWidth = .35; c.stroke(); }
    if (L.beard) { c.beginPath(); c.moveTo(L0 + .2, HY + 1.4); c.quadraticCurveTo(L0 + .6, HY + 4, HX + .2, HY + 3.6); c.lineTo(HX + 1.4, HY + 2); c.quadraticCurveTo(HX - .8, HY + 2.7, L0 + .2, HY + 1.4); c.fillStyle = hairC; c.fill(); }
    if (L.stache) { c.beginPath(); c.moveTo(L0 + .2, HY + 2.1); c.quadraticCurveTo(HX - 2.4, HY + 1.6, HX - 1.4, HY + 2.2); c.quadraticCurveTo(HX - 2.5, HY + 2.6, L0 + .2, HY + 2.1); c.fillStyle = hairC; c.fill(); }
  }
  if (L.cap) {
    c.beginPath(); c.moveTo(L0 - .1, HY - .6); c.bezierCurveTo(L0 - .1, T0 - .6, R0 + .1, T0 - .6, R0 + .1, HY - .6); c.closePath(); c.fillStyle = L.cap; c.fill(); c.strokeStyle = O; c.lineWidth = .45; c.stroke();
    if (dir === 'down') { rrect(c, L0 - .5, HY - 1, R0 - L0 + 1, 1.1, .5, '#26301a', true, .35); el(c, HX, HY - 2.3, .65, .6, C.gold); }
    if (dir === 'left') rrect(c, L0 - 1.4, HY - 1, 4.2, 1, .5, '#26301a', true, .35);
  }
  if (L.flower) { const fx = HX + 2.8, fy = T0 + 1.3; for (const [dx, dy] of [[0, -.7], [.7, 0], [0, .7], [-.7, 0]]) el(c, fx + dx, fy + dy, .55, .55, C.fruit2); el(c, fx, fy, .4, .4, '#fff070'); }
  c.restore();
}
const CHAR_URL2 = {};
function charUrl(look, dir = 'down') { const k = look + dir; if (CHAR_URL2[k]) return CHAR_URL2[k]; const cv = document.createElement('canvas'); cv.width = 64; cv.height = 64; const c = cv.getContext('2d'); c.scale(4, 4); drawChar(c, 0, 0, LOOKS[look], dir, 0); return (CHAR_URL2[k] = cv.toDataURL()); }

// ---- smooth natural tiles ----
Object.assign(TILE[':'], { d(c, x, y) {
  const r = rng(x * 17 + y * 29);
  for (const [bx, by] of [[3, 7], [11, 6], [7, 14], [14, 14], [1, 13]]) {
    for (let i = -2; i <= 2; i++) blade(c, bx + i * .7, by, 4 + r() * 2.5, i * .9 + (r() - .5), i % 2 ? C.grassDD : C.grassD, 1);
  }
} });
Object.assign(TILE['*'], { d(c, x, y) {
  for (const [fx, fy, col] of [[4, 4, (x + y) % 2 ? C.fruit2 : C.white], [11, 10, (x + y) % 2 ? C.white : '#ffd04a']]) {
    blade(c, fx, fy + 3.5, 3, 0, C.grassD, .6);
    for (let i = 0; i < 5; i++) { const a = i * 1.2566; el(c, fx + Math.cos(a) * 1.1, fy + Math.sin(a) * 1.1, .9, .9, col, 'rgba(0,0,0,.25)', .2); }
    el(c, fx, fy, .6, .6, C.gold);
  }
} });
Object.assign(TILE['~'], { d(c, x, y, nb) {
  R(c, 0, 0, 16, 16, C.water);
  c.strokeStyle = C.water2; c.lineWidth = .6; c.lineCap = 'round';
  for (const [wx, wy] of [[3, 6], [9, 11], [10, 4]]) { c.beginPath(); c.moveTo(wx, wy); c.quadraticCurveTo(wx + 1.2, wy - 1, wx + 2.4, wy); c.quadraticCurveTo(wx + 3.6, wy + 1, wx + 4.8, wy); c.stroke(); }
  c.fillStyle = C.rim;
  if (!nb.u) { R(c, 0, 0, 16, 3, C.rim); R(c, 0, 3, 16, .6, C.rim2); }
  if (!nb.d) { R(c, 0, 13, 16, 3, C.rim); R(c, 0, 12.4, 16, .6, 'rgba(255,255,255,.5)'); }
  if (!nb.l) { R(c, 0, 0, 3, 16, C.rim); R(c, 3, 0, .6, 16, C.rim2); }
  if (!nb.r) { R(c, 13, 0, 3, 16, C.rim); R(c, 12.4, 0, .6, 16, C.rim2); }
  for (const [px2, py2, on] of [[5, 1.5, !nb.u], [11, 1.5, !nb.u], [5, 14.5, !nb.d], [11, 14.5, !nb.d]]) if (on) { c.save(); c.translate(px2, py2); c.rotate(Math.PI / 4); c.fillStyle = C.kashi; c.fillRect(-.8, -.8, 1.6, 1.6); c.restore(); }
} });
Object.assign(TILE['T'], { d(c) {
  rrect(c, 7.1, 12.5, 1.8, 3.5, .4, C.trunk);
  c.beginPath(); c.moveTo(8, -.5); c.bezierCurveTo(11.5, 3, 13, 8, 11.5, 11.5); c.quadraticCurveTo(8, 14.5, 4.5, 11.5); c.bezierCurveTo(3, 8, 4.5, 3, 8, -.5);
  c.fillStyle = C.cyp; c.fill(); c.strokeStyle = C.cypD; c.lineWidth = .6; c.stroke();
  c.beginPath(); c.moveTo(7.6, 1.5); c.bezierCurveTo(5.4, 4.5, 5, 8.5, 6.4, 11.5); c.quadraticCurveTo(6.2, 7, 7.6, 1.5); c.fillStyle = C.cyp2; c.fill();
  c.strokeStyle = C.cypD; c.lineWidth = .45; for (const y of [4, 7, 10]) { c.beginPath(); c.moveTo(8.5, y); c.quadraticCurveTo(10, y + 1, 11, y + .4); c.stroke(); }
} });
Object.assign(TILE['P'], { d(c) {
  rrect(c, 7, 10.5, 2, 5.5, .5, C.trunk);
  el(c, 8, 6.4, 6.6, 5.6, C.tree, C.grassDD, .7);
  el(c, 5.8, 4.8, 3, 2.4, C.tree2); el(c, 10.6, 7.6, 2.4, 1.9, '#4f9e44');
  for (const [fx, fy] of [[5, 7.5], [10.5, 4.2], [8.2, 9], [11.5, 8.6], [6.8, 3.6]]) { el(c, fx, fy, 1.2, 1.2, C.fruit, '#7a1018', .3); el(c, fx - .4, fy - .4, .35, .35, C.fruit2); }
} });
Object.assign(TILE['L'], { d(c) {
  rrect(c, 6.6, 9.5, 2.8, 6.5, .8, '#d8d0c0', '#8a8478', .4); el(c, 7.6, 12, .6, .9, '#a8a090');
  el(c, 4.5, 6.5, 4.5, 4.2, '#5aa840', C.grassDD, .6); el(c, 11.5, 6.5, 4.5, 4.2, '#5aa840', C.grassDD, .6); el(c, 8, 3.8, 5.4, 4.2, '#6ab84a', C.grassDD, .6);
  el(c, 6.5, 2.6, 2.2, 1.4, '#9ad870'); el(c, 3.5, 5.6, 1.4, 1, '#9ad870');
} });
Object.assign(TILE['R'], { d(c) {
  c.beginPath(); c.moveTo(2.5, 14); c.bezierCurveTo(1.5, 9, 4, 4.5, 8.5, 4.5); c.bezierCurveTo(13, 4.5, 14.6, 9.5, 13.6, 14); c.closePath();
  c.fillStyle = C.rock; c.fill(); c.strokeStyle = C.rockD; c.lineWidth = .7; c.stroke();
  el(c, 6.6, 7.4, 2.4, 1.3, C.rockL); c.beginPath(); c.moveTo(9.5, 9); c.lineTo(11, 11.5); c.strokeStyle = C.rockD; c.lineWidth = .4; c.stroke();
} });
Object.assign(TILE['S'], { d(c) {
  rrect(c, 7.1, 8.5, 1.8, 7.5, .4, C.woodD); rrect(c, 2, 2, 12, 7.6, 1.6, C.woodL, C.woodD, .7);
  c.strokeStyle = C.wood; c.lineWidth = .7; c.beginPath(); c.moveTo(4, 4.4); c.lineTo(12, 4.4); c.moveTo(4, 6.6); c.lineTo(10, 6.6); c.stroke();
} });
Object.assign(TILE['K'], { d(c, x) {
  rrect(c, 0, 6, 16, 10, .6, C.wood); R(c, 0, 6, 16, 1.6, C.woodL); R(c, 0, 15.2, 16, .8, C.woodD);
  const sp = [C.spiceO, C.spiceR, C.spiceY, C.spiceG];
  for (let i = 0; i < 3; i++) { const col = sp[(x + i) % 4]; rrect(c, .8 + i * 5.1, 3.6, 4.3, 2.6, .6, '#c8a06a', C.woodD, .3); c.beginPath(); c.ellipse(2.95 + i * 5.1, 3.8, 2, 1.6, 0, Math.PI, 0); c.fillStyle = col; c.fill(); }
} });

// ---- looks: no headscarves; new hair styles; girl and boy players ----
Object.assign(LOOKS, {
  player: { skin: '#f4c8a0', hair: '#3a2818', hairStyle: 'short', top: '#2858a8', top2: '#183878', legs: '#303848' },
  playerGirl: { skin: '#f4c8a0', hair: '#3a2418', hairStyle: 'long', top: '#c83a6a', top2: '#8a1a44', legs: '#303848' },
  haydeh: { skin: '#f0c49c', hair: '#6a4030', hairStyle: 'bun', top: '#f0ece0', top2: '#c8c0b0', legs: '#404058', glasses: true, coat: true },
  maman: { skin: '#f0c49c', hair: '#3a2418', hairStyle: 'long', top: '#5a8a4a', top2: '#3a6a30', legs: '#3a3040' },
  nasrin: { skin: '#f4c8a0', hair: '#2a1a10', hairStyle: 'bun', top: '#f0d070', top2: '#c8a040', legs: '#404058' },
  golnaz: { skin: '#f4c8a0', hair: '#7a3a1a', hairStyle: 'long', top: '#3a5aa8', top2: '#283c78', legs: '#303040' },
  maryam: { skin: '#f0c49c', hair: '#1a1010', hairStyle: 'long', top: '#a83a5a', top2: '#782040', legs: '#303040' },
  leila: { skin: '#f0c49c', hair: '#4a2414', hairStyle: 'long', top: '#c83038', top2: '#901820', legs: '#2a2a3a' },
  parisa: { skin: '#f4c8a0', hair: '#5a3a20', hairStyle: 'bun', top: '#f0e8d8', top2: '#c8c0a8', legs: '#3a4060' },
  shirin: { skin: '#f4c8a0', hair: '#2a1810', hairStyle: 'long', top: '#30a8a0', top2: '#187870', legs: '#303048', flower: true },
  censor: { skin: '#d8a888', hair: '#7a7a88', hairStyle: 'bald', top: '#5a1828', top2: '#2a0c14', legs: '#1a1a1a', stache: true, cyber: true },
  reza: { skin: '#e8b890', hair: '#909090', top: '#f0f0f0', top2: '#c8c8c8', legs: '#5a3a20', stache: true },
  mahmoud: { skin: '#e0b088', hair: '#e0e0e0', hairStyle: 'bald', top: '#6a5a40', top2: '#4a3a28', legs: '#403020', stache: true, beard: true },
});
const playerLook = () => (S && S.gender === 'girl' ? LOOKS.playerGirl : LOOKS.player);
