// ===== Old Persian sayings (zarb-ol-masal), taught by an elder in every city =====
// [Persian, transliteration, word for word, what it means]
const SAYINGS = [
  // Yazd: patience and effort (Agha Mahmoud / Maman Bozorg)
  ['قطره قطره جمع گردد، وانگهی دریا شود', 'ghatreh ghatreh jam gardad, vangahi darya shavad', 'Drop by drop it gathers, and then it becomes a sea.', 'Small efforts add up. Learn a few words every day!'],
  ['نابرده رنج گنج میسر نمی‌شود', 'nabordeh ranj ganj moyassar nemishavad', 'Without suffering, no treasure is gained.', 'No pain, no gain.'],
  ['جوینده یابنده است', 'juyandeh yabandeh ast', 'The seeker is the finder.', 'Keep looking and you will find it.'],
  ['خواستن توانستن است', 'khastan tavanestan ast', 'To want is to be able.', "Where there's a will, there's a way."],
  ['گر صبر کنی ز غوره حلوا سازی', 'gar sabr koni ze ghureh halva sazi', 'If you are patient, you can make halva from sour grapes.', 'Patience turns sour into sweet.'],
  ['صبر تلخ است ولیکن بر شیرین دارد', 'sabr talkh ast valikan bar-e shirin darad', 'Patience is bitter, but its fruit is sweet.', 'Waiting is hard, but worth it.'],
  ['کار نیکو کردن از پر کردن است', 'kar-e niku kardan az por kardan ast', 'Doing good work comes from doing a lot of it.', 'Practice makes perfect.'],
  ['دیر رسیدن بهتر از هرگز نرسیدن است', 'dir residan behtar az hargez naresidan ast', 'Arriving late is better than never arriving.', 'Better late than never.'],
  // Isfahan: the bazaar, money and neighbours
  ['هر که بامش بیش، برفش بیشتر', 'har ke bamash bish, barfash bishtar', 'Whoever has a bigger roof gets more snow.', 'More money, more problems.'],
  ['مرغ همسایه غازه', 'morgh-e hamsayeh ghaz-e', "The neighbour's hen is a goose.", 'The grass is always greener on the other side.'],
  ['زیره به کرمان بردن', 'zireh be kerman bordan', 'Taking cumin to Kerman.', 'Bringing something to a place that already has plenty of it.'],
  ['کاچی بهتر از هیچی است', 'kachi behtar az hichi ast', 'Kachi (a simple pudding) is better than nothing.', 'Something is better than nothing.'],
  ['تخم‌مرغ دزد، شتر دزد می‌شه', 'tokhm-e morgh dozd, shotor dozd mishe', 'An egg thief becomes a camel thief.', 'Small bad habits grow into big ones.'],
  ['سنگ بزرگ علامت نزدن است', 'sang-e bozorg alamat-e nazadan ast', "Picking up a huge stone is a sign you won't throw it.", 'Giant promises usually mean nothing will happen.'],
  ['آشپز که دو تا شد، آش یا شور می‌شه یا بی‌نمک', 'ashpaz ke do ta shod, ash ya shur mishe ya bi-namak', 'With two cooks, the soup is either too salty or has no salt.', 'Too many cooks spoil the broth.'],
  ['آب در هاون کوبیدن', 'ab dar havan kubidan', 'Pounding water in a mortar.', 'Wasting effort on something useless.'],
  // Shiraz: friendship and kindness, with two lines from the poet Saadi
  ['بنی‌آدم اعضای یک پیکرند', 'bani adam a\'za-ye yek peykarand', 'Human beings are members of one body.', 'All people are connected. (Saadi of Shiraz; the poem hangs at the United Nations.)'],
  ['دوست آن باشد که گیرد دست دوست، در پریشان‌حالی و درماندگی', 'dust an bashad ke girad dast-e dust, dar parishan-hali o darmandegi', "A friend is one who takes a friend's hand in trouble and helplessness.", 'A friend in need is a friend indeed. (Saadi)'],
  ['هر گلی یه بویی داره', 'har goli ye buyi dare', 'Every flower has its own scent.', 'Everyone is special in their own way.'],
  ['با یک گل بهار نمی‌شود', 'ba yek gol bahar nemishavad', "One flower doesn't make spring.", 'One small success is not the whole thing.'],
  ['سالی که نکوست از بهارش پیداست', 'sali ke nekust az baharash peydast', 'A good year shows itself in its spring.', 'A good start shows how things will go.'],
  ['کبوتر با کبوتر، باز با باز', 'kabutar ba kabutar, baz ba baz', 'Pigeon with pigeon, hawk with hawk.', 'Birds of a feather flock together.'],
  ['دوری و دوستی', 'duri o dusti', 'Distance and friendship.', 'A little distance keeps a friendship healthy.'],
  ['یک دست صدا ندارد', 'yek dast seda nadarad', 'One hand makes no sound.', 'You need teamwork.'],
  // Kashan: words, secrets and care
  ['دیوار موش داره، موش هم گوش داره', 'divar mush dare, mush ham gush dare', 'The wall has mice, and the mice have ears.', 'Careful what you say: someone is always listening. (Even MOOSH!)'],
  ['شتر دیدی ندیدی', 'shotor didi, nadidi', "Did you see a camel? You didn't.", 'Keep it a secret.'],
  ['زبان سرخ سر سبز می‌دهد بر باد', 'zaban-e sorkh sar-e sabz midahad bar bad', 'The red tongue throws the green head to the wind.', 'Careless words get you into trouble.'],
  ['از این گوش می‌گیره، از اون گوش در می‌کنه', 'az in gush migire, az un gush dar mikone', 'He takes it in one ear and lets it out the other.', "He doesn't listen."],
  ['تا نباشد چیزکی، مردم نگویند چیزها', 'ta nabashad chizaki, mardom naguyand chizha', "Unless there is a little something, people don't say things.", "Where there's smoke, there's fire."],
  ['حرف حساب جواب ندارد', 'harf-e hesab javab nadarad', 'A sensible word has no answer.', "You can't argue with the truth."],
  ['عجله کار شیطان است', "ajaleh kar-e sheytan ast", "Haste is the devil's work.", 'Slow down: rushing causes mistakes.'],
  ['کار از محکم‌کاری عیب نمی‌کند', 'kar az mohkam-kari eyb nemikonad', 'A job is never harmed by doing it firmly.', 'Better safe than sorry.'],
  // Tehran: life in the big city
  ['خواهی نشوی رسوا، همرنگ جماعت شو', "khahi nashavi rosva, hamrang-e jama'at sho", "If you don't want to stand out in shame, take on the colour of the crowd.", 'When in Rome, do as the Romans do.'],
  ['ماهی رو هر وقت از آب بگیری تازه است', 'mahi ro har vaght az ab begiri tazeh ast', "Whenever you take a fish out of the water, it's fresh.", "It's never too late to start."],
  ['آب که از سر گذشت، چه یک وجب چه صد وجب', 'ab ke az sar gozasht, che yek vajab che sad vajab', 'Once the water is over your head, one span or a hundred is the same.', "When things are already bad, a little worse doesn't matter."],
  ['دست بالای دست بسیار است', 'dast-e bala-ye dast besyar ast', 'There are many hands above every hand.', "There's always someone better."],
  ['هر که طاووس خواهد، جور هندوستان کشد', 'har ke tavus khahad, jowr-e hendustan keshad', 'Whoever wants a peacock must put up with the hardships of India.', 'Great rewards take great effort.'],
  ['از تو حرکت، از خدا برکت', 'az to harekat, az khoda barekat', 'From you, the effort; from God, the blessing.', 'Do your part, and good things will follow.'],
  ['هر چه کنی به خود کنی', 'har che koni be khod koni', 'Whatever you do, you do to yourself.', 'What goes around comes around.'],
  ['مهمان حبیب خداست', 'mehman habib-e khodast', "The guest is God's beloved friend.", 'Guests are treasured in Iran.'],
  // Mashhad and Khorasan: Ferdowsi, Khayyam and the long road home
  ['بسی رنج بردم در این سال سی، عجم زنده کردم بدین پارسی', 'basi ranj bordam dar in sal-e si, ajam zendeh kardam bedin parsi', 'I suffered much these thirty years; I brought Persia back to life with this Persian.', "Ferdowsi's famous line: hard work can keep a whole language alive."],
  ['چو ایران نباشد تن من مباد', 'cho iran nabashad tan-e man mabad', 'If Iran should not exist, let my body not exist.', "A line from the Shahnameh about deep love for one's homeland."],
  ['این نیز بگذرد', 'in niz bogzarad', 'This too shall pass.', 'Hard times, and good times, never last forever.'],
  ['خوش باش که عالم گذران خواهد بود', 'khosh bash ke alam gozaran khahad bud', 'Be happy, for the world is passing.', "Khayyam's advice: enjoy today, life is short."],
  ['مشک آن است که خود ببوید، نه آنکه عطار بگوید', 'moshk an ast ke khod bebuyad, na anke attar beguyad', 'Musk is what smells by itself, not what the perfume seller says.', 'Actions speak louder than words.'],
  ['تا تنور گرم است باید نان را چسباند', 'ta tanur garm ast bayad nan ra chasband', 'Stick the bread on while the oven is hot.', 'Strike while the iron is hot.'],
  ['یک دست صدا ندارد', 'yek dast seda nadarad', 'One hand makes no sound.', 'We need each other: teamwork gets things done.'],
  ['درخت هر چه بارش بیشتر شود، سرش پایین‌تر می‌آید', 'derakht har che baresh bishtar shavad, sarash payin-tar miayad', 'The more fruit a tree carries, the lower it bows its head.', 'The wiser you are, the more humble you become.'],
  ['راستی رستی', 'rasti rasti', 'Truth is salvation.', 'Honesty will save you.'],
  ['هر که بامش بیش، برفش بیشتر', 'har ke bamash bish, barfash bishtar', 'Whoever has a bigger roof has more snow on it.', 'More success brings more responsibility.'],
];
// ===== American sayings (English mode): [saying, plain-English meaning, Persian meaning or the matching Persian proverb] =====
const SAYINGS_EN = [
  // Santa Fe: patience and effort
  ["Rome wasn't built in a day.", 'Big things take time.', 'کارهای بزرگ زمان می‌برند. (گر صبر کنی ز غوره حلوا سازی)'],
  ['Practice makes perfect.', 'The more you do something, the better you get.', 'کار نیکو کردن از پر کردن است'],
  ["Where there's a will, there's a way.", "If you want something enough, you'll find a way.", 'خواستن توانستن است'],
  ['Better late than never.', 'Doing something late is better than not doing it.', 'دیر رسیدن بهتر از هرگز نرسیدن است'],
  ['Slow and steady wins the race.', 'Patience and consistency beat speed.', 'رهرو آن است که آهسته و پیوسته رود'],
  ['No pain, no gain.', 'You have to work hard to get results.', 'نابرده رنج گنج میسر نمی‌شود'],
  ['The early bird catches the worm.', 'People who start early succeed.', 'سحرخیز باش تا کامروا باشی'],
  ['Every cloud has a silver lining.', 'Something good can come from something bad.', 'در ناامیدی بسی امید است'],
  // San Francisco: money and work
  ['Time is money.', 'Wasting time is like wasting money.', 'وقت طلاست'],
  ["Don't put all your eggs in one basket.", "Don't risk everything on one plan.", 'همه تخم‌مرغ‌هایت را در یک سبد نگذار'],
  ["There's no such thing as a free lunch.", 'Nothing is really free.', 'هیچ چیز مجانی نیست؛ هر چیزی بهایی دارد'],
  ['The grass is always greener on the other side.', "Other people's lives always look better.", 'مرغ همسایه غاز است'],
  ['Too many cooks spoil the broth.', 'Too many bosses ruin the work.', 'آشپز که دو تا شد، آش یا شور می‌شه یا بی‌نمک'],
  ["Don't count your chickens before they hatch.", "Don't celebrate before it really happens.", 'جوجه را آخر پاییز می‌شمارند'],
  ['A penny saved is a penny earned.', 'Saving money is as good as earning it.', 'پول پس‌انداز شده مثل پول درآمده است'],
  ['Actions speak louder than words.', 'What you do matters more than what you say.', 'به عمل کار برآید، به سخندانی نیست'],
  // Seattle: friends and people
  ['A friend in need is a friend indeed.', 'A real friend helps you in hard times.', 'دوست آن باشد که گیرد دست دوست، در پریشان‌حالی و درماندگی'],
  ['Birds of a feather flock together.', 'Similar people spend time together.', 'کبوتر با کبوتر، باز با باز'],
  ["Don't judge a book by its cover.", "Don't judge people by how they look.", 'از روی ظاهر قضاوت نکن'],
  ['Two heads are better than one.', 'Working together gives better ideas.', 'یک دست صدا ندارد'],
  ['Absence makes the heart grow fonder.', 'You love people more when they are far away.', 'دوری، محبت را بیشتر می‌کند'],
  ['Honesty is the best policy.', 'Always tell the truth.', 'صداقت بهترین سیاست است'],
  ['Treat others the way you want to be treated.', 'Be kind, the way you want people to be kind to you.', 'با دیگران همان‌طور رفتار کن که دوست داری با تو رفتار کنند'],
  ['Laughter is the best medicine.', 'Laughing makes you feel better.', 'خنده بهترین داروست'],
  // Chicago: caution and good sense
  ['Better safe than sorry.', 'Be careful now to avoid problems later.', 'کار از محکم‌کاری عیب نمی‌کند'],
  ['Look before you leap.', 'Think before you act.', 'اول فکر کن، بعد عمل کن'],
  ["Where there's smoke, there's fire.", 'Rumors usually have some truth in them.', 'تا نباشد چیزکی، مردم نگویند چیزها'],
  ["Don't bite off more than you can chew.", "Don't take on more than you can handle.", 'لقمه بزرگ‌تر از دهانت برندار'],
  ['Curiosity killed the cat.', 'Being too curious can get you into trouble.', 'فضولی زیاد دردسر می‌سازد'],
  ['Easy come, easy go.', 'Things you get easily, you lose easily.', 'باد آورده را باد می‌برد'],
  ['Haste makes waste.', 'Rushing causes mistakes.', 'عجله کار شیطان است'],
  ['Speak of the devil.', 'Said when the person you were talking about walks in.', 'حلال‌زاده است! (اسمش را آوردیم، پیدایش شد)'],
  // New York: big city life
  ['When in Rome, do as the Romans do.', 'Follow the local customs.', 'خواهی نشوی رسوا، همرنگ جماعت شو'],
  ["It's never too late to learn.", 'You can always start learning.', 'ماهی را هر وقت از آب بگیری تازه است'],
  ['If you can make it there, you can make it anywhere.', 'Succeeding in New York proves you can succeed anywhere.', 'اگر در نیویورک موفق شوی، همه‌جا موفق می‌شوی'],
  ['The bigger they are, the harder they fall.', 'Powerful people lose more when they fail.', 'هر که بامش بیش، برفش بیشتر'],
  ["You can't have your cake and eat it too.", "You can't keep two good things that cancel each other out.", 'هم خدا را می‌خواهی و هم خرما را؟ نمی‌شود'],
  ['What goes around comes around.', 'Your actions come back to you.', 'هر چه کنی به خود کنی'],
  ["There's no place like home.", 'Home is the best place of all.', 'هیچ جا خانه خود آدم نمی‌شود'],
  ['Knowledge is power.', 'Learning makes you strong.', 'توانا بود هر که دانا بود'],
  // Washington, DC: the founders' wisdom
  ['United we stand, divided we fall.', 'We are strong together and weak apart.', 'یک دست صدا ندارد'],
  ['An ounce of prevention is worth a pound of cure.', 'Stopping a problem early is easier than fixing it later.', 'علاج واقعه را قبل از وقوع باید کرد'],
  ['Early to bed and early to rise makes a man healthy, wealthy and wise.', 'Good daily habits lead to a good life.', 'سحرخیز باش تا کامروا باشی'],
  ['Well done is better than well said.', 'What you do matters more than what you say.', 'مشک آن است که خود ببوید، نه آنکه عطار بگوید'],
  ['Lost time is never found again.', "Don't waste your time.", 'وقت طلاست'],
  ['The pen is mightier than the sword.', 'Words and ideas are stronger than violence.', 'قلم از شمشیر قوی‌تر است'],
  ['All good things must come to an end.', 'Even the best times finish someday.', 'هر آغازی پایانی دارد'],
  ['This too shall pass.', 'Hard times never last forever.', 'این نیز بگذرد'],
  ['Strike while the iron is hot.', 'Act when the moment is right.', 'تا تنور گرم است باید نان را چسباند'],
  ["It's not the years in your life that count, it's the life in your years.", 'How well you live matters more than how long.', 'خوش باش که عالم گذران خواهد بود'],
];
const SAY_CITY_EN = ['SANTA FE', 'SAN FRANCISCO', 'SEATTLE', 'CHICAGO', 'NEW YORK', 'WASHINGTON, DC'];
const sayList = () => (LANG === 'en' ? SAYINGS_EN : SAYINGS);
const SAY_CITY = ['YAZD', 'ISFAHAN', 'SHIRAZ', 'KASHAN', 'TEHRAN', 'MASHHAD'];
// each elder teaches 8 sayings; the elder at the end of the road teaches the last 10
const sayIds = g => (g < 5 ? [0, 1, 2, 3, 4, 5, 6, 7].map(i => g * 8 + i) : [40, 41, 42, 43, 44, 45, 46, 47, 48, 49]);
const sayCity = idx => Math.min(5, Math.floor(idx / 8));
const sayLearned = () => (S.sayings || (S.sayings = {}));
const sayCount = () => Object.keys(sayLearned()).length;

