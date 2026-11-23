// LENGUAMON word bank (English for Persian speakers, intermediate to advanced)
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
how have you been holding up?|این روزها با سختی‌ها چطور کنار میای؟|1|SMALLTALK
what brings you here?|چی شد که اومدی اینجا؟|1|SMALLTALK
I've heard so much about you|خیلی تعریفت رو شنیدم|1|SMALLTALK
it's been ages|یه عمره ندیدمت|1|SMALLTALK
how was your weekend?|آخر هفته‌ات چطور گذشت؟|1|SMALLTALK
anything exciting going on?|خبر هیجان‌انگیزی نیست؟|1|SMALLTALK
I didn't mean to interrupt|قصد نداشتم حرفت رو قطع کنم|1|SMALLTALK
sorry to bother you|ببخشید که مزاحم می‌شم|1|SMALLTALK
I'll let you go|دیگه وقتت رو نمی‌گیرم|1|SMALLTALK
it slipped my mind|از ذهنم پرید|1|SMALLTALK
small world!|دنیا چه کوچیکه!|1|SMALLTALK
fancy meeting you here|چه جالب که اینجا دیدمت|1|SMALLTALK
we should grab coffee sometime|باید یه وقتی با هم قهوه بخوریم|1|SMALLTALK
I'm terrible with names|من اسم‌ها یادم نمی‌مونه|1|SMALLTALK
it's on the tip of my tongue|نوک زبونمه|1|SMALLTALK
let's catch up soon|بیا به‌زودی همو ببینیم و از حال هم باخبر شیم|1|SMALLTALK
catch up|از حال هم باخبر شدن / عقب‌افتادگی را جبران کردن|1|PHRASAL
bring up|مطرح کردن (یک موضوع)|1|PHRASAL
put up with|تحمل کردن|1|PHRASAL
look after|مراقبت کردن از|1|PHRASAL
run out of|تمام کردن (چیزی)|1|PHRASAL
I'll figure out a way|یه راهی پیدا می‌کنم|1|PHRASAL
look forward to seeing you|منتظر دیدنت هستم|1|PHRASAL
come across|اتفاقی برخوردن به|1|PHRASAL
get over it|ازش بگذر / فراموشش کن|1|PHRASAL
turn out|از آب درآمدن|1|PHRASAL
it turned out fine|آخرش خوب از آب دراومد|1|PHRASAL
back out|جا زدن / عقب کشیدن|1|PHRASAL
count on|روی کسی حساب کردن|1|PHRASAL
you can count on me|می‌تونی روی من حساب کنی|1|PHRASAL
don't show up late|دیر نرس|1|PHRASAL
give up on|از کسی یا چیزی ناامید شدن|1|PHRASAL
don't give up on your dreams|از رویاهات دست نکش|1|PHRASAL
touch base|کوتاه با هم هماهنگ کردن|2|WORK
let's touch base next week|هفته‌ی بعد یه هماهنگی کوتاه بکنیم|2|WORK
circle back|بعداً دوباره به موضوع برگشتن|2|WORK
I'll circle back on that|بعداً دوباره درباره‌اش پیگیری می‌کنم|2|WORK
the bottom line|نتیجه‌ی نهایی / اصل مطلب|2|WORK
a win-win situation|موقعیتی که به نفع هر دو طرف است|2|WORK
think outside the box|خلاقانه و متفاوت فکر کردن|2|WORK
I'm stretched too thin|کارم خیلی زیاده و به همه‌اش نمی‌رسم|2|WORK
let's table this for now|فعلاً این موضوع رو کنار بذاریم|2|WORK
take the lead|مسئولیت کار را به عهده گرفتن|2|WORK
meet a deadline|کار را سر موعد تحویل دادن|2|WORK
we missed the deadline|از مهلت عقب افتادیم|2|WORK
negotiate a salary|درباره‌ی حقوق مذاکره کردن|2|WORK
I'd like to discuss my performance review|می‌خواهم درباره‌ی ارزیابی عملکردم صحبت کنم|2|WORK
per my last email|همان‌طور که در ایمیل قبلی‌ام گفتم|2|WORK
please find attached|پیوست را ملاحظه بفرمایید|2|WORK
I look forward to hearing from you|منتظر پاسخ شما هستم|2|WORK
thank you for your patience|از صبر و حوصله‌تان متشکرم|2|WORK
could you elaborate on that?|می‌شود بیشتر توضیح بدهید؟|2|WORK
that's above my pay grade|تصمیمش در حد اختیارات من نیست|2|WORK
burnout|فرسودگی شغلی|2|WORK
work-life balance|تعادل بین کار و زندگی|2|WORK
I'm between jobs|فعلاً بین دو کارم (دنبال کار جدیدم)|2|WORK
I got laid off|تعدیل شدم / از کار بیکار شدم|2|WORK
I got promoted|ترفیع گرفتم|2|WORK
pay off a loan|وام را تسویه کردن|2|MONEY
credit score|امتیاز اعتباری|2|MONEY
make ends meet|از پس خرج زندگی برآمدن|2|MONEY
we can barely make ends meet|به زور خرجمون رو درمیاریم|2|MONEY
that's a rip-off!|این کلاه‌برداریه! خیلی گرونه!|2|MONEY
live paycheck to paycheck|با حقوق ماه‌به‌ماه و بدون پس‌انداز زندگی کردن|2|MONEY
I'm on a tight budget|بودجه‌ام خیلی محدوده|2|MONEY
I'm saving up for a car|دارم برای خرید ماشین پس‌انداز می‌کنم|2|MONEY
interest rate|نرخ بهره|2|MONEY
down payment|پیش‌پرداخت|2|MONEY
it's worth every penny|ارزش تک‌تک پول‌هاش رو داره|2|MONEY
cash only|فقط پول نقد|2|MONEY
I'm torn|دو دلم|3|FEELINGS
I'm torn between the two|بین این دوتا دو دلم|3|FEELINGS
I'm on cloud nine|از خوشحالی رو ابرهام|3|FEELINGS
I'm at my wit's end|دیگه عقلم به جایی قد نمی‌ده|3|FEELINGS
it breaks my heart|دلم رو به درد میاره|3|FEELINGS
I'm over the moon|خیلی خیلی خوشحالم|3|FEELINGS
I'm a nervous wreck|از استرس داغونم|3|FEELINGS
I have mixed feelings about it|درباره‌اش احساسات متناقضی دارم|3|FEELINGS
it's bittersweet|تلخ و شیرینه|3|FEELINGS
I'm not in the mood|حوصله‌اش رو ندارم|3|FEELINGS
it gets on my nerves|میره رو اعصابم|3|FEELINGS
I'm devastated|خیلی داغونم / به‌شدت ناراحتم|3|FEELINGS
I'm flattered|خیلی لطف داری (از تعریفت ممنونم)|3|FEELINGS
no hard feelings|کدورتی نیست|3|FEELINGS
I see where you're coming from|می‌فهمم چرا این‌طور فکر می‌کنی|3|OPINION
that's a fair point, but|نکته‌ی منصفانه‌ایه، ولی|3|OPINION
I beg to differ|اجازه بدید مخالفت کنم|3|OPINION
let's agree to disagree|بیا قبول کنیم که نظرمون فرق داره|3|OPINION
to some extent|تا حدی|3|OPINION
by and large|روی هم رفته / در مجموع|3|OPINION
having said that|با این حال / با وجود این|3|OPINION
it goes without saying|ناگفته پیداست|3|OPINION
correct me if I'm wrong|اگر اشتباه می‌کنم اصلاحم کن|3|OPINION
I'm playing devil's advocate|دارم عمداً از نظر مخالف دفاع می‌کنم|3|OPINION
that's beside the point|این ربطی به اصل موضوع نداره|3|OPINION
the pros and cons|مزایا و معایب|3|OPINION
let's weigh the pros and cons|بیا مزایا و معایب رو بسنجیم|3|OPINION
I'm on the fence|هنوز تصمیم نگرفتم|3|OPINION
it's a double-edged sword|شمشیر دولبه است|3|OPINION
in a nutshell|به‌طور خلاصه|3|OPINION
from my point of view|از دیدگاه من|3|OPINION
I couldn't care less|اصلاً برام مهم نیست|3|OPINION
we're running low on gas|بنزینمون داره تموم می‌شه|4|ROADTRIP
pull over|کنار زدن (ماشین)|4|ROADTRIP
let's pull over at the next exit|بیا خروجی بعدی بزنیم کنار|4|ROADTRIP
take a shortcut|میان‌بر زدن|4|ROADTRIP
we took a wrong turn|یه جا رو اشتباه پیچیدیم|4|ROADTRIP
the GPS is recalculating|جی‌پی‌اس داره دوباره مسیریابی می‌کنه|4|ROADTRIP
I got a speeding ticket|جریمه‌ی سرعت گرفتم|4|ROADTRIP
bumper-to-bumper traffic|ترافیک سنگین و سپربه‌سپر|4|ROADTRIP
I'll take the wheel|من رانندگی می‌کنم|4|ROADTRIP
shotgun!|من جلو می‌شینم!|4|ROADTRIP
we hit the road at dawn|سپیده‌دم راه افتادیم|4|ROADTRIP
let's make a road trip playlist|بیا یه لیست آهنگ برای سفر جاده‌ای درست کنیم|4|ROADTRIP
in the middle of nowhere|وسط ناکجاآباد|4|ROADTRIP
off the beaten path|دور از مسیرهای شلوغ و توریستی|4|OUTDOORS
breathtaking|نفس‌گیر (بسیار زیبا)|4|OUTDOORS
the view is breathtaking|منظره نفس‌گیره|4|OUTDOORS
altitude sickness|ارتفاع‌زدگی|4|OUTDOORS
the trail is steep|مسیر شیب تندی داره|4|OUTDOORS
we reached the summit|به قله رسیدیم|4|OUTDOORS
watch your step|مواظب جای پات باش|4|OUTDOORS
a thunderstorm is rolling in|یه طوفان رعد و برق داره نزدیک می‌شه|4|OUTDOORS
it's pitch-dark|هوا کاملاً تاریکه|4|OUTDOORS
light a campfire|آتش اردو روشن کردن|4|OUTDOORS
the stars are out|ستاره‌ها درآمدن|4|OUTDOORS
we got caught in the rain|زیر بارون گیر افتادیم|4|OUTDOORS
I'm out of breath|نفسم بند اومده|4|OUTDOORS
leave no trace|هیچ ردی در طبیعت به جا نذار|4|OUTDOORS
wildfire|آتش‌سوزی جنگل|4|OUTDOORS
the park ranger|محیط‌بان پارک|4|OUTDOORS
I'd like to file a complaint|می‌خواهم شکایت ثبت کنم|5|ERRANDS
could you walk me through the process?|می‌شه مراحل رو قدم‌به‌قدم برام توضیح بدید؟|5|ERRANDS
what documents do I need?|چه مدارکی لازم دارم؟|5|ERRANDS
proof of address|مدرک اثبات محل سکونت|5|ERRANDS
renew my lease|اجاره‌نامه‌ام را تمدید کنم|5|ERRANDS
the security deposit|ودیعه‌ی اجاره|5|ERRANDS
the heat isn't working|سیستم گرمایش کار نمی‌کنه|5|ERRANDS
there's a leak in the ceiling|سقف چکه می‌کنه|5|ERRANDS
I'd like to return this|می‌خوام اینو پس بدم|5|ERRANDS
it's still under warranty|هنوز گارانتی داره|5|ERRANDS
I've been on hold for an hour|یک ساعته پشت خط منتظرم|5|ERRANDS
can I speak to a manager?|می‌تونم با مدیر صحبت کنم؟|5|ERRANDS
sign here, please|لطفاً اینجا را امضا کنید|5|ERRANDS
it's due by Friday|مهلتش تا جمعه است|5|ERRANDS
pay the utility bills|قبض‌های آب و برق و گاز را پرداخت کردن|5|ERRANDS
the package never arrived|بسته هیچ‌وقت نرسید|5|ERRANDS
I'd like to make an appointment for a check-up|می‌خواهم برای معاینه‌ی عمومی وقت بگیرم|5|HEALTH
I've been feeling run-down|این اواخر خیلی بی‌حال و خسته‌ام|5|HEALTH
I pulled a muscle|عضله‌ام کشیده شد|5|HEALTH
it's swollen|ورم کرده|5|HEALTH
I sprained my ankle|مچ پام پیچ خورد|5|HEALTH
side effects|عوارض جانبی|5|HEALTH
take two pills twice a day|روزی دو بار، هر بار دو قرص بخور|5|HEALTH
I'm allergic to penicillin|به پنی‌سیلین حساسیت دارم|5|HEALTH
my insurance doesn't cover it|بیمه‌ام اینو پوشش نمی‌ده|5|HEALTH
a second opinion|نظر یک پزشک دیگر|5|HEALTH
I need a refill on my prescription|باید نسخه‌ام را دوباره بگیرم|5|HEALTH
it hurts when I breathe|وقتی نفس می‌کشم درد می‌گیره|5|HEALTH
I can't sleep at night|شب‌ها خوابم نمی‌بره|5|HEALTH
mental health|سلامت روان|5|HEALTH
I'm on the mend|دارم بهتر می‌شم|5|HEALTH
bite the bullet|دل به دریا زدن (کار سختی را پذیرفتن)|6|IDIOM
let the cat out of the bag|راز را لو دادن|6|IDIOM
the elephant in the room|مشکل بزرگی که همه نادیده‌اش می‌گیرند|6|IDIOM
a blessing in disguise|خیری که در ظاهر بد بود|6|IDIOM
kill two birds with one stone|با یک تیر دو نشان زدن|6|IDIOM
don't count your chickens before they hatch|جوجه را آخر پاییز می‌شمارند|6|IDIOM
the last straw|قطره‌ای که کاسه‌ی صبر را لبریز کرد|6|IDIOM
that was the last straw|دیگه کاسه‌ی صبرم لبریز شد|6|IDIOM
go the extra mile|بیشتر از انتظار تلاش کردن|6|IDIOM
in hot water|توی دردسر|6|IDIOM
I'm in hot water|توی دردسر افتادم|6|IDIOM
easier said than done|گفتنش آسونه، انجامش سخته|6|IDIOM
better late than never|دیر رسیدن بهتر از هرگز نرسیدن است|6|IDIOM
actions speak louder than words|به عمل کار برآید، به سخندانی نیست|6|IDIOM
the early bird catches the worm|سحرخیز باش تا کامروا باشی|6|IDIOM
burn the midnight oil|تا دیروقت بیدار ماندن و کار کردن|6|IDIOM
throw in the towel|تسلیم شدن / کنار کشیدن|6|IDIOM
by the skin of my teeth|به زور / با هزار زحمت|6|IDIOM
I passed by the skin of my teeth|به زور قبول شدم|6|IDIOM
I'm down|پایه‌ام|6|SLANG
that's sick!|خیلی باحاله!|6|SLANG
no cap|جدی می‌گم / دروغ نمی‌گم|6|SLANG
it's lit|خیلی شلوغ و پرهیجانه|6|SLANG
I'm beat|خیلی خسته‌ام|6|SLANG
chill out|آروم باش|6|SLANG
I'm so over it|دیگه حوصله‌اش رو ندارم|6|SLANG
he flaked on me|قالم گذاشت|6|SLANG
it's a no-brainer|فکر کردن نمی‌خواد، واضحه|6|SLANG
what's the deal with this?|قضیه‌ی این چیه؟|6|SLANG
I'm stuck in traffic|توی ترافیک گیر کردم|6|NYC
the rent here is through the roof|اجاره‌ها اینجا سر به فلک کشیده|6|NYC
it's within walking distance|با پیاده‌روی می‌شه رفت|6|NYC
I'll grab a bagel on the way|سر راه یه بیگل می‌گیرم|6|NYC
stand clear of the closing doors|از درهای در حال بسته شدن فاصله بگیرید|6|NYC
the subway is packed|مترو خیلی شلوغه|6|NYC
I'd love to, but I have a prior commitment|خیلی دوست دارم، ولی از قبل قرار دیگه‌ای دارم|6|NYC
`;
