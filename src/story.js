// ===== LENGUAMON story: NPCs, intro, title, ending =====
const T = (who, html) => `${who}: ${html}`;
function nextGoal() {
  if (!S.flags.starter) return 'Visit Professor Haydeh at the school.';
  if (!S.flags.b1) return `Catch at least ${BOSSES.b1.need} words on the ${ROUTE_NAMES[1]} (you have ${caughtInRoute(1)}), then get past the BASIJ CHECKPOINT on the way to Isfahan.`;
  if (!S.flags.b2) return `Catch at least ${BOSSES.b2.need} words in ${ROUTE_NAMES[2]} (you have ${caughtInRoute(2)}), then get past the IRGC COMMANDER on the road to Shiraz.`;
  if (!S.flags.b3) return `Catch at least ${BOSSES.b3.need} words on the ${ROUTE_NAMES[3]} (you have ${caughtInRoute(3)}), then defeat THE CENSOR at the tomb of Hafez in Shiraz.`;
  if (!S.flags.b4) return `Follow THE CENSOR north through the Zagros Mountains, past Persepolis and Kashan. Catch at least ${BOSSES.b4.need} words in the ${ROUTE_NAMES[5]} (you have ${caughtInRoute(5)}), then get past the STATE TV ANCHOR at the gate of Tehran.`;
  if (!S.flags.b5) return `Catch at least ${BOSSES.b5.need} words in ${ROUTE_NAMES[6]} (you have ${caughtInRoute(6)}), then face THE CENSOR at Milad Tower.`;
  return `You beat the game! Keep filling your Lenguadex: ${caughtCount()} / ${WORDS.length}.`;
}
async function healScene(who) {
  SND.fx('heal'); healTeam(); await fade(true, 200); await sleep(250); await fade(false, 200);
}

npc('x', { look: 'maman', dir: 'left', talk: async () => {
  if (!S.flags.starter) { await say([T('MAMAN', `${F('صبح بخیر', 'sobh bekheir')}, ${nm()} jan! Good morning!`), 'Professor Haydeh is looking for you. Her school is across the square, just to the east.', `Don't forget: say ${F('سلام', 'salam')} when you walk in!`]); return; }
  await say(T('MAMAN', `${nm()} jan, you look tired. ${F('خسته نباشی', 'khasteh nabashi')}! Rest a little.`));
  await healScene(); await say(['Your Lenguamon are full of energy!', T('MAMAN', `${F('موفق باشی', 'movafagh bashi')}! Good luck!`)]);
} });
npc('y', { look: 'haydeh', talk: async () => {
  if (!S.flags.starter) { await starterScene(); return; }
  if (S.flags.b5 && !S.flags.ending) { await endingScene(); return; }
  await say([T('HAYDEH', `${F('سلام', 'salam')}, ${nm()}! How is your Lenguadex?`), `You have caught ${B(caughtCount())} words.`, `NEXT: ${nextGoal()}`]);
  if (S.daftar < 5) { S.daftar = 5; SND.fx('good'); await say('HAYDEH: Take some fresh DAFTARS. You now have 5.'); }
} });
npc('z', { look: 'arash', lookG: 'ava', dir: 'up', talk: async () => {
  await say([T(G('ARASH', 'AVA'), `I'm practising for the Basij checkpoint. They ask so many questions!`), `Did you know ${F('چشم', 'chashm')} means EYE, but people also say it to mean "sure, will do"?`, 'Persian is full of surprises!']);
} });
npc('r', { look: 'reza', lookG: 'zari', talk: () => isGirl()
  ? teaHost('KHANOM ZARI', null, [`${F('بفرمایید', 'befarmaid')}, ${F('دخترم', 'dokhtaram')}! Come in, my daughter!`, `I am Khanom Zari, Agha Reza's wife. He is at the bazaar, so today I pour the ${F('چای', 'chai')}.`, 'Sit, sit. You look like you need a glass.'])
  : teaHost('AGHA REZA', null, [`${F('بفرمایید', 'befarmaid')}! Welcome to my ${F('چای‌خانه', 'chaykhaneh')}, the teahouse. A glass of chai?`]) });
