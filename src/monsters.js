// ===== LENGUAMON monsters: smooth SVG caricatures of animals found in Iran =====
// Ordered from the most common (home and farm) to the rarest. Easy words get common animals,
// hard words get rare ones. Each animal is called by its Persian name and has its English name written underneath.
const SP = (id, name, tr, fa, kind, fur, fur2, dark, o = {}) => ({ id, name, tr, fa, kind, fur, fur2, dark, ears: 'none', muzzle: 'none', extra: [], ...o });
const SPECIES = [
  // --- home and farm ---
  SP('mouse', 'HOUSE MOUSE', 'moosh', 'موش', 'quad', '#b8b0b4', '#f0e8ec', '#5a5058', { ears: 'mouse', muzzle: 'rodent', tail: 'thin' }),
  SP('chicken', 'CHICKEN', 'morgh', 'مرغ', 'bird', '#f8f4ec', '#ffffff', '#c8b8a0', { muzzle: 'beak', extra: ['comb'] }),
  SP('cat', 'PERSIAN CAT', 'gorbe-ye irani', 'گربه ایرانی', 'quad', '#f4eee4', '#ffffff', '#b8a898', { ears: 'tiny', muzzle: 'cat', tail: 'fluffy', extra: ['fluff'] }),
  SP('dog', 'DOG', 'sag', 'سگ', 'quad', '#c8945a', '#f4e4cc', '#5a3a1a', { ears: 'floppy', muzzle: 'dog', tail: 'curl' }),
  SP('sheep', 'SHEEP', 'gusfand', 'گوسفند', 'quad', '#f4f0e8', '#fffdf8', '#3a3030', { ears: 'side', muzzle: 'long', extra: ['wool', 'darkface'] }),
  SP('goat', 'GOAT', 'boz', 'بز', 'quad', '#e8e0d0', '#fffaf0', '#6a5a48', { ears: 'floppy', muzzle: 'long', horns: 'goat', tail: 'tuft', extra: ['beard'] }),
  SP('cow', 'COW', 'gav', 'گاو', 'quad', '#fbf8f2', '#ffffff', '#2a2420', { ears: 'side', muzzle: 'cow', horns: 'cow', tail: 'tuft', pattern: 'patches' }),
  SP('donkey', 'DONKEY', 'olagh', 'الاغ', 'quad', '#9a9098', '#e8e4e8', '#3a3438', { ears: 'long', muzzle: 'long', tail: 'tuft', extra: ['mane'] }),
  SP('horse', 'HORSE', 'asb', 'اسب', 'quad', '#9a5a30', '#d8a878', '#2a1408', { ears: 'side', muzzle: 'long', tail: 'tuft', extra: ['mane', 'blaze'] }),
  SP('pigeon', 'PIGEON', 'kabutar', 'کبوتر', 'bird', '#a8b0c0', '#d8dce8', '#4a5060', { muzzle: 'small', extra: ['neckshine', 'barwings'] }),
  SP('duck', 'DUCK', 'ordak', 'اردک', 'bird', '#f8f4e8', '#ffffff', '#c8b890', { muzzle: 'duck' }),
  SP('goose', 'GOOSE', 'ghaz', 'غاز', 'bird', '#f0f0f0', '#ffffff', '#a8a8a8', { muzzle: 'duck', extra: ['longneck'] }),
  SP('turkey', 'TURKEY', 'booghalamun', 'بوقلمون', 'bird', '#6a4a3a', '#a07a5a', '#2a1a10', { muzzle: 'small', extra: ['snood', 'fan'] }),
  SP('rabbit', 'RABBIT', 'khargush', 'خرگوش', 'quad', '#f4f0f0', '#ffffff', '#c8b8b8', { ears: 'rabbit', muzzle: 'rodent', tail: 'puff' }),
  SP('goldfish', 'GOLDFISH', 'mahi-ye ghermez', 'ماهی قرمز', 'fish', '#f08030', '#ffc060', '#a03a10', { extra: ['veiltail'] }),
  SP('canary', 'CANARY', 'ghanari', 'قناری', 'bird', '#f8e040', '#fff4a0', '#b89810', { muzzle: 'small' }),
  SP('bee', 'HONEY BEE', 'zanbur-e asal', 'زنبور عسل', 'bee', '#f0c030', '#fff0a0', '#2a1a10'),
  SP('mule', 'MULE', 'ghater', 'قاطر', 'quad', '#6a4a34', '#c8a888', '#2a1810', { ears: 'long', muzzle: 'long', tail: 'tuft' }),
  SP('dromedary', 'DROMEDARY', 'shotor-e yek-kohaneh', 'شتر یک‌کوهانه', 'quad', '#d8b07a', '#f0d8b0', '#8a6234', { ears: 'side', muzzle: 'long', tail: 'tuft', extra: ['hump', 'lids'] }),
  SP('bactrian', 'BACTRIAN CAMEL', 'shotor-e do-kohaneh', 'شتر دوکوهانه', 'quad', '#a87a4a', '#d8b888', '#5a3a1a', { ears: 'side', muzzle: 'long', tail: 'tuft', extra: ['hump2', 'lids', 'shag'] }),
  SP('buffalo', 'WATER BUFFALO', 'gavmish', 'گاومیش', 'quad', '#4a4448', '#7a7478', '#1a1618', { ears: 'side', muzzle: 'cow', horns: 'buffalo', tail: 'tuft' }),
  // --- common wild, near towns and fields ---
  SP('swallow', 'BARN SWALLOW', 'parastu', 'پرستو', 'bird', '#2a3a78', '#f4e8d8', '#101838', { muzzle: 'small', extra: ['redthroat', 'forktail'] }),
  SP('linnet', 'LINNET', 'sohreh', 'سهره', 'bird', '#a87a58', '#f0dcc8', '#4a3020', { muzzle: 'small', extra: ['redcap'] }),
  SP('jackal', 'GOLDEN JACKAL', 'shoghal', 'شغال', 'quad', '#c89858', '#f4e6cc', '#4a3218', { ears: 'pointy', muzzle: 'dog', tail: 'bushy' }),
  SP('fox', 'RED FOX', 'rubah-e ghermez', 'روباه قرمز', 'quad', '#e8782e', '#ffffff', '#3a2010', { ears: 'pointy', muzzle: 'dog', tail: 'bushy', pattern: 'mask' }),
  SP('boar', 'WILD BOAR', 'goraz', 'گراز', 'quad', '#5a4434', '#8a7464', '#2a1c12', { ears: 'pointy', muzzle: 'pig', tail: 'thin', extra: ['tusks', 'bristle'] }),
  SP('hare', 'CAPE HARE', 'khargush-e sahrayi', 'خرگوش صحرایی', 'quad', '#c8a070', '#f4e8d4', '#4a3018', { ears: 'rabbit', muzzle: 'rodent', tail: 'puff', extra: ['eartips'] }),
  SP('hedgehog', 'LONG-EARED HEDGEHOG', 'jujeh-tighi-ye gush-deraz', 'جوجه‌تیغی گوش‌دراز', 'quad', '#e8d0b0', '#fff6ea', '#5a4030', { ears: 'big', muzzle: 'rodent', extra: ['spines'] }),
  SP('jird', 'PERSIAN JIRD', 'moosh-e sahrayi', 'موش صحرایی', 'quad', '#c89868', '#f8ecdc', '#5a3a1a', { ears: 'mouse', muzzle: 'rodent', tail: 'jerboa' }),
  SP('gsquirrel', 'GROUND SQUIRREL', 'sanjab-e zamini', 'سنجاب زمینی', 'quad', '#c0a070', '#f0e0c8', '#5a4020', { ears: 'small', muzzle: 'rodent', tail: 'thin', extra: ['stand'] }),
  SP('squirrel', 'PERSIAN SQUIRREL', 'sanjab-e irani', 'سنجاب ایرانی', 'quad', '#b8683a', '#f8e4cc', '#4a2412', { ears: 'tufted', muzzle: 'rodent', tail: 'squirrel' }),
  SP('barnowl', 'BARN OWL', 'joghd-e anbar', 'جغد انبار', 'bird', '#e0b070', '#ffffff', '#8a5a2a', { muzzle: 'owl', extra: ['heartface'] }),
  SP('heron', 'GREY HERON', 'havasil-e khakestari', 'حواصیل خاکستری', 'bird', '#a8b0b8', '#f4f4f4', '#2a2a30', { muzzle: 'spear', extra: ['longlegs', 'plume'] }),
  SP('cormorant', 'CORMORANT', 'baklan', 'باکلان', 'bird', '#2a2a30', '#5a5a60', '#101014', { muzzle: 'hook', extra: ['whitecheek'] }),
  SP('teal', 'EURASIAN TEAL', 'khotka', 'خوتکا', 'bird', '#a8a8a0', '#f0e8d8', '#3a3a3a', { muzzle: 'duck', extra: ['tealhead'] }),
  SP('pintail', 'NORTHERN PINTAIL', 'ordak-e dom-suzani', 'اردک دم‌سوزنی', 'bird', '#b8b8b0', '#ffffff', '#3a3028', { muzzle: 'duck', extra: ['brownhead'] }),
  SP('wfgoose', 'WHITE-FRONTED GOOSE', 'ghaz-e pishani-sefid', 'غاز پیشانی‌سفید', 'bird', '#8a7a68', '#c8b8a4', '#3a3028', { muzzle: 'duck', extra: ['whitefront'] }),
  SP('beeeater', 'GREEN BEE-EATER', 'zanbur-khor-e sabz', 'زنبورخوار سبز', 'bird', '#58c048', '#a8e888', '#1a5018', { muzzle: 'thin', extra: ['eyestripe'] }),
  SP('hoopoe', 'HOOPOE', 'hodhod', 'هدهد', 'bird', '#e8a060', '#f8d8b0', '#2a1a10', { muzzle: 'hoopoe', extra: ['crest', 'barwings'] }),
  SP('bulbul', 'NIGHTINGALE', 'bolbol', 'بلبل', 'bird', '#a8845a', '#f0e0c4', '#4a3420', { muzzle: 'small' }),
  SP('chukar', 'CHUKAR PARTRIDGE', 'kabk', 'کبک', 'bird', '#b8b0a8', '#f0ece4', '#3a3030', { muzzle: 'redbeak', extra: ['eyestripe', 'barwings'] }),
  SP('mongoose', 'SMALL INDIAN MONGOOSE', 'khadang-e kuchak', 'خدنگ کوچک', 'quad', '#a88a5a', '#d8c098', '#4a3a20', { ears: 'small', muzzle: 'dog', tail: 'bushy' }),
  SP('greymongoose', 'GREY MONGOOSE', 'khadang-e khakestari', 'خدنگ خاکستری', 'quad', '#9a948a', '#d0ccc4', '#3a3630', { ears: 'small', muzzle: 'dog', tail: 'bushy', pattern: 'freckles' }),
  SP('deserthog', 'DESERT HEDGEHOG', 'jujeh-tighi-ye biyabani', 'جوجه‌تیغی بیابانی', 'quad', '#f0dcc0', '#fff8ee', '#6a5038', { ears: 'big', muzzle: 'rodent', extra: ['spines', 'mask2'] }),
  SP('brandthog', "BRANDT'S HEDGEHOG", 'jujeh-tighi-ye brant', 'جوجه‌تیغی برانت', 'quad', '#4a3a34', '#8a7a70', '#1a1210', { ears: 'big', muzzle: 'rodent', extra: ['spines'] }),
  SP('tortoise', 'GREEK TORTOISE', 'lakposht-e mahmizdar', 'لاک‌پشت مهمیزدار', 'tortoise', '#b8a870', '#e8dca8', '#4a4020'),
  SP('ratsnake', 'PERSIAN RATSNAKE', 'mar-e mooshkhor', 'مار موش‌خوار', 'snake', '#8a7a48', '#c8b880', '#3a3018', { pattern: 'blotch' }),
  SP('shrew', 'IRANIAN SHREW', 'hashareh-khor', 'حشره‌خور', 'quad', '#7a6a6a', '#b8a8a8', '#2a2020', { muzzle: 'shrew', tail: 'thin' }),
  SP('tridentbat', 'TRIDENT BAT', 'khoffash-e se-shakhe', 'خفاش سه‌شاخه', 'bat', '#c87840', '#e8a870', '#4a2410', { ears: 'big', muzzle: 'rodent' }),
  SP('barbastelle', 'CASPIAN BARBASTELLE', 'khoffash-e barbastel', 'خفاش باربستل', 'bat', '#3a302c', '#6a5a54', '#140e0c', { ears: 'big', muzzle: 'rodent' }),
  // --- less common wild ---
  SP('wolf', 'GREY WOLF', 'gorg', 'گرگ', 'quad', '#9a9aa4', '#ecece8', '#3e3e48', { ears: 'pointy', muzzle: 'dog', tail: 'bushy', pattern: 'mask' }),
  SP('hyena', 'STRIPED HYENA', 'kaftar', 'کفتار', 'quad', '#c8b898', '#e8dcc4', '#2a2418', { ears: 'pointy', muzzle: 'dog', tail: 'bushy', extra: ['stripes', 'bristle'] }),
  SP('bear', 'BROWN BEAR', 'khers-e ghahvei', 'خرس قهوه‌ای', 'quad', '#8a5a34', '#c8a07a', '#3a2414', { ears: 'round', muzzle: 'bear' }),
  SP('corsac', 'CORSAC FOX', 'rubah-e torkamani', 'روباه ترکمنی', 'quad', '#d8c098', '#f8f0e0', '#5a4428', { ears: 'pointy', muzzle: 'dog', tail: 'bushy' }),
  SP('wffox', 'WHITE-FOOTED FOX', 'rubah-e pa-sefid', 'روباه پاسفید', 'quad', '#d89858', '#ffffff', '#3a2010', { ears: 'pointy', muzzle: 'dog', tail: 'bushy', pattern: 'mask', extra: ['whitefeet'] }),
  SP('wildcat', 'ASIATIC WILDCAT', 'gorbe-ye vahshi', 'گربه وحشی', 'quad', '#c8b080', '#f0e4c8', '#3a3020', { ears: 'small', muzzle: 'bigcat', tail: 'thin', pattern: 'spots' }),
  SP('lynx', 'EURASIAN LYNX', 'vashagh', 'وشق', 'quad', '#c8a070', '#f4e4cc', '#3a2818', { ears: 'lynx', muzzle: 'bigcat', pattern: 'spots', extra: ['ruff'] }),
  SP('caracal', 'CARACAL', 'siyah-gush', 'سیاه‌گوش', 'quad', '#d0985a', '#f8e8d0', '#1a1210', { ears: 'lynx', muzzle: 'bigcat', tail: 'thin', extra: ['tears'] }),
  SP('sandcat', 'SAND CAT', 'gorbe-ye sheni', 'گربه شنی', 'quad', '#e8d0a0', '#fff8e8', '#6a5430', { ears: 'wide', muzzle: 'bigcat', tail: 'thin' }),
  SP('manul', "PALLAS'S CAT", 'gorbe-ye pallas', 'گربه پالاس', 'quad', '#a8a098', '#e0d8d0', '#3a3430', { ears: 'tiny', muzzle: 'bigcat', tail: 'fluffy', extra: ['fluff', 'grumpy'] }),
  SP('roe', 'ROE DEER', 'shuka', 'شوکا', 'quad', '#b8784a', '#f4e4d4', '#4a2810', { ears: 'big', muzzle: 'long', horns: 'roe' }),
  SP('maral', 'CASPIAN RED DEER', 'maral', 'مرال', 'quad', '#9a5a34', '#d8b088', '#3a1e0c', { ears: 'side', muzzle: 'long', horns: 'red', extra: ['ruff'] }),
  SP('gazelle', 'GOITERED GAZELLE', 'ahu', 'آهو', 'quad', '#dcae74', '#fffaf0', '#5a3a1a', { ears: 'big', muzzle: 'long', horns: 'lyre', tail: 'thin', pattern: 'face' }),
  SP('ibex', 'BEZOAR IBEX', 'kal-o-boz', 'کل و بز', 'quad', '#b89068', '#ecdcc4', '#5a3e24', { ears: 'side', muzzle: 'long', horns: 'ibex', tail: 'thin', extra: ['beard'] }),
  SP('tgoat', 'TURKMEN WILD GOAT', 'boz-e vahshi', 'بز وحشی', 'quad', '#a88458', '#e0ccb0', '#3a2a14', { ears: 'side', muzzle: 'long', horns: 'ibex', extra: ['beard', 'stripe'] }),
  SP('mouflon', 'ARMENIAN MOUFLON', 'ghuch-e armani', 'قوچ ارمنی', 'quad', '#a8683a', '#f4ece0', '#4a2a14', { ears: 'side', muzzle: 'long', horns: 'curl', pattern: 'saddle' }),
  SP('urial', 'URIAL', 'ghuch-e urial', 'قوچ اوریال', 'quad', '#b88858', '#f0e4d4', '#3a2410', { ears: 'side', muzzle: 'long', horns: 'curl', extra: ['ruff'] }),
  SP('jerboa', 'IRANIAN JERBOA', 'moosh-e do-pa', 'موش دوپا', 'quad', '#e8c898', '#fffaf0', '#6a4a2a', { ears: 'huge', muzzle: 'rodent', tail: 'jerboa' }),
  SP('ejerboa', 'EUPHRATES JERBOA', 'moosh-e do-pa-ye forat', 'موش دوپای فرات', 'quad', '#d8b080', '#fff4e4', '#5a3a1a', { ears: 'huge', muzzle: 'rodent', tail: 'jerboa', extra: ['stand'] }),
  SP('gerbil', "CHEESMAN'S GERBIL", 'jerbil', 'ژربیل', 'quad', '#e8b870', '#fff4e0', '#7a4a1a', { ears: 'mouse', muzzle: 'rodent', tail: 'jerboa' }),
  SP('dormouse', 'EDIBLE DORMOUSE', 'khabgard', 'خوابگرد', 'quad', '#a0a0a0', '#f0f0f0', '#3a3a3a', { ears: 'mouse', muzzle: 'rodent', tail: 'fluffy', extra: ['eyering', 'sleepy'] }),
  SP('porcupine', 'CRESTED PORCUPINE', 'tashi', 'تشی', 'quad', '#5a4a44', '#8a7a70', '#201814', { ears: 'round', muzzle: 'rodent', extra: ['quills'] }),
  SP('pika', 'AFGHAN PIKA', 'khargush-mushi', 'خرگوش‌موشی', 'quad', '#b8a088', '#e8dcd0', '#4a3a2a', { ears: 'round', muzzle: 'rodent' }),
  SP('mole', 'TALYSCH MOLE', 'moosh-kur', 'موش‌کور', 'quad', '#3a3640', '#6a6670', '#121016', { muzzle: 'mole', extra: ['claws', 'tinyeyes'] }),
  SP('flamingo', 'GREATER FLAMINGO', 'felamingo', 'فلامینگو', 'bird', '#f8a8b8', '#ffd8e0', '#c04868', { muzzle: 'flamingo', extra: ['longlegs', 'longneck'] }),
  SP('pelican', 'DALMATIAN PELICAN', 'pelikan-e khakestari', 'پلیکان خاکستری', 'bird', '#e8e8ec', '#ffffff', '#8a8a98', { muzzle: 'pouch', extra: ['curlycrest'] }),
  SP('spoonbill', 'EURASIAN SPOONBILL', 'kafcheh-nok', 'کفچه‌نوک', 'bird', '#fafafa', '#ffffff', '#b0b0b0', { muzzle: 'spoon', extra: ['longlegs', 'plume'] }),
  SP('curlew', 'EURASIAN CURLEW', 'gilanshah', 'گیلانشاه', 'bird', '#b89a70', '#f0e4d0', '#4a3a20', { muzzle: 'curlew', extra: ['longlegs', 'streaks'] }),
  SP('gbustard', 'GREAT BUSTARD', 'mish-morgh', 'میش‌مرغ', 'bird', '#c88a4a', '#f4f0e8', '#5a3418', { muzzle: 'beak', extra: ['whiskers', 'greyhead', 'barwings'] }),
  SP('eagle', 'GOLDEN EAGLE', 'oghab-e talayi', 'عقاب طلایی', 'bird', '#7a4e2a', '#e8b860', '#2a180c', { muzzle: 'hook', extra: ['brow', 'goldnape'] }),
  SP('eagleowl', 'EAGLE-OWL', 'shah-buf', 'شاه‌بوف', 'bird', '#a8784a', '#e8c898', '#3a2410', { muzzle: 'owl', extra: ['eartufts', 'orangeeyes', 'streaks'] }),
  SP('seaeagle', 'WHITE-BELLIED SEA EAGLE', 'oghab-e daryayi', 'عقاب دریایی', 'bird', '#6a6a78', '#ffffff', '#2a2a34', { muzzle: 'hook', extra: ['brow', 'whitehead'] }),
  SP('dolphin', 'BOTTLENOSE DOLPHIN', 'dolfin', 'دلفین', 'dolphin', '#8a9aaa', '#dce4ec', '#3a4a5a'),
  SP('agama', 'TOAD-HEADED AGAMA', 'agama-ye sar-vazaghi', 'آگامای سرقورباغه‌ای', 'lizard', '#e0c890', '#f8ecc8', '#7a6030', { extra: ['flaps'] }),
  SP('monitor', 'DESERT MONITOR', 'bozmajjeh', 'بزمجه', 'lizard', '#b8a060', '#e0d098', '#4a3a18', { pattern: 'bands', extra: ['longneck'] }),
  SP('cobra', 'CASPIAN COBRA', 'mar-e kobra', 'مار کبرا', 'snake', '#4a3a2a', '#c8a878', '#1a1208', { extra: ['hood'] }),
  SP('hviper', 'PERSIAN HORNED VIPER', 'afi-ye shakhdar', 'افعی شاخدار', 'snake', '#d8c098', '#f0e0c0', '#6a5028', { pattern: 'blotch', extra: ['eyehorns'] }),
  SP('scorpion', 'GADIM SCORPION', 'aghrab-e gadim', 'عقرب گادیم', 'scorpion', '#d8a850', '#f0d898', '#5a3a10'),
  SP('seaturtle', 'GREEN SEA TURTLE', 'lakposht-e sabz-e daryayi', 'لاک‌پشت سبز دریایی', 'seaturtle', '#5a8a4a', '#a8c888', '#1a3a18'),
  // --- rare and endangered ---
  SP('houbara', 'HOUBARA BUSTARD', 'hobareh', 'هوبره', 'bird', '#d8b888', '#ffffff', '#4a3418', { muzzle: 'beak', extra: ['ruffneck', 'crest2'] }),
  SP('lammergeier', 'BEARDED VULTURE', 'homa', 'هما', 'bird', '#e89a50', '#f8d0a0', '#2a2020', { muzzle: 'hook', extra: ['blackmask', 'beardtuft', 'redring'] }),
  SP('groundjay', 'IRANIAN GROUND JAY', 'zagh-e boor', 'زاغ بور', 'bird', '#c8bca8', '#f0e8dc', '#2a2420', { muzzle: 'thin', extra: ['blackbib', 'eyestripe'] }),
  SP('seal', 'CASPIAN SEAL', 'fok-e khazari', 'فک خزری', 'seal', '#9aa8b4', '#d4dde4', '#4a5866', { muzzle: 'seal', pattern: 'freckles' }),
  SP('sturgeon', 'BELUGA STURGEON', 'fil-mahi', 'فیل‌ماهی', 'fish', '#8a96a8', '#d0d8e4', '#2a3444', { extra: ['sturgeon'] }),
  SP('salamander', 'PERSIAN BROOK SALAMANDER', 'samandar-e juybari', 'سمندر جویباری', 'lizard', '#7a5a3a', '#e8b860', '#2a1a0c', { pattern: 'dots2', extra: ['smooth'] }),
  SP('softshell', 'EUPHRATES SOFTSHELL', 'lakposht-e narm-lak', 'لاک‌پشت نرم‌لاک', 'softshell', '#8a9a6a', '#c8d0a8', '#3a4228'),
  SP('blackbear', 'ASIAN BLACK BEAR', 'khers-e siyah', 'خرس سیاه', 'quad', '#2a2626', '#6a6262', '#0c0a0a', { ears: 'round', muzzle: 'bear', extra: ['vchest'] }),
  SP('leopard', 'PERSIAN LEOPARD', 'palang-e irani', 'پلنگ ایرانی', 'quad', '#e8b450', '#fff0d0', '#3a2a1a', { ears: 'small', muzzle: 'bigcat', tail: 'thin', pattern: 'rosettes' }),
  SP('onager', 'PERSIAN ONAGER', 'gur-khar', 'گورخر', 'quad', '#d8a870', '#fbf2e4', '#5a3a22', { ears: 'long', muzzle: 'long', tail: 'tuft', extra: ['mane', 'dorsal'] }),
  SP('fallow', 'PERSIAN FALLOW DEER', 'gavazn-e zard', 'گوزن زرد', 'quad', '#c8864a', '#fbeedc', '#5a3418', { ears: 'side', muzzle: 'long', horns: 'antler', pattern: 'dots' }),
  SP('mtdormouse', "SETZER'S DORMOUSE", 'khabgard-e dom-mushi', 'خوابگرد دم‌موشی', 'quad', '#c8b090', '#f4ead8', '#4a3a24', { ears: 'mouse', muzzle: 'rodent', tail: 'thin', extra: ['eyering'] }),
  SP('hamster', 'ZAGROS HAMSTER', 'hamster-e zagros', 'همستر زاگرس', 'quad', '#c8a080', '#f8ece0', '#5a3a24', { ears: 'mouse', muzzle: 'rodent', extra: ['cheeks'] }),
  SP('stviper', 'SPIDER-TAILED VIPER', 'afi-ye dom-ankabuti', 'افعی دم‌عنکبوتی', 'snake', '#a8a090', '#d8d0c0', '#3a3428', { pattern: 'blotch', extra: ['eyehorns', 'spidertail'] }),
  SP('mugger', 'MUGGER CROCODILE', 'gando', 'گاندو', 'croc', '#6a7a3a', '#a8b070', '#2a3010'),
  SP('newt', 'LURISTAN NEWT', 'samandar-e lorestani', 'سمندر لرستانی', 'lizard', '#1a1a1e', '#f08a20', '#000000', { pattern: 'dots2w', extra: ['smooth', 'orangestripe'] }),
  SP('cheetah', 'ASIATIC CHEETAH', 'yuzpalang-e irani', 'یوزپلنگ ایرانی', 'quad', '#f0c060', '#fff4d8', '#3a2a1a', { ears: 'small', muzzle: 'bigcat', tail: 'thin', pattern: 'spots', extra: ['tears'] }),
];
const SPECIES_BY_ID = Object.fromEntries(SPECIES.map(s => [s.id, s]));

