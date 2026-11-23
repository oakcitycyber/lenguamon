// ===== LENGUAMON story: NPCs, intro, title, ending =====
const T = (who, html) => `${who}: ${html}`;
function nextGoal() {
  if (!S.flags.starter) return 'Visit Professor Haydeh at the school.';
  if (!S.flags.b1) return `Catch at least ${BOSSES.b1.need} words on the ${ROUTE_NAMES[1]} (you have ${caughtInRoute(1)}), then get past the BASIJ CHECKPOINT on the way to Isfahan.`;
  if (!S.flags.b2) return `Catch at least ${BOSSES.b2.need} words in ${ROUTE_NAMES[2]} (you have ${caughtInRoute(2)}), then get past the IRGC COMMANDER on the road to Shiraz.`;
  if (!S.flags.b3) return `Catch at least ${BOSSES.b3.need} words on the ${ROUTE_NAMES[3]} (you have ${caughtInRoute(3)}), then defeat THE CENSOR at the tomb of Hafez in Shiraz.`;
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
  if (S.flags.b3 && !S.flags.ending) { await endingScene(); return; }
  await say([T('HAYDEH', `${F('سلام', 'salam')}, ${nm()}! How is your Lenguadex?`), `You have caught ${B(caughtCount())} words.`, `NEXT: ${nextGoal()}`]);
  if (S.daftar < 5) { S.daftar = 5; SND.fx('good'); await say('HAYDEH: Take some fresh DAFTARS. You now have 5.'); }
} });
npc('z', { look: 'arash', dir: 'up', talk: async () => {
  await say([T('ARASH', `I'm practising for the Basij checkpoint. They ask so many questions!`), `Did you know ${F('چشم', 'chashm')} means EYE, but people also say it to mean "sure, will do"?`, 'Persian is full of surprises!']);
} });
npc('r', { look: 'reza', talk: async () => {
  await say(T('AGHA REZA', `${F('بفرمایید', 'befarmaid')}! Welcome to my ${F('چای‌خانه', 'chaykhaneh')}, the teahouse. A glass of chai?`));
  await healScene(); await say(['Your Lenguamon drank chai and feel refreshed!', T('AGHA REZA', `${F('نوش جان', 'noosh-e jan')}! Enjoy!`)]);
  if (S.flags.starter && S.daftar < 5) { S.daftar = 5; SND.fx('good'); await say('AGHA REZA: And here, take some DAFTARS for your journey. You now have 5.'); }
} });
npc('j', { look: 'mahmoud', dir: 'left', talk: async () => {
  await say([T('AGHA MAHMOUD', 'An old Persian saying:'), F('قطره قطره جمع گردد، وانگهی دریا شود', 'ghatreh ghatreh jam gardad, vangahi darya shavad'), '"Drop by drop it gathers, and then it becomes a sea." Learn a few words every day!']);
} });
npc('9', { look: 'babak', where: () => S.flags.starter ? [8, 63] : null, talk: async () => {
  if (!S.flags.starter) { await say([T('AGHA BABAK', `${F('صبر کن', 'sabr kon')}! Wait!`), 'Wild Lenguamon live in the tall grass up north. You need your own Lenguamon first!', 'Go see Professor Haydeh at the school.']); return; }
  await say(T('AGHA BABAK', `The path is open. ${F('موفق باشی', 'movafagh bashi')}! Good luck!`));
} });
npc('s', { look: 'nasrin', talk: async () => {
  await say([T('KHANOM NASRIN', 'Wild Lenguamon hide in the dark tall grass.'), 'Weaken them with quiz attacks, then write them in your DAFTAR to catch them!', 'If you get tired, Agha Reza\'s teahouse is in the south-east corner.']);
} });
npc('v', { look: 'farhad', dir: 'right', talk: async () => {
  await say([T('FARHAD', `To get someone's attention, say ${F('ببخشید', 'bebakhshid')}.`), 'It means "excuse me" AND "sorry". Very useful!']);
} });
npc('g', { look: 'golnaz', dir: 'left', talk: async () => {
  await say([T('GOLNAZ', `When someone speaks too fast, say ${F('نمی‌فهمم', 'nemifahmam')}: "I don't understand".`), `Then ask: ${F('لطفا دوباره بگو', 'lotfan dobare begu')}, "please say it again".`]);
} });
npc('1', { look: 'basij', where: () => S.flags.b1 ? [11, 48] : null, talk: async () => {
  if (S.flags.b1) { await say(T('BASIJI', `Hmph. You again? ${F('برو', 'boro')}! Go! Isfahan is north.`)); return; }
  await gateBoss('b1');
} });
npc('i', { look: 'kian', dir: 'left', talk: async () => {
  await say([T('KIAN', `I can count to ten! ${F('یک، دو، سه', 'yek, do, se')}...`), F('چهار، پنج، شش، هفت، هشت، نه، ده!', 'chahar, panj, shesh, haft, hasht, noh, dah!'), 'Hehe! Can you? The big bridge here, Si-o-se-pol, means 33 bridges: ' + F('سی و سه پل', 'si-o-se pol')]);
} });
npc('e', { look: 'maryam', talk: async () => {
  await say([T('MARYAM', `At the bazaar, ask ${F('قیمتش چنده؟', 'gheymatesh chande?')}: "how much does it cost?"`), `If it costs too much, say ${F('خیلی گرونه!', 'kheyli geroone!')} and the price drops!`]);
} });
npc('q', { look: 'navid', dir: 'right', talk: async () => {
  await say([T('NAVID', `We pay in ${F('تومن', 'toman')}. ${F('هزار', 'hezar')} means one thousand.`), `So ${F('پنجاه هزار تومن', 'panjah hezar toman')} is 50,000 toman. Saffron? Pistachios? Sumac?`]);
} });
npc('2', { look: 'irgc', where: () => S.flags.b2 ? [11, 26] : null, talk: async () => {
  if (S.flags.b2) { await say(T('IRGC COMMANDER', `Move along. ${F('زود باش', 'zood bash')}! Hurry!`)); return; }
  await gateBoss('b2');
} });
npc('o', { look: 'omid', dir: 'left', talk: async () => {
  await say([T('OMID', `When someone serves you food, they say ${F('نوش جان', 'noosh-e jan')}.`), `And if the food is great, tell them: ${F('خیلی خوشمزه است', 'kheyli khoshmazeh ast')}!`]);
} });
npc('a', { look: 'parisa', dir: 'left', talk: async () => {
  await say([T('PARISA', `${F('هوا چطوره؟', 'hava chetore?')} means "how's the weather?"`), `Today it's ${F('آفتابی', 'aftabi')}: sunny! Shirin loves to talk about the weather.`]);
} });
npc('3', { look: 'censor', hidden: () => !!S.flags.b3, talk: async () => {
  await gateBoss('b3');
} });
npc('l', { look: 'shirin', dir: 'left', talk: async () => {
  if (S.flags.b3) { await say([T('SHIRIN', `${F('مرسی', 'merci')}! ${F('دمت گرم', 'damet garm')}! The tomb of Hafez is free again.`), `${F('فارسیت خیلی خوب شده', 'farsit kheyli khub shode')}: your Persian got really good! Go tell Professor Haydeh!`]); return; }
  await say([T('SHIRIN', `${F('سلام', 'salam')}. I am Shirin. I look after the tomb of Hafez.`), 'THE CENSOR has taken it over and banned every word! He even banned poetry!', 'Only someone who can hold a real conversation in Persian can beat him. Please, try!']);
} });