npc('j', { look: 'mahmoud', lookG: 'grandma', dir: 'left', talk: () => elderTalk(0, G('AGHA MAHMOUD', 'MAMAN BOZORG'), G(`${F('سلام', 'salam')}, my child. Old men like me collect sayings the way you collect words.`, `I am everyone's ${F('مامان بزرگ', 'maman bozorg')}, grandma! Come, sit with me.`)) });
npc('9', { look: 'babak', lookG: 'bahar', where: () => S.flags.starter ? [8, 63] : null, talk: async () => {
  if (!S.flags.starter) { await say([T(G('AGHA BABAK', 'KHANOM BAHAR'), `${F('صبر کن', 'sabr kon')}! Wait!`), 'Wild Lenguamon live in the tall grass up north. You need your own Lenguamon first!', 'Go see Professor Haydeh at the school.']); return; }
  await say(T(G('AGHA BABAK', 'KHANOM BAHAR'), `The path is open. ${F('موفق باشی', 'movafagh bashi')}! Good luck!`));
} });
npc('s', { look: 'nasrin', talk: async () => {
  await say([T('KHANOM NASRIN', 'Wild Lenguamon hide in the dark tall grass.'), 'Weaken them with quiz attacks, then write them in your DAFTAR to catch them!', `If you get tired, ${G('Agha Reza', 'Khanom Zari')}'s teahouse is in the south-east corner.`]);
} });
npc('v', { look: 'farhad', lookG: 'fereshteh', dir: 'right', talk: async () => {
  await say([T(G('FARHAD', 'FERESHTEH'), `To get someone's attention, say ${F('ببخشید', 'bebakhshid')}.`), 'It means "excuse me" AND "sorry". Very useful!']);
} });
npc('g', { look: 'golnaz', dir: 'left', talk: async () => {
  await say([T('GOLNAZ', `When someone speaks too fast, say ${F('نمی‌فهمم', 'nemifahmam')}: "I don't understand".`), `Then ask: ${F('لطفا دوباره بگو', 'lotfan dobare begu')}, "please say it again".`]);
} });
npc('1', { look: 'basij', where: () => S.flags.b1 ? [11, 48] : null, talk: async () => {
  if (S.flags.b1) { await say(T('BASIJI', `Hmph. You again? ${F('برو', 'boro')}! Go! Isfahan is north.`)); return; }
  await gateBoss('b1');
} });
npc('i', { look: 'kian', lookG: 'kimia', dir: 'left', talk: async () => {
  await say([T(G('KIAN', 'KIMIA'), `I can count to ten! ${F('یک، دو، سه', 'yek, do, se')}...`), F('چهار، پنج، شش، هفت، هشت، نه، ده!', 'chahar, panj, shesh, haft, hasht, noh, dah!'), 'Hehe! Can you? The big bridge here, Si-o-se-pol, means 33 bridges: ' + F('سی و سه پل', 'si-o-se pol')]);
} });
npc('e', { look: 'maryam', talk: async () => {
  await say([T('MARYAM', `At the bazaar, ask ${F('قیمتش چنده؟', 'gheymatesh chande?')}: "how much does it cost?"`), `If it costs too much, say ${F('خیلی گرونه!', 'kheyli geroone!')} and the price drops!`]);
} });
npc('q', { look: 'navid', lookG: 'nazanin', dir: 'right', talk: async () => {
  await say([T(G('NAVID', 'NAZANIN'), `We pay in ${F('تومن', 'toman')}. ${F('هزار', 'hezar')} means one thousand.`), `So ${F('پنجاه هزار تومن', 'panjah hezar toman')} is 50,000 toman. Saffron? Pistachios? Sumac?`]);
} });
npc('2', { look: 'irgc', where: () => S.flags.b2 ? [11, 26] : null, talk: async () => {
  if (S.flags.b2) { await say(T('IRGC COMMANDER', `Move along. ${F('زود باش', 'zood bash')}! Hurry!`)); return; }
  await gateBoss('b2');
} });
npc('o', { look: 'omid', lookG: 'mina', dir: 'left', talk: async () => {
  await say([T(G('OMID', 'MINA'), `When someone serves you food, they say ${F('نوش جان', 'noosh-e jan')}.`), `And if the food is great, tell them: ${F('خیلی خوشمزه است', 'kheyli khoshmazeh ast')}!`]);
} });
npc('a', { look: 'parisa', dir: 'left', talk: async () => {
  await say([T('PARISA', `${F('هوا چطوره؟', 'hava chetore?')} means "how's the weather?"`), `Today it's ${F('آفتابی', 'aftabi')}: sunny! Shirin loves to talk about the weather.`]);
} });
npc('3', { look: 'censor', hidden: () => !!S.flags.b3, talk: async () => {
  await gateBoss('b3');
} });
npc('l', { look: 'shirin', dir: 'left', talk: async () => {
  if (S.flags.b5) { await say([T('SHIRIN', `${F('مرسی', 'merci')}! ${F('دمت گرم', 'damet garm')}! You beat THE CENSOR for good. Every word in Iran is free!`), `${F('فارسیت خیلی خوب شده', 'farsit kheyli khub shode')}: your Persian got really good!`]); return; }
  if (S.flags.b3) { await say([T('SHIRIN', `${F('مرسی', 'merci')}! The tomb of Hafez is free again.`), 'But THE CENSOR fled north to Tehran. Take the road at the north-west corner of the garden, past Persepolis!']); return; }
  await say([T('SHIRIN', `${F('سلام', 'salam')}. I am Shirin. I look after the tomb of Hafez.`), 'THE CENSOR has taken it over and banned every word! He even banned poetry!', 'Only someone who can hold a real conversation in Persian can beat him. Please, try!']);
} });

