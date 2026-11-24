// ===== LENGUAMON trainers: people on every route who spot you and challenge you,
// a rival classmate who keeps coming back, and rematches after you rest =====
// [id, name, look, word type, challenge line, losing line, tip (html)]
const TRAINERS_FA = {
  world: [
    { route: 1, y: [49, 61], list: [
      ['neda', 'STUDENT NEDA', 'leila', 'CLASS', "I'm Professor Haydeh's top student! Let's see what you know!", 'Wow, you study hard!', () => `Ask for help in class: ${F('میشه کمکم کنی؟', 'mishe komakam koni?')} "can you help me?"`],
      ['hamid', 'CAMEL DRIVER HAMID', 'babak', 'GREET', 'Travelers always stop to chat on this road. Chat with me in Persian!', 'Ha! Your greetings are better than mine!', () => `In the desert we say ${F('خدا قوت', 'khoda ghovvat')} to anyone working hard: "may God give you strength".`],
      ['amir', 'POSTMAN AMIR', 'navid', 'QUES', 'I deliver letters AND questions! Answer mine!', 'All my questions, answered!', () => `To ask where something is: ${F('... کجاست؟', '... kojast?')} "where is ...?"`],
      ['sara', 'TOUR GUIDE SARA', 'parisa', 'BASIC', 'I show tourists around Yazd. Let me test your basics!', "You'd make a great tour guide!", () => `When you agree, say ${F('باشه', 'bashe')}: "okay".`],
    ] },
    { route: 2, y: [37, 46], list: [
      ['mehdi', 'CARPET SELLER MEHDI', 'dariush', 'SHOP', 'Every carpet has a price. Can you bargain in Persian?', 'Okay, okay, you get the friend price!', () => `To bargain, say ${F('تخفیف بدید', 'takhfif bedid')}: "give me a discount".`],
      ['zahra', 'SCHOOLGIRL ZAHRA', 'maryam', 'FAM', 'I have seven cousins! Do you know your family words?', 'You know more family words than my uncle!', () => `Your mother's brother is ${F('دایی', 'dayi')}, and your father's brother is ${F('عمو', 'amu')}.`],
      ['behrouz', 'WATCHMAKER BEHROUZ', 'farhad', 'TIME', 'Tick tock! Do you know your time words?', 'Right on time!', () => `To say "I'm late": ${F('دیرم شده', 'diram shodeh')}.`],
    ] },
    { route: 3, y: [14, 24], list: [
      ['parviz', 'CHEF PARVIZ', 'omid', 'FOOD', "Taste my words! They're spicy!", 'Delicious! You know your food words.', () => `After a good meal, say ${F('دستت درد نکنه', 'dastet dard nakone')}: "thank you" (literally "may your hand not hurt").`],
      ['laleh', 'POETRY FAN LALEH', 'golnaz', 'FEEL', 'Hafez wrote about every feeling. Can you name them?', 'Your heart speaks Persian!', () => `${F('دلم برات تنگ شده', 'delam barat tang shode')} means "I miss you": literally, "my heart has become tight for you".`],
      ['sina', 'WEATHERMAN SINA', 'arash', 'WEATHER', "Today's forecast: a 100% chance of battle!", 'Clear skies for you!', () => `${F('هوا خیلی گرمه', 'hava kheyli garme')}: "it's very hot". You'll say it a lot in a Shiraz summer!`],
      ['roya', 'PAINTER ROYA', 'leila', 'COLOR', "I paint with Persian colors. What's your favorite?", 'A masterpiece!', () => `Turquoise, the color of Isfahan's domes, is ${F('فیروزه‌ای', 'firuzei')}.`],
    ] },
  ],
  north: [
    { route: 4, y: [67, 88], list: [
      ['bahram', 'SHEPHERD BAHRAM', 'babak', 'NATURE', 'My sheep and I know every mountain word!', 'Even my sheep are impressed!', () => `A nomad's tent is a ${F('سیاه چادر', 'siah chador')}: a "black tent" woven from goat hair.`],
      ['nasim', 'HIKER NASIM', 'parisa', 'NATURE', 'Race you to the top! But first, a battle!', 'You climbed right over me!', () => `When you're out of breath: ${F('خسته شدم', 'khasteh shodam')}: "I'm tired".`],
      ['mansour', 'BUS DRIVER MANSOUR', 'navid', 'TRAVEL', 'Next stop: a battle! Tickets, please!', 'You can ride for free!', () => `To get off the bus: ${F('نگه دارید لطفا', 'negah darid lotfan')}: "please stop".`],
      ['tara', 'PHOTOGRAPHER TARA', 'maryam', 'TRAVEL', 'Say cheese! I mean... say it in Persian!', 'Picture perfect!', () => `To ask for a photo: ${F('میشه یه عکس بگیرید؟', 'mishe ye aks begirid?')}`],
    ] },
    { route: 5, y: [30, 44], list: [
      ['pejman', 'DEBATER PEJMAN', 'arash', 'TALK', "I'll argue with anyone. In Persian!", 'Fine. I agree with you!', () => `To disagree politely: ${F('من این‌طور فکر نمی‌کنم', 'man intor fekr nemikonam')}: "I don't think so".`],
      ['minoo', 'STARGAZER MINOO', 'nasrin', 'TALK', "The desert sky is full of stars, and I'm full of questions!", 'You shine brighter than the stars!', () => `"Star" is ${F('ستاره', 'setareh')}. It's also a popular girl's name.`],
      ['abbas', 'CARAVAN COOK ABBAS', 'omid', 'HOME', "Dinner's ready after we battle!", "You've earned your dinner!", () => `Say ${F('نوش جان', 'noosh-e jan')} to someone eating: "enjoy!"`],
      ['soheil', 'NIGHT GUARD SOHEIL', 'dariush', 'HOME', 'Nobody passes my post at night without a battle!', 'Okay, you can pass. Sleep well!', () => `Good night is ${F('شب بخیر', 'shab bekheir')}.`],
    ] },
    { route: 6, y: [5, 27], list: [
      ['akbar', 'TAXI DRIVER AKBAR', 'babak', 'CITY', 'Get in! The meter is running... and so is this battle!', 'Keep the change!', () => `To tell a taxi where to go: ${F('برو به ...', 'boro be ...')} "go to ...".`],
      ['shiva', 'OFFICE WORKER SHIVA', 'leila', 'CITY', 'I have five minutes before my meeting. Battle!', "Now I'm late for my meeting!", () => `${F('ترافیک', 'terafik')} is the same word in Persian, and Tehran has plenty of it!`],
      ['majid', 'TAAROF MASTER AGHA MAJID', 'mahmoud', 'TAAROF', "Please, you go first. No, no, I insist! ...Fine, I'll go first!", 'You are too kind. No, YOU are too kind!', () => `Taarof: if a shopkeeper says ${F('قابل نداره', 'ghabel nadare')} ("it's nothing"), politely insist on paying anyway!`],
    ] },
  ],
};
const TRAINERS_EN = {
  us: [
    { route: 1, y: [49, 61], list: [
      ['buck', 'TRUCKER BUCK', 'trucker', 'SMALLTALK', "Been driving this road for thirty years. Let's chat, partner!", "Well, I'll be! You talk like a local!", () => `Truckers say goodbye with ${E('drive safe!', 'با احتیاط رانندگی کن!')}`],
      ['skyler', 'HITCHHIKER SKYLER', 'surfer', 'PHRASAL', 'Hey! Can you give me a ride? Beat me in a battle first!', 'Cool. You picked that up fast!', () => `${E('give someone a ride', 'کسی را با ماشین رساندن')}: "Can you give me a ride to town?"`],
      ['donna', 'MOTEL CLERK DONNA', 'waitress2', 'SMALLTALK', "Checking in? You'll have to battle me first, hon.", "Your room's on the house!", () => `At a hotel, ask ${E('what time is checkout?', 'ساعت تحویل اتاق کیه؟')}`],
      ['jordan', 'CYCLIST JORDAN', 'tech', 'PHRASAL', "I'm biking coast to coast! Let's take a break and battle!", 'You wore me out!', () => `${E("I'm worn out", 'خیلی خسته‌ام')} means you are very tired.`],
    ] },
    { route: 2, y: [37, 46], list: [
      ['kai', 'STARTUP INTERN KAI', 'tech', 'WORK', "I'm crushing it at my internship! Let's circle back... to a battle!", "Okay, let's take this offline.", () => `${E("let's take this offline", 'بیا این موضوع رو جداگانه حرف بزنیم')}: office talk for "let's discuss it later, just us".`],
      ['grace', 'BANK TELLER GRACE', 'golnaz', 'MONEY', 'Next in line! Deposit, withdrawal... or battle?', 'Your account is in great shape!', () => `At the bank: ${E("I'd like to withdraw some cash", 'می‌خوام کمی پول نقد برداشت کنم')}`],
      ['marco', 'TOUR GUIDE MARCO', 'cabbie', 'WORK', "Welcome to San Francisco! Today's tour includes... a battle!", 'Best tourist ever!', () => `${E("it's worth a visit", 'ارزش دیدن داره')}: "Alcatraz is worth a visit."`],
    ] },
    { route: 3, y: [14, 24], list: [
      ['chase', 'SURFER CHASE', 'surfer', 'FEELINGS', "Dude! The waves are gnarly today. Let's battle!", 'Totally stoked for you, dude!', () => `${E("I'm stoked", 'خیلی هیجان‌زده و خوشحالم')}: very excited and happy.`],
      ['jade', 'PODCASTER JADE', 'tech', 'OPINION', "Welcome to my podcast! Today's guest is you. Let's debate!", 'Great episode! Like and subscribe!', () => `${E("that's a hot take", 'نظر جنجالی‌ایه')}: a surprising or controversial opinion.`],
      ['olivia', 'DEBATE CAPTAIN OLIVIA', 'parisa', 'OPINION', "I've never lost an argument. Prove me wrong!", 'I stand corrected.', () => `${E('I stand corrected', 'حق با شماست، اشتباه کردم')}: a polite way to admit you were wrong.`],
      ['river', 'POET RIVER', 'surfer', 'FEELINGS', 'The ocean makes me feel... like battling!', 'You moved me.', () => `${E('it touched my heart', 'به دلم نشست')}`],
    ] },
  ],
  usnorth: [
    { route: 4, y: [67, 88], list: [
      ['tess', 'PARK RANGER TESS', 'ranger', 'OUTDOORS', 'Stay on the trail! And battle me while you are at it!', 'You know your way around the outdoors!', () => `Every park has signs that say ${E("don't feed the wildlife", 'به حیوانات وحشی غذا نده')}`],
      ['gary', 'RV DAD GARY', 'trucker', 'ROADTRIP', "Kids, look! A trainer! Let's battle before lunch!", "Back in the RV, kids. We lost.", () => `Every kid in the back seat asks ${E('are we there yet?', 'هنوز نرسیدیم؟')}`],
      ['dev', 'ROCK CLIMBER DEV', 'tech', 'OUTDOORS', "I just climbed that cliff. You're next!", "You've got a solid grip on English!", () => `${E('get a grip', 'به خودت مسلط باش')}: "calm down and take control".`],
      ['moe', 'BIKER MOE', 'biker', 'ROADTRIP', 'Nice ride. Wanna race? No? Then battle!', 'Respect. Ride safe.', () => `${E('ride safe', 'با احتیاط برون')}: what bikers say instead of goodbye.`],
    ] },
    { route: 5, y: [30, 44], list: [
      ['brenda', 'NURSE BRENDA', 'nasrin', 'HEALTH', "Let me check your vocabulary. Say 'ah'!", 'A clean bill of health!', () => `${E('a clean bill of health', 'سلامت کامل از نظر پزشک')}: the doctor says you are healthy.`],
      ['hank', 'FARMER HANK', 'babak', 'ERRANDS', 'Chores can wait. Time for a battle!', "Well, I'll be darned!", () => `${E("I've got chores to do", 'کلی کار خونه دارم')}`],
      ['luis', 'MAIL CARRIER LUIS', 'navid', 'ERRANDS', 'Special delivery: one battle, signed and sealed!', 'Return to sender!', () => `${E('sign for a package', 'رسید بسته را امضا کردن')}`],
      ['amy', 'PHARMACIST AMY', 'maryam', 'HEALTH', 'Take two battles and call me in the morning!', "You're just what the doctor ordered!", () => `${E('take it with food', 'همراه غذا بخور')}: what the pharmacist says about medicine.`],
    ] },
    { route: 6, y: [5, 27], list: [
      ['sal', 'HOT DOG VENDOR SAL', 'cabbie', 'NYC', "Hey, I'm walkin' here! Ya wanna battle?", 'Fuhgeddaboudit! You win!', () => `New Yorkers shout ${E("I'm walking here!", 'دارم از اینجا رد می‌شم!')} at cars that block the crosswalk.`],
      ['nikki', 'STAND-UP COMIC NIKKI', 'leila', 'IDIOM', 'Two words walk into a bar... and into a battle!', 'You killed it out there!', () => `${E('you killed it', 'ترکوندی / عالی بود')}: you did a great job.`],
      ['jay', 'BREAKDANCER JAY', 'boxer', 'SLANG', "Yo! Let's battle, for real!", "No cap, you're legit!", () => `${E("you're legit", 'تو واقعاً کاربلدی')}: you're the real deal.`],
    ] },
  ],
};
// the rival: five meetings, one in each city before its boss
const RIVAL_SPOTS = { fa: [['world', 60, 'starter'], ['world', 44, 'b1'], ['world', 11, 'b2'], ['north', 62, 'b3'], ['north', 26, 'b4']], en: [['us', 60, 'starter'], ['us', 44, 'b1'], ['us', 11, 'b2'], ['usnorth', 62, 'b3'], ['usnorth', 26, 'b4']] };
const RIVAL_LINES = [
  ['Hey, {N}! Professor Haydeh gave you a Lenguamon too? Mine is better. Let\'s see who studied harder!', "What?! Fine, you got lucky. I'll be ready next time!"],
  ['There you are! I practiced every night. My Lenguamon know all the words YOU keep missing!', 'Hmph. You actually learned them. Not bad...'],
  ['{N}! I made it here first. Ready to lose?', 'Okay, okay. You are good. But the next city is mine!'],
  ["I've been studying flashcards the whole way here. One more time!", 'You beat me again... Maybe we should study together sometime.'],
  ['This is it, {N}. One last battle before the big city. No holding back!', "...You won. Honestly? You're the best student Haydeh ever had. Go beat that villain!"],
];
Object.assign(LOOKS, {
  rival: { skin: '#f0c49c', hair: '#3a2a1a', hairStyle: 'swoop', top: '#c83a3a', top2: '#8a1e1e', tee: '#2a2a2e', legs: '#3a4a6a', kicks: '#f4f4f0' },
  rivalF: { skin: '#f0c49c', hair: '#5a2a1a', hairStyle: 'long', top: '#7a4ac8', top2: '#4a2a8a', tee: '#f4f0e8', legs: '#2a2a3a', kicks: '#f4f4f0', hoops: true },
});
const rivalName = () => LANG === 'en' ? G('TYLER', 'MADISON') : G('DARIUSH', 'DORSA');
const trState = id => ((S.tr || (S.tr = {}))[id] || (S.tr[id] = {}));