async function elderTalk(group, name, hello) {
  const L = sayLearned(), ids = sayIds(group);
  const next = ids.find(i => !L[i]);
  if (next !== undefined) {
    if (LANG === 'en') { const [sy, mean, fa] = SAYINGS_EN[next];
      await say([T(name, hello), `${T(name, 'Here is an old American saying:')}<br>${B(sy)}`, `It means: ${esc(mean)}`, `In Persian: ${PF(fa)}`]);
    } else { const [fa, tr, lit, mean] = SAYINGS[next];
    await say([T(name, hello), `${T(name, 'Here is an old Persian saying:')}<br>${F(fa, tr)}`, `Word for word: "${esc(lit)}"`, `It means: ${B(esc(mean))}`]); }
    L[next] = 1; SND.fx('good');
    await say(`You wrote the saying in your notebook. (${sayCount()} / ${sayList().length} ${LANG === 'en' ? 'American' : 'Old Persian'} sayings)${ids.every(i => L[i]) ? `<br>You know all of ${name}'s sayings!` : ''}`);
    writeSave(); return;
  }
  // all learned: a little quiz about one of them
  const L2 = sayList(), en = LANG === 'en', mi = en ? 1 : 3, pick = ids[Math.floor(rand() * ids.length)];
  const shown = en ? B(L2[pick][0]) : F(L2[pick][0], L2[pick][1]), mean = L2[pick][mi];
  await say([T(name, en ? "You know all my sayings, sweetheart! Let's see if you remember..." : `${F('آفرین', 'afarin')}! You know all my sayings. Let's see if you remember...`), `What does ${shown} mean?`], { keep: true });
  const wrong = shuffle(L2.map((s, i) => i).filter(i => i !== pick)).slice(0, 3);
  const opts = shuffle([pick, ...wrong]);
  const r = await choose(opts.map(i => esc(L2[i][mi])), { cls: 'sayq', cancel: false }); hideText();
  if (opts[r] === pick) { SND.fx('good'); S.daftar += 1; await say([T(name, en ? "That's right!" : `${F('درسته', 'doroste')}! That's right!`), `${name} gave you a ${DAF()}. You have ${S.daftar}.`]); }
  else { SND.fx('bad'); await say([T(name, 'Not quite, my dear.'), `${shown} means: ${B(esc(mean))}`]); }
  writeSave();
}
async function sayingsScreen() {
  const el = document.createElement('div'); el.className = 'layer dex show'; $('#screen').appendChild(el);
  const L = sayLearned(), LS = sayList(), en = LANG === 'en', n = LS.length, per = 8; let idx = 0;
  const draw = () => {
    const s = LS[idx], known = L[idx], start = clamp(idx - 2, 0, n - per);
    let list = '';
    for (let i = start; i < start + per; i++) list += `<div class="dx-r${i === idx ? ' sel' : ''}"><span class="cur">▶</span>${String(i + 1).padStart(2, '0')} ${L[i] ? esc((en ? LS[i][0] : LS[i][1].split(',')[0]).slice(0, 26)) : '- - - - -'}</div>`;
    const detail = known ? (en ? `<div class="sy-d"><b>${esc(s[0])}</b><div class="sm">${esc(s[1])}</div><div>${PF(s[2])}</div></div>` : `<div class="sy-d">${F(s[0], s[1])}<div class="sm">"${esc(s[2])}"</div><div><b>${esc(s[3])}</b></div></div>`)
      : `<div class="sy-d"><b>???</b><div class="sm">Learn this saying from the elder in ${(en ? SAY_CITY_EN : SAY_CITY)[sayCity(idx)]}.</div></div>`;
    el.innerHTML = `<div class="box dx sy"><div class="dx-h">${en ? 'AMERICAN' : 'OLD PERSIAN'} SAYINGS <span>${sayCount()} / ${n}</span></div>${detail}<div class="dx-l">${list}</div><div class="dx-f">↑↓ move · B: back</div></div>`;
  };
  draw();
  await new Promise(res => {
    const h = b => {
      if (b === 'up') idx = (idx - 1 + n) % n; else if (b === 'down') idx = (idx + 1) % n;
      else if (b === 'left') idx = clamp(idx - per, 0, n - 1); else if (b === 'right') idx = clamp(idx + per, 0, n - 1);
      else if (b === 'b' || b === 'start' || b === 'a') { SND.fx('cancel'); popH(h); el.remove(); res(); return; } else return;
      SND.fx('blip'); draw();
    };
    pushH(h);
  });
}
// the five elders
npc('ω', { look: 'elder', lookG: 'elderF', dir: 'left', talk: () => elderTalk(1, G('AGHA HOSSEIN', 'KHANOM TOURAN'), `${F('سلام', 'salam')}! I sold carpets in the bazaar for sixty years. Now I drink tea here. I have heard every saying there is.`) });
npc('ϕ', { look: 'elder', lookG: 'elderF', dir: 'left', talk: () => elderTalk(2, G('AGHA SAADI', 'KHANOM SIMIN'), G(`I am Agha Saadi. No relation to the great poet, but I know his verses by heart!`, `I am Khanom Simin. I have read Saadi and Hafez every evening of my life.`)) });
npc('δ', { look: 'elder', lookG: 'elderF', dir: 'left', talk: () => elderTalk(3, G('AGHA JALAL', 'KHANOM PARI'), `Come, sit. In Kashan we say a wise word is sweeter than rosewater.`) });
npc('β', { look: 'elder', lookG: 'elderF', dir: 'left', talk: () => elderTalk(4, G('AGHA BAHMAN', 'KHANOM SHAHIN'), `Tehran moves fast, but old words still matter. Listen to this one.`) });
