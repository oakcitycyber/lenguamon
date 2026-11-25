// ===== LENGUAMON core: utils, words, options, save, audio, input =====
'use strict';
const $ = s => document.querySelector(s);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const rand = Math.random;
const pick = a => a[Math.floor(rand() * a.length)];
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// split "a / b (c / d)" on " / " outside parentheses
function splitAlts(s) {
  const out = []; let depth = 0, cur = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(') depth++; if (c === ')') depth--;
    if (depth === 0 && s.substr(i, 3) === ' / ') { out.push(cur.trim()); cur = ''; i += 2; continue; }
    cur += c;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}
function norm(s) {
  return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/\.\.\.|___/g, ' ').replace(/[’‘'`´?!.,;:"()؟]/g, '').replace(/-/g, ' ')
    .replace(/\s+/g, ' ').trim();
}
function acceptForms(s) {
  const set = new Set();
  for (const alt of splitAlts(s)) {
    set.add(norm(alt));
    const noParen = alt.replace(/\([^)]*\)/g, '').trim();
    if (noParen) set.add(norm(noParen));
  }
  set.delete('');
  return [...set];
}
function lev(a, b) {
  if (a === b) return 0; const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i), cur = new Array(n + 1);
  for (let i = 1; i <= m; i++) { cur[0] = i; for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); [prev, cur] = [cur, prev]; }
  return prev[n];
}
const tolFor = len => len <= 3 ? 0 : len <= 6 ? 1 : 1 + Math.floor(len / 7);