async function gateBoss(id) {
  const b = bossDef(id), name = b.name, routeName = ROUTE_NAMES[b.route], en = LANG === 'en';
  const have = caughtInRoute(b.route);
  await say(b.intro.map(l => T(name, l)));
  if (have < b.need) {
    await say([`(To pass, you must hold a conversation with ${name} in ${en ? 'English' : 'Persian'}.)`, `(First catch at least ${B(b.need)} Lenguamon around ${esc(routeName)}. You have ${B(have)}.)`]);
    return;
  }
  if (!(await ask(en ? `${name}: Are you ready to talk? ${PF('آماده‌ای؟')}` : `${name}: Are you ready to talk? ${F('آماده‌ای؟', 'amadeyi?')}`))) { await say(T(name, en ? 'Alright. Come back when you are ready.' : `${F('باشه', 'bashe')}. Come back when you are ready.`)); return; }
  if (!teamAlive()) { await say('Your Lenguamon are too tired. Rest first!'); return; }
  const won = await bossBattle(id);
  if (!won) return;
  S.flags[id] = true; S.daftar += 5; healTeam();
  SND.fx('badge');
  const badge = en ? ['', 'ROUTE 66', 'GOLDEN GATE', 'SPACE NEEDLE', 'LIBERTY BELL', 'EMPIRE STATE'][+id[1]] + ' STAR BADGE' : ['', 'YAZD', 'ISFAHAN', 'SHIRAZ', 'KAVIR', 'TEHRAN'][+id[1]] + ' KASHI BADGE';
  await say([`${esc(S.name)} earned the ${B(badge)}!`, `You found 5 ${en ? 'NOTEBOOKS' : 'DAFTARS'}, and your Lenguamon were healed.`]);
  writeSave();
  if (en) { await afterBossEN(id); return; }
  if (id === 'b3') await say([T('SHIRIN', `You did it! ${F('من بهت افتخار می‌کنم', 'man behet eftekhar mikonam')}: I'm proud of you!`), 'But THE CENSOR ran north toward Tehran. The road north of Shiraz is open now, past Persepolis and the Tomb of Cyrus. Follow him!']);
  if (id === 'b5') { await say(['Footsteps hurry up the stairs of Milad Tower...', T('HAYDEH', `${nm()}! I took the night bus all the way from Yazd! I saw everything on the news!`)]); await endingScene(); }
}

