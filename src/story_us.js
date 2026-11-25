// ===== LENGUAMON English mode: a Persian-speaking hero learns English across America =====
// Dialogue is in English (intermediate level) with Persian help under key phrases.
Object.assign(LOOKS, {
  ranger: { skin: '#d8a070', hair: '#2a1a10', hairStyle: 'bun', top: '#6a7a4a', top2: '#4a5a32', legs: '#5a4a32', cap: '#a8875a' },
  trooper: { skin: '#eab890', hair: '#3a2a1a', top: '#8a7a5a', top2: '#5a4a32', legs: '#3a3a40', stache: true, cap: '#6a5a3a', glasses: true },
  ceo: { skin: '#f0c49c', hair: '#c89a5a', hairStyle: 'swoop', top: '#4a4e58', top2: '#2a2e38', legs: '#3a4a6a', tee: '#e8e4dc', kicks: '#f4f4f0' },
  robot: { skin: '#b8c0cc', hair: '#8a8e96', hairStyle: 'bald', top: '#3a3e4a', top2: '#1a1e2a', legs: '#2a2e38', cyber: true },
  cabbie: { skin: '#e0b088', hair: '#3a3a3a', top: '#f0c030', top2: '#2a2a2a', legs: '#2a2a30', stache: true, cap: '#3a3a3a' },
  coach: { skin: '#c08a60', hair: '#1a1410', hairStyle: 'bald', top: '#c8323a', top2: '#8a1a20', legs: '#2a2a3a', coat: true },
  coachF: { skin: '#d8a070', hair: '#2a1a10', hairStyle: 'bun', top: '#c8323a', top2: '#8a1a20', legs: '#2a2a3a', coat: true },
  boxer: { skin: '#b07850', hair: '#1a1410', top: '#f4f0e8', top2: '#c8c4b8', legs: '#2a5aa8' },
  boxerF: { skin: '#e8b890', hair: '#3a2010', hairStyle: 'bun', top: '#f4f0e8', top2: '#c8c4b8', legs: '#c8323a' },
  barista: { skin: '#e8b890', hair: '#7a7a78', hairStyle: 'swoop', top: '#8a6a4a', top2: '#5a4430', legs: '#3a3e48', apron: '#2e6a46', stache: false },
  baristaF: { skin: '#e8b890', hair: '#4a4038', hairStyle: 'bun', top: '#2a2a2e', top2: '#141416', legs: '#3a3e48', apron: '#2e6a46' },
  waitress: { skin: '#f0c49c', hair: '#c8843a', hairStyle: 'bun', top: '#7ac8c0', top2: '#4a9890', legs: '#7ac8c0', apron: true },
  waitress2: { skin: '#b07850', hair: '#1a1410', hairStyle: 'bun', top: '#e8a0b8', top2: '#b86a88', legs: '#e8a0b8', apron: true },
  waitress3: { skin: '#e8b890', hair: '#e8d8a0', hairStyle: 'bun', top: '#f0d070', top2: '#c8a040', legs: '#f0d070', apron: true },
  grandpa: { skin: '#e8b890', hair: '#e8e8e8', hairStyle: 'bald', top: '#7a5a3a', top2: '#5a3e24', legs: '#3a3a4a', glasses: true, stache: true },
  gma: { skin: '#e8b890', hair: '#e0e0e8', hairStyle: 'bun', top: '#a86a8a', top2: '#7a4a64', legs: '#4a3a4a', glasses: true },
  surfer: { skin: '#d8a070', hair: '#e8c060', hairStyle: 'long', top: '#3ab0c8', top2: '#1a7a90', legs: '#e8742a' },
  biker: { skin: '#e0b088', hair: '#3a2a1a', top: '#2a2a2a', top2: '#111', legs: '#3a4a6a', beard: true, stache: true },
  trucker: { skin: '#e8b890', hair: '#5a3a1a', top: '#c8323a', top2: '#8a1a20', legs: '#3a4a6a', cap: '#2a5aa8' },
  tech: { skin: '#c89070', hair: '#1a1410', hairStyle: 'long', top: '#5a5ac8', top2: '#3a3a90', legs: '#2a2a3a', glasses: true },
  kid: { skin: '#f0c49c', hair: '#5a3818', top: '#f0c020', top2: '#c89000', legs: '#3858a8', small: true },
});
const EN_N = (boy, girl) => G(boy, girl || boy);