// ---- create the trainer NPCs and stand them beside the road ----
const TRAINER_NPCS = [];
function placeTrainers() {
  for (const [maps, lang] of [[TRAINERS_FA, 'fa'], [TRAINERS_EN, 'en']]) {
    for (const [mapId, groups] of Object.entries(maps)) {
      const m = MAPS[mapId]; if (!m) continue;
      for (const g of groups) {
        g.list.forEach((t, i) => {
          const [id, name, look, type, hello, lose, tip] = t;
          const side = i % 2 ? 1 : -1, x = side < 0 ? 7 : 12;
          const yT = Math.round(g.y[0] + (i + .5) * (g.y[1] - g.y[0]) / g.list.length);
          const spot = findSpot(m, x, yT, side);
          if (!spot) return;
          const marker = `tr:${lang}:${id}`;
          NPC_POS[marker] = { map: mapId, x: spot.x, y: spot.y };
          const n = { marker, look, dir: side < 0 ? 'right' : 'left', fixed: false,
            tr: { id: lang + ':' + id, name, type, hello, lose, tip, route: g.route, lang } };
          n.talk = () => trainerTalk(n);
          NPCS.push(n); TRAINER_NPCS.push(n);
        });
      }
    }
  }
  for (const lang of ['fa', 'en']) RIVAL_SPOTS[lang].forEach(([mapId, y, need], k) => {
    const m = MAPS[mapId]; if (!m) return;
    let x = 10, yy = y; for (let d = 0; d < 4; d++) { if (!tileSolid(m, 10, y + d)) { yy = y + d; break; } if (!tileSolid(m, 10, y - d)) { yy = y - d; break; } }
    const marker = `rival:${lang}:${k}`;
    NPC_POS[marker] = { map: mapId, x, y: yy };
    const n = { marker, look: 'rival', dir: 'down', rival: { stage: k, need, lang } };
    Object.defineProperty(n, 'look', { get: () => (isGirl() ? 'rivalF' : 'rival') });
    n.hidden = () => LANG !== lang || (S.rival || 0) !== k || !S.flags[need] || !S.team.length;
    n.talk = () => rivalBattle(n);
    NPCS.push(n); TRAINER_NPCS.push(n);
  });
}
// terrain only (no save is loaded yet when trainers are placed)
function tileSolid(m, x, y) { if (x < 0 || y < 0 || x >= m.w || y >= m.h) return true; const t = TILE[m.grid[y][x]]; return !t || !!t.solid; }
const npcBaseAt = (m, x, y) => Object.values(NPC_POS).some(p => p.map === m.id && p.x === x && p.y === y);
function findSpot(m, x, y, side) {
  const ok = (xx, yy) => {
    if (yy < 1 || yy >= m.h - 1 || tileSolid(m, xx, yy) || npcBaseAt(m, xx, yy)) return false;
    const ch = m.grid[yy][xx]; if (ch === '=' || (m.doors && Object.values(m.doors).some(d => Math.abs(d.x - xx) + Math.abs(d.y - yy) < 2))) return false;
    if (m.grid[yy - 1] && 'F'.includes(m.grid[yy - 1][xx])) return false;
    for (let k = 1; k <= 2; k++) if (tileSolid(m, xx - side * k, yy)) return false;   // a clear line of sight to the road
    return true;
  };
  for (let d = 0; d <= 4; d++) for (const yy of [y + d, y - d]) if (ok(x, yy)) return { x, y: yy };
  return null;
}

