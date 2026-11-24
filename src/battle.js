// ===== LENGUAMON battles: typed quizzes, catching, conversation bosses =====
function stat(w, ok) { const s = S.stats[w.key] || (S.stats[w.key] = [0, 0]); s[ok ? 0 : 1]++; }

// build a 4-option question. dir: 'en2fa' (type the Persian) or 'fa2en' (type the English)
function makeQuestion(w, dir) {
  const field = dir === 'en2fa' ? 'trForms' : 'enForms';
  const overlaps = (a, b) => a[field].some(f => b[field].includes(f)) || a.key === b.key;
  const tiers = [WORDS.filter(x => x.route === w.route && x.type === w.type), WORDS.filter(x => x.route === w.route), WORDS];
  const picks = [];
  for (const tier of tiers) {
    // wrong answers of a similar length, so a long phrase doesn't stand out among short words
    const L0 = w.tr0.length, near = shuffle(tier).map(x => ({ x, d: Math.abs(x.tr0.length - L0) + rand() * 6 })).sort((a, b) => a.d - b.d).map(o => o.x);
    for (const x of near) {
      if (picks.length >= 3) break;
      if (overlaps(x, w) || picks.some(p => overlaps(p, x))) continue;
      // prefer distractors of similar length so long phrases are not giveaways
      if (tier !== WORDS && Math.abs(x.tr0.length - w.tr0.length) > 14 && rand() < 0.7) continue;
      picks.push(x);
    }
    if (picks.length >= 3) break;
  }
  const opts = shuffle([w, ...picks]).map(x => ({
    word: x, correct: x === w, forms: x[field],
    html: dir === 'en2fa' ? W(x) : `<span class="en">${esc(x.en0)}</span>`,
  }));
  const prompt = LANG === 'en' ? `How do you say ${PF('«' + w.en0 + '»')} in English?<span class="en sm" dir="rtl">به انگلیسی چه می‌شود؟</span>` : dir === 'en2fa'
    ? `How do you say <b>"${M(w)}"</b> in Persian?`
    : `What does ${W(w)} mean?`;
  return { w, dir, prompt, opts, answerHtml: LANG === 'en' ? `<b>${esc(w.tr0)}</b> = ${M(w)}` : `${W(w)} = <b>${M(w)}</b>`, hint: LANG === 'en' ? 'Type the English' : dir === 'en2fa' ? 'Type the Persian (Latin letters)' : 'Type the English' };
}
// grade typed text against the options: nearest option wins, within a typo tolerance
function grade(q, typed) {
  const t = norm(typed); if (!t) return null;
  let best = null, bestD = 1e9, correctD = 1e9;
  for (const o of q.opts) { for (const f of o.forms) { const d = lev(t, f); if (d < bestD) { bestD = d; best = o; } if (o.correct && d < correctD) correctD = d; } }
  const cf = q.opts.find(o => o.correct).forms.reduce((a, f) => lev(t, f) <= lev(t, a) ? f : a);
  const ok = best && best.correct && correctD <= tolFor(cf.length);
  return { ok, chosen: best, exact: correctD === 0 };
}
// show the quiz panel; resolves {ok, ms, chosen}
function quiz(q, title, o = {}) {
  return new Promise(res => {
    const el = $('#quiz');
    $('#b-foe').classList.toggle('hidename', !!o.hideFoe);
    el.innerHTML = `<div class="box qz"><div class="qz-t">${title || ''}</div><div class="qz-p">${q.prompt}</div>
      <div class="qz-o${q.opts.some(o => (o.word.tr0 || '').length > 15 || (o.word.en0 || '').length > 20) || q.boss ? ' one' : ''}">${q.opts.map((o, i) => `<div class="qo" data-i="${i}"><span class="ql">${'ABCD'[i]}</span>${o.html}</div>`).join('')}</div>
      <form class="qz-i"><input autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${q.hint}"><button>ENTER</button></form></div>`;
    el.classList.add('show'); window.__q = q;
    const inp = el.querySelector('input'); const t0 = performance.now();
    inp.disabled = true; setTimeout(() => { inp.disabled = false; inp.value = ''; inp.focus(); }, 300); // ignore leftover A-button presses
    const block = () => { }; pushH(block);
    let done = false;
    el.querySelector('form').addEventListener('submit', async e => {
      e.preventDefault(); if (done) return;
      const g = grade(q, inp.value); if (!g) { inp.focus(); return; }
      done = true; inp.blur();
      const ci = q.opts.findIndex(o => o.correct), chi = q.opts.indexOf(g.chosen);
      el.querySelectorAll('.qo')[ci].classList.add('right');
      if (!g.ok && chi >= 0 && chi !== ci) el.querySelectorAll('.qo')[chi].classList.add('wrong');
      SND.fx(g.ok ? 'good' : 'bad');
      await sleep(g.ok ? 700 : 1300);
      el.classList.remove('show'); el.innerHTML = ''; popH(block); $('#b-foe').classList.remove('hidename');
      res({ ok: g.ok, ms: performance.now() - t0, chosen: g.chosen });
    });
    inp.addEventListener('keydown', e => e.stopPropagation());
  });
}