// ---- the five English bosses: [they say, -, Persian hint, you reply, (typed reply), Persian meaning of your reply] ----
const BOSSES_EN = {
  b1: { name: 'CHP OFFICER', look: 'chp', lvl: 14, route: 1, need: WINS_NEEDED, showEn: true, optEn: true,
    intro: [`Pull over! License and registration, please. ${PF('بزنید کنار! گواهینامه و کارت ماشین، لطفاً.')}`, "Nobody drives into San Francisco until I'm sure they can talk like a local."],
    lines: [
      ['Good afternoon. Do you know why I pulled you over?', '', 'عصر بخیر. می‌دونید چرا نگهتون داشتم؟', 'No, officer. Was I speeding?', '', 'نه، جناب سروان. سرعتم زیاد بود؟'],
      ['You were going 75 in a 65 zone.', '', 'تو منطقه‌ی ۶۵، ۷۵ تا می‌رفتید.', "I'm sorry, I didn't see the sign.", '', 'ببخشید، تابلو رو ندیدم.'],
      ["Can I see your driver's license?", '', 'می‌تونم گواهینامه‌تون رو ببینم؟', 'Sure, here you go.', '', 'حتماً، بفرمایید.'],
      ['Where are you headed today?', '', 'امروز کجا می‌رید؟', "I'm headed to San Francisco.", '', 'دارم می‌رم سان‌فرانسیسکو.'],
      ['Is this your car?', '', 'این ماشین خودتونه؟', "No, it's a rental car.", '', 'نه، ماشین کرایه‌ایه.'],
      ['What brings you to California?', '', 'چی شما رو به کالیفرنیا آورده؟', "I'm on a road trip.", '', 'دارم سفر جاده‌ای می‌رم.'],
      ['Have you had anything to drink today?', '', 'امروز چیزی نوشیدید؟', 'No, just coffee.', '', 'نه، فقط قهوه.'],
      ["Alright, I'll let you off with a warning.", '', 'باشه، فقط بهتون اخطار می‌دم.', 'Thank you, officer. I appreciate it.', '', 'ممنون، جناب سروان. لطف کردید.'],
      ['Drive safe, and slow down!', '', 'با احتیاط رانندگی کنید و آهسته‌تر!', 'I will. Have a good one!', '', 'حتماً. روز خوبی داشته باشید!'],
    ],
    beaten: "You talk like a local, all right. Go on, San Francisco is straight ahead. And watch that speed limit!",
  },
  b2: { name: 'STARTUP CEO', look: 'ceo', lvl: 22, route: 2, need: WINS_NEEDED, showEn: true, optEn: false,
    intro: ["Hey! I'm the CEO of the hottest startup in San Francisco. Let's circle back on your journey.", 'Nobody leaves this city without nailing my job interview. Ready to disrupt?'],
    lines: [
      ['So, tell me about yourself.', '', 'خب، از خودت بگو.', 'I work hard and I learn quickly.', '', 'سخت کار می‌کنم و سریع یاد می‌گیرم.'],
      ['Why do you want to work here?', '', 'چرا می‌خوای اینجا کار کنی؟', "I'm excited about your company's mission.", '', 'از هدف شرکت شما هیجان‌زده‌ام.'],
      ["What's your biggest weakness?", '', 'بزرگ‌ترین نقطه ضعفت چیه؟', "I'm still improving my English.", '', 'هنوز دارم انگلیسیم رو بهتر می‌کنم.'],
      ['Can you work under pressure?', '', 'می‌تونی زیر فشار کار کنی؟', 'Yes, I work well under pressure.', '', 'بله، زیر فشار خوب کار می‌کنم.'],
      ['Where do you see yourself in five years?', '', 'پنج سال دیگه خودت رو کجا می‌بینی؟', "I'd like to be leading a team.", '', 'دوست دارم یک تیم رو رهبری کنم.'],
      ['We need this by Friday. Can you make the deadline?', '', 'تا جمعه لازمش داریم. به مهلت می‌رسی؟', "No problem, I'll get it done.", '', 'مشکلی نیست، انجامش می‌دم.'],
      ["Let's take this offline and circle back.", '', 'بعداً جداگانه درباره‌اش حرف می‌زنیم.', "Sounds good. I'll follow up by email.", '', 'خوبه. با ایمیل پیگیری می‌کنم.'],
      ['Do you have any questions for me?', '', 'سؤالی از من داری؟', 'Yes. What are the benefits?', '', 'بله. مزایاش چیه؟'],
      ["Great! We'll get back to you.", '', 'عالیه! بهت خبر می‌دیم.', 'Thanks for your time!', '', 'ممنون که وقت گذاشتید!'],
    ],
    beaten: "Wow. You're hired! Actually, never mind, you're too good for us. The coast road north to Seattle is all yours.",
  },
  b3: { name: 'THE CYBORG', look: 'cyborg', lvl: 30, route: 3, need: WINS_NEEDED, showEn: false, optEn: false, lair: true,
    intro: ['Ducking hello! I am THE CYBORG: half human, half autocorrect.', "I've taken over the Space Needle and I'm changing everyone's words. 'Love' becomes 'glove'! 'Friend' becomes 'fiend'!", 'Prove you can still say what you mean. No Persian hints this time!'],
    lines: [
      ['Hello. How are you feeling today?', '', 'سلام. امروز چه حسی داری؟', "I'm in a good mood, thanks for asking.", '', 'سرحالم، ممنون که پرسیدی.'],
      ['Your English is terrible!', '', 'انگلیسیت افتضاحه!', "I don't think so. I'm learning fast.", '', 'فکر نمی‌کنم. دارم سریع یاد می‌گیرم.'],
      ['Are you nervous?', '', 'مضطربی؟', "A little, but I'm not giving up.", '', 'یه کم، ولی تسلیم نمی‌شم.'],
      ['I changed all your words. Are you confused?', '', 'همه کلمه‌هات رو عوض کردم. گیج شدی؟', 'Not at all. I can figure it out.', '', 'اصلاً. می‌تونم سر دربیارم.'],
      ['What do you think of my changes?', '', 'نظرت درباره تغییرات من چیه؟', 'To be honest, I totally disagree with them.', '', 'راستش، کاملاً باهاشون مخالفم.'],
      ['Everyone loves autocorrect!', '', 'همه عاشق تصحیح خودکارن!', "I see your point, but that's not true.", '', 'منظورت رو می‌فهمم، ولی درست نیست.'],
      ['Why are you here?', '', 'چرا اینجایی؟', "I'm here to set the words free.", '', 'اومدم کلمه‌ها رو آزاد کنم.'],
      ["You're frustrated, aren't you?", '', 'کلافه شدی، نه؟', "No, I'm relieved. I'm almost done.", '', 'نه، خیالم راحته. تقریباً تموم شد.'],
      ['Words are mine!', '', 'کلمه‌ها مال منن!', 'Words belong to everyone.', '', 'کلمه‌ها مال همه هستن.'],
      ['Nooo! Error! Error!', '', 'نه! خطا! خطا!', 'Goodbye, Cyborg!', '', 'خداحافظ، سایبورگ!'],
    ],
    beaten: "Syntax error... SYSTEM OVERLOAD! This isn't over! In NEW YORK I'll autocorrect the whole city! (THE CYBORG flew east. Seattle's words are free again!)",
  },
  b4: { name: 'NEW YORK CABBIE', look: 'cabbie', lvl: 36, route: 5, need: WINS_NEEDED, showEn: true, optEn: false,
    intro: ["Hey, I'm drivin' here! You need a ride into the city or what?", "Nobody gets into New York unless they can keep up with a New York cabbie. Let's go, let's go!"],
    lines: [
      ['Where to, pal?', '', 'کجا می‌ری، رفیق؟', 'Times Square, please.', '', 'تایمز اسکوئر، لطفاً.'],
      ['You in a hurry?', '', 'عجله داری؟', "Yes, I'm running late.", '', 'بله، دارم دیر می‌کنم.'],
      ["Traffic's crazy. It's rush hour.", '', 'ترافیک دیوونه‌کننده‌ست. ساعت شلوغیه.', 'Can you take a different route?', '', 'میشه از یه مسیر دیگه برید؟'],
      ['We gotta take a detour.', '', 'باید از مسیر انحرافی بریم.', 'Okay, sounds good.', '', 'باشه، خوبه.'],
      ['First time in New York?', '', 'اولین باره میای نیویورک؟', "Yes, I'm new in town.", '', 'بله، تازه به این شهر اومدم.'],
      ['How long are you staying?', '', 'چقدر می‌مونی؟', 'Just a week. I want to see everything.', '', 'فقط یه هفته. می‌خوام همه‌جا رو ببینم.'],
      ["That'll be forty bucks.", '', 'می‌شه چهل دلار.', 'Can I pay by card?', '', 'می‌تونم با کارت پرداخت کنم؟'],
      ['Sure thing. Here\'s your receipt.', '', 'حتماً. این هم رسیدت.', 'Thanks. Keep the change.', '', 'ممنون. بقیه‌اش مال خودت.'],
      ['Welcome to New York, pal!', '', 'به نیویورک خوش اومدی، رفیق!', 'Thanks! Have a good one!', '', 'ممنون! روز خوبی داشته باشی!'],
    ],
    beaten: "Ha! You talk like a real New Yorker! The bridge is open, pal. Go on in!",
  },
  b5: { name: 'THE CYBORG', look: 'cyborg', lvl: 44, route: 6, need: WINS_NEEDED, showEn: false, optEn: false, lair: true,
    intro: ["You AGAIN?! I've plugged into the antenna on top of the Empire State Building!", "Every phone, every sign, every subway map in New York is mine. 'Pizza' is now 'piazza'!", 'One last conversation. Idioms, no hints. Fail, and the city that never sleeps will never speak again!'],
    lines: [
      ['Long time no see. Did you miss me?', '', 'خیلی وقته ندیدمت. دلت برام تنگ شده بود؟', 'Not really, but here I am.', '', 'نه واقعاً، ولی اینجام.'],
      ['This city is too big for you!', '', 'این شهر برای تو خیلی بزرگه!', "It's a piece of cake.", '', 'مثل آب خوردنه.'],
      ['How did you get here so fast?', '', 'چطوری این‌قدر سریع رسیدی؟', 'I took the subway.', '', 'با مترو اومدم.'],
      ["Let's be honest. You can't beat me.", '', 'بیا رک باشیم. نمی‌تونی منو شکست بدی.', "Let's not beat around the bush. I'm here to win.", '', 'حاشیه نریم. اومدم که ببرم.'],
      ['Want to make a deal?', '', 'می‌خوای معامله کنیم؟', "No thanks. I'd rather not.", '', 'نه ممنون. ترجیح می‌دم نه.'],
      ["I'll spill the beans: I have no weakness!", '', 'رازم رو لو می‌دم: هیچ نقطه ضعفی ندارم!', 'Everyone has a weakness.', '', 'همه یه نقطه ضعفی دارن.'],
      ['Are we on the same page?', '', 'هم‌نظریم؟', "We're definitely not on the same page.", '', 'قطعاً هم‌نظر نیستیم.'],
      ["Fine! Let's call it a day.", '', 'باشه! برای امروز بسه.', "Not yet. I'm not giving up.", '', 'هنوز نه. تسلیم نمی‌شم.'],
      ['Why do you even care about English?', '', 'اصلاً چرا انگلیسی برات مهمه؟', 'Because knowledge is power.', '', 'چون دانایی، توانایی است.'],
      ['Error... error... shutting down...', '', 'خطا... خطا... در حال خاموش شدن...', 'Goodbye, Cyborg. Keep me posted!', '', 'خداحافظ، سایبورگ. منو در جریان بذار!'],
    ],
    beaten: "System... shutting... dowwwn... (THE CYBORG's circuits fizzled out. Every word in America is free again!)",
  },  b6: { name: 'GHOST OF WASHINGTON', look: 'ghostgw', lvl: 52, route: 7, need: WINS_NEEDED, showEn: false, optEn: false, lair: true,
    intro: ['Good morrow, traveler. I am the ghost of George Washington, first President of these United States.', 'For more than two hundred years I have watched people from every corner of the earth come here and learn this language.', 'Let us converse, in English and only in English, and you shall show me what you have learned.'],
    lines: [
      ['Who goes there? State your name!', '', 'کی اونجاست؟ اسمت رو بگو!', "My name is {NAME}. It's an honor to meet you, sir.", '', 'اسم من {NAME} است. افتخار آشنایی با شما رو دارم، قربان.'],
      ["I haven't had a visitor in over two hundred years!", '', 'بیش از دویست ساله که مهمون نداشتم!', 'Time flies. You must have a lot of stories.', '', 'زمان زود می‌گذره. حتماً کلی داستان دارید.'],
      ['Where did you learn to speak English so well?', '', 'کجا انگلیسی رو این‌قدر خوب یاد گرفتی؟', 'I learned it on a road trip across America.', '', 'تو یه سفر جاده‌ای در سراسر آمریکا یادش گرفتم.'],
      ['They say I could not tell a lie. Do you believe that?', '', 'می‌گن من نمی‌تونستم دروغ بگم. باور می‌کنی؟', "Honestly, I think it's just a legend.", '', 'راستش، فکر می‌کنم فقط یه افسانه‌ست.'],
      ['What do you think of my city?', '', 'نظرت درباره شهر من چیه؟', 'It takes my breath away.', '', 'نفسم رو بند میاره.'],
      ['Would you have crossed the icy Delaware River with me?', '', 'با من از رودخونه یخ‌زده دلاور رد می‌شدی؟', "Absolutely. I'd follow you through thick and thin.", '', 'حتماً. تو سختی و آسونی دنبالتون میام.'],
      ['What matters most in a free country?', '', 'تو یه کشور آزاد چی از همه مهم‌تره؟', 'Freedom of speech, without a doubt.', '', 'بدون شک، آزادی بیان.'],
      ['Was it hard to learn a new language?', '', 'یاد گرفتن یه زبان جدید سخت بود؟', 'It was an uphill battle, but it was worth it.', '', 'یه نبرد سخت بود، ولی ارزشش رو داشت.'],
      ['You have earned the respect of a nation.', '', 'تو احترام یه ملت رو به دست آوردی.', "I'm flattered. That means the world to me.", '', 'خیلی لطف دارید. برام دنیا ارزش داره.'],
      ['Farewell, my friend. Go in peace.', '', 'خداحافظ دوست من. به سلامت برو.', 'Farewell, Mr. President. Rest in peace.', '', 'خداحافظ آقای رئیس‌جمهور. روحتون شاد.'],
    ],
    beaten: "Splendid. Splendid! You speak like a true citizen of the world. Go forth, my friend. (The ghost of George Washington tipped his hat, and faded into the morning mist over the Capitol.)",
  },

};
// Boss portraits are drawn from the map sprite looks
function nextGoalEN() {
  const w = r => `${winsIn(r)} / ${WINS_NEEDED}`;
  if (!S.flags.starter) return "Visit Professor Haydeh at the English school.";
  if (!S.flags.b1) return `Win ${WINS_NEEDED} battles on ${ROUTE_NAMES[1]} (${w(1)}), then get past the CALIFORNIA HIGHWAY PATROL (CHiPs) on the way to San Francisco.`;
  if (!S.flags.b2) return `Win ${WINS_NEEDED} battles in ${ROUTE_NAMES[2]} (${w(2)}), then ace the STARTUP CEO's job interview.`;
  if (!S.flags.b3) return `Win ${WINS_NEEDED} battles on the ${ROUTE_NAMES[3]} (${w(3)}), then defeat THE CYBORG at the Space Needle in Seattle.`;
  if (!S.flags.b4) return `Follow THE CYBORG east through the Rockies and Chicago. Win ${WINS_NEEDED} battles in ${ROUTE_NAMES[5]} (${w(5)}), then keep up with the NEW YORK CABBIE.`;
  if (!S.flags.b5) return `Win ${WINS_NEEDED} battles in ${ROUTE_NAMES[6]} (${w(6)}), then face THE CYBORG at the Empire State Building.`;
  if (!S.flags.b6) return `Take the road south from the east side of New York. Win ${WINS_NEEDED} battles on ${ROUTE_NAMES[7]} (${w(7)}), then meet the GHOST OF GEORGE WASHINGTON at the Capitol in Washington, DC.`;
  return `You beat the game! Keep filling your Lenguadex: ${caughtCount()} / ${WORDS.length}.`;
}

