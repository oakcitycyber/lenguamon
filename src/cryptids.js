// ===== LENGUAMON cryptids: one legendary creature hiding in each area, after its boss is beaten =====
// The drawings: chibi cryptids with big glossy eyes and fuzzy fur. viewBox 0 0 128 128.
const CB = (() => {
const OUT = '#1a1014';
const st = (w = 2) => `stroke="${OUT}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
let uid = 0;
const id = p => p + (++uid);
const lg = (i, a, b, x2 = 0, y2 = 1) => `<linearGradient id="${i}" x1="0" y1="0" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
const rgr = (i, a, b) => `<radialGradient id="${i}" cx="40%" cy="35%" r="75%"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></radialGradient>`;
// a fuzzy ellipse: fur tufts all around
function fuzz(cx, cy, rx, ry, n, amp, seed = 1, skip) {
  let d = '';
  for (let i = 0; i <= n; i++) {
    const a0 = (i / n) * Math.PI * 2 - Math.PI / 2, a1 = ((i + .5) / n) * Math.PI * 2 - Math.PI / 2;
    const jit = 1 + .25 * Math.sin(i * 7.3 + seed);
    const x0 = cx + Math.cos(a0) * rx, y0 = cy + Math.sin(a0) * ry;
    const xt = cx + Math.cos(a1) * (rx + amp * jit), yt = cy + Math.sin(a1) * (ry + amp * jit);
    const a2 = ((i + 1) / n) * Math.PI * 2 - Math.PI / 2, x2 = cx + Math.cos(a2) * rx, y2 = cy + Math.sin(a2) * ry;
    if (i === 0) d += `M${x0.toFixed(1)},${y0.toFixed(1)} `;
    if (i < n) d += `Q${xt.toFixed(1)},${yt.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)} `;
  }
  return d + 'Z';
}
const strands = (cx, cy, rx, ry, n, c, len = 5) => { let s = ''; for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2 + .3, x = cx + Math.cos(a) * rx * .8, y = cy + Math.sin(a) * ry * .8; s += `<path d="M${x.toFixed(1)},${y.toFixed(1)} q${(Math.cos(a) * len).toFixed(1)},${(Math.sin(a) * len * .4).toFixed(1)} ${(Math.cos(a) * len * 1.4).toFixed(1)},${(Math.sin(a) * len).toFixed(1)}" stroke="${c}" stroke-width="1.1" fill="none" opacity=".55"/>`; } return s; };
function eyes(o) {
  const g = id('ir'), [lx, rx] = o.ex || [47, 81], y = o.ey || 58, w = o.ew || 12, h = o.eh || 13;
  const one = (x, flip) => `<ellipse cx="${x}" cy="${y}" rx="${w}" ry="${h}" fill="#0c0810" ${st(1.6)}/>` +
    `<ellipse cx="${x}" cy="${y + 1}" rx="${w * .82}" ry="${h * .84}" fill="url(#${g})"/>` +
    (o.slit ? `<ellipse cx="${x}" cy="${y + 1}" rx="${w * .16}" ry="${h * .7}" fill="#0c0810"/>` : `<ellipse cx="${x}" cy="${y + 2}" rx="${w * .42}" ry="${h * .46}" fill="#0c0810"/>`) +
    `<ellipse cx="${x + (flip ? 3 : -3) - w * .25}" cy="${y - h * .38}" rx="${w * .3}" ry="${h * .24}" fill="#fff"/>` +
    `<circle cx="${x + w * .38}" cy="${y + h * .36}" r="${w * .13}" fill="#fff" opacity=".9"/>` +
    `<circle cx="${x - w * .05}" cy="${y + h * .1}" r="${w * .07}" fill="#fff" opacity=".7"/>`;
  return `<defs><radialGradient id="${g}" cx="50%" cy="70%" r="65%"><stop offset="0" stop-color="${o.eyeHi || '#fff'}"/><stop offset=".35" stop-color="${o.eye}"/><stop offset="1" stop-color="#0c0810"/></radialGradient></defs>` + one(lx) + one(rx, true) +
    (o.brow ? `<path d="M${lx - 12},${y - h - 3} L${lx + 8},${y - h + 3} M${rx + 12},${y - h - 3} L${rx - 8},${y - h + 3}" stroke="${OUT}" stroke-width="3.4" stroke-linecap="round"/>` : '');
}
const fangGrin = (y = 80, wide = 12, c = '#7a1a2a') => `<path d="M${64 - wide},${y} Q64,${y + 8} ${64 + wide},${y}" fill="${c}" ${st(1.6)}/><path d="M${64 - wide + 3},${y + 1} L${64 - wide + 5},${y + 5} L${64 - wide + 7},${y + 2} Z M${64 + wide - 3},${y + 1} L${64 + wide - 5},${y + 5} L${64 + wide - 7},${y + 2} Z" fill="#fff" stroke="${OUT}" stroke-width=".8"/>`;
const toothy = (y = 79, wide = 13) => { let t = ''; for (let i = 0; i < 6; i++) { const x = 64 - wide + 3 + i * (wide * 2 - 6) / 5; t += `<path d="M${x - 2},${y + 1} L${x},${y + 5} L${x + 2},${y + 1} Z" fill="#fff" stroke="${OUT}" stroke-width=".7"/>`; } return `<path d="M${64 - wide},${y} Q64,${y + 12} ${64 + wide},${y} Q64,${y + 3} ${64 - wide},${y} Z" fill="#5a0e1e" ${st(1.6)}/>` + t; };
// sitting body + feet + arms
function body(o) {
  const g = id('bd'), b = id('bl');
  return `<defs>${rgr(g, o.fur2, o.fur)}${lg(b, o.belly || o.fur2, o.fur2)}</defs>` +
    `<path d="${fuzz(64, 100, 25, 19, 22, 3, 3)}" fill="url(#${g})" ${st()}/>` + strands(64, 100, 25, 19, 14, o.dark, 4) +
    (o.belly !== false ? `<ellipse cx="64" cy="102" rx="13" ry="12" fill="url(#${b})" opacity=".85"/>` : '') +
    `<ellipse cx="49" cy="117" rx="10" ry="6" fill="${o.foot || o.fur}" ${st()}/><ellipse cx="79" cy="117" rx="10" ry="6" fill="${o.foot || o.fur}" ${st()}/>` +
    `<path d="M44,118 l2,-3 M49,119 l0,-3 M54,118 l-2,-3 M74,118 l2,-3 M79,119 l0,-3 M84,118 l-2,-3" stroke="${OUT}" stroke-width="1.2"/>` +
    `<ellipse cx="44" cy="100" rx="6" ry="9" fill="${o.fur}" ${st()} transform="rotate(20 44 100)"/><ellipse cx="84" cy="100" rx="6" ry="9" fill="${o.fur}" ${st()} transform="rotate(-20 84 100)"/>` +
    (o.claws ? `<path d="M40,107 l-2,4 M44,108 l-1,4 M84,108 l1,4 M88,107 l2,4" stroke="#f4ecd8" stroke-width="1.6" stroke-linecap="round"/>` : '');
}
function head(o) {
  const g = id('hd');
  return `<defs>${rgr(g, o.fur2, o.fur)}</defs><path d="${fuzz(64, 56, o.hrx || 38, o.hry || 32, 30, o.tuft ?? 3.5, 7)}" fill="url(#${g})" ${st()}/>` + strands(64, 56, 38, 32, 18, o.dark, 5) +
    (o.muzzle ? `<ellipse cx="64" cy="76" rx="${o.mw || 16}" ry="${o.mh || 10}" fill="${o.muzzle}" ${st(1.4)}/>` : '');
}
const nose = (c = '#2a1a1e', y = 71) => `<path d="M60,${y} Q64,${y - 2} 68,${y} Q64,${y + 4} 60,${y} Z" fill="${c}" ${st(1.2)}/>`;
const svgw = (aura, inner) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><radialGradient id="au" cx="50%" cy="55%" r="50%"><stop offset="0" stop-color="${aura}" stop-opacity=".4"/><stop offset="1" stop-color="${aura}" stop-opacity="0"/></radialGradient></defs><ellipse cx="64" cy="70" rx="62" ry="58" fill="url(#au)"/><ellipse cx="64" cy="123" rx="34" ry="4" fill="rgba(0,0,0,.25)"/>${inner}</svg>`;
// parts
const ears = {
  pointy: (c, inner) => `<path d="M34,40 L26,12 L52,30 Z" fill="${c}" ${st()}/><path d="M36,36 L31,19 L47,30 Z" fill="${inner}"/><path d="M94,40 L102,12 L76,30 Z" fill="${c}" ${st()}/><path d="M92,36 L97,19 L81,30 Z" fill="${inner}"/>`,
  bat: (c, inner) => `<path d="M36,44 C18,40 8,20 12,6 C24,14 38,22 50,32 Z" fill="${c}" ${st()}/><path d="M36,40 C24,36 18,24 19,14 C28,20 38,26 46,32 Z" fill="${inner}"/><path d="M92,44 C110,40 120,20 116,6 C104,14 90,22 78,32 Z" fill="${c}" ${st()}/><path d="M92,40 C104,36 110,24 109,14 C100,20 90,26 82,32 Z" fill="${inner}"/>`,
  round: (c, inner) => `<circle cx="32" cy="32" r="11" fill="${c}" ${st()}/><circle cx="32" cy="32" r="6" fill="${inner}"/><circle cx="96" cy="32" r="11" fill="${c}" ${st()}/><circle cx="96" cy="32" r="6" fill="${inner}"/>`,
  rabbit: (c, inner) => `<path d="M46,32 C38,10 40,-4 48,-4 C56,-4 58,12 56,30 Z" fill="${c}" ${st()}/><path d="M48,28 C44,12 45,2 49,2 C53,2 54,14 53,28 Z" fill="${inner}"/><path d="M82,32 C90,10 88,-4 80,-4 C72,-4 70,12 72,30 Z" fill="${c}" ${st()}/><path d="M80,28 C84,12 83,2 79,2 C75,2 74,14 75,28 Z" fill="${inner}"/>`,
  side: (c, inner) => `<path d="M30,48 C16,44 10,36 12,30 C20,30 30,36 36,42 Z" fill="${c}" ${st()}/><path d="M98,48 C112,44 118,36 116,30 C108,30 98,36 92,42 Z" fill="${c}" ${st()}/>`,
};
const horns = {
  devil: c => `<path d="M42,30 C36,22 34,12 38,2 C42,10 48,18 52,26 Z" fill="${c}" ${st()}/><path d="M86,30 C92,22 94,12 90,2 C86,10 80,18 76,26 Z" fill="${c}" ${st()}/>`,
  ram: c => `<path d="M36,34 C20,28 16,46 26,52 C32,56 38,50 34,44" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/><path d="M92,34 C108,28 112,46 102,52 C96,56 90,50 94,44" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round"/>`,
  bull: c => `<path d="M34,36 C22,32 16,22 20,12 C24,20 32,24 40,28 Z" fill="${c}" ${st()}/><path d="M94,36 C106,32 112,22 108,12 C104,20 96,24 88,28 Z" fill="${c}" ${st()}/>`,
  antler: c => `<path d="M44,28 L36,14 L26,10 M36,14 L34,2 M40,20 L46,8 M84,28 L92,14 L102,10 M92,14 L94,2 M88,20 L82,8" stroke="${c}" stroke-width="4.6" fill="none" stroke-linecap="round"/><path d="M44,28 L36,14 L26,10 M36,14 L34,2 M40,20 L46,8 M84,28 L92,14 L102,10 M92,14 L94,2 M88,20 L82,8" stroke="${OUT}" stroke-width="6.6" fill="none" stroke-linecap="round" opacity=".0"/>`,
  unicorn: c => `<path d="M58,26 L64,-2 L70,26 Z" fill="${c}" ${st()}/><path d="M60,18 L68,16 M61,10 L67,9" stroke="${OUT}" stroke-width="1"/>`,
};
const wings = {
  bat: (c, inner) => `<path d="M44,92 C24,96 6,86 2,66 C10,70 16,68 18,62 C22,68 28,68 30,62 C34,70 40,74 48,78 Z" fill="${c}" ${st()}/><path d="M18,62 L40,84 M30,62 L44,82" stroke="${inner}" stroke-width="1.2"/><path d="M84,92 C104,96 122,86 126,66 C118,70 112,68 110,62 C106,68 100,68 98,62 C94,70 88,74 80,78 Z" fill="${c}" ${st()}/><path d="M110,62 L88,84 M98,62 L84,82" stroke="${inner}" stroke-width="1.2"/>`,
  feather: (c, inner) => `<path d="M42,96 C20,96 4,82 2,60 C10,64 14,62 14,56 C20,62 26,62 28,58 C32,66 38,72 46,78 Z" fill="${c}" ${st()}/><path d="M10,66 C20,78 30,86 42,90 M20,62 C28,74 36,82 44,84" stroke="${inner}" stroke-width="1.4" fill="none"/><path d="M86,96 C108,96 124,82 126,60 C118,64 114,62 114,56 C108,62 102,62 100,58 C96,66 90,72 82,78 Z" fill="${c}" ${st()}/><path d="M118,66 C108,78 98,86 86,90 M108,62 C100,74 92,82 84,84" stroke="${inner}" stroke-width="1.4" fill="none"/>`,
  moth: (c, inner) => `<path d="M46,86 C22,72 2,76 4,94 C6,108 26,110 44,100 Z" fill="${c}" ${st()}/><circle cx="20" cy="92" r="6" fill="${inner}" ${st(1.2)}/><circle cx="20" cy="92" r="2.4" fill="${OUT}"/><path d="M82,86 C106,72 126,76 124,94 C122,108 102,110 84,100 Z" fill="${c}" ${st()}/><circle cx="108" cy="92" r="6" fill="${inner}" ${st(1.2)}/><circle cx="108" cy="92" r="2.4" fill="${OUT}"/>`,
};
const sparkle = (x, y, c, s = 1) => `<path d="M${x},${y - 5 * s} L${x + 1.4 * s},${y - 1.4 * s} L${x + 5 * s},${y} L${x + 1.4 * s},${y + 1.4 * s} L${x},${y + 5 * s} L${x - 1.4 * s},${y + 1.4 * s} L${x - 5 * s},${y} L${x - 1.4 * s},${y - 1.4 * s} Z" fill="${c}"/>`;