// ---- line of sight: after every step, can a trainer see you? ----
function sightHit(n) {
  if (n.hidden && n.hidden()) return false;
  if (n.tr && (n.tr.lang !== LANG || ((S.tr || {})[n.tr.id] || {}).won)) return false;
  const p = npcPos(n); if (!p || p.map !== curMap.id) return false;
  const [dx, dy] = DIRS[n.dir], wide = !!n.rival;
  for (let k = 1; k <= 4; k++) {
    for (const off of wide ? [0, -1, 1] : [0]) {
      const x = p.x + dx * k + (dx ? 0 : off), y = p.y + dy * k + (dy ? 0 : off);
      if (x === PL.x && y === PL.y) return true;
    }
    const cx = p.x + dx * k, cy = p.y + dy * k;
    if (!(cx === PL.x && cy === PL.y) && solidAt(curMap, cx, cy)) return false;
  }
  return false;
}
async function checkTrainers() {
  if (S.flags.noEnc || !S.team.length || !S.team.some(m => m.hp > 0)) return false; // sightseeing mode: nobody stops you
  const n = TRAINER_NPCS.find(sightHit); if (!n) return false;
  await run(() => trainerSpotted(n));
  return true;
}
async function trainerSpotted(n) {
  SND.fx('encounter'); n.alert = true; drawWorld(); await sleep(750); n.alert = false;
  // walk up to the hero
  const p0 = npcPos(n), [dx, dy] = DIRS[n.dir];
  let x = p0.x, y = p0.y;
  const tx = PL.x - dx, ty = PL.y - dy;
  while (x !== tx || y !== ty) {
    if (dx ? x !== tx : y !== ty) { x += Math.sign(tx - x) * (dx ? 1 : 0); y += Math.sign(ty - y) * (dy ? 1 : 0); }
    else { x += Math.sign(tx - x); y += Math.sign(ty - y); }
    n.tmp = { x, y }; drawWorld(); await sleep(150);
  }
  PL.dir = { up: 'down', down: 'up', left: 'right', right: 'left' }[n.dir]; S.dir = PL.dir; drawWorld();
  try { await (n.rival ? rivalBattle(n) : trainerBattleFor(n, false)); } finally { n.tmp = null; }
}