// ---- battle screen ----
const BT = { foe: null, me: null, boss: null };
function bShow(on) { $('#battle').classList.toggle('show', on); }
function bDraw() {
  const f = BT.foe, m = BT.me;
  const fw = f.w, mw = m ? monW(m) : null;
  $('#b-foe').innerHTML = BT.boss
    ? `<div class="nm">${esc(BT.boss.name)}</div><div class="lv">TALK ${BT.boss.left}/${BT.boss.total}</div><div class="hp">${hpBar({ hp: BT.boss.left }, BT.boss.total)}</div>`
    : `<div class="nm">${esc(fw.name)}</div><div class="lv">:L${f.lvl} <small>${TYPES[fw.type].label}</small> <span class="fs" dir="rtl">${esc(speciesOf(fw).fa)}</span></div><div class="hp">HP ${hpBar(f, f.max)}</div>${BT.trainer ? `<div class="tdots">${'●'.repeat(BT.trainer.left)}${'○'.repeat(BT.trainer.total - BT.trainer.left)}</div>` : ''}`;
  $('#b-foe-spr').innerHTML = BT.boss ? `<img class="mon trainer" src="${portraitUrl(BT.boss.look)}">` : monImg(fw, 'foe') + monTag(fw);
  if (m) {
    $('#b-me').innerHTML = `<div class="nm">${esc(mw.name)}</div><div class="lv">:L${m.lvl}</div><div class="hp">HP ${hpBar(m, maxHp(m.lvl))}</div><div class="num">${m.hp}/ ${maxHp(m.lvl)}</div>`;
    $('#b-me-spr').innerHTML = monImg(mw, 'me') + monTag(mw);
  }
}
async function anim(sel, cls, ms = 400) { const e = $(sel); if (!e) return; e.classList.remove(cls); void e.offsetWidth; e.classList.add(cls); await sleep(ms); e.classList.remove(cls); }
const dmgRoll = base => Math.max(1, Math.round(base * (0.85 + rand() * 0.3)));


// ---- strike animations: lunge, impact burst, flash, damage numbers, dodges ----
function fxAt(sel) {
  const scr = $('#screen').getBoundingClientRect(), r = $(sel).getBoundingClientRect();
  return { x: r.left - scr.left + r.width / 2, y: r.top - scr.top + r.height / 2, w: r.width };
}
function burstSvg(color, big) {
  let pts = ''; const n = big ? 12 : 9;
  for (let i = 0; i < n * 2; i++) { const a = i * Math.PI / n, rr = i % 2 ? 18 : (big ? 48 : 40); pts += `${(50 + Math.cos(a) * rr).toFixed(1)},${(50 + Math.sin(a) * rr).toFixed(1)} `; }
  return `<svg viewBox="0 0 100 100"><polygon points="${pts}" fill="${color}" stroke="#2b1d16" stroke-width="3" stroke-linejoin="round"/><circle cx="50" cy="50" r="12" fill="#ffffff"/></svg>`;
}
function spawnFx(sel, html, cls, ms = 700) {
  const p = fxAt(sel), d = document.createElement('div');
  d.className = 'fx ' + cls; d.style.left = p.x + 'px'; d.style.top = p.y + 'px'; d.style.setProperty('--w', p.w + 'px'); d.innerHTML = html;
  $('#screen').appendChild(d); setTimeout(() => d.remove(), ms);
}
// attacker: 'me' or 'foe'. dmg: number or null. Resolves when the animation is done.
async function strike(attacker, hit, dmg, crit) {
  const target = attacker === 'me' ? 'foe' : 'me';
  const aSel = `#b-${attacker}-spr`, tSel = `#b-${target}-spr`;
  const lunge = anim(aSel, attacker === 'me' ? 'lunge-me' : 'lunge-foe', 380);
  await sleep(170);
  if (hit) {
    SND.fx('hit');
    spawnFx(tSel, burstSvg(attacker === 'me' ? (crit ? '#ffd040' : '#fff070') : '#ff7a4a', crit), 'burst' + (crit ? ' big' : ''), 450);
    if (attacker === 'foe' || crit) anim('#screen', 'shake-screen', 350);
    if (dmg != null) spawnFx(tSel, `-${dmg}`, 'dmg' + (attacker === 'foe' ? ' bad' : ''), 900);
    if (crit) spawnFx(tSel, 'CRITICAL!', 'dmg crit', 900);
    await anim(tSel, 'hurt', 450);
  } else {
    SND.fx('miss');
    spawnFx(tSel, 'MISS', 'dmg miss', 900);
    await anim(tSel, target === 'foe' ? 'dodge-foe' : 'dodge-me', 420);
  }
  await lunge;
}