const D = {};
// generic chibi beast
function beast(o) {
  return svgw(o.aura, (o.back || '') + (o.wings ? wings[o.wings](o.wingC || o.dark, o.wingIn || o.fur2) : '') + (o.tail || '') + body(o) +
    (o.horns && !o.hornFront ? horns[o.horns](o.hornC) : '') + (o.ears ? ears[o.ears](o.fur, o.earIn || o.fur2) : '') + head(o) +
    (o.horns && o.hornFront ? horns[o.horns](o.hornC) : '') + (o.face || '') + eyes(o) + (o.nose !== false ? nose(o.noseC, o.noseY) : '') + (o.mouth || fangGrin()) + (o.front || ''));
}
// ---------- Persian ----------
D.karkadann = () => beast({ aura: '#f0b040', fur: '#6e685e', fur2: '#a8a090', dark: '#34302a', belly: '#c8c0b0', ears: 'round', earIn: '#b89080', eye: '#ff9a20', brow: true, slit: true, ex: [44, 84], muzzle: '#8a8476', mw: 22, mh: 12, hrx: 43, hry: 31, tuft: 1.2, claws: true, mouth: fangGrin(83, 11), nose: false,
  face: [[30, 44, 98, 44], [26, 58, 102, 58]].map(([a, b, c, d]) => `<path d="M${a},${b} Q64,${b - 10} ${c},${d}" stroke="#4a463e" stroke-width="1.6" fill="none" opacity=".6"/>`).join('') + `<ellipse cx="58" cy="74" rx="2" ry="1.4" fill="${'#1a1014'}"/><ellipse cx="70" cy="74" rx="2" ry="1.4" fill="${'#1a1014'}"/>`,
  front: `<path d="M56,72 C56,54 60,36 66,20 C70,36 72,54 72,72 Z" fill="#efe2c0" stroke="#1a1014" stroke-width="2" stroke-linejoin="round"/><path d="M58,62 L71,60 M59,52 L70,50 M61,42 L69,40" stroke="#a8946a" stroke-width="1.2"/>` +
    `<path d="M40,92 Q64,84 88,92 M42,104 Q64,96 86,104" stroke="#4a463e" stroke-width="1.6" fill="none" opacity=".6"/>`,
  tail: `<path d="M86,108 C100,110 106,100 104,92 L110,90 L106,98 Z" fill="#6e685e" stroke="#1a1014" stroke-width="2" stroke-linejoin="round"/>` });
