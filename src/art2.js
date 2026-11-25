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
  if (L.ghost) { const t = performance.now(); c.globalAlpha = .62 + .18 * Math.sin(t / 380); el(c, 8, 9, 8, 9, 'rgba(200,232,255,.35)'); c.translate(0, Math.sin(t / 520) * 1.2 - 1.5); }
  else el(c, 8, 15.4, 3.4, .9, 'rgba(0,0,0,.2)');
  if (dir === 'right') { c.translate(16, 0); c.scale(-1, 1); dir = 'left'; }
  if (L.small) { c.translate(8, 15.5); c.scale(.85, .85); c.translate(-8, -15.5); }
  c.lineJoin = 'round'; c.lineCap = 'round';
  const O = C.out, hairC = L.hair || '#2a1a10', st = L.hairStyle || 'short';
  const HX = 8, HY = 4.6, HR = 3.4;              // head centre and radius
  const la = step === 1 ? -.8 : 0, lb = step === 2 ? -.8 : 0;
  rrect(c, 6.15, 11.4 + la, 1.6, 4.1, .7, L.legs, true, .45); rrect(c, 8.25, 11.4 + lb, 1.6, 4.1, .7, L.legs, true, .45);
  if (L.kicks) for (const [lx, d] of [[6.15, la], [8.25, lb]]) { rrect(c, lx - .3, 14.35 + d, 2.2, 1.3, .55, '#f2efe6', true, .35); c.fillStyle = L.kicks; c.fillRect(lx + .05, 14.7 + d, 1.5, .35); }
  if (st === 'long' && dir !== 'up') rrect(c, HX - 3.6, HY - .4, 7.2, 7.2, 2.6, hairC, true, .45);
  rrect(c, 5.2, 7.6, 5.6, 4.9, 1.8, L.top, true, .45);
  c.fillStyle = L.top2; c.fillRect(5.6, 11.4, 4.8, .7);
  if (L.coat) { c.fillStyle = L.top2; c.fillRect(7.75, 7.9, .5, 3.4); }
  if (L.tee) {
    if (dir === 'down') { c.beginPath(); c.moveTo(7, 7.75); c.lineTo(9, 7.75); c.lineTo(8.7, 11.35); c.lineTo(7.3, 11.35); c.closePath(); c.fillStyle = L.tee; c.fill(); c.strokeStyle = L.top2; c.lineWidth = .4; c.beginPath(); c.moveTo(7, 7.8); c.lineTo(7.3, 11.35); c.moveTo(9, 7.8); c.lineTo(8.7, 11.35); c.stroke();
      c.fillStyle = L.top2; c.beginPath(); c.moveTo(5.8, 7.7); c.lineTo(7.2, 7.6); c.lineTo(6.6, 9.2); c.closePath(); c.moveTo(10.2, 7.7); c.lineTo(8.8, 7.6); c.lineTo(9.4, 9.2); c.closePath(); c.fill(); }
    else if (dir === 'left') { c.fillStyle = L.tee; c.fillRect(5.35, 8, .9, 3.3); c.fillStyle = L.top2; c.fillRect(6.2, 7.8, .4, 3.6); }
  }
  if (L.kef) { rrect(c, 5.3, 7.3, 5.4, 1.6, .7, '#f4f0e4', true, .4); c.fillStyle = '#1a1a1a'; for (let i = 0; i < 4; i++) c.fillRect(5.8 + i * 1.3, 7.7 + (i % 2) * .6, .45, .45); }
  if (dir === 'left') { rrect(c, 8.5, 8.1, 1.4, 3.6, .7, L.top, true, .4); el(c, 9.2, 11.9, .6, .6, L.skin); }
  else { for (const ax of [4.3, 10.3]) { rrect(c, ax, 8.1, 1.4, 3.6, .7, L.top, true, .4); el(c, ax + .7, 11.9, .6, .6, L.skin); } }
  if (L.scarf && dir !== 'up') { el(c, HX + (dir === 'left' ? .5 : 0), HY + .4, HR + .9, HR + 1.15, L.scarf, O, .45); }
  el(c, HX, HY, HR, HR * 1.02, L.skin, O, .45);
  const L0 = HX - HR - .1, R0 = HX + HR + .1, T0 = HY - HR - .6;
  if (dir === 'up') {
    el(c, HX, HY - .2, HR + .15, HR + .1, st === 'bald' ? L.skin : hairC, O, .45);
    if (st === 'long') rrect(c, L0, HY, R0 - L0, 6.2, 2.4, hairC, true, .45);
    if (st === 'bun') el(c, HX, T0 + .2, 1.5, 1.3, hairC, O, .45);
    if (L.shades) { c.strokeStyle = '#15161c'; c.lineWidth = .45; c.beginPath(); c.moveTo(L0 + .2, T0 + 2.6); c.quadraticCurveTo(HX, T0 + 1.2, R0 - .2, T0 + 2.6); c.strokeStyle = '#d4bd78'; c.stroke(); }
  } else if (dir === 'down') {
    if (st !== 'bald') {
      c.beginPath(); c.moveTo(L0, HY + .8); c.bezierCurveTo(L0 - .2, T0, R0 + .2, T0, R0, HY + .8);
      c.quadraticCurveTo(R0 - 1, HY - 1.6, HX + 1.3, HY - 1.3); c.quadraticCurveTo(HX, HY - .7, HX - 1.3, HY - 1.3); c.quadraticCurveTo(L0 + 1, HY - 1.6, L0, HY + .8);
      c.fillStyle = hairC; c.fill(); c.strokeStyle = O; c.lineWidth = .45; c.stroke();
      if (st === 'long') { rrect(c, L0 - .3, HY - .8, 1.4, 6, .7, hairC, true, .4); rrect(c, R0 - 1.1, HY - .8, 1.4, 6, .7, hairC, true, .4); }
      if (st === 'bun') el(c, HX, T0 + .1, 1.5, 1.3, hairC, O, .45);
      if (st === 'swoop') { c.beginPath(); c.moveTo(HX - 2.8, T0 + 1.9); c.quadraticCurveTo(HX - .6, T0 - 1.9, HX + 3.4, T0 + .2); c.quadraticCurveTo(HX + 1.4, T0 + .7, HX + .6, T0 + 2.4); c.quadraticCurveTo(HX - 1, T0 + 1.2, HX - 2.8, T0 + 1.9); c.fillStyle = hairC; c.fill(); c.strokeStyle = O; c.lineWidth = .45; c.stroke(); }
      if (L.shades) { for (const sx of [-1.25, 1.25]) el(c, HX + sx, T0 + 2.1, 1, .62, '#2b3d50', '#d4bd78', .35); c.strokeStyle = '#d4bd78'; c.lineWidth = .4; c.beginPath(); c.moveTo(HX - .3, T0 + 2); c.lineTo(HX + .3, T0 + 2); c.stroke(); el(c, HX - 1.5, T0 + 1.9, .3, .15, 'rgba(255,255,255,.55)'); }
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
      if (st === 'swoop') { c.beginPath(); c.moveTo(HX + 1.8, T0 + .8); c.quadraticCurveTo(HX - 1, T0 - 1.9, L0 - 1.1, T0 + 1.5); c.quadraticCurveTo(L0 + .6, T0 + 1.5, L0 + .9, HY - .9); c.quadraticCurveTo(HX, T0 + 1.6, HX + 1.8, T0 + .8); c.fillStyle = hairC; c.fill(); c.strokeStyle = O; c.lineWidth = .45; c.stroke(); }
      if (L.shades) { el(c, HX - 1.7, T0 + 2.1, 1.05, .6, '#2b3d50', '#d4bd78', .35); c.strokeStyle = '#d4bd78'; c.lineWidth = .4; c.beginPath(); c.moveTo(HX - .7, T0 + 2); c.lineTo(HX + 2.2, T0 + 2.6); c.stroke(); }
    }
    const ey = HY + .5;
    el(c, HX - 2.1, ey, .45, .58, '#1e1410'); c.fillStyle = '#fff'; c.fillRect(HX - 2.25, ey - .38, .25, .25);
    el(c, HX - 1.4, ey + 1.2, .55, .3, 'rgba(255,120,140,.45)');
    if (L.cyber) { el(c, HX - 2.1, ey, .9, .9, '#3a3a48', O, .3); el(c, HX - 2.1, ey, .5, .5, '#ff2a4a'); }
    if (L.glasses) { c.beginPath(); c.arc(HX - 2.1, ey, .95, 0, 7); c.moveTo(HX - 1.15, ey - .2); c.lineTo(HX + 1.2, ey - .5); c.strokeStyle = O; c.lineWidth = .35; c.stroke(); }
    if (L.beard) { c.beginPath(); c.moveTo(L0 + .2, HY + 1.4); c.quadraticCurveTo(L0 + .6, HY + 4, HX + .2, HY + 3.6); c.lineTo(HX + 1.4, HY + 2); c.quadraticCurveTo(HX - .8, HY + 2.7, L0 + .2, HY + 1.4); c.fillStyle = hairC; c.fill(); }
    if (L.stache) { c.beginPath(); c.moveTo(L0 + .2, HY + 2.1); c.quadraticCurveTo(HX - 2.4, HY + 1.6, HX - 1.4, HY + 2.2); c.quadraticCurveTo(HX - 2.5, HY + 2.6, L0 + .2, HY + 2.1); c.fillStyle = hairC; c.fill(); }
  }
  if (L.scarf) {
    c.beginPath();
    if (dir === 'up') c.ellipse(HX, HY - .1, HR + .7, HR + .8, 0, 0, 7);
    else if (dir === 'down') { c.moveTo(L0 - .5, HY + 1.3); c.bezierCurveTo(L0 - .7, T0 - 1.3, R0 + .7, T0 - 1.3, R0 + .5, HY + 1.3); c.quadraticCurveTo(R0 - .5, HY - 1.2, HX, HY - 1.5); c.quadraticCurveTo(L0 + .5, HY - 1.2, L0 - .5, HY + 1.3); }
    else { c.moveTo(HX - 2.6, HY - .2); c.bezierCurveTo(HX - 2.9, T0 - 1.2, R0 + 1, T0 - .8, R0 + 1.2, HY + 1.4); c.lineTo(R0 + .3, HY + HR + 1.4); c.quadraticCurveTo(HX + .6, HY + HR + 1, HX + .3, HY + 1.2); c.quadraticCurveTo(HX - .6, HY - 1.4, HX - 2.6, HY - .2); }
    c.fillStyle = L.scarf; c.fill(); c.strokeStyle = O; c.lineWidth = .45; c.stroke();
    const dots = dir === 'up' ? [[-1.6, -1], [1.4, -1.8], [0, .8], [-1, 2.2], [1.8, 1.6]] : dir === 'down' ? [[-2.2, -1.6], [0, -2.9], [2.2, -1.6]] : [[1, -2.6], [2.6, -.6], [3.4, 2]];
    for (const [dx, dy] of dots) el(c, HX + dx, HY + dy, .45, .45, L.scarf2 || '#f4e8d0');
    if (dir === 'down') { c.beginPath(); c.moveTo(HX - .9, HY + HR + .5); c.lineTo(HX + .9, HY + HR + .5); c.lineTo(HX, HY + HR + 2); c.closePath(); c.fillStyle = L.scarf; c.fill(); c.stroke(); }
  }
  if (L.apron && dir !== 'up') { const long = typeof L.apron === 'string'; rrect(c, dir === 'left' ? 5.4 : 6.1, long ? 8 : 9, dir === 'left' ? 2.6 : 3.8, long ? 6.2 : 3.4, .5, long ? L.apron : '#f2ece0', true, .35); if (long && dir === 'down') { c.strokeStyle = L.apron; c.lineWidth = .45; c.beginPath(); c.moveTo(6.4, 8.1); c.lineTo(7, 7.3); c.moveTo(9.6, 8.1); c.lineTo(9, 7.3); c.stroke(); } }
  if (L.cap) {
    c.beginPath(); c.moveTo(L0 - .1, HY - .6); c.bezierCurveTo(L0 - .1, T0 - .6, R0 + .1, T0 - .6, R0 + .1, HY - .6); c.closePath(); c.fillStyle = L.cap; c.fill(); c.strokeStyle = O; c.lineWidth = .45; c.stroke();
    if (dir === 'down') { rrect(c, L0 - .5, HY - 1, R0 - L0 + 1, 1.1, .5, '#26301a', true, .35); el(c, HX, HY - 2.3, .65, .6, C.gold); }
    if (dir === 'left') rrect(c, L0 - 1.4, HY - 1, 4.2, 1, .5, '#26301a', true, .35);
  }
  if (L.hoops && dir !== 'up') { c.strokeStyle = C.gold; c.lineWidth = .3; for (const hx of dir === 'down' ? [L0 + .15, R0 - .15] : [HX + 1.6]) { c.beginPath(); c.arc(hx, HY + 2, .55, 0, 7); c.stroke(); } }
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
  // the hero: worn leather jacket over a tee, dark jeans, sneakers, shades pushed up
  player: { skin: '#eebf96', hair: '#1e1612', hairStyle: 'swoop', top: '#6a4430', top2: '#3e2618', tee: '#e9e4d8', legs: '#2c3448', kicks: '#b8333a', shades: true },
  playerGirl: { skin: '#eebf96', hair: '#22160f', hairStyle: 'long', top: '#2e2a2c', top2: '#141214', tee: '#c8913a', legs: '#2c3448', kicks: '#2f7f7a', shades: true, hoops: true },
  // women counterparts, shown when the hero is a girl. Older women wear a headscarf.
  zari: { skin: '#ecbc94', hair: '#a8a8a8', hairStyle: 'bald', top: '#7a2e3a', top2: '#521c26', legs: '#3a2a2a', scarf: '#8a5a40', scarf2: '#f0c0a0', apron: true },
  parvin: { skin: '#e8b890', hair: '#b0b0b0', hairStyle: 'bald', top: '#3a4a6a', top2: '#26324a', legs: '#2a2a3a', scarf: '#2f6a6a', scarf2: '#f6e4b0', apron: true },
  shahla: { skin: '#e4b48c', hair: '#a0a0a0', hairStyle: 'bald', top: '#5a3a5a', top2: '#3a243a', legs: '#2a2030', scarf: '#a84a4a', scarf2: '#ffe0e0', apron: true },
  grandma: { skin: '#e0b088', hair: '#d8d8d8', hairStyle: 'bald', top: '#4a5a3a', top2: '#323e26', legs: '#302820', scarf: '#5a4a7a', scarf2: '#e8e0f8' },
  ava: { skin: '#f0c49c', hair: '#2a1a10', hairStyle: 'long', top: '#d83040', top2: '#a01828', legs: '#283048' },
  bahar: { skin: '#e8b890', hair: '#201810', hairStyle: 'bun', top: '#806040', top2: '#5a4028', legs: '#302820' },
  fereshteh: { skin: '#e8b890', hair: '#4a2a14', hairStyle: 'long', top: '#48a060', top2: '#287040', legs: '#383020' },
  kimia: { skin: '#f4c8a0', hair: '#5a3818', hairStyle: 'bun', top: '#f0c020', top2: '#c89000', legs: '#3858a8', small: true },
  nazanin: { skin: '#e8b890', hair: '#1a1010', hairStyle: 'bun', top: '#c87830', top2: '#8a4a18', legs: '#403020' },
  mina: { skin: '#e8b890', hair: '#3a2010', hairStyle: 'long', top: '#8858c8', top2: '#5a3090', legs: '#302838' },
  morshedF: { skin: '#e0b088', hair: '#9a9a9a', hairStyle: 'bun', top: '#2a3a6a', top2: '#1a2448', legs: '#2a2a3a', coat: true },
  pahlevanF: { skin: '#e0ac80', hair: '#1a120c', hairStyle: 'bun', top: '#8a2a2a', top2: '#5a1a1a', legs: '#c89a3a' },
  anchor: { skin: '#eab890', hair: '#1a1612', top: '#2a2f45', top2: '#1a1e30', legs: '#2a2f45', coat: true, tee: '#f4f2ec' },
  javad: { skin: '#e4b48c', hair: '#9a9a9a', top: '#f0f0f0', top2: '#c8c8c8', legs: '#5a3a2a', stache: true },
  masoud: { skin: '#e8b890', hair: '#b0b0b0', hairStyle: 'bald', top: '#f0f0f0', top2: '#c8c8c8', legs: '#2a3a4a', stache: true, glasses: true },
  goli: { skin: '#ecbc94', hair: '#a8a8a8', hairStyle: 'bald', top: '#4a6a3a', top2: '#324a26', legs: '#2a2a2a', scarf: '#c86a3a', scarf2: '#fff0c0', apron: true },
  mahin: { skin: '#e8b890', hair: '#b8b8b8', hairStyle: 'bald', top: '#6a3a2a', top2: '#4a2618', legs: '#2a2020', scarf: '#3a4a8a', scarf2: '#d8e0ff', apron: true },
  elder: { skin: '#e0b088', hair: '#e8e8e8', hairStyle: 'bald', top: '#5a4a3a', top2: '#3a2e24', legs: '#3a3028', stache: true, beard: true, glasses: true },
  elderF: { skin: '#e8b890', hair: '#d0d0d0', hairStyle: 'bald', top: '#5a3a5a', top2: '#3a243a', legs: '#2a2030', scarf: '#6a8a5a', scarf2: '#f0f8e0' },
  hassan: { skin: '#e8b890', hair: '#a0a0a0', top: '#f0f0f0', top2: '#c8c8c8', legs: '#3a4a5a', stache: true },
  karim: { skin: '#e4b48c', hair: '#8a8a8a', top: '#f0f0f0', top2: '#c8c8c8', legs: '#3a5a3a', stache: true },
  morshed: { skin: '#e0b088', hair: '#d8d8d8', hairStyle: 'bald', top: '#2a3a6a', top2: '#1a2448', legs: '#2a2a3a', stache: true, beard: true },
  pahlevan: { skin: '#e0ac80', hair: '#1a120c', top: '#8a2a2a', top2: '#5a1a1a', legs: '#c89a3a', stache: true },
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

