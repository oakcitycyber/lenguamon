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
      ['mehdi', 'CARPET SELLER MEHDI', 'dariush', 'QUES', 'I carry my carpets to every town on this road. First, a question or two!', 'Okay, okay, you get the friend price!', () => `To bargain, say ${F('تخفیف بدید', 'takhfif bedid')}: "give me a discount".`],
      ['zahra', 'SCHOOLGIRL ZAHRA', 'maryam', 'CLASS', 'School is out! Do you know your classroom words?', 'You know more family words than my uncle!', () => `Your mother's brother is ${F('دایی', 'dayi')}, and your father's brother is ${F('عمو', 'amu')}.`],
    ] },
    { route: 3, y: [14, 24], list: [
      ['parviz', 'CHEF PARVIZ', 'omid', 'FOOD', "Taste my words! They're spicy!", 'Delicious! You know your food words.', () => `After a good meal, say ${F('دستت درد نکنه', 'dastet dard nakone')}: "thank you" (literally "may your hand not hurt").`],
      ['laleh', 'POETRY FAN LALEH', 'golnaz', 'FEEL', 'Hafez wrote about every feeling. Can you name them?', 'Your heart speaks Persian!', () => `${F('دلم برات تنگ شده', 'delam barat tang shode')} means "I miss you": literally, "my heart has become tight for you".`],
      ['sina', 'WEATHERMAN SINA', 'arash', 'WEATHER', "Today's forecast: a 100% chance of battle!", 'Clear skies for you!', () => `${F('هوا خیلی گرمه', 'hava kheyli garme')}: "it's very hot". You'll say it a lot in a Shiraz summer!`],
      ['roya', 'PAINTER ROYA', 'leila', 'COLOR', "I paint with Persian colors. What's your favorite?", 'A masterpiece!', () => `Turquoise, the color of Isfahan's domes, is ${F('فیروزه‌ای', 'firuzei')}.`],
      ['behrouz', 'WATCHMAKER BEHROUZ', 'farhad', 'VERB', 'Tick tock! Do you know your action words? Hurry!', 'Right on time!', () => `To say "I'm late": ${F('دیرم شده', 'diram shodeh')}.`],
      ['nima', 'GARDENER NIMA', 'arash', 'COLOR', 'The gardens of Shiraz have every color. Name them!', 'You have a green thumb!', () => `A garden is ${F('باغ', 'bagh')}. Shiraz is famous for its gardens, like Bagh-e Eram.`],
    ] },
  ],
  north: [
    { route: 4, y: [67, 88], list: [
      ['bahram', 'SHEPHERD BAHRAM', 'babak', 'NATURE', 'My sheep and I know every mountain word!', 'Even my sheep are impressed!', () => `A nomad's tent is a ${F('سیاه چادر', 'siah chador')}: a "black tent" woven from goat hair.`],
      ['nasim', 'HIKER NASIM', 'parisa', 'NATURE', 'Race you to the top! But first, a battle!', 'You climbed right over me!', () => `When you're out of breath: ${F('خسته شدم', 'khasteh shodam')}: "I'm tired".`],
      ['mansour', 'BUS DRIVER MANSOUR', 'navid', 'TRAVEL', 'Next stop: a battle! Tickets, please!', 'You can ride for free!', () => `To get off the bus: ${F('نگه دارید لطفا', 'negah darid lotfan')}: "please stop".`],
      ['tara', 'PHOTOGRAPHER TARA', 'maryam', 'TRAVEL', 'Say cheese! I mean... say it in Persian!', 'Picture perfect!', () => `To ask for a photo: ${F('میشه یه عکس بگیرید؟', 'mishe ye aks begirid?')}`],
      ['shiva', 'OFFICE WORKER SHIVA', 'leila', 'TRAVEL', 'I finally took a vacation from the office! Battle me before my phone rings!', "Now I'm late for my meeting!", () => `${F('ترافیک', 'terafik')} is the same word in Persian, and Tehran has plenty of it!`],
      ['ferial', 'NOMAD FERIAL', 'parisa', 'NATURE', 'My tribe moves with the seasons. Can you keep up?', 'You would make a fine nomad!', () => `Spring is ${F('بهار', 'bahar')}: the season when the nomads move their flocks up the mountains.`],
    ] },
    { route: 5, y: [30, 44], list: [
      ['pejman', 'DEBATER PEJMAN', 'arash', 'TALK', "I'll argue with anyone. In Persian!", 'Fine. I agree with you!', () => `To disagree politely: ${F('من این‌طور فکر نمی‌کنم', 'man intor fekr nemikonam')}: "I don't think so".`],
      ['minoo', 'STARGAZER MINOO', 'nasrin', 'TALK', "The desert sky is full of stars, and I'm full of questions!", 'You shine brighter than the stars!', () => `"Star" is ${F('ستاره', 'setareh')}. It's also a popular girl's name.`],
      ['abbas', 'CARAVAN COOK ABBAS', 'omid', 'HOME', "Dinner's ready after we battle!", "You've earned your dinner!", () => `Say ${F('نوش جان', 'noosh-e jan')} to someone eating: "enjoy!"`],
      ['soheil', 'NIGHT GUARD SOHEIL', 'dariush', 'HOME', 'Nobody passes my post at night without a battle!', 'Okay, you can pass. Sleep well!', () => `Good night is ${F('شب بخیر', 'shab bekheir')}.`],
      ['akbar', 'TAXI DRIVER AKBAR', 'babak', 'TALK', 'Get in! The meter is running... and so is this battle!', 'Keep the change!', () => `To tell a taxi where to go: ${F('برو به ...', 'boro be ...')} "go to ...".`],
      ['majid', 'TAAROF MASTER AGHA MAJID', 'mahmoud', 'HOME', "Please, you go first. No, no, I insist! ...Fine, I'll go first!", 'You are too kind. No, YOU are too kind!', () => `Taarof: if a shopkeeper says ${F('قابل نداره', 'ghabel nadare')} ("it's nothing"), politely insist on paying anyway!`],
    ] },
  ],
  east: [
    { route: 7, y: [18, 44], list: [
      ['kamran', 'HISTORIAN KAMRAN', 'masoud', 'HERITAGE', 'Every stone on this road has a story. Do you know your history words?', 'You know more history than my students!', () => `History is ${F('تاریخ', 'tarikh')}. The same word also means "date"!`],
      ['shabnam', 'SAFFRON FARMER SHABNAM', 'maryam', 'HERITAGE', 'I pick saffron flowers at dawn. Battle me before the sun gets hot!', 'Your words are worth their weight in saffron!', () => `Saffron is ${F('زعفران', "za'feran")}: Iran grows most of the saffron in the world.`],
      ['ramin', 'TURQUOISE MINER RAMIN', 'dariush', 'PHRASE', 'I dig for turquoise all day. Let me dig into your Persian!', 'You are a real gem!', () => `${F('در واقع', 'dar vaghe')} means "in fact". Very useful in a debate!`],
      ['elnaz', 'ASTRONOMER ELNAZ', 'golnaz', 'HERITAGE', 'Khayyam measured the year to the second. Can you measure up?', 'Your Persian is written in the stars!', () => `Khayyam was a poet AND an astronomer: a ${F('ستاره‌شناس', 'setareh-shenas')}.`],
      ['gholam', 'TRAVELLER AGHA GHOLAM', 'mahmoud', 'PHRASE', 'I walk this road to Mashhad every year. A battle makes it shorter!', 'May your road be safe!', () => `Wish travellers well: ${F('سفر بخیر', 'safar bekheir')}!`],
      ['donya', 'POETRY STUDENT DONYA', 'leila', 'PHRASE', "I'm memorizing the Shahnameh, all 50,000 couplets. Quiz me!", 'You speak like a poet!', () => `Say goodbye with ${F('به امید دیدار', 'be omid-e didar')}: "hope to see you again".`],
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
      ['kai', 'STARTUP INTERN KAI', 'tech', 'PHRASAL', "I'm crushing it at my internship! Let's circle back... to a battle!", "Okay, let's take this offline.", () => `${E("let's take this offline", 'بیا این موضوع رو جداگانه حرف بزنیم')}: office talk for "let's discuss it later, just us".`],
      ['grace', 'BANK TELLER GRACE', 'golnaz', 'SMALLTALK', 'Next in line! Deposit, withdrawal... or battle?', 'Your account is in great shape!', () => `At the bank: ${E("I'd like to withdraw some cash", 'می‌خوام کمی پول نقد برداشت کنم')}`],
    ] },
    { route: 3, y: [14, 24], list: [
      ['chase', 'SURFER CHASE', 'surfer', 'FEELINGS', "Dude! The waves are gnarly today. Let's battle!", 'Totally stoked for you, dude!', () => `${E("I'm stoked", 'خیلی هیجان‌زده و خوشحالم')}: very excited and happy.`],
      ['jade', 'PODCASTER JADE', 'tech', 'OPINION', "Welcome to my podcast! Today's guest is you. Let's debate!", 'Great episode! Like and subscribe!', () => `${E("that's a hot take", 'نظر جنجالی‌ایه')}: a surprising or controversial opinion.`],
      ['olivia', 'DEBATE CAPTAIN OLIVIA', 'parisa', 'OPINION', "I've never lost an argument. Prove me wrong!", 'I stand corrected.', () => `${E('I stand corrected', 'حق با شماست، اشتباه کردم')}: a polite way to admit you were wrong.`],
      ['river', 'POET RIVER', 'surfer', 'FEELINGS', 'The ocean makes me feel... like battling!', 'You moved me.', () => `${E('it touched my heart', 'به دلم نشست')}`],
      ['marco', 'TOUR GUIDE MARCO', 'cabbie', 'OPINION', "I run tours down the coast! Today's tour includes... a battle!", 'Best tourist ever!', () => `${E("it's worth a visit", 'ارزش دیدن داره')}: "Alcatraz is worth a visit."`],
      ['wes', 'WHALE WATCHER WES', 'ranger', 'FEELINGS', 'Thar she blows! A whale... and a battle!', 'Whale, whale, whale. You won!', () => `${E("I'm over the moon", 'از خوشحالی روی ابرهام')}: you're extremely happy.`],
    ] },
  ],
  usnorth: [
    { route: 4, y: [67, 88], list: [
      ['tess', 'PARK RANGER TESS', 'ranger', 'OUTDOORS', 'Stay on the trail! And battle me while you are at it!', 'You know your way around the outdoors!', () => `Every park has signs that say ${E("don't feed the wildlife", 'به حیوانات وحشی غذا نده')}`],
      ['gary', 'RV DAD GARY', 'trucker', 'ROADTRIP', "Kids, look! A trainer! Let's battle before lunch!", "Back in the RV, kids. We lost.", () => `Every kid in the back seat asks ${E('are we there yet?', 'هنوز نرسیدیم؟')}`],
      ['dev', 'ROCK CLIMBER DEV', 'tech', 'OUTDOORS', "I just climbed that cliff. You're next!", "You've got a solid grip on English!", () => `${E('get a grip', 'به خودت مسلط باش')}: "calm down and take control".`],
      ['moe', 'BIKER MOE', 'biker', 'ROADTRIP', 'Nice ride. Wanna race? No? Then battle!', 'Respect. Ride safe.', () => `${E('ride safe', 'با احتیاط برون')}: what bikers say instead of goodbye.`],
      ['nikki', 'STAND-UP COMIC NIKKI', 'leila', 'ROADTRIP', "I'm on a comedy tour across the country. Two words walk into a bar... and into a battle!", 'You killed it out there!', () => `${E('you killed it', 'ترکوندی / عالی بود')}: you did a great job.`],
      ['cody', 'COWBOY CODY', 'trucker', 'OUTDOORS', "Howdy! This trail ain't big enough for the two of us!", 'Well, shucks. You win, partner.', () => `${E('howdy', 'سلام (کابویی)')}: a friendly cowboy hello.`],
    ] },
    { route: 5, y: [30, 44], list: [
      ['brenda', 'NURSE BRENDA', 'nasrin', 'HEALTH', "Let me check your vocabulary. Say 'ah'!", 'A clean bill of health!', () => `${E('a clean bill of health', 'سلامت کامل از نظر پزشک')}: the doctor says you are healthy.`],
      ['hank', 'FARMER HANK', 'babak', 'ERRANDS', 'Chores can wait. Time for a battle!', "Well, I'll be darned!", () => `${E("I've got chores to do", 'کلی کار خونه دارم')}`],
      ['luis', 'MAIL CARRIER LUIS', 'navid', 'ERRANDS', 'Special delivery: one battle, signed and sealed!', 'Return to sender!', () => `${E('sign for a package', 'رسید بسته را امضا کردن')}`],
      ['amy', 'PHARMACIST AMY', 'maryam', 'HEALTH', 'Take two battles and call me in the morning!', "You're just what the doctor ordered!", () => `${E('take it with food', 'همراه غذا بخور')}: what the pharmacist says about medicine.`],
      ['sal', 'HOT DOG VENDOR SAL', 'cabbie', 'ERRANDS', "I'm drivin' my hot dog cart all the way to New York! Ya wanna battle?", 'Fuhgeddaboudit! You win!', () => `New Yorkers shout ${E("I'm walking here!", 'دارم از اینجا رد می‌شم!')} at cars that block the crosswalk.`],
      ['jay', 'BREAKDANCER JAY', 'boxer', 'HEALTH', "Yo! Dancing keeps me healthy. Let's battle, for real!", "No cap, you're legit!", () => `${E("you're legit", 'تو واقعاً کاربلدی')}: you're the real deal.`],
    ] },
  ],
  useast: [
    { route: 7, y: [18, 44], list: [
      ['abigail', 'HISTORY TEACHER ABIGAIL', 'parisa', 'CIVICS', 'Pop quiz! Do you know your civics words?', 'A+! Gold star!', () => `Thomas Jefferson wrote ${E('the Declaration of Independence', 'اعلامیه استقلال')} in 1776.`],
      ['ben', 'RE-ENACTOR BEN', 'grandpa', 'CIVICS', "Huzzah! I dress like it's 1776. Battle me, redcoat!", 'I surrender my musket!', () => `${E('the Founding Fathers', 'بنیان‌گذاران آمریکا')} wrote the Constitution in Philadelphia in 1787.`],
      ['anjali', 'LAW STUDENT ANJALI', 'tech', 'CIVICS', "I'm studying for the bar exam. Objection! Let's battle!", 'Objection sustained. You win!', () => `The highest court is ${E('the Supreme Court', 'دیوان عالی')}: nine judges decide the biggest cases.`],
      ['harold', 'BUTLER HAROLD', 'barista', 'FORMAL', 'Good afternoon. Might I trouble you for a battle?', 'Splendid form, if I may say so.', () => `To disagree politely: ${E('with all due respect', 'با کمال احترام')}...`],
      ['claire', 'DIPLOMAT CLAIRE', 'maryam', 'FORMAL', "It's an honor to meet you. Shall we have a civil battle?", 'I concede, with pleasure.', () => `${E("I'd be glad to", 'با کمال میل')}: a polite way to say yes.`],
      ['buddy', 'CRAB FISHERMAN BUDDY', 'biker', 'CIVICS', 'Fresh Maryland crabs! But first, a battle, hon!', "Well, I'll be! You got me, hon.", () => `In Baltimore, locals call everyone ${E('hon', 'عزیزم')}, short for "honey".`],
    ] },
  ],
};
// the rival: six meetings, one in each city before its boss
const RIVAL_SPOTS = { fa: [['world', 60, 'starter'], ['world', 44, 'b1'], ['world', 11, 'b2'], ['north', 62, 'b3'], ['north', 26, 'b4'], ['east', 15, 'b5']], en: [['us', 60, 'starter'], ['us', 44, 'b1'], ['us', 11, 'b2'], ['usnorth', 62, 'b3'], ['usnorth', 26, 'b4'], ['useast', 15, 'b5']] };
const RIVAL_LINES = [
  ['Hey, {N}! Professor Haydeh gave you a Lenguamon too? Mine is better. Let\'s see who studied harder!', "What?! Fine, you got lucky. I'll be ready next time!"],
  ['There you are! I practiced every night. My Lenguamon know all the words YOU keep missing!', 'Hmph. You actually learned them. Not bad...'],
  ['{N}! I made it here first. Ready to lose?', 'Okay, okay. You are good. But the next city is mine!'],
  ["I've been studying flashcards the whole way here. One more time!", 'You beat me again... Maybe we should study together sometime.'],
  ['This is it, {N}. One last battle before the big city. No holding back!', "...You won. Honestly? You're the best student Haydeh ever had. Go beat that villain!"],
  ["{N}! You came all this way too? I heard the rumors about a ghost. One final battle, for real this time!", "That's it. You're the best, and I mean it. Go talk to that ghost... and tell him I said hi."],
];
Object.assign(LOOKS, {
  rival: { skin: '#f0c49c', hair: '#3a2a1a', hairStyle: 'swoop', top: '#c83a3a', top2: '#8a1e1e', tee: '#2a2a2e', legs: '#3a4a6a', kicks: '#f4f4f0' },
  rivalF: { skin: '#f0c49c', hair: '#5a2a1a', hairStyle: 'long', top: '#7a4ac8', top2: '#4a2a8a', tee: '#f4f0e8', legs: '#2a2a3a', kicks: '#f4f4f0', hoops: true },
});
const rivalName = () => LANG === 'en' ? G('TYLER', 'MADISON') : G('DARIUSH', 'DORSA');
const trState = id => ((S.tr || (S.tr = {}))[id] || (S.tr[id] = {}));

