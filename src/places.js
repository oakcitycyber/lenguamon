// ===== LENGUAMON places: a teahouse and a zurkhaneh (traditional gym) in every city =====

// ---- teahouses in Isfahan and Shiraz, run by Agha Reza's brothers ----
async function teaHost(name, vest, lines) {
  await say(lines.map(l => T(name, l)));
  await teaScene(vest, name); await say(['Your Lenguamon drank chai and feel refreshed!', T(name, `${F('نوش جان', 'noosh-e jan')}! Enjoy!`)]);
  if (S.flags.starter && S.daftar < 5) { S.daftar = 5; SND.fx('good'); await say(`${name}: Take some DAFTARS too. You now have 5.`); }
}
npc('!', { look: 'hassan', talk: () => teaHost('AGHA HASSAN', '#3a5a7a', [
  `${F('خوش اومدی', 'khosh oomadi')}! Welcome! I am Agha Hassan, Agha Reza's big brother.`,
  'Everyone in Isfahan says we look exactly alike. I say I am the handsome one!',
  `Sit, sit. A glass of ${F('چای', 'chai')}?`]) });
npc('$', { look: 'karim', talk: () => teaHost('AGHA KARIM', '#2f5a3a', [
  `${F('سلام', 'salam')}, traveller! I am Agha Karim. My brothers Reza and Hassan pour tea in Yazd and Isfahan.`,
  'But only Shiraz has tea this good. The roses make the air sweet!',
  `${F('بفرمایید', 'befarmaid')}, have a glass.`]) });

// ---- zurkhanehs: train on the words of each city ----
const GYMS = {
  '<': { route: 1, city: 'YAZD', name: 'MORSHED JAMSHID' },
  '>': { route: 2, city: 'ISFAHAN', name: 'MORSHED SOHRAB' },
  '?': { route: 3, city: 'SHIRAZ', name: 'MORSHED ROSTAM' },
};
const GYM_ROUNDS = 8;
function gymWords(route) {
  const pool = WORDS.filter(w => w.route === route);
  // words you have met first, and the ones you keep missing most of all
  const scored = pool.map(w => { const s = S.stats[w.key] || [0, 0]; const met = S.seen[w.key] || S.caught[w.key]; return { w, s: (met ? 4 : 0) + s[1] * 3 - s[0] + rand() * 4 }; });
  return shuffle(scored.sort((a, b) => b.s - a.s).slice(0, GYM_ROUNDS).map(x => x.w));
}
async function gymXp(m, amt) {
  const w = monW(m); m.xp += amt;
  while (m.xp >= m.lvl * 8) {
    m.xp -= m.lvl * 8; const oldMax = maxHp(m.lvl); m.lvl++; m.hp += maxHp(m.lvl) - oldMax;
    SND.fx('levelup'); await say(`${esc(w.name)} grew to level ${m.lvl}!`);
  }
}
async function gymDrill(g) {
  const words = gymWords(g.route);
  let score = 0;
  for (let i = 0; i < words.length; i++) {
    const w = words[i]; hideText();
    const res = await quiz(makeQuestion(w, 'en2fa'), `${g.city} ZURKHANEH · ROUND ${i + 1}/${words.length} · ${score} ✓`);
    stat(w, res.ok); S.seen[w.key] = true;
    if (res.ok) { score++; if (i < words.length - 1 && rand() < 0.35) await say(T(g.name, `${F('آفرین', 'afarin')}! Well done!`)); }
    else await say(`${T(g.name, 'Not quite. Remember:')} ${W(w)} = <b>${esc(w.en0)}</b>`);
  }
  const perfect = score === words.length;
  SND.fx(perfect ? 'badge' : 'good');
  await say([`You got ${B(score + ' / ' + words.length)}!`,
    perfect ? T(g.name, `*rings the bell* ${F('آفرین، پهلوان', 'afarin, pahlevan')}! A perfect round, champion!`)
      : score >= words.length / 2 ? T(g.name, 'Good strength. Come back and train again!') : T(g.name, `${F('آروم آروم', 'aroom aroom')}: slowly, slowly. Every champion started weak.`)]);
  const amt = score * 2 + (perfect ? 6 : 0);
  if (amt && S.team.length) {
    await say(`Your Lenguamon trained alongside you and gained ${amt} EXP. Points each!`);
    for (const m of S.team) await gymXp(m, amt);
  }
  if (perfect) { S.daftar += 2; await say(`${g.name} gave you 2 DAFTARS. You now have ${S.daftar}.`); }
  writeSave();
}
async function gymTalk(g) {
  const met = 'gym' + g.route;
  if (!S.flags[met]) {
    await say([T(g.name, `${F('خوش آمدید', 'khosh amadid')}! Welcome to the ${F('زورخانه', 'zoorkhaneh')}, the house of strength.`),
      'Here athletes swing the heavy meel clubs while I beat the drum and sing the Shahnameh, the Book of Kings.',
      `But you, young ${F('پهلوان', 'pahlevan')}, will train your WORDS.`]);
    S.flags[met] = true;
  }
  if (!S.team.length) { await say(T(g.name, 'First get a Lenguamon from Professor Haydeh. Then come train!')); return; }
  if (!(await ask(`${g.name}: Train on the words of ${esc(ROUTE_NAMES[g.route])}? ${GYM_ROUNDS} rounds.`))) { await say(T(g.name, `${F('باشه', 'bashe')}. The pit will be waiting.`)); return; }
  await say(T(g.name, '*BOOM, ba-da BOOM* goes the drum. Begin!'));
  await gymDrill(g);
}
for (const [m, g] of Object.entries(GYMS)) npc(m, { look: 'morshed', talk: () => gymTalk(g) });
npc('|', { look: 'pahlevan', dir: 'left', talk: async () => { await say([T('KAVEH', `In the zurkhaneh we greet each other with ${F('خسته نباشید', 'khasteh nabashid')}.`), '"May you not be tired." Say it to anyone who is working hard!']); } });
npc('_', { look: 'pahlevan', dir: 'right', talk: async () => { await say([T('BIZHAN', `When you train well, the morshed shouts ${F('آفرین', 'afarin')}!`), 'It means "well done!" You can say it to anyone.']); } });
npc(';', { look: 'pahlevan', dir: 'left', talk: async () => { await say([T('GIV', `${F('پهلوان', 'pahlevan')} means champion.`), 'A true pahlevan is strong AND kind. Be a pahlevan of words!']); } });