// ---- teahouse and zurkhaneh (traditional gym) tiles ----
function gymDoor(c, x, y, nb) {
  doorDraw(c, x, y, nb);
  rrect(c, 3, 3, 10, 13, 1.2, '#7a2a22', C.woodD, .6); c.fillStyle = '#5a1a14'; c.fillRect(7.6, 3.5, .8, 12.5);
  el(c, 6.6, 9.5, .45, .45, C.gold); el(c, 9.4, 9.5, .45, .45, C.gold);
  // two crossed meel clubs over the door
  for (const s of [-1, 1]) { c.save(); c.translate(8, 2.2); c.rotate(s * .7); c.beginPath(); c.moveTo(-.35, -3); c.lineTo(.35, -3); c.lineTo(1, 1.8); c.quadraticCurveTo(0, 2.6, -1, 1.8); c.closePath(); c.fillStyle = C.woodL; c.fill(); c.strokeStyle = C.woodD; c.lineWidth = .35; c.stroke(); c.restore(); }
}
Object.assign(TILE, {
  '4': { g: gAuto, door: true, d: gymDoor }, '6': { g: gAuto, door: true, d: gymDoor }, '8': { g: gAuto, door: true, d: gymDoor },
  '5': { g: gAuto, door: true, d: doorDraw }, '7': { g: gAuto, door: true, d: doorDraw },
  // the gowd: a sunken octagonal pit with a tiled rim
  '@': { g: gFloor, solid: true, d(c, x, y, nb) {
    const poly = (ins) => {
      const l = nb.l ? 0 : ins, r = nb.r ? 16 : 16 - ins, t = nb.u ? 0 : ins, b = nb.d ? 16 : 16 - ins, k = 4 + ins * .4;
      c.beginPath();
      if (!nb.u && !nb.l) { c.moveTo(l, t + k); c.lineTo(l + k, t); } else c.moveTo(l, t);
      if (!nb.u && !nb.r) { c.lineTo(r - k, t); c.lineTo(r, t + k); } else c.lineTo(r, t);
      if (!nb.d && !nb.r) { c.lineTo(r, b - k); c.lineTo(r - k, b); } else c.lineTo(r, b);
      if (!nb.d && !nb.l) { c.lineTo(l + k, b); c.lineTo(l, b - k); } else c.lineTo(l, b);
      c.closePath();
    };
    poly(0); c.fillStyle = '#2a5a8a'; c.fill();
    poly(1.4); c.fillStyle = '#e8d8b0'; c.fill();
    poly(2.6); c.fillStyle = '#8a6440'; c.fill();
    const r = rng(x * 31 + y * 7); c.fillStyle = 'rgba(60,36,20,.35)'; for (let i = 0; i < 5; i++) c.fillRect(2 + r() * 12, 2 + r() * 12, .8, .5);
    if (!nb.u) { c.fillStyle = 'rgba(0,0,0,.25)'; c.fillRect(0, 2.6, 16, 1.6); }
  } },
  // the sardam: raised alcove where the morshed drums (zarb) and rings the bell
  '%': { g: gFloor, solid: true, d(c, x, y, nb) {
    R(c, 0, 0, 16, 16, C.wallIn); R(c, 0, 0, 16, 3, C.wallInD);
    const left = nb.R === '%', ax = left ? 3 : 0, aw = 13;
    c.beginPath(); c.moveTo(ax, 16); c.lineTo(ax, 7); c.quadraticCurveTo(left ? 16 : 0, -1, left ? 16 : 13, 4); c.lineTo(left ? 16 : 13, 16); c.closePath();
    c.fillStyle = '#2858a8'; c.fill(); c.strokeStyle = C.gold; c.lineWidth = .6; c.stroke();
    R(c, 0, 12, 16, 4, C.woodD); R(c, 0, 12, 16, 1, C.woodL);
    if (left) { // goblet drum
      c.beginPath(); c.moveTo(6, 6.5); c.lineTo(12, 6.5); c.quadraticCurveTo(11, 10, 9.6, 10.4); c.lineTo(10.4, 12); c.lineTo(7.6, 12); c.lineTo(8.4, 10.4); c.quadraticCurveTo(7, 10, 6, 6.5); c.closePath();
      c.fillStyle = '#b8742e'; c.fill(); c.strokeStyle = C.out; c.lineWidth = .4; c.stroke(); el(c, 9, 6.5, 3, .8, '#f0e0c0', C.out, .35);
    } else { // brass bell on a chain
      c.strokeStyle = C.brassD; c.lineWidth = .4; c.beginPath(); c.moveTo(6.5, 1.5); c.lineTo(6.5, 6); c.stroke();
      c.beginPath(); c.moveTo(4.4, 10); c.quadraticCurveTo(4.6, 6, 6.5, 6); c.quadraticCurveTo(8.4, 6, 8.6, 10); c.closePath(); c.fillStyle = C.brass; c.fill(); c.strokeStyle = C.brassD; c.stroke(); el(c, 6.5, 10.4, .6, .6, C.brassD);
    }
  } },
  // wall rack of meel clubs
  '&': { g: gFloor, solid: true, d(c, x) {
    TILE.w.d(c, x, 0);
    R(c, 1, 12, 14, 1.2, C.woodD);
    for (const [cx, h] of [[4, 8.5], [8, 9.5], [12, 8.5]]) { c.beginPath(); c.moveTo(cx - .6, 12 - h); c.lineTo(cx + .6, 12 - h); c.lineTo(cx + 1.7, 11); c.quadraticCurveTo(cx, 12.6, cx - 1.7, 11); c.closePath(); c.fillStyle = x % 2 ? '#a8643a' : '#c07a44'; c.fill(); c.strokeStyle = C.woodD; c.lineWidth = .4; c.stroke(); c.fillStyle = '#7a2a22'; c.fillRect(cx - 1.1, 8.6, 2.2, .7); }
  } },
});

