// ===== LENGUAMON places: a teahouse and a zurkhaneh (traditional gym) in every city =====

// ---- teahouses in Isfahan and Shiraz, run by Agha Reza's brothers (or, for a girl hero, the brothers' wives) ----
async function teaHost(name, vest, lines) {
  S.rest = (S.rest || 0) + 1;
  await say(lines.map(l => T(name, l)));
  await teaScene(vest, name);
  await say(LANG === 'en' ? ['Your Lenguamon had a coffee and feel refreshed!', T(name, 'Enjoy! Come back anytime.')] : ['Your Lenguamon drank chai and feel refreshed!', T(name, `${F('نوش جان', 'noosh-e jan')}! Enjoy!`)]);
  if (S.flags.starter && S.daftar < 5) { S.daftar = 5; SND.fx('good'); await say(`${name}: Take some ${DAF()}S too. You now have 5.`); }
  await shopMenu(name);
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
  'μ': { route: [4, 5], city: 'KASHAN', boy: 'MORSHED ZAL', girl: 'MORSHED FARANAK' },
  'π': { route: 6, city: 'TEHRAN', boy: 'MORSHED FEREYDOUN', girl: 'MORSHED SINDOKHT' },
  'ζ': { route: 7, city: 'MASHHAD', boy: 'MORSHED ARDESHIR', girl: 'MORSHED PARIDOKHT' },
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
  await maybeEvolve(m);
}
async function gymDrill(g) {
  const words = gymWords(g.route);
  let score = 0;
  for (let i = 0; i < words.length; i++) {
    const w = words[i]; hideText();
    const res = await quiz(makeQuestion(w, 'en2fa'), `${g.city} ${g.gym || 'ZURKHANEH'} · ROUND ${i + 1}/${words.length} · ${score} ✓`);
    stat(w, res.ok); S.seen[w.key] = true;
    if (res.ok) { score++; if (i < words.length - 1 && rand() < 0.35) await say(T(g.name, g.gym ? pick(['Nice jab!', 'Good job!', 'Keep it up, champ!']) : `${F('آفرین', 'afarin')}! Well done!`)); }
    else await say(`${T(g.name, 'Not quite. Remember:')} ${W(w)} = <b>${M(w)}</b>`);
  }
  const perfect = score === words.length;
  SND.fx(perfect ? 'badge' : 'good');
  await say([`You got ${B(score + ' / ' + words.length)}!`,
    perfect ? T(g.name, g.gym ? '*DING DING DING* That\'s a knockout! A perfect round, champ!' : `*rings the bell* ${F('آفرین، پهلوان', 'afarin, pahlevan')}! A perfect round, champion!`)
      : score >= words.length / 2 ? T(g.name, 'Good work. Come back and train again!') : T(g.name, g.gym ? 'Hang in there. Every champ started as a rookie.' : `${F('آروم آروم', 'aroom aroom')}: slowly, slowly. Every champion started weak.`)]);
  const amt = score * 2 + (perfect ? 6 : 0);
  if (amt && S.team.length) {
    await say(`Your Lenguamon trained alongside you and gained ${amt} EXP. Points each!`);
    for (const m of S.team) await gymXp(m, amt);
  }
  if (perfect) { S.daftar += 2; await say(`${g.name} gave you 2 ${DAF()}S. You now have ${S.daftar}.`); }
  writeSave();
}
async function gymTalk(g0) {
  const g = { ...g0, name: G(g0.boy, g0.girl) };
  const left = gymTrainersLeft(curMap.id);
  if (left) { await say([T(g.name, LANG === 'en' ? `Not so fast! Beat my ${left === 3 ? 'three boxers' : left === 1 ? 'last boxer' : left + ' boxers'} first, then we'll train.` : `${F('صبر کن', 'sabr kon')}! Beat my ${left === 3 ? 'three athletes' : left === 1 ? 'last athlete' : left + ' athletes'} first, then we will train.`)]); return; }
  if (Array.isArray(g0.route)) {
    await say(T(g.name, 'Which words shall we train today?'), { keep: true });
    const r = await choose(g0.route.map(x => ROUTE_NAMES[x]), { cls: 'yn' }); hideText();
    if (r < 0) return;
    g.route = g0.route[r];
  }
  const met = 'gym' + g0.city;
  if (!S.flags[met] && g.gym) {
    await say([T(g.name, `Welcome to the gym, ${isGirl() ? 'kid' : 'kid'}! ${PF('به باشگاه خوش اومدی!')}`), 'Boxers here train their fists. You will train your WORDS.', 'Eight rounds. I say a word in Persian, you type it in English. Fast and sharp, like a jab!']);
    S.flags[met] = true;
  }
  if (!S.flags[met]) {
    await say([T(g.name, `${F('خوش آمدید', 'khosh amadid')}! Welcome to the ${F('زورخانه', 'zoorkhaneh')}, the house of strength.`),
      'Here athletes swing the heavy meel clubs while I beat the drum and sing the Shahnameh, the Book of Kings.',
      ...(isGirl() ? ['I am named for Gordafarid, Tahmineh and Rudabeh, the brave women of the Shahnameh. This pit trains women too!'] : []),
      `But you, young ${F('پهلوان', 'pahlevan')}, will train your WORDS.`]);
    S.flags[met] = true;
  }
  if (!S.team.length) { await say(T(g.name, 'First get a Lenguamon from Professor Haydeh. Then come train!')); return; }
  if (!(await ask(`${g.name}: Train on the words of ${esc(ROUTE_NAMES[g.route])}? ${GYM_ROUNDS} rounds.`))) { await say(T(g.name, g.gym ? 'Alright. The ring will be waiting.' : `${F('باشه', 'bashe')}. The pit will be waiting.`)); return; }
  await say(T(g.name, g.gym ? '*DING DING* Round one. Let\'s go!' : '*BOOM, ba-da BOOM* goes the drum. Begin!'));
  await gymDrill(g);
}
for (const [m, g] of Object.entries(GYMS)) npc(m, { look: 'morshed', lookG: 'morshedF', talk: () => gymTalk(g) });
npc('ν', { look: 'pahlevan', lookG: 'pahlevanF', dir: 'left', talk: async () => { await say([T(G('SIAVASH', 'HOMA'), `Before we swing the clubs, the morshed rings the bell and we all say ${F('یا علی', 'ya ali')}.`), `After training, tired friends say ${F('خدا قوت', 'khoda ghovvat')}: "may God give you strength."`]); } });
npc('ρ', { look: 'pahlevan', lookG: 'pahlevanF', dir: 'right', talk: async () => { await say([T(G('ESFANDIAR', 'AZADEH'), `In Tehran everyone is in a hurry: ${F('زود باش', 'zood bash')}! Hurry up!`), `But in the zurkhaneh we say ${F('آروم آروم', 'aroom aroom')}: slowly, slowly. Strength takes time.`]); } });
npc('κ', { look: 'javad', lookG: 'goli', talk: () => isGirl() ? teaHost('KHANOM GOLI', null, [`${F('سلام', 'salam')}, ${F('دخترم', 'dokhtaram')}! Welcome to Kashan. I am Khanom Goli.`, 'Smell that? I put a drop of our famous Kashan rosewater in every glass.', `${F('بفرمایید', 'befarmaid')}!`]) : teaHost('AGHA JAVAD', null, [`${F('خوش اومدی', 'khosh oomadi')}! I am Agha Javad, cousin of Agha Reza from Yazd.`, 'Our whole family pours tea, from Yazd all the way to Tehran!', 'Here in Kashan we add a drop of rosewater. Try it!']) });
npc('τ', { look: 'masoud', lookG: 'mahin', talk: () => isGirl() ? teaHost('KHANOM MAHIN', null, [`${F('خسته نباشی', 'khasteh nabashi')}, ${F('عزیزم', 'azizam')}! Tehran is exhausting, isn't it?`, 'I am Khanom Mahin. Sit down, forget the traffic, and have a glass of chai.']) : teaHost('AGHA MASOUD', null, [`${F('خسته نباشی', 'khasteh nabashi')}! Tehran traffic, eh?`, 'I am Agha Masoud. My grandfather poured tea for the storytellers of old Tehran. Sit, sit.']) });
npc('|', { look: 'pahlevan', lookG: 'pahlevanF', dir: 'left', talk: async () => { await say([T(G('KAVEH', 'KATAYOUN'), `In the zurkhaneh we greet each other with ${F('خسته نباشید', 'khasteh nabashid')}.`), '"May you not be tired." Say it to anyone who is working hard!']); } });
npc('_', { look: 'pahlevan', lookG: 'pahlevanF', dir: 'right', talk: async () => { await say([T(G('BIZHAN', 'MANIZHEH'), `When you train well, the morshed shouts ${F('آفرین', 'afarin')}!`), 'It means "well done!" You can say it to anyone.']); } });
npc(';', { look: 'pahlevan', lookG: 'pahlevanF', dir: 'left', talk: async () => { await say([T(G('GIV', 'FARANGIS'), `${F('پهلوان', 'pahlevan')} means champion.`), 'A true pahlevan is strong AND kind. Be a pahlevan of words!']); } });