D.huma = () => svgw('#ffd040', `<circle cx="64" cy="54" r="46" fill="none" stroke="#ffe070" stroke-width="2.4" opacity=".7"/>` + wings.feather('#e8a828', '#fff0a0') +
  `<path d="M54,112 C48,124 40,128 32,126 C40,122 44,116 46,110 Z M74,112 C80,124 88,128 96,126 C88,122 84,116 82,110 Z" fill="#d88a18" ${st()}/>` +
  body({ fur: '#e8a828', fur2: '#ffe08a', dark: '#8a5a10', belly: '#fff4c8', foot: '#c87a18' }) +
  `<path d="M56,26 C52,12 56,2 62,0 M64,24 C64,10 68,2 74,0 M70,26 C76,14 84,10 90,12" stroke="#d88a18" stroke-width="3" fill="none" stroke-linecap="round"/>` +
  head({ fur: '#e8a828', fur2: '#ffe08a', dark: '#8a5a10' }) + eyes({ eye: '#ff7a10', eyeHi: '#fff0a0' }) +
  `<path d="M56,72 L64,88 L72,72 Q64,68 56,72 Z" fill="#c87a18" ${st(1.6)}/><path d="M58,76 L64,80 L70,76" stroke="${OUT}" stroke-width="1.2" fill="none"/>` + sparkle(18, 30, '#fff0a0') + sparkle(110, 34, '#fff0a0', .8));
D.azhdaha = () => beast({ aura: '#ff5020', fur: '#2e7a3e', fur2: '#6ab85a', dark: '#123a1a', belly: '#d8e08a', wings: 'bat', wingC: '#1e5a2e', wingIn: '#6ab85a', ears: 'pointy', earIn: '#8ad070', horns: 'devil', hornC: '#e8d8a0', eye: '#ffd020', slit: true, brow: true, muzzle: '#4a9a4a', mouth: toothy(80, 13), claws: true, tuft: 1.5,
  back: [40, 52, 64, 76, 88].map((x, i) => `<path d="M${x - 5},${30 - (i === 2 ? 4 : 0)} L${x},${16 - (i === 2 ? 6 : 0)} L${x + 5},${30 - (i === 2 ? 4 : 0)} Z" fill="#8ad070" ${st(1.4)}/>`).join(''),
  tail: `<path d="M84,112 C104,118 116,106 112,92 L120,90 L114,100 L118,104 Z" fill="#2e7a3e" ${st()}/>`, front: `<path d="M64,94 C58,98 58,104 64,108 C70,104 70,98 64,94 Z" fill="#ff8a30" opacity=".0"/>` });