// ---- Santa Fe ----
npc('Ю', { look: 'maman', dir: 'left', talk: async () => {
  if (!S.flags.starter) { await say([T('MAMAN', `Good morning, ${nm()} ${PF('جان')}! ${PF('صبح بخیر')}`), "Professor Haydeh is waiting for you at her English school, across the street.", `Remember: in America people say ${E("how's it going?", 'اوضاع چطوره؟')} instead of "hello".`]); return; }
  await say(T('MAMAN', `${nm()} ${PF('جان')}, you look ${E('exhausted', 'خیلی خسته')}. Time for bed!`));
  await sleepScene(); await say([T('MAMAN', `${E('Good morning!', 'صبح بخیر!')}`), 'You and your Lenguamon are full of energy!', T('MAMAN', `${E('Good luck!', 'موفق باشی!')} Call me when you get there!`)]);
} });
npc('Я', { look: 'haydeh', talk: async () => {
  if (!S.flags.starter) { await starterSceneEN(); return; }
  if (S.flags.b6 && !S.flags.ending) { await endingSceneEN(); return; }
  await say([T('HAYDEH', `Hi, ${nm()}! ${E("How's it going?", 'اوضاع چطوره؟')}`), `You have caught ${B(caughtCount())} words.`, `NEXT: ${nextGoalEN()}`]);
  if (S.daftar < 5) { S.daftar = 5; SND.fx('good'); await say('HAYDEH: Take some fresh NOTEBOOKS. You now have 5.'); }
} });
npc('Ф', { look: 'arash', lookG: 'ava', dir: 'up', talk: async () => {
  await say([T(EN_N('DANIEL', 'SARA'), "I moved here from Shiraz last year. At first, small talk was the hardest part!"), `When an American says ${E("what's up?", 'چه خبر؟')}, don't explain your whole life. Just say ${E('not much, you?', 'خبر خاصی نیست، تو چی؟')}`]);
} });
npc('Γ', { look: 'ranger', where: () => S.flags.starter ? [8, 63] : null, talk: async () => {
  if (!S.flags.starter) { await say([T('RANGER LUPE', `${E('Hold on a second!', 'یه لحظه صبر کن!')}`), 'Wild Lenguamon live in the sagebrush along Route 66. You need your own Lenguamon first!', 'Go see Professor Haydeh at the English school.']); return; }
  await say(T('RANGER LUPE', `The road is open. ${E('Stay safe out there!', 'مراقب خودت باش!')}`));
} });
npc('Л', { look: 'golnaz', talk: async () => {
  await say([T('MRS. GARCIA', 'Wild Lenguamon hide in the sagebrush and the tall grass.'), "Weaken them with quiz attacks, then write them in your NOTEBOOK to catch them!", "If you get tired, the diner in the south-east corner has the best coffee and pie in New Mexico."]);
} });
npc('Ы', { look: 'barista', lookG: 'baristaF', talk: () => teaHost(G('JACK', 'ROSA'), null, ["Hey, welcome in! First time at our café?", `To order, just say ${E("can I get a latte, please?", "میشه یه لاته بگیرم، لطفاً؟")}`, "This one's on the house. Enjoy!"]) });
npc('Ѳ', { look: 'grandpa', lookG: 'gma', dir: 'left', talk: () => elderTalk(0, EN_N('GRANDPA JOE', 'GRANDMA ROSE'), EN_N("Sit down, kid. I've been drinking coffee at this counter for fifty years, and I know every saying there is.", "Sit with me, sweetheart. My mother taught me these sayings, and now I'll teach you.")) });
// ---- Route 66 ----
npc('З', { look: 'trucker', dir: 'left', talk: async () => {
  await say([T(EN_N('BIG MIKE', 'BIG DEB'), `I've been driving Route 66 for thirty years. When it's time to go, we say ${E("let's hit the road!", 'راه بیفتیم!')}`), `And if you're late, text your friends: ${E("I'm running late", 'دارم دیر می‌کنم')}.`]);
} });
npc('И', { look: 'biker', lookG: 'surfer', dir: 'right', talk: async () => {
  await say([T(EN_N('WYATT', 'NORA'), 'Phrasal verbs are a verb plus a little word. They change the meaning completely!'), `${E('Give up', 'تسلیم شدن')} means stop trying. ${E('Give back', 'پس دادن')} means return something. ${E('Give in', 'کوتاه آمدن')} means you finally agree.`]);
} });
// ---- San Francisco ----
npc('Б', { look: 'tech', lookG: 'tech', dir: 'right', talk: async () => {
  await say([T(EN_N('KEVIN', 'ANA'), "I'm a barista. Ordering coffee here is a whole language!"), `Try: ${E("Can I get a large oat milk latte to go?", 'یه لاته بزرگ با شیر جو دوسر برای بیرون می‌دید؟')}`, `In America we say ${E('Can I get...?', 'می‌شه... بدید؟')} more than "I want".`]);
} });
npc('Д', { look: 'tech', dir: 'left', talk: async () => {
  await say([T(EN_N('JASON', 'PRIYA'), `Sorry, I'm ${E('swamped', 'سرم خیلی شلوغه')}. I have three meetings and a ${E('deadline', 'مهلت')} today.`), `At work, if you can't answer now, say ${E("I'll get back to you", 'بعداً بهت خبر می‌دم')}.`]);
} });
npc('Ж', { look: 'kid', dir: 'left', talk: async () => {
  await say([T(EN_N('LEO', 'MIA'), `Did you see the Golden Gate Bridge? It's ${E('awesome', 'فوق‌العاده')}!`), `Kids here say ${E("that's awesome!", 'خیلی باحاله!')} about everything. My mom says ${E('use your inside voice', 'آروم‌تر حرف بزن')}.`]);
} });
npc('Π', { look: 'grandpa', lookG: 'gma', dir: 'left', talk: () => elderTalk(1, EN_N('GRANDPA AL', 'GRANDMA LORRAINE'), EN_N("I ran a bakery down on the wharf for forty years. A businessman learns a lot of sayings!", "I sold sourdough bread here for forty years. Let me tell you something.")) });
npc('Э', { look: 'barista', lookG: 'baristaF', talk: () => teaHost(G('GUS', 'PEARL'), null, ["Hi there! You look like you could use a break.", `Baristas often ask ${E("for here or to go?", "اینجا میل می‌کنید یا می‌برید؟")}`, "For here, then. Sit down, it's on me."]) });
// ---- Pacific Coast Highway ----
npc('Φ', { look: 'surfer', dir: 'left', talk: async () => {
  await say([T(EN_N('DYLAN', 'AUTUMN'), `Dude, the waves today are ${E('epic', 'فوق‌العاده')}!`), `Out here we're pretty ${E('laid-back', 'آرام و بی‌خیال')}. If something goes wrong, we just say ${E('no worries', 'اشکالی نداره')}.`]);
} });
npc('Ψ', { look: 'gma', dir: 'left', talk: async () => {
  await say([T('MARGARET', "I keep the lighthouse on these cliffs. On foggy nights I feel a little lonely."), `When you miss your country, in English you are ${E('homesick', 'دلتنگ وطن')}. It's okay to feel that way.`]);
} });
// ---- Seattle ----
npc('Λ', { look: 'cyborg', hidden: () => !!S.flags.b3, talk: async () => { await gateBoss('b3'); } });
npc('Ξ', { look: 'shirin', dir: 'left', talk: async () => {
  if (S.flags.b5) { await say([T('JUNE', `You did it! You beat THE CYBORG for good. ${E("I'm so proud of you!", 'خیلی بهت افتخار می‌کنم!')}`)]); return; }
  if (S.flags.b3) { await say([T('JUNE', 'Thank you! The Space Needle is free again.'), 'But THE CYBORG flew east, to New York! Take the highway at the north-west corner of Seattle.']); return; }
  await say([T('JUNE', "Hi. I'm June. I give tours of the Space Needle."), "THE CYBORG has taken it over! It's changing every word in Seattle. My tour script is full of nonsense!", 'Only someone who can really hold a conversation in English can beat it. Please, try!']);
} });
npc('Σ', { look: 'grandpa', lookG: 'gma', dir: 'left', talk: () => elderTalk(2, EN_N('GRANDPA WALT', 'GRANDMA BETTY'), EN_N("It rains a lot in Seattle, so we spend a lot of time indoors telling stories.", "Pull up a chair, dear. Rainy days are for wise words.")) });
npc('Ъ', { look: 'barista', lookG: 'baristaF', talk: () => teaHost(G('DAVE', 'LINDA'), null, ["Welcome! Come in out of the rain.", `Seattle runs on coffee. If you want it with no milk or sugar, say ${E("black, please", "تلخ، لطفاً")}.`, "Today's cup is on the house!"]) });
// ---- the far side of the Rockies ----
npc('Щ', { look: 'grandpa', lookG: 'gma', dir: 'left', talk: () => elderTalk(3, EN_N('GRANDPA EARL', 'GRANDMA DOLORES'), EN_N("I worked on the trains in Chicago my whole life. Listen to an old railroad man.", "I raised six kids in this city. Believe me, I've learned a few things.")) });
npc('Ь', { look: 'barista', lookG: 'baristaF', talk: () => teaHost(G('FRANK', 'MARGE'), null, ["Welcome to Chicago! Cold out there, huh? It's the Windy City.", `If you like it really hot, ask ${E("can I get that extra hot?", "میشه خیلی داغ باشه؟")}`, "Here you go. Warm up!"]) });
npc('Ч', { look: 'grandpa', lookG: 'gma', dir: 'left', talk: () => elderTalk(4, EN_N('GRANDPA SOL', 'GRANDMA ESTHER'), EN_N("I came to New York by boat in 1960 with one suitcase and no English. Now I'm the one teaching!", "I came to this city as a girl, through Ellis Island's old neighborhood. Let me share what I learned.")) });
npc('Й', { look: 'barista', lookG: 'baristaF', talk: () => teaHost(G('TONY', 'ROSIE'), null, ["What can I get ya? This is New York, we talk fast!", `If you don't catch something, it's fine to say ${E("sorry, could you say that again?", "ببخشید، میشه دوباره بگید؟")}`, "Here's your coffee. No charge today!"]) });
npc('Ш', { look: 'cabbie', where: () => S.flags.b4 ? [11, 27] : null, talk: async () => {
  if (S.flags.b4) { await say(T('NEW YORK CABBIE', "Go on, pal, the city's waiting! And don't forget to tip!")); return; }
  await gateBoss('b4');
} });
npc('Ц', { look: 'cyborg', hidden: () => !!S.flags.b5, talk: async () => { if (!S.flags.b4) return; await gateBoss('b5'); } });
npc('Δ', { look: 'chp', where: () => S.flags.b1 ? [11, 48] : null, talk: async () => {
  if (S.flags.b1) { await say(T('CHP OFFICER', `Drive safe! ${E('Buckle up!', 'کمربندت رو ببند!')}`)); return; }
  await gateBoss('b1');
} });
npc('Θ', { look: 'ceo', where: () => S.flags.b2 ? [11, 26] : null, talk: async () => {
  if (S.flags.b2) { await say(T('STARTUP CEO', "Let's touch base later. I have a meeting about our next meeting.")); return; }
  await gateBoss('b2');
} });
// ---- boxing gyms ----
const GYMS_EN = {
  'Ա': { route: 1, city: 'SANTA FE', boy: 'COACH MARTINEZ', girl: 'COACH GLORIA', gym: 'BOXING GYM' },
  'Գ': { route: 2, city: 'SAN FRANCISCO', boy: 'COACH KIM', girl: 'COACH JENNY', gym: 'BOXING GYM' },
  'Ե': { route: 3, city: 'SEATTLE', boy: 'COACH ROBINSON', girl: 'COACH TASHA', gym: 'BOXING GYM' },
  'Է': { route: [4, 5], city: 'CHICAGO', boy: "COACH O'MALLEY", girl: 'COACH MAGGIE', gym: 'BOXING GYM' },
  'Թ': { route: 6, city: 'NEW YORK', boy: 'COACH BROOKS', girl: 'COACH DIANA', gym: 'BOXING GYM' },
};
for (const [m, g] of Object.entries(GYMS_EN)) npc(m, { look: 'coach', lookG: 'coachF', talk: () => gymTalk(g) });
const BOXER_TIPS = {
  'Բ': ['MIGUEL', 'LUCIA', 'roll with the punches', 'کنار آمدن با سختی‌ها', 'When life gets hard, you adapt and keep going.'],
  'Դ': ['ELI', 'MEI', 'saved by the bell', 'درست سر بزنگاه نجات پیدا کردن', 'You were rescued at the very last second.'],
  'Զ': ['MARCUS', 'KEISHA', 'throw in the towel', 'تسلیم شدن', 'It means to give up. Never throw in the towel!'],
  'Ը': ['PADDY', 'BRIDGET', 'below the belt', 'ناجوانمردانه', 'It means unfair. "That comment was below the belt!"'],
  'Ժ': ['DEVON', 'CAMILA', 'go the distance', 'تا آخر ادامه دادن', 'It means finishing something hard. Go the distance, champ!'],
};
for (const [m, [b, gl, idiom, fa, line]] of Object.entries(BOXER_TIPS)) npc(m, { look: 'boxer', lookG: 'boxerF', dir: 'left', talk: async () => {
  await say([T(EN_N(b, gl), `Lots of English idioms come from boxing. Like ${E(idiom, fa)}.`), line]);
} });