// ---- words ----
const TYPES = {
  GREET: { label: 'GREETING', pal: ['#9ff0e0', '#30b0a8', '#14605c'] },
  BASIC: { label: 'BASIC', pal: ['#f8e8a8', '#d8a838', '#7a5410'] },
  PRON: { label: 'PERSON', pal: ['#f8c8d8', '#d86890', '#782848'] },
  QUES: { label: 'QUESTION', pal: ['#c8d8ff', '#6878e0', '#28307a'] },
  CLASS: { label: 'CLASSROOM', pal: ['#e0f0a8', '#88b838', '#3a5a10'] },
  NUM: { label: 'NUMBER', pal: ['#ffe090', '#f0a020', '#8a4a00'] },
  FAM: { label: 'FAMILY', pal: ['#ffd0b0', '#e07848', '#7a3010'] },
  TIME: { label: 'TIME', pal: ['#d8c8ff', '#9068d8', '#40207a'] },
  SHOP: { label: 'BAZAAR', pal: ['#ffd8a0', '#c87830', '#6a3008'] },
  FOOD: { label: 'FOOD', pal: ['#ffb8b8', '#d83040', '#701018'] },
  FEEL: { label: 'FEELING', pal: ['#ffc8f0', '#c858b0', '#601858'] },
  COLOR: { label: 'COLOR', pal: ['#c8f8ff', '#38a8e0', '#104878'] },
  BODY: { label: 'BODY', pal: ['#f8d8c0', '#c89068', '#684020'] },
  WEATHER: { label: 'WEATHER', pal: ['#d0f0ff', '#58a8d8', '#205078'] },
  VERB: { label: 'ACTION', pal: ['#d8f8c8', '#50b860', '#185a28'] },
  PHRASE: { label: 'PHRASE', pal: ['#ffe0e8', '#e8607a', '#7a1830'] },
  NATURE: { label: 'NATURE', pal: ['#d0f0c0', '#5a9a48', '#22481c'] },
  TRAVEL: { label: 'TRAVEL', pal: ['#f0e0c8', '#b08458', '#5a3a1c'] },
  TALK: { label: 'CHAT', pal: ['#e0e8ff', '#5878c8', '#22306a'] },
  HOME: { label: 'HOME', pal: ['#fff0c8', '#d0a040', '#6a4a10'] },
  CITY: { label: 'CITY', pal: ['#e0e0e8', '#78809a', '#30364a'] },
  TAAROF: { label: 'TAAROF', pal: ['#ffe0d0', '#d06a50', '#6a2414'] },
  SMALLTALK: { label: 'SMALL TALK', pal: ['#9ff0e0', '#30b0a8', '#14605c'] },
  PHRASAL: { label: 'PHRASAL VERB', pal: ['#d8f8c8', '#50b860', '#185a28'] },
  WORK: { label: 'WORK', pal: ['#c8d8ff', '#6878e0', '#28307a'] },
  MONEY: { label: 'MONEY', pal: ['#e0f8c0', '#68a838', '#2a5010'] },
  FEELINGS: { label: 'FEELINGS', pal: ['#ffc8f0', '#c858b0', '#601858'] },
  OPINION: { label: 'OPINION', pal: ['#e0e8ff', '#5878c8', '#22306a'] },
  ROADTRIP: { label: 'ROAD TRIP', pal: ['#f0e0c8', '#b08458', '#5a3a1c'] },
  OUTDOORS: { label: 'OUTDOORS', pal: ['#d0f0c0', '#5a9a48', '#22481c'] },
  ERRANDS: { label: 'ERRANDS', pal: ['#fff0c8', '#d0a040', '#6a4a10'] },
  HEALTH: { label: 'HEALTH', pal: ['#ffd8d8', '#d86060', '#702020'] },
  NYC: { label: 'BIG CITY', pal: ['#fff4a0', '#d8b020', '#6a5000'] },
  IDIOM: { label: 'IDIOM', pal: ['#ffe0e8', '#e8607a', '#7a1830'] },
  SLANG: { label: 'SLANG', pal: ['#f0d8ff', '#9a58d8', '#40206a'] },
  HERITAGE: { label: 'HERITAGE', pal: ['#c8f4f0', '#30a8a0', '#105a56'] },
  CIVICS: { label: 'CIVICS', pal: ['#d8e0ff', '#4868c8', '#1a2a6a'] },
  FORMAL: { label: 'FORMAL', pal: ['#f4e8d8', '#a88458', '#4a3418'] },
};
const WORDS = [];
const WORD = {};
// Which language the player is learning: 'fa' = Persian (for English speakers), 'en' = English (for Persian speakers)
let LANG = 'fa';
const ROUTE_NAMES_BY = {
  fa: { 1: 'YAZD DESERT ROAD', 2: 'ISFAHAN', 3: 'SHIRAZ ROAD', 4: 'ZAGROS MOUNTAINS', 5: 'DASHT-E KAVIR', 6: 'TEHRAN', 7: 'KHORASAN' },
  en: { 1: 'ROUTE 66', 2: 'SAN FRANCISCO', 3: 'PACIFIC COAST HIGHWAY', 4: 'ROCKY MOUNTAINS', 5: 'PENNSYLVANIA FARMLAND', 6: 'NEW YORK CITY', 7: 'ROAD TO D.C.' },
};
const ROUTE_NAMES = { ...ROUTE_NAMES_BY.fa };
function parseWords() {
  WORDS.length = 0; for (const k of Object.keys(WORD)) delete WORD[k];
  const en = LANG === 'en';
  for (const line of (en ? RAW_WORDS_EN : RAW_WORDS).trim().split('\n')) {
    const p = line.split('|').map(s => s.trim()); if (p.length < (en ? 4 : 5)) continue;
    // English mode: you type the English; its meaning is shown in Persian
    const [tr, mean, fa, route, type] = en ? [p[0], p[1], p[0], p[2], p[3]] : p;
    const tr0 = splitAlts(tr)[0], en0 = splitAlts(mean)[0];
    const key = norm(tr0) + '|' + norm(en0);
    if (WORD[key]) continue;
    const w = {
      key, tr, en: mean, fa: en ? fa : fa.replace(/\+/g, '‌'), route: +route, type,
      tr0, en0, name: tr0.toUpperCase(), level: Math.max(2, tr0.replace(/[?!.'’,]/g, '').length),
      enForms: acceptForms(mean), trForms: acceptForms(tr), idx: WORDS.length,
    };
    WORDS.push(w); WORD[key] = w;
  }
}
parseWords();
const wordsOfRoute = r => WORDS.filter(w => w.route === r);

// ---- options (kept separately from the save) ----
const OPT_KEY = 'lenguamon_opts_v1';
const OPTS = Object.assign({ translit: true, music: true, sfx: true, speed: 1 }, (() => { try { return JSON.parse(localStorage.getItem(OPT_KEY)) || {}; } catch (e) { return {}; } })());
function saveOpts() { try { localStorage.setItem(OPT_KEY, JSON.stringify(OPTS)); } catch (e) { } applyOpts(); }
function applyOpts() { document.body.classList.toggle('notr', !OPTS.translit); }

// ---- save (kept in the browser; it never expires) ----
const SAVE_KEY = 'lenguamon_save_v1';
let S = null; // live game state
function newState(name) {
  return { v: 1, lang: LANG, name, map: LANG === 'en' ? 'ushouse' : 'house', x: 3, y: 3, dir: 'down', team: [], caught: {}, seen: {}, stats: {}, daftar: 0, flags: {}, created: Date.now(), lastPlayed: Date.now() };
}
function readSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY); if (!raw) return { save: null };
    const s = JSON.parse(raw);
    if (!s || !s.lastPlayed) return { save: null };
    s.team = s.team.filter(m => WORD[m.key]);
    return { save: s };
  } catch (e) { return { save: null }; }
}
function writeSave() { if (!S) return; S.lastPlayed = Date.now(); try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch (e) { } }
let lastTouch = 0;
function touchPlay() {
  if (!S) return;
  const now = Date.now();
  if (now - lastTouch > 30000) { lastTouch = now; S.lastPlayed = now; writeSave(); }
}

