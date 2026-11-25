// LENGUAMON word bank (Persian v1)
// Format: transliteration | english | persian script | route (1-7) | type
// Alternatives are separated by " / ". In the script column "+" is a zero-width non-joiner.
// Sources: Kurt's "Farsi word bank.csv" (ICF course weeks 1-11, Quizlet, Instagram lists),
// plus high-frequency conversational words checked against the wordfreq Persian top-1000 list
// and beginner phrase lists (MSU Open Books "Common Words and Phrases", Omniglot Persian phrases).
const RAW_WORDS = `
salam|hello|سلام|1|GREET
khodahafez|goodbye|خداحافظ|1|GREET
salam, khubi?|hello, how are you?|سلام، خوبی؟|1|GREET
salam, khosh oomadi|hello, welcome|سلام، خوش اومدی|1|GREET
khubi? / chetori?|how are you?|خوبی؟ / چطوری؟|1|GREET
halet chetore?|how are you doing?|حالت چطوره؟|1|GREET
khubam|I'm good|خوبم|1|GREET
kheyli khubam|I'm very good|خیلی خوبم|1|GREET
khub nistam|I'm not good|خوب نیستم|1|GREET
bad nistam|not bad|بد نیستم|1|GREET
merci|thanks|مرسی|1|GREET
mamnoon|thank you|ممنون|1|GREET
khahesh mikonam|you're welcome|خواهش می+کنم|1|GREET
a'li|great / excellent|عالی|1|GREET
khoshbakhtam|nice to meet you|خوشبختم|1|GREET
man ham khoshbakhtam|nice to meet you too|من هم خوشبختم|1|GREET
sobh bekheir|good morning|صبح بخیر|1|GREET
shab bekheir|good night|شب بخیر|1|GREET
khosh amadid|welcome|خوش آمدید|1|GREET
khasteh nabashi|good work / don't be tired|خسته نباشی|1|GREET
salamat bashi|be well (reply to good work)|سلامت باشی|1|GREET
movafagh bashi|good luck|موفق باشی|1|GREET
ruz-e khubi dashte bashi|have a nice day|روز خوبی داشته باشی|1|GREET
esm-e man ... ast|my name is ...|اسم من ... است|1|BASIC
esm-e shoma chie?|what's your name?|اسم شما چیه؟|1|BASIC
esmet chie?|what's your name? (informal)|اسمت چیه؟|1|BASIC
famil-e shoma chie?|what's your family name?|فامیل شما چیه؟|1|BASIC
man ... hastam|I am ...|من ... هستم|1|BASIC
ahl-e kojayi? / shoma ahl-e kojayi?|where are you from?|اهل کجایی؟|1|BASIC
man ahl-e ... hastam|I am from ...|من اهل ... هستم|1|BASIC
man ham|me too|من هم|1|BASIC
man American am / man amrikayi am|I'm American|من آمریکایی+ام|1|BASIC
man ham American am|I'm American too|من هم آمریکایی+ام|1|BASIC
baleh|yes|بله|1|BASIC
areh|yeah|آره|1|BASIC
na|no|نه|1|BASIC
chashm|sure, will do|چشم|1|BASIC
lotfan|please|لطفا|1|BASIC
bebakhshid|excuse me / sorry|ببخشید|1|BASIC
moteassefam|I'm sorry|متاسفم|1|BASIC
befarmaid|here you go / go ahead|بفرمایید|1|BASIC
agha|sir / Mr.|آقا|1|BASIC
khanom|madam / Mrs.|خانم|1|BASIC
ast / hast|is|است / هست|1|BASIC
nist|is not|نیست|1|BASIC
budan|to be|بودن|1|BASIC
va|and|و|1|BASIC
amma / vali|but|اما / ولی|1|BASIC
ham|also / too|هم|1|BASIC
faghat|only|فقط|1|BASIC
age|if|اگه|1|BASIC
kheyli|very / a lot|خیلی|1|BASIC
yek kami / ye kam|a little bit|یک کمی|1|BASIC
in|this|این|1|BASIC
oon|that|اون|1|BASIC
inja|here|اینجا|1|BASIC
oonja|there|اونجا|1|BASIC
man|I / me|من|1|PRON
to|you (informal)|تو|1|PRON
shoma|you (formal / plural)|شما|1|PRON
oo|he / she|او|1|PRON
ma / maa|we|ما|1|PRON
oona / anha|they|اونا / آنها|1|PRON
chi?|what?|چی؟|1|QUES
chiyeh?|what is it?|چیه؟|1|QUES
in chie?|what is this?|این چیه؟|1|QUES
koja?|where?|کجا؟|1|QUES
key?|when?|کی؟|1|QUES
chera?|why?|چرا؟|1|QUES
chetor?|how?|چطور؟|1|QUES
amadeyi?|are you ready?|آماده+ای؟|1|QUES
tamoom?|finished? / done?|تموم؟|1|QUES
yani chi?|what does it mean?|یعنی چی؟|1|QUES
so'al|question|سوال|1|QUES
man so'al daram|I have a question|من سوال دارم|1|QUES
man so'al nadaram|I don't have a question|من سوال ندارم|1|QUES
fahmidi?|did you understand?|فهمیدی؟|1|QUES
farsi baladi?|do you know Persian?|فارسی بلدی؟|1|QUES
ye kam farsi baladam|I know a little Persian|یه کم فارسی بلدم|1|QUES
farsim khub nist|my Persian isn't good|فارسیم خوب نیست|1|QUES
be farsi chi mishe?|how do you say it in Persian?|به فارسی چی میشه؟|1|QUES
goosh kon|listen|گوش کن|1|CLASS
negah kon|look|نگاه کن|1|CLASS
bia|come|بیا|1|CLASS
bia inja|come here|بیا اینجا|1|CLASS
beshin|sit|بشین|1|CLASS
boland sho / pa sho|stand up|بلند شو / پاشو|1|CLASS
sabr kon|wait|صبر کن|1|CLASS
dobare begu|say it again|دوباره بگو|1|CLASS
begoo|say it|بگو|1|CLASS
lotfan aheste sohbat konid|please speak slowly|لطفا آهسته صحبت کنید|1|CLASS
nemifahmam|I don't understand|نمی+فهمم|1|CLASS
fahmidam|I understand|فهمیدم|1|CLASS
nemidoonam|I don't know|نمی+دونم|1|CLASS
komak mikham|I need help|کمک می+خوام|1|CLASS
harf bezan|talk / speak|حرف بزن|1|CLASS
harf nazan|don't talk|حرف نزن|1|CLASS
saket bash|be quiet|ساکت باش|1|CLASS
kon|do it|کن|1|CLASS
nakon|don't do it|نکن|1|CLASS
zood bash|hurry|زود باش|1|CLASS
boro|go|برو|1|CLASS
boro bekhab|go to sleep|برو بخواب|1|CLASS
dastshooyi|restroom|دستشویی|1|CLASS
sefr|zero / 0|صفر|2|NUM
yek|one / 1|یک|2|NUM
do|two / 2|دو|2|NUM
se|three / 3|سه|2|NUM
chahar|four / 4|چهار|2|NUM
panj|five / 5|پنج|2|NUM
shesh|six / 6|شش|2|NUM
haft|seven / 7|هفت|2|NUM
hasht|eight / 8|هشت|2|NUM
noh|nine / 9|نه|2|NUM
dah|ten / 10|ده|2|NUM
yazdah|eleven / 11|یازده|2|NUM
davazdah|twelve / 12|دوازده|2|NUM
sizdah|thirteen / 13|سیزده|2|NUM
chahardah|fourteen / 14|چهارده|2|NUM
poonzdah|fifteen / 15|پونزده|2|NUM
shoonzdah|sixteen / 16|شونزده|2|NUM
hefdah|seventeen / 17|هفده|2|NUM
hejdah|eighteen / 18|هجده|2|NUM
noozdah|nineteen / 19|نوزده|2|NUM
bist|twenty / 20|بیست|2|NUM
bist-o-yek|twenty-one / 21|بیست و یک|2|NUM
si|thirty / 30|سی|2|NUM
chehel|forty / 40|چهل|2|NUM
panjah|fifty / 50|پنجاه|2|NUM
shast|sixty / 60|شصت|2|NUM
haftad|seventy / 70|هفتاد|2|NUM
hashtad|eighty / 80|هشتاد|2|NUM
navad|ninety / 90|نود|2|NUM
sad|one hundred / 100|صد|2|NUM
hezar|one thousand / 1000|هزار|2|NUM
chand|how many / how much|چند|2|NUM
shomare|number|شماره|2|NUM
sal|year|سال|2|NUM
chand saleteh? / shoma chand saleteh?|how old are you?|چند سالته؟|2|NUM
man ... sal daram|I am ... years old|من ... سال دارم|2|NUM
avval|first|اول|2|NUM
dovvom|second|دوم|2|NUM
akhar|last|آخر|2|NUM
khuneh / khoone|house / home|خونه|2|FAM
khanevadeh / khoonevade|family|خانواده|2|FAM
maman|mom|مامان|2|FAM
baba|dad|بابا|2|FAM
pedar|father|پدر|2|FAM
madar|mother|مادر|2|FAM
bacheh / bache|child|بچه|2|FAM
bacheh-ha|children|بچه+ها|2|FAM
bache-ye man|my child|بچه+ی من|2|FAM
namzad|fiancé / fiancée|نامزد|2|FAM
hamsar|spouse|همسر|2|FAM
pesar|son / boy|پسر|2|FAM
dokhtar|daughter / girl|دختر|2|FAM
khahar|sister|خواهر|2|FAM
baradar|brother|برادر|2|FAM
khaleh|maternal aunt|خاله|2|FAM
ameh|paternal aunt|عمه|2|FAM
amoo|paternal uncle|عمو|2|FAM
daei|maternal uncle|دایی|2|FAM
maman bozorg / madar bozorg|grandmother|مامان بزرگ|2|FAM
baba bozorg / pedar bozorg|grandfather|بابا بزرگ|2|FAM
bozorg|big / grand|بزرگ|2|FAM
koochik|small|کوچیک|2|FAM
damad|son-in-law / groom|داماد|2|FAM
aroos|bride / daughter-in-law|عروس|2|FAM
nafar|person (counter word)|نفر|2|FAM
adam|person / human|آدم|2|FAM
mard|man|مرد|2|FAM
zan|woman / wife|زن|2|FAM
mardom|people|مردم|2|FAM
doost|friend|دوست|2|FAM
dooste dokhtar|girlfriend|دوست دختر|2|FAM
hamkar|colleague / coworker|همکار|2|FAM
ham otaghi|roommate|هم+اتاقی|2|FAM
otagh|room|اتاق|2|FAM
daram|I have|دارم|2|FAM
dari|you have|داری|2|FAM
dare|he/she has|داره|2|FAM
nadaram|I don't have|ندارم|2|FAM
man bache nadaram|I don't have children|من بچه ندارم|2|FAM
man yek khahar daram|I have one sister|من یک خواهر دارم|2|FAM
shoma chanta dokhtar dari?|how many daughters do you have?|شما چندتا دختر داری؟|2|FAM
esme mamane shoma chie?|what is your mom's name?|اسم مامان شما چیه؟|2|FAM
esme mamane man Rhonda-ast|my mom's name is Rhonda|اسم مامان من روندا است|2|FAM
rooz|day|روز|2|TIME
emrooz|today|امروز|2|TIME
dirooz|yesterday|دیروز|2|TIME
farda|tomorrow|فردا|2|TIME
hafte|week|هفته|2|TIME
mah|month / moon|ماه|2|TIME
shanbeh|Saturday|شنبه|2|TIME
yekshanbeh|Sunday|یکشنبه|2|TIME
doshanbeh|Monday|دوشنبه|2|TIME
seshanbeh|Tuesday|سه+شنبه|2|TIME
chaharshanbeh|Wednesday|چهارشنبه|2|TIME
panjshanbeh|Thursday|پنجشنبه|2|TIME
jomeh|Friday|جمعه|2|TIME
emrooz chand shanbe ast?|what day is today?|امروز چندشنبه است؟|2|TIME
sobh|morning|صبح|2|TIME
zohr|noon|ظهر|2|TIME
ba'd az zohr|afternoon (pm)|بعد از ظهر|2|TIME
asr|late afternoon / evening|عصر|2|TIME
shab|night|شب|2|TIME
dishab|last night|دیشب|2|TIME
dirooz sobh / dee'sobh|yesterday morning|دیروز صبح|2|TIME
dirooz asr / dee'asr|yesterday afternoon|دیروز عصر|2|TIME
vaght|time (a moment)|وقت|2|TIME
saat|clock / watch / hour|ساعت|2|TIME
saat chande?|what time is it?|ساعت چنده؟|2|TIME
saat hasht-e sobh ast|it is 8 in the morning|ساعت هشت صبح است|2|TIME
saat yek-e ba'd az zohr ast|it is 1 in the afternoon|ساعت یک بعد از ظهر است|2|TIME
saat dah-e shab ast|it is 10 at night|ساعت ده شب است|2|TIME
alan|right now|الان|2|TIME
hala|now|حالا|2|TIME
ghabl|before|قبل|2|TIME
ba'd|after|بعد|2|TIME
zood|early / soon|زود|2|TIME
dir|late|دیر|2|TIME
hamishe|always|همیشه|2|TIME
hichvaght|never|هیچ+وقت|2|TIME
har|every|هر|2|TIME
har rooz|every day|هر روز|2|TIME
bood|was|بود|2|TIME
bazar|bazaar / market|بازار|2|SHOP
chande?|how much is it?|چنده؟|2|SHOP
gheymat|price|قیمت|2|SHOP
gheymatesh chande?|how much does it cost?|قیمتش چنده؟|2|SHOP
pool|money|پول|2|SHOP
toman|toman (money)|تومن|2|SHOP
geroon|expensive|گرون|2|SHOP
kheyli geroone!|that's very expensive!|خیلی گرونه!|2|SHOP
arzoon|cheap|ارزون|2|SHOP
bashe|okay|باشه|2|SHOP
kharidan|to buy|خریدن|2|SHOP
mikham|I want|می+خوام|2|SHOP
nemikham|I don't want|نمی+خوام|2|SHOP
shahr|city|شهر|2|SHOP
khiaban|street|خیابان|2|SHOP
mashin|car|ماشین|2|SHOP
madreseh|school|مدرسه|2|SHOP
kaar|work|کار|2|SHOP
sal-e no mobarak|happy new year|سال نو مبارک|2|SHOP
tavallodet mobarak|happy birthday|تولدت مبارک|2|SHOP
ghaza|food / meal|غذا|3|FOOD
ab|water|آب|3|FOOD
chai|tea|چای|3|FOOD
nan|bread|نان|3|FOOD
berenj|rice|برنج|3|FOOD
miveh|fruit|میوه|3|FOOD
anar|pomegranate|انار|3|FOOD
morgh|chicken (the meat)|مرغ|3|FOOD
joojeh|chick (young chicken)|جوجه|3|FOOD
kabab koobideh|ground-meat kabab|کباب کوبیده|3|FOOD
tokhm-e morgh|egg|تخم مرغ|3|FOOD
sobhaneh|breakfast|صبحانه|3|FOOD
nahar|lunch|ناهار|3|FOOD
shaam|dinner|شام|3|FOOD
khoshmazeh|delicious|خوشمزه|3|FOOD
noosh-e jan|enjoy your meal|نوش جان|3|FOOD
gorosneh / goshne|hungry|گرسنه / گشنه|3|FOOD
teshneh|thirsty|تشنه|3|FOOD
seer|full (after eating)|سیر|3|FOOD
khordan|to eat|خوردن|3|FOOD
khordam|I ate|خوردم|3|FOOD
khordi|you ate|خوردی|3|FOOD
oo khord|he/she ate|او خورد|3|FOOD
maa khordim|we ate|ما خوردیم|3|FOOD
shoma khordid|you all ate|شما خوردید|3|FOOD
oona khordand|they ate|اونا خوردند|3|FOOD
sobhaneh mikhoram|I eat breakfast|صبحانه می+خورم|3|FOOD
nahar mikhoram|I eat lunch|ناهار می+خورم|3|FOOD
shaam mikhoram|I eat dinner|شام می+خورم|3|FOOD
hichi|nothing|هیچی|3|FOOD
man emrooz hichi nakhordam|I didn't eat anything today|من امروز هیچی نخوردم|3|FOOD
doost daram|I like / I love|دوست دارم|3|FOOD
doost dari|you like|دوست داری|3|FOOD
shoma che ghaza doost dari?|what food do you like?|شما چه غذایی دوست داری؟|3|FOOD
khub / khoob|good|خوب|3|FEEL
bad|bad|بد|3|FEEL
khasteh|tired|خسته|3|FEEL
khasteh hastam|I am tired|خسته هستم|3|FEEL
khoshhal|happy|خوشحال|3|FEEL
khoshhalam|I'm happy|خوشحالم|3|FEEL
narahat|upset / uneasy|ناراحت|3|FEEL
khab-alood|sleepy|خواب+آلود|3|FEEL
hayajan-zadeh|excited|هیجان+زده|3|FEEL
kam|a little / not much|کم|3|FEEL
mariz|sick|مریض|3|FEEL
man marizam|I'm sick|من مریضم|3|FEEL
man mariz nistam|I'm not sick|من مریض نیستم|3|FEEL
man mariz boodam|I was sick|من مریض بودم|3|FEEL
behtaram|I feel better|بهترم|3|FEEL
shoma behtari?|do you feel better?|شما بهتری؟|3|FEEL
zood khub sho|get well soon|زود خوب شو|3|FEEL
saram sholooghe|I'm busy|سرم شلوغه|3|FEEL
ziba|beautiful|زیبا|3|FEEL
khoshgel|pretty / cute|خوشگل|3|FEEL
asoon|easy|آسون|3|FEEL
sakht|hard / difficult|سخت|3|FEEL
garm|warm / hot|گرم|3|FEEL
sard|cold|سرد|3|FEEL
daagh|hot (to the touch)|داغ|3|FEEL
rang|color|رنگ|3|COLOR
che rangi-e?|what color is it?|چه رنگیه؟|3|COLOR
ghermez|red|قرمز|3|COLOR
sabz|green|سبز|3|COLOR
sefid|white|سفید|3|COLOR
zard|yellow|زرد|3|COLOR
siyah|black|سیاه|3|COLOR
narenji|orange|نارنجی|3|COLOR
abi|blue|آبی|3|COLOR
ghahvei|brown|قهوه+ای|3|COLOR
ghahveh|coffee|قهوه|3|COLOR
soorati|pink|صورتی|3|COLOR
banafsh|purple|بنفش|3|COLOR
khakestari|gray|خاکستری|3|COLOR
tala|gold|طلا|3|COLOR
talayi|golden|طلایی|3|COLOR
noghreh|silver|نقره|3|COLOR
noghrei|silver-colored|نقره+ای|3|COLOR
khak|dirt / soil|خاک|3|COLOR
kam rang|light-colored|کم+رنگ|3|COLOR
badan|body|بدن|3|BODY
moo|hair|مو|3|BODY
sar|head|سر|3|BODY
abroo|eyebrow|ابرو|3|BODY
cheshm|eye|چشم|3|BODY
mojeh|eyelash|مژه|3|BODY
beeni / damagh|nose|بینی / دماغ|3|BODY
dahan|mouth|دهان|3|BODY
lab|lip|لب|3|BODY
dandoon|tooth|دندون|3|BODY
dandoon-ha|teeth|دندون+ها|3|BODY
goosh|ear|گوش|3|BODY
zaban|tongue / language|زبان|3|BODY
gardan|neck|گردن|3|BODY
shooneh|shoulder|شونه|3|BODY
dast|hand|دست|3|BODY
moch|wrist|مچ|3|BODY
aranj|elbow|آرنج|3|BODY
zanoo|knee|زانو|3|BODY
paa|foot / leg|پا|3|BODY
angosht|finger|انگشت|3|BODY
nakhon|nail|ناخن|3|BODY
cheshm-e shoma che rangi ast?|what color are your eyes?|چشم شما چه رنگی است؟|3|BODY
moo-e man ghahvei ast|my hair is brown|موی من قهوه+ای است|3|BODY
oo cheshm-e sabz darad|he/she has green eyes|او چشم سبز دارد|3|BODY
chand ta angosht dari?|how many fingers do you have?|چندتا انگشت داری؟|3|BODY
man dah angosht daram|I have ten fingers|من ده انگشت دارم|3|BODY
hava|weather / air|هوا|3|WEATHER
hava chetore?|how's the weather?|هوا چطوره؟|3|WEATHER
abr|cloud|ابر|3|WEATHER
abri|cloudy|ابری|3|WEATHER
barf|snow|برف|3|WEATHER
barfi|snowy|برفی|3|WEATHER
aftab|sunlight|آفتاب|3|WEATHER
aftabi|sunny|آفتابی|3|WEATHER
khorshid|sun|خورشید|3|WEATHER
baroon|rain|بارون|3|WEATHER
barooni|rainy|بارونی|3|WEATHER
baad|wind|باد|3|WEATHER
baadi|windy|بادی|3|WEATHER
gol|flower|گل|3|WEATHER
bagh|garden|باغ|3|WEATHER
sag|dog|سگ|3|WEATHER
bidar|awake|بیدار|3|VERB
bidar shodan|to wake up|بیدار شدن|3|VERB
man har sobh bidar misham|I wake up every morning|من هر صبح بیدار می+شم|3|VERB
khab|sleep|خواب|3|VERB
khabidan|to sleep|خوابیدن|3|VERB
mikhabam|I sleep|می+خوابم|3|VERB
raftan|to go|رفتن|3|VERB
miram|I go|می+رم|3|VERB
miravam|I go (formal)|می+روم|3|VERB
sar-e kaar miram|I go to work|سر کار می+رم|3|VERB
amadan|to come|آمدن|3|VERB
didan|to see|دیدن|3|VERB
goftan|to say|گفتن|3|VERB
kardan|to do|کردن|3|VERB
dashtan|to have|داشتن|3|VERB
khastan|to want|خواستن|3|VERB
danestan|to know|دانستن|3|VERB
fekr mikonam|I think|فکر می+کنم|3|VERB
ketab|book|کتاب|3|VERB
dars|lesson|درس|3|VERB
farsi|Persian (language)|فارسی|3|VERB
engelisi|English (language)|انگلیسی|3|VERB
zendegi|life|زندگی|3|VERB
eshgh|love|عشق|3|PHRASE
eshgham|my love|عشقم|3|PHRASE
del|heart|دل|3|PHRASE
doostet daram|I love you|دوستت دارم|3|PHRASE
to ra doost daram|I like you (with object marker)|تو را دوست دارم|3|PHRASE
delam barat tang shode|I miss you|دلم برات تنگ شده|3|PHRASE
hamechie mani|you are my everything|همه+چیز منی|3|PHRASE
man behet eftekhar mikonam|I'm proud of you|من بهت افتخار می+کنم|3|PHRASE
damet garm|well done / good for you|دمت گرم|3|PHRASE
sad dar sad|absolutely / 100%|صد در صد|3|PHRASE
tanha|alone|تنها|3|PHRASE
kooh|mountain|کوه|4|NATURE
kooh-ha|mountains|کوه+ها|4|NATURE
darya|sea|دریا|4|NATURE
rood / rudkhaneh|river|رود / رودخانه|4|NATURE
derakht|tree|درخت|4|NATURE
sang|stone / rock|سنگ|4|NATURE
jangal|forest|جنگل|4|NATURE
kavir|desert|کویر|4|NATURE
aseman / asemoon|sky|آسمان / آسمون|4|NATURE
setareh|star|ستاره|4|NATURE
cheshmeh|spring (of water)|چشمه|4|NATURE
daryacheh|lake|دریاچه|4|NATURE
darreh|valley|دره|4|NATURE
ghar|cave|غار|4|NATURE
parandeh|bird|پرنده|4|NATURE
heyvan|animal|حیوان|4|NATURE
tabi'at|nature|طبیعت|4|NATURE
che manzareh-ye ghashangi!|what a beautiful view!|چه منظره+ی قشنگی!|4|NATURE
inja kheyli ghashangeh|it's very beautiful here|اینجا خیلی قشنگه|4|NATURE
mostaghim boro|go straight|مستقیم برو|4|TRAVEL
be chap bepich|turn left|به چپ بپیچ|4|TRAVEL
be rast bepich|turn right|به راست بپیچ|4|TRAVEL
nazdik|near / close|نزدیک|4|TRAVEL
door|far|دور|4|TRAVEL
oonja / anja|there|اونجا / آنجا|4|TRAVEL
koja miri?|where are you going?|کجا میری؟|4|TRAVEL
man be tehran miram|I'm going to Tehran|من به تهران می+رم|4|TRAVEL
gom shodam|I'm lost|گم شدم|4|TRAVEL
in rah be koja mire?|where does this road go?|این راه به کجا میره؟|4|TRAVEL
cheghadr tool mikesheh?|how long does it take?|چقدر طول می+کشه؟|4|TRAVEL
ghatar|train|قطار|4|TRAVEL
otobus|bus|اتوبوس|4|TRAVEL
havapeyma|airplane|هواپیما|4|TRAVEL
bilit|ticket|بلیت|4|TRAVEL
yek bilit be shiraz, lotfan|one ticket to Shiraz, please|یک بلیت به شیراز، لطفا|4|TRAVEL
istgah|station|ایستگاه|4|TRAVEL
naghsheh|map|نقشه|4|TRAVEL
safar|trip / journey|سفر|4|TRAVEL
safar bekheir|have a good trip|سفر بخیر|4|TRAVEL
hotel kojast?|where is the hotel?|هتل کجاست؟|4|TRAVEL
dastshuyi kojast?|where is the bathroom?|دستشویی کجاست؟|4|TRAVEL
aks begir|take a picture|عکس بگیر|4|TRAVEL
mishe ye aks az ma begirid?|can you take a picture of us?|میشه یه عکس از ما بگیرید؟|4|TRAVEL
be nazar-e man|in my opinion|به نظر من|5|TALK
fekr nemikonam|I don't think so|فکر نمی+کنم|5|TALK
movafegham|I agree|موافقم|5|TALK
mokhalefam|I disagree|مخالفم|5|TALK
doroste|that's right|درسته|5|TALK
motmaenni?|are you sure?|مطمئنی؟|5|TALK
motmaennam|I'm sure|مطمئنم|5|TALK
yadam raft|I forgot|یادم رفت|5|TALK
yadam miyad|I remember|یادم میاد|5|TALK
che jaleb!|how interesting!|چه جالب!|5|TALK
vaghe'an?|really?|واقعا؟|5|TALK
shukhi mikoni?|are you joking?|شوخی می+کنی؟|5|TALK
hich moshkeli nist|no problem at all|هیچ مشکلی نیست|5|TALK
eshkal nadare|it's okay / no worries|اشکال نداره|5|TALK
mohem nist|it doesn't matter|مهم نیست|5|TALK
omidvaram|I hope so|امیدوارم|5|TALK
hamintor|same here|همینطور|5|TALK
khoshhalam ke didamet|I'm happy to see you|خوشحالم که دیدمت|5|TALK
delam barat tang shodeh|I missed you|دلم برات تنگ شده|5|TALK
bidar shodam|I woke up|بیدار شدم|5|HOME
mikham bekhabam|I want to sleep|می+خوام بخوابم|5|HOME
doosh migiram|I'm taking a shower|دوش می+گیرم|5|HOME
kar daram|I'm busy (I have work)|کار دارم|5|HOME
vaght nadaram|I don't have time|وقت ندارم|5|HOME
vaght dari?|do you have time?|وقت داری؟|5|HOME
bia berim|let's go|بیا بریم|5|HOME
bashe, berim|okay, let's go|باشه، بریم|5|HOME
dir shod|it got late|دیر شد|5|HOME
zood bia|come early|زود بیا|5|HOME
montazeret hastam|I'm waiting for you|منتظرت هستم|5|HOME
kelid|key|کلید|5|HOME
dar ro baz kon|open the door|در رو باز کن|5|HOME
cheragh ro khamoosh kon|turn off the light|چراغ رو خاموش کن|5|HOME
ab mikham|I want water|آب می+خوام|5|HOME
sham chi darim?|what's for dinner?|شام چی داریم؟|5|HOME
taxi|taxi|تاکسی|6|CITY
metro|metro / subway|مترو|6|CITY
lotfan inja negah darid|please stop here|لطفا اینجا نگه دارید|6|CITY
kerayeh chand mishe?|how much is the fare?|کرایه چند میشه؟|6|CITY
mishe aheste-tar berid?|can you drive slower?|میشه آهسته+تر برید؟|6|CITY
restoran|restaurant|رستوران|6|CITY
menu, lotfan|the menu, please|منو، لطفا|6|CITY
surat-hesab, lotfan|the bill, please|صورت+حساب، لطفا|6|CITY
che pishnahadi darid?|what do you recommend?|چه پیشنهادی دارید؟|6|CITY
gusht nemikhoram|I don't eat meat|گوشت نمی+خورم|6|CITY
kheyli khoshmazeh bud|it was very delicious|خیلی خوشمزه بود|6|CITY
mobayl|mobile phone|موبایل|6|CITY
shomareh-ye telefonet chande?|what's your phone number?|شماره+ی تلفنت چنده؟|6|CITY
behet zang mizanam|I'll call you|بهت زنگ می+زنم|6|CITY
payam bede|send a message|پیام بده|6|CITY
internet ghat'eh|the internet is down|اینترنت قطعه|6|CITY
koja kar mikoni?|where do you work?|کجا کار می+کنی؟|6|CITY
daneshjoo hastam|I'm a student|دانشجو هستم|6|CITY
daneshgah|university|دانشگاه|6|CITY
bimarestan|hospital|بیمارستان|6|CITY
darookhaneh|pharmacy|داروخانه|6|CITY
tehran kheyli bozorg ast|Tehran is very big|تهران خیلی بزرگ است|6|CITY
terafik kheyli ziad ast|there's a lot of traffic|ترافیک خیلی زیاد است|6|CITY
havaye tehran aloodeh ast|Tehran's air is polluted|هوای تهران آلوده است|6|CITY
mikham borj-e milad ro bebinam|I want to see Milad Tower|می+خوام برج میلاد رو ببینم|6|CITY
ghabel nadare|it's nothing (be my guest)|قابل نداره|6|TAAROF
ta'arof nakon|don't be shy (no taarof)|تعارف نکن|6|TAAROF
befarmaid too|please come in|بفرمایید تو|6|TAAROF
khooneh-ye khodetooneh|make yourself at home|خونه+ی خودتونه|6|TAAROF
dastetoon dard nakoneh|thank you (for your effort)|دستتون درد نکنه|6|TAAROF
ghorboonet beram|thank you so much (lit. may I be your sacrifice)|قربونت برم|6|TAAROF
cheshmet roshan|congratulations (on your good news)|چشمت روشن|6|TAAROF
zahmat keshidi|you went to so much trouble (thank you)|زحمت کشیدی|6|TAAROF
mozahem nemisham|I won't bother you|مزاحم نمیشم|6|TAAROF
mamnoon az mehman-navazitoon|thank you for your hospitality|ممنون از مهمان+نوازیتون|6|TAAROF
khosh gozasht|I had a great time|خوش گذشت|6|TAAROF
be omid-e didar|hope to see you again|به امید دیدار|6|TAAROF
safar khosh begzareh|have a nice trip|سفر خوش بگذره|6|TAAROF
man ye kam farsi harf mizanam|I speak a little Persian|من یه کم فارسی حرف می+زنم|6|TAAROF
mishe lotfan aheste-tar harf bezanid?|could you please speak more slowly?|میشه لطفا آهسته+تر حرف بزنید؟|6|TAAROF
man daram farsi yad migiram|I'm learning Persian|من دارم فارسی یاد می+گیرم|6|TAAROF
chon iran ro doost daram|because I love Iran|چون ایران رو دوست دارم|6|TAAROF
tarikh|history|تاریخ|7|HERITAGE
farhang|culture|فرهنگ|7|HERITAGE
she'r|poem / poetry|شعر|7|HERITAGE
sha'er|poet|شاعر|7|HERITAGE
shahnameh|the Book of Kings (Ferdowsi's epic)|شاهنامه|7|HERITAGE
padeshah|king|پادشاه|7|HERITAGE
emperatoori|empire|امپراتوری|7|HERITAGE
azadi|freedom|آزادی|7|HERITAGE
edalat|justice|عدالت|7|HERITAGE
ghahreman|hero|قهرمان|7|HERITAGE
ostooreh|legend / myth|اسطوره|7|HERITAGE
bastani|ancient|باستانی|7|HERITAGE
miras|heritage|میراث|7|HERITAGE
aramgah|tomb / mausoleum|آرامگاه|7|HERITAGE
firuzeh|turquoise|فیروزه|7|HERITAGE
setareh-shenasi|astronomy|ستاره+شناسی|7|HERITAGE
riazi|mathematics / math|ریاضی|7|HERITAGE
falsafeh|philosophy|فلسفه|7|HERITAGE
hekmat|wisdom|حکمت|7|HERITAGE
dana|wise|دانا|7|HERITAGE
mehrabani|kindness|مهربانی|7|HERITAGE
ehteram|respect|احترام|7|HERITAGE
eftekhar|pride / honor|افتخار|7|HERITAGE
yadegar|keepsake / souvenir|یادگار|7|HERITAGE
nasl|generation|نسل|7|HERITAGE
niyakan|ancestors|نیاکان|7|HERITAGE
jang|war|جنگ|7|HERITAGE
solh|peace|صلح|7|HERITAGE
tamaddon|civilization|تمدن|7|HERITAGE
ba in hal|nevertheless / even so|با این حال|7|PHRASE
dar vaghe|in fact / actually|در واقع|7|PHRASE
kholaseh|in short|خلاصه|7|PHRASE
be har hal|anyway / in any case|به هر حال|7|PHRASE
bedun-e shak|without a doubt|بدون شک|7|PHRASE
ye ruzi|someday / one day|یه روزی|7|PHRASE
hichvaght faramoosh nemikonam|I'll never forget|هیچ+وقت فراموش نمی+کنم|7|PHRASE
delam baraye iran tang mishe|I'll miss Iran|دلم برای ایران تنگ می+شه|7|PHRASE
safar bekheir|have a good trip|سفر بخیر|7|PHRASE
dorood|greetings (formal)|درود|7|PHRASE
bedrood|farewell (formal)|بدرود|7|PHRASE
pendar-e nik, goftar-e nik, kerdar-e nik|good thoughts, good words, good deeds|پندار نیک، گفتار نیک، کردار نیک|7|PHRASE
tavana bovad har ke dana bovad|knowledge is power (whoever is wise is powerful)|توانا بود هر که دانا بود|7|PHRASE
khasteh shodam vali razi-am|I'm tired but satisfied|خسته شدم ولی راضی+ام|7|PHRASE
movafagh shodam|I succeeded / I made it|موفق شدم|7|PHRASE
be omid-e didar|hope to see you again|به امید دیدار|7|PHRASE
`;