async function starterScene() {
  const hello = WORD[WORDS.find(w => w.tr0 === 'salam').key];
  await say([T('HAYDEH', `Ah, ${nm()}! ${F('سلام', 'salam')}! You came!`), 'Today you begin your journey into the Persian language.', 'Every journey begins with one word. And the first word everyone learns is...']);
  const p = $('#portrait'); p.innerHTML = monImg(hello, 'big') + monTag(hello); p.classList.add('show');
  SND.fx('caught');
  await say([`A little ${B('MOOSH')} ${F('موش', 'moosh')}! That is Persian for mouse. Its English name is written underneath.`, `It carries the first word everyone learns: ${W(hello)} = "hello".`, `${esc(S.name)} received ${B('MOOSH')}!`]);
  p.classList.remove('show');
  S.team.push(makeMon(hello)); S.caught[hello.key] = true; S.seen[hello.key] = true; S.daftar = 5; S.flags.starter = true;
  await say([
    T('HAYDEH', 'Wild Lenguamon live in the brush along the road north to Isfahan and Shiraz. Each one is an animal of Iran called by its Persian name, with its English name on its collar, and each one carries a secret word.'),
    "A battle starts straight away with a quiz about the wild Lenguamon's word. You get 4 choices, and you TYPE the right answer.",
    'Answer correctly and your attack lands. Miss, and the wild Lenguamon strikes back with the answer you needed!',
    `Weaken a word, then use a ${B('DAFTAR')} ${F('دفتر', 'daftar')} (notebook) to write it down and catch it. Here are 5 DAFTARS.`,
    'Long words and phrases are higher level and tougher. Short words are a good place to start.',
    'On the way you will meet a Basij checkpoint, an IRGC commander and THE CENSOR, who has seized the tomb of Hafez in Shiraz. Beyond Shiraz the road climbs through the Zagros Mountains, crosses the salt desert, and ends in TEHRAN, the biggest city of all.',
    'Every boss tests you with a real conversation. Win them all and you can truly hold a conversation in Persian!',
    `One more thing: practice a little every day. Your progress is saved on this device.`,
    T('HAYDEH', `${F('موفق باشی', 'movafagh bashi')}! Good luck!`),
  ]);
  writeSave();
}
async function endingScene() {
  S.flags.ending = true; writeSave();
  SND.music('end');
  await say([
    T('HAYDEH', `${nm()}! Five KASHI BADGES! ${F('آفرین', 'afarin')}!`),
    'You talked your way past the Basij, the IRGC and State TV, and you out-talked THE CENSOR twice, from the tomb of Hafez to the top of Milad Tower. All in Persian!',
    'You can now hold a real conversation: greetings, family, time, the bazaar, food, feelings, directions, opinions, taxis, restaurants, and even taarof.',
    `${F('من بهت افتخار می‌کنم', 'man behet eftekhar mikonam')}: I'm proud of you!`,
  ]);
  const el = $('#portrait'); el.innerHTML = `<div class="end"><div class="end-t">THE END</div><div>${F('پایان', 'payan')}</div><div class="end-s">${esc(S.name)} · ${caughtCount()} / ${WORDS.length} Lenguamon</div><div class="end-s">Keep filling your Lenguadex!</div></div>`; el.classList.add('show');
  await waitA(); el.classList.remove('show'); musicForPlace();
  await say(T('HAYDEH', `There are still ${WORDS.length - caughtCount()} words out there. ${F('ادامه بده', 'edameh bedeh')}: keep going!`));
}

