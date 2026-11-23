// ===== LENGUAMON places: a teahouse and a zurkhaneh (traditional gym) in every city =====

// ---- teahouses in Isfahan and Shiraz, run by Agha Reza's brothers (or, for a girl hero, the brothers' wives) ----
async function teaHost(name, vest, lines) {
  await say(lines.map(l => T(name, l)));
  await teaScene(vest, name); await say(['Your Lenguamon drank chai and feel refreshed!', T(name, `${F('نوش جان', 'noosh-e jan')}! Enjoy!`)]);
  if (S.flags.starter && S.daftar < 5) { S.daftar = 5; SND.fx('good'); await say(`${name}: Take some DAFTARS too. You now have 5.`); }
}
npc('!', { look: 'hassan', lookG: 'parvin', talk: () => isGirl() ? teaHost('KHANOM PARVIN', null, [
  `${F('خوش اومدی', 'khosh oomadi')}, ${F('عزیزم', 'azizam')}! Welcome, dear! I am Khanom Parvin.`,
  'My sister-in-law Zari pours tea in Yazd. Mine is better, but do not tell her!',
  `A glass of ${F('چای', 'chai')} with ${F('گز', 'gaz')}, the nougat Isfahan is famous for?`]) : teaHost('AGHA HASSAN', null, [
  `${F('خوش اومدی', 'khosh oomadi')}! Welcome! I am Agha Hassan, Agha Reza's big brother.`,
  'Everyone in Isfahan says we look exactly alike. I say I am the handsome one!',
  `Sit, sit. A glass of ${F('چای', 'chai')}?`]) });
npc('$', { look: 'karim', lookG: 'shahla', talk: () => isGirl() ? teaHost('KHANOM SHAHLA', null, [
  `${F('سلام', 'salam')}, ${F('دخترم', 'dokhtaram')}! I am Khanom Shahla. My sisters-in-law Zari and Parvin pour tea in Yazd and Isfahan.`,
  'But here in Shiraz I put a little rosewater in the pot. Smell that!',
  `${F('بفرمایید', 'befarmaid')}, have a glass.`]) : teaHost('AGHA KARIM', null, [
  `${F('سلام', 'salam')}, traveller! I am Agha Karim. My brothers Reza and Hassan pour tea in Yazd and Isfahan.`,
  'But only Shiraz has tea this good. The roses make the air sweet!',
  `${F('بفرمایید', 'befarmaid')}, have a glass.`]) });

// ---- zurkhanehs: train on the words of each city ----
const GYMS = {
  '<': { route: 1, city: 'YAZD', boy: 'MORSHED JAMSHID', girl: 'MORSHED GORDAFARID' },
  '>': { route: 2, city: 'ISFAHAN', boy: 'MORSHED SOHRAB', girl: 'MORSHED TAHMINEH' },
  '?': { route: 3, city: 'SHIRAZ', boy: 'MORSHED ROSTAM', girl: 'MORSHED RUDABEH' },
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
async function gymTalk(g0) {
  const g = { ...g0, name: G(g0.boy, g0.girl) };
  const met = 'gym' + g.route;
  if (!S.flags[met]) {
    await say([T(g.name, `${F('خوش آمدید', 'khosh amadid')}! Welcome to the ${F('زورخانه', 'zoorkhaneh')}, the house of strength.`),
      'Here athletes swing the heavy meel clubs while I beat the drum and sing the Shahnameh, the Book of Kings.',
      ...(isGirl() ? ['I am named for Gordafarid, Tahmineh and Rudabeh, the brave women of the Shahnameh. This pit trains women too!'] : []),
      `But you, young ${F('پهلوان', 'pahlevan')}, will train your WORDS.`]);
    S.flags[met] = true;
  }
  if (!S.team.length) { await say(T(g.name, 'First get a Lenguamon from Professor Haydeh. Then come train!')); return; }
  if (!(await ask(`${g.name}: Train on the words of ${esc(ROUTE_NAMES[g.route])}? ${GYM_ROUNDS} rounds.`))) { await say(T(g.name, `${F('باشه', 'bashe')}. The pit will be waiting.`)); return; }
  await say(T(g.name, '*BOOM, ba-da BOOM* goes the drum. Begin!'));
  await gymDrill(g);
}
for (const [m, g] of Object.entries(GYMS)) npc(m, { look: 'morshed', lookG: 'morshedF', talk: () => gymTalk(g) });
npc('|', { look: 'pahlevan', lookG: 'pahlevanF', dir: 'left', talk: async () => { await say([T(G('KAVEH', 'KATAYOUN'), `In the zurkhaneh we greet each other with ${F('خسته نباشید', 'khasteh nabashid')}.`), '"May you not be tired." Say it to anyone who is working hard!']); } });
npc('_', { look: 'pahlevan', lookG: 'pahlevanF', dir: 'right', talk: async () => { await say([T(G('BIZHAN', 'MANIZHEH'), `When you train well, the morshed shouts ${F('آفرین', 'afarin')}!`), 'It means "well done!" You can say it to anyone.']); } });
npc(';', { look: 'pahlevan', lookG: 'pahlevanF', dir: 'left', talk: async () => { await say([T(G('GIV', 'FARANGIS'), `${F('پهلوان', 'pahlevan')} means champion.`), 'A true pahlevan is strong AND kind. Be a pahlevan of words!']); } });