// ---- three athletes in every gym: beat them before the head trainer will train you ----
// [map, words route, [boy-hero names], [girl-hero names]]
const GYM_TRAINERS = {
  fa: [['gym1', 1, ['PAHLEVAN ALI', 'PAHLEVAN SAEED', 'PAHLEVAN NADER'], ['PAHLEVAN ZOHREH', 'PAHLEVAN MAHNAZ', 'PAHLEVAN NEGAR']],
    ['gym2', 2, ['PAHLEVAN HAMED', 'PAHLEVAN VAHID', 'PAHLEVAN KAMBIZ'], ['PAHLEVAN ELAHEH', 'PAHLEVAN PARASTOO', 'PAHLEVAN SAMIRA']],
    ['gym3', 3, ['PAHLEVAN KIARASH', 'PAHLEVAN FARID', 'PAHLEVAN HOOMAN'], ['PAHLEVAN SHADI', 'PAHLEVAN TARANEH', 'PAHLEVAN YASAMAN']],
    ['gym4', 4, ['PAHLEVAN ARDALAN', 'PAHLEVAN EHSAN', 'PAHLEVAN SHAHAB'], ['PAHLEVAN NILOUFAR', 'PAHLEVAN SETAREH', 'PAHLEVAN ARMITA']],
    ['gym5', 6, ['PAHLEVAN SIAMAK', 'PAHLEVAN PAYAM', 'PAHLEVAN ARMAN'], ['PAHLEVAN SHIDEH', 'PAHLEVAN NAZILA', 'PAHLEVAN BITA']],
    ['gym6', 7, ['PAHLEVAN BARZIN', 'PAHLEVAN FARSHAD', 'PAHLEVAN PEDRAM'], ['PAHLEVAN TANAZ', 'PAHLEVAN MAHSHID', 'PAHLEVAN ROSHANAK']]],
  en: [['usgym1', 1, ['BOXER RAY', 'BOXER MATEO', 'BOXER DANTE'], ['BOXER CARMEN', 'BOXER JESSIE', 'BOXER INES']],
    ['usgym2', 2, ['BOXER KENJI', 'BOXER SAM', 'BOXER DEREK'], ['BOXER HANNAH', 'BOXER IRIS', 'BOXER NAOMI']],
    ['usgym3', 3, ['BOXER TREY', 'BOXER COLE', 'BOXER RUSS'], ['BOXER SKYE', 'BOXER BROOKE', 'BOXER QUINN']],
    ['usgym4', 4, ['BOXER SEAN', 'BOXER PAT', 'BOXER STAN'], ['BOXER KATIE', 'BOXER MOLLY', 'BOXER SHEILA']],
    ['usgym5', 6, ['BOXER VINNIE', 'BOXER RICO', 'BOXER JAMAL'], ['BOXER GINA', 'BOXER TONI', 'BOXER TAMIKA']],
    ['usgym6', 7, ['BOXER GRANT', 'BOXER LINCOLN', 'BOXER JACKSON'], ['BOXER BETSY', 'BOXER DOLLY', 'BOXER HARRIET']]],
};
const GYM_TR_SPOTS = [[8, 6, 'left'], [8, 4, 'left'], [8, 2, 'left']]; // each one watches the only path to the head trainer
function gymTrainersLeft(mapId) { return TRAINER_NPCS.filter(n => n.tr && n.tr.gym && NPC_POS[n.marker].map === mapId && !trState(n.tr.id).won).length; }

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
  for (const lang of ['fa', 'en']) for (const [mapId, route, boys, girls] of GYM_TRAINERS[lang]) {
    if (!MAPS[mapId]) continue;
    GYM_TR_SPOTS.forEach(([x, y, dir], k) => {
      const marker = `gtr:${lang}:${mapId}:${k}`, en = lang === 'en';
      NPC_POS[marker] = { map: mapId, x, y };
      const n = { marker, dir, wide: dir === 'down', noWander: true,
        tr: { id: `${lang}:${mapId}:${k}`, gym: true, route, lang, short: '',
          hello: en ? ["Coach says nobody gets to the ring without going through me!", "Gloves up! Let's see your footwork... I mean, your words!", "I'm the last one before the coach. Give it everything!"][k]
            : ['The morshed says nobody trains with him until they beat us!', `${F('یا علی', 'ya ali')}! Show me your strength... in words!`, "I'm the last one before the morshed. Give it everything!"][k],
          lose: en ? ['Good fight! You can go see the coach... after the other two.', 'You float like a butterfly!', "You earned it. The coach is waiting."][k]
            : [`${F('خسته نباشی', 'khasteh nabashi')}! Strong words!`, `${F('آفرین', 'afarin')}! A true pahlevan!`, 'You have earned your place. The morshed is waiting.'][k],
          tip: () => (en ? 'Train hard, and talk to the coach when you have beaten all three of us.' : 'Beat all three of us, then talk to the morshed to train.') } };
      Object.defineProperty(n.tr, 'name', { get: () => (isGirl() ? girls : boys)[k] });
      Object.defineProperty(n.tr, 'type', { get: () => { const ty = [...new Set(WORDS.filter(w => w.route === route).map(w => w.type))]; return ty[k % ty.length]; } });
      Object.defineProperty(n, 'look', { get: () => (en ? (isGirl() ? 'boxerF' : 'boxer') : (isGirl() ? 'pahlevanF' : 'pahlevan')) });
      n.talk = () => trainerTalk(n);
      NPCS.push(n); TRAINER_NPCS.push(n);
    });
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
  if (n.tr) { if (n.tr.lang !== LANG) return false; const st = (S.tr || {})[n.tr.id] || {}; if (st.won && !wantsRematch(st)) return false; }
  const p = npcPos(n); if (!p || p.map !== curMap.id) return false;
  const [dx, dy] = DIRS[n.dir], wide = !!n.rival || !!n.wide;
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
  try {
    if (n.rival) await rivalBattle(n);
    else if (trState(n.tr.id).won) await offerRematch(n);
    else await trainerBattleFor(n, false);
  } finally { n.tmp = null; n.wpos = null; }
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
  const route = [1, 2, 3, 5, 6, 7][stage];
  const fill = shuffle(WORDS.filter(w => w.route === route));
  const words = [...new Set([...missed.slice(0, size), ...fill])].slice(0, size);
  return words.map((w, i) => ({ w, lvl: Math.max(w.level, lead - 1 + stage + (i === words.length - 1 ? 2 : 0)) }));
}