D.shahmaran = () => svgw('#30d0a0',
  `<path d="M24,120 C8,112 14,96 36,96 C62,96 104,98 110,108 C116,120 90,126 64,126 C44,126 30,124 24,120 Z" fill="#2a9a8a" ${st()}/><path d="M34,108 C56,112 86,112 104,110" stroke="#f0d870" stroke-width="2" fill="none"/>` +
  `<path d="M104,104 C122,96 124,76 112,68 C104,64 98,70 100,76" fill="none" stroke="#2a9a8a" stroke-width="12" stroke-linecap="round"/><path d="M104,104 C122,96 124,76 112,68 C104,64 98,70 100,76" fill="none" stroke="${OUT}" stroke-width="15" stroke-linecap="round" opacity=".0"/>` +
  `<path d="M50,100 C46,90 48,80 54,74 L74,74 C80,80 82,90 78,100 Z" fill="#2a9a8a" ${st()}/>` + [[56, 88], [66, 84], [72, 94], [60, 96]].map(([x, y]) => `<path d="M${x},${y} l3,2 l-3,2 l-3,-2 Z" fill="#1a6a5a"/>`).join('') +
  `<path d="M28,46 C22,70 26,92 34,104 L44,96 C40,80 40,60 44,46 Z M100,46 C106,70 102,92 94,104 L84,96 C88,80 88,60 84,46 Z" fill="#2a1612" ${st()}/>` +
  `<ellipse cx="64" cy="54" rx="32" ry="29" fill="#e0b090" ${st()}/>` +
  `<path d="M32,52 C30,26 50,18 64,18 C78,18 98,26 96,52 C90,40 80,34 64,34 C48,34 38,40 32,52 Z" fill="#2a1612" ${st()}/>` +
  `<path d="M40,22 L46,8 L54,18 L64,2 L74,18 L82,8 L88,22 Z" fill="#e8b830" ${st()}/><circle cx="64" cy="14" r="3" fill="#30d0a0" ${st(1)}/>` +
  eyes({ eye: '#20c080', eyeHi: '#c0ffe8', ey: 58, ew: 10, eh: 11, ex: [50, 78], slit: true }) +
  `<path d="M38,46 L56,48 M90,46 L72,48" stroke="${OUT}" stroke-width="2.6" stroke-linecap="round"/>` +
  `<path d="M57,74 Q64,79 71,74" stroke="#8a2a3a" stroke-width="2.4" fill="none" stroke-linecap="round"/><path d="M64,78 L62,86 M64,78 L66,86" stroke="#c82a3a" stroke-width="1.4"/>` + sparkle(20, 40, '#a0fff0') + sparkle(110, 30, '#a0fff0', .8));
D.lamassu = () => beast({ aura: '#e0b050', fur: '#b8a478', fur2: '#e8dcb8', dark: '#6a5a3a', belly: '#f0e6c8', wings: 'feather', wingC: '#c8b080', wingIn: '#7a6a40', ears: 'side', horns: 'bull', hornC: '#d8c890', eye: '#ff8a20', brow: true, muzzle: false, nose: false,
  face: `<path d="M44,74 C44,96 52,104 64,108 C76,104 84,96 84,74 Z" fill="#4a3624" ${st()}/>` + [0, 1, 2, 3, 4].map(i => `<path d="M${49 + i * 7.5},${78} q3,5 0,10 q-3,5 0,10" stroke="#2a1a10" stroke-width="1.4" fill="none"/>`).join('') +
    `<path d="M40,24 L88,24 L84,12 L44,12 Z" fill="#c8a040" ${st()}/><path d="M44,18 h40" stroke="#6a5020" stroke-width="1.4"/>`,
  mouth: `<path d="M56,74 Q64,78 72,74" stroke="${OUT}" stroke-width="2" fill="none"/>`, tail: `<path d="M86,110 C100,112 104,104 102,98" stroke="#b8a478" stroke-width="4" fill="none"/>` });
