// ===== LENGUAMON boot =====
function layout() {
  const sc = document.getElementById('screen');
  if (document.body.classList.contains('typing')) {
    // phone keyboard open: the screen takes the whole visible area above the keyboard
    const vv = window.visualViewport, W = vv ? vv.width : window.innerWidth, H = vv ? vv.height : window.innerHeight;
    document.documentElement.style.setProperty('--u', ((W - 6) / 160) + 'px');
    if (sc) sc.style.height = Math.max(200, H - 6) + 'px';
    window.scrollTo(0, 0);
    return;
  }
  if (sc) sc.style.height = '';
  const W = window.innerWidth, H = window.innerHeight, narrow = W < 600;
  const chromeW = narrow ? 22 : 64;              // shell + bezel + screen border, left and right
  const chromeH = narrow ? 44 : 140;             // bezel top bar + paddings (+ key hints on desktop)
  const controls = narrow ? Math.min(260, Math.max(200, H * 0.3)) : 150;
  let u = Math.min((W - chromeW) / 160, (H - chromeH - controls) / 144, 900 / 160);
  u = Math.max(1.6, Math.floor(u * 8) / 8);
  document.documentElement.style.setProperty('--u', u + 'px');
}
window.addEventListener('resize', layout);
window.addEventListener('orientationchange', () => setTimeout(layout, 200));
// keep the game screen visible when the phone keyboard opens
if (window.visualViewport) visualViewport.addEventListener('resize', () => { if (document.activeElement && document.activeElement.tagName === 'INPUT') window.scrollTo(0, 0); if (document.body.classList.contains('typing')) layout(); });
// on phones and tablets, typing hides the buttons and lets the question fill the screen
const touchDevice = () => window.matchMedia('(pointer: coarse)').matches;
let typingOff = null;
document.addEventListener('focusin', e => {
  if (!touchDevice() || !e.target || e.target.tagName !== 'INPUT') return;
  clearTimeout(typingOff);
  if (!document.body.classList.contains('typing')) { document.body.classList.add('typing'); layout(); setTimeout(layout, 350); }
});
document.addEventListener('focusout', () => {
  clearTimeout(typingOff);
  typingOff = setTimeout(() => { const a = document.activeElement; if (a && a.tagName === 'INPUT') return; document.body.classList.remove('typing'); layout(); }, 450);
});

(function boot() {
  applyOpts(); layout(); buildMaps(); placeTrainers(); bindTouch();
  requestAnimationFrame(loop);
  try { const raw = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null'); if (raw && raw.lang) useLanguage(raw.lang); } catch (e) { }
  titleScreen(); warmMaps();
})();