// ---- rematches: after you rest, beaten trainers come and ask once ----
const wantsRematch = st => st.won && st.rem !== (S.rest || 0) && st.asked !== (S.rest || 0);
async function offerRematch(n) {
  const t = n.tr, st = trState(t.id);
  st.asked = S.rest || 0;
  if (await ask(`${t.name}: Hey, it's you! I've been practicing. Want a rematch?`)) { await trainerBattleFor(n, true); return; }
  await say(T(t.name, "Okay, maybe next time. I'll be practicing!"));
}

// ---- trainers wander a little around their spot, and turn to look around ----
let wanderT = 0;
function wanderTick(now) {
  if (now - wanderT < 900 || !curMap || !S) return; wanderT = now;
  for (const n of TRAINER_NPCS) {
    if (n.noWander || n.rival || n.tmp || (n.hidden && n.hidden()) || (n.tr && n.tr.lang !== LANG)) continue;
    const home = NPC_POS[n.marker]; if (!home || home.map !== curMap.id) continue;
    if (Math.abs(home.y - PL.y) > 7) continue; // only people near the screen move
    if (rand() > 0.3) continue;
    const p = npcPos(n);
    if (rand() < 0.45) { n.dir = ['up', 'down', 'left', 'right'][Math.floor(rand() * 4)]; continue; }
    const d = ['up', 'down', 'left', 'right'][Math.floor(rand() * 4)], [dx, dy] = DIRS[d], nx = p.x + dx, ny = p.y + dy;
    if (Math.abs(nx - home.x) > 2 || Math.abs(ny - home.y) > 2) continue;
    if ((nx === PL.x && ny === PL.y) || solidAt(curMap, nx, ny) || curMap.grid[ny][nx] === '=' || curMap.grid[ny][nx] === 'ǁ') continue;
    if (Object.values(curMap.doors || {}).some(dd => dd.x === nx && dd.y === ny)) continue;
    n.dir = d; n.wpos = { x: nx, y: ny };
  }
  // a trainer who wandered into view of you comes over
  if (!PL.moving) checkTrainers();
}

