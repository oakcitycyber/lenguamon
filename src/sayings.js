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
];
const SAY_CITY = ['YAZD', 'ISFAHAN', 'SHIRAZ', 'KASHAN', 'TEHRAN'];
const sayLearned = () => (S.sayings || (S.sayings = {}));
const sayCount = () => Object.keys(sayLearned()).length;

async function elderTalk(group, name, hello) {
  const L = sayLearned(), ids = [0, 1, 2, 3, 4, 5, 6, 7].map(i => group * 8 + i);
  const next = ids.find(i => !L[i]);
  if (next !== undefined) {
    const [fa, tr, lit, mean] = SAYINGS[next];
    await say([T(name, hello), `${T(name, 'Here is an old Persian saying:')}<br>${F(fa, tr)}`, `Word for word: "${esc(lit)}"`, `It means: ${B(esc(mean))}`]);
    L[next] = 1; SND.fx('good');
    await say(`You wrote the saying in your notebook. (${sayCount()} / ${SAYINGS.length} Old Persian sayings)${ids.every(i => L[i]) ? `<br>You know all of ${name}'s sayings!` : ''}`);
    writeSave(); return;
  }
  // all learned: a little quiz about one of them
  const pick = ids[Math.floor(rand() * ids.length)], [fa, tr, , mean] = SAYINGS[pick];
  await say([T(name, `${F('آفرین', 'afarin')}! You know all my sayings. Let's see if you remember...`), `What does ${F(fa, tr)} mean?`], { keep: true });
  const wrong = shuffle(SAYINGS.map((s, i) => i).filter(i => i !== pick)).slice(0, 3);
  const opts = shuffle([pick, ...wrong]);
  const r = await choose(opts.map(i => esc(SAYINGS[i][3])), { cls: 'sayq', cancel: false }); hideText();
  if (opts[r] === pick) { SND.fx('good'); S.daftar += 1; await say([T(name, `${F('درسته', 'doroste')}! That's right!`), `${name} gave you a DAFTAR. You have ${S.daftar}.`]); }
  else { SND.fx('bad'); await say([T(name, 'Not quite, my dear.'), `${F(fa, tr)} means: ${B(esc(mean))}`]); }
  writeSave();
}
async function sayingsScreen() {
  const el = document.createElement('div'); el.className = 'layer dex show'; $('#screen').appendChild(el);
  const L = sayLearned(), n = SAYINGS.length, per = 8; let idx = 0;
  const draw = () => {
    const s = SAYINGS[idx], known = L[idx], start = clamp(idx - 2, 0, n - per);
    let list = '';
    for (let i = start; i < start + per; i++) list += `<div class="dx-r${i === idx ? ' sel' : ''}"><span class="cur">▶</span>${String(i + 1).padStart(2, '0')} ${L[i] ? esc(SAYINGS[i][1].split(',')[0].slice(0, 26)) : '- - - - -'}</div>`;
    const detail = known ? `<div class="sy-d">${F(s[0], s[1])}<div class="sm">"${esc(s[2])}"</div><div><b>${esc(s[3])}</b></div></div>`
      : `<div class="sy-d"><b>???</b><div class="sm">Learn this saying from the elder in ${SAY_CITY[Math.floor(idx / 8)]}.</div></div>`;
    el.innerHTML = `<div class="box dx sy"><div class="dx-h">OLD PERSIAN SAYINGS <span>${sayCount()} / ${n}</span></div>${detail}<div class="dx-l">${list}</div><div class="dx-f">↑↓ move · B: back</div></div>`;
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
npc('ω', { look: 'elder', lookG: 'elderF', dir: 'left', talk: () => elderTalk(1, G('AGHA HOSSEIN', 'KHANOM TOURAN'), `${F('سلام', 'salam')}! I have sold carpets in this bazaar for sixty years. I have heard every saying there is.`) });
npc('ϕ', { look: 'elder', lookG: 'elderF', dir: 'left', talk: () => elderTalk(2, G('AGHA SAADI', 'KHANOM SIMIN'), G(`I am Agha Saadi. No relation to the great poet, but I know his verses by heart!`, `I am Khanom Simin. I have read Saadi and Hafez every evening of my life.`)) });
npc('δ', { look: 'elder', lookG: 'elderF', talk: () => elderTalk(3, G('AGHA JALAL', 'KHANOM PARI'), `Come, sit. In Kashan we say a wise word is sweeter than rosewater.`) });
npc('β', { look: 'elder', lookG: 'elderF', dir: 'right', talk: () => elderTalk(4, G('AGHA BAHMAN', 'KHANOM SHAHIN'), `Tehran moves fast, but old words still matter. Listen to this one.`) });