function chooseWild(route) {
  const pool = wordsOfRoute(route);
  const top = Math.max(...S.team.map(m => m.lvl), 5);
  let elig = pool.filter(w => w.level <= top + 6);
  if (elig.length < 10) elig = pool.slice().sort((a, b) => a.level - b.level).slice(0, 10);
  const weights = elig.map(w => (S.caught[w.key] ? 1 : S.seen[w.key] ? 3 : 4));
  let t = rand() * weights.reduce((a, b) => a + b, 0);
  for (let i = 0; i < elig.length; i++) { t -= weights[i]; if (t <= 0) return elig[i]; }
  return elig[0];
}
function reviewWord(except) {
  const pool = WORDS.filter(w => (S.seen[w.key] || S.caught[w.key]) && w.key !== except.key);
  if (pool.length < 4) return null;
  const scored = pool.map(w => { const s = S.stats[w.key] || [0, 0]; return { w, s: s[1] * 2 - s[0] + rand() * 3 }; }).sort((a, b) => b.s - a.s);
  return scored[Math.floor(rand() * Math.min(6, scored.length))].w;
}

async function battleIntro(music) {
  SND.music(music); SND.fx('encounter');
  $('#battle').classList.toggle('lair', !!(BT.boss && BT.boss.lair));
  await flash(3); await fade(true, 150);
  bShow(true); bDraw(); hideText();
  await fade(false, 150);
}
async function battleOutro() {
  BT.trainer = null; hideText(); await fade(true, 200); bShow(false); BT.boss = null; musicForPlace(); drawWorld(); await fade(false, 200);
}
async function gainXp(m, amt) {
  const w = monW(m); m.xp += amt;
  await say(`${esc(w.name)} gained ${amt} EXP. Points!`);
  while (m.xp >= m.lvl * 8) {
    m.xp -= m.lvl * 8; const oldMax = maxHp(m.lvl); m.lvl++; m.hp += maxHp(m.lvl) - oldMax;
    SND.fx('levelup'); bDraw(); await say(`${esc(w.name)} grew to level ${m.lvl}!`);
  }
  await maybeEvolve(m);
}
// returns true if the player still has a Lenguamon standing
async function handleFaint() {
  const w = monW(BT.me); SND.fx('faint'); await anim('#b-me-spr', 'faint', 600);
  await say(`${esc(w.name)} ran out of words!`);
  if (!teamAlive()) return false;
  await say('Choose your next Lenguamon.');
  let r = null; while (r === null || r < 0) r = await teamScreen(true);
  BT.me = S.team[r]; bDraw(); await say(`Go! ${esc(monW(BT.me).name)}!`); return true;
}
async function blackout() {
  await say([`${esc(S.name)} has no Lenguamon left to talk with!`, `${esc(S.name)} hurried back to the ${LANG === 'en' ? 'café' : 'teahouse'}...`]);
  await fade(true, 300); bShow(false); BT.boss = null;
  healTeam(); placePlayer(S.lastTea || (LANG === 'en' ? 'diner1' : 'teahouse'), 5, 4, 'up'); writeSave(); drawWorld(); await fade(false, 300);
  await say(LANG === 'en' ? 'Oh, honey, you look exhausted. Sit down, have some coffee and pie.' : `${F('خسته نباشی', 'khasteh nabashi')}! Sit, have some chai.`);
  await teaScene();
  await say('Your Lenguamon are rested and ready. Words take practice. Try again!');
}
// the enemy's turn. lastQ = the question the player just answered (or null)
async function foeTurn(lastOk, lastQ) {
  const f = BT.foe, m = BT.me, fw = f.w;
  const name = BT.boss ? BT.boss.name : BT.trainer ? `${BT.trainer.short}'s ${fw.name}` : `Wild ${fw.name}`;
  let hit = lastOk ? rand() < (BT.boss ? 0.25 : 0.35) : true;
  let move = lastQ && !lastOk ? lastQ.answerHtml : BT.boss ? 'a rapid-fire question' : W(fw);
  await say(`${esc(name)} used ${move}!`);
  if (!hit) { await strike('foe', false); await say(`${esc(name)}'s attack missed!`); return true; }
  const dmg = dmgRoll(BT.boss ? (3 + BT.boss.lvl * 0.5) * (lastOk ? 0.5 : 1) : (3 + f.lvl * 0.7) * (lastOk ? 0.7 : 1));
  await strike('foe', true, dmg);
  m.hp = Math.max(0, m.hp - dmg); bDraw();
  if (m.hp <= 0) return handleFaint();
  return true;
}