// ---- talking to trainers ----
async function trainerTalk(n) {
  const t = n.tr, st = trState(t.id);
  if (!st.won) { await trainerBattleFor(n, false); return; }
  const rest = S.rest || 0;
  if (st.rem !== rest && S.team.some(m => m.hp > 0)) {
    st.asked = rest;
    if (await ask(`${t.name}: You again! I've been practicing. Want a rematch?`)) { await trainerBattleFor(n, true); return; }
  }
  await say([T(t.name, t.tip()), ...(st.rem === rest ? ['(Rest at a teahouse or café, and they will be ready for a rematch.)'.replace('teahouse or café', LANG === 'en' ? 'café' : 'teahouse')] : [])]);
}
async function trainerBattleFor(n, rematch) {
  const t = n.tr, st = trState(t.id);
  const won = await trainerBattle({ name: t.name, short: t.name.split(' ').slice(-1)[0], look: n.look, line: rematch ? "This time I won't hold back!" : t.hello }, trainerTeam(n, rematch), t.gym ? 'boss' : 'battle');
  if (!won) return;
  if (rematch) st.rem = S.rest || 0; else { st.won = true; st.rem = S.rest || 0; S.daftar += 1; }
  await say([T(t.name, t.lose), T(t.name, t.tip()), ...(rematch ? [] : [`${esc(t.name)} gave you a ${DAF()}. You have ${S.daftar}.`])]);
  writeSave();
}
async function rivalBattle(n) {
  const k = n.rival.stage, name = rivalName(), [hello, lose] = RIVAL_LINES[k];
  const won = await trainerBattle({ name: `${name}, YOUR RIVAL`, short: name, prize: 30 + k * 10, look: n.look, line: hello.replace('{N}', esc(S.name)) }, rivalTeam(k), 'boss');
  if (!won) { await say(T(name, "Ha! I knew I'd win. Go study, then come find me again!")); return; }
  S.rival = k + 1; S.daftar += 3;
  await say([T(name, lose), `${esc(name)} gave you 3 ${DAF()}S. You have ${S.daftar}.`]);
  writeSave();
}