// ---- a lived-in look: earthier colors, dust, stains and wear ----
Object.assign(C, {
  grass: '#94b265', grass2: '#7c9a50', grassD: '#50783a', grassDD: '#37582c',
  path: '#d9c497', path2: '#c0a677', sand: '#e0cc9d', sand2: '#c8ad7d',
  water: '#4f9caf', water2: '#a2d0d6', rim: '#d8cbab', rim2: '#ae9a74',
  adobe: '#cc9c66', adobe2: '#a47548', adobeL: '#dcb684',
  cyp: '#36603e', cyp2: '#52824a', cypD: '#213f2a', tree: '#4d7d3e', tree2: '#6f9a50',
  floor: '#b78655', floorD: '#91653b', wallIn: '#e4d4b3', wallInD: '#c6b08b',
  dome: '#3c9c98', domeL: '#8ccdc4', kashi: '#2e5a98', white: '#efe8d6',
});
const GRIT_SKIP = new Set(['~', 'B', 'U', 'E']);
function gritTile(c, x, y, ch, nb, m) {
  if (GRIT_SKIP.has(ch)) return;
  const r = rng(x * 911 + y * 37 + m.id.length * 101);
  const wallish = '#hQF^WYI'.includes(ch) || (TILE[ch] && TILE[ch].door);
  // dust specks and grit
  for (let i = 0, n = 5 + (r() * 5 | 0); i < n; i++) { c.fillStyle = r() < .7 ? 'rgba(70,45,25,.2)' : 'rgba(255,245,220,.18)'; c.fillRect(r() * 16, r() * 16, .5 + r() * .5, .4 + r() * .4); }
  // soft blotches so no two tiles look factory-fresh
  if (r() < .45) { el(c, 2 + r() * 12, 2 + r() * 12, 2 + r() * 3.5, 1.2 + r() * 2, r() < .6 ? 'rgba(80,55,25,.08)' : 'rgba(255,240,200,.08)'); }
  if (wallish) {
    // rain streaks and a hairline crack now and then
    for (let i = 0; i < 2; i++) { const sx = 1 + r() * 14, sy = r() * 6; c.fillStyle = 'rgba(70,40,20,.1)'; c.fillRect(sx, sy, .6, 4 + r() * 8); }
    if (r() < .3) { c.strokeStyle = 'rgba(60,35,20,.35)'; c.lineWidth = .3; c.beginPath(); let px = 3 + r() * 10, py = 2 + r() * 4; c.moveTo(px, py); for (let k = 0; k < 3; k++) { px += (r() - .5) * 3; py += 1.5 + r() * 2; c.lineTo(px, py); } c.stroke(); }
  } else if ((ch === '=' || ch === ',') && r() < .25) {
    // a pebble or two on paths and sand
    el(c, 2 + r() * 12, 2 + r() * 12, .8, .55, 'rgba(120,100,80,.55)', 'rgba(60,45,30,.4)', .25);
  }
}
// fine film grain used over the whole screen and the paper boxes
(function makeGrain() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 128; const c = cv.getContext('2d'); const r = rng(7);
  const img = c.createImageData(128, 128);
  for (let i = 0; i < img.data.length; i += 4) { const v = r(); const dark = v < .5; img.data[i] = dark ? 40 : 255; img.data[i + 1] = dark ? 28 : 246; img.data[i + 2] = dark ? 16 : 224; img.data[i + 3] = (Math.abs(v - .5) * 2) ** 3 * 60; }
  c.putImageData(img, 0, 0);
  document.documentElement.style.setProperty('--grain', `url(${cv.toDataURL()})`);
})();