async function wildEncounter(route) {
  if (!S.team.length) return;
  const w = chooseWild(route);
  const firstTime = !S.seen[w.key] && !S.caught[w.key];
  S.seen[w.key] = true;
  BT.foe = { w, lvl: w.level, max: maxHp(w.level), hp: maxHp(w.level) }; BT.me = lead(); BT.boss = null;
  await battleIntro('battle');
  await say(`A wild ${B(w.name)} appeared!`);
  await say(`Go! ${B(monW(BT.me).name)}! Show what you know!`);
  let menuIdx = 0, first = true;
  while (true) {
    bDraw();
    let r = 0;
    if (!first) {
      await say(`What will ${esc(monW(BT.me).name)} do?`, { keep: true });
      r = await choose(['FIGHT', `${DAF()} x${S.daftar}`, 'TEAM', 'RUN', 'BAG'], { cols: 2, cls: 'bmenu', cancel: false, start: menuIdx });
      hideText(); menuIdx = r;
    }
    if (r === 0) {
      // the attack is a typed quiz: the wild Lenguamon's own word, or sometimes a review word
      const rv = !first && rand() < 0.35 ? reviewWord(w) : null;
      first = false;
      const qw = rv || w;
      const st = S.stats[qw.key] || [0, 0];
      const dir = 'en2fa'; // always type the Persian
      const q = makeQuestion(qw, dir);
      const res = await quiz(q, `${esc(monW(BT.me).name)} attacks!`);
      stat(qw, res.ok);
      if (res.ok) {
        const crit = res.ms < 5000;
        await say(`${esc(monW(BT.me).name)} used ${W(monW(BT.me))}!`);
        const dmg = dmgRoll(5 + BT.me.lvl * 0.9) * (crit ? 1.5 : 1) | 0;
        await strike('me', true, dmg, crit);
        BT.foe.hp = Math.max(0, BT.foe.hp - dmg); bDraw();
        if (crit) await say('Quick answer! A critical hit!');
        if (BT.foe.hp <= 0) {
          SND.fx('faint'); await anim('#b-foe-spr', 'faint', 600);
          await say([`Wild ${esc(w.name)} fainted!`, `It was carrying the word ${W(w)} = "${M(w)}".`]);
          await gainXp(BT.me, 4 + w.level * 3); await earn(2 + Math.floor(w.level / 4), 'You found'); break;
        }
      } else {
        await strike('me', false); await say([`${esc(monW(BT.me).name)}'s attack missed!`, `The answer was ${q.answerHtml}.`]);
      }
      if (!(await foeTurn(res.ok, q))) { await blackout(); return; }
    } else if (r === 1) {
      if (S.daftar <= 0) { await say(LANG === 'en' ? `You're out of NOTEBOOKS! The café, the gym and the elders can give you more.` : `You're out of DAFTARS! ${G('Agha Reza', 'Khanom Zari')} at the teahouse can give you more.`); continue; }
      S.daftar--;
      await say(`${esc(S.name)} opened a ${DAF()}! Write the word to catch it!`);
      const q = makeQuestion(w, 'en2fa');
      const res = await quiz(q, `Write it in your ${DAF()}`);
      stat(w, res.ok);
      if (!res.ok) {
        await say([`The ink smudged! The word slipped off the page.`, `The answer was ${q.answerHtml}.`]);
        if (!(await foeTurn(false, q))) { await blackout(); return; }
        continue;
      }
      const p = clamp(1 - 0.75 * BT.foe.hp / BT.foe.max + (res.ms < 6000 ? 0.1 : 0), 0.25, 0.97);
      const shakes = rand() < p ? 3 : Math.floor(rand() * 3);
      $('#b-foe-spr').innerHTML = `<div class="daftar-ico"></div>`;
      for (let i = 0; i < shakes; i++) { SND.fx('shake'); await anim('#b-foe-spr', 'shake', 500); }
      if (shakes === 3) {
        SND.fx('caught'); S.caught[w.key] = true;
        await say([`Gotcha! The wild ${B(w.name)} was caught!`, `Its word ${W(w)} = "${M(w)}" was written into your Lenguadex!`]);
        if (S.team.length < 6 && !S.team.some(m => m.key === w.key)) { S.team.push(makeMon(w)); await say(`${esc(w.name)} joined your team!`); }
        else await say(`${esc(w.name)} was stored in your Lenguadex. (Swap it in from the Lenguadex menu.)`);
        await gainXp(BT.me, 2 + w.level * 2);
        break;
      } else {
        bDraw(); await say(['Oh no! The word broke free!', 'Weaken it more before writing it down.']);
        if (!(await foeTurn(true, null))) { await blackout(); return; }
      }
    } else if (r === 2) {
      const i = await teamScreen(true);
      if (i === null || i < 0 || S.team[i] === BT.me) continue;
      await say(`Come back, ${esc(monW(BT.me).name)}! Go, ${esc(monW(S.team[i]).name)}!`);
      BT.me = S.team[i]; bDraw();
      if (!(await foeTurn(true, null))) { await blackout(); return; }
    } else if (r === 3) {
      SND.fx('door'); await say('Got away safely!'); break;
    } else if (r === 4) {
      if (await useFoodMenu(true)) { if (!(await foeTurn(true, null))) { await blackout(); return; } }
    }
  }
  writeSave(); await battleOutro();
}