// ---- teams ----
function trainerTeam(n, rematch) {
  const t = n.tr, r = rng(hashStr(t.id));
  let pool = WORDS.filter(w => w.route === t.route && w.type === t.type);
  if (pool.length < 3) pool = WORDS.filter(w => w.route === t.route);
  pool = pool.slice().sort((a, b) => a.level - b.level);
  const size = t.route >= 4 ? 3 : 2, out = [];
  for (let i = 0; i < size && pool.length; i++) out.push(pool.splice(Math.floor(r() * pool.length), 1)[0]);
  const lead = Math.max(...S.team.map(m => m.lvl));
  return out.map(w => ({ w, lvl: rematch ? Math.max(w.level, lead) + 3 : w.level }));
}
function rivalTeam(stage) {
  const lead = Math.max(...S.team.map(m => m.lvl)), size = Math.min(2 + stage, 5);
  // the words you miss most, then words from the road ahead
  const missed = Object.entries(S.stats || {}).filter(([k, s]) => WORD[k] && s[1] > 0).sort((a, b) => (b[1][1] - b[1][0]) - (a[1][1] - a[1][0])).map(([k]) => WORD[k]);
  const route = [1, 2, 3, 5, 6][stage];
  const fill = shuffle(WORDS.filter(w => w.route === route));
  const words = [...new Set([...missed.slice(0, size), ...fill])].slice(0, size);
  return words.map((w, i) => ({ w, lvl: Math.max(w.level, lead - 1 + stage + (i === words.length - 1 ? 2 : 0)) }));
}