// ---- audio: tiny chiptune synth ----
const SND = (() => {
  let ac = null, master = null, musicGain = null, sfxGain = null, noiseBuf = null;
  function init() {
    if (ac) return; try {
      ac = new (window.AudioContext || window.webkitAudioContext)();
      master = ac.createGain(); master.gain.value = 0.5; master.connect(ac.destination);
      musicGain = ac.createGain(); musicGain.gain.value = 0.10; musicGain.connect(master);
      sfxGain = ac.createGain(); sfxGain.gain.value = 0.22; sfxGain.connect(master);
      noiseBuf = ac.createBuffer(1, ac.sampleRate * 0.5, ac.sampleRate);
      const d = noiseBuf.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    } catch (e) { ac = null; }
  }
  function tone(f, t0, dur, type = 'square', vol = 1, dest = sfxGain, slide = 0) {
    if (!ac) return; const o = ac.createOscillator(), g = ac.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t0); if (slide) o.frequency.linearRampToValueAtTime(f * slide, t0 + dur);
    g.gain.setValueAtTime(vol, t0); g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    o.connect(g); g.connect(dest); o.start(t0); o.stop(t0 + dur + 0.02);
  }
  function noiseTo(t0, dur, vol, dest) {
    if (!ac) return; const s = ac.createBufferSource(), g = ac.createGain(), hp = ac.createBiquadFilter(); s.buffer = noiseBuf; hp.type = 'highpass'; hp.frequency.value = 3000;
    g.gain.setValueAtTime(vol, t0); g.gain.exponentialRampToValueAtTime(0.001, t0 + dur); s.connect(hp); hp.connect(g); g.connect(dest); s.start(t0); s.stop(t0 + dur + .01);
  }
  function noise(t0, dur, vol = 1) {
    if (!ac) return; const s = ac.createBufferSource(), g = ac.createGain(); s.buffer = noiseBuf;
    g.gain.setValueAtTime(vol, t0); g.gain.exponentialRampToValueAtTime(0.001, t0 + dur); s.connect(g); g.connect(sfxGain); s.start(t0); s.stop(t0 + dur);
  }
  const N = n => 440 * Math.pow(2, (n - 69) / 12);
  const fx = {
    blip() { tone(1760, ac.currentTime, 0.025, 'square', 0.25); },
    select() { const t = ac.currentTime; tone(1046, t, 0.05); tone(1568, t + 0.05, 0.07); },
    cancel() { const t = ac.currentTime; tone(784, t, 0.05); tone(523, t + 0.05, 0.07); },
    bump() { tone(110, ac.currentTime, 0.08, 'square', 0.6); },
    door() { const t = ac.currentTime; noise(t, 0.08, 0.4); tone(220, t + 0.05, 0.1, 'triangle'); },
    encounter() { const t = ac.currentTime; [0, 3, 7, 12, 15, 19, 24].forEach((n, i) => tone(N(64 + n), t + i * 0.045, 0.08)); },
    hit() { const t = ac.currentTime; noise(t, 0.15, 0.9); tone(180, t, 0.12, 'square', 0.6, sfxGain, 0.4); },
    miss() { tone(600, ac.currentTime, 0.25, 'triangle', 0.6, sfxGain, 0.4); },
    good() { const t = ac.currentTime; [72, 76, 79, 84].forEach((n, i) => tone(N(n), t + i * 0.06, 0.12)); },
    bad() { const t = ac.currentTime; tone(N(60), t, 0.15); tone(N(55), t + 0.15, 0.3); },
    shake() { const t = ac.currentTime; tone(300, t, 0.06); tone(250, t + 0.08, 0.06); },
    caught() { const t = ac.currentTime; [[72, 0], [76, .12], [79, .24], [84, .36], [79, .5], [84, .62]].forEach(([n, d]) => tone(N(n), t + d, 0.16)); },
    levelup() { const t = ac.currentTime; [[67, 0], [71, .1], [74, .2], [79, .3], [74, .45], [79, .55]].forEach(([n, d]) => tone(N(n), t + d, 0.12)); },
    heal() { const t = ac.currentTime; [[72, 0], [72, .15], [72, .3], [68, .45], [70, .6], [72, .8]].forEach(([n, d]) => tone(N(n), t + d, 0.16, 'triangle', 0.9)); },
    faint() { tone(500, ac.currentTime, 0.6, 'square', 0.5, sfxGain, 0.2); },
    badge() { const t = ac.currentTime; [[67, 0], [72, .15], [76, .3], [79, .45], [84, .65], [88, .85]].forEach(([n, d]) => tone(N(n), t + d, 0.2)); },
  };
  // Music: original 8-bit loops in classical Persian modes (dastgah), with quarter-tones
  // (koron = x.5 semitones), a 6/8 dance rhythm, and tonbak-style drums (D = dum, t = tak).
  const _ = -99;
  const bars = (...b) => b.flat();
  const SONGS = {
    // Mahur (bright, like a major scale): Yazd and the title
    town: { bpm: 116, root: 60, wave: 'square',
      lead: bars([7, _, 9, 7, 5, 4], [5, _, 4, 2, _, _], [4, 5, 7, 9, _, 7], [5, 4, 2, 0, _, _], [12, _, 11, 9, _, 7], [9, 7, 5, 4, 2, 0], [2, 4, 5, 4, 2, -1], [0, _, _, _, _, _]),
      bass: bars([0, _, _, 7, _, _], [7, _, _, 2, _, _], [0, _, _, 7, _, _], [7, _, _, 0, _, _], [5, _, _, 0, _, _], [5, _, _, 0, _, _], [7, _, _, 2, _, _], [0, _, _, 7, _, _]),
      drums: 'D.tDt.D.tDt.D.tDt.D.tDt.D.tDt.D.tDt.D.tDt.D.tDtt' },
    // Esfahan mode: the roads
    route: { bpm: 132, root: 62, wave: 'square',
      lead: bars([0, 2, 3, 5, _, 3], [2, _, 0, -1, _, _], [3, 5, 7, 8, _, 7], [5, _, 3, 2, _, _], [7, 8, 11, 12, _, 11], [8, 7, 5, 3, _, 2], [3, 2, 0, -1, 2, 3], [0, _, _, _, _, _]),
      bass: bars([0, _, 7, 0, _, 7], [0, _, 7, -1, _, 7], [5, _, 12, 5, _, 12], [5, _, 12, 7, _, 14], [7, _, 14, 7, _, 14], [8, _, 15, 5, _, 12], [7, _, 14, 7, _, 14], [0, _, 7, 0, _, _]),
      drums: 'DttDttDttDttDttDttDttDttDttDttDttDttDttDttDttDtDt' },
    // Chahargah (with its quarter-tone 2nd and 6th): wild battles
    battle: { bpm: 162, root: 64, wave: 'square',
      lead: bars([12, 11, 8.5, 7, 8.5, 7], [5, 4, 1.5, 4, _, _], [0, 1.5, 4, 5, 7, 5], [4, 1.5, 0, 1.5, _, _], [7, 8.5, 11, 12, 11, 12], [8.5, 7, 5, 4, 5, 7], [8.5, 7, 5, 4, 1.5, 4], [0, _, 0, _, 0, _]),
      bass: bars([0, 12, 0, 12, 0, 12], [0, 12, 0, 12, 0, 12], [5, 17, 5, 17, 5, 17], [1.5, 13.5, 1.5, 13.5, 1.5, 13.5], [7, 19, 7, 19, 7, 19], [5, 17, 5, 17, 4, 16], [1.5, 13.5, 1.5, 13.5, 1.5, 13.5], [0, 12, 0, 12, 0, 12]),
      drums: 'DtDDttDtDDttDtDDttDtDDttDtDDttDtDDttDtDDttDtDtDt' },
    // Shur (the most Persian of the modes, quarter-tone 2nd): bosses
    boss: { bpm: 150, root: 62, wave: 'square',
      lead: bars([7, _, 8, 7, 5, 3], [1.5, 3, 1.5, 0, _, _], [0, 1.5, 3, 5, 3, 1.5], [3, _, 1.5, 0, _, _], [12, 10, 8, 7, 8, 10], [8, 7, 5, 3, 5, 7], [5, 3, 1.5, 3, 1.5, 0], [0, _, -2, 0, _, _]),
      bass: bars([0, 0, 12, 0, 0, 12], [0, 0, 12, 0, 0, 12], [0, 0, 12, 0, 0, 12], [-2, -2, 10, 0, 0, 12], [8, 8, 20, 8, 8, 20], [5, 5, 17, 3, 3, 15], [1.5, 1.5, 13.5, 1.5, 1.5, 13.5], [0, 0, 12, 0, 0, 12]),
      drums: 'DttDDtDttDDtDttDDtDttDDtDttDDtDttDDtDttDDtDtDtDD' },
    // ---- English mode: 8-bit Americana from public-domain folk tunes ----
    // "Home on the Range" (1870s), a waltz: Santa Fe and the towns
    us_town: { bpm: 112, root: 60, wave: 'square',
      lead: bars([-5, _, -5, _, 0, _], [2, _, 4, _, 0, -1], [-3, _, 5, _, 5, _], [5, _, _, _, 4, 5], [7, _, 0, _, 0, _], [0, _, -1, _, 0, _], [2, _, _, _, _, _], [_, _, _, _, -5, -5]),
      bass: bars([0, _, 7, _, 7, _], [0, _, 7, _, 7, _], [5, _, 9, _, 9, _], [5, _, 9, _, 9, _], [0, _, 7, _, 7, _], [0, _, 4, _, 4, _], [7, _, 11, _, 11, _], [7, _, 11, _, 11, _]),
      drums: 'D.t.t.D.t.t.D.t.t.D.t.t.D.t.t.D.t.t.D.t.t.D.t.t.' },
    // "Yankee Doodle" (1700s): the open road
    us_route: { bpm: 150, root: 62, wave: 'square',
      lead: bars([0, 0, 2, 4, 0, 4, 2, -5], [0, 0, 2, 4, 0, _, -1, _], [0, 0, 2, 4, 5, 4, 2, 0], [-1, -5, -3, -1, 0, _, 0, _], [-3, -1, -3, -5, -3, -1, 0, _], [-5, -3, -5, -7, -5, _, -3, _], [-3, -1, -3, -5, -3, -1, 0, -3], [-5, 0, -1, 2, 0, _, 0, _]),
      bass: bars([0, _, 7, _, 0, _, 7, _], [0, _, 7, _, -5, _, 2, _], [0, _, 7, _, 5, _, 0, _], [-5, _, 2, _, 0, _, 0, _], [5, _, 0, _, 5, _, 0, _], [-5, _, 2, _, -5, _, 2, _], [5, _, 0, _, 5, _, 0, _], [-5, _, 2, _, 0, _, 0, _]),
      drums: 'D.t.D.t.D.t.D.t.D.t.D.t.D.t.D.t.D.t.D.t.D.t.D.t.D.t.DDt.D.t.D.t.D.t.D.tt' },
    // an original rock-and-roll riff: wild battles
    us_battle: { bpm: 170, root: 64, wave: 'square',
      lead: bars([0, _, 3, 5, _, 3, 0, _], [7, _, 5, 3, _, 0, -2, _], [0, _, 3, 5, 7, 10, 7, _], [5, 3, 0, _, -2, 0, _, _], [12, _, 10, 7, _, 5, 7, _], [10, _, 7, 5, _, 3, 5, _], [7, 5, 3, 0, 3, 5, 7, 10], [12, _, 12, _, 12, _, _, _]),
      bass: bars([0, 0, 12, 0, 0, 12, 0, 12], [0, 0, 12, 0, 0, 12, -2, 10], [5, 5, 17, 5, 5, 17, 5, 17], [7, 7, 19, 7, -2, 10, -2, 10], [0, 0, 12, 0, 0, 12, 0, 12], [5, 5, 17, 5, 5, 17, 3, 15], [7, 7, 19, 7, 7, 19, 7, 19], [0, 0, 12, 0, 0, _, 0, _]),
      drums: 'DtDtDtDtDtDtDDtDDtDtDtDtDtDtDDtDDtDtDtDtDtDtDDtDDtDtDtDtDtDtDDDD' },
    // "When Johnny Comes Marching Home" (1863), in a minor key: bosses
    us_boss: { bpm: 150, root: 57, wave: 'square',
      lead: bars([-5, _, 0, _, 0, 0], [0, _, 2, 3, _, 2], [0, _, -2, -5, _, _], [3, _, 3, 3, _, 2], [0, _, 2, 3, _, 5], [7, _, _, 7, _, _], [5, _, 3, 2, _, 0], [-2, _, 0, _, _, _]),
      bass: bars([0, 0, 12, 0, 0, 12], [0, 0, 12, 0, 0, 12], [-2, -2, 10, -2, -2, 10], [3, 3, 15, 3, 3, 15], [0, 0, 12, 0, 0, 12], [-4, -4, 8, -4, -4, 8], [-5, -5, 7, -5, -5, 7], [0, 0, 12, 0, 0, 12]),
      drums: 'DttDDtDttDDtDttDDtDttDDtDttDDtDttDDtDttDDtDtDtDD' },
    // "Shenandoah" (1800s), slow and wide: Seattle and the ending
    us_end: { bpm: 84, root: 60, wave: 'triangle',
      lead: bars([-5, _, 0, 0, _, _, 0, 2], [4, 5, 9, _, 7, _, _, _], [12, _, 10, 9, 7, _, 9, 7], [5, _, 7, _, 9, _, _, _], [5, 7, 9, _, 9, _, 7, 9], [7, 5, 2, _, 0, _, _, _], [2, _, 5, _, 4, _, 0, _], [5, _, _, _, _, _, _, _]),
      bass: bars([5, _, _, _, 12, _, _, _], [5, _, _, _, 0, _, _, _], [10, _, _, _, 5, _, _, _], [5, _, _, _, 0, _, _, _], [2, _, _, _, 9, _, _, _], [10, _, _, _, 5, _, _, _], [-2, _, _, _, 0, _, _, _], [5, _, _, _, _, _, _, _]),
      drums: 'D.......D...t...D.......D...t...D.......D...t...D.......D...t...' },
    // Homayoun (stately, used for poetry): Shiraz and the ending
    end: { bpm: 96, root: 60, wave: 'triangle',
      lead: bars([7, _, 8, 10, _, 8], [7, _, 5, 4, _, _], [4, 5, 7, 8, 7, 5], [4, _, 1.5, 0, _, _], [0, 1.5, 4, 5, _, 7], [8, _, 7, 5, 4, 5], [4, _, 1.5, 1.5, 0, _], [0, _, _, _, _, _]),
      bass: bars([0, _, _, 7, _, _], [5, _, _, 0, _, _], [8, _, _, 5, _, _], [1.5, _, _, 0, _, _], [0, _, _, 7, _, _], [5, _, _, 8, _, _], [1.5, _, _, 7, _, _], [0, _, _, _, _, _]),
      drums: 'D..t..D..t..D..t..D..t..D..t..D..t..D..t..D.....' },
  };
  let cur = null, step = 0, nextT = 0, timer = null;
  function play(name) {
    if (cur === name) return; cur = name; step = 0;
    if (timer) clearInterval(timer); timer = null;
    if (!ac || !name || !OPTS.music) return;
    nextT = ac.currentTime + 0.05;
    timer = setInterval(() => {
      const song = SONGS[cur]; if (!song || !OPTS.music) return;
      const dt = 60 / song.bpm / 2;
      while (nextT < ac.currentTime + 0.2) {
        const i = step % song.lead.length;
        const ln = song.lead[i];
        if (ln > -50) {
          // a held note gets a santur-like double strike
          const held = song.lead[(i + 1) % song.lead.length] <= -50;
          tone(N(song.root + 12 + ln), nextT, dt * (held ? .9 : 1.4), song.wave, 0.5, musicGain);
          if (held) tone(N(song.root + 12 + ln), nextT + dt * .5, dt * 1.3, song.wave, 0.32, musicGain);
        }
        if (song.bass[i] > -50) tone(N(song.root - 12 + song.bass[i]), nextT, dt * 0.9, 'triangle', 0.9, musicGain);
        const d = song.drums[i % song.drums.length];
        if (d === 'D') tone(120, nextT, 0.14, 'sine', 1.1, musicGain, 0.45);
        if (d === 't') noiseTo(nextT, 0.035, 0.45, musicGain);
        step++; nextT += dt;
      }
    }, 60);
  }
  return {
    init() { init(); if (ac && ac.state === 'suspended') ac.resume(); if (ac && cur && !timer && OPTS.music) { const c = cur; cur = null; play(c); } },
    fx(n) { if (!ac || !OPTS.sfx) return; try { fx[n] && fx[n](); } catch (e) { } },
    music(n) { play(n && LANG === 'en' && SONGS['us_' + n] ? 'us_' + n : n); },
    refresh() { const c = cur; cur = null; play(c); },
  };
})();