// ---- conversation bosses ----
// each line: [npc Persian, npc translit, npc English, reply Persian, reply translit, reply English]
const BOSSES = {
  b1: {
    name: 'BASIJI', look: 'basij', lvl: 9, route: 1, need: 12, showEn: true, optEn: true,
    title: 'the BASIJ CHECKPOINT on the road out of Yazd',
    intro: [`${F('ایست!', 'ist!')} HALT! This is a Basij checkpoint.`, 'Nobody leaves Yazd unless they can answer my questions in Persian!'],
    lines: [
      ['سلام!', 'salam!', 'Hello!', 'سلام، خوبی؟', 'salam, khubi?', 'Hello, how are you?'],
      ['مرسی، خوبم. تو چطوری؟', 'merci, khubam. to chetori?', "Thanks, I'm good. How are you?", 'من هم خوبم، مرسی', 'man ham khubam, merci', "I'm good too, thanks"],
      ['اسمت چیه؟', 'esmet chie?', "What's your name?", 'اسم من {NAME} است', 'esm-e man {NAME} ast', 'My name is {NAME}'],
      ['خوشبختم!', 'khoshbakhtam!', 'Nice to meet you!', 'من هم خوشبختم', 'man ham khoshbakhtam', 'Nice to meet you too'],
      ['اهل کجایی؟', 'ahl-e kojayi?', 'Where are you from?', 'من اهل آمریکا هستم', 'man ahl-e amrika hastam', "I'm from America"],
      ['فارسی بلدی؟', 'farsi baladi?', 'Do you know Persian?', 'یه کم فارسی بلدم', 'ye kam farsi baladam', 'I know a little Persian'],
      ['...!!! (he shouts something very fast)', '...!!!', '(something very fast)', 'ببخشید، نمی‌فهمم. دوباره بگو', 'bebakhshid, nemifahmam. dobare begu', "Sorry, I don't understand. Say it again"],
      ['خسته نباشی!', 'khasteh nabashi!', 'Good work!', 'سلامت باشی', 'salamat bashi', 'Be well (thanks!)'],
      ['خداحافظ!', 'khodahafez!', 'Goodbye!', 'خداحافظ، روز خوبی داشته باشی', 'khodahafez, ruz-e khubi dashte bashi', 'Goodbye, have a nice day'],
    ],
    beaten: `${F('باشه', 'bashe')}... fine. Your papers are in order. Go on to Isfahan.`,
  },
  b2: {
    name: 'IRGC COMMANDER', look: 'irgc', lvl: 16, route: 2, need: 12, showEn: true, optEn: false,
    title: 'the IRGC COMMANDER guarding the road to Shiraz',
    intro: [`${F('ایست!', 'ist!')} Stop right there, traveller.`, 'I am the IRGC COMMANDER. Nobody reaches Shiraz without passing my interrogation. In Persian!'],
    lines: [
      ['ایست! اسمت چیه؟', 'ist! esmet chie?', "Halt! What's your name?", 'سلام، اسم من {NAME} است', 'salam, esm-e man {NAME} ast', 'Hello, my name is {NAME}'],
      ['چند سالته؟', 'chand saleteh?', 'How old are you?', 'من سی سال دارم', 'man si sal daram', "I'm thirty years old"],
      ['خواهر یا برادر داری؟', 'khahar ya baradar dari?', 'Do you have a sister or brother?', 'بله، یک خواهر دارم', 'baleh, yek khahar daram', 'Yes, I have one sister'],
      ['بچه داری؟', 'bache dari?', 'Do you have children?', 'نه، بچه ندارم', 'na, bache nadaram', "No, I don't have children"],
      ['ساعت چنده؟', 'saat chande?', 'What time is it?', 'ساعت سه بعد از ظهر است', "saat se-e ba'd az zohr ast", "It's 3 in the afternoon"],
      ['امروز چندشنبه است؟', 'emrooz chand shanbe ast?', 'What day is today?', 'امروز جمعه است', 'emrooz jomeh ast', 'Today is Friday'],
      ['این چنده؟ (he points at your bag)', 'in chande?', 'How much is this?', 'پنجاه هزار تومن', 'panjah hezar toman', "It's 50,000 toman"],
      ['فردا کجا میری؟', 'farda koja miri?', 'Where are you going tomorrow?', 'فردا به بازار می‌رم', 'farda be bazar miram', "Tomorrow I'm going to the bazaar"],
      ['باشه، برو!', 'bashe, boro!', 'Okay, go!', 'مرسی، خداحافظ!', 'merci, khodahafez!', 'Thanks, goodbye!'],
    ],
    beaten: `Hmph. ${F('برو', 'boro')}! Go! Shiraz is north. They say Shirin only speaks Persian.`,
  },
  b3: {
    name: 'THE CENSOR', look: 'censor', lvl: 26, route: 3, need: 12, showEn: false, optEn: false, lair: true,
    title: 'the villain who seized the tomb of Hafez',
    intro: [`So. You are the one collecting words. I am THE CENSOR ${F('سانسورچی', 'sansurchi')}.`, 'I have seized the tomb of Hafez and banned every word in Iran. Poems, jokes, greetings... all forbidden!', 'If you can still hold a conversation, prove it. In Persian. No English hints!'],
    lines: [
      ['سلام. حالت چطوره؟', 'salam. halet chetore?', 'Hello. How are you doing?', 'خیلی خوبم، مرسی. تو چطوری؟', 'kheyli khubam, merci. to chetori?', "I'm very good, thanks. How are you?"],
      ['فارسی بلد نیستی!', 'farsi balad nisti!', "You don't know Persian!", 'چرا، فارسی بلدم!', 'chera, farsi baladam!', 'Yes I do, I know Persian!'],
      ['گرسنه‌ای؟', 'gorosneh-i?', 'Are you hungry?', 'بله، خیلی گرسنه‌ام', 'baleh, kheyli gorosneh-am', "Yes, I'm very hungry"],
      ['چه غذایی دوست داری؟', 'che ghazayi doost dari?', 'What food do you like?', 'کباب کوبیده دوست دارم', 'kabab koobideh doost daram', 'I like kabab koobideh'],
      ['غذا ممنوع است!', 'ghaza mamnu ast!', 'Food is forbidden!', 'چرا؟ من گرسنه‌ام!', 'chera? man gorosneh-am!', "Why? I'm hungry!"],
      ['هوا چطوره؟', 'hava chetore?', "How's the weather?", 'هوا آفتابی و گرمه', 'hava aftabi va garme', "It's sunny and warm"],
      ['امروز سر کار رفتی؟', 'emrooz sar-e kaar rafti?', 'Did you go to work today?', 'بله، صبح سر کار رفتم', 'baleh, sobh sar-e kaar raftam', 'Yes, I went to work this morning'],
      ['چشم‌هات چه رنگیه؟ (his red eye scans you)', 'cheshmat che rangi-e?', 'What color are your eyes?', 'چشم‌های من قهوه‌ای است', 'cheshm-haye man ghahvei ast', 'My eyes are brown'],
      ['کلمه‌ها ممنوع هستند!', 'kalameh-ha mamnu hastand!', 'Words are forbidden!', 'نه! من فارسی حرف می‌زنم!', 'na! man farsi harf mizanam!', 'No! I speak Persian!'],
      ['نه! نه! خداحافظ!', 'na! na! khodahafez!', 'No! No! Goodbye!', 'خداحافظ، سانسورچی!', 'khodahafez, sansurchi!', 'Goodbye, Censor!'],
    ],
    beaten: `My bans... my beautiful bans... ${F('نه!', 'na!')} This isn't over! In TEHRAN I control every screen! (THE CENSOR fled north toward Tehran. The words of Hafez are free again!)`,
  },
  b4: {
    name: 'STATE TV ANCHOR', look: 'anchor', lvl: 34, route: 5, need: 12, showEn: true, optEn: false,
    title: 'the STATE TV ANCHOR broadcasting live from the gate of Tehran',
    intro: [`${F('شب بخیر، بینندگان عزیز', 'shab bekheir, binandegan-e aziz')}! Good evening, dear viewers!`, 'We are LIVE at the gate of Tehran, where a dangerous traveller is trying to... SPEAK FREELY. Let us interview them!', 'Remember, viewers: everything is wonderful. Only approved words on this channel!'],
    lines: [
      ['شب بخیر، بینندگان عزیز!', 'shab bekheir, binandegan-e aziz!', 'Good evening, dear viewers!', 'سلام، شب شما هم بخیر', 'salam, shab-e shoma ham bekheir', 'Hello, good evening to you too'],
      ['شما کی هستید؟', 'shoma ki hastid?', 'Who are you?', 'من {NAME} هستم', 'man {NAME} hastam', "I'm {NAME}"],
      ['کجا می‌رید؟', 'koja mirid?', 'Where are you going?', 'من به تهران می‌رم', 'man be tehran miram', "I'm going to Tehran"],
      ['چرا؟', 'chera?', 'Why?', 'می‌خوام برج میلاد رو ببینم', 'mikham borj-e milad ro bebinam', 'I want to see Milad Tower'],
      ['به نظر شما تلویزیون ما خوبه؟', 'be nazar-e shoma televizion-e ma khube?', 'In your opinion, is our TV good?', 'نه، فکر نمی‌کنم', 'na, fekr nemikonam', "No, I don't think so"],
      ['همه چیز عالیه! موافقید؟', "hame chiz a'liye! movafeghid?", 'Everything is great! Do you agree?', 'نه، مخالفم!', 'na, mokhalefam!', 'No, I disagree!'],
      ['اینترنت لازم نیست!', 'internet lazem nist!', "The internet isn't necessary!", 'شوخی می‌کنی؟', 'shukhi mikoni?', 'Are you joking?'],
      ['وقت دارید؟ برنامه ادامه دارد...', 'vaght darid? barnameh edameh darad...', 'Do you have time? The show continues...', 'نه، وقت ندارم. بیا بریم!', 'na, vaght nadaram. bia berim!', "No, I don't have time. Let's go!"],
      ['...و حالا، تبلیغات!', '...va hala, tablighat!', '...and now, a word from our sponsors!', 'خداحافظ، به امید دیدار', 'khodahafez, be omid-e didar', 'Goodbye, hope to see you again'],
    ],
    beaten: `...we are experiencing technical difficulties. ${F('ببخشید', 'bebakhshid')}! (The broadcast cut to a test pattern. The gate of Tehran is open!)`,
  },
  b5: {
    name: 'THE CENSOR', look: 'censor', lvl: 44, route: 6, need: 12, showEn: false, optEn: false, lair: true,
    title: 'THE CENSOR, jamming every word in Iran from the top of Milad Tower',
    intro: [`You AGAIN? ${F('باز هم تو؟', 'baz ham to?')}`, 'From the top of Milad Tower I jam every phone, every screen, every word in Iran. Here I am all-powerful!', 'One last conversation. Long Persian sentences, no English hints. Fail, and Persian falls silent forever!'],
    lines: [
      ['باز هم تو؟', 'baz ham to?', 'You again?', 'بله، من دوباره اومدم!', 'baleh, man dobare oomadam!', 'Yes, I came back!'],
      ['تهران خیلی بزرگه. گم نشدی؟', 'tehran kheyli bozorge. gom nashodi?', "Tehran is huge. Didn't you get lost?", 'نه، نقشه دارم', 'na, naghsheh daram', 'No, I have a map'],
      ['چطوری اومدی؟', 'chetori oomadi?', 'How did you get here?', 'با قطار اومدم', 'ba ghatar oomadam', 'I came by train'],
      ['اینترنت قطعه! هاها!', "internet ghat'eh! haha!", 'The internet is down! Haha!', 'مهم نیست، من فارسی بلدم', 'mohem nist, man farsi baladam', "It doesn't matter, I know Persian"],
      ['تعارف نکن، بشین!', "ta'arof nakon, beshin!", "Don't be shy, sit down!", 'مرسی، مزاحم نمی‌شم', 'merci, mozahem nemisham', "Thanks, I won't bother you"],
      ['به نظرت کلمه‌ها خطرناک هستند؟', 'be nazaret kalameh-ha khatarnak hastand?', 'Do you think words are dangerous?', 'نه، به نظر من کلمه‌ها قشنگ هستند', 'na, be nazar-e man kalameh-ha ghashang hastand', 'No, in my opinion words are beautiful'],
      ['شماره تلفنت چنده؟', 'shomareh telefonet chande?', "What's your phone number?", 'نمی‌گم! شتر دیدی ندیدی', 'nemigam! shotor didi, nadidi', "I won't tell! (Did you see a camel? You didn't.)"],
      ['من همه چیز رو ممنوع می‌کنم!', 'man hame chiz ro mamnu mikonam!', 'I ban everything!', 'نمی‌تونی! ما با هم هستیم', 'nemitooni! ma ba ham hastim', "You can't! We are together"],
      ['چرا فارسی یاد می‌گیری؟', 'chera farsi yad migiri?', 'Why are you learning Persian?', 'چون ایران رو دوست دارم', 'chon iran ro doost daram', 'Because I love Iran'],
      ['نه! نه! سیگنال قطع شد!', "na! na! signal ghat' shod!", 'No! No! The signal is cut!', 'خداحافظ سانسورچی! خوش گذشت', 'khodahafez sansurchi! khosh gozasht', 'Goodbye, Censor! I had a great time'],
    ],
    beaten: `My signal... my beautiful silence... ${F('نه!', 'na!')} NOOOO! (THE CENSOR's jammer exploded into a shower of sparks. Every word in Iran is free again!)`,
  },
};
function bossReplyWord(b, line) {
  const sub = s => s.replace(/\{NAME\}/g, S.name);
  const tr = sub(line[4] || line[3]);
  return { key: 'boss|' + norm(tr), tr0: tr, en0: sub(line[5]), fa: line[3].replace(/\{NAME\}/g, S.name), trForms: [norm(tr)], enForms: [norm(sub(line[5]))] };
}
const bossDef = id => (LANG === 'en' ? BOSSES_EN : BOSSES)[id];
async function bossBattle(id) {
  const b = bossDef(id);
  const en = LANG === 'en', say1 = (fa, tr) => en ? E(fa, '') : F(fa, tr);
  BT.boss = { ...b, total: b.lines.length, left: b.lines.length };
  BT.foe = { w: WORD[WORDS[0].key], lvl: b.lvl, max: 1, hp: 1 };
  BT.me = lead();
  await battleIntro('boss');
  await say(`${b.name} wants to have a conversation! Answer each line in Persian.`);
  if (en) await say(b.showEn ? `(${b.name} talks fast! You'll get Persian hints. Type the best English reply.)` : `(No Persian hints this time. Listen to the English and reply!)`);
  else if (b.showEn) await say(`(${b.name} will give you English hints. Type the best Persian reply.)`);
  else await say(`(No English hints this time. Listen to the Persian and reply!)`);
  await say(`Go! ${B(monW(BT.me).name)}!`);
  const queue = b.lines.map((l, i) => i);
  while (queue.length) {
    bDraw();
    if (BT.me.hp < maxHp(BT.me.lvl) / 2 && bagItems().length && (await ask(`${esc(monW(BT.me).name)} is tired. Eat or drink something first?`))) await useFoodMenu(true);
    const li = queue.shift(), line = b.lines[li];
    const ans = bossReplyWord(b, line);
    const others = shuffle(b.lines.filter((l, i) => i !== li)).slice(0, 3).map(l => bossReplyWord(b, l));
    const fx = s => s.replace(/\{NAME\}/g, S.name);
    const opts = shuffle([ans, ...others]).map(x => ({ word: x, correct: x === ans, forms: x.trForms, html: say1(x.fa, x.tr0) + (b.optEn ? (en ? `<span class="en sm">${PF(x.en0)}</span>` : `<span class="en sm">${esc(x.en0)}</span>`) : '') }));
    const q = {
      boss: true, w: ans, opts, hint: en ? 'Type your reply in English' : 'Type your reply (Latin letters)',
      prompt: `<span class="who">${esc(b.name)}:</span> ${say1(fx(line[0]), fx(line[1]))}${b.showEn ? `<span class="en sm">${en ? PF(fx(line[2])) : `"${esc(fx(line[2]))}"`}</span>` : ''}`,
      answerHtml: en ? `<b>${esc(ans.fa)}</b> <small>${PF(ans.en0)}</small>` : `${F(ans.fa, ans.tr0)} <small>"${esc(ans.en0)}"</small>`,
    };
    const res = await quiz(q, 'Your reply');
    if (res.ok) {
      await say(`${esc(monW(BT.me).name)} replied: ${say1(ans.fa, ans.tr0)}`);
      await strike('me', true, null);
      BT.boss.left--; bDraw();
      if (!b.showEn) await say(en ? `(${esc(b.name)}: ${PF(fx(line[2]))} · ${PF(ans.en0)})` : `(${b.name} said: "${esc(fx(line[2]))}" · You said: "${esc(ans.en0)}")`);
      if (!BT.boss.left) break;
      if (!(await foeTurn(true, null))) { await blackout(); return false; }
    } else {
      queue.push(li);
      await say([`That reply didn't fit the conversation!`, `A good reply: ${q.answerHtml}`]);
      if (!(await foeTurn(false, q))) { await blackout(); return false; }
    }
  }
  SND.fx('badge');
  await say(`${b.name}: ${b.beaten}`);
  writeSave(); await battleOutro();
  return true;
}