// ---- mountains, deserts and the road north ----
function peak(c, cx, base, w, top, body, light, dark, snow) {
  c.beginPath(); c.moveTo(cx - w / 2, base); c.lineTo(cx - w * .08, top + 1.2); c.quadraticCurveTo(cx, top - .6, cx + w * .1, top + 1.4); c.lineTo(cx + w / 2, base); c.closePath();
  c.fillStyle = body; c.fill(); c.strokeStyle = 'rgba(40,30,25,.55)'; c.lineWidth = .5; c.stroke();
  c.beginPath(); c.moveTo(cx - w * .08, top + 1.2); c.lineTo(cx - w / 2 + .6, base); c.lineTo(cx - w * .12, base); c.quadraticCurveTo(cx - w * .14, (top + base) / 2, cx, top + 2); c.closePath(); c.fillStyle = light; c.fill();
  c.beginPath(); c.moveTo(cx + w * .1, top + 1.4); c.lineTo(cx + w / 2 - .5, base); c.lineTo(cx + w * .22, base); c.quadraticCurveTo(cx + w * .16, (top + base) / 2, cx + w * .06, top + 3); c.closePath(); c.fillStyle = dark; c.fill();
  if (snow) { c.beginPath(); c.moveTo(cx - w * .08, top + 1.2); c.quadraticCurveTo(cx, top - .6, cx + w * .1, top + 1.4); c.lineTo(cx + w * .2, top + (base - top) * .38); c.lineTo(cx + w * .07, top + (base - top) * .3); c.lineTo(cx - w * .03, top + (base - top) * .42); c.lineTo(cx - w * .12, top + (base - top) * .3); c.lineTo(cx - w * .2, top + (base - top) * .36); c.closePath(); c.fillStyle = '#f4f2ec'; c.fill(); c.strokeStyle = 'rgba(120,130,150,.5)'; c.lineWidth = .35; c.stroke(); }
}
function sandRipples(c, x, y, col) { const r = rng(x * 13 + y * 71); c.strokeStyle = col; c.lineWidth = .5; c.lineCap = 'round'; for (let i = 0; i < 3; i++) { const yy = 3 + i * 5 + r() * 2, xx = r() * 4; c.beginPath(); c.moveTo(xx, yy); c.quadraticCurveTo(xx + 4, yy - 2, xx + 8, yy); c.quadraticCurveTo(xx + 11, yy + 1.6, xx + 14, yy - .4); c.stroke(); } }
Object.assign(TILE, {
  '▲': { g: gAuto, solid: true, d(c, x, y) { const r = rng(x * 5 + y * 11); peak(c, 8 + (r() - .5) * 2, 16.5, 17, 1 + r() * 2, '#9a8670', '#b8a48a', '#76644f', false); if (r() < .5) peak(c, 13.5, 16.5, 8, 8, '#8c7a64', '#a8957c', '#6a5a48', false); } },
  '△': { g: gAuto, solid: true, d(c, x, y) { const r = rng(x * 5 + y * 13); peak(c, 8 + (r() - .5) * 2, 16.5, 17, .5 + r() * 1.5, '#8f8478', '#aea294', '#6c6258', true); } },
  '▓': { g: gSand, solid: true, d(c, x, y) {
    c.beginPath(); c.moveTo(-1, 16); c.quadraticCurveTo(4, 2, 9, 3.5); c.quadraticCurveTo(14, 5, 17, 16); c.closePath(); c.fillStyle = '#e2c48c'; c.fill();
    c.beginPath(); c.moveTo(9, 3.5); c.quadraticCurveTo(14, 5, 17, 16); c.lineTo(8, 16); c.quadraticCurveTo(10, 9, 9, 3.5); c.fillStyle = '#c9a46a'; c.fill();
    c.strokeStyle = 'rgba(150,110,60,.5)'; c.lineWidth = .4; c.beginPath(); c.moveTo(2, 12); c.quadraticCurveTo(5, 9, 8, 10); c.stroke();
  } },
  '≈': { g: gSand, d(c, x, y) { sandRipples(c, x, y, 'rgba(176,138,84,.55)'); } },
  '¤': { g: gSand, enc: true, d(c, x, y) {
    const r = rng(x * 19 + y * 23);
    for (const [bx, by] of [[4, 6], [11, 5], [7, 13], [13.5, 13]]) {
      el(c, bx, by + 1.6, 3, .9, 'rgba(90,60,30,.18)');
      for (let i = 0; i < 7; i++) { const a = -Math.PI * (.1 + .8 * i / 6); blade(c, bx, by + 1.5, 2.6 + r() * 1.4, Math.cos(a) * 3, i % 2 ? '#7a8a3a' : '#5e6e2c', .7); }
      el(c, bx + (r() - .5) * 2, by - .5, .45, .45, '#c86aa0');
    }
  } },
  '░': { g: gSand, d(c, x, y) {
    R(c, 0, 0, 16, 16, '#efeadd'); const r = rng(x * 37 + y * 41);
    c.strokeStyle = 'rgba(150,135,110,.55)'; c.lineWidth = .4;
    for (let i = 0; i < 5; i++) { let px = r() * 16, py = r() * 16; c.beginPath(); c.moveTo(px, py); for (let k = 0; k < 3; k++) { px += (r() - .5) * 8; py += (r() - .5) * 8; c.lineTo(px, py); } c.stroke(); }
    c.fillStyle = 'rgba(255,255,255,.7)'; for (let i = 0; i < 6; i++) c.fillRect(r() * 16, r() * 16, .6, .6);
  } },
  '‖': { g: gSand, solid: true, d(c) {
    el(c, 8, 15.4, 3.6, .9, 'rgba(0,0,0,.2)');
    rrect(c, 5.4, 13.4, 5.2, 2.2, .4, '#bba684', '#7d6a50', .4);
    rrect(c, 6.3, 2.4, 3.4, 11.4, .3, '#d6c4a2', '#7d6a50', .4); c.strokeStyle = 'rgba(125,106,80,.6)'; c.lineWidth = .3; for (const lx of [7.2, 8, 8.8]) { c.beginPath(); c.moveTo(lx, 3); c.lineTo(lx, 13.2); c.stroke(); }
    c.beginPath(); c.moveTo(3.4, 2.6); c.quadraticCurveTo(4.6, .2, 6.4, 1.2); c.lineTo(9.6, 1.2); c.quadraticCurveTo(11.4, .2, 12.6, 2.6); c.lineTo(9.8, 3); c.lineTo(6.2, 3); c.closePath(); c.fillStyle = '#c9b592'; c.fill(); c.strokeStyle = '#7d6a50'; c.lineWidth = .4; c.stroke();
    el(c, 4.2, 1.8, .45, .45, '#6a5840'); el(c, 11.8, 1.8, .45, .45, '#6a5840');
  } },
  '█': { g: gAuto, solid: true },
  '❀': { g: gAuto, solid: true, d(c, x, y) {
    const r = rng(x * 29 + y * 3);
    el(c, 8, 10, 7, 5.2, '#3f7a3a', '#2a5428', .5); el(c, 6, 8.4, 3.4, 2.4, '#4f9046');
    for (let i = 0; i < 6; i++) { const fx = 3 + r() * 10, fy = 6 + r() * 8; el(c, fx, fy, 1.15, 1.15, i % 3 ? '#e86a96' : '#f4a6c4', '#a03a64', .3); el(c, fx, fy, .4, .4, '#a8325e'); }
  } },
  '0': { g: gPath, d(c) {
    c.fillStyle = '#c99a62'; c.fillRect(0, 0, 3.4, 16); c.fillRect(12.6, 0, 3.4, 16);
    c.beginPath(); c.moveTo(0, 0); c.lineTo(16, 0); c.lineTo(16, 5); c.lineTo(12.6, 5); c.quadraticCurveTo(12.6, 1.4, 8, 1.2); c.quadraticCurveTo(3.4, 1.4, 3.4, 5); c.lineTo(0, 5); c.closePath(); c.fill();
    c.strokeStyle = '#6a4424'; c.lineWidth = .5; c.strokeRect(.25, -.5, 15.5, 17); c.fillStyle = C.kashi; c.fillRect(0, 0, 16, 1.3); c.fillStyle = C.gold; for (const gx of [2, 6, 10, 14]) c.fillRect(gx - .4, .3, .8, .8);
  } },
});