// ---- Mashhad: teahouse, zurkhaneh and elder ----
npc('ς', { look: 'pahlevan', lookG: 'pahlevanF', dir: 'left', talk: async () => { await say([T(G('FARAMARZ', 'ROXANA'), `In Khorasan the old heroes of the Shahnameh are everywhere. A strong person is called ${F('رستم', 'rostam')}!`), `When you finish a hard job, say ${F('موفق شدم', 'movafagh shodam')}: "I made it!"`]); } });
npc('ξ', { look: 'javad', lookG: 'goli', talk: () => isGirl()
  ? teaHost('KHANOM SOODABEH', null, [`${F('خوش اومدی', 'khosh oomadi')}, ${F('دخترم', 'dokhtaram')}! Welcome to Mashhad!`, `Try your chai with ${F('نبات', 'nabat')}, saffron rock candy. Mashhad is famous for it.`, `${F('بفرمایید', 'befarmaid')}!`])
  : teaHost('AGHA YOUSEF', null, [`${F('خوش اومدی', 'khosh oomadi')}! You came all the way to Mashhad? ${F('خسته نباشی', 'khasteh nabashi')}!`, `Here, stir some ${F('نبات', 'nabat')} into your chai. Saffron rock candy, a Mashhad speciality.`, `${F('نوش جان', 'noosh-e jan')}!`]) });
npc('ϗ', { look: 'elder', lookG: 'elderF', dir: 'left', talk: () => elderTalk(5, G('AGHA MANOUCHEHR', 'KHANOM FARZANEH'), G(`I have read the Shahnameh aloud in this teahouse for fifty years. Sit, and take the last sayings of the road.`, `My grandmother knew the whole Shahnameh by heart. Sit, my dear, and take the last sayings of the road.`)) });
