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
  if (id === 'anchor') {
    // an invented state-TV news anchor: frozen smile, helmet hair, earpiece, desk and teleprompter
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <rect x="0" y="0" width="64" height="44" fill="#1e3a6a"/><circle cx="50" cy="14" r="11" fill="none" stroke="#5a86c8" stroke-width="1"/><path d="M39,14 h22 M50,3 v22 M42,8 q8,6 16,0 M42,20 q8,-6 16,0" stroke="#5a86c8" stroke-width=".8" fill="none"/>
      <rect x="2" y="4" width="18" height="7" rx="1" fill="#c82838"/><text x="11" y="9.4" font-family="Verdana" font-weight="700" font-size="4" fill="#fff" text-anchor="middle">LIVE</text>
      <path d="M12,64 C12,46 20,40 32,40 C44,40 52,46 52,64 Z" fill="#2a2f45" ${st}/>
      <path d="M27,40 L32,52 L37,40 Z" fill="#f4f2ec" ${st}/><path d="M31,42 L33,42 L34,54 L32,57 L30,54 Z" fill="#a8283a" stroke="#2b1d16" stroke-width=".8"/>
      <ellipse cx="32" cy="26" rx="12.5" ry="14.5" fill="${skin}" ${st}/>
      <path d="M19,24 C17,10 47,8 45,24 C44,18 40,14 33,14 C27,15 21,17 19,24 Z" fill="#1a1612" ${st}/><path d="M24,15 C30,11 38,11 42,15" stroke="#5a5a6a" stroke-width="1" fill="none"/>
      <ellipse cx="26.5" cy="26" rx="2" ry="2.4" fill="#1e1410"/><ellipse cx="37.5" cy="26" rx="2" ry="2.4" fill="#1e1410"/><circle cx="27.2" cy="25.2" r=".7" fill="#fff"/><circle cx="38.2" cy="25.2" r=".7" fill="#fff"/>
      <path d="M22.5,21.5 Q26.5,19.8 30,21.5 M34,21.5 Q37.5,19.8 41.5,21.5" stroke="#1a1612" stroke-width="1.4" fill="none"/>
      <path d="M24,32 Q32,39 40,32 Q32,35 24,32 Z" fill="#fff" ${st}/><path d="M26,33.6 h12" stroke="#c8c0b8" stroke-width=".5"/>
      <path d="M20,27 C17,27 17,32 20,32" fill="${skin}" ${st}/><path d="M18.4,28.6 C16,31 16,36 19,38" stroke="#d8d8d8" stroke-width="1.2" fill="none"/><circle cx="18.6" cy="28.8" r="1.3" fill="#d8d8d8" stroke="#2b1d16" stroke-width=".6"/>
      <rect x="0" y="50" width="64" height="14" fill="#c8ccd8" ${st}/><rect x="0" y="50" width="64" height="3" fill="#8890a8"/>
      <rect x="22" y="55" width="20" height="6" rx="1" fill="#1e3a6a"/><text x="32" y="59.6" font-family="Verdana" font-weight="700" font-size="3.6" fill="#ffd860" text-anchor="middle">STATE TV</text>
      <path d="M46,50 L48,40 L50,40 L50,50" fill="#3a3a44" stroke="#2b1d16" stroke-width=".8"/><ellipse cx="49" cy="39.4" rx="2.2" ry="1.6" fill="#2a2a30"/>
      <rect x="4" y="56" width="12" height="5" rx="1" fill="#f4f2ec" stroke="#2b1d16" stroke-width=".7"/><path d="M6,58 h8 M6,59.6 h6" stroke="#8a8a96" stroke-width=".6"/>
    </svg>`;
  }
  if (id === 'trooper') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <ellipse cx="32" cy="61" rx="20" ry="2.5" fill="rgba(0,0,0,.15)"/>
      <path d="M11,64 C11,47 20,41 32,41 C44,41 53,47 53,64 Z" fill="#8a7a5a" ${st}/><path d="M27,41 L32,49 L37,41" fill="#e8e0c8" ${st}/><path d="M31,42 L33,42 L33.6,52 L32,55 L30.4,52 Z" fill="#2a2a30"/>
      <path d="M40,48 L46,47 L47,53 L43,56 L39,53 Z" fill="#e8c040" ${st}/><circle cx="43" cy="51" r="1.4" fill="#a87818"/>
      <ellipse cx="32" cy="28" rx="13" ry="14.5" fill="${skin}" ${st}/>
      <rect x="20.5" y="24" width="10" height="6" rx="2.6" fill="#2a2a30" ${st}/><rect x="33.5" y="24" width="10" height="6" rx="2.6" fill="#2a2a30" ${st}/><path d="M30.5,26 h3" stroke="#2b1d16" stroke-width="1.2"/><path d="M22,25.5 l3,-1" stroke="#8ab0d0" stroke-width="1"/>
      <path d="M25,35 C28,32.6 36,32.6 39,35 C36,36.6 28,36.6 25,35 Z" fill="#5a3a1a" ${st}/><path d="M29,38.6 h6" stroke="#8a4a3a" stroke-width="1.2"/>
      <path d="M8,20 C8,17 20,16 32,16 C44,16 56,17 56,20 C56,22 44,22 32,22 C20,22 8,22 8,20 Z" fill="#8a6a3a" ${st}/>
      <path d="M20,18 C20,4 44,4 44,18 C40,15 24,15 20,18 Z" fill="#a8875a" ${st}/><path d="M26,8 L32,13 L38,8" fill="none" stroke="#6a4a2a" stroke-width="1.2"/>
    </svg>`;
  }
  if (id === 'ceo') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <ellipse cx="32" cy="61" rx="20" ry="2.5" fill="rgba(0,0,0,.15)"/>
      <path d="M10,64 C10,46 19,40 32,40 C45,40 54,46 54,64 Z" fill="#4a4e58" ${st}/><path d="M24,40 C24,46 40,46 40,40" fill="#3a3e48" ${st}/><path d="M27,48 L27,58 M37,48 L37,58" stroke="#d8dce4" stroke-width="1.2"/>
      <rect x="44" y="44" width="9" height="13" rx="1.6" fill="#f4f0e8" ${st}/><rect x="44" y="47" width="9" height="4" fill="#5aa86a"/><path d="M45,44 L46,41 L51,41 L52,44" fill="#3a3a3a" ${st}/>
      <ellipse cx="32" cy="27" rx="12.5" ry="14" fill="#f0c49c" ${st}/>
      <path d="M19.6,24 C18,10 30,6 40,10 C46,13 46,20 44.4,24 C42,17 34,14 26,17 C23,18 21,20 19.6,24 Z" fill="#c89a5a" ${st}/><path d="M26,12 C32,6 42,8 44,14" fill="#d8aa6a" ${st}/>
      ${'<ellipse cx="26.5" cy="27" rx="2" ry="2.4" fill="#1e1410"/><ellipse cx="37.5" cy="27" rx="2" ry="2.4" fill="#1e1410"/>'}
      <path d="M22.5,22.5 Q26.5,20.5 30,22 M34,22 Q37.5,20.5 41.5,22.5" stroke="#8a6a3a" stroke-width="1.3" fill="none"/>
      <path d="M26,34 Q32,39 38,34" stroke="#8a3a3a" stroke-width="1.3" fill="none"/>
      <ellipse cx="19.4" cy="29" rx="1.6" ry="2.4" fill="#f4f4f0" ${st}/><ellipse cx="44.6" cy="29" rx="1.6" ry="2.4" fill="#f4f4f0" ${st}/>
    </svg>`;
  }
  if (id === 'autocorrect') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs><radialGradient id="ag" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ff4a6a" stop-opacity=".7"/><stop offset="1" stop-color="#ff4a6a" stop-opacity="0"/></radialGradient></defs>
      <ellipse cx="32" cy="61" rx="20" ry="2.5" fill="rgba(0,0,0,.2)"/>
      <path d="M12,64 C12,48 20,42 32,42 C44,42 52,48 52,64 Z" fill="#3a3e4a" ${st}/>
      ${[0, 1, 2, 3].map(r => [0, 1, 2, 3, 4, 5].map(c => `<rect x="${16 + c * 5.4}" y="${48 + r * 3.8}" width="4.4" height="2.8" rx=".6" fill="#5a5e6a"/>`).join('')).join('')}
      <rect x="16" y="8" width="32" height="34" rx="5" fill="#2a2e38" ${st}/><rect x="19" y="12" width="26" height="24" rx="2" fill="#0c1018"/>
      <path d="M22,20 q2,-2 4,0 t4,0 M34,20 q2,-2 4,0 t4,0" stroke="#ff3a5a" stroke-width="1.4" fill="none"/>
      <circle cx="27" cy="22" r="6" fill="url(#ag)"/><circle cx="38" cy="22" r="6" fill="url(#ag)"/>
      <text x="32" y="32" font-family="Verdana" font-weight="700" font-size="5" fill="#3ae0a0" text-anchor="middle">DUCK</text><path d="M22,33.4 q1.5,1.4 3,0 t3,0 t3,0 t3,0 t3,0 t3,0 t3,0" stroke="#ff3a5a" stroke-width=".9" fill="none"/>
      <rect x="40.5" y="28" width="1.2" height="5" fill="#f4f4f0"/>
      <path d="M32,8 L32,2" stroke="#8a8e96" stroke-width="1.6"/><circle cx="32" cy="2" r="1.8" fill="#ff3a5a"/>
    </svg>`;
  }
  if (id === 'cabbie') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <ellipse cx="32" cy="61" rx="20" ry="2.5" fill="rgba(0,0,0,.15)"/>
      <path d="M10,64 C10,47 19,41 32,41 C45,41 54,47 54,64 Z" fill="#2a2a30" ${st}/><path d="M18,50 h28" stroke="#f0c030" stroke-width="3"/>
      ${[0, 1, 2, 3, 4, 5, 6].map(i => `<rect x="${18 + i * 4}" y="${(i % 2) ? 48.5 : 50}" width="2" height="1.5" fill="#1a1a1a"/>`).join('')}
      <ellipse cx="32" cy="28" rx="13" ry="14.5" fill="#e0b088" ${st}/>
      <path d="M19,30 C19,44 45,44 45,30 C42,36 38,38 32,38 C26,38 22,36 19,30 Z" fill="#5a5a5a" opacity=".55"/>
      <ellipse cx="26.5" cy="27" rx="2" ry="2.4" fill="#1e1410"/><ellipse cx="37.5" cy="27" rx="2" ry="2.4" fill="#1e1410"/>
      <path d="M22,22 L30,23.4 M42,22 L34,23.4" stroke="#2a2a2a" stroke-width="2"/>
      <path d="M25,34 C28,31.6 36,31.6 39,34 C36,36 28,36 25,34 Z" fill="#3a3a3a" ${st}/><path d="M29,38 Q32,36.6 35,38" stroke="#8a4a3a" stroke-width="1.2" fill="none"/>
      <path d="M17,20 C17,11 47,11 47,20 Z" fill="#3a3a3a" ${st}/><path d="M17,20 C22,22 40,22 52,19 L50,17 C40,19 24,18 17,17 Z" fill="#2a2a2a" ${st}/>
      <rect x="48" y="4" width="14" height="7" rx="2" fill="#f0c030" ${st}/><text x="55" y="9.4" font-family="Verdana" font-weight="700" font-size="4.2" fill="#2a2a2a" text-anchor="middle">TAXI</text>
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