// ---- talking to trainers ----
async function trainerTalk(n) {
  const t = n.tr, st = trState(t.id);
  if (!st.won) { await trainerBattleFor(n, false); return; }
  const rest = S.rest || 0;
  if (st.rem !== rest && S.team.some(m => m.hp > 0)) {
    if (await ask(`${t.name}: You again! I've been practicing. Want a rematch?`)) { await trainerBattleFor(n, true); return; }
  }
  await say([T(t.name, t.tip()), ...(st.rem === rest ? ['(Rest at a teahouse or café, and they will be ready for a rematch.)'.replace('teahouse or café', LANG === 'en' ? 'café' : 'teahouse')] : [])]);
}
async function trainerBattleFor(n, rematch) {
  const t = n.tr, st = trState(t.id);
  await say(T(t.name, rematch ? "This time I won't hold back!" : t.hello));
  const won = await trainerBattle({ name: t.name, short: t.name.split(' ').slice(-1)[0] }, trainerTeam(n, rematch), 'battle');
  if (!won) return;
  if (rematch) st.rem = S.rest || 0; else { st.won = true; st.rem = S.rest || 0; S.daftar += 1; }
  await say([T(t.name, t.lose), T(t.name, t.tip()), ...(rematch ? [] : [`${esc(t.name)} gave you a ${DAF()}. You have ${S.daftar}.`])]);
  writeSave();
}
async function rivalBattle(n) {
  const k = n.rival.stage, name = rivalName(), [hello, lose] = RIVAL_LINES[k];
  await say(T(name, hello.replace('{N}', esc(S.name))));
  const won = await trainerBattle({ name: `${name}, YOUR RIVAL`, short: name, prize: 30 + k * 10 }, rivalTeam(k), 'boss');
  if (!won) { await say(T(name, "Ha! I knew I'd win. Go study, then come find me again!")); return; }
  S.rival = k + 1; S.daftar += 3;
  await say([T(name, lose), `${esc(name)} gave you 3 ${DAF()}S. You have ${S.daftar}.`]);
  writeSave();
}