// ---- the trainer battle: like a wild battle, but no catching or running, and a whole team ----
const TR_NEXT_LINES = ["Not bad! But I'm not done yet.", "Okay, that one was easy. Try this!", "Hmm. Time for my next one!", "You got lucky. Here's another!"];
const TR_LAST_LINES = ["This is my last one, and my best!", "One left. Don't get comfortable!", "Last chance. Let's go!"];
// a big picture of a trainer for the battle screen
const TRAINER_PIC = {};
function trainerPicUrl(look) {
  if (TRAINER_PIC[look]) return TRAINER_PIC[look];
  const cv = document.createElement('canvas'); cv.width = 192; cv.height = 192; const c = cv.getContext('2d');
  c.scale(10, 10); c.translate(1.6, 2.6); drawChar(c, 0, 0, LOOKS[look] || LOOKS.player, 'down', 0);
  return (TRAINER_PIC[look] = cv.toDataURL());
}
async function trainerBattle(tr, team, music) {
  if (!S.team.some(m => m.hp > 0)) return false;
  BT.trainer = { ...tr, left: team.length, total: team.length }; BT.boss = null; BT.me = lead();
  const mk = o => ({ w: o.w, lvl: o.lvl, max: maxHp(o.lvl), hp: maxHp(o.lvl) });
  BT.foe = mk(team[0]);
  // the trainer steps up first, says something, then calls out their Lenguamon
  BT.trainer.intro = true;
  await battleIntro(music);
  await say(`${esc(tr.name)} wants to battle!`);
  if (tr.line) await say(T(esc(tr.short), tr.line));
  for (let i = 0; i < team.length; i++) {
    const w = team[i].w; S.seen[w.key] = true;
    if (i) {
      BT.trainer.intro = true; BT.foe = mk(team[i]); bDraw();
      await say(T(esc(tr.short), i === team.length - 1 ? pick(TR_LAST_LINES) : pick(TR_NEXT_LINES)));
    }
    if (BT.trainer.intro) { const sp = $('#b-foe-spr'); sp.classList.add('tr-out'); await sleep(380); BT.trainer.intro = false; bDraw(); sp.classList.remove('tr-out'); await anim('#b-foe-spr', 'tr-in', 380); }
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
  addWin();
  await earn(tr.prize || team.reduce((a, o) => a + 3 + Math.floor(o.lvl / 3), 0), `${esc(tr.short)} paid you`);
  BT.trainer = null; writeSave(); await battleOutro();
  return true;
}