// assign animals: rank words by difficulty (length of the Persian, later routes harder), common animals first
(function assignSpecies() {
  const score = w => w.level + (w.route - 1) * 6;
  const ranked = WORDS.slice().sort((a, b) => score(a) - score(b) || a.idx - b.idx);
  ranked.forEach((w, i) => { w.sp = SPECIES[Math.min(SPECIES.length - 1, Math.floor(i * SPECIES.length / ranked.length))]; });
  const hello = WORDS.find(w => w.tr0 === 'salam'); if (hello) hello.sp = SPECIES_BY_ID.mouse;
  for (const w of WORDS) { w.word = w.tr0.toUpperCase(); w.name = w.sp.tr.toUpperCase(); }
})();
function speciesOf(w) { return w.sp || SPECIES[0]; }

const OL = '#2b1d16';
const A = (o) => Object.entries(o).map(([k, v]) => `${k}="${v}"`).join(' ');
const sh = (tag, o, inner) => inner === undefined ? `<${tag} ${A(o)}/>` : `<${tag} ${A(o)}>${inner}</${tag}>`;
const mir = d => d.replace(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g, (m, x, y) => `${(64 - +x).toFixed(1)},${y}`);
const both = (d, attrs) => sh('path', { d, ...attrs }) + sh('path', { d: mir(d), ...attrs });