// ---- the trainer battle: like a wild battle, but no catching or running, and a whole team ----
async function trainerBattle(tr, team, music) {
  if (!S.team.some(m => m.hp > 0)) return false;
  BT.trainer = { ...tr, left: team.length, total: team.length }; BT.boss = null; BT.me = lead();
  const mk = o => ({ w: o.w, lvl: o.lvl, max: maxHp(o.lvl), hp: maxHp(o.lvl) });
  BT.foe = mk(team[0]);
  await battleIntro(music);
  await say(`${esc(tr.name)} wants to battle!`);
  for (let i = 0; i < team.length; i++) {
    const w = team[i].w; S.seen[w.key] = true;
    if (i) { BT.foe = mk(team[i]); bDraw(); }
    await say(`${esc(tr.short)} sent out ${B(w.name)}!`);
    if (!i) await say(`Go! ${B(monW(BT.me).name)}!`);
    let first = true, menuIdx = 0;
    while (true) {
      bDraw();
      let r = 0;
      if (!first) {
        await say(`What will ${esc(monW(BT.me).name)} do?`, { keep: true });
        r = await choose(['FIGHT', 'TEAM', 'BAG'], { cols: 2, cls: 'bmenu', cancel: false, start: menuIdx }); hideText(); menuIdx = r;
        if (r === 2) { if (await useFoodMenu(true)) { if (!(await foeTurn(true, null))) { BT.trainer = null; await blackout(); return false; } } continue; }
      }
      if (r === 1) {
        const j = await teamScreen(true);
        if (j === null || j < 0 || S.team[j] === BT.me) continue;
        await say(`Come back, ${esc(monW(BT.me).name)}! Go, ${esc(monW(S.team[j]).name)}!`);
        BT.me = S.team[j]; bDraw();
        if (!(await foeTurn(true, null))) { BT.trainer = null; await blackout(); return false; }
        continue;
      }
      const rv = !first && rand() < 0.3 ? reviewWord(w) : null;
      first = false;
      const qw = rv || w, q = makeQuestion(qw, 'en2fa');
      const res = await quiz(q, `${esc(monW(BT.me).name)} attacks!`);
      stat(qw, res.ok);
      if (res.ok) {
        const crit = res.ms < 5000, dmg = dmgRoll(5 + BT.me.lvl * 0.9) * (crit ? 1.5 : 1) | 0;
        await say(`${esc(monW(BT.me).name)} used ${W(monW(BT.me))}!`);
        await strike('me', true, dmg, crit);
        BT.foe.hp = Math.max(0, BT.foe.hp - dmg); bDraw();
        if (crit) await say('Quick answer! A critical hit!');
        if (BT.foe.hp <= 0) {
          SND.fx('faint'); await anim('#b-foe-spr', 'faint', 600);
          BT.trainer.left--; bDraw();
          await say([`${esc(tr.short)}'s ${esc(w.name)} fainted!`, `It was carrying the word ${W(w)} = "${M(w)}".`]);
          await gainXp(BT.me, 5 + BT.foe.lvl * 3);
          break;
        }
      } else {
        await strike('me', false); await say([`${esc(monW(BT.me).name)}'s attack missed!`, `The answer was ${q.answerHtml}.`]);
      }
      if (!(await foeTurn(res.ok, q))) { BT.trainer = null; await blackout(); return false; }
    }
  }
  SND.fx('badge');
  await say(`You defeated ${esc(tr.name)}!`);
  await earn(tr.prize || team.reduce((a, o) => a + 3 + Math.floor(o.lvl / 3), 0), `${esc(tr.short)} paid you`);
  BT.trainer = null; writeSave(); await battleOutro();
  return true;
}
