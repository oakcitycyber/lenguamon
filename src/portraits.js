// ===== LENGUAMON portraits: invented caricatures for bosses and the professor =====
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
      <path d="M17,44 C12,30 14,10 32,9 C50,10 52,30 47,44 C42,47 22,47 17,44 Z" fill="#2a1810" ${st}/>
      <ellipse cx="32" cy="27" rx="12" ry="13.5" fill="${skin}" ${st}/>
      <path d="M20,24 C19,12 45,12 44,24 C40,17 34,16 32,19 C30,16 24,17 20,24 Z" fill="#2a1810" ${st}/>
      ${eyes(false)}<path d="M27,34 Q32,38.5 37,34" fill="none" stroke="#a83a4a" stroke-width="1.6"/>
      <ellipse cx="23" cy="32" rx="2.4" ry="1.4" fill="#ff8a9a" opacity=".5"/><ellipse cx="41" cy="32" rx="2.4" ry="1.4" fill="#ff8a9a" opacity=".5"/>
      <circle cx="46" cy="14" r="3.4" fill="#ff90b8" ${st}/><circle cx="46" cy="14" r="1.3" fill="#fff070"/>
      <rect x="22" y="48" width="20" height="13" rx="1.5" fill="#7a2a1a" ${st}/><path d="M32,48 v13" stroke="#e0b040" stroke-width="1.2"/><path d="M25,52 h4 M35,52 h4" stroke="#e0b040" stroke-width="1"/>
    </svg>`;
  }
  if (id === 'censor') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs><radialGradient id="g" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ff5a7a"/><stop offset="1" stop-color="#ff5a7a" stop-opacity="0"/></radialGradient></defs>
      <ellipse cx="32" cy="62" rx="24" ry="2.5" fill="rgba(0,0,0,.25)"/>
      <path d="M8,64 C8,46 18,40 32,40 C46,40 56,46 56,64 Z" fill="#2a1a22" ${st}/>
      <path d="M22,40 L18,26 L26,36 Z M42,40 L46,26 L38,36 Z" fill="#5a1828" ${st}/>
      <path d="M26,41 L32,64 L38,41" fill="#5a1828" stroke="#e0b040" stroke-width="1.2"/>
      <path d="M10,48 C10,42 18,40 22,44 L20,52 C16,52 12,52 10,48 Z" fill="#4a4a58" ${st}/><path d="M54,48 C54,42 46,40 42,44 L44,52 C48,52 52,52 54,48 Z" fill="#4a4a58" ${st}/>
      <circle cx="16" cy="47" r="2.2" fill="#e0b040"/><circle cx="48" cy="47" r="2.2" fill="#e0b040"/>
      <ellipse cx="32" cy="26" rx="12" ry="14" fill="#d8a888" ${st}/>
      <path d="M21,20 C22,10 42,10 43,20 C40,15 24,15 21,20 Z" fill="#8a8a98" ${st}/><path d="M24,14 h16" stroke="#5a5a68" stroke-width="1"/>
      <path d="M22,23 L30,25 M42,23 L34,25" stroke="#1a1210" stroke-width="2.2" stroke-linecap="round"/>
      <ellipse cx="26" cy="27" rx="2" ry="2.2" fill="#1e1410"/>
      <circle cx="38" cy="27" r="4" fill="#3a3a48" ${st}/><circle cx="38" cy="27" r="6" fill="url(#g)"/><circle cx="38" cy="27" r="2" fill="#ff2a4a"/>
      <path d="M29,17 L31,23 L29,27" fill="none" stroke="#a8505a" stroke-width="1.1"/>
      <path d="M26,33 C29,31 35,31 38,33 C36,34 34,33.5 32,34 C30,33.5 28,34 26,33 Z" fill="#6a6a70"/>
      <path d="M28,36 Q32,34.5 36,36" fill="none" stroke="#7a3a3a" stroke-width="1.4"/>
      <circle cx="9" cy="38" r="5.2" fill="#1a1a22" ${st}/><circle cx="9" cy="38" r="8" fill="url(#g)" opacity=".7"/><circle cx="7.5" cy="36.5" r="1.3" fill="#fff"/>
      <path d="M12,42 L16,46" stroke="#4a4a58" stroke-width="3"/>
      <g transform="translate(40 44)"><ellipse cx="12" cy="14" rx="11" ry="8" fill="#2a2628" ${st}/><ellipse cx="12" cy="8" rx="8" ry="7" fill="#3a3436" ${st}/>
        <circle cx="6" cy="3" r="3" fill="#3a3436" ${st}/><circle cx="18" cy="3" r="3" fill="#3a3436" ${st}/>
        <path d="M7,8 L10,9 M17,8 L14,9" stroke="#fff" stroke-width="1.2"/><path d="M9,12 Q12,16 15,12 Z" fill="#a82a3a" ${st}/><rect x="10.5" y="12" width="1.4" height="2" fill="#fff"/><rect x="12.2" y="12" width="1.4" height="2" fill="#fff"/>
        <path d="M4,10 L-2,8 M4,12 L-2,13 M20,10 L26,8 M20,12 L26,13" stroke="#ccc" stroke-width=".6"/></g>
    </svg>`;
  }
  // haydeh
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <ellipse cx="32" cy="61" rx="20" ry="2.5" fill="rgba(0,0,0,.15)"/>
    <path d="M12,64 C12,48 20,42 32,42 C44,42 52,48 52,64 Z" fill="#f4f0e6" ${st}/><path d="M29,42 L32,56 L35,42" fill="#2858a8" ${st}/>
    <circle cx="32" cy="9" r="6" fill="#6a4030" ${st}/>
    <ellipse cx="32" cy="27" rx="12" ry="13.5" fill="${skin}" ${st}/>
    <path d="M20,26 C18,12 46,12 44,26 C42,18 36,16 32,18 C28,16 22,18 20,26 Z" fill="#6a4030" ${st}/>
    ${eyes(false)}<circle cx="26" cy="27" r="4.6" fill="none" stroke="#2b1d16" stroke-width="1.4"/><circle cx="38" cy="27" r="4.6" fill="none" stroke="#2b1d16" stroke-width="1.4"/><path d="M30.6,27 h2.8" stroke="#2b1d16" stroke-width="1.4"/>
    <path d="M27,34 Q32,38 37,34" fill="none" stroke="#a83a4a" stroke-width="1.6"/>
    <rect x="40" y="48" width="9" height="12" rx="1" fill="#2858a8" ${st}/>
  </svg>`;
}
const PORTRAIT_URL = {};
function portraitUrl(id) { return PORTRAIT_URL[id] || (PORTRAIT_URL[id] = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(portraitSvg(id))); }