async function gateBoss(id) {
  const b = BOSSES[id], name = b.name, routeName = ROUTE_NAMES[b.route];
  const have = caughtInRoute(b.route);
  await say(b.intro.map(l => T(name, l)));
  if (have < b.need) {
    await say([`(To pass, you must hold a conversation with ${name} in Persian.)`, `(First catch at least ${B(b.need)} Lenguamon around ${esc(routeName)}. You have ${B(have)}.)`]);
    return;
  }
  if (!(await ask(`${name}: Are you ready to talk? ${F('آماده‌ای؟', 'amadeyi?')}`))) { await say(T(name, `${F('باشه', 'bashe')}. Come back when you are ready.`)); return; }
  if (!teamAlive()) { await say('Your Lenguamon are too tired. Rest first!'); return; }
  const won = await bossBattle(id);
  if (!won) return;
  S.flags[id] = true; S.daftar += 5; healTeam();
  SND.fx('badge');
  await say([`${esc(S.name)} earned the ${B(['', 'YAZD', 'ISFAHAN', 'SHIRAZ'][+id[1]] + ' KASHI BADGE')}!`, `You found 5 DAFTARS, and your Lenguamon were healed.`]);
  writeSave();
  if (id === 'b3') await say(T('SHIRIN', `You did it! Now go back to Professor Haydeh. She will be so proud of you! ${F('من بهت افتخار می‌کنم', 'man behet eftekhar mikonam')}!`));
}

