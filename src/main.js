// ===== LENGUAMON boot =====
function layout() {
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
if (window.visualViewport) visualViewport.addEventListener('resize', () => { if (document.activeElement && document.activeElement.tagName === 'INPUT') window.scrollTo(0, 0); });

(function boot() {
  applyOpts(); layout(); buildMaps(); bindTouch();
  requestAnimationFrame(loop);
  const { expired } = readSave();
  titleScreen(expired);
})();
