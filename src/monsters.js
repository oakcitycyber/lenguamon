// ===== LENGUAMON monsters: smooth SVG caricatures of animals found in Iran =====
// Each word is assigned a species (seeded by the word), an expression, and a collar in its word-type colour.
const SPECIES = [
  { id: 'cat', en: 'Persian cat', fa: 'گربه ایرانی', kind: 'quad', fur: '#f4eee4', fur2: '#ffffff', dark: '#b8a898', ears: 'tiny', muzzle: 'cat', tail: 'fluffy', extra: ['fluff'] },
  { id: 'cheetah', en: 'Asiatic cheetah', fa: 'یوزپلنگ ایرانی', kind: 'quad', fur: '#f0c060', fur2: '#fff4d8', dark: '#3a2a1a', ears: 'small', muzzle: 'bigcat', tail: 'thin', pattern: 'spots', extra: ['tears'] },
  { id: 'leopard', en: 'Persian leopard', fa: 'پلنگ ایرانی', kind: 'quad', fur: '#e8b450', fur2: '#fff0d0', dark: '#3a2a1a', ears: 'small', muzzle: 'bigcat', tail: 'thin', pattern: 'rosettes' },
  { id: 'seal', en: 'Caspian seal', fa: 'فک خزری', kind: 'seal', fur: '#9aa8b4', fur2: '#d4dde4', dark: '#4a5866', ears: 'none', muzzle: 'seal', pattern: 'freckles' },
  { id: 'onager', en: 'Persian onager', fa: 'گورخر ایرانی', kind: 'quad', fur: '#d8a870', fur2: '#fbf2e4', dark: '#5a3a22', ears: 'long', muzzle: 'long', tail: 'tuft', extra: ['mane'] },
  { id: 'camel', en: 'camel', fa: 'شتر', kind: 'quad', fur: '#d8b07a', fur2: '#f0d8b0', dark: '#8a6234', ears: 'side', muzzle: 'long', tail: 'tuft', extra: ['hump', 'lids'] },
  { id: 'ibex', en: 'wild goat', fa: 'بز کوهی', kind: 'quad', fur: '#b89068', fur2: '#ecdcc4', dark: '#5a3e24', ears: 'side', muzzle: 'long', horns: 'ibex', tail: 'thin', extra: ['beard'] },
  { id: 'mouflon', en: 'Armenian mouflon', fa: 'قوچ', kind: 'quad', fur: '#a8683a', fur2: '#f4ece0', dark: '#4a2a14', ears: 'side', muzzle: 'long', horns: 'curl', pattern: 'saddle' },
  { id: 'gazelle', en: 'goitered gazelle', fa: 'آهو', kind: 'quad', fur: '#dcae74', fur2: '#fffaf0', dark: '#5a3a1a', ears: 'big', muzzle: 'long', horns: 'lyre', tail: 'thin', pattern: 'face' },
  { id: 'deer', en: 'Persian fallow deer', fa: 'گوزن زرد ایرانی', kind: 'quad', fur: '#c8864a', fur2: '#fbeedc', dark: '#5a3418', ears: 'side', muzzle: 'long', horns: 'antler', pattern: 'dots' },
  { id: 'bear', en: 'brown bear', fa: 'خرس قهوه‌ای', kind: 'quad', fur: '#8a5a34', fur2: '#c8a07a', dark: '#3a2414', ears: 'round', muzzle: 'bear' },
  { id: 'wolf', en: 'grey wolf', fa: 'گرگ', kind: 'quad', fur: '#9a9aa4', fur2: '#ecece8', dark: '#3e3e48', ears: 'pointy', muzzle: 'dog', tail: 'bushy', pattern: 'mask' },
  { id: 'fox', en: 'red fox', fa: 'روباه', kind: 'quad', fur: '#e8782e', fur2: '#ffffff', dark: '#3a2010', ears: 'pointy', muzzle: 'dog', tail: 'bushy', pattern: 'mask' },
  { id: 'jackal', en: 'golden jackal', fa: 'شغال', kind: 'quad', fur: '#c89858', fur2: '#f4e6cc', dark: '#4a3218', ears: 'pointy', muzzle: 'dog', tail: 'bushy' },
  { id: 'hedgehog', en: 'long-eared hedgehog', fa: 'جوجه‌تیغی', kind: 'quad', fur: '#e8d0b0', fur2: '#fff6ea', dark: '#5a4030', ears: 'big', muzzle: 'rodent', extra: ['spines'] },
  { id: 'squirrel', en: 'Persian squirrel', fa: 'سنجاب ایرانی', kind: 'quad', fur: '#b8683a', fur2: '#f8e4cc', dark: '#4a2412', ears: 'tufted', muzzle: 'rodent', tail: 'squirrel' },
  { id: 'jerboa', en: 'jerboa', fa: 'موش دوپا', kind: 'quad', fur: '#e8c898', fur2: '#fffaf0', dark: '#6a4a2a', ears: 'huge', muzzle: 'rodent', tail: 'jerboa' },
  { id: 'porcupine', en: 'crested porcupine', fa: 'تشی', kind: 'quad', fur: '#5a4a44', fur2: '#8a7a70', dark: '#201814', ears: 'round', muzzle: 'rodent', extra: ['quills'] },
  { id: 'hoopoe', en: 'hoopoe', fa: 'هدهد', kind: 'bird', fur: '#e8a060', fur2: '#f8d8b0', dark: '#2a1a10', ears: 'none', muzzle: 'hoopoe', extra: ['crest', 'barwings'] },
  { id: 'bulbul', en: 'nightingale (bolbol)', fa: 'بلبل', kind: 'bird', fur: '#a8845a', fur2: '#f0e0c4', dark: '#4a3420', ears: 'none', muzzle: 'beak' },
  { id: 'partridge', en: 'chukar partridge (kabk)', fa: 'کبک', kind: 'bird', fur: '#b8b0a8', fur2: '#f0ece4', dark: '#3a3030', ears: 'none', muzzle: 'redbeak', extra: ['eyestripe', 'barwings'] },
  { id: 'eagle', en: 'golden eagle', fa: 'عقاب طلایی', kind: 'bird', fur: '#7a4e2a', fur2: '#e8b860', dark: '#2a180c', ears: 'none', muzzle: 'hook', extra: ['brow'] },
  { id: 'tortoise', en: 'Central Asian tortoise', fa: 'لاک‌پشت', kind: 'tortoise', fur: '#b8a870', fur2: '#e8dca8', dark: '#4a4020', ears: 'none', muzzle: 'none' },
];
const OL = '#2b1d16';
const A = (o) => Object.entries(o).map(([k, v]) => `${k}="${v}"`).join(' ');
const sh = (tag, o, inner) => inner === undefined ? `<${tag} ${A(o)}/>` : `<${tag} ${A(o)}>${inner}</${tag}>`;
const mir = d => d.replace(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g, (m, x, y) => `${(64 - +x).toFixed(1)},${y}`);
const both = (d, attrs) => sh('path', { d, ...attrs }) + sh('path', { d: mir(d), ...attrs });
function speciesOf(w) { return SPECIES[hashStr(w.key + '|sp') % SPECIES.length]; }