// ---- story scenes ----
async function starterSceneEN() {
  const hi = WORDS.find(w => w.tr0 === "how's it going?");
  await say([T('HAYDEH', BI(`Ah, ${nm()}! Come in, come in!`, `آه، ${S.name}! بیا تو، بیا تو!`)),
    BI('In this school we speak English. You already know the basics, so we will start at an intermediate level: real conversations, phrasal verbs, idioms.', 'در این مدرسه انگلیسی حرف می‌زنیم. تو مقدمات را بلدی، پس از سطح متوسط شروع می‌کنیم: گفت‌وگوهای واقعی، افعال عبارتی و اصطلاحات.'),
    BI('Every conversation in America begins with one phrase. And that phrase is...', 'هر گفت‌وگویی در آمریکا با یک عبارت شروع می‌شود. و آن عبارت این است...')]);
  const p = $('#portrait'); p.innerHTML = monImg(hi, 'big') + monTag(hi); p.classList.add('show');
  SND.fx('caught');
  await say([BI(`A little ${B('HOUSE MOUSE')}!`, 'یک موش خانگی کوچولو!'),
    `${BI('It carries the phrase every American says:', 'او عبارتی را با خودش دارد که هر آمریکایی می‌گوید:')} ${E("how's it going?", 'اوضاع چطوره؟')}`,
    BI(`${esc(S.name)} received the ${B('HOUSE MOUSE')}!`, `${S.name} موش خانگی را گرفت!`)]);
  p.classList.remove('show');
  S.team.push(makeMon(hi)); S.caught[hi.key] = true; S.seen[hi.key] = true; S.daftar = 5; S.flags.starter = true;
  await say([
    T('HAYDEH', BI('Wild Lenguamon live along Route 66 and all across America. Each one is an animal with an English word or phrase hidden inside.', 'لنگوامون‌های وحشی در طول جاده‌ی ۶۶ و سراسر آمریکا زندگی می‌کنند. هر کدام حیوانی است که یک کلمه یا عبارت انگلیسی در خودش پنهان کرده.')),
    BI('A battle starts with a quiz: you see the meaning in Persian and TYPE the English.', 'نبرد با یک پرسش شروع می‌شود: معنی فارسی را می‌بینی و انگلیسی‌اش را تایپ می‌کنی.'),
    BI('Answer correctly and your attack lands. Miss, and the wild Lenguamon strikes back with the answer you needed!', 'اگر درست جواب بدهی، حمله‌ات به هدف می‌خورد. اگر اشتباه کنی، لنگوامون وحشی با همان جوابی که لازم داشتی به تو حمله می‌کند!'),
    BI(`Weaken a word, then use a ${B('NOTEBOOK')} to write it down and catch it. Here are 5 NOTEBOOKS.`, 'کلمه را ضعیف کن، بعد با دفتر آن را بنویس و شکارش کن. این پنج دفتر مال تو.'),
    BI('Long phrases are higher level and tougher. Short ones are a good place to start.', 'عبارت‌های بلند سطح بالاتر و سخت‌ترند. عبارت‌های کوتاه برای شروع خوب‌اند.'),
    BI('On the road you will meet the California Highway Patrol (CHiPs), a startup CEO, and THE CYBORG, half human and half autocorrect, who is scrambling the words of Seattle.', 'در راه با پلیس بزرگراه کالیفرنیا، مدیرعامل یک استارتاپ و «سایبورگ» روبه‌رو می‌شوی؛ نیمه‌انسان و نیمه‌ماشینی که کلمه‌های سیاتل را به هم ریخته.'),
    BI('Beyond that lie the Rocky Mountains, Chicago, and finally NEW YORK CITY.', 'بعد از آن کوه‌های راکی، شیکاگو و در آخر شهر نیویورک است.'),
    BI('Every boss tests you with a real conversation. Win them all, and you can handle real life in English!', 'هر غول آخر با یک گفت‌وگوی واقعی امتحانت می‌کند. همه را ببری، از پس زندگی واقعی به انگلیسی برمی‌آیی!'),
    BI('One more thing: practice a little every day. Your progress is saved on this device.', 'یک چیز دیگر: هر روز کمی تمرین کن. پیشرفتت روی همین دستگاه ذخیره می‌شود.'),
    T('HAYDEH', BI('Good luck!', 'موفق باشی!')),
  ]);
  writeSave();
}
async function endingSceneEN() {
  S.flags.ending = true; writeSave(); SND.music('end');
  await say([
    T('HAYDEH', `${nm()}! Six STAR BADGES! ${E("I'm so proud of you!", 'خیلی بهت افتخار می‌کنم!')}`),
    'You talked your way past the California Highway Patrol (CHiPs), a startup CEO and a New York cabbie, you beat THE CYBORG twice, from the Space Needle to the Empire State Building, and you held your own with the ghost of George Washington himself.',
    'You can now handle real life in English: small talk, work, feelings and opinions, road trips, errands, the doctor, the big city, and plenty of idioms.',
    `As we say in Persian: ${PF('خواستن توانستن است')}. Where there's a will, there's a way!`,
  ]);
  const el = $('#portrait'); el.innerHTML = `<div class="end"><div class="end-t">THE END</div><div>${PF('پایان')}</div><div class="end-s">${esc(S.name)} · ${caughtCount()} / ${WORDS.length} Lenguamon</div><div class="end-s">Keep filling your Lenguadex!</div></div>`; el.classList.add('show');
  await waitA(); el.classList.remove('show'); musicForPlace();
  await say(T('HAYDEH', `There are still ${WORDS.length - caughtCount()} words out there. ${E('Keep going!', 'ادامه بده!')}`));
}
async function afterBossEN(id) {
  if (id === 'b3') await say([T('JUNE', `You did it! ${E("You're amazing!", 'فوق‌العاده‌ای!')}`), 'But THE CYBORG flew east toward New York. The highway at the north-west corner of Seattle is open now. Follow it!']);
  if (id === 'b5') await say(['The lights of New York flicker back on. Every sign in the city makes sense again!', 'But a strange, cold wind blows from the south...', `A voice on the wind: ${E('Come to the Capitol, traveler...', 'به کاپیتول بیا، مسافر...')}`, 'The road south to WASHINGTON, DC is open now. Its gate is on the east side of New York, next to the boxing gym.']);
  if (id === 'b6') { await say(['Footsteps hurry up the Capitol steps...', T('HAYDEH', `${nm()}! I took the red-eye flight all the way from Santa Fe! I saw everything on the news!`)]); await endingSceneEN(); }
}