// ---- tea scene: Agha Reza serving you chai, painted in a soft, warm, hand-drawn style ----
function teaSceneSvg(L, vest = '#6a4a3a') {
  const ink = '#5a3a2a', lw = 'stroke-width=".7" stroke-linejoin="round" stroke-linecap="round"';
  const s = `stroke="${ink}" ${lw}`;
  const hair = L.hair, long = L.hairStyle === 'long', skin = '#f4cfa8';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100">
  <defs>
    <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6e7c8"/><stop offset="1" stop-color="#e7c894"/></linearGradient>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fd0f0"/><stop offset=".7" stop-color="#d8f0f4"/><stop offset="1" stop-color="#fff4d0"/></linearGradient>
    <linearGradient id="beam" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff8dc" stop-opacity=".75"/><stop offset="1" stop-color="#fff8dc" stop-opacity="0"/></linearGradient>
    <radialGradient id="warm" cx="55%" cy="45%" r="70%"><stop offset="0" stop-color="#fff2c8" stop-opacity=".35"/><stop offset="1" stop-color="#7a3a1a" stop-opacity=".25"/></radialGradient>
    <radialGradient id="tea" cx="50%" cy="40%" r="60%"><stop offset="0" stop-color="#f0702a"/><stop offset="1" stop-color="#8a1e10"/></radialGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffd890" stop-opacity=".8"/><stop offset="1" stop-color="#ffd890" stop-opacity="0"/></radialGradient>
    <linearGradient id="brass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#b8821e"/><stop offset=".45" stop-color="#f8d878"/><stop offset="1" stop-color="#a8721a"/></linearGradient>
    <filter id="soft"><feGaussianBlur stdDeviation="1.4"/></filter>
    <filter id="paper"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="4"/><feColorMatrix values="0 0 0 0 .45  0 0 0 0 .32  0 0 0 0 .2  0 0 0 .09 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>
  </defs>
  <rect width="160" height="100" fill="url(#wall)"/>
  <!-- arched window with garden and sky -->
  <path d="M48,52 L48,20 C48,6 76,6 76,20 L76,52 Z" fill="url(#sky)" stroke="#8a5a30" stroke-width="2.2"/>
  <path d="M50,52 C52,44 58,42 62,46 C64,40 72,40 74,48 L74,52 Z" fill="#7cbf6a" opacity=".9"/><path d="M53,52 C55,47 59,46 61,49 L61,52 Z" fill="#5aa04e"/>
  <ellipse cx="57" cy="18" rx="5" ry="2" fill="#ffffff" opacity=".9"/><ellipse cx="68" cy="24" rx="4" ry="1.6" fill="#ffffff" opacity=".8"/>
  <path d="M62,8 L62,52 M48,30 L76,30" stroke="#8a5a30" stroke-width="1.4"/>
  <polygon points="52,24 74,24 128,100 70,100" fill="url(#beam)" filter="url(#soft)"/>
  <!-- tile frieze -->
  <rect y="56" width="160" height="5" fill="#2f6fb0"/><rect y="56" width="160" height=".8" fill="#e8c060"/><rect y="60.2" width="160" height=".8" fill="#e8c060"/>
  ${Array.from({ length: 14 }, (_, i) => `<path d="M${6 + i * 12},57 l2,1.5 l-2,1.5 l-2,-1.5 Z" fill="#f6efd8"/><circle cx="${6 + i * 12}" cy="58.5" r=".6" fill="#3ab0a8"/>`).join('')}
  <!-- hanging plant -->
  <path d="M100,0 L100,12" stroke="#8a5a30" stroke-width=".6"/><path d="M95,12 L105,12 L103.5,18 L96.5,18 Z" fill="#c06a3a" ${s}/>
  ${[[-6, 22], [-3, 26], [0, 21], [3, 25], [6, 23], [-8, 17], [8, 18]].map(([dx, dy]) => `<path d="M100,13 Q${100 + dx * .6},${(13 + dy) / 2} ${100 + dx},${dy}" stroke="#4f9a40" stroke-width="1" fill="none"/><ellipse cx="${100 + dx}" cy="${dy}" rx="1.6" ry=".9" fill="#5fb04c" transform="rotate(${dx * 8} ${100 + dx} ${dy})"/>`).join('')}
  <!-- samovar on a little table -->
  <rect x="130" y="62" width="22" height="3" rx="1" fill="#8a5a30" ${s}/><path d="M133,65 L134,80 M149,65 L148,80" stroke="#6a4020" stroke-width="1.6"/>
  <path d="M134,62 C131,50 133,42 141,42 C149,42 151,50 148,62 Z" fill="url(#brass)" ${s}/><rect x="137.5" y="37" width="7" height="5" rx="1" fill="#c8922a" ${s}/>
  <rect x="138" y="31" width="6" height="6" rx="2.4" fill="#f4ecdc" ${s}/><path d="M141,31 L141,29" stroke="#8a5a30" stroke-width="1"/>
  <path d="M148,55 L153,56 L153,57.5 L148,57" fill="#c8922a" ${s}/><path d="M136,46 C135,50 135,55 136,58" stroke="#fff6c8" stroke-width="1.4" fill="none" opacity=".8"/>
  ${[0, 1, 2].map(i => `<path d="M${139 + i * 2},28 C${137 + i * 2},24 ${142 + i * 2},22 ${140 + i * 2},17" stroke="#ffffff" stroke-width="1.1" fill="none" opacity="${.65 - i * .15}" filter="url(#soft)"/>`).join('')}
  <!-- takht (daybed) with kilim and cushions -->
  <rect x="0" y="70" width="70" height="8" rx="1.5" fill="#9a6232" ${s}/><path d="M4,78 L4,96 M64,78 L64,96" stroke="#7a4a22" stroke-width="2.4"/>
  <path d="M0,62 L70,62 L72,72 L0,72 Z" fill="#b8323a" ${s}/>
  ${Array.from({ length: 6 }, (_, i) => `<path d="M${6 + i * 11},64 l3.5,3 l-3.5,3 l-3.5,-3 Z" fill="#f0c060"/><circle cx="${6 + i * 11}" cy="67" r=".9" fill="#2a3a7a"/>`).join('')}
  <rect x="-2" y="50" width="16" height="13" rx="5" fill="#e09a3a" ${s}/><path d="M2,52 L2,61 M6,51 L6,62 M10,52 L10,61" stroke="#b8323a" stroke-width="1"/>
  <!-- you, sitting on the takht -->
  <g transform="translate(22 30)">
    ${long ? `<path d="M3,10 C1,22 3,30 6,33 L18,33 C19,26 19,18 17,10 Z" fill="${hair}" ${s}/>` : ''}
    <path d="M4,32 C3,26 6,22 12,22 C18,22 21,26 20,32 L20,34 L4,34 Z" fill="${L.top}" ${s}/>
    ${L.tee ? `<path d="M10,22.4 L14,22.4 L13.3,34 L10.7,34 Z" fill="${L.tee}" stroke="${ink}" stroke-width=".5"/><path d="M8,22.6 L10.4,22.4 L10.6,26 Z M16,22.6 L13.6,22.4 L13.4,26 Z" fill="${L.top2}"/>` : ''}
    <path d="M6,33 C8,38 18,38 26,36 L30,37 L30,40 L24,41 C16,42 7,42 5,37 Z" fill="${L.legs}" ${s}/>
    <path d="M29,36.5 C31,36 33,37 33,39 L29.5,40 Z" fill="#3a2a22" ${s}/>
    <path d="M17,26 C22,27 26,26 30,23" stroke="${L.top}" stroke-width="3.6" stroke-linecap="round" fill="none"/><path d="M17,26 C22,27 26,26 30,23" stroke="${ink}" stroke-width="4.4" stroke-linecap="round" fill="none" opacity=".25"/>
    <ellipse cx="31" cy="22.6" rx="1.9" ry="1.6" fill="${skin}" ${s}/>
    <ellipse cx="12" cy="13" rx="7.4" ry="8" fill="${skin}" ${s}/>
    <path d="M4.6,13 C4,4 14,1.5 19,7 C20,9 20,11 19.4,13 C17,9.5 14,8.5 11,9.5 C9,8 6,9.5 4.6,13 Z" fill="${hair}" ${s}/>
    ${long ? `<path d="M5,11 C4,16 4.5,20 5.5,22" stroke="${hair}" stroke-width="2.4" fill="none"/>` : ''}
    ${L.hairStyle === 'swoop' ? `<path d="M6,8 C8,1 16,0 21,4 C18,4 16,5 15,7 C12,5 9,6 6,8 Z" fill="${hair}" ${s}/>` : ''}
    ${L.shades ? `<ellipse cx="10.4" cy="6.6" rx="2.4" ry="1.4" fill="#18181e" ${s}/><ellipse cx="15.6" cy="6.2" rx="2.4" ry="1.4" fill="#18181e" ${s}/><ellipse cx="9.6" cy="6.1" rx=".8" ry=".35" fill="#fff" opacity=".5"/>` : ''}
    <ellipse cx="15.4" cy="13.8" rx="1.25" ry="1.6" fill="#2a1a14"/><circle cx="15.8" cy="13.2" r=".45" fill="#fff"/>
    <path d="M13.6,11.2 Q15.3,10.4 17,11.1" stroke="${hair}" stroke-width=".7" fill="none"/>
    <path d="M18.8,15.2 L19.6,16 L18.8,16.4" stroke="#c88a6a" stroke-width=".5" fill="none"/>
    <path d="M16.5,18.2 Q17.6,19 18.6,18.4" stroke="#a84a3a" stroke-width=".6" fill="none"/>
    <ellipse cx="16.6" cy="16.6" rx="1.6" ry=".9" fill="#ff9a9a" opacity=".45"/>
  </g>
  <!-- Agha Reza, leaning in with the tray -->
  <g transform="translate(76 18)">
    <path d="M14,40 C12,52 12,64 13,82 L37,82 C38,64 38,52 36,40 C32,36 18,36 14,40 Z" fill="#fbf6ee" ${s}/>
    <path d="M15,42 C14,52 14,64 15,82 L22,82 L22,44 C20,42 17,41 15,42 Z M35,42 C36,52 36,64 35,82 L28,82 L28,44 C30,42 33,41 35,42 Z" fill="${vest}" ${s}/>
    <path d="M22,46 L28,46 M22,52 L28,52" stroke="#d8cbb8" stroke-width=".5"/>
    <path d="M16,44 C10,48 4,50 -1,51" stroke="#fbf6ee" stroke-width="5.4" stroke-linecap="round" fill="none"/><path d="M16,44 C10,48 4,50 -1,51" stroke="${ink}" stroke-width="6.2" stroke-linecap="round" fill="none" opacity=".18"/>
    <path d="M34,45 C28,50 18,52 6,52" stroke="${vest}" stroke-width="5" stroke-linecap="round" fill="none"/>
    <ellipse cx="-1.5" cy="51.2" rx="2.2" ry="1.8" fill="#eebf98" ${s}/><ellipse cx="5" cy="52.4" rx="2.2" ry="1.8" fill="#eebf98" ${s}/>
    <!-- head -->
    <ellipse cx="25" cy="24" rx="10.5" ry="12" fill="#eebf98" ${s}/>
    <path d="M14.6,24 C14,17 15.5,14 17,13 C16,17 16.4,20 17.6,23 Z M35.4,24 C36,17 34.5,14 33,13 C34,17 33.6,20 32.4,23 Z" fill="#d8d4d0" ${s}/>
    <path d="M17,13 C20,10.5 30,10.5 33,13" stroke="#c8a888" stroke-width=".6" fill="none"/>
    <path d="M18,20 C20,18.6 22.5,18.6 23.6,19.8 M26.4,19.8 C27.5,18.6 30,18.6 32,20" stroke="#cfcac4" stroke-width="1.8" fill="none"/>
    <path d="M18.8,23.4 Q20.8,21.8 22.8,23.4 M27.2,23.4 Q29.2,21.8 31.2,23.4" stroke="#3a2418" stroke-width=".9" fill="none"/>
    <path d="M18,25.5 Q19,26.6 20,26.2 M32,25.5 Q31,26.6 30,26.2" stroke="#c88a6a" stroke-width=".45" fill="none"/>
    <path d="M24.4,24 C24,27 24.4,28 25.8,28.2" stroke="#b87a5a" stroke-width=".7" fill="none"/>
    <ellipse cx="18.6" cy="28" rx="2.3" ry="1.3" fill="#f48a7a" opacity=".45"/><ellipse cx="31.4" cy="28" rx="2.3" ry="1.3" fill="#f48a7a" opacity=".45"/>
    <path d="M18.5,30.5 C21,28.6 24,29 25,30 C26,29 29,28.6 31.5,30.5 C30,32.4 27,32.6 25,31.6 C23,32.6 20,32.4 18.5,30.5 Z" fill="#dcd8d2" ${s}/>
    <path d="M22.6,33.6 Q25,35 27.4,33.6" stroke="#a84a3a" stroke-width=".7" fill="none"/>
    <!-- brass tray, tea glass and sugar cubes -->
    <ellipse cx="2" cy="49.6" rx="13" ry="3" fill="url(#brass)" ${s}/><ellipse cx="2" cy="49" rx="11" ry="2" fill="#f8dc8a" opacity=".7"/>
    <circle cx="-2" cy="40" r="9" fill="url(#glow)"/>
    <ellipse cx="-2" cy="48.4" rx="4.2" ry="1.1" fill="#f4ecdc" ${s}/>
    <path d="M-5.2,37 L1.2,37 L.3,47.8 L-4.3,47.8 Z" fill="url(#tea)" stroke="${ink}" stroke-width=".55"/>
    <path d="M-5,37 L1,37 L.9,38.6 L-4.9,38.6 Z" fill="#fff4e0" opacity=".6"/><path d="M-4,39.5 L-3.4,46.5" stroke="#ffd0a0" stroke-width=".6" opacity=".8"/>
    <rect x="4.4" y="45.6" width="2.6" height="2.6" rx=".3" fill="#ffffff" ${s}/><rect x="7.4" y="46.2" width="2.6" height="2.6" rx=".3" fill="#ffffff" ${s}/><rect x="5.9" y="43.4" width="2.6" height="2.6" rx=".3" fill="#ffffff" ${s}/>
    ${[0, 1].map(i => `<path d="M${-3.6 + i * 2.4},35 C${-5 + i * 2.4},31 ${-1.5 + i * 2.4},29 ${-3 + i * 2.4},24" stroke="#ffffff" stroke-width="1" fill="none" opacity=".7" filter="url(#soft)"/>`).join('')}
  </g>
  <!-- warm light and dust in the sunbeam -->
  ${[[70, 40], [82, 52], [91, 34], [77, 66], [99, 60], [88, 72]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r=".6" fill="#fffbe8" opacity=".9"/>`).join('')}
  <rect width="160" height="100" fill="url(#warm)"/>
  <rect width="160" height="100" fill="#fff" filter="url(#paper)"/>
</svg>`;
}
// tea scene: a hand-painted picture of the host serving you chai (one for each hero)
// ---- English mode: coffee and pie at an American diner, in the same soft hand-drawn style ----
function dinerSceneSvg(L) {
  const ink = '#4a3428', s = `stroke="${ink}" stroke-width=".7" stroke-linejoin="round" stroke-linecap="round"`;
  const hair = L.hair, long = L.hairStyle === 'long', skin = '#f4cfa8';
  let checks = ''; for (let x = 0; x < 160; x += 6) for (let y = 78; y < 100; y += 6) if (((x + y) / 6) % 2 < 1) checks += `<rect x="${x}" y="${y}" width="6" height="6" fill="#2a2a30"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100">
  <defs>
    <linearGradient id="dw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f8ecd0"/><stop offset="1" stop-color="#e8cfa0"/></linearGradient>
    <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f0a860"/><stop offset=".6" stop-color="#f8d898"/><stop offset="1" stop-color="#fbe8c0"/></linearGradient>
    <linearGradient id="chrome" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f6fa"/><stop offset=".5" stop-color="#a8aeb8"/><stop offset="1" stop-color="#e0e4ea"/></linearGradient>
    <radialGradient id="warm2" cx="45%" cy="40%" r="75%"><stop offset="0" stop-color="#fff2c8" stop-opacity=".3"/><stop offset="1" stop-color="#7a3a1a" stop-opacity=".28"/></radialGradient>
    <filter id="soft2"><feGaussianBlur stdDeviation="1.2"/></filter>
    <filter id="paper2"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="7"/><feColorMatrix values="0 0 0 0 .45  0 0 0 0 .32  0 0 0 0 .2  0 0 0 .09 0"/><feComposite in2="SourceGraphic" operator="in"/></filter>
  </defs>
  <rect width="160" height="100" fill="url(#dw)"/>
  <rect x="8" y="8" width="56" height="34" rx="3" fill="url(#sky2)" stroke="#8a8e96" stroke-width="2"/>
  <path d="M8,36 L20,24 L28,30 L40,18 L52,28 L64,22 L64,42 L8,42 Z" fill="#c0663a" opacity=".85"/><path d="M8,42 L64,42 L64,38 C50,36 30,39 8,37 Z" fill="#a8743a"/>
  <circle cx="22" cy="17" r="5" fill="#fff2c0" opacity=".9"/><path d="M36,8 L36,42" stroke="#8a8e96" stroke-width="1.2"/>
  <rect x="96" y="6" width="30" height="13" rx="3" fill="#2a2a3a"/><text x="111" y="16" font-family="Verdana" font-weight="700" font-size="9" fill="#ff5a8a" text-anchor="middle">EAT</text>
  <text x="111" y="16" font-family="Verdana" font-weight="700" font-size="9" fill="#ff8ab0" text-anchor="middle" filter="url(#soft2)">EAT</text>
  <rect x="134" y="30" width="20" height="34" rx="9" fill="#c8762a" ${s}/><rect x="137" y="35" width="14" height="10" rx="6" fill="#f6d860"/><path d="M137,50 h14 M137,53 h14" stroke="#e83a6a" stroke-width="1.2"/>
  ${checks}
  <rect y="76" width="160" height="2" fill="#c8323a"/>
  <!-- counter -->
  <rect x="0" y="58" width="132" height="5" rx="1.5" fill="url(#chrome)" ${s}/><rect x="0" y="63" width="132" height="13" fill="#c8323a" ${s}/><path d="M0,67 h132" stroke="#f4f0e8" stroke-width="1"/>
  <!-- pie and mug -->
  <ellipse cx="58" cy="57.6" rx="9" ry="2" fill="#f4f0e8" ${s}/><path d="M51,57 L58,51 L65,57 Z" fill="#e8b860" ${s}/><path d="M52.6,56.2 L58,52.4 L63.4,56.2 Z" fill="#b8262e"/>
  <path d="M74,48 L82,48 L81,57 L75,57 Z" fill="#f8f6f0" ${s}/><path d="M82,50 C86,50 86,55 81.6,55" fill="none" stroke="${ink}" stroke-width=".9"/><ellipse cx="78" cy="48.6" rx="3.6" ry=".9" fill="#5a3418"/>
  ${[0, 1, 2].map(i => `<path d="M${76 + i * 1.6},46 C${74 + i * 1.6},42 ${79 + i * 1.6},40 ${77 + i * 1.6},35" stroke="#fff" stroke-width="1" fill="none" opacity="${.7 - i * .15}" filter="url(#soft2)"/>`).join('')}
  <!-- you, on a stool at the counter -->
  <rect x="32" y="76" width="3" height="20" fill="#8a8e96"/><ellipse cx="33.5" cy="76" rx="8" ry="2.4" fill="#c8323a" ${s}/>
  <g transform="translate(16 32)">
    ${long ? `<path d="M3,10 C1,22 3,30 6,33 L18,33 C19,26 19,18 17,10 Z" fill="${hair}" ${s}/>` : ''}
    <path d="M4,32 C3,26 6,22 12,22 C18,22 21,26 20,32 L20,44 L4,44 Z" fill="${L.top}" ${s}/>
    ${L.tee ? `<path d="M10,22.4 L14,22.4 L13.3,44 L10.7,44 Z" fill="${L.tee}" stroke="${ink}" stroke-width=".5"/>` : ''}
    <path d="M17,27 C24,28 30,27 36,24" stroke="${L.top}" stroke-width="3.6" stroke-linecap="round" fill="none"/>
    <ellipse cx="37" cy="23.6" rx="1.9" ry="1.6" fill="${skin}" ${s}/>
    <ellipse cx="12" cy="13" rx="7.4" ry="8" fill="${skin}" ${s}/>
    <path d="M4.6,13 C4,4 14,1.5 19,7 C20,9 20,11 19.4,13 C17,9.5 14,8.5 11,9.5 C9,8 6,9.5 4.6,13 Z" fill="${hair}" ${s}/>
    ${L.hairStyle === 'swoop' ? `<path d="M6,8 C8,1 16,0 21,4 C18,4 16,5 15,7 C12,5 9,6 6,8 Z" fill="${hair}" ${s}/>` : ''}
    ${L.shades ? `<ellipse cx="10.4" cy="6.6" rx="2.4" ry="1.4" fill="#18181e" ${s}/><ellipse cx="15.6" cy="6.2" rx="2.4" ry="1.4" fill="#18181e" ${s}/>` : ''}
    <ellipse cx="15.4" cy="13.8" rx="1.25" ry="1.6" fill="#2a1a14"/><circle cx="15.8" cy="13.2" r=".45" fill="#fff"/>
    <path d="M16.5,18.2 Q17.6,19 18.6,18.4" stroke="#a84a3a" stroke-width=".6" fill="none"/><ellipse cx="16.6" cy="16.6" rx="1.6" ry=".9" fill="#ff9a9a" opacity=".45"/>
  </g>
  <!-- the waitress pouring coffee -->
  <g transform="translate(86 14)">
    <path d="M14,40 C12,52 12,62 13,64 L37,64 C38,62 38,52 36,40 C32,36 18,36 14,40 Z" fill="#7ac8c0" ${s}/>
    <path d="M18,42 L32,42 L31,64 L19,64 Z" fill="#fbf8f0" ${s}/><path d="M22,44 h6" stroke="#e8a0b0" stroke-width="1.2"/>
    <path d="M15,44 C9,46 2,40 -3,36" stroke="#7ac8c0" stroke-width="5" stroke-linecap="round" fill="none"/>
    <ellipse cx="-4" cy="35" rx="2.2" ry="1.8" fill="#f0c49c" ${s}/>
    <!-- coffee pot -->
    <path d="M-12,26 L-2,26 L-1,34 C-1,38 -13,38 -13,34 Z" fill="#e8f0f4" fill-opacity=".8" ${s}/><path d="M-12.6,30 L-1.4,30 L-1,34 C-1,38 -13,38 -13,34 Z" fill="#5a3418" opacity=".85"/>
    <rect x="-11" y="22.6" width="8" height="3.6" rx="1" fill="#e8742a" ${s}/><path d="M-12,28 C-15,28 -15,33 -12.4,33" fill="none" stroke="${ink}" stroke-width=".8"/>
    <path d="M-12,36 C-14,40 -12,44 -12.5,48" stroke="#5a3418" stroke-width="1.4" fill="none"/>
    <ellipse cx="25" cy="24" rx="10" ry="11.5" fill="#f0c49c" ${s}/>
    <path d="M14.6,24 C13,12 22,8 30,10 C36,12 37,18 35.6,24 C33,17 26,15 20,17 C17,18 15.6,20 14.6,24 Z" fill="#c8843a" ${s}/>
    <ellipse cx="34" cy="12" rx="5" ry="5.4" fill="#c8843a" ${s}/>
    <path d="M18.8,24 Q20.8,22.6 22.8,24 M27.2,24 Q29.2,22.6 31.2,24" stroke="#3a2418" stroke-width=".9" fill="none"/>
    <ellipse cx="18.6" cy="28" rx="2.3" ry="1.3" fill="#f48a7a" opacity=".45"/><ellipse cx="31.4" cy="28" rx="2.3" ry="1.3" fill="#f48a7a" opacity=".45"/>
    <path d="M21.6,31 Q25,33.6 28.4,31" stroke="#b83a4a" stroke-width=".9" fill="none"/>
    <rect x="21" y="9" width="8" height="2.6" rx="1" fill="#fbf8f0" ${s}/>
  </g>
  <rect width="160" height="100" fill="url(#warm2)"/>
  <rect width="160" height="100" fill="#fff" filter="url(#paper2)"/>
</svg>`;
}
async function teaScene(vest, host = 'Agha Reza') {
  const p = $('#portrait');
  const en = LANG === 'en';
  const girl = !!(S && S.gender === 'girl');
  const url = en ? TEA_IMG[girl ? 'cafeGirl' : 'cafeBoy'] : TEA_IMG[girl ? 'girl' : 'boy'];
  const cap = en ? E("Here's your coffee. Enjoy!", 'بفرمایید، قهوه‌تون. نوش جان!') : F('بفرمایید، چای!', 'befarmaid, chai!');
  p.innerHTML = `<div class="tea${en ? ' us' : ''}"><img src="${url}" alt="${host} serving ${en ? 'coffee' : 'chai'}"><div class="tea-cap">${cap}</div></div>`;
  p.classList.add('show'); SND.fx('heal'); healTeam();
  await sleep(3000);
  p.classList.remove('show'); p.innerHTML = '';
}