// ---- input: one handler at a time (stack) ----
const held = { up: false, down: false, left: false, right: false };
const handlers = [];
const pushH = h => handlers.push(h);
const popH = h => { const i = handlers.lastIndexOf(h); if (i >= 0) handlers.splice(i, 1); };
function press(btn) { SND.init(); touchPlay(); const h = handlers[handlers.length - 1]; if (h) h(btn); }
const KEYMAP = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right', w: 'up', s: 'down', a: 'left', d: 'right', W: 'up', S: 'down', A: 'left', D: 'right', z: 'a', Z: 'a', ' ': 'a', Enter: 'a', j: 'a', x: 'b', X: 'b', Escape: 'b', Backspace: 'b', k: 'b', m: 'start', M: 'start', Shift: 'start', Tab: 'start' };
window.addEventListener('keydown', e => {
  const typing = document.activeElement && document.activeElement.tagName === 'INPUT';
  if (typing) { SND.init(); touchPlay(); return; }
  const b = KEYMAP[e.key]; if (!b) return;
  e.preventDefault();
  if (b in held) { if (!held[b]) { held[b] = true; press(b); } else return; }
  else if (!e.repeat) press(b);
});
window.addEventListener('keyup', e => { const b = KEYMAP[e.key]; if (b in held) held[b] = false; });
window.addEventListener('blur', () => { for (const k in held) held[k] = false; });
function bindTouch() {
  document.querySelectorAll('[data-btn]').forEach(el => {
    const b = el.dataset.btn;
    const down = e => { e.preventDefault(); el.classList.add('on'); if (b in held) held[b] = true; press(b); };
    const up = e => { el.classList.remove('on'); if (b in held) held[b] = false; };
    el.addEventListener('pointerdown', down); el.addEventListener('pointerup', up); el.addEventListener('pointerleave', up); el.addEventListener('pointercancel', up);
  });
}