// ---- evolution: after a level-up, a Lenguamon may try to grow its word into a phrase ----
function evoTarget(m) { const nk = EVO[m.key]; if (!nk || (m.stage || 0) >= 2) return null; const nx = WORD[nk]; return nx && m.lvl >= nx.level ? nx : null; }
async function maybeEvolve(m) {
  const nx = evoTarget(m); if (!nx || m.evoTry === m.lvl) return false;
  m.evoTry = m.lvl;
  const before = monW(m), cur = WORD[m.key];
  await say([`What? ${B(before.name)} is evolving!`, `Its word ${W(cur)} "${M(cur)}" wants to grow into a phrase. Type the phrase to help it!`]);
  hideText();
  const res = await quiz(makeQuestion(nx, 'en2fa'), `EVOLUTION · ${esc(before.name)}`);
  stat(nx, res.ok);
  if (!res.ok) { await say([`The phrase was ${W(nx)} = <b>${M(nx)}</b>.`, `${esc(before.name)} stopped evolving. It will try again at its next level.`]); return false; }
  m.base = m.base || m.key; m.key = nx.key; m.stage = (m.stage || 0) + 1;
  const after = monW(m);
  const p = $('#portrait');
  p.innerHTML = `<div class="evo"><img class="mon a" src="${monUrl(before)}"><img class="mon b" src="${monUrl(after)}"></div>`; p.classList.add('show');
  SND.fx('levelup'); await sleep(2600); SND.fx('badge');
  S.caught[nx.key] = true; S.seen[nx.key] = true;
  await say([`Congratulations! ${esc(before.name)} evolved into ${B(after.name)}!`, `Its word grew into a phrase: ${W(nx)} = "${M(nx)}"`]);
  p.classList.remove('show'); p.innerHTML = '';
  if ($('#battle').classList.contains('show')) bDraw();
  writeSave(); return true;
}