function monsterSvg(w) {
  const sp = speciesOf(w), r = rng(hashStr(w.key + '|look'));
  const col = TYPES[w.type].pal;
  const expr = Math.floor(r() * 5);
  const st = { stroke: OL, 'stroke-width': 1.5, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' };
  const f = (c, extra = {}) => ({ fill: c, ...st, ...extra });
  let back = '', body = '', head = '', face = '', front = '';
  const K = sp.kind;
  const hc = K === 'bird' ? { cx: 32, cy: 26, rx: 14, ry: 13 } : K === 'tortoise' ? { cx: 32, cy: 23, rx: 12, ry: 10.5 } : K === 'seal' ? { cx: 32, cy: 27, rx: 15, ry: 13 } : { cx: 32, cy: 27, rx: 16.5, ry: 14 };
  const eyeY = hc.cy - 1.5, eyeDX = K === 'tortoise' ? 5 : 6.5;

  // ---- tails (behind) ----
  if (sp.tail === 'fluffy') back += sh('path', { d: 'M44,50 C58,52 60,38 52,34 C56,42 50,46 44,46 Z', ...f(sp.fur) });
  if (sp.tail === 'bushy') back += sh('path', { d: 'M43,50 C56,56 62,42 56,32 C54,42 48,44 43,45 Z', ...f(sp.fur) }) + sh('path', { d: 'M56,32 C58,36 57,40 54.5,41 C55,37 55,35 56,32 Z', fill: sp.id === 'fox' ? '#fff' : sp.dark });
  if (sp.tail === 'thin') back += sh('path', { d: 'M44,50 C54,52 56,44 52,38', fill: 'none', stroke: OL, 'stroke-width': 4.2, 'stroke-linecap': 'round' }) + sh('path', { d: 'M44,50 C54,52 56,44 52,38', fill: 'none', stroke: sp.fur, 'stroke-width': 2.2, 'stroke-linecap': 'round' }) + (sp.pattern === 'spots' || sp.pattern === 'rosettes' ? sh('circle', { cx: 52, cy: 38.5, r: 1.6, fill: sp.dark }) : '');
  if (sp.tail === 'tuft') back += sh('path', { d: 'M44,50 C50,52 52,48 52,44', fill: 'none', stroke: OL, 'stroke-width': 2 }) + sh('path', { d: 'M52,44 l-2,-5 l3,2 l1,-4 l1,5 Z', fill: sp.dark });
  if (sp.tail === 'squirrel') back += sh('path', { d: 'M42,52 C64,56 64,24 50,14 C44,10 40,16 46,20 C56,28 52,40 42,44 Z', ...f(sp.fur) }) + sh('path', { d: 'M48,22 C54,28 54,38 46,44', fill: 'none', stroke: sp.fur2, 'stroke-width': 1.4, opacity: .7 });
  if (sp.tail === 'jerboa') back += sh('path', { d: 'M42,52 C54,58 60,50 60,40', fill: 'none', stroke: OL, 'stroke-width': 2 }) + sh('path', { d: 'M60,40 l-3,-6 l2,1 l1,-4 l2,4 l1,-1 Z', ...f('#2b1d16') }) + sh('path', { d: 'M60.5,38 l-1,-3 l1,0 Z', fill: '#fff' });
  // quills / spines behind head
  if (sp.extra?.includes('quills')) { let q = ''; for (let i = 0; i < 11; i++) { const a = -2.6 + i * 0.25, x2 = 32 + Math.cos(a) * 30, y2 = 28 + Math.sin(a) * 30; q += sh('line', { x1: 32, y1: 30, x2: x2.toFixed(1), y2: y2.toFixed(1), stroke: i % 2 ? '#f4f0e8' : '#1a1210', 'stroke-width': 2.4, 'stroke-linecap': 'round' }); } back += q; }
  if (sp.extra?.includes('spines')) { let d = 'M12,34 '; for (let i = 0; i <= 12; i++) { const a = Math.PI + i * Math.PI / 12, rr = i % 2 ? 22 : 17; d += `L${(32 + Math.cos(a) * rr).toFixed(1)},${(31 + Math.sin(a) * rr).toFixed(1)} `; } d += 'L52,34 Z'; back += sh('path', { d, ...f('#7a6250') }); }
  // horns (behind head)
  const horn = '#cdb48a';
  if (sp.horns === 'ibex') { back += both('M24,16 C20,4 10,0 5,6', { fill: 'none', stroke: OL, 'stroke-width': 5.4, 'stroke-linecap': 'round' }) + both('M24,16 C20,4 10,0 5,6', { fill: 'none', stroke: horn, 'stroke-width': 3.4, 'stroke-linecap': 'round' }) + both('M19,7 L17,9 M14,4.5 L13,7 M9.5,4 L9.5,6.6', { stroke: OL, 'stroke-width': 1 }); }
  if (sp.horns === 'curl') { back += both('M23,17 C14,6 4,14 8,23 C11,29 19,26 16,20', { fill: 'none', stroke: OL, 'stroke-width': 6.4, 'stroke-linecap': 'round' }) + both('M23,17 C14,6 4,14 8,23 C11,29 19,26 16,20', { fill: 'none', stroke: horn, 'stroke-width': 4.4, 'stroke-linecap': 'round' }); }
  if (sp.horns === 'lyre') { back += both('M27,15 C22,8 28,4 24,-2', { fill: 'none', stroke: OL, 'stroke-width': 3.6, 'stroke-linecap': 'round' }) + both('M27,15 C22,8 28,4 24,-2', { fill: 'none', stroke: '#3a2a1a', 'stroke-width': 1.8, 'stroke-linecap': 'round' }); }
  if (sp.horns === 'antler') { back += both('M26,15 L22,8 L14,7 L13,2 L18,4 L17,0 L21,3 L22,-1 L25,4 L28,13 Z', f(horn)); }
  // ears (behind head)
  const ear = (d, inner) => both(d, f(sp.fur)) + (inner ? both(inner, { fill: '#f0a0a8', opacity: .85 }) : '');
  if (sp.ears === 'tiny') back += ear('M17,20 L18,9 L27,14 Z', 'M19.5,16 L20,12 L24,14 Z');
  if (sp.ears === 'small') back += [19, 45].map(x => sh('circle', { cx: x, cy: 15, r: 5, ...f(sp.fur) }) + sh('circle', { cx: x, cy: 15.5, r: 2.4, fill: sp.dark, opacity: .7 })).join('');
  if (sp.ears === 'round') back += sh('circle', { cx: 18, cy: 15, r: 6, ...f(sp.fur) }) + sh('circle', { cx: 46, cy: 15, r: 6, ...f(sp.fur) }) + sh('circle', { cx: 18, cy: 15, r: 3, fill: sp.fur2 }) + sh('circle', { cx: 46, cy: 15, r: 3, fill: sp.fur2 });
  if (sp.ears === 'pointy') back += ear('M15,22 L16,3 L28,13 Z', 'M18,17 L18.5,8 L24,13 Z') + (sp.id === 'fox' ? both('M16,3 L15.6,9 L19,7 Z', { fill: '#2b1d16' }) : '');
  if (sp.ears === 'long') back += both('M23,15 C14,10 12,-2 17,-3 C22,-2 26,8 26,14 Z', f(sp.fur)) + both('M22,12 C17,8 16,1 18,0 C21,1 23,7 24,11 Z', { fill: sp.fur2 }) + both('M17,-3 C18,-2 19,0 19,1', { stroke: sp.dark, 'stroke-width': 2 });
  if (sp.ears === 'side') back += both('M18,22 C10,22 4,18 6,15 C10,14 15,16 19,19 Z', f(sp.fur)) + both('M16,20 C11,19 8,17 9,16 C12,16 14,17 17,19 Z', { fill: '#f0b8a8' });
  if (sp.ears === 'big') back += both('M20,18 C10,14 8,2 14,0 C20,0 25,10 25,15 Z', f(sp.fur)) + both('M20,15 C14,11 13,4 15,3 C18,4 22,9 22,13 Z', { fill: '#f4b4b4' });
  if (sp.ears === 'huge') back += both('M22,17 C10,12 6,-4 13,-6 C21,-6 26,8 26,14 Z', f(sp.fur)) + both('M21,13 C14,9 11,0 14,-2 C18,-2 22,6 23,11 Z', { fill: '#f4b4b4' });
  if (sp.ears === 'tufted') back += ear('M17,20 L18,7 L27,14 Z', 'M19.5,16 L20,11 L24,14 Z') + both('M18,7 L16,1 M18,7 L19,1 M18,7 L13,3', { stroke: sp.dark, 'stroke-width': 1.3 });
  // camel hump
  if (sp.extra?.includes('hump')) back += sh('path', { d: 'M34,40 C36,26 52,26 52,40 Z', ...f(sp.fur) });

  // ---- body ----
  if (K === 'quad') {
    body += sh('ellipse', { cx: 32, cy: 47, rx: 13.5, ry: 10.5, ...f(sp.fur) });
    body += sh('ellipse', { cx: 32, cy: 49, rx: 7.5, ry: 6.5, fill: sp.fur2 });
    body += sh('ellipse', { cx: 25, cy: 56.5, rx: 4.6, ry: 2.8, ...f(sp.fur) }) + sh('ellipse', { cx: 39, cy: 56.5, rx: 4.6, ry: 2.8, ...f(sp.fur) });
    body += sh('ellipse', { cx: 20.5, cy: 47, rx: 3, ry: 5, transform: 'rotate(20 20.5 47)', ...f(sp.fur) }) + sh('ellipse', { cx: 43.5, cy: 47, rx: 3, ry: 5, transform: 'rotate(-20 43.5 47)', ...f(sp.fur) });
    if (sp.pattern === 'saddle') body += sh('ellipse', { cx: 40, cy: 44, rx: 4, ry: 3, fill: '#f4ece0' });
    if (sp.pattern === 'dots') for (const [x, y] of [[23, 43], [27, 40], [37, 40], [41, 43], [24, 49], [40, 49]]) body += sh('circle', { cx: x, cy: y, r: 1.2, fill: '#fff' });
    if (sp.pattern === 'spots' || sp.pattern === 'rosettes') for (let i = 0; i < 9; i++) { const x = 21 + r() * 22, y = 40 + r() * 14; if (Math.abs(x - 32) < 7 && y > 44) continue; body += sp.pattern === 'spots' ? sh('circle', { cx: x.toFixed(1), cy: y.toFixed(1), r: 1.1, fill: sp.dark }) : sh('circle', { cx: x.toFixed(1), cy: y.toFixed(1), r: 1.6, fill: 'none', stroke: sp.dark, 'stroke-width': .9 }); }
  } else if (K === 'bird') {
    body += sh('ellipse', { cx: 32, cy: 44, rx: 14, ry: 14, ...f(sp.fur) });
    body += sh('ellipse', { cx: 32, cy: 47, rx: 8, ry: 9, fill: sp.fur2 });
    const wing = 'M19,38 C11,42 11,54 18,57 C22,52 22,44 19,38 Z';
    body += both(wing, f(sp.id === 'hoopoe' || sp.id === 'partridge' ? '#ffffff' : sp.dark === '#2a180c' ? '#5a3418' : sp.fur));
    if (sp.extra?.includes('barwings')) body += both('M14,44 L20,43 M13,48 L21,47 M14,52 L21,51', { stroke: sp.id === 'hoopoe' ? '#1a1210' : '#3a3030', 'stroke-width': 2.2 });
    body += both('M27,57 L26,61 M27,57 L28.5,61 M27,57 L24,60.5', { stroke: '#e08a2a', 'stroke-width': 1.6 });
  } else if (K === 'seal') {
    body += sh('path', { d: 'M14,44 C14,30 50,30 50,44 C50,58 40,60 32,60 C24,60 14,58 14,44 Z', ...f(sp.fur) });
    body += sh('ellipse', { cx: 32, cy: 50, rx: 9, ry: 7, fill: sp.fur2 });
    body += both('M16,50 C8,52 6,58 12,58 C16,58 18,55 19,52 Z', f(sp.fur));
  } else if (K === 'tortoise') {
    body += sh('ellipse', { cx: 20, cy: 54, rx: 4.5, ry: 3.4, ...f('#9a9060') }) + sh('ellipse', { cx: 44, cy: 54, rx: 4.5, ry: 3.4, ...f('#9a9060') });
    body += sh('path', { d: 'M11,52 C11,34 20,30 32,30 C44,30 53,34 53,52 Z', ...f('#8a7a3a') });
    body += sh('path', { d: 'M26,33 L38,33 L42,41 L36,48 L28,48 L22,41 Z M14,44 L22,41 M42,41 L50,44 M28,48 L26,52 M36,48 L38,52 M26,33 L22,31 M38,33 L42,31', fill: '#a89a50', stroke: '#4a4020', 'stroke-width': 1.2 });
    body += sh('path', { d: 'M10,52 L54,52', stroke: OL, 'stroke-width': 2 });
  }
  // collar in the word-type colour, with a little tile-diamond charm
  if (K !== 'tortoise') {
    const cy = K === 'bird' ? 36 : K === 'seal' ? 38 : 38.5;
    body += sh('path', { d: `M20,${cy} Q32,${cy + 6} 44,${cy} L44,${cy + 3} Q32,${cy + 9} 20,${cy + 3} Z`, fill: col[1], stroke: OL, 'stroke-width': 1.2 });
    body += sh('path', { d: `M32,${cy + 5} l2.4,2.6 l-2.4,2.6 l-2.4,-2.6 Z`, fill: '#f0c040', stroke: OL, 'stroke-width': .9 });
  }

  // ---- head ----
  head += sh('ellipse', { ...hc, ...f(sp.fur) });
  if (sp.extra?.includes('fluff')) head += both('M16,26 L12,27 L15,29 L12,32 L16,32 L15,35 L19,33', { fill: sp.fur, stroke: OL, 'stroke-width': 1.2 });
  if (sp.extra?.includes('mane')) head += sh('path', { d: 'M27,14 l2,-5 l1.5,4 l1.5,-5 l1.5,5 l1.5,-4 l2,5 Z', fill: sp.dark, stroke: OL, 'stroke-width': 1 });
  if (sp.pattern === 'mask') head += both('M17,30 C20,38 27,38 30,34 C26,32 22,30 17,30 Z', { fill: sp.fur2 });
  if (sp.pattern === 'face') head += sh('path', { d: 'M30,15 C31,24 31,28 30,33 L34,33 C33,28 33,24 34,15 Z', fill: sp.fur2 });
  if (sp.pattern === 'spots' || sp.pattern === 'rosettes') for (let i = 0; i < 7; i++) { const a = r() * Math.PI * 2, d = 7 + r() * 6, x = 32 + Math.cos(a) * d * 1.1, y = 24 + Math.sin(a) * d * .55; if (y > 27) continue; head += sh('circle', { cx: x.toFixed(1), cy: y.toFixed(1), r: sp.pattern === 'spots' ? .9 : 1.3, fill: sp.pattern === 'spots' ? sp.dark : 'none', stroke: sp.pattern === 'rosettes' ? sp.dark : 'none', 'stroke-width': .8 }); }
  if (sp.pattern === 'freckles') for (let i = 0; i < 6; i++) head += sh('circle', { cx: (22 + r() * 20).toFixed(1), cy: (16 + r() * 7).toFixed(1), r: .9, fill: sp.dark, opacity: .5 });
  if (sp.extra?.includes('crest')) { let c = ''; for (let i = 0; i < 5; i++) { const x = 22 + i * 5, a = (i - 2) * 9; c += sh('path', { d: `M${x},16 C${x - 2},8 ${x - 1},2 ${x + 1},0 C${x + 3},2 ${x + 3},8 ${x + 2},16 Z`, fill: '#f0943a', stroke: OL, 'stroke-width': 1.1, transform: `rotate(${a} ${x} 16)` }) + sh('path', { d: `M${x - .2},3 C${x},1 ${x + 1},0 ${x + 1},0 C${x + 2},1 ${x + 2.4},2 ${x + 2.2},3.5 Z`, fill: '#1a1210', transform: `rotate(${a} ${x} 16)` }); } head = c + head; }
  if (sp.extra?.includes('eyestripe')) head += sh('path', { d: 'M18,22 C24,26 28,30 32,31 C36,30 40,26 46,22 C42,28 36,34 32,34 C28,34 22,28 18,22 Z', fill: '#1a1210' });
  if (sp.id === 'eagle') head += sh('path', { d: 'M18,22 C20,12 44,12 46,22 C40,18 24,18 18,22 Z', fill: '#e8b860' });

  // ---- muzzle ----
  const m = sp.muzzle;
  if (m === 'cat') face += sh('path', { d: 'M30.5,30 L33.5,30 L32,32 Z', fill: '#e88a98', stroke: OL, 'stroke-width': .8 }) + both('M24,31 L14,29 M24,33 L14,34', { stroke: OL, 'stroke-width': .7 });
  if (m === 'bigcat') face += sh('circle', { cx: 29.5, cy: 32.5, r: 3.3, fill: sp.fur2 }) + sh('circle', { cx: 34.5, cy: 32.5, r: 3.3, fill: sp.fur2 }) + sh('path', { d: 'M30,29.5 L34,29.5 L32,32 Z', fill: '#3a2a1a' });
  if (m === 'dog') face += sh('ellipse', { cx: 32, cy: 33, rx: 7.5, ry: 5.5, fill: sp.fur2, stroke: OL, 'stroke-width': 1 }) + sh('ellipse', { cx: 32, cy: 30.5, rx: 2.8, ry: 2, fill: '#1a1210' });
  if (m === 'long') face += sh('ellipse', { cx: 32, cy: 34.5, rx: 8.5, ry: 6.5, fill: sp.fur2, stroke: OL, 'stroke-width': 1.2 }) + sh('ellipse', { cx: 29, cy: 34, rx: 1.2, ry: 1.8, fill: OL }) + sh('ellipse', { cx: 35, cy: 34, rx: 1.2, ry: 1.8, fill: OL });
  if (m === 'bear') face += sh('ellipse', { cx: 32, cy: 33, rx: 7, ry: 5.5, fill: sp.fur2, stroke: OL, 'stroke-width': 1 }) + sh('ellipse', { cx: 32, cy: 31, rx: 3, ry: 2.1, fill: '#1a1210' });
  if (m === 'rodent') face += sh('ellipse', { cx: 32, cy: 31, rx: 2, ry: 1.5, fill: sp.id === 'porcupine' ? '#1a1210' : '#e88a98' }) + both('M24,31 L15,29 M24,32.5 L15,33', { stroke: OL, 'stroke-width': .6 });
  if (m === 'seal') face += sh('circle', { cx: 29, cy: 33, r: 3.6, fill: sp.fur2, stroke: OL, 'stroke-width': .9 }) + sh('circle', { cx: 35, cy: 33, r: 3.6, fill: sp.fur2, stroke: OL, 'stroke-width': .9 }) + sh('ellipse', { cx: 32, cy: 30.5, rx: 2.3, ry: 1.6, fill: '#1a1210' }) + both('M27,33 L18,31 M27,34.5 L18,36', { stroke: OL, 'stroke-width': .6 });
  if (m === 'beak' || m === 'redbeak') face += sh('path', { d: 'M28.5,29 L35.5,29 L32,35 Z', fill: m === 'redbeak' ? '#e0303a' : '#e8a030', stroke: OL, 'stroke-width': 1.1 });
  if (m === 'hook') face += sh('path', { d: 'M28,28 C30,26 36,26 37,30 C37,33 35,36 33,36 C34,33 32,31 28,31 Z', fill: '#f0c030', stroke: OL, 'stroke-width': 1.1 });
  if (m === 'hoopoe') face += sh('path', { d: 'M30,29 C31,36 33,42 37,47', fill: 'none', stroke: OL, 'stroke-width': 3.2, 'stroke-linecap': 'round' }) + sh('path', { d: 'M30,29 C31,36 33,42 37,47', fill: 'none', stroke: '#3a2a20', 'stroke-width': 1.6, 'stroke-linecap': 'round' });

  // ---- eyes & expression ----
  const eye = (x) => {
    if (expr === 3) return sh('path', { d: `M${x - 3.4},${eyeY} Q${x},${eyeY + 2.6} ${x + 3.4},${eyeY}`, fill: 'none', stroke: OL, 'stroke-width': 1.6 }) ;
    if (expr === 4 && x > 32) return sh('path', { d: `M${x - 3.2},${eyeY + 1} Q${x},${eyeY - 2.4} ${x + 3.2},${eyeY + 1}`, fill: 'none', stroke: OL, 'stroke-width': 1.6 });
    const big = sp.id === 'jerboa' || sp.id === 'bulbul' ? 1.15 : 1;
    let s = sh('ellipse', { cx: x, cy: eyeY, rx: 3.5 * big, ry: 4.1 * big, fill: '#fff', stroke: OL, 'stroke-width': 1.2 });
    s += sh('ellipse', { cx: x + (x < 32 ? .6 : -.6), cy: eyeY + .6, rx: 2.2 * big, ry: 2.8 * big, fill: '#1e1410' });
    s += sh('circle', { cx: x + (x < 32 ? 1.3 : .1), cy: eyeY - .6, r: .95, fill: '#fff' });
    if (sp.extra?.includes('lids')) s += sh('path', { d: `M${x - 3.6},${eyeY - .5} Q${x},${eyeY - 4.8} ${x + 3.6},${eyeY - .5} Z`, fill: sp.fur, stroke: OL, 'stroke-width': 1 });
    return s;
  };
  face += eye(32 - eyeDX) + eye(32 + eyeDX);
  if (sp.extra?.includes('tears')) face += both('M24.5,28 C24,31 25,34 27,36', { fill: 'none', stroke: '#2a1a10', 'stroke-width': 1.3 });
  if (expr === 2 || sp.extra?.includes('brow')) face += both(`M${32 - eyeDX - 4},${eyeY - 6} L${32 - eyeDX + 3},${eyeY - 4}`, { stroke: OL, 'stroke-width': 1.8 });
  // cheeks
  if (K !== 'bird' && K !== 'tortoise') face += sh('ellipse', { cx: 32 - eyeDX - 3, cy: eyeY + 6, rx: 2.4, ry: 1.4, fill: '#ff8a9a', opacity: .45 }) + sh('ellipse', { cx: 32 + eyeDX + 3, cy: eyeY + 6, rx: 2.4, ry: 1.4, fill: '#ff8a9a', opacity: .45 });
  // mouth
  const my = m === 'long' ? 38.5 : m === 'dog' || m === 'bear' ? 36.5 : K === 'tortoise' ? 28 : m === 'beak' || m === 'redbeak' || m === 'hook' || m === 'hoopoe' ? null : 34.5;
  if (my) {
    if (expr === 1) face += sh('path', { d: `M28.5,${my - .5} Q32,${my + 4.5} 35.5,${my - .5} Z`, fill: '#7a2a30', stroke: OL, 'stroke-width': 1 }) + sh('path', { d: `M30,${my + 1.6} Q32,${my + 3.2} 34,${my + 1.6}`, fill: '#f07888' });
    else if (expr === 2) face += sh('path', { d: `M29,${my} Q32.5,${my + 1.6} 35.5,${my - .8}`, fill: 'none', stroke: OL, 'stroke-width': 1.2 });
    else face += sh('path', { d: `M29,${my - .4} Q30.5,${my + 1.6} 32,${my} Q33.5,${my + 1.6} 35,${my - .4}`, fill: 'none', stroke: OL, 'stroke-width': 1.1 });
    if (m === 'rodent') face += sh('rect', { x: 31, y: my + .4, width: 2, height: 2.2, fill: '#fff', stroke: OL, 'stroke-width': .6 });
  }
  if (sp.extra?.includes('beard')) front += sh('path', { d: 'M29.5,40 L32,47 L34.5,40 Z', fill: sp.dark, stroke: OL, 'stroke-width': 1 });

  const shadow = sh('ellipse', { cx: 32, cy: 60.5, rx: 17, ry: 2.6, fill: 'rgba(0,0,0,.16)' });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -8 68 72">${shadow}${back}${body}${head}${face}${front}</svg>`;
}
const MON_URL = {};
function monUrl(w) { return MON_URL[w.key] || (MON_URL[w.key] = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(monsterSvg(w))); }
function monImg(w, cls = '') { return `<img class="mon ${cls}" src="${monUrl(w)}" alt="${esc(w.name)}">`; }

// ---- character portraits (bosses, professor): invented caricatures, not real people ----
function portraitSvg(id) {
  const st = 'stroke="#2b1d16" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"';
  const skin = '#eab890';
  const eyes = (angry) => `<ellipse cx="26" cy="27" rx="2.2" ry="2.6" fill="#1e1410"/><ellipse cx="38" cy="27" rx="2.2" ry="2.6" fill="#1e1410"/><circle cx="26.8" cy="26.2" r=".7" fill="#fff"/><circle cx="38.8" cy="26.2" r=".7" fill="#fff"/>` + (angry ? `<path d="M21,21 L29,24 M43,21 L35,24" stroke="#1a1210" stroke-width="2.4" stroke-linecap="round"/>` : `<path d="M22,22 Q26,20 29,22 M35,22 Q38,20 42,22" stroke="#3a2a1a" stroke-width="1.3" fill="none"/>`);
  if (id === 'basij') {
    let kef = ''; for (let x = 14; x < 50; x += 3) for (let y = 41; y < 49; y += 3) if ((x + y) % 2) kef += `<rect x="${x}" y="${y}" width="1.6" height="1.6" fill="#1a1a1a"/>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <ellipse cx="32" cy="61" rx="20" ry="2.5" fill="rgba(0,0,0,.15)"/>
      <path d="M12,64 C12,48 20,42 32,42 C44,42 52,48 52,64 Z" fill="#8a8a58" ${st}/>
      <rect x="19" y="52" width="8" height="6" fill="#7a7a48" ${st}/><rect x="37" y="52" width="8" height="6" fill="#7a7a48" ${st}/>
      <path d="M13,46 C20,40 44,40 51,46 L49,50 C42,46 22,46 15,50 Z" fill="#f4f0e4" ${st}/>${kef}
      <ellipse cx="32" cy="27" rx="13" ry="15" fill="${skin}" ${st}/>
      <path d="M19,22 C19,10 45,10 45,22 C42,16 22,16 19,22 Z" fill="#1a1410" ${st}/>
      <path d="M19,28 C19,44 45,44 45,28 C42,34 38,36 32,36 C26,36 22,34 19,28 Z" fill="#1a1410" ${st}/>
      ${eyes(true)}<path d="M28,35 Q32,32.5 36,35" fill="none" stroke="#f4d0b0" stroke-width="1.5"/>
      <path d="M30,29 Q32,32 34,29" fill="none" stroke="#a87858" stroke-width="1.2"/>
      <g transform="rotate(-12 54 38)"><rect x="49" y="28" width="11" height="15" rx="1.5" fill="#d8b070" ${st}/><rect x="51" y="31" width="7" height="10" fill="#fff"/><path d="M52,33 h5 M52,35.5 h5 M52,38 h4" stroke="#888" stroke-width=".8"/></g>
    </svg>`;
  }
  if (id === 'irgc') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <ellipse cx="32" cy="61" rx="20" ry="2.5" fill="rgba(0,0,0,.15)"/>
      <path d="M10,64 C10,47 19,41 32,41 C45,41 54,47 54,64 Z" fill="#4b5a2e" ${st}/>
      <path d="M27,41 L32,50 L37,41" fill="#3a4622" ${st}/>
      <rect x="13" y="43" width="10" height="3" rx="1" fill="#c8a040" ${st}/><rect x="41" y="43" width="10" height="3" rx="1" fill="#c8a040" ${st}/>
      <rect x="38" y="51" width="3" height="4" fill="#d83030" stroke="#2b1d16" stroke-width=".8"/><rect x="41.5" y="51" width="3" height="4" fill="#30a050" stroke="#2b1d16" stroke-width=".8"/><rect x="45" y="51" width="3" height="4" fill="#f0c040" stroke="#2b1d16" stroke-width=".8"/>
      <rect x="38" y="56" width="3" height="4" fill="#3060c0" stroke="#2b1d16" stroke-width=".8"/><rect x="41.5" y="56" width="3" height="4" fill="#fff" stroke="#2b1d16" stroke-width=".8"/>
      <ellipse cx="32" cy="28" rx="13.5" ry="15" fill="${skin}" ${st}/>
      <path d="M18.5,30 C18,46 46,46 45.5,30 C42,36 38,37 32,37 C26,37 22,36 18.5,30 Z" fill="#2a1a12" ${st}/>
      <path d="M25,34 C28,32 36,32 39,34 C36,35.5 28,35.5 25,34 Z" fill="#2a1a12"/>
      <path d="M20,27 h10 v4 q-5,2 -10,0 Z M34,27 h10 v4 q-5,2 -10,0 Z" fill="#101418" ${st}/><path d="M30,28 h4" stroke="#2b1d16" stroke-width="1.5"/>
      <path d="M22,28 l3,0" stroke="#5a6a80" stroke-width="1"/><path d="M36,28 l3,0" stroke="#5a6a80" stroke-width="1"/>
      <path d="M21,21 L29,24 M43,21 L35,24" stroke="#1a1210" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M14,18 C14,4 50,4 50,18 Z" fill="#3d4a25" ${st}/>
      <path d="M12,19 C20,16 44,16 52,19 C50,23 14,23 12,19 Z" fill="#26301a" ${st}/>
      <circle cx="32" cy="12" r="3.4" fill="#e0b040" ${st}/><circle cx="32" cy="12" r="1.3" fill="#3d4a25"/>
    </svg>`;
  }
  if (id === 'shirin') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <ellipse cx="32" cy="61" rx="20" ry="2.5" fill="rgba(0,0,0,.15)"/>
      <path d="M12,64 C12,48 20,42 32,42 C44,42 52,48 52,64 Z" fill="#30a8a0" ${st}/>
      <path d="M14,40 C10,20 20,6 32,6 C44,6 54,20 50,40 C46,46 18,46 14,40 Z" fill="#e05888" ${st}/>
      <ellipse cx="32" cy="27" rx="12" ry="13.5" fill="${skin}" ${st}/>
      <path d="M21,20 C24,13 40,13 43,20 C38,17 26,17 21,20 Z" fill="#3a2418"/>
      ${eyes(false)}<path d="M27,34 Q32,38.5 37,34" fill="none" stroke="#a83a4a" stroke-width="1.6"/>
      <ellipse cx="23" cy="32" rx="2.4" ry="1.4" fill="#ff8a9a" opacity=".5"/><ellipse cx="41" cy="32" rx="2.4" ry="1.4" fill="#ff8a9a" opacity=".5"/>
      <circle cx="46" cy="14" r="3.4" fill="#ff90b8" ${st}/><circle cx="46" cy="14" r="1.3" fill="#fff070"/>
      <rect x="22" y="48" width="20" height="13" rx="1.5" fill="#7a2a1a" ${st}/><path d="M32,48 v13" stroke="#e0b040" stroke-width="1.2"/><path d="M25,52 h4 M35,52 h4" stroke="#e0b040" stroke-width="1"/>
    </svg>`;
  }
  // haydeh
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <ellipse cx="32" cy="61" rx="20" ry="2.5" fill="rgba(0,0,0,.15)"/>
    <path d="M12,64 C12,48 20,42 32,42 C44,42 52,48 52,64 Z" fill="#f4f0e6" ${st}/><path d="M29,42 L32,56 L35,42" fill="#7a3a8a" ${st}/>
    <path d="M14,40 C10,20 20,6 32,6 C44,6 54,20 50,40 C46,46 18,46 14,40 Z" fill="#7a3a8a" ${st}/>
    <ellipse cx="32" cy="27" rx="12" ry="13.5" fill="${skin}" ${st}/>
    <path d="M21,20 C24,13 40,13 43,20 C38,17 26,17 21,20 Z" fill="#5a3a2a"/>
    ${eyes(false)}<circle cx="26" cy="27" r="4.6" fill="none" stroke="#2b1d16" stroke-width="1.4"/><circle cx="38" cy="27" r="4.6" fill="none" stroke="#2b1d16" stroke-width="1.4"/><path d="M30.6,27 h2.8" stroke="#2b1d16" stroke-width="1.4"/>
    <path d="M27,34 Q32,38 37,34" fill="none" stroke="#a83a4a" stroke-width="1.6"/>
    <rect x="40" y="48" width="9" height="12" rx="1" fill="#2858a8" ${st}/>
  </svg>`;
}
const PORTRAIT_URL = {};
function portraitUrl(id) { return PORTRAIT_URL[id] || (PORTRAIT_URL[id] = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(portraitSvg(id))); }