// ---- landmark drawings spread over several tiles (drawn once into the map canvas) ----
const SPRITES = {
  damavand(c, W, H) {
    c.beginPath(); c.moveTo(0, H); c.bezierCurveTo(30, H - 10, 58, 18, 72, 8); c.lineTo(88, 8); c.bezierCurveTo(102, 18, 130, H - 10, W, H); c.closePath();
    const g = c.createLinearGradient(0, 0, W, 0); g.addColorStop(0, '#a89482'); g.addColorStop(.5, '#8e7c6c'); g.addColorStop(1, '#6e5e52'); c.fillStyle = g; c.fill(); c.strokeStyle = '#4a3e36'; c.lineWidth = .7; c.stroke();
    c.strokeStyle = 'rgba(70,56,46,.45)'; c.lineWidth = .5; for (const [x1, x2] of [[60, 34], [70, 54], [86, 100], [94, 122], [78, 76]]) { c.beginPath(); c.moveTo(x1, 16); c.quadraticCurveTo((x1 + x2) / 2 + 3, 40, x2, H - 4); c.stroke(); }
    c.beginPath(); c.moveTo(72, 8); c.lineTo(88, 8); c.bezierCurveTo(96, 14, 104, 22, 112, 30); c.lineTo(104, 27); c.lineTo(98, 33); c.lineTo(91, 26); c.lineTo(84, 34); c.lineTo(77, 25); c.lineTo(68, 32); c.lineTo(61, 26); c.lineTo(52, 31); c.bezierCurveTo(58, 22, 64, 14, 72, 8); c.closePath();
    c.fillStyle = '#f6f4ee'; c.fill(); c.strokeStyle = 'rgba(120,130,150,.6)'; c.lineWidth = .5; c.stroke();
    c.fillStyle = 'rgba(160,180,210,.35)'; c.beginPath(); c.moveTo(80, 9); c.lineTo(88, 8); c.bezierCurveTo(96, 14, 104, 22, 112, 30); c.lineTo(104, 27); c.lineTo(98, 33); c.lineTo(91, 26); c.closePath(); c.fill();
    for (let i = 0; i < 3; i++) el(c, 84 + i * 4, 4 - i * 2, 3 + i, 1.6 + i * .4, `rgba(240,236,220,${.5 - i * .12})`);
  },
  milad(c, W, H) {
    el(c, 16, H - 1, 13, 2.4, 'rgba(0,0,0,.25)');
    c.beginPath(); c.moveTo(4, H - 1); c.lineTo(8, H - 9); c.lineTo(24, H - 9); c.lineTo(28, H - 1); c.closePath(); c.fillStyle = '#9aa2aa'; c.fill(); c.strokeStyle = '#3a4048'; c.lineWidth = .6; c.stroke();
    c.beginPath(); c.moveTo(12.4, H - 9); c.lineTo(14, 32); c.lineTo(18, 32); c.lineTo(19.6, H - 9); c.closePath(); const g = c.createLinearGradient(12, 0, 20, 0); g.addColorStop(0, '#e2ded6'); g.addColorStop(1, '#a8a49c'); c.fillStyle = g; c.fill(); c.stroke();
    for (let y = 40; y < H - 12; y += 9) { c.strokeStyle = 'rgba(80,80,90,.35)'; c.beginPath(); c.moveTo(13.6, y); c.lineTo(18.4, y); c.stroke(); }
    c.beginPath(); c.moveTo(4, 26); c.quadraticCurveTo(16, 33, 28, 26); c.lineTo(30, 20); c.quadraticCurveTo(16, 14, 2, 20); c.closePath(); c.fillStyle = '#6e8496'; c.fill(); c.strokeStyle = '#2e3a44'; c.stroke();
    c.fillStyle = '#b8d0e0'; for (let i = 0; i < 6; i++) c.fillRect(5 + i * 4, 21.5, 2.2, 3);
    c.beginPath(); c.moveTo(7, 20); c.quadraticCurveTo(16, 11, 25, 20); c.closePath(); c.fillStyle = '#8a9aa8'; c.fill(); c.stroke();
    c.fillStyle = '#c8ccd0'; c.fillRect(14.8, 2, 2.4, 13); c.strokeRect(14.8, 2, 2.4, 13);
    el(c, 16, 1.6, 1.4, 1.4, '#ff3a4a'); el(c, 16, 1.6, 3.4, 3.4, 'rgba(255,60,80,.25)');
  },
  golestan(c, W, H) {
    rrect(c, 1, 14, W - 2, H - 15, .5, '#e6cfa0', '#6a4a2a', .6);
    for (let i = 0; i < 7; i++) { const x = 5 + i * 10.4; c.beginPath(); c.moveTo(x, H - 3); c.lineTo(x, 26); c.quadraticCurveTo(x + 3.6, 19, x + 7.2, 26); c.lineTo(x + 7.2, H - 3); c.closePath(); c.fillStyle = i === 3 ? '#2858a8' : ['#e8b040', '#3aa0a0', '#c85a6a'][i % 3]; c.fill(); c.strokeStyle = '#6a4a2a'; c.lineWidth = .5; c.stroke();
      c.fillStyle = 'rgba(255,255,255,.6)'; for (let k = 0; k < 3; k++) c.fillRect(x + 1.5 + k * 1.6, 30 + k * 3, .8, .8); }
    R(c, 1, 14, W - 2, 3, '#2e5a98'); c.fillStyle = C.gold; for (let x = 4; x < W - 2; x += 5) c.fillRect(x, 15, 1.2, 1.2);
    for (const tx of [6, 66]) { rrect(c, tx, 2, 8, 13, .5, '#e6cfa0', '#6a4a2a', .5); rrect(c, tx - 1, 1, 10, 3, .5, '#2e5a98', '#6a4a2a', .4); c.fillStyle = '#3aa0a0'; c.fillRect(tx + 2, 6, 4, 6); }
    c.beginPath(); c.moveTo(30, 14); c.lineTo(30, 6); c.quadraticCurveTo(40, -2, 50, 6); c.lineTo(50, 14); c.closePath(); c.fillStyle = '#e6cfa0'; c.fill(); c.strokeStyle = '#6a4a2a'; c.stroke();
    c.beginPath(); c.moveTo(35, 14); c.lineTo(35, 8); c.quadraticCurveTo(40, 3, 45, 8); c.lineTo(45, 14); c.fillStyle = '#2858a8'; c.fill();
  },
  azadi(c, W, H) {
    el(c, W / 2, H - 1, 30, 2.6, 'rgba(0,0,0,.22)');
    c.beginPath(); c.moveTo(1, H); c.quadraticCurveTo(14, 34, 20, 6); c.lineTo(44, 6); c.quadraticCurveTo(50, 34, 63, H); c.lineTo(46, H); c.quadraticCurveTo(44, 26, 32, 20); c.quadraticCurveTo(20, 26, 18, H); c.closePath();
    const g = c.createLinearGradient(0, 0, W, 0); g.addColorStop(0, '#fbf8f0'); g.addColorStop(.55, '#e8e1d2'); g.addColorStop(1, '#c9c0ae'); c.fillStyle = g; c.fill(); c.strokeStyle = '#6a6458'; c.lineWidth = .7; c.stroke();
    c.strokeStyle = 'rgba(120,112,98,.5)'; c.lineWidth = .4; for (const [a, b] of [[8, 22], [12, 24], [56, 42], [52, 40]]) { c.beginPath(); c.moveTo(a, H - 2); c.quadraticCurveTo((a + b) / 2, 30, b, 8); c.stroke(); }
    c.beginPath(); c.moveTo(27, 13); c.quadraticCurveTo(32, 7, 37, 13); c.lineTo(37, 16); c.lineTo(27, 16); c.closePath(); c.fillStyle = '#6a7a8a'; c.fill();
    rrect(c, 17, 1, 30, 6, 1, '#3aa0a8', '#2a5a6a', .5); c.fillStyle = '#e8f6f4'; for (let x = 20; x < 46; x += 4) { c.beginPath(); c.moveTo(x, 4); c.lineTo(x + 1.4, 2.4); c.lineTo(x + 2.8, 4); c.lineTo(x + 1.4, 5.6); c.closePath(); c.fill(); }
  },
  caravanserai(c, W, H) {
    rrect(c, 3, 8, W - 6, H - 9, .5, '#c8925a', '#5a3a1c', .6);
    c.fillStyle = '#b07a46'; for (let y = 12; y < H - 2; y += 4) for (let x = 4 + (y % 8 ? 0 : 3); x < W - 4; x += 6) c.fillRect(x, y, 4, .5);
    for (const tx of [3, W - 3]) { el(c, tx, 9, 3.4, 3.4, '#c8925a', '#5a3a1c', .6); rrect(c, tx - 3.4, 9, 6.8, H - 10, 1, '#c08a52', '#5a3a1c', .6); }
    for (let x = 7; x < W - 6; x += 4) rrect(c, x, 6, 2.2, 2.6, .4, '#c8925a', '#5a3a1c', .4);
    rrect(c, 20, 2, 24, H - 3, .5, '#d4a068', '#5a3a1c', .6);
    c.beginPath(); c.moveTo(25, H - 1); c.lineTo(25, 18); c.quadraticCurveTo(32, 8, 39, 18); c.lineTo(39, H - 1); c.closePath(); c.fillStyle = '#4a2c18'; c.fill();
    c.strokeStyle = '#2e6a9a'; c.lineWidth = 1.2; c.beginPath(); c.moveTo(23, H - 1); c.lineTo(23, 17); c.quadraticCurveTo(32, 5, 41, 17); c.lineTo(41, H - 1); c.stroke();
  },
  pavilion(c, W, H) {
    rrect(c, 3, 10, W - 6, H - 11, .5, '#e8d4b0', '#6a4a2a', .6);
    for (let i = 0; i < 3; i++) { const x = 8 + i * 12; c.beginPath(); c.moveTo(x, H - 2); c.lineTo(x, 18); c.quadraticCurveTo(x + 4, 12, x + 8, 18); c.lineTo(x + 8, H - 2); c.closePath(); c.fillStyle = '#3a6a8a'; c.fill(); c.strokeStyle = '#6a4a2a'; c.lineWidth = .5; c.stroke(); }
    R(c, 3, 10, W - 6, 2.4, '#2e5a98');
    c.beginPath(); c.moveTo(14, 10); c.quadraticCurveTo(24, -4, 34, 10); c.closePath(); c.fillStyle = '#3aa0a0'; c.fill(); c.strokeStyle = '#1e5a5a'; c.stroke(); el(c, 21, 5, 2, 1.4, 'rgba(255,255,255,.5)');
    c.fillStyle = C.gold; c.fillRect(23.6, -1, .8, 4);
  },
  persepolis(c, W, H) {
    for (const cx of [26, 38]) { rrect(c, cx - 1.6, 2, 3.2, H - 6, .3, '#d6c4a2', '#7d6a50', .4); c.beginPath(); c.moveTo(cx - 4, 3); c.quadraticCurveTo(cx - 3, 0, cx - 1, 1); c.lineTo(cx + 1, 1); c.quadraticCurveTo(cx + 3, 0, cx + 4, 3); c.closePath(); c.fillStyle = '#c9b592'; c.fill(); c.strokeStyle = '#7d6a50'; c.stroke(); }
    for (const [px, flip] of [[2, 1], [44, -1]]) {
      rrect(c, px, 6, 18, H - 7, .6, '#cdb894', '#6e5c44', .6);
      c.save(); c.translate(px + 9, 0); c.scale(flip, 1); c.translate(-(px + 9), 0);
      c.fillStyle = 'rgba(110,92,68,.55)'; c.strokeStyle = 'rgba(90,74,52,.8)'; c.lineWidth = .5;
      c.beginPath(); c.moveTo(px + 4, 30); c.lineTo(px + 15, 30); c.lineTo(px + 15, 40); c.moveTo(px + 6, 30); c.lineTo(px + 6, 40); c.moveTo(px + 12, 30); c.lineTo(px + 12, 40); c.stroke();
      c.beginPath(); c.ellipse(px + 9.5, 26, 6, 4, 0, 0, 7); c.stroke();
      for (let i = 0; i < 4; i++) { c.beginPath(); c.moveTo(px + 6, 22 - i * 1.6); c.quadraticCurveTo(px + 11, 13 - i * 2, px + 16, 12 - i * 1.4); c.stroke(); }
      el(c, px + 4, 20, 2.2, 2.6, 'rgba(110,92,68,.55)'); c.beginPath(); c.moveTo(px + 2.4, 22); c.lineTo(px + 4, 27); c.lineTo(px + 5.6, 22); c.stroke();
      c.restore();
      R(c, px, 6, 18, 2, '#bba684');
    }
  },
  cyrus(c, W, H) {
    el(c, W / 2, H - 1, 22, 2.4, 'rgba(0,0,0,.22)');
    for (let i = 0; i < 6; i++) { const w = 46 - i * 5, y = H - 4 - i * 4; rrect(c, (W - w) / 2, y, w, 4.2, .3, i % 2 ? '#e2d6bc' : '#d6c8aa', '#7d6a50', .5); }
    const top = H - 28; rrect(c, 13, top - 9, 22, 10, .3, '#e6dac0', '#7d6a50', .5);
    c.beginPath(); c.moveTo(11, top - 9); c.lineTo(24, top - 17); c.lineTo(37, top - 9); c.closePath(); c.fillStyle = '#d8caae'; c.fill(); c.strokeStyle = '#7d6a50'; c.stroke();
    rrect(c, 21.4, top - 7, 5.2, 7, .3, '#5a4630');
  },
};
function drawSprites(c, m) {
  for (const s of m.sprites || []) { c.save(); c.translate(s.x * TS, s.y * TS); SPRITES[s.id](c, s.w * TS, s.h * TS); c.restore(); }
}