// ---- Washington, DC: the grand finale ----
npc('Ѣ', { look: 'ghostgw', hidden: () => !!S.flags.b6, talk: async () => { if (!S.flags.b5) return; await gateBoss('b6'); } });
npc('Ѫ', { look: 'barista', lookG: 'baristaF', talk: () => teaHost(G('WALTER', 'MAXINE'), null, ["Welcome to DC! Half my customers work in Congress, so everyone here talks about politics.", `A useful phrase when you disagree politely: ${E('with all due respect...', 'با کمال احترام...')}`, 'Here, a coffee on the house. You look like you came a long way.']) });
npc('Ѭ', { look: 'grandpa', lookG: 'gma', dir: 'left', talk: () => elderTalk(5, EN_N('GRANDPA FRANKLIN', 'GRANDMA ELEANOR'), EN_N("I was a tour guide on the National Mall for fifty years. The founders left us plenty of good advice.", "I taught American history for fifty years. The founders left us plenty of good advice, sweetheart.")) });
GYMS_EN['Ծ'] = { route: 7, city: 'WASHINGTON, DC', boy: 'COACH JEFFERSON', girl: 'COACH RUTH', gym: 'BOXING GYM' };
npc('Ծ', { look: 'coach', lookG: 'coachF', talk: () => gymTalk(GYMS_EN['Ծ']) });
npc('Կ', { look: 'boxer', lookG: 'boxerF', dir: 'left', talk: async () => { await say([T(EN_N('ANDRE', 'NIA'), `Lots of English idioms come from boxing. Like ${E("in your corner", 'پشتت بودن، طرفدارت بودن')}.`), "It means someone supports you. Your coach is always in your corner!"]); } });
