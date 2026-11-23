// LENGUAMON word bank (English for Persian speakers, intermediate level)
// Format: english (what you type; alternatives with " / ") | Persian meaning | route (1-6) | type
// Starts above beginner level: small talk, phrasal verbs, work, feelings and opinions, road trips,
// errands and health, New York life and everyday idioms.
const RAW_WORDS_EN = `
how's it going?|اوضاع چطوره؟|1|SMALLTALK
hey, how's it going?|سلام، اوضاع چطوره؟|1|SMALLTALK
what have you been up to?|این روزها چیکار می‌کنی؟|1|SMALLTALK
long time no see|خیلی وقته ندیدمت|1|SMALLTALK
nice to finally meet you|خوشحالم که بالاخره می‌بینمت|1|SMALLTALK
what do you do for a living?|شغلت چیه؟|1|SMALLTALK
where are you originally from?|اصالتاً اهل کجایی؟|1|SMALLTALK
I'm doing well, thanks|خوبم، ممنون|1|SMALLTALK
not much, you?|خبر خاصی نیست، تو چی؟|1|SMALLTALK
take care|مراقب خودت باش|1|SMALLTALK
see you later / catch you later|بعداً می‌بینمت|1|SMALLTALK
have a good one|روز خوبی داشته باشی|1|SMALLTALK
my pleasure|با کمال میل|1|SMALLTALK
no worries|اشکالی نداره، نگران نباش|1|SMALLTALK
sounds good|خوبه، موافقم|1|SMALLTALK
I appreciate it|ممنونم، لطف کردی|1|SMALLTALK
do you have a minute?|یک دقیقه وقت داری؟|1|SMALLTALK
I didn't catch your name|اسمت رو متوجه نشدم|1|SMALLTALK
could you say that again?|میشه دوباره بگی؟|1|SMALLTALK
it was great talking to you|از صحبت باهات خوشحال شدم|1|SMALLTALK
let's keep in touch|در تماس باشیم|1|SMALLTALK
figure out|سر درآوردن، فهمیدن|1|PHRASAL
run into|اتفاقی (کسی را) دیدن|1|PHRASAL
look forward to|مشتاقانه منتظر بودن|1|PHRASAL
put off|عقب انداختن|1|PHRASAL
get along with|کنار آمدن با، رابطه خوب داشتن با|1|PHRASAL
come up with|(ایده یا راه‌حلی) پیدا کردن|1|PHRASAL
give up|دست کشیدن، تسلیم شدن|1|PHRASAL
turn down|رد کردن (پیشنهاد)|1|PHRASAL
show up|پیدا شدن، حاضر شدن|1|PHRASAL
find out|فهمیدن، کشف کردن|1|PHRASAL
pick up|برداشتن؛ دنبال کسی رفتن|1|PHRASAL
drop off|رساندن (کسی یا چیزی)|1|PHRASAL
hang out|با دوستان وقت گذراندن|1|PHRASAL
look up|(در لغت‌نامه یا اینترنت) جستجو کردن|1|PHRASAL
set up|راه انداختن، تنظیم کردن|1|PHRASAL
work out|ورزش کردن؛ درست شدن|1|PHRASAL
end up|سرانجام به جایی رسیدن|1|PHRASAL
coworker / colleague|همکار|2|WORK
deadline|مهلت، ضرب‌الاجل|2|WORK
I'm swamped|سرم خیلی شلوغه|2|WORK
let's schedule a meeting|بیایید یک جلسه بگذاریم|2|WORK
I'll follow up by email|با ایمیل پیگیری می‌کنم|2|WORK
can we reschedule?|میشه وقتش رو عوض کنیم؟|2|WORK
I'm running late|دارم دیر می‌کنم|2|WORK
job interview|مصاحبه کاری|2|WORK
resume|رزومه|2|WORK
apply for a job|برای یک شغل درخواست دادن|2|WORK
get a raise|افزایش حقوق گرفتن|2|WORK
take a day off|یک روز مرخصی گرفتن|2|WORK
work from home|دورکاری کردن|2|WORK
part-time|پاره‌وقت|2|WORK
full-time|تمام‌وقت|2|WORK
I'll get back to you|بعداً بهت خبر می‌دم|2|WORK
what's the status?|وضعیتش چطوره؟|2|WORK
on schedule|طبق برنامه|2|WORK
behind schedule|عقب‌تر از برنامه|2|WORK
quit my job|از کارم استعفا دادن|2|WORK
my boss|رئیسم|2|WORK
benefits|مزایا (بیمه و غیره)|2|WORK
budget|بودجه|2|MONEY
pricey / expensive|گران|2|MONEY
affordable|مقرون‌به‌صرفه|2|MONEY
it's on sale|حراج شده|2|MONEY
can I pay by card?|می‌تونم با کارت پرداخت کنم؟|2|MONEY
receipt|رسید|2|MONEY
refund|پس دادن پول|2|MONEY
save money|پس‌انداز کردن|2|MONEY
bank account|حساب بانکی|2|MONEY
split the bill|صورت‌حساب رو نصف کردن|2|MONEY
it's a good deal|معامله خوبیه|2|MONEY
I'm broke|بی‌پولم|2|MONEY
keep the change|بقیه‌اش مال خودت|2|MONEY
overwhelmed|کلافه، زیر بار فشار|3|FEELINGS
thrilled|خیلی خوشحال و هیجان‌زده|3|FEELINGS
frustrated|کلافه و ناامید|3|FEELINGS
relieved|خیالم راحت شد|3|FEELINGS
nervous|مضطرب، نگران|3|FEELINGS
embarrassed|خجالت‌زده|3|FEELINGS
homesick|دلتنگ وطن|3|FEELINGS
exhausted|خیلی خسته|3|FEELINGS
grateful|سپاسگزار|3|FEELINGS
confused|گیج|3|FEELINGS
I'm proud of you|بهت افتخار می‌کنم|3|FEELINGS
I'm fed up|به ستوه آمدم|3|FEELINGS
I'm in a good mood|سرحالم|3|FEELINGS
it's not a big deal|چیز مهمی نیست|3|FEELINGS
I can't stand it|تحملش رو ندارم|3|FEELINGS
I'm worried about it|نگرانشم|3|FEELINGS
calm down|آروم باش|3|FEELINGS
in my opinion|به نظر من|3|OPINION
I see your point|منظورت رو می‌فهمم|3|OPINION
to be honest|راستش رو بخوای|3|OPINION
it depends|بستگی داره|3|OPINION
I'm not sure about that|در موردش مطمئن نیستم|3|OPINION
that makes sense|منطقیه|3|OPINION
I couldn't agree more|کاملاً موافقم|3|OPINION
I totally disagree|کاملاً مخالفم|3|OPINION
on the other hand|از طرف دیگه|3|OPINION
as far as I know|تا جایی که من می‌دونم|3|OPINION
what do you think?|نظرت چیه؟|3|OPINION
it's up to you|تصمیمش با خودته|3|OPINION
I changed my mind|نظرم عوض شد|3|OPINION
that's a good point|نکته خوبیه|3|OPINION
I'd rather not|ترجیح می‌دم نه|3|OPINION
fair enough|قبول، منصفانه‌ست|3|OPINION
let me think about it|بذار فکر کنم|3|OPINION
road trip|سفر جاده‌ای|4|ROADTRIP
gas station|پمپ بنزین|4|ROADTRIP
fill up the tank|باک رو پر کردن|4|ROADTRIP
rest stop|استراحتگاه بین‌راهی|4|ROADTRIP
detour|مسیر انحرافی|4|ROADTRIP
traffic jam|ترافیک سنگین|4|ROADTRIP
rental car|ماشین کرایه‌ای|4|ROADTRIP
flat tire|لاستیک پنچر|4|ROADTRIP
speed limit|حداکثر سرعت مجاز|4|ROADTRIP
we're almost there|تقریباً رسیدیم|4|ROADTRIP
are we there yet?|هنوز نرسیدیم؟|4|ROADTRIP
take a left at the light|سر چراغ بپیچ چپ|4|ROADTRIP
it's a two-hour drive|دو ساعت رانندگیه|4|ROADTRIP
check in|پذیرش گرفتن (در هتل)|4|ROADTRIP
book a room|اتاق رزرو کردن|4|ROADTRIP
motel|هتل بین‌راهی|4|ROADTRIP
souvenir|سوغاتی|4|ROADTRIP
hiking trail|مسیر کوهپیمایی|4|OUTDOORS
campsite|محل کمپ|4|OUTDOORS
national park|پارک ملی|4|OUTDOORS
scenic view|منظره زیبا|4|OUTDOORS
wildlife|حیات وحش|4|OUTDOORS
waterfall|آبشار|4|OUTDOORS
canyon|دره عمیق، تنگه|4|OUTDOORS
geyser|آب‌فشان|4|OUTDOORS
summit|قله|4|OUTDOORS
sunrise|طلوع آفتاب|4|OUTDOORS
pitch a tent|چادر زدن|4|OUTDOORS
backpack|کوله‌پشتی|4|OUTDOORS
sunscreen|کرم ضدآفتاب|4|OUTDOORS
it's freezing|هوا خیلی سرده|4|OUTDOORS
the weather forecast|پیش‌بینی هوا|4|OUTDOORS
stay on the trail|از مسیر خارج نشو|4|OUTDOORS
keep an eye out for bears|مراقب خرس‌ها باش|4|OUTDOORS
run errands|کارهای روزمره بیرون رو انجام دادن|5|ERRANDS
grocery store|سوپرمارکت|5|ERRANDS
do the laundry|لباس شستن|5|ERRANDS
do the dishes|ظرف شستن|5|ERRANDS
take out the trash|زباله‌ها رو بیرون بردن|5|ERRANDS
landlord|صاحبخانه|5|ERRANDS
the rent is due|موعد پرداخت اجاره‌ست|5|ERRANDS
neighbor|همسایه|5|ERRANDS
pick up a package|بسته رو تحویل گرفتن|5|ERRANDS
post office|اداره پست|5|ERRANDS
make an appointment|وقت گرفتن|5|ERRANDS
fill out a form|فرم پر کردن|5|ERRANDS
driver's license|گواهینامه رانندگی|5|ERRANDS
it's out of order|خرابه، کار نمی‌کنه|5|ERRANDS
I'm locked out|کلید ندارم و پشت در موندم|5|ERRANDS
fix the sink|سینک رو تعمیر کردن|5|ERRANDS
mow the lawn|چمن زدن|5|ERRANDS
I'm under the weather|کمی ناخوشم|5|HEALTH
I have a sore throat|گلوم درد می‌کنه|5|HEALTH
I have a headache|سرم درد می‌کنه|5|HEALTH
I caught a cold|سرما خوردم|5|HEALTH
fever|تب|5|HEALTH
prescription|نسخه|5|HEALTH
pharmacy|داروخانه|5|HEALTH
health insurance|بیمه درمانی|5|HEALTH
emergency room|اورژانس|5|HEALTH
I feel dizzy|سرم گیج می‌ره|5|HEALTH
get some rest|استراحت کن|5|HEALTH
get well soon|زود خوب شی|5|HEALTH
allergic to|حساسیت داشتن به|5|HEALTH
check-up|معاینه پزشکی|5|HEALTH
I'm on medication|دارو مصرف می‌کنم|5|HEALTH
subway|مترو|6|NYC
take the subway|با مترو رفتن|6|NYC
uptown|شمال شهر (منهتن)|6|NYC
downtown|مرکز شهر|6|NYC
three blocks away|سه بلوک اون‌طرف‌تر|6|NYC
crosswalk|خط عابر پیاده|6|NYC
rush hour|ساعت شلوغی|6|NYC
wait in line|توی صف ایستادن|6|NYC
for here or to go?|اینجا میل می‌کنید یا می‌برید؟|6|NYC
to go, please|برای بیرون، لطفاً|6|NYC
can I get the check?|میشه صورت‌حساب رو بیارید؟|6|NYC
leave a tip|انعام گذاشتن|6|NYC
is this seat taken?|این صندلی خالیه؟|6|NYC
which way is Times Square?|تایمز اسکوئر از کدوم طرفه؟|6|NYC
the train is delayed|قطار تأخیر داره|6|NYC
I'm new in town|تازه به این شهر اومدم|6|NYC
the city that never sleeps|شهری که هرگز نمی‌خوابد|6|NYC
piece of cake|مثل آب خوردن، خیلی آسون|6|IDIOM
break the ice|یخ جمع رو شکستن|6|IDIOM
hit the road|راه افتادن|6|IDIOM
call it a day|کار رو برای امروز تموم کردن|6|IDIOM
on the same page|هم‌نظر و در جریان بودن|6|IDIOM
it costs an arm and a leg|خیلی گرونه|6|IDIOM
beat around the bush|حاشیه رفتن|6|IDIOM
get the hang of it|دستت میاد، یادش می‌گیری|6|IDIOM
once in a blue moon|خیلی به‌ندرت|6|IDIOM
the ball is in your court|حالا نوبت توئه که تصمیم بگیری|6|IDIOM
spill the beans|راز رو لو دادن|6|IDIOM
keep me posted|منو در جریان بذار|6|IDIOM
it's not rocket science|کار سختی نیست|6|IDIOM
hang in there|طاقت بیار|6|IDIOM
my bad|تقصیر من بود|6|IDIOM
I'm all ears|سراپا گوشم|6|IDIOM
sleep on it|روش فکر کن و بعد تصمیم بگیر|6|IDIOM
cut to the chase|برو سر اصل مطلب|6|IDIOM
last minute|دقیقه نود|6|IDIOM
`;