D.martikhoras = () => beast({ aura: '#ff4020', fur: '#c8642a', fur2: '#f0a060', dark: '#6a2a0e', belly: '#f8d0a0', ears: 'round', earIn: '#8a3a1a', eye: '#ffc020', brow: true, slit: true, muzzle: '#f0b070', mouth: toothy(81, 12), claws: true, hrx: 32, hry: 28,
  back: `<path d="${fuzz(64, 56, 46, 41, 26, 7, 2)}" fill="#5a1e0a" ${st()}/>` + strands(64, 56, 46, 41, 20, '#c8642a', 7),
  tail: `<path d="M88,108 C110,112 122,96 118,76 C116,64 108,58 100,60" fill="none" stroke="#3a1a10" stroke-width="7" stroke-linecap="round"/>` + [[116, 92], [119, 80], [112, 66]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="4.6" fill="#4a2414" ${st(1.4)}/>`).join('') + `<path d="M100,60 L92,48 L104,56 Z" fill="#e8d8a0" ${st(1.4)}/>` });
D.simurgh = () => svgw('#40c0ff', wings.feather('#d8502a', '#f0c040') +
  [[40, 112, 22, 126], [64, 114, 64, 128], [88, 112, 106, 126]].map(([a, b, c, d]) => `<path d="M${a},${b} Q${(a + c) / 2},${b + 4} ${c},${d}" stroke="#30a898" stroke-width="6" fill="none" stroke-linecap="round"/><circle cx="${c}" cy="${d - 2}" r="4" fill="#f0c040" ${st(1.2)}/><circle cx="${c}" cy="${d - 2}" r="1.6" fill="#0e3040"/>`).join('') +
  body({ fur: '#1e6a88', fur2: '#40a8c8', dark: '#0e3040', belly: '#f0c070', foot: '#d8a020' }) +
  `<path d="M54,26 C46,10 50,0 56,-2 M64,24 C62,8 68,0 74,-2 M74,26 C80,12 90,8 96,10" stroke="#f0c040" stroke-width="3" fill="none" stroke-linecap="round"/>` +
  head({ fur: '#1e6a88', fur2: '#40a8c8', dark: '#0e3040' }) + `<path d="M30,48 C40,40 50,38 56,42 M98,48 C88,40 78,38 72,42" stroke="#f0c040" stroke-width="2" fill="none"/>` +
  eyes({ eye: '#ffa020', eyeHi: '#fff0c0', brow: true, slit: true }) + `<path d="M54,72 L64,92 L74,72 Q64,66 54,72 Z" fill="#e0a020" ${st(1.6)}/><path d="M56,78 L64,84 L72,78" stroke="${OUT}" stroke-width="1.2" fill="none"/>` + sparkle(16, 30, '#c0f0ff') + sparkle(112, 26, '#c0f0ff', .8));
D.rakhsh = () => beast({ aura: '#ff6040', fur: '#b0523a', fur2: '#e08e68', dark: '#4a1a10', belly: '#f0c0a0', ears: false, eye: '#ff6a20', brow: true, ey: 54, hry: 34, nose: false, foot: '#3a1a10', tuft: 2,
  back: `<path d="M64,18 C40,12 26,30 28,56 C22,70 26,88 36,98 C36,76 40,56 48,42 L80,42 C88,56 92,76 92,98 C102,88 106,70 100,56 C102,30 88,12 64,18 Z" fill="#2a0e08" stroke="#1a1014" stroke-width="2"/>` +
    `<path d="M40,30 C34,18 36,6 42,2 C48,10 50,20 50,28 Z M88,30 C94,18 92,6 86,2 C80,10 78,20 78,28 Z" fill="#b0523a" stroke="#1a1014" stroke-width="2" stroke-linejoin="round"/><path d="M42,26 C39,18 40,10 43,7 C46,12 47,19 47,25 Z M86,26 C89,18 88,10 85,7 C82,12 81,19 81,25 Z" fill="#e8a090"/>`,
  face: `<path d="M46,68 C44,84 50,98 64,100 C78,98 84,84 82,68 Z" fill="#d8846a" stroke="#1a1014" stroke-width="2"/><ellipse cx="56" cy="88" rx="3" ry="2.2" fill="#2a0e08"/><ellipse cx="72" cy="88" rx="3" ry="2.2" fill="#2a0e08"/>` +
    `<path d="M50,26 C54,40 60,46 64,50 C68,44 76,40 80,26 C72,32 68,28 64,24 C60,30 56,30 50,26 Z" fill="#2a0e08" stroke="#1a1014" stroke-width="1.6"/><path d="M60,52 L64,46 L68,52 L64,60 Z" fill="#f8e8e0" opacity=".85"/>`,
  mouth: `<path d="M56,95 Q64,98 72,95" stroke="#1a1014" stroke-width="2" fill="none"/>`,
  tail: `<path d="M86,108 C108,110 118,98 116,84 C122,96 120,112 104,118 Z" fill="#2a0e08" stroke="#1a1014" stroke-width="2"/>`, front: `<path d="M44,104 L84,104 L82,110 L46,110 Z" fill="#2a4a8a" stroke="#1a1014" stroke-width="1.4"/><path d="M48,107 h32" stroke="#e8c040" stroke-width="1.4"/>` });
D.chupacabra = () => beast({ aura: '#a0ff40', fur: '#5a6a4a', fur2: '#8a9a70', dark: '#1e2618', belly: '#a8b088', ears: 'bat', earIn: '#a87a7a', eye: '#ff2a2a', eyeHi: '#ffd0a0', brow: true, slit: true, muzzle: '#7a8a62', mouth: toothy(80, 12), claws: true, tuft: 2,
  back: [34, 46, 58, 70, 82, 94].map((x, i) => `<path d="M${x - 5},${36 - Math.abs(i - 2.5) * -1} L${x},${10 + Math.abs(i - 2.5) * 4} L${x + 5},${36} Z" fill="#2e3a24" ${st(1.4)}/>`).join(''),
  tail: `<path d="M86,110 C104,114 114,104 110,92" stroke="#5a6a4a" stroke-width="4" fill="none" stroke-linecap="round"/>` });
D.bigfoot = () => beast({ aura: '#80e060', fur: '#5a3a22', fur2: '#9a6a44', dark: '#20140a', belly: '#b08860', ears: false, eye: '#ffb020', brow: true, muzzle: '#a08060', mw: 20, mh: 13, mouth: fangGrin(84, 9), foot: '#2a1a10', tuft: 6, hrx: 40, hry: 34,
  face: `<ellipse cx="64" cy="62" rx="27" ry="22" fill="#a08060" ${st(1.4)}/>`, front: `<path d="M36,118 C30,124 40,128 50,126 M78,126 C88,128 98,124 92,118" stroke="${OUT}" stroke-width="1.4" fill="none"/>` });
D.jackalope = () => beast({ aura: '#ffb040', fur: '#8a6a4a', fur2: '#c8a880', dark: '#3a2818', belly: '#f0e4d0', ears: 'rabbit', earIn: '#e8b0b0', eye: '#ff4020', eyeHi: '#ffe0c0', brow: true, muzzle: '#f0e4d0', mw: 14, mh: 9,
  back: (() => { const d = 'M48,32 L38,18 L24,14 M38,18 L36,4 M42,24 L50,12 M80,32 L90,18 L104,14 M90,18 L92,4 M86,24 L78,12'; return `<path d="${d}" stroke="#1a1014" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" stroke="#8a6438" stroke-width="5.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M36,17 L26,15 M88,17 L100,15" stroke="#b8905a" stroke-width="1.6" stroke-linecap="round"/>`; })(),
  mouth: `<path d="M58,80 Q64,84 70,80" stroke="#1a1014" stroke-width="1.8" fill="none"/><path d="M61,81 L61,86 L64,86 L64,82 M64,82 L64,86 L67,86 L67,81" fill="#fff" stroke="#1a1014" stroke-width=".8"/>`,
  tail: `<circle cx="92" cy="112" r="8" fill="#f0e4d0" stroke="#1a1014" stroke-width="2"/>` });
D.mothman = () => beast({ aura: '#ff2030', fur: '#3a3440', fur2: '#6a6274', dark: '#0e0a12', belly: '#8a8090', ears: false, eye: '#ff1a2a', eyeHi: '#ffc0c0', ew: 14, eh: 15, nose: false, muzzle: false, mouth: `<path d="M58,84 Q64,82 70,84" stroke="#1a1014" stroke-width="2" fill="none"/>`, tuft: 5,
  back: `<path d="M50,60 C34,24 10,6 2,14 C-2,30 8,52 26,64 C12,70 6,86 12,98 C26,98 40,86 48,74 Z" fill="#2a2430" stroke="#1a1014" stroke-width="2" stroke-linejoin="round"/><path d="M78,60 C94,24 118,6 126,14 C130,30 120,52 102,64 C116,70 122,86 116,98 C102,98 88,86 80,74 Z" fill="#2a2430" stroke="#1a1014" stroke-width="2" stroke-linejoin="round"/>` +
    [[18, 30], [110, 30]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="8" fill="#b8904a" stroke="#1a1014" stroke-width="1.4"/><circle cx="${x}" cy="${y}" r="3.4" fill="#1a1014"/>`).join('') +
    `<path d="M10,22 C24,34 36,48 46,62 M118,22 C104,34 92,48 82,62 M18,86 C28,80 38,76 46,72 M110,86 C100,80 90,76 82,72" stroke="#5a4e60" stroke-width="1.4" fill="none"/>` +
    `<path d="M54,28 C46,12 38,4 30,4 M74,28 C82,12 90,4 98,4" stroke="#3a3440" stroke-width="3" fill="none" stroke-linecap="round"/>` + [[32, 4], [38, 7], [96, 4], [90, 7]].map(([x, y]) => `<path d="M${x},${y} l-2,6 M${x},${y} l3,5" stroke="#3a3440" stroke-width="1.4"/>`).join(''),
  front: `<path d="${fuzz(64, 90, 22, 7, 14, 4, 5)}" fill="#c8c0d0" opacity=".9" stroke="#1a1014" stroke-width="1.4"/>` });
D.squonk = () => beast({ aura: '#a080ff', fur: '#8a6a8a', fur2: '#c0a0c0', dark: '#3a2440', belly: '#e0d0e0', ears: 'side', eye: '#60b0ff', eyeHi: '#e0f0ff', muzzle: '#c890b0', noseC: '#6a3a5a', tuft: 2,
  mouth: `<path d="M56,86 Q64,80 72,86" stroke="${OUT}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
  face: [[40, 40], [86, 36], [36, 66], [92, 70], [56, 36], [76, 84]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${2.4 + (i % 2)}" fill="#6a4a6a" ${st(.8)}/>`).join(''),
  front: `<path d="M38,66 C36,80 38,96 34,112 M90,66 C92,80 90,96 94,112" stroke="#70c0f0" stroke-width="3" fill="none" stroke-linecap="round" opacity=".85"/><ellipse cx="64" cy="123" rx="40" ry="5" fill="#70c0f0" opacity=".55"/>` +
    `<path d="M34,48 L52,52 M94,48 L76,52" stroke="${OUT}" stroke-width="2.6" stroke-linecap="round" transform="rotate(0)"/>` });
D.sewergator = () => svgw('#60ff90',
  `<ellipse cx="64" cy="112" rx="58" ry="16" fill="#2a2c32" ${st()}/>` + [-40, -24, -8, 8, 24, 40].map(dx => `<path d="M${64 + dx},98 L${64 + dx},126" stroke="#0a0a0c" stroke-width="2.4"/>`).join('') + `<ellipse cx="64" cy="112" rx="50" ry="12" fill="none" stroke="#5a5c62" stroke-width="2.4"/>` +
  body({ fur: '#7a9478', fur2: '#aec2a4', dark: '#3a4e38', belly: '#dfe6d0', claws: true }).replace(/<ellipse cx="49" cy="117"[^>]*\/><ellipse cx="79" cy="117"[^>]*\/>/, '') +
  `<path d="M30,60 C28,40 44,28 64,28 C84,28 100,40 98,60 C98,72 88,78 64,78 C40,78 30,72 30,60 Z" fill="#93ab8e" ${st()}/>` +
  [[44, 36], [56, 32], [70, 32], [82, 36]].map(([x, y]) => `<path d="M${x - 4},${y + 2} L${x},${y - 4} L${x + 4},${y + 2} Z" fill="#62785e" ${st(1.2)}/>`).join('') +
  `<path d="M38,64 C34,76 40,96 64,96 C88,96 94,76 90,64 Z" fill="#dce4cc" ${st()}/><path d="M40,76 Q64,86 88,76" stroke="${OUT}" stroke-width="2" fill="#5a0e1e"/>` +
  [44, 52, 60, 68, 76, 84].map(x => `<path d="M${x - 2},${77} L${x},${83} L${x + 2},${77} Z" fill="#fff" stroke="${OUT}" stroke-width=".8"/>`).join('') +
  `<ellipse cx="56" cy="68" rx="1.6" ry="1" fill="${OUT}"/><ellipse cx="72" cy="68" rx="1.6" ry="1" fill="${OUT}"/>` +
  eyes({ eye: '#ff3a3a', eyeHi: '#ffd0d0', ey: 50, ew: 11, eh: 12, slit: true, brow: true }) + sparkle(16, 36, '#b0ffd0') + sparkle(112, 30, '#b0ffd0', .8));
D.chessie = () => svgw('#40a0ff',
  `<path d="M96,104 C100,84 112,78 120,82 C126,86 122,96 114,98" fill="none" stroke="#2e6a74" stroke-width="12" stroke-linecap="round"/>` +
  `<path d="M40,112 C38,96 42,84 52,80 L76,80 C86,84 90,96 88,112 Z" fill="#2e6a74" ${st()}/>` + [[54, 92], [70, 88], [62, 102], [112, 86]].map(([x, y]) => `<path d="M${x},${y} l4,3 l-4,3 l-4,-3 Z" fill="#7ac0b0" opacity=".7"/>`).join('') +
  [36, 50, 64, 78, 92].map((x, i) => `<path d="M${x - 5},${30} L${x},${12 + Math.abs(i - 2) * 4} L${x + 5},${30} Z" fill="#7ac0b0" ${st(1.4)}/>`).join('') +
  head({ fur: '#2e6a74', fur2: '#5aa8a8', dark: '#0e2a30', tuft: 1.5, muzzle: '#7ac0b0', mw: 18, mh: 11 }) +
  `<path d="M26,56 C16,52 12,60 16,66 C20,62 24,62 28,64 Z M102,56 C112,52 116,60 112,66 C108,62 104,62 100,64 Z" fill="#7ac0b0" ${st(1.4)}/>` +
  eyes({ eye: '#ffe040', eyeHi: '#fffbe0', slit: true, brow: true }) + nose('#0e2a30', 72) + toothy(80, 12) +
  `<path d="M0,110 Q10,102 20,110 T40,110 T60,110 T80,110 T100,110 T120,110 T140,110 L128,128 L0,128 Z" fill="#2a6aa8" ${st(1.4)}/><path d="M8,118 q6,-4 12,0 M44,120 q6,-4 12,0 M86,118 q6,-4 12,0" stroke="#a8d8f0" stroke-width="1.4" fill="none"/>`);
D.demoncat = () => beast({ aura: '#ffd020', fur: '#1e1a24', fur2: '#3e3848', dark: '#000', belly: '#4a4454', ears: 'pointy', earIn: '#6a2a3a', eye: '#ffe020', eyeHi: '#fffbd0', slit: true, brow: true, muzzle: false, noseC: '#6a2a3a', mouth: fangGrin(80, 11, '#4a0e1a'), claws: true, tuft: 4.5,
  face: `<path d="M26,72 L8,70 M26,76 L8,78 M102,72 L120,70 M102,76 L120,78" stroke="#8a8494" stroke-width="1.2"/>`,
  back: `<path d="M24,30 C18,50 26,62 20,80 M104,26 C112,46 102,60 110,82" stroke="#b8b0d0" stroke-width="2.4" fill="none" opacity=".35"/>`,
  tail: `<path d="M86,110 C108,114 118,96 110,78 C106,70 98,70 100,78" fill="none" stroke="#1e1a24" stroke-width="7" stroke-linecap="round"/>` });
return D;
})();

// [id, English name, translit, Persian name, map, first row, last row, boss flag needed, area name, phrase (typed), meaning, Persian of the phrase, sighting line]
const CRYPTID_DEFS = {
  fa: [
    ['karkadann', 'KARKADANN', 'karkadan', 'کرگدن', 'world', 48, 62, 'b1', 'YAZD DESERT ROAD', 'migan too biaboon ye heyvoon-e ajib hast', "they say there's a strange animal in the desert", 'می+گن تو بیابون یه حیوون عجیب هست', 'The ground shakes. A horn rises out of the desert brush...'],
    ['huma', 'HUMA', 'homa', 'هما', 'world', 26, 46, 'b2', 'ISFAHAN', 'sayeh-ash sar-e har ki biofteh, padeshah misheh', 'whoever its shadow falls on becomes king', 'سایه+اش سر هر کی بیفته، پادشاه می+شه', 'A golden shadow sweeps over the grass...'],
    ['azhdaha', 'AZHDAHA', 'ezhdeha', 'اژدها', 'world', 13, 24, 'b3', 'SHIRAZ ROAD', 'rostam ezhdeha ro shekast dad', 'Rostam defeated the dragon', 'رستم اژدها رو شکست داد', 'Smoke curls out of the grass. Something breathes fire...'],
    ['shahmaran', 'SHAHMARAN', 'shahmaran', 'شاهماران', 'north', 79, 88, 'b3', 'ZAGROS MOUNTAINS', 'afsaneh-ye shahmaran ro shenidi?', 'have you heard the legend of Shahmaran?', 'افسانه+ی شاهماران رو شنیدی؟', 'A crowned serpent rises from the rocks...'],
    ['lamassu', 'LAMASSU', 'lamasu', 'لاماسو', 'north', 66, 78, 'b3', 'PERSEPOLIS', 'negahban-e darvazeh-ye mellat-ha', 'guardian of the Gate of All Nations', 'نگهبان دروازه+ی ملت+ها', 'Stone wings creak. The guardian of Persepolis has woken...'],
    ['martikhoras', 'MARTIKHORAS', 'mardkhar', 'مردخوار', 'north', 29, 45, 'b4', 'DASHT-E KAVIR', 'too tariki-ye shab cheshm-hash midarakhsheh', 'its eyes shine in the dark of night', 'تو تاریکی شب چشم+هاش می+درخشه', 'Two eyes glow in the salt desert. A tail rattles...'],
    ['simurgh', 'SIMURGH', 'simorgh', 'سیمرغ', 'north', 0, 28, 'b5', 'TEHRAN', 'simorgh rooye kooh-e alborz zendegi mikoneh', 'the Simurgh lives on Mount Alborz', 'سیمرغ روی کوه البرز زندگی می+کنه', 'A great wind blows down from Damavand...'],
    ['rakhsh', 'RAKHSH', 'rakhsh', 'رخش', 'east', 0, 46, 'b6', 'KHORASAN', 'rakhsh az bad ham tondtar midavid', 'Rakhsh ran faster than the wind', 'رخش از باد هم تندتر می+دوید', 'Hoofbeats thunder across the steppe...'],
  ],
  en: [
    ['chupacabra', 'CHUPACABRA', 'chupacabra', 'چوپاکابرا', 'us', 48, 62, 'b1', 'ROUTE 66', 'legend has it that it only comes out at night', 'طبق افسانه فقط شب+ها بیرون میاد', '', 'Something rustles in the desert scrub. The goats go quiet...'],
    ['bigfoot', 'BIGFOOT', 'bigfoot', 'پاگنده', 'us', 13, 24, 'b3', 'PACIFIC COAST HIGHWAY', "I could've sworn I saw something in the woods", 'قسم می+خورم یه چیزی تو جنگل دیدم', '', 'Huge footprints lead into the tall grass...'],
    ['jackalope', 'JACKALOPE', 'jackalope', 'جکالوپ', 'usnorth', 66, 88, 'b3', 'ROCKY MOUNTAINS', "you won't believe what I just saw", 'باورت نمی+شه الان چی دیدم', '', 'Antlers poke out of the grass... on a rabbit?!'],
    ['mothman', 'MOTHMAN', 'mothman', 'مرد پروانه+ای', 'usnorth', 46, 65, 'b3', 'CHICAGO', 'rumor has it that it was spotted downtown', 'شایعه شده که تو مرکز شهر دیده شده', '', 'Two red eyes glow in the park. Wings unfold...'],
    ['squonk', 'SQUONK', 'squonk', 'اسکوانک', 'usnorth', 29, 45, 'b4', 'PENNSYLVANIA FARMLAND', "don't cry over spilled milk", 'برای چیزی که از دست رفته غصه نخور', '', 'Someone is sobbing in the wheat field...'],
    ['sewergator', 'SEWER ALLIGATOR', 'sewer gator', 'تمساح فاضلاب', 'usnorth', 0, 28, 'b5', 'NEW YORK CITY', "it's just an urban legend, or is it?", 'این فقط یه افسانه+ی شهریه، یا نه؟', '', 'A manhole cover rattles... and slides open.'],
    ['chessie', 'CHESSIE', 'chessie', 'چسی', 'useast', 17, 46, 'b6', 'ROAD TO D.C.', 'a sighting was reported off the coast', 'یه مشاهده نزدیک ساحل گزارش شد', '', 'Ripples spread across the water. A long neck rises...'],
    ['demoncat', 'DEMON CAT', 'demon cat', 'گربه شیطانی', 'useast', 0, 16, 'b6', 'WASHINGTON, DC', 'seeing is believing', 'شنیدن کی بود مانند دیدن', '', 'A black cat steps out of the shadows... and keeps growing.'],
  ],
};
const CRYPTID_ODDS = 0.01; // 1 wild battle in 100 in its area, once its boss is beaten
const CRYPTID_LEVEL = 42;
const cryptidWords = () => WORDS.filter(w => w.cryptid);
// add this game's cryptids to the word list (after the normal words, species and evolutions are set)
function addCryptidWords() {
  for (let i = WORDS.length - 1; i >= 0; i--) if (WORDS[i].cryptid) { delete WORD[WORDS[i].key]; WORDS.splice(i, 1); }
  const en = LANG === 'en';
  CRYPTID_DEFS[LANG].forEach(([id, name, tr, fa, map, y0, y1, boss, area, phrase, mean, phraseFa, sighting], i) => {
    const tr0 = phrase, en0 = en ? mean : mean, key = 'cryptid|' + id;
    const w = {
      key, tr: phrase, en: mean, fa: en ? phrase : phraseFa.replace(/\+/g, '‌'), route: 0, type: 'LEGEND', tr0, en0,
      level: CRYPTID_LEVEL + i, enForms: acceptForms(mean), trForms: acceptForms(phrase), idx: WORDS.length,
      cryptid: { id, map, y0, y1, boss, area, sighting }, areaName: area,
      sp: { id, name, tr, fa, cryptid: true, kind: 'cryptid' },
    };
    w.word = phrase.toUpperCase(); w.name = (en ? name : tr).toUpperCase();
    WORDS.push(w); WORD[key] = w;
  });
}
addCryptidWords();
// is a cryptid lurking in this patch of grass right now?
function cryptidHere() {
  if (rand() >= CRYPTID_ODDS) return null;
  return cryptidWords().find(w => { const c = w.cryptid; return c.map === S.map && S.y >= c.y0 && S.y <= c.y1 && S.flags[c.boss] && !S.caught[w.key]; }) || null;
}
// rewards for catching one, and for catching them all
async function cryptidCaught(w) {
  S.daftar += 5; await earn(100, 'Word of your catch spread. You were paid');
  const all = cryptidWords(), n = all.filter(x => S.caught[x.key]).length;
  await say(`You found 5 ${LANG === 'en' ? 'NOTEBOOKS' : 'DAFTARS'} too. Cryptids caught: ${B(n + ' / ' + all.length)}.`);
  if (n === all.length && !S.flags.cryptidHunter) {
    S.flags.cryptidHunter = true; SND.fx('badge');
    await say([`You caught every cryptid in ${LANG === 'en' ? 'America' : 'Iran'}!`, `${esc(S.name)} earned the ${B('CRYPTID HUNTER BADGE')}!`]);
  }
}
// the CRYPTIDS page: silhouettes until you meet them
async function cryptidScreen() {
  const el = document.createElement('div'); el.className = 'layer dex show'; $('#screen').appendChild(el);
  const L = cryptidWords(); let idx = 0;
  const draw = () => {
    const w = L[idx], c = w.cryptid, caught = S.caught[w.key], seen = S.seen[w.key] || caught;
    const pic = `<img class="mon cry-pic${seen ? '' : ' cry-sil'}" src="${monUrl(w)}">`;
    const unlocked = S.flags[c.boss];
    const detail = `<div class="dx-d">${pic}<div><b>${seen ? esc(speciesOf(w).name) : '???'}</b>${seen ? ` <span class="fs" dir="rtl">${esc(speciesOf(w).fa)}</span>` : ''}<br><small>${esc(c.area)}</small><br>` +
      (caught ? `${W(w)}<br><small>"${LANG === 'en' ? PF(w.en) : esc(w.en)}"</small>` : seen ? '<small>Seen, but it got away.</small>' : unlocked ? '<small>Rumors say it hides in the grass here. Keep looking!</small>' : '<small>Beat this area\'s boss to hear the rumors.</small>') + '</div></div>';
    const list = L.map((x, i) => `<div class="dx-r${i === idx ? ' sel' : ''}"><span class="cur">▶</span>${S.caught[x.key] ? '◆' : S.seen[x.key] ? '◇' : ' '} ${S.caught[x.key] || S.seen[x.key] ? esc(speciesOf(x).name) : '???'} <small>${esc(x.cryptid.area)}</small></div>`).join('');
    el.innerHTML = `<div class="box dx"><div class="dx-h">CRYPTIDS <span>◆${L.filter(x => S.caught[x.key]).length} / ${L.length}${S.flags.cryptidHunter ? ' ★' : ''}</span></div>${detail}<div class="dx-l">${list}</div><div class="dx-f">↑↓ move · B: back</div></div>`;
  };
  draw();
  await new Promise(res => {
    const h = b => {
      if (b === 'up') idx = (idx - 1 + L.length) % L.length; else if (b === 'down') idx = (idx + 1) % L.length;
      else if (b === 'b' || b === 'start' || b === 'a') { SND.fx('cancel'); popH(h); el.remove(); res(); return; } else return;
      SND.fx('blip'); draw();
    };
    pushH(h);
  });
}