async function starterScene() {
  const hello = WORD[WORDS.find(w => w.tr0 === 'salam').key];
  await say([T('HAYDEH', `Ah, ${nm()}! ${F('سلام', 'salam')}! You came!`), 'Today you begin your journey into the Persian language.', 'Every journey begins with one word. And the first word everyone learns is...']);
  const p = $('#portrait'); p.innerHTML = monImg(hello, 'big'); p.classList.add('show');
  SND.fx('caught');
  await say([`A little ${B('HOUSE MOUSE')}! Its Persian name, ${F('موش', 'moosh')}, is on its collar.`, `It carries the first word everyone learns: ${W(hello)} = "hello".`, `${esc(S.name)} received the ${B('HOUSE MOUSE')}!`]);
  p.classList.remove('show');
  S.team.push(makeMon(hello)); S.caught[hello.key] = true; S.seen[hello.key] = true; S.daftar = 5; S.flags.starter = true;
  await say([
    T('HAYDEH', 'Wild Lenguamon live in the brush along the road north to Isfahan and Shiraz. Each one is an animal of Iran, with its Persian name on its collar, and each one carries a secret word.'),
    "A battle starts straight away with a quiz about the wild Lenguamon's word. You get 4 choices, and you TYPE the right answer.",
    'Answer correctly and your attack lands. Miss, and the wild Lenguamon strikes back with the answer you needed!',
    `Weaken a word, then use a ${B('DAFTAR')} ${F('دفتر', 'daftar')} (notebook) to write it down and catch it. Here are 5 DAFTARS.`,
    'Long words and phrases are higher level and tougher. Short words are a good place to start.',
    'On the way you will meet a Basij checkpoint, an IRGC commander, and finally THE CENSOR, who has seized the tomb of Hafez in Shiraz. Each one tests you with a real conversation. Beat all three and you can hold a beginner conversation in Persian!',
    `One more thing: if you stop playing for 48 hours, your notebook ink fades and the journey starts over. Practice a little every day!`,
    T('HAYDEH', `${F('موفق باشی', 'movafagh bashi')}! Good luck!`),
  ]);
  writeSave();
}
async function endingScene() {
  S.flags.ending = true; writeSave();
  SND.music('end');
  await say([
    T('HAYDEH', `${nm()}! Three KASHI BADGES! ${F('آفرین', 'afarin')}!`),
    'You talked your way past the Basij checkpoint and the IRGC commander, and you out-talked THE CENSOR at the tomb of Hafez, all in Persian.',
    'You can now hold a beginner conversation: greetings, names, where you are from, numbers, family, time, food, feelings, and the weather.',
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
  t.innerHTML = `<div class="tt-bg"></div><div class="tt-logo">LENGUAMON</div><div class="tt-sub">PERSIAN EDITION ${F('فارسی', 'farsi')}</div><div class="tt-mons">${sample.map(w => monImg(w)).join('')}</div><div class="tt-press">PRESS A / ENTER</div><div class="tt-ver">v1 · English → Persian</div>`;
  t.classList.add('show'); SND.music(null);
  await waitA(); SND.init(); SND.music('town'); SND.fx('select');
  t.querySelector('.tt-press').remove();
  if (expired) await say([`Your last journey as ${esc(expired.name)} faded.`, 'More than 48 hours passed without play, so the notebook ink disappeared. A new adventure begins!']);
  while (true) {
    const { save } = readSave();
    const items = save ? [{ html: `CONTINUE<br><small>${esc(save.name)} · ${Object.keys(save.caught).length} words · ${hoursLeft(save)}h left</small>` }, 'NEW GAME', 'OPTIONS'] : ['NEW GAME', 'OPTIONS'];
    const r = await choose(items, { cls: 'titlemenu', cancel: false });
    const pickd = save ? ['cont', 'new', 'opt'][r] : ['new', 'opt'][r];
    if (pickd === 'opt') { await optionsScreen(); continue; }
    if (pickd === 'cont') { S = save; break; }
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
  await say('First, which language do you speak?', { keep: true });
  await choose(['ENGLISH', { html: 'MORE SOON...', disabled: true }], { cls: 'yn', cancel: false }); hideText();
  await say('And which language would you like to learn?', { keep: true });
  await choose([{ html: `PERSIAN ${F('فارسی', 'farsi')}` }, { html: 'MORE SOON...', disabled: true }], { cls: 'yn', cancel: false }); hideText();
  await say([`${F('فارسی', 'farsi')}! Wonderful choice.`, 'Now, tell me. What is your name?'], { keep: true });
  const name = await textInput('YOUR NAME?', 10); hideText();
  S = newState(name); try { localStorage.setItem(SAVE_KEY, JSON.stringify(S)); } catch (e) { }
  await say([`${esc(name)}! What a great name.`, `In Persian you introduce yourself like this: ${F(`اسم من ${name} است`, `esm-e man ${name} ast`)}`, 'Your very own LENGUAMON adventure is about to begin!', 'A world of words awaits. Let\'s go!']);
  p.classList.remove('show'); p.innerHTML = '';
  S.map = 'house'; S.x = 5; S.y = 5; S.dir = 'up';
}
async function enterWorld() {
  await fade(true, 1);
  placePlayer(S.map, S.x, S.y, S.dir); writeSave(); drawWorld();
  pushH(worldH);
  await fade(false, 300);
  if (!S.flags.starter && S.map === 'house') await run(() => say(T('MAMAN', `${nm()} jan! Come here, talk to me.`)));
}