function monsterSvg(w, flip = false) {
  const sp = speciesOf(w), r = rng(hashStr((w.lookKey || w.key) + '|look'));
  const col = TYPES[w.palType || w.type].pal;
  const X = new Set(sp.extra || []);
  let expr = Math.floor(r() * 5); if (X.has('grumpy')) expr = 2; if (X.has('sleepy')) expr = 3;
  const st = { stroke: OL, 'stroke-width': 1.5, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' };
  const f = (c, extra = {}) => ({ fill: c, ...st, ...extra });
  const K = sp.kind;
  let back = '', body = '', head = '', face = '', front = '';
  const HC = {
    quad: { cx: 32, cy: 27, rx: 16.5, ry: 14 }, bat: { cx: 32, cy: 30, rx: 13, ry: 11.5 }, bird: { cx: 32, cy: 26, rx: 14, ry: 13 },
    seal: { cx: 32, cy: 27, rx: 15, ry: 13 }, dolphin: { cx: 32, cy: 27, rx: 15, ry: 13 }, tortoise: { cx: 32, cy: 23, rx: 12, ry: 10.5 },
    seaturtle: { cx: 32, cy: 22, rx: 11, ry: 9.5 }, softshell: { cx: 32, cy: 24, rx: 10, ry: 9 }, lizard: { cx: 32, cy: 24, rx: 15, ry: 11.5 },
    croc: { cx: 32, cy: 22, rx: 14, ry: 10 }, snake: { cx: 32, cy: 18, rx: 11.5, ry: 9 }, fish: { cx: 30, cy: 33, rx: 19, ry: 14 },
    bee: { cx: 32, cy: 22, rx: 12, ry: 11 }, scorpion: { cx: 32, cy: 34, rx: 10, ry: 8 },
  }[K];
  let hc = { ...HC };
  if (X.has('longneck') && K === 'bird') hc.cy -= 6;
  if (X.has('longneck') && K === 'lizard') hc.cy -= 3;
  let eyeY = hc.cy - 1.5;
  let eyeDX = ['tortoise', 'softshell', 'seaturtle', 'snake'].includes(K) ? 5 : K === 'scorpion' ? 3.5 : 6.5;
  let collarY = hc.cy + hc.ry - 2.5, collarW = 30, mouthY = null;

  // ================= quad / bat =================
  if (K === 'quad' || K === 'bat') {
    const tailT = sp.tail;
    if (tailT === 'fluffy') back += sh('path', { d: 'M44,50 C58,52 60,38 52,34 C56,42 50,46 44,46 Z', ...f(sp.fur) });
    if (tailT === 'bushy') back += sh('path', { d: 'M43,50 C56,56 62,42 56,32 C54,42 48,44 43,45 Z', ...f(sp.fur) }) + sh('path', { d: 'M56,32 C58,36 57,40 54.5,41 C55,37 55,35 56,32 Z', fill: sp.id === 'fox' || sp.id === 'wffox' ? '#fff' : sp.dark });
    if (tailT === 'thin') back += sh('path', { d: 'M44,50 C54,52 56,44 52,38', fill: 'none', stroke: OL, 'stroke-width': 4.2, 'stroke-linecap': 'round' }) + sh('path', { d: 'M44,50 C54,52 56,44 52,38', fill: 'none', stroke: ['mouse', 'shrew', 'mtdormouse'].includes(sp.id) ? '#e8b0b8' : sp.fur, 'stroke-width': 2.2, 'stroke-linecap': 'round' });
    if (tailT === 'tuft') back += sh('path', { d: 'M44,50 C50,52 52,48 52,44', fill: 'none', stroke: OL, 'stroke-width': 2 }) + sh('path', { d: 'M52,44 L50,39 L53,41 L54,37 L55,42 Z', fill: sp.dark, stroke: OL, 'stroke-width': .8 });
    if (tailT === 'curl') back += sh('path', { d: 'M44,48 C54,50 56,40 50,38 C46,38 47,44 50,43', fill: 'none', stroke: OL, 'stroke-width': 4.4, 'stroke-linecap': 'round' }) + sh('path', { d: 'M44,48 C54,50 56,40 50,38 C46,38 47,44 50,43', fill: 'none', stroke: sp.fur, 'stroke-width': 2.4, 'stroke-linecap': 'round' });
    if (tailT === 'puff') back += sh('circle', { cx: 46, cy: 52, r: 4, ...f('#ffffff') });
    if (tailT === 'squirrel') back += sh('path', { d: 'M42,52 C64,56 64,24 50,14 C44,10 40,16 46,20 C56,28 52,40 42,44 Z', ...f(sp.fur) });
    if (tailT === 'jerboa') back += sh('path', { d: 'M42,52 C54,58 60,50 60,40', fill: 'none', stroke: OL, 'stroke-width': 2 }) + sh('path', { d: 'M60,40 L57,34 L59,35 L60,31 L62,35 L63,34 Z', ...f('#2b1d16') });
    if (K === 'bat') back += both('M22,40 C14,30 4,30 2,40 C6,40 8,44 8,48 C12,46 14,48 16,52 C18,48 22,48 24,50 Z', f(sp.dark));
    if (X.has('quills')) for (let i = 0; i < 11; i++) { const a = -2.6 + i * 0.25; back += sh('line', { x1: 32, y1: 30, x2: (32 + Math.cos(a) * 30).toFixed(1), y2: (28 + Math.sin(a) * 30).toFixed(1), stroke: i % 2 ? '#f4f0e8' : '#1a1210', 'stroke-width': 2.4, 'stroke-linecap': 'round' }); }
    if (X.has('spines')) { let d = 'M12,34 '; for (let i = 0; i <= 12; i++) { const a = Math.PI + i * Math.PI / 12, rr = i % 2 ? 22 : 17; d += `L${(32 + Math.cos(a) * rr).toFixed(1)},${(31 + Math.sin(a) * rr).toFixed(1)} `; } d += 'L52,34 Z'; back += sh('path', { d, ...f(sp.id === 'brandthog' ? '#1e1814' : '#7a6250') }); }
    if (X.has('ruff')) back += sh('ellipse', { cx: 32, cy: 34, rx: 19, ry: 10, ...f(sp.fur2) });
    const horn = '#cdb48a';
    const hornPath = (d, w1, w2, c = horn) => both(d, { fill: 'none', stroke: OL, 'stroke-width': w1, 'stroke-linecap': 'round' }) + both(d, { fill: 'none', stroke: c, 'stroke-width': w2, 'stroke-linecap': 'round' });
    if (sp.horns === 'ibex') back += hornPath('M24,16 C20,4 10,0 5,6', 5.4, 3.4) + both('M19,7 L17,9 M14,4.5 L13,7 M9.5,4 L9.5,6.6', { stroke: OL, 'stroke-width': 1 });
    if (sp.horns === 'curl') back += hornPath('M23,17 C14,6 4,14 8,23 C11,29 19,26 16,20', 6.4, 4.4);
    if (sp.horns === 'lyre') back += hornPath('M27,15 C22,8 28,4 24,-2', 3.6, 1.8, '#3a2a1a');
    if (sp.horns === 'antler') back += both('M26,15 L22,8 L14,7 L13,2 L18,4 L17,0 L21,3 L22,-1 L25,4 L28,13 Z', f(horn));
    if (sp.horns === 'red') back += hornPath('M25,15 L20,4 L16,-3 M20,4 L13,3 M18,0 L22,-6 M22,9 L15,10', 3.4, 1.6, '#e8dcc0');
    if (sp.horns === 'roe') back += hornPath('M27,14 L25,4 M25,8 L22,6', 3, 1.4, '#e8dcc0');
    if (sp.horns === 'goat') back += hornPath('M25,15 C23,8 18,5 15,7', 4.4, 2.6);
    if (sp.horns === 'cow') back += hornPath('M20,18 C14,16 12,10 15,7', 4.6, 2.8, '#f4ecd8');
    if (sp.horns === 'buffalo') back += hornPath('M22,17 C12,14 4,16 2,22 C6,18 10,20 12,22', 6, 4, '#4a4440');
    const ear = (d, inner, c = sp.fur) => both(d, f(c)) + (inner ? both(inner, { fill: '#f0a0a8', opacity: .85 }) : '');
    const E = sp.ears;
    if (E === 'tiny') back += ear('M17,20 L18,9 L27,14 Z', 'M19.5,16 L20,12 L24,14 Z');
    if (E === 'small') back += [19, 45].map(x => sh('circle', { cx: x, cy: 15, r: 5, ...f(sp.fur) }) + sh('circle', { cx: x, cy: 15.5, r: 2.4, fill: sp.dark, opacity: .7 })).join('');
    if (E === 'round') back += [18, 46].map(x => sh('circle', { cx: x, cy: 15, r: 6, ...f(sp.fur) }) + sh('circle', { cx: x, cy: 15, r: 3, fill: sp.fur2 })).join('');
    if (E === 'mouse') back += [16, 48].map(x => sh('circle', { cx: x, cy: 14, r: 8, ...f(sp.fur) }) + sh('circle', { cx: x, cy: 14.5, r: 5, fill: '#f4b4bc' })).join('');
    if (E === 'pointy') back += ear('M15,22 L16,3 L28,13 Z', 'M18,17 L18.5,8 L24,13 Z') + (sp.id === 'fox' ? both('M16,3 L15.6,9 L19,7 Z', { fill: '#2b1d16' }) : '');
    if (E === 'lynx') back += ear('M15,22 L17,5 L28,13 Z', sp.id === 'caracal' ? null : 'M18.5,17 L19,9 L24,13 Z', sp.id === 'caracal' ? '#3a2a1e' : sp.fur) + both('M17,5 L16,-2 M17,5 L18.5,-1.5', { stroke: '#1a1210', 'stroke-width': 1.6 });
    if (E === 'wide') back += ear('M12,24 L14,8 L27,14 Z', 'M15.5,19 L16.5,11 L23,14 Z');
    if (E === 'long') back += both('M23,15 C14,10 12,-2 17,-3 C22,-2 26,8 26,14 Z', f(sp.fur)) + both('M22,12 C17,8 16,1 18,0 C21,1 23,7 24,11 Z', { fill: sp.fur2 }) + both('M17,-3 C18,-2 19,0 19,1', { stroke: sp.dark, 'stroke-width': 2 });
    if (E === 'rabbit') back += both('M24,15 C20,6 20,-6 24,-7 C28,-6 29,6 28,14 Z', f(sp.fur)) + both('M24.5,12 C22.5,4 23,-3 24.5,-4 C26,-3 26.5,4 26.5,11 Z', { fill: '#f4b4bc' }) + (X.has('eartips') ? both('M24,-7 C22,-6 21.5,-4 21.8,-2.5 L27.6,-2.5 C27.8,-4 26,-6.8 24,-7 Z', { fill: '#1a1210' }) : '');
    if (E === 'side') back += both('M18,22 C10,22 4,18 6,15 C10,14 15,16 19,19 Z', f(sp.fur)) + both('M16,20 C11,19 8,17 9,16 C12,16 14,17 17,19 Z', { fill: '#f0b8a8' });
    if (E === 'floppy') back += both('M18,16 C10,16 8,28 12,33 C16,34 18,26 21,20 Z', f(sp.id === 'dog' ? '#8a5a30' : sp.fur));
    if (E === 'big') back += both('M20,18 C10,14 8,2 14,0 C20,0 25,10 25,15 Z', f(sp.fur)) + both('M20,15 C14,11 13,4 15,3 C18,4 22,9 22,13 Z', { fill: '#f4b4b4' });
    if (E === 'huge') back += both('M22,17 C10,12 6,-4 13,-6 C21,-6 26,8 26,14 Z', f(sp.fur)) + both('M21,13 C14,9 11,0 14,-2 C18,-2 22,6 23,11 Z', { fill: '#f4b4b4' });
    if (E === 'tufted') back += ear('M17,20 L18,7 L27,14 Z', 'M19.5,16 L20,11 L24,14 Z') + both('M18,7 L16,1 M18,7 L19,1 M18,7 L13,3', { stroke: sp.dark, 'stroke-width': 1.3 });
    if (X.has('hump')) back += sh('path', { d: 'M34,40 C36,26 52,26 52,40 Z', ...f(sp.fur) });
    if (X.has('hump2')) back += sh('path', { d: 'M30,40 C30,28 40,28 41,38 C42,28 52,28 52,40 Z', ...f(sp.fur) });
    if (K === 'bat') {
      body += sh('ellipse', { cx: 32, cy: 46, rx: 10, ry: 9, ...f(sp.fur) }) + sh('ellipse', { cx: 32, cy: 48, rx: 6, ry: 5.5, fill: sp.fur2 });
      body += both('M27,54 L26,58 M29,55 L29,58', { stroke: OL, 'stroke-width': 1.4 });
      collarY = hc.cy + hc.ry - 3; collarW = 24;
    } else {
      const stand = X.has('stand');
      body += sh('ellipse', { cx: 32, cy: stand ? 45 : 47, rx: stand ? 11 : 13.5, ry: stand ? 12 : 10.5, ...f(sp.fur) });
      body += sh('ellipse', { cx: 32, cy: 49, rx: 7.5, ry: 6.5, fill: X.has('vchest') ? sp.fur : sp.fur2 });
      if (X.has('vchest')) body += sh('path', { d: 'M24,40 L32,48 L40,40 L37,40 L32,45 L27,40 Z', fill: '#f4f0e4' });
      const feet = X.has('whitefeet') ? '#ffffff' : sp.fur;
      body += sh('ellipse', { cx: 25, cy: 56.5, rx: 4.6, ry: 2.8, ...f(feet) }) + sh('ellipse', { cx: 39, cy: 56.5, rx: 4.6, ry: 2.8, ...f(feet) });
      if (X.has('claws')) body += both('M14,46 C12,42 20,40 22,44 C22,48 16,50 14,46 Z', f('#f0a8b0')) + both('M13,45 L10,44 M13,47 L10,47.5 M14,49 L11,50.5', { stroke: OL, 'stroke-width': 1 });
      else body += sh('ellipse', { cx: 20.5, cy: 47, rx: 3, ry: 5, transform: 'rotate(20 20.5 47)', ...f(sp.fur) }) + sh('ellipse', { cx: 43.5, cy: 47, rx: 3, ry: 5, transform: 'rotate(-20 43.5 47)', ...f(sp.fur) });
      if (sp.pattern === 'saddle') body += sh('ellipse', { cx: 40, cy: 44, rx: 4, ry: 3, fill: '#f4ece0' });
      if (sp.pattern === 'patches') body += sh('path', { d: 'M20,42 C24,38 28,44 24,48 C21,49 19,46 20,42 Z M38,50 C42,46 46,50 43,53 C40,55 37,53 38,50 Z', fill: sp.dark });
      if (sp.pattern === 'dots') for (const [x, y] of [[23, 43], [27, 40], [37, 40], [41, 43], [24, 49], [40, 49]]) body += sh('circle', { cx: x, cy: y, r: 1.2, fill: '#fff' });
      if (X.has('stripes')) body += both('M20,42 L25,45 M19,47 L24,49 M21,52 L25,53', { stroke: sp.dark, 'stroke-width': 1.6 });
      if (X.has('wool')) { let c = ''; for (const [x, y] of [[21, 42], [26, 39], [32, 38], [38, 39], [43, 42], [20, 48], [44, 48], [26, 54], [38, 54]]) c += sh('circle', { cx: x, cy: y, r: 4.2, ...f(sp.fur) }); body = c + body; }
      if (sp.pattern === 'spots' || sp.pattern === 'rosettes') for (let i = 0; i < 9; i++) { const x = 21 + r() * 22, y = 40 + r() * 14; if (Math.abs(x - 32) < 7 && y > 44) continue; body += sp.pattern === 'spots' ? sh('circle', { cx: x.toFixed(1), cy: y.toFixed(1), r: 1.1, fill: sp.dark }) : sh('circle', { cx: x.toFixed(1), cy: y.toFixed(1), r: 1.6, fill: 'none', stroke: sp.dark, 'stroke-width': .9 }); }
      if (X.has('dorsal')) body += sh('path', { d: 'M32,37 L32,42', stroke: sp.dark, 'stroke-width': 1.6 });
      if (X.has('shag')) body += both('M20,40 L18,44 L21,43 L19,47', { fill: 'none', stroke: sp.dark, 'stroke-width': 1.2 });
    }
  }
  // ================= bird =================
  if (K === 'bird') {
    if (X.has('fan')) for (let i = 0; i < 7; i++) back += sh('ellipse', { cx: 32, cy: 24, rx: 3.6, ry: 16, transform: `rotate(${-60 + i * 20} 32 40)`, ...f(i % 2 ? '#8a5a3a' : '#5a3a2a') });
    if (X.has('forktail')) back += sh('path', { d: 'M40,54 L54,62 L46,52 L56,56 L42,48 Z', ...f(sp.fur) });
    const legs = X.has('longlegs');
    if (legs) body += both('M27,54 L26,64', { stroke: sp.id === 'flamingo' ? '#e8708a' : '#5a5040', 'stroke-width': 1.8 });
    if (X.has('longneck')) body += sh('path', { d: `M27,40 L27,${hc.cy + 4} L37,${hc.cy + 4} L37,40 Z`, ...f(sp.fur) });
    body += sh('ellipse', { cx: 32, cy: legs ? 46 : 44, rx: 14, ry: legs ? 11 : 14, ...f(sp.fur) });
    body += sh('ellipse', { cx: 32, cy: legs ? 48 : 47, rx: 8, ry: legs ? 7 : 9, fill: sp.fur2 });
    if (X.has('blackbib')) body += sh('ellipse', { cx: 32, cy: 41, rx: 5, ry: 3.5, fill: '#1a1210' });
    if (X.has('redthroat')) body += sh('ellipse', { cx: 32, cy: 39, rx: 6, ry: 3.5, fill: '#c8502a' });
    if (X.has('streaks')) for (const [x, y] of [[27, 45], [31, 48], [35, 45], [29, 51], [34, 51]]) body += sh('path', { d: `M${x},${y} L${x},${y + 2.6}`, stroke: sp.dark, 'stroke-width': 1.1 });
    if (X.has('ruffneck')) body += both('M19,38 C22,44 24,50 22,54 C26,50 28,44 28,38 Z', { fill: '#2a2420' });
    const wingC = ['hoopoe', 'chukar', 'gbustard'].includes(sp.id) ? '#ffffff' : sp.id === 'eagle' ? '#5a3418' : sp.id === 'beeeater' ? '#3a9a40' : sp.fur;
    body += both('M19,38 C11,42 11,54 18,57 C22,52 22,44 19,38 Z', f(wingC));
    if (X.has('barwings')) body += both('M14,44 L20,43 M13,48 L21,47 M14,52 L21,51', { stroke: sp.id === 'pigeon' ? '#3a4050' : '#1a1210', 'stroke-width': 2.2 });
    if (!legs) body += both('M27,57 L26,61 M27,57 L28.5,61 M27,57 L24,60.5', { stroke: '#e08a2a', 'stroke-width': 1.6 });
    if (X.has('neckshine')) body += sh('path', { d: 'M21,37 Q32,43 43,37 L43,40 Q32,46 21,40 Z', fill: '#58a878', opacity: .7 });
    collarY = X.has('longneck') ? hc.cy + hc.ry + 1 : 36.5; collarW = X.has('longneck') ? 14 : 28;
  }
  // ================= seal / dolphin =================
  if (K === 'seal' || K === 'dolphin') {
    if (K === 'dolphin') back += sh('path', { d: 'M28,36 L34,22 L40,38 Z', ...f(sp.fur) }) + sh('path', { d: 'M42,56 C50,56 58,52 60,46 C56,50 52,50 48,50 Z', ...f(sp.fur) });
    body += sh('path', { d: 'M14,44 C14,30 50,30 50,44 C50,58 40,60 32,60 C24,60 14,58 14,44 Z', ...f(sp.fur) });
    body += sh('ellipse', { cx: 32, cy: 50, rx: 9, ry: 7, fill: sp.fur2 });
    body += both('M16,50 C8,52 6,58 12,58 C16,58 18,55 19,52 Z', f(sp.fur));
    collarY = 38;
  }
  // ================= tortoises and turtles =================
  if (K === 'tortoise') {
    body += sh('ellipse', { cx: 20, cy: 54, rx: 4.5, ry: 3.4, ...f('#9a9060') }) + sh('ellipse', { cx: 44, cy: 54, rx: 4.5, ry: 3.4, ...f('#9a9060') });
    body += sh('path', { d: 'M11,52 C11,34 20,30 32,30 C44,30 53,34 53,52 Z', ...f('#8a7a3a') });
    body += sh('path', { d: 'M26,33 L38,33 L42,41 L36,48 L28,48 L22,41 Z M14,44 L22,41 M42,41 L50,44 M28,48 L26,52 M36,48 L38,52 M26,33 L22,31 M38,33 L42,31', fill: '#a89a50', stroke: '#4a4020', 'stroke-width': 1.2 });
    body += sh('path', { d: 'M10,52 L54,52', stroke: OL, 'stroke-width': 2 });
    collarY = 29.5; collarW = 20;
  }
  if (K === 'seaturtle') {
    body += both('M18,38 C6,36 2,44 6,46 C10,46 14,44 20,42 Z', f(sp.fur2)) + both('M20,52 C12,54 10,58 14,59 C18,58 20,56 22,54 Z', f(sp.fur2));
    body += sh('ellipse', { cx: 32, cy: 45, rx: 16, ry: 13, ...f('#6a5a3a') });
    body += sh('path', { d: 'M26,36 L38,36 L42,44 L36,52 L28,52 L22,44 Z', fill: '#8a7a4a', stroke: '#3a3018', 'stroke-width': 1.1 });
    collarY = 28.5; collarW = 18;
  }
  if (K === 'softshell') {
    body += both('M19,48 C12,48 10,54 14,56 C18,56 20,53 22,51 Z', f(sp.fur));
    body += sh('ellipse', { cx: 32, cy: 46, rx: 19, ry: 12, ...f(sp.fur) }) + sh('ellipse', { cx: 32, cy: 45, rx: 13, ry: 8, fill: sp.fur2, opacity: .6 });
    for (const [x, y] of [[24, 42], [36, 40], [30, 48], [40, 47]]) body += sh('circle', { cx: x, cy: y, r: 1.2, fill: sp.dark, opacity: .6 });
    collarY = 30; collarW = 16;
  }
  // ================= lizards, newts, salamanders, crocodile =================
  if (K === 'lizard' || K === 'croc') {
    back += sh('path', { d: 'M40,52 C54,58 62,48 58,38 C56,46 50,50 42,46 Z', ...f(sp.fur) });
    if (X.has('orangestripe')) back += sh('path', { d: 'M44,51 C54,54 58,48 58,42', fill: 'none', stroke: '#f08a20', 'stroke-width': 1.6 });
    if (X.has('longneck')) body += sh('path', { d: `M26,40 L27,${hc.cy + 6} L37,${hc.cy + 6} L38,40 Z`, ...f(sp.fur) });
    body += sh('ellipse', { cx: 32, cy: 46, rx: 12, ry: 11, ...f(sp.fur) }) + sh('ellipse', { cx: 32, cy: 48, rx: 7, ry: 7, fill: sp.fur2 });
    body += both('M21,52 C16,54 14,58 17,59 L24,57 Z', f(sp.fur)) + both('M21,42 C16,40 13,43 15,45 L22,46 Z', f(sp.fur));
    if (sp.pattern === 'bands') body += both('M21,44 L26,44 M21,49 L26,49', { stroke: sp.dark, 'stroke-width': 1.6 });
    if (sp.pattern === 'dots2' || sp.pattern === 'dots2w') for (let i = 0; i < 7; i++) body += sh('circle', { cx: (22 + r() * 20).toFixed(1), cy: (38 + r() * 16).toFixed(1), r: 1.3, fill: sp.pattern === 'dots2w' ? '#ffffff' : '#f0c060' });
    if (X.has('orangestripe')) body += sh('path', { d: 'M32,38 L32,56', stroke: '#f08a20', 'stroke-width': 2.4 });
    if (K === 'croc') back += sh('path', { d: 'M22,40 L24,35 L26,40 L28,35 L30,40 L32,35 L34,40 L36,35 L38,40 L40,35 L42,40 Z', fill: sp.dark, stroke: OL, 'stroke-width': .8 });
    collarY = K === 'croc' ? 31 : hc.cy + hc.ry - 1; collarW = 24;
  }
  // ================= snake =================
  if (K === 'snake') {
    if (X.has('spidertail')) back += sh('path', { d: 'M50,52 C56,46 58,40 56,36', fill: 'none', stroke: OL, 'stroke-width': 4 }) + sh('circle', { cx: 56, cy: 34, r: 3.5, ...f(sp.dark) }) + sh('path', { d: 'M54,32 L50,28 M53.5,35 L49,35.5 M58,32 L62,28 M58.5,35 L63,35.5', stroke: OL, 'stroke-width': 1.1 });
    if (X.has('hood')) back += sh('path', { d: 'M32,8 C16,8 14,30 26,34 L38,34 C50,30 48,8 32,8 Z', ...f(sp.fur2) }) + sh('path', { d: 'M27,22 C25,26 28,30 32,30 C36,30 39,26 37,22', fill: 'none', stroke: sp.dark, 'stroke-width': 1.4 });
    body += sh('ellipse', { cx: 32, cy: 53, rx: 20, ry: 7, ...f(sp.fur) }) + sh('ellipse', { cx: 32, cy: 44, rx: 15, ry: 6, ...f(sp.fur) }) + sh('ellipse', { cx: 32, cy: 36, rx: 10, ry: 5, ...f(sp.fur) });
    body += sh('path', { d: 'M27.5,34 L27.5,22 L36.5,22 L36.5,34 Z', fill: sp.fur }) + sh('path', { d: 'M27.5,34 L27.5,22 M36.5,22 L36.5,34', stroke: OL, 'stroke-width': 1.5 });
    if (sp.pattern === 'blotch') for (const [x, y] of [[20, 52], [32, 55], [44, 52], [24, 44], [40, 44], [32, 37]]) body += sh('ellipse', { cx: x, cy: y, rx: 2.6, ry: 1.6, fill: sp.dark, opacity: .8 });
    collarY = 26.5; collarW = 14; mouthY = hc.cy + 4.5;
    front += sh('path', { d: `M32,${hc.cy + 6} L32,${hc.cy + 10} M32,${hc.cy + 10} L30.5,${hc.cy + 12} M32,${hc.cy + 10} L33.5,${hc.cy + 12}`, stroke: '#d83040', 'stroke-width': 1.1 });
  }
  // ================= fish =================
  const isFish = K === 'fish', stg = X.has('sturgeon');
  if (isFish) {
    back += sh('path', { d: stg ? 'M48,33 L62,20 L58,34 L62,46 Z' : 'M46,33 C56,18 66,22 60,33 C66,44 56,48 46,33 Z', ...f(X.has('veiltail') ? '#ff9a50' : sp.fur) });
    back += sh('path', { d: stg ? 'M28,24 C30,18 38,18 40,24 Z' : 'M24,22 C28,12 38,14 40,22 Z', ...f(sp.fur) });
    if (stg) hc = { cx: 32, cy: 33, rx: 22, ry: 10 };
    front += sh('path', { d: 'M28,42 C24,50 30,52 34,44 Z', ...f(sp.fur) });
    if (stg) front += sh('path', { d: 'M11,33 C4,32 2,36 9,38 Z', ...f(sp.fur) }) + sh('path', { d: 'M9,38 L8,42 M11,38 L11,42', stroke: OL, 'stroke-width': 1 }) + [18, 26, 34, 42].map(x => sh('path', { d: `M${x},${24.5} L${x + 2},${22} L${x + 4},${24.5} Z`, fill: '#e8ecf0', stroke: OL, 'stroke-width': .8 })).join('');
    else front += sh('path', { d: 'M38,26 C40,30 40,36 38,40', fill: 'none', stroke: sp.dark, 'stroke-width': 1, opacity: .6 });
    collarW = 0;
  }
  // ================= bee =================
  if (K === 'bee') {
    back += both('M22,36 C10,26 6,34 14,40 Z', { fill: '#e8f4ff', stroke: OL, 'stroke-width': 1.2 }) + both('M22,42 C12,40 10,48 18,48 Z', { fill: '#e8f4ff', stroke: OL, 'stroke-width': 1.2 });
    back += both('M27,13 C25,6 22,4 20,5', { fill: 'none', stroke: OL, 'stroke-width': 1.4 }) + sh('circle', { cx: 20, cy: 5, r: 1.6, fill: OL }) + sh('circle', { cx: 44, cy: 5, r: 1.6, fill: OL });
    body += sh('ellipse', { cx: 32, cy: 46, rx: 13, ry: 12, ...f(sp.fur) });
    body += sh('path', { d: 'M20,42 C26,40 38,40 44,42 L44.6,46 C38,44 26,44 19.4,46 Z M20,50 C26,48 38,48 44,50 L42,54 C38,52 26,52 22,54 Z', fill: OL });
    body += sh('path', { d: 'M30,58 L32,62 L34,58 Z', fill: OL });
    collarY = 31.5; collarW = 22; mouthY = hc.cy + 5;
  }
  // ================= scorpion =================
  if (K === 'scorpion') {
    back += sh('path', { d: 'M38,46 C50,48 56,36 52,22 C50,14 42,12 38,16', fill: 'none', stroke: OL, 'stroke-width': 6, 'stroke-linecap': 'round' }) + sh('path', { d: 'M38,46 C50,48 56,36 52,22 C50,14 42,12 38,16', fill: 'none', stroke: sp.fur, 'stroke-width': 4, 'stroke-linecap': 'round' });
    back += sh('path', { d: 'M38,16 L33,18 L37,12 Z', ...f(sp.dark) });
    body += both('M24,38 C16,34 10,36 8,30 C6,26 10,22 14,24 C12,28 16,30 18,28 C20,32 24,32 26,34 Z', f(sp.fur));
    body += both('M24,48 L16,54 M25,51 L18,58 M27,53 L22,60', { stroke: OL, 'stroke-width': 1.6 });
    body += sh('ellipse', { cx: 32, cy: 46, rx: 11, ry: 9, ...f(sp.fur) });
    body += sh('path', { d: 'M23,44 L41,44 M23,48 L41,48', stroke: sp.dark, 'stroke-width': 1, opacity: .6 });
    collarY = 40; collarW = 18; mouthY = hc.cy + 4;
  }

  // ================= head =================
  if (K === 'croc') { head += sh('path', { d: 'M18,18 C18,10 46,10 46,18 L48,28 C48,34 16,34 16,28 Z', ...f(sp.fur) }); hc.cy = 20; eyeY = 14; }
  else head += sh('ellipse', { ...hc, ...f(sp.fur) });
  const cy = hc.cy;
  if (X.has('darkface')) head += sh('ellipse', { cx: 32, cy: 30, rx: 9, ry: 9.5, fill: '#3a3030' });
  if (X.has('wool')) head = [[20, 16], [26, 12], [32, 11], [38, 12], [44, 16]].map(([x, y]) => sh('circle', { cx: x, cy: y, r: 4.6, ...f(sp.fur) })).join('') + head + [[24, 15], [32, 13], [40, 15]].map(([x, y]) => sh('circle', { cx: x, cy: y, r: 3.6, fill: sp.fur })).join('');
  if (X.has('fluff')) head += both('M16,26 L12,27 L15,29 L12,32 L16,32 L15,35 L19,33', { fill: sp.fur, stroke: OL, 'stroke-width': 1.2 });
  if (X.has('mane')) head += sh('path', { d: 'M27,14 L29,9 L30.5,13 L32,8 L33.5,13 L35,9 L37,14 Z', fill: sp.dark, stroke: OL, 'stroke-width': 1 });
  if (X.has('bristle')) head += sh('path', { d: 'M26,14 L28,9 L30,13 L32,8 L34,13 L36,9 L38,14 Z', fill: sp.dark });
  if (X.has('blaze')) head += sh('path', { d: 'M31,15 L33,15 L33.6,30 L30.4,30 Z', fill: '#ffffff' });
  if (sp.pattern === 'mask') head += both('M17,30 C20,38 27,38 30,34 C26,32 22,30 17,30 Z', { fill: sp.fur2 });
  if (X.has('mask2')) head += sh('path', { d: 'M18,22 C24,18 40,18 46,22 L44,28 C38,24 26,24 20,28 Z', fill: '#4a3a30', opacity: .8 });
  if (sp.pattern === 'face') head += sh('path', { d: 'M30,15 C31,24 31,28 30,33 L34,33 C33,28 33,24 34,15 Z', fill: sp.fur2 });
  if (X.has('stripe')) head += sh('path', { d: 'M31,14 L33,14 L33,24 L31,24 Z', fill: sp.dark });
  if (sp.pattern === 'spots' || sp.pattern === 'rosettes') for (let i = 0; i < 7; i++) { const a = r() * Math.PI * 2, d = 7 + r() * 6, x = 32 + Math.cos(a) * d * 1.1, y = 24 + Math.sin(a) * d * .55; if (y > 27) continue; head += sh('circle', { cx: x.toFixed(1), cy: y.toFixed(1), r: sp.pattern === 'spots' ? .9 : 1.3, fill: sp.pattern === 'spots' ? sp.dark : 'none', stroke: sp.pattern === 'rosettes' ? sp.dark : 'none', 'stroke-width': .8 }); }
  if (sp.pattern === 'freckles') for (let i = 0; i < 6; i++) head += sh('circle', { cx: (22 + r() * 20).toFixed(1), cy: (cy - 11 + r() * 7).toFixed(1), r: .9, fill: sp.dark, opacity: .5 });
  if (X.has('cheeks')) head += both('M16,28 C12,30 14,38 20,36 C22,34 21,30 18,28 Z', f(sp.fur2));
  if (X.has('eyering')) head += both(`M21,${eyeY - 5} C23,${eyeY - 8} 29,${eyeY - 8} 31,${eyeY - 5}`, { fill: 'none', stroke: '#1a1210', 'stroke-width': 2.4 });
  if (X.has('crest')) { let c = ''; for (let i = 0; i < 5; i++) { const x = 22 + i * 5, a = (i - 2) * 9; c += sh('path', { d: `M${x},16 C${x - 2},8 ${x - 1},2 ${x + 1},0 C${x + 3},2 ${x + 3},8 ${x + 2},16 Z`, fill: '#f0943a', stroke: OL, 'stroke-width': 1.1, transform: `rotate(${a} ${x} 16)` }) + sh('path', { d: `M${x - .2},3 C${x},1 ${x + 1},0 ${x + 1},0 C${x + 2},1 ${x + 2.4},2 ${x + 2.2},3.5 Z`, fill: '#1a1210', transform: `rotate(${a} ${x} 16)` }); } head = c + head; }
  if (X.has('crest2')) head = sh('path', { d: `M30,${cy - 11} C28,${cy - 20} 34,${cy - 22} 36,${cy - 18} C34,${cy - 18} 33,${cy - 15} 34,${cy - 11} Z`, ...f('#2a2420') }) + head;
  if (X.has('curlycrest')) head = sh('path', { d: `M30,${cy - 11} C26,${cy - 18} 32,${cy - 22} 34,${cy - 18} C36,${cy - 22} 40,${cy - 18} 36,${cy - 11} Z`, ...f(sp.fur) }) + head;
  if (X.has('comb')) head = sh('path', { d: `M26,${cy - 10} C25,${cy - 17} 28,${cy - 19} 29,${cy - 15} C29,${cy - 20} 33,${cy - 21} 33,${cy - 16} C34,${cy - 20} 38,${cy - 19} 37,${cy - 12} Z`, ...f('#e02a30') }) + head;
  if (X.has('plume')) head = sh('path', { d: `M40,${cy - 6} C48,${cy - 8} 54,${cy - 4} 56,${cy - 2}`, fill: 'none', stroke: '#1a1210', 'stroke-width': 1.6 }) + head;
  if (X.has('eartufts')) head = both(`M22,${cy - 10} L18,${cy - 22} L27,${cy - 13} Z`, f(sp.dark)) + head;
  if (X.has('heartface')) head += sh('path', { d: `M32,${cy - 8} C26,${cy - 14} 18,${cy - 10} 19,${cy - 2} C20,${cy + 6} 28,${cy + 10} 32,${cy + 12} C36,${cy + 10} 44,${cy + 6} 45,${cy - 2} C46,${cy - 10} 38,${cy - 14} 32,${cy - 8} Z`, fill: '#fffaf2', stroke: '#c8905a', 'stroke-width': 1.2 });
  if (X.has('goldnape')) head += sh('path', { d: `M18,${cy - 4} C20,${cy - 14} 44,${cy - 14} 46,${cy - 4} C40,${cy - 8} 24,${cy - 8} 18,${cy - 4} Z`, fill: '#e8b860' });
  if (X.has('whitehead')) head += sh('ellipse', { ...hc, rx: hc.rx - 1, ry: hc.ry - 1, fill: '#fafafa' });
  if (X.has('greyhead')) head += sh('ellipse', { ...hc, rx: hc.rx - 1, ry: hc.ry - 1, fill: '#c8c8cc' });
  if (X.has('brownhead')) head += sh('ellipse', { ...hc, rx: hc.rx - 1, ry: hc.ry - 1, fill: '#7a5a3a' }) + both(`M22,${cy + 5} C24,${cy + 9} 27,${cy + 11} 29,${cy + 11}`, { stroke: '#fff', 'stroke-width': 1.6, fill: 'none' });
  if (X.has('tealhead')) head += sh('ellipse', { ...hc, rx: hc.rx - 1, ry: hc.ry - 1, fill: '#8a3a20' }) + both(`M19,${eyeY - 1} C22,${eyeY - 2} 28,${eyeY + 2} 30,${eyeY + 6} C26,${eyeY + 6} 22,${eyeY + 4} 19,${eyeY - 1} Z`, { fill: '#2a8a5a' });
  if (X.has('whitefront')) head += sh('path', { d: `M28,${cy + 2} C28,${cy - 2} 36,${cy - 2} 36,${cy + 2} Z`, fill: '#fff' });
  if (X.has('whitecheek')) head += both(`M20,${cy + 4} C22,${cy + 10} 28,${cy + 10} 29,${cy + 6} Z`, { fill: '#f4f4f0' });
  if (X.has('redcap')) head += sh('path', { d: `M24,${cy - 10} C28,${cy - 14} 36,${cy - 14} 40,${cy - 10} Z`, fill: '#d8304a' });
  if (X.has('eyestripe')) head += sh('path', { d: `M18,${eyeY - 3} C24,${eyeY + 1} 28,${eyeY + 5} 32,${eyeY + 6} C36,${eyeY + 5} 40,${eyeY + 1} 46,${eyeY - 3} C42,${eyeY + 3} 36,${eyeY + 9} 32,${eyeY + 9} C28,${eyeY + 9} 22,${eyeY + 3} 18,${eyeY - 3} Z`, fill: '#1a1210' });
  if (X.has('blackmask')) head += both(`M18,${eyeY} C22,${eyeY - 3} 28,${eyeY - 2} 30,${eyeY + 2} C26,${eyeY + 4} 22,${eyeY + 4} 18,${eyeY} Z`, { fill: '#1a1210' });
  if (X.has('flaps')) head += both(`M17,${cy + 2} C10,${cy + 2} 8,${cy + 10} 14,${cy + 12} C18,${cy + 10} 19,${cy + 6} 20,${cy + 4} Z`, f('#f07a8a'));
  if (X.has('eyehorns')) head += both(`M25,${eyeY - 4} L24,${eyeY - 9} L28,${eyeY - 5} Z`, f(sp.fur));
  if (X.has('smooth')) head += sh('ellipse', { cx: hc.cx - 5, cy: cy - 5, rx: 4, ry: 2, fill: '#fff', opacity: .35 });

  // ================= muzzle / beak =================
  const m = sp.muzzle;
  if (m === 'cat') face += sh('path', { d: 'M30.5,30 L33.5,30 L32,32 Z', fill: '#e88a98', stroke: OL, 'stroke-width': .8 }) + both('M24,31 L14,29 M24,33 L14,34', { stroke: OL, 'stroke-width': .7 });
  if (m === 'bigcat') face += sh('circle', { cx: 29.5, cy: 32.5, r: 3.3, fill: sp.fur2 }) + sh('circle', { cx: 34.5, cy: 32.5, r: 3.3, fill: sp.fur2 }) + sh('path', { d: 'M30,29.5 L34,29.5 L32,32 Z', fill: '#3a2a1a' });
  if (m === 'dog') face += sh('ellipse', { cx: 32, cy: 33, rx: 7.5, ry: 5.5, fill: sp.fur2, stroke: OL, 'stroke-width': 1 }) + sh('ellipse', { cx: 32, cy: 30.5, rx: 2.8, ry: 2, fill: '#1a1210' });
  if (m === 'long') face += sh('ellipse', { cx: 32, cy: 34.5, rx: 8.5, ry: 6.5, fill: X.has('darkface') ? '#5a4a48' : sp.fur2, stroke: OL, 'stroke-width': 1.2 }) + sh('ellipse', { cx: 29, cy: 34, rx: 1.2, ry: 1.8, fill: OL }) + sh('ellipse', { cx: 35, cy: 34, rx: 1.2, ry: 1.8, fill: OL });
  if (m === 'cow') face += sh('ellipse', { cx: 32, cy: 35, rx: 10, ry: 6, fill: sp.id === 'buffalo' ? '#6a6268' : '#f4b8b8', stroke: OL, 'stroke-width': 1.2 }) + sh('ellipse', { cx: 28.5, cy: 35, rx: 1.4, ry: 2, fill: OL }) + sh('ellipse', { cx: 35.5, cy: 35, rx: 1.4, ry: 2, fill: OL });
  if (m === 'pig') face += sh('ellipse', { cx: 32, cy: 33, rx: 6, ry: 4.6, fill: '#c8a090', stroke: OL, 'stroke-width': 1.2 }) + sh('ellipse', { cx: 30, cy: 33, rx: 1, ry: 1.6, fill: OL }) + sh('ellipse', { cx: 34, cy: 33, rx: 1, ry: 1.6, fill: OL }) + (X.has('tusks') ? both('M25,35 C24,32 25,29 26,28 L27,33 Z', f('#fffaf0')) : '');
  if (m === 'bear') face += sh('ellipse', { cx: 32, cy: 33, rx: 7, ry: 5.5, fill: sp.fur2, stroke: OL, 'stroke-width': 1 }) + sh('ellipse', { cx: 32, cy: 31, rx: 3, ry: 2.1, fill: '#1a1210' });
  if (m === 'rodent') face += sh('ellipse', { cx: 32, cy: cy + 4, rx: 2, ry: 1.5, fill: sp.id === 'porcupine' || K === 'bat' ? '#1a1210' : '#e88a98' }) + both(`M24,${cy + 4} L15,${cy + 2} M24,${cy + 5.5} L15,${cy + 6}`, { stroke: OL, 'stroke-width': .6 });
  if (m === 'shrew' || m === 'mole') face += sh('path', { d: 'M27,30 C30,28 34,28 37,30 L33,38 L31,38 Z', fill: m === 'mole' ? '#f0a8b0' : sp.fur2, stroke: OL, 'stroke-width': 1 }) + sh('ellipse', { cx: 32, cy: 37.5, rx: 1.6, ry: 1.2, fill: '#e06878' });
  if (m === 'seal') face += sh('circle', { cx: 29, cy: 33, r: 3.6, fill: sp.fur2, stroke: OL, 'stroke-width': .9 }) + sh('circle', { cx: 35, cy: 33, r: 3.6, fill: sp.fur2, stroke: OL, 'stroke-width': .9 }) + sh('ellipse', { cx: 32, cy: 30.5, rx: 2.3, ry: 1.6, fill: '#1a1210' }) + both('M27,33 L18,31 M27,34.5 L18,36', { stroke: OL, 'stroke-width': .6 });
  if (K === 'dolphin') face += sh('path', { d: 'M26,30 C28,28 36,28 38,30 C38,36 26,36 26,30 Z', fill: sp.fur2, stroke: OL, 'stroke-width': 1.1 });
  const bk = (d, c) => sh('path', { d, fill: c, stroke: OL, 'stroke-width': 1.1 });
  const by = cy + 3;
  if (m === 'beak' || m === 'redbeak') face += bk(`M28.5,${by} L35.5,${by} L32,${by + 6} Z`, m === 'redbeak' ? '#e0303a' : '#e8a030');
  if (m === 'small') face += bk(`M30,${by} L34,${by} L32,${by + 4} Z`, ['canary', 'linnet'].includes(sp.id) ? '#e8c090' : '#3a3030');
  if (m === 'thin') face += bk(`M30,${by} L34,${by} L32,${by + 9} Z`, '#1a1a1a');
  if (m === 'duck') face += bk(`M26,${by} C26,${by - 2} 38,${by - 2} 38,${by} C38,${by + 5} 26,${by + 5} 26,${by} Z`, ['teal', 'pintail'].includes(sp.id) ? '#4a5060' : sp.id === 'wfgoose' ? '#f0a0a0' : '#f09a30') + sh('path', { d: `M27,${by + 1.5} L37,${by + 1.5}`, stroke: OL, 'stroke-width': .8 });
  if (m === 'hook') face += bk(`M28,${by - 1} C30,${by - 3} 36,${by - 3} 37,${by + 1} C37,${by + 4} 35,${by + 7} 33,${by + 7} C34,${by + 4} 32,${by + 2} 28,${by + 2} Z`, sp.id === 'cormorant' ? '#d8c050' : sp.id === 'lammergeier' ? '#c8c0b0' : '#f0c030');
  if (m === 'hoopoe') face += sh('path', { d: `M30,${by} C31,${by + 7} 33,${by + 13} 37,${by + 18}`, fill: 'none', stroke: OL, 'stroke-width': 3.2, 'stroke-linecap': 'round' }) + sh('path', { d: `M30,${by} C31,${by + 7} 33,${by + 13} 37,${by + 18}`, fill: 'none', stroke: '#3a2a20', 'stroke-width': 1.6, 'stroke-linecap': 'round' });
  if (m === 'curlew') face += sh('path', { d: `M31,${by} C30,${by + 8} 26,${by + 14} 20,${by + 18}`, fill: 'none', stroke: OL, 'stroke-width': 3, 'stroke-linecap': 'round' }) + sh('path', { d: `M31,${by} C30,${by + 8} 26,${by + 14} 20,${by + 18}`, fill: 'none', stroke: '#5a3a2a', 'stroke-width': 1.4, 'stroke-linecap': 'round' });
  if (m === 'spear') face += bk(`M30,${by} L34,${by} L32,${by + 16} Z`, '#e8c040');
  if (m === 'spoon') face += bk(`M31,${by} L33,${by} L33.4,${by + 11} C36,${by + 12} 36,${by + 17} 32,${by + 17} C28,${by + 17} 28,${by + 12} 30.6,${by + 11} Z`, '#2a2a2a');
  if (m === 'pouch') face += bk(`M27,${by} L37,${by} L36,${by + 14} C34,${by + 16} 30,${by + 16} 28,${by + 14} Z`, '#f0b040') + sh('path', { d: `M28,${by + 4} C30,${by + 12} 34,${by + 12} 36,${by + 4}`, fill: '#f8d070', stroke: OL, 'stroke-width': .8 });
  if (m === 'flamingo') face += bk(`M29,${by} L35,${by} L35,${by + 4} C35,${by + 8} 32,${by + 10} 30,${by + 9} L31,${by + 4} Z`, '#f8f0f0') + sh('path', { d: `M30.4,${by + 6} C31,${by + 9} 33,${by + 9} 34.6,${by + 6} L35,${by + 4} C34,${by + 8} 32,${by + 10} 30,${by + 9} Z`, fill: '#1a1210' });
  if (m === 'owl') face += bk(`M30.5,${by} L33.5,${by} L32,${by + 4} Z`, '#c8b8a0');
  if (X.has('snood')) face += sh('path', { d: `M33,${by} C35,${by + 4} 34,${by + 8} 32,${by + 9} C31,${by + 6} 32,${by + 3} 33,${by} Z`, ...f('#e03040') });
  if (X.has('comb')) face += sh('ellipse', { cx: 32, cy: by + 8, rx: 2, ry: 2.6, ...f('#e02a30') });
  if (X.has('whiskers')) face += both(`M30,${by + 3} L22,${by + 8} M30,${by + 4} L24,${by + 10}`, { stroke: '#f4f0e8', 'stroke-width': 1.2 });
  if (X.has('beardtuft')) face += sh('path', { d: `M31,${by + 6} L32,${by + 11} L33,${by + 6} Z`, fill: '#1a1210' });
  if (K === 'croc') face += sh('path', { d: 'M20,28 L22,30 L24,28 L26,30 L28,28 L30,30 L32,28 L34,30 L36,28 L38,30 L40,28 L42,30 L44,28', fill: '#fffaf0', stroke: OL, 'stroke-width': .8 }) + sh('ellipse', { cx: 28, cy: 24, rx: 1, ry: .8, fill: OL }) + sh('ellipse', { cx: 36, cy: 24, rx: 1, ry: .8, fill: OL });
  if (['lizard'].includes(K)) mouthY = cy + 5;

  // ================= eyes =================
  const tiny = X.has('tinyeyes');
  const eye = (x) => {
    if (tiny) return sh('circle', { cx: x, cy: eyeY + 1, r: 1, fill: OL });
    if (expr === 3) return sh('path', { d: `M${x - 3.4},${eyeY} Q${x},${eyeY + 2.6} ${x + 3.4},${eyeY}`, fill: 'none', stroke: OL, 'stroke-width': 1.6 });
    if (expr === 4 && x > 32) return sh('path', { d: `M${x - 3.2},${eyeY + 1} Q${x},${eyeY - 2.4} ${x + 3.2},${eyeY + 1}`, fill: 'none', stroke: OL, 'stroke-width': 1.6 });
    const big = ['jerboa', 'ejerboa', 'bulbul', 'dormouse', 'mtdormouse', 'sandcat', 'mouse', 'tridentbat', 'barbastelle', 'barnowl', 'eagleowl'].includes(sp.id) ? 1.15 : ['snake', 'scorpion', 'croc'].includes(K) ? .8 : 1;
    const ring = X.has('redring');
    let s = sh('ellipse', { cx: x, cy: eyeY, rx: 3.5 * big, ry: 4.1 * big, fill: X.has('orangeeyes') ? '#f09020' : ring ? '#f8e0a0' : '#fff', stroke: ring ? '#d83030' : OL, 'stroke-width': ring ? 1.8 : 1.2 });
    s += sh('ellipse', { cx: x + (x < 32 ? .6 : -.6), cy: eyeY + .6, rx: (K === 'snake' ? 1 : 2.2) * big, ry: 2.8 * big, fill: '#1e1410' });
    s += sh('circle', { cx: x + (x < 32 ? 1.3 : .1), cy: eyeY - .6, r: .95, fill: '#fff' });
    if (X.has('lids')) s += sh('path', { d: `M${x - 3.6},${eyeY - .5} Q${x},${eyeY - 4.8} ${x + 3.6},${eyeY - .5} Z`, fill: sp.fur, stroke: OL, 'stroke-width': 1 });
    return s;
  };
  if (isFish) { const ex = stg ? 18 : 21; face += eye(ex); face += sh('path', { d: stg ? 'M12,38 Q15,40 18,38' : 'M13,37 Q16,39 18,37', fill: 'none', stroke: OL, 'stroke-width': 1.1 }); }
  else face += eye(32 - eyeDX) + eye(32 + eyeDX);
  if (X.has('tears')) face += both('M24.5,28 C24,31 25,34 27,36', { fill: 'none', stroke: '#2a1a10', 'stroke-width': 1.3 });
  if (!isFish && (expr === 2 || X.has('brow'))) face += both(`M${32 - eyeDX - 4},${eyeY - 6} L${32 - eyeDX + 3},${eyeY - 4}`, { stroke: OL, 'stroke-width': 1.8 });
  if (!['bird', 'tortoise', 'fish', 'snake', 'scorpion', 'croc', 'seaturtle', 'softshell'].includes(K)) face += sh('ellipse', { cx: 32 - eyeDX - 3, cy: eyeY + 6, rx: 2.4, ry: 1.4, fill: '#ff8a9a', opacity: .45 }) + sh('ellipse', { cx: 32 + eyeDX + 3, cy: eyeY + 6, rx: 2.4, ry: 1.4, fill: '#ff8a9a', opacity: .45 });
  const my = mouthY ?? (m === 'long' || m === 'cow' ? 39.5 : m === 'dog' || m === 'bear' || m === 'pig' ? 36.5 : ['tortoise', 'seaturtle', 'softshell'].includes(K) ? cy + 5 : K === 'dolphin' ? 33 : m === 'rodent' ? cy + 7.5 : ['cat', 'bigcat', 'seal'].includes(m) ? 34.5 : K === 'bee' ? cy + 5 : null);
  if (my) {
    if (expr === 1) face += sh('path', { d: `M28.5,${my - .5} Q32,${my + 4.5} 35.5,${my - .5} Z`, fill: '#7a2a30', stroke: OL, 'stroke-width': 1 });
    else if (expr === 2) face += sh('path', { d: `M29,${my} Q32.5,${my + 1.6} 35.5,${my - .8}`, fill: 'none', stroke: OL, 'stroke-width': 1.2 });
    else face += sh('path', { d: `M29,${my - .4} Q30.5,${my + 1.6} 32,${my} Q33.5,${my + 1.6} 35,${my - .4}`, fill: 'none', stroke: OL, 'stroke-width': 1.1 });
    if (m === 'rodent' && K !== 'bat') face += sh('rect', { x: 31, y: my + .4, width: 2, height: 2.2, fill: '#fff', stroke: OL, 'stroke-width': .6 });
  }
  if (X.has('beard')) front += sh('path', { d: 'M29.5,40 L32,47 L34.5,40 Z', fill: sp.dark, stroke: OL, 'stroke-width': 1 });

  // The English name is shown as a label under the monster (monTag), not on the art.
  const collar = '';
  const shadow = sh('ellipse', { cx: 32, cy: 61, rx: 18, ry: 2.6, fill: 'rgba(0,0,0,.16)' });
  const longBill = ['spear', 'spoon', 'curlew', 'hoopoe', 'pouch', 'thin'].includes(m);
  const order = isFish ? back + head + body + front + face + collar : longBill ? back + body + head + face + front + collar : back + body + collar + head + face + front;
  // evolved forms: a golden aura and sparkles, and a crown (taj) at the final stage
  let pre = '', post = '';
  if (w.stage) {
    pre = `<defs><radialGradient id="aura" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#ffe9a0" stop-opacity=".85"/><stop offset=".6" stop-color="#ffd060" stop-opacity=".35"/><stop offset="1" stop-color="#ffd060" stop-opacity="0"/></radialGradient></defs><ellipse cx="32" cy="34" rx="${w.stage > 1 ? 34 : 30}" ry="${w.stage > 1 ? 34 : 29}" fill="url(#aura)"/>`;
    const star = (x, y, s) => `<path d="M${x},${y - s} L${x + s * .3},${y - s * .3} L${x + s},${y} L${x + s * .3},${y + s * .3} L${x},${y + s} L${x - s * .3},${y + s * .3} L${x - s},${y} L${x - s * .3},${y - s * .3} Z" fill="#fff6c0" stroke="#d8a020" stroke-width=".5"/>`;
    post += star(6, 10, 3.4) + star(58, 20, 2.8) + star(54, 52, 2.4) + (w.stage > 1 ? star(9, 46, 2.6) + star(46, -2, 2.2) : '');
    if (w.stage > 1) { const cx = hc.cx || 32, cy = hc.cy - hc.ry - 1.5;
      post += `<path d="M${cx - 8},${cy} L${cx - 9},${cy - 8} L${cx - 4},${cy - 4} L${cx},${cy - 10} L${cx + 4},${cy - 4} L${cx + 9},${cy - 8} L${cx + 8},${cy} Z" fill="#f4c840" stroke="${OL}" stroke-width="1.2" stroke-linejoin="round"/><circle cx="${cx}" cy="${cy - 3.6}" r="1.6" fill="#2ab0a8" stroke="${OL}" stroke-width=".6"/><circle cx="${cx - 5}" cy="${cy - 2.4}" r="1" fill="#d83040"/><circle cx="${cx + 5}" cy="${cy - 2.4}" r="1" fill="#d83040"/>`; }
  }
  const inner = pre + shadow + order + post;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -8 68 74">${flip ? `<g transform="translate(64 0) scale(-1 1)">${inner}</g>` : inner}</svg>`;
}
const MON_URL = {};
function monUrl(w, flip = false) { const k = (w.viewKey || w.key) + (flip ? '|f' : ''); return MON_URL[k] || (MON_URL[k] = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(monsterSvg(w, flip))); }
function monTag(w) { return `<div class="mon-tag">${esc(speciesOf(w).name)}</div>`; }
function monImg(w, cls = '') { return `<img class="mon ${cls}" src="${monUrl(w, cls === 'me')}" alt="${esc(w.name)}">`; }

// ===== evolution: a word grows into a phrase that uses it, and its animal grows stronger =====
// e.g. SALAM ("hello") -> SALAM, KHUBI? ("hello, how are you?"). Words with no phrase of their own
// grow into a longer phrase of the same kind. Two evolutions at most.
const EVO = {};
const EN_STOP = new Set(['the', 'and', 'you', 'are', 'for', 'with', 'its', 'not', 'how', 'what', 'lit']);
(function buildEvolutions() {
  const toks = w => norm(w.tr0).split(' ').filter(Boolean);
  const T = new Map(WORDS.map(w => [w.key, toks(w)]));
  const contains = (big, small) => { for (let i = 0; i + small.length <= big.length; i++) if (small.every((t, j) => big[i + j] === t)) return true; return false; };
  for (const w of WORDS) {
    const wt = T.get(w.key), lvl = w.level;
    let c = WORDS.filter(p => p !== w && p.level > lvl && T.get(p.key).length > wt.length && contains(T.get(p.key), wt));
    if (c.length) { c.sort((a, b) => a.level - b.level || a.idx - b.idx); EVO[w.key] = c[0].key; continue; }
    if (!c.length) { // a phrase whose meaning uses this word's meaning (water -> I want water)
      const ew = norm(w.en0).split(' ').filter(t => t.length > 2 && !EN_STOP.has(t));
      if (ew.length) c = WORDS.filter(p => p !== w && p.level > lvl && T.get(p.key).length > 1 && ew.every(t => norm(p.en0).split(' ').includes(t)));
    }
    if (!c.length) c = WORDS.filter(p => p !== w && p.type === w.type && T.get(p.key).length > 1 && p.level > lvl + 1);
    if (!c.length) c = WORDS.filter(p => p !== w && p.route >= w.route && T.get(p.key).length > 1 && p.level > lvl + 1);
    if (!c.length) continue;
    c.sort((a, b) => a.level - b.level || a.idx - b.idx);
    const near = c.slice(0, 3);
    EVO[w.key] = near[hashStr(w.key) % near.length].key;
  }
})();
const MON_VIEW = {};
// what a team member looks like now: its current word, but the animal it was born as
function monView(m) {
  const w = WORD[m.key];
  if (!m.base || m.base === m.key) return w;
  const b = WORD[m.base] || w, stage = m.stage || 1, k = m.key + '>' + m.base + '>' + stage;
  return MON_VIEW[k] || (MON_VIEW[k] = { ...w, sp: b.sp, name: b.name + ' ' + '★'.repeat(stage), lookKey: b.key, palType: b.type, stage, viewKey: k });
}