// ---- title & new game ----
async function titleScreen(expired) {
  const t = $('#title');
  const sample = shuffle(WORDS).slice(0, 3);
  t.innerHTML = `<div class="tt-bg"></div><div class="tt-logo">LENGUAMON</div><div class="tt-sub">PERSIAN ⇄ ENGLISH</div><div class="tt-mons">${sample.map(w => monImg(w)).join('')}</div><div class="tt-press">PRESS A / ENTER</div><div class="tt-ver">v2 · English ⇄ Persian</div>`;
  t.classList.add('show'); SND.music(null);
  await waitA(); SND.init(); SND.music('town'); SND.fx('select');
  t.querySelector('.tt-press').remove();
  while (true) {
    const { save } = readSave();
    const items = save ? [{ html: `CONTINUE<br><small>${esc(save.name)} · ${Object.keys(save.caught).length} words</small>` }, 'NEW GAME', 'OPTIONS'] : ['NEW GAME', 'OPTIONS'];
    const r = await choose(items, { cls: 'titlemenu', cancel: false });
    const pickd = save ? ['cont', 'new', 'opt'][r] : ['new', 'opt'][r];
    if (pickd === 'opt') { await optionsScreen(); continue; }
    if (pickd === 'cont') { useLanguage(save.lang || 'fa'); S = save; break; }
    if (pickd === 'new') {
      if (save && !(await ask('Start a new game? Your current save will be erased.'))) continue;
      t.classList.remove('show'); t.innerHTML = '';
      await newGameIntro(); break;
    }
  }
  t.classList.remove('show'); t.innerHTML = '';
  await enterWorld();
}
async function newGameIntro() {
  const p = $('#portrait');
  p.innerHTML = `<img class="mon big" src="${portraitUrl('haydeh')}">`; p.classList.add('show');
  await say([`${F('سلام', 'salam')}! Welcome to the world of LENGUAMON!`, 'My name is HAYDEH. People call me the Lenguamon Professor!', 'This world is full of creatures called LENGUAMON: LANGUAGE MONSTERS!', 'Every Lenguamon is a word or a phrase. Catch them, and you learn them!']);
  await say(`First, which language do you speak? ${PF('اول بگو، به چه زبانی صحبت می‌کنی؟')}`, { keep: true });
  const speak = await choose(['ENGLISH', { html: `PERSIAN ${PF('فارسی')}` }], { cls: 'yn', cancel: false }); hideText();
  if (speak === 1) {
    await say(`And which language would you like to learn? ${PF('و چه زبانی را می‌خواهی یاد بگیری؟')}`, { keep: true });
    await choose([{ html: `ENGLISH ${PF('انگلیسی')}` }, { html: 'MORE SOON...', disabled: true }], { cls: 'yn', cancel: false }); hideText();
    useLanguage('en');
    await say([`${E('English! Wonderful choice.', 'انگلیسی! انتخاب فوق‌العاده‌ای است.')}`, `You already know some English, so we will start at an ${E('intermediate', 'متوسط')} level: real conversations, phrasal verbs and idioms.`, `Your adventure takes place in America, from the deserts of New Mexico to the streets of New York City!`]);
  } else {
    await say('And which language would you like to learn?', { keep: true });
    await choose([{ html: `PERSIAN ${F('فارسی', 'farsi')}` }, { html: 'MORE SOON...', disabled: true }], { cls: 'yn', cancel: false }); hideText();
    useLanguage('fa');
    await say(`${F('فارسی', 'farsi')}! Wonderful choice.`);
  }
  const en = LANG === 'en';
  const pp = $('#portrait'); pp.innerHTML = `<div class="gender"><img class="mon" src="${charUrl('player')}"><img class="mon" src="${charUrl('playerGirl')}"></div>`;
  await say(en ? `Now, are you a boy or a girl? ${PF('پسر هستی یا دختر؟')}` : 'Now, are you a boy or a girl?', { keep: true });
  const g = await choose(en ? [{ html: `BOY ${PF('پسر')}` }, { html: `GIRL ${PF('دختر')}` }] : [{ html: `BOY ${F('پسر', 'pesar')}` }, { html: `GIRL ${F('دختر', 'dokhtar')}` }], { cls: 'yn', cancel: false }); hideText();
  pp.innerHTML = `<img class="mon big" src="${portraitUrl('haydeh')}">`;
  await say(en ? `And what is your name? ${PF('اسمت چیه؟')}` : 'And what is your name?', { keep: true });
  const name = await textInput('YOUR NAME?', 16); hideText();
  S = newState(name); S.gender = g === 1 ? 'girl' : 'boy';
  if (isCyrusName(name)) {
    setupCyrus(); try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch (e) { }
    SND.fx('badge');
    await say([`CYRUS THE GREAT?! ${F('کوروش بزرگ', 'kourosh-e bozorg')}!`, ...(en ? ['You chose to explore America. Every city from Santa Fe to New York is open to you.'] : []), 'Your Majesty! The King of Kings, founder of the Persian Empire, here in my school!',
      'The whole land is yours to explore: every road is open, every gate is unlocked, and every Lenguamon is already in your Lenguadex.',
      'Wild Lenguamon will leave you in peace (you can change that in OPTIONS). Open the MAP from the START menu to travel to any city.',
      `Visit your own tomb at Pasargadae, read the signs, drink chai, and collect the old sayings from the elders. ${F('سفر خوش بگذره', 'safar khosh begzareh')}! Enjoy your trip!`]);
    p.classList.remove('show'); p.innerHTML = ''; S.map = en ? 'ushouse' : 'house'; S.x = 5; S.y = 5; S.dir = 'up'; return;
  }
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch (e) { }
  await say(en ? [`${esc(name)}! What a great name.`, `In English you introduce yourself like this: ${E(`Hi, I'm ${name}. Nice to meet you!`, `سلام، من ${name} هستم. از آشنایی‌ات خوشحالم!`)}`, 'Your very own LENGUAMON adventure is about to begin!', "A world of words awaits. Let's go!"]
    : [`${esc(name)}! What a great name.`, `In Persian you introduce yourself like this: ${F(`اسم من ${name} است`, `esm-e man ${name} ast`)}`, 'Your very own LENGUAMON adventure is about to begin!', 'A world of words awaits. Let\'s go!']);
  p.classList.remove('show'); p.innerHTML = '';
  S.map = en ? 'ushouse' : 'house'; S.x = 5; S.y = 5; S.dir = 'up';
}
async function enterWorld() {
  await fade(true, 1);
  placePlayer(S.map, S.x, S.y, S.dir); writeSave(); drawWorld();
  pushH(worldH);
  await fade(false, 300);
  if (!S.flags.starter && (S.map === 'house' || S.map === 'ushouse')) await run(() => say(T('MAMAN', LANG === 'en' ? `${nm()} ${PF('جان')}! Come here, ${PF('عزیزم')}. Talk to me.` : `${nm()} jan! Come here, talk to me.`)));
}

// ---- the far north: State TV at the gate of Tehran and THE CENSOR's last stand ----
npc('ψ', { look: 'anchor', where: () => S.flags.b4 ? [11, 27] : null, talk: async () => {
  if (S.flags.b4) { await say(T('STATE TV ANCHOR', `...and in other news, everything is fine. ${F('برو', 'boro')}, go, Tehran is that way.`)); return; }
  await gateBoss('b4');
} });
npc('Ω', { look: 'censor', hidden: () => !!S.flags.b5, talk: async () => {
  if (!S.flags.b4) return;
  await gateBoss('b5');
} });
