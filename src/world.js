// ===== LENGUAMON world: maps, NPCs, movement, menus =====
// zurkhaneh interior: morshed by the drum alcove, an athlete in the sunken pit (gowd)
function GYM_ROWS(m, a) { return ['wwwwwwwwww', 'w&&w%%w&&w', `wfff${m}ffffw`, 'wff@@@@ffw', `wff${a}@@@ffw`, 'wff@@@@ffw', 'wffffffffw', 'wwwwEwwwww']; }
const MAP_SRC = {
  world: {
    rows: [
      // SHIRAZ: Eram-style garden and the tomb of Hafez
      'TT0TTTTTTTTTTTTTTTTT', 'TT.S.T.T.NN.T.T.T.TT', 'T*.*.*.*.GG.*.*.*.*T', 'T......S.3=l.......T', 'T.~~~~.T.==.T.~~~~.T',
      'T.~~~~.T.==.T.~~~~.T', 'T*.....T.==.T.S.ϕ.*T', 'TP.**..T.==.T..**.PT', 'T.^^^^^.S==..QQQQQ.T', 'T.#h#h#..==..#h#h#.T',
      'TS##7##..==..##8##ST', 'T.S......==........T', 'TTTTTTTT.==.TTTTTTTT',
      // ROUTE 3: Shiraz road
      '▲::::*...==...*::::▲', '▲::::....==....::::▲', '▲..LL....==a...LL..▲', '▲.......:==:.......▲', '▲*::::..:==:..::::*▲',
      '▲*::::...==...::::*▲', '▲...▲....==....▲...▲', '▲.::::...==...::::.▲', '▲P::::...==...::::P▲', '▲.::::*..==..*::::.▲',
      '▲........==........▲', '▲..S.....==.....o..▲',
      'TFFFFFFFF2FFFFFFFFFT',
      // ISFAHAN: bazaar, Shah Mosque, Si-o-se-pol over the Zayandeh river
      'T,AAA,,,,==,,,,AAA,T', 'T,KKK,,q,==,,,,KKK,T', 'T,,,,S,,,==,,,,,,,,T', 'T::::,,,,==,,IOOI,,T', 'T::::,,,,==,SIVVI,,T',
      'T::::,,,,==,,IVVI,,T', 'T,,,,,,S,==,,,,,,,,T', 'T~~~~~~~UBBU~~~~~~~T', 'T~~~~~~~UBBU~~~~~~~T', 'T~~~~~~~UBBU~~~~~~~T',
      'T,,,,,,,,==S,,ω,,,,T', 'T::::,,R,==,R,,::::T', 'T::::,,,,==,,e,::::T', 'T,AAA,,,,==,,,,AAA,T', 'T,KKK,,,,==,,,,KKK,T',
      'T,^^^^^,,==,,QQQQQ,T', 'T,#h#h#,,==,,#h#h#,T', 'TS##5##,,==,,##6##ST', 'T:::,,,,,==,,i,,:::T', 'T::::,,L,==,,,L::::T',
      'TT,,,,,,,==,,,,,,,TT',
      'TFFFFFFFF1FFFFFFFFFT',
      // ROUTE 1: Yazd desert road
      '▓,≈,J≈,,≈==≈,,≈J,≈,▓', '▓::::,,,,==,,,,::::▓', '▓::::,,,,==,,g,::::▓', '▓::::,,≈,==,,≈,::::▓', '▓,,,,,J,,==,,J,,,,,▓',
      '▓J,,:::::==:::::,,J▓', '▓,,≈:::::==:::::,,≈▓', '▓,,,:::::==:::::,,,▓', '▓,,,,R,,,==,,,R,,,,▓', '▓J≈,,≈,,≈==≈,,≈,,≈J▓',
      '▓::::,,v,==,,,,::::▓', '▓::::,,,,==,,,,::::▓', '▓::::,,S,==,,≈,::::▓', '▓,,,,,,,,==,,,,,,,,▓',
      'TFFFFFFFF9FFFFFFFFFT',
      // YAZD: windcatchers and the Amir Chakhmaq complex
      'T,,,,J,,,==,,,J,,,,T', 'T,,,,,,,,==,,,,,,,,T', 'T,,Y,,S,,==,,,Y,,Y,T', 'T,QQQQ,,,==,QQQQQQ,T', 'T,#hh#,,,==,#h##h#,T',
      'T,#H##,,,==,##M###,T', 'T,,=,S,,,==,,,=,,,,T', 'T,,============,,,,T', 'T,S,,,,,,==,,,,S,,,T', 'TJ,QQQQQ,==,,~~~,,JT',
      'Ts,#h#h#,==,S~~~,,,T', 'T,S##4##,==,,,,,,,,T', 'T,,,,,,,,==,,,nn,,,T', 'TIWWWWI,,==,^^^^^^,T', 'TIWWWWI,,==,#h##h#,T',
      'TIWWWWIS,==,##C###,T', 'T,,,,,,,,==,,,=,S,,T', 'T,J,,,,,,=======,,JT', 'TTTTTTTTTTTTTTTTTTTT',
    ],
    bases: { 1: '=', 2: '=', 3: '=', 9: '=', 'ϕ': '.', 'ω': ',', l: '.', a: '.', o: '.', q: ',', e: ',', i: ',', g: ',', v: ',', s: ',' },
    // signs keyed by "x,y": what it is, where it is, and why it matters to Persians
    signs: {
      '7,3': [`TOMB OF HAFEZ ${F('آرامگاه حافظ', 'aramgah-e hafez')}<br>Hafezieh, Shiraz.`, 'Hafez, a 14th-century poet, is the most loved poet in Iran. His book of poems, the Divan, is in almost every Persian home.', 'Families open it at random to read their fortune (fal-e hafez), especially on Yalda, the longest night of the year.'],
      '14,6': [`ERAM GARDEN ${F('باغ ارم', 'bagh-e eram')}<br>Shiraz.`, 'A classic Persian garden: long pools, rows of cypress and roses, laid out as a picture of paradise.', "Persian gardens are a UNESCO World Heritage site, and the English word 'paradise' comes from an old Persian word for a walled garden."],
      '8,8': [`SHIRAZ ${F('شیراز', 'shiraz')}<br>Fars province, south-west Iran.`, 'The city of poets, roses and gardens, home of Hafez and Saadi, the two great poets of Persian.', 'THE CENSOR has seized the tomb of Hafez up ahead!'],
      '2,11': [`CYPRESS ${F('سرو', 'sarv')}`, 'In Persian art and poetry the cypress stands for life, freedom and standing tall, and it appears in carpets and paisley (boteh) designs.', 'The Cypress of Abarkuh in Yazd province is believed to be more than 4,000 years old.'],
      '3,24': [`${ROUTE_NAMES[3]}<br>Wild FOOD, FEELING, COLOR, BODY and WEATHER words live here.`],
      '5,28': [`GRAND BAZAAR ${F('بازار بزرگ', 'bazar-e bozorg')}<br>Isfahan.`, 'One of the oldest and longest covered bazaars in the Middle East, running for kilometres up to Naqsh-e Jahan Square.', 'Bazaars are the heart of Iranian city life: spices, carpets, copperwork, tea, and plenty of bargaining.'],
      '12,30': [`SHAH MOSQUE ${F('مسجد شاه', 'masjed-e shah')}<br>Naqsh-e Jahan Square, Isfahan.`, 'Built from 1611 to 1630 under Shah Abbas I, and also called the Imam Mosque.', 'Its blue tilework and dome are masterpieces of Persian architecture. The square around it is a UNESCO World Heritage site.'],
      '7,32': [`ISFAHAN ${F('اصفهان', 'esfahan')}<br>Central Iran, on the Zayandeh River.`, `People say ${F('اصفهان نصف جهان', 'esfahan nesf-e jahan')}: "Isfahan is half the world."`, 'It was the capital of the Safavid empire and is famous for its squares, bridges, tilework and handicrafts.'],
      '11,36': [`SI-O-SE-POL ${F('سی و سه پل', 'si-o-se pol')}<br>Over the Zayandeh River, Isfahan.`, "Its name means 'thirty-three bridges', for its 33 arches. It was built around 1602 under Shah Abbas I.", 'For 400 years Isfahanis have met, walked and sung under its arches on summer evenings.'],
      '7,60': [`${ROUTE_NAMES[1]}<br>GREETINGS, QUESTIONS and CLASSROOM words hide in the desert brush.`],
      '6,65': [`WINDCATCHER ${F('بادگیر', 'badgir')}<br>Yazd.`, 'These towers catch the desert breeze and send it down into the house to cool it: natural air conditioning, used in Iran for centuries.', 'Yazd is called the city of windcatchers.'],
      '5,69': [`YOUR HOUSE ${F('خانه', 'khaneh')}`, 'A Yazdi home built of sun-dried mud brick (khesht). The thick walls stay cool by day and warm at night.', 'Family and hospitality are at the center of Persian life. Guests are always offered tea and fruit.'],
      '2,71': [`YAZD ${F('یزد', 'yazd')}<br>Central Iran, between two great deserts.`, 'One of the oldest living cities on earth and a UNESCO World Heritage city.', 'A center of Zoroastrian heritage, famous for windcatchers, underground water channels (qanats) and sweets.'],
      '15,71': [`PROFESSOR HAYDEH'S SCHOOL ${F('مدرسه', 'madreseh')}`, 'Persian has been a language of poetry and science for more than a thousand years.', 'Scholars like Avicenna (Ibn Sina) and Omar Khayyam came from Iran. Here you study its words!'],
      '12,73': [`COURTYARD POOL ${F('حوض', 'hoz')}`, 'Water is precious in the desert, so Persian homes and gardens are built around a pool that cools the air and reflects the sky.'],
      '7,78': [`AMIR CHAKHMAQ COMPLEX ${F('امیر چخماق', 'amir chakhmaq')}<br>Yazd.`, 'A 15th-century square, mosque and bazaar, famous for its tall façade of arched niches.', 'It is one of the best-known landmarks of Yazd and a gathering place on holidays.'],
      '16,79': [`TEAHOUSE ${F('چایخانه', 'chaykhaneh')}`, 'Tea is the heart of Iranian hospitality, served strong in small glasses with sugar cubes (ghand).', 'In teahouses friends talk, read poetry and play backgammon (takhte-nard).'],
      '1,10': [`TEAHOUSE ${F('چایخانه', 'chaykhaneh')}<br>Shiraz.`, 'Shirazis love to sit in the garden with tea, poetry and fresh faloodeh (a rosewater noodle sorbet).', 'Talk to the owner for a glass of chai. It will refresh your Lenguamon.'],
      '18,10': [`ZURKHANEH ${F('زورخانه', 'zoorkhaneh')}<br>Shiraz.`, 'The zurkhaneh, or "house of strength", is the traditional Iranian gym. Athletes swing wooden clubs (meel) in a sunken pit while the morshed drums and chants verses from the Shahnameh.', 'Its rituals are on the UNESCO list of Intangible Cultural Heritage.', `Talk to the morshed inside to train on the words of the ${ROUTE_NAMES[3]}.`],
      '1,43': [`TEAHOUSE ${F('چایخانه', 'chaykhaneh')}<br>Isfahan.`, 'Isfahan is famous for its teahouses, like the old ones under the arches of its bridges.', 'Talk to the owner for a glass of chai. It will refresh your Lenguamon.'],
      '18,43': [`ZURKHANEH ${F('زورخانه', 'zoorkhaneh')}<br>Isfahan.`, 'The zurkhaneh, or "house of strength", is the traditional Iranian gym. Athletes swing wooden clubs (meel) in a sunken pit while the morshed drums and chants verses from the Shahnameh.', 'Its rituals are on the UNESCO list of Intangible Cultural Heritage.', 'Talk to the morshed inside to train on the words of ISFAHAN.'],
      '2,74': [`ZURKHANEH ${F('زورخانه', 'zoorkhaneh')}<br>Yazd.`, 'The zurkhaneh, or "house of strength", is the traditional Iranian gym. Athletes swing wooden clubs (meel) in a sunken pit while the morshed drums and chants verses from the Shahnameh.', 'Its rituals are on the UNESCO list of Intangible Cultural Heritage.', `Talk to the morshed inside to train on the words of the ${ROUTE_NAMES[1]}.`],
    },
    doors: { H: { to: 'house', tx: 4, ty: 6 }, M: { to: 'school', tx: 4, ty: 6 }, C: { to: 'teahouse', tx: 4, ty: 6 }, 0: { to: 'north', tx: 9, ty: 88, need: 'b3', needMsg: 'The road north to Persepolis, Kashan and Tehran is blocked. THE CENSOR\'s men are everywhere. Free the tomb of Hafez first!' },
      4: { to: 'gym1', tx: 4, ty: 6 }, 5: { to: 'teahouse2', tx: 4, ty: 6 }, 6: { to: 'gym2', tx: 4, ty: 6 }, 7: { to: 'teahouse3', tx: 4, ty: 6 }, 8: { to: 'gym3', tx: 4, ty: 6 } },
  },
  house: { rows: ['wwwwwwwwww', 'wbbfffffmw', 'wfcccccffw', 'wfcktkcfxw', 'wfcccccffw', 'wffffffffw', 'wpffffffpw', 'wwwwEwwwww'], bases: { x: 'f' }, exit: { to: 'world', door: 'H' } },
  school: { rows: ['wwwwwwwwww', 'wZZZZbbbpw', 'wfffyffffw', 'wffffffffw', 'wdfdfdfdfw', 'wffffffzfw', 'wdfdfdffpw', 'wwwwEwwwww'], bases: { y: 'f', z: 'f' }, exit: { to: 'world', door: 'M' } },
  teahouse: { rows: ['wwwwwwwwww', 'wmbbbbmbbw', 'wffffrfffw', 'wuuuuuuffw', 'wccccccccw', 'wctccctcjw', 'wccccccccw', 'wwwwEwwwww'], bases: { r: 'f', j: 'c' }, exit: { to: 'world', door: 'C' } },
  teahouse2: { rows: ['wwwwwwwwww', 'wmbbbbmbbw', 'wffff!fffw', 'wuuuuuuffw', 'wccccccccw', 'wctccctccw', 'wccccccccw', 'wwwwEwwwww'], bases: { '!': 'f' }, exit: { to: 'world', door: '5' } },
  teahouse3: { rows: ['wwwwwwwwww', 'wmbbbbmbbw', 'wffff$fffw', 'wuuuuuuffw', 'wccccccccw', 'wctccctccw', 'wccccccccw', 'wwwwEwwwww'], bases: { '$': 'f' }, exit: { to: 'world', door: '7' } },
  gym1: { rows: GYM_ROWS('<', '|'), bases: { '<': 'f', '|': '@' }, exit: { to: 'world', door: '4' } },
  gym2: { rows: GYM_ROWS('>', '_'), bases: { '>': 'f', '_': '@' }, exit: { to: 'world', door: '6' } },
  gym3: { rows: GYM_ROWS('?', ';'), bases: { '?': 'f', ';': '@' }, exit: { to: 'world', door: '8' } },
  // ===== the north: Zagros Mountains, Persepolis and Pasargadae, Kashan, the Dasht-e Kavir, Tehran =====
  north: {
    rows: [
      '▲▲△△△██████████△△▲▲▲',
      '▲△△▲▲██████████▲▲△△▲',
      '▲▲▲▲▲██████████▲▲▲▲▲',
      '▲▲::S██████████.::▲▲',
      'T:::..L.S==....L.::T',
      'T..██....==........T',
      'T..██....==..QQQQQ.T',
      'T..██....==..#h#h#.T',
      'T..██..S.==..##6##ST',
      'T..██....==........T',
      'T..██....==.:::::..T',
      'T...Ω....==.:::::..T',
      'T........==.:::::..T',
      'T:::::...==..█████.T',
      'T:::::...==..█████.T',
      'T:::::...==..█████.T',
      'T.....S..==...S....T',
      'T,AAA,,,,==,,,,AAA,T',
      'T,KKK,,β,==,,,,KKK,T',
      'T,,,,,S,,==,,,,,,,,T',
      'T,^^^^^,,==,,:::::,T',
      'T,#h#h#,█==█,:::::,T',
      'TS##7##,█==█,:::::,T',
      'T,,,,,,,█==█,,,,,,,T',
      'T,,,,,,,█==█,S,,,,,T',
      'T::::,,,,==,,,,::::T',
      'T::::,,,S==,,,,::::T',
      'TT,,,,,,,==,,,,,,,TT',
      'TFFFFFFFFψFFFFFFFFFT',
      '▓≈,,¤¤¤,,==,,¤¤¤,≈≈▓',
      '▓,,░░░░,,==,,░░░░,,▓',
      '▓¤¤░░░░,,==,,░░░░¤¤▓',
      '▓¤¤,,,,,S==,,,,,,¤¤▓',
      '▓,,R,¤¤¤,==,¤¤¤,R,,▓',
      '▓≈≈,,¤¤¤,==,¤¤¤,,≈≈▓',
      '▓,,,,,,,,==,,,,,,,,▓',
      '▓,████,,,==,,¤¤¤¤,,▓',
      '▓,████,,,==,,¤¤¤¤,,▓',
      '▓,████,S,==,,░░░░,,▓',
      '▓,,,,,,,,==,,░░░░,,▓',
      '▓¤¤¤,,░░,==,,,,¤¤¤¤▓',
      '▓¤¤¤,,░░,==,,R,¤¤¤¤▓',
      '▓≈≈,,,,,,==,,,,,,≈≈▓',
      '▓,,¤¤¤,,,==,,,¤¤¤,,▓',
      '▓,,¤¤¤,,,==,,,¤¤¤,,▓',
      '▓▓,,,,,,,==,,,,,,,▓▓',
      'TFFFFFFFF==FFFFFFFFT',
      'T,,,,,,,,==,,,,,,,,T',
      'T,,IOOI,,==,,QQQQQ,T',
      'T,SIVVI,,==,,#h#h#,T',
      'T,,IVVI,,==,,##4##ST',
      'T,,,,,,,,==,,,,,,,,T',
      'T❀❀❀❀❀,,S==,,,δ,,,,T',
      'T❀❀❀❀❀,,,==,,,,,,,,T',
      'T,,,,,,,,==,,,,,,,,T',
      'T,^^^^^,,==,TTTTTTTT',
      'T,#h#h#,,==,T.███.TT',
      'TS##5##,,==,T.███.TT',
      'T,,,,,,,,==,T*~~~*TT',
      'T,,,,,,,,==ST.~~~.TT',
      'T,,,,,,,,====.~~~.TT',
      'T,,,,,,,,==,T.....TT',
      'T,,,,,,,,==,TTTTTTTT',
      'T,,,,,,S,==,,,,,,,,T',
      'TT,,,,,,,==,,,,,,,TT',
      'TFFFFFFFF==FFFFFFFFT',
      '▲▲..::::.==.::::..▲▲',
      '▲...::::.==.::::...▲',
      '▲▲R.....S==.....R▲▲▲',
      '▲▲▲.::::.==.::::.▲▲▲',
      '▲▲..::::.==.::::..▲▲',
      '▲........==........▲',
      '▲.████...==..::::..▲',
      '▲.████...==..::::..▲',
      '▲.████.S.==..::::.▲▲',
      '▲.‖.‖.‖..==.......▲▲',
      '▲.‖.‖.‖..==.R..::.▲▲',
      '▲........==.......▲▲',
      '▲▲::::...==........▲',
      '▲▲::::...==..███..▲▲',
      '▲▲::::...==..███..▲▲',
      '▲▲.......==..███S.▲▲',
      '▲........==........▲',
      '▲.::::...==...::::.▲',
      '▲.::::...==...::::.▲',
      '▲▲.......==.......▲▲',
      '▲▲▲.::::.==.::::.▲▲▲',
      '▲▲..::::.==.::::..▲▲',
      '▲▲.......==.......▲▲',
      '▲▲▲▲▲▲▲▲▲0▲▲▲▲▲▲▲▲▲▲',
    ],
    bases: { 'Ω': '.', 'β': ',', 'ψ': '=', 'δ': ',' },
    sprites: [
      { id: 'damavand', x: 5, y: 0, w: 10, h: 4 }, { id: 'milad', x: 3, y: 5, w: 2, h: 6 }, { id: 'golestan', x: 13, y: 13, w: 5, h: 3 },
      { id: 'azadi', x: 8, y: 21, w: 4, h: 4 }, { id: 'caravanserai', x: 2, y: 36, w: 4, h: 3 }, { id: 'pavilion', x: 14, y: 56, w: 3, h: 2 },
      { id: 'persepolis', x: 2, y: 72, w: 4, h: 3 }, { id: 'cyrus', x: 13, y: 79, w: 3, h: 3 },
    ],
    signs: {
      '4,3': [`MOUNT DAMAVAND ${F('دماوند', 'damavand')}<br>Alborz mountains, north-east of Tehran.`, 'At about 5,610 m it is the highest mountain in Iran and in all of the Middle East: a sleeping volcano with snow on top all year.', 'In the Shahnameh the hero Fereydun chains the evil king Zahhak inside Damavand. It appears on Iranian money and in countless poems.'],
      '8,4': [`DARBAND ${F('دربند', 'darband')}<br>North Tehran, at the foot of the Alborz.`, 'A hiking trail along a mountain stream, lined with little cafes and teahouses.', 'On weekends Tehranis climb here to escape the city, then sit by the water with chai, ash and grilled corn.'],
      '7,8': [`MILAD TOWER ${F('برج میلاد', 'borj-e milad')}<br>Tehran.`, 'At 435 m it is the tallest tower in Iran and one of the tallest towers in the world, finished in 2007.', 'From the top you can see the whole city and the Alborz mountains. But THE CENSOR has taken it over to jam every word in Iran!'],
      '18,8': [`ZURKHANEH ${F('زورخانه', 'zoorkhaneh')}<br>Tehran.`, 'Talk to the morshed inside to train on the words of TEHRAN.'],
      '6,16': [`PARK-E MELLAT ${F('پارک ملت', 'park-e mellat')}<br>Tehran.`, `On summer nights Tehran's parks fill with families having picnics on the grass, playing games and drinking tea until midnight.`, 'Wild Lenguamon hide in the park lawns. TEHRAN words live here.'],
      '14,16': [`GOLESTAN PALACE ${F('کاخ گلستان', 'kakh-e golestan')}<br>Old Tehran.`, `The royal palace of the Qajar kings, whose name means 'palace of flowers'. Its halls glitter with mirror work and painted tiles.`, 'It is the oldest monument in Tehran and a UNESCO World Heritage site.'],
      '6,19': [`GRAND BAZAAR ${F('بازار بزرگ تهران', 'bazar-e bozorg-e tehran')}<br>Tehran.`, 'More than 10 km of covered lanes selling carpets, spices, gold, fabric and almost anything else.', 'For centuries the bazaar has been the beating heart of trade and politics in Tehran.'],
      '1,22': [`TEAHOUSE ${F('چایخانه', 'chaykhaneh')}<br>Tehran.`, 'Old Tehran teahouses (ghahvekhaneh) once had storytellers who acted out the Shahnameh in front of a painted scroll.', 'Talk to the owner for a glass of chai. It will refresh your Lenguamon.'],
      '13,24': [`AZADI TOWER ${F('برج آزادی', 'borj-e azadi')}<br>Tehran.`, `Built in 1971 to mark 2,500 years of the Persian Empire. Its name means 'Freedom Tower'.`, 'It mixes Persian arches and modern shapes, and it is the symbol of Tehran.'],
      '8,26': [`TEHRAN ${F('تهران', 'tehran')}<br>Capital of Iran, at the foot of the Alborz mountains.`, 'Capital since 1786 and home to about 9 million people, with more than 15 million in the wider city.', 'It is the biggest city in Iran: busy, noisy, full of traffic, parks, food and art.'],
      '8,32': [`${ROUTE_NAMES[5]} ${F('دشت کویر', 'dasht-e kavir')}<br>Central Iran.`, 'The Great Salt Desert: crusts of white salt, dunes and almost no rain.', 'Wild CHAT and HOME words hide in the camelthorn bushes.'],
      '7,38': [`MARANJAB CARAVANSERAI ${F('کاروانسرای مرنجاب', 'karvansara-ye maranjab')}<br>Edge of the salt desert, near Kashan.`, 'Built around 1603 under Shah Abbas I. Caravanserais were walled inns about one day apart on the Silk Road, where camel caravans rested safely for the night.', 'Persian caravanserais are a UNESCO World Heritage site.'],
      '2,49': [`AGHA BOZORG MOSQUE ${F('مسجد آقا بزرگ', 'masjed-e agha bozorg')}<br>Kashan.`, 'Built in the 1800s, famous for its sunken garden courtyard and brick dome.'],
      '18,50': [`ZURKHANEH ${F('زورخانه', 'zoorkhaneh')}<br>Kashan.`, 'Talk to the morshed inside to train on the words of the ZAGROS MOUNTAINS or the DASHT-E KAVIR.'],
      '8,52': [`DAMASK ROSES ${F('گل محمدی', 'gol-e mohammadi')}<br>Kashan and Qamsar.`, 'Every May, families around Kashan pick roses at dawn and distil them into rosewater (golab).', 'Rosewater flavors Persian sweets, ice cream and tea, and it is sprinkled to welcome guests.'],
      '1,57': [`TEAHOUSE ${F('چایخانه', 'chaykhaneh')}<br>Kashan.`, 'Talk to the owner for a glass of chai. It will refresh your Lenguamon.'],
      '11,59': [`FIN GARDEN ${F('باغ فین', 'bagh-e fin')}<br>Kashan.`, 'Finished in 1590, it is the oldest Persian garden still standing. Spring water runs through turquoise channels and pools.', 'It is part of the Persian Garden UNESCO World Heritage site.'],
      '7,63': [`KASHAN ${F('کاشان', 'kashan')}<br>Central Iran, at the edge of the desert.`, `Famous for rosewater, carpets and grand old merchant houses. The word 'kashi', a glazed tile, comes from Kashan!`, 'That is why your badges are called KASHI BADGES.'],
      '8,68': [`${ROUTE_NAMES[4]} ${F('زاگرس', 'zagros')}<br>Western and southern Iran.`, 'A 1,500 km mountain chain of oak forests and high pastures. Nomads like the Qashqai still move their flocks here with the seasons.', 'Wild NATURE and TRAVEL words live in the meadows.'],
      '7,74': [`PERSEPOLIS ${F('تخت جمشید', 'takht-e jamshid')}<br>Near Shiraz.`, 'The ceremonial capital of the Achaemenid Persian Empire, begun by Darius the Great around 518 BC. Stone carvings show people from all over the empire bringing gifts, perhaps for Nowruz.', 'The Gate of All Nations is guarded by giant winged bulls. Alexander the Great burned the palaces in 330 BC. It is a UNESCO World Heritage site.'],
      '16,81': [`TOMB OF CYRUS THE GREAT ${F('آرامگاه کوروش بزرگ', 'aramgah-e kourosh-e bozorg')}<br>Pasargadae.`, 'Cyrus founded the Persian Empire around 550 BC. He is remembered for tolerance: the Cyrus Cylinder is often called an early charter of human rights.', 'Many Iranians visit his simple stone tomb, especially on October 29, Cyrus Day.'],
    },
    doors: { 0: { to: 'world', tx: 2, ty: 1, dir: 'down' }, 4: { to: 'gym4', tx: 4, ty: 6 }, 5: { to: 'teahouse4', tx: 4, ty: 6 }, 6: { to: 'gym5', tx: 4, ty: 6 }, 7: { to: 'teahouse5', tx: 4, ty: 6 } },
  },
  teahouse4: { rows: ['wwwwwwwwww', 'wmbbbbmbbw', 'wffffκfffw', 'wuuuuuuffw', 'wccccccccw', 'wctccctccw', 'wccccccccw', 'wwwwEwwwww'], bases: { 'κ': 'f' }, exit: { to: 'north', door: '5' } },
  teahouse5: { rows: ['wwwwwwwwww', 'wmbbbbmbbw', 'wffffτfffw', 'wuuuuuuffw', 'wccccccccw', 'wctccctccw', 'wccccccccw', 'wwwwEwwwww'], bases: { 'τ': 'f' }, exit: { to: 'north', door: '7' } },
  gym4: { rows: GYM_ROWS('μ', 'ν'), bases: { 'μ': 'f', 'ν': '@' }, exit: { to: 'north', door: '4' } },
  gym5: { rows: GYM_ROWS('π', 'ρ'), bases: { 'π': 'f', 'ρ': '@' }, exit: { to: 'north', door: '6' } },
};
const MAPS = {};
const NPC_POS = {}; // marker -> {map,x,y}
function buildMaps() {
  for (const [id, src] of Object.entries(MAP_SRC)) {
    const grid = src.rows.map(r => r.split(''));
    const m = { ...src, id, w: grid[0].length, h: grid.length, grid, signs: [], doors: {} };
    let si = 0;
    for (let y = 0; y < m.h; y++) for (let x = 0; x < m.w; x++) {
      const ch = grid[y][x];
      if (src.bases && src.bases[ch]) { NPC_POS[ch] = { map: id, x, y }; grid[y][x] = src.bases[ch]; }
      else if (ch === 'S') { m.signs.push({ x, y, text: (src.signs || {})[`${x},${y}`] || ['(The sign is too faded to read.)'] }); }
      else if (src.doors && src.doors[ch]) { m.doors[ch] = { x, y, ...src.doors[ch] }; }
    }
    m.canvas = renderMap(m);
    MAPS[id] = m;
  }
}
// the American maps share their shape with the Persian ones
const baseMap = id => ({ us: 'world', usnorth: 'north' })[id] || id;
function regionOf(map, y) {
  map = baseMap(map);
  if (map === 'north') return y <= 28 ? 6 : y <= 45 ? 5 : y <= 65 ? 0 : 4;
  if (map !== 'world') return 0; if (y >= 63 || y <= 12) return 0; if (y >= 48) return 1; if (y >= 26) return 2; return 3; }

// ---- NPCs ----
const NPCS = [];
const isGirl = () => !!(S && S.gender === 'girl');
const G = (boy, girl) => (isGirl() ? girl : boy);
function npc(marker, def) { NPCS.push({ marker, dir: 'down', ...def }); }
function npcPos(n) { const p = NPC_POS[n.marker]; if (!p) return null; const o = n.where ? n.where() : null; return o ? { map: p.map, x: o[0], y: o[1] } : p; }
function npcAt(map, x, y) { for (const n of NPCS) { if (n.hidden && n.hidden()) continue; const p = npcPos(n); if (p && p.map === map && p.x === x && p.y === y) return n; } return null; }

// ---- player & world state ----
const PL = { x: 0, y: 0, dir: 'down', moving: false, t0: 0, fx: 0, fy: 0, step: 0, walkPh: 0 };
const DIRS = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] };
const MOVE_MS = 170;
let curMap = null, worldBusy = false, encounterCooldown = 0;
const cv = () => $('#cv');
function solidAt(m, x, y) {
  if (x < 0 || y < 0 || x >= m.w || y >= m.h) return true;
  const t = TILE[m.grid[y][x]]; if (!t || t.solid) return true;
  if (npcAt(m.id, x, y)) return true;
  return false;
}
function placePlayer(map, x, y, dir) { if (map.startsWith('teahouse') || map.startsWith('diner')) S.lastTea = map; S.map = map; S.x = x; S.y = y; S.dir = dir || S.dir; curMap = MAPS[map]; PL.x = x; PL.y = y; PL.dir = S.dir; PL.moving = false; musicForPlace(); }
function musicForPlace() { markVisited(); const r = regionOf(S.map, S.y); SND.music(baseMap(S.map) === 'world' && S.y <= 12 ? 'end' : r === 0 ? 'town' : 'route'); }

function drawWorld() {
  const c = cv().getContext('2d'); c.setTransform(SCALE, 0, 0, SCALE, 0, 0); c.imageSmoothingEnabled = true;
  R(c, 0, 0, 160, 144, '#101018');
  if (!curMap) return;
  let px = PL.x * TS, py = PL.y * TS;
  if (PL.moving) { const k = clamp((performance.now() - PL.t0) / MOVE_MS, 0, 1); const [dx, dy] = DIRS[PL.dir]; px = (PL.x - dx * (1 - k)) * TS; py = (PL.y - dy * (1 - k)) * TS; }
  const mw = curMap.w * TS, mh = curMap.h * TS;
  let cx = px - 72, cy = py - 64;
  cx = mw <= 160 ? (mw - 160) / 2 : clamp(cx, 0, mw - 160);
  cy = mh <= 144 ? (mh - 144) / 2 : clamp(cy, 0, mh - 144);
  cx = Math.round(cx * SCALE) / SCALE; cy = Math.round(cy * SCALE) / SCALE;
  c.drawImage(curMap.canvas, -cx, -cy, mw, mh);
  const ents = [];
  for (const n of NPCS) { if (n.hidden && n.hidden()) continue; const p = npcPos(n); if (p && p.map === curMap.id) ents.push({ y: p.y * TS, draw: () => drawChar(c, p.x * TS - cx, p.y * TS - cy - 2, LOOKS[(isGirl() && n.lookG) || n.look], n.dir, 0) }); }
  let step = 0; if (PL.moving) { const k = (performance.now() - PL.t0) / MOVE_MS; step = k < 0.5 ? (PL.walkPh ? 1 : 2) : 0; }
  ents.push({ y: py, draw: () => drawChar(c, px - cx, py - cy - 2, playerLook(), PL.dir, step) });
  ents.sort((a, b) => a.y - b.y).forEach(e => e.draw());
  // tall grass over feet
  const t = curMap.grid[PL.y] && curMap.grid[PL.y][PL.x];
  if (t === ':' && !PL.moving) { c.save(); c.beginPath(); c.rect(px - cx, py - cy + 10, 16, 6); c.clip(); c.drawImage(curMap.canvas, -cx, -cy, mw, mh); c.restore(); }
}
let rafOn = false;
function loop() {
  if (worldActive()) tickWorld();
  if (!$('#battle').classList.contains('show') && !$('#title').classList.contains('show')) drawWorld();
  requestAnimationFrame(loop);
}
function worldActive() { return handlers[handlers.length - 1] === worldH && !worldBusy; }
function tickWorld() {
  const now = performance.now();
  if (PL.moving) {
    if (now - PL.t0 >= MOVE_MS) { PL.moving = false; onStep(); }
    else return;
  }
  if (!worldActive()) return;
  for (const d of ['up', 'down', 'left', 'right']) {
    if (!held[d]) continue;
    PL.dir = d; S.dir = d;
    const [dx, dy] = DIRS[d], nx = PL.x + dx, ny = PL.y + dy;
    if (solidAt(curMap, nx, ny)) { if (now - (PL.lastBump || 0) > 350) { SND.fx('bump'); PL.lastBump = now; } return; }
    PL.x = nx; PL.y = ny; S.x = nx; S.y = ny; PL.moving = true; PL.t0 = now; PL.walkPh ^= 1;
    return;
  }
}
async function onStep() {
  const ch = curMap.grid[PL.y][PL.x];
  // doors
  const door = Object.values(curMap.doors || {}).find(d => d.x === PL.x && d.y === PL.y);
  if (door) {
    if (door.need && !S.flags[door.need]) { const [dx, dy] = DIRS[PL.dir]; await run(() => say(door.needMsg)); PL.x -= dx; PL.y -= dy; S.x = PL.x; S.y = PL.y; return; }
    await run(() => warp(door.to, door.tx, door.ty, door.dir || 'up')); return;
  }
  if (TILE[ch] && TILE[ch].exit && curMap.exit) { const to = curMap.exit.to, d = MAPS[to].doors[curMap.exit.door]; await run(() => warp(to, d.x, d.y + 1, 'down')); return; }
  // region change music
  musicForPlace();
  // guard / scripted tiles
  if (TILE[ch] && TILE[ch].enc && !S.flags.noEnc) {
    if (encounterCooldown > 0) { encounterCooldown--; return; }
    if (rand() < 0.13) { await run(() => wildEncounter(regionOf(curMap.id, PL.y))); encounterCooldown = 2; }
  }
}
async function warp(to, x, y, dir) {
  SND.fx('door'); await fade(true, 180);
  placePlayer(to, x, y, dir); writeSave(); drawWorld();
  await fade(false, 180);
}
// run a script while the world is paused
async function run(fn) { worldBusy = true; try { await fn(); } finally { worldBusy = false; } }

function worldH(b) {
  if (worldBusy || PL.moving) return;
  if (b === 'a') run(interact);
  else if (b === 'start') run(startMenu);
}
async function interact() {
  const [dx, dy] = DIRS[PL.dir];
  let tx = PL.x + dx, ty = PL.y + dy;
  const t = curMap.grid[ty] && TILE[curMap.grid[ty][tx]];
  if (t && t.counter) { tx += dx; ty += dy; }
  const n = npcAt(curMap.id, tx, ty);
  if (n) { const back = { up: 'down', down: 'up', left: 'right', right: 'left' }; const od = n.dir; n.dir = back[PL.dir]; await n.talk(n); if (!n.fixed) n.dir = n.keepDir ? od : n.dir; writeSave(); return; }
  const sg = (curMap.signs || []).find(s => s.x === tx && s.y === ty);
  if (sg) { await say(sg.text); return; }
}

// ---- team helpers ----
const maxHp = lvl => 12 + lvl * 2;
const monW = m => monView(m);
function makeMon(w) { return { key: w.key, lvl: w.level, xp: 0, hp: maxHp(w.level) }; }
function healTeam() { for (const m of S.team) m.hp = maxHp(m.lvl); }
const lead = () => S.team.find(m => m.hp > 0);
const teamAlive = () => S.team.some(m => m.hp > 0);
function caughtInRoute(r) { return wordsOfRoute(r).filter(w => S.caught[w.key]).length; }
function caughtCount() { return Object.keys(S.caught).filter(k => WORD[k]).length; }
function hpBar(m, max) { const pct = clamp(m.hp / max, 0, 1); const col = pct > 0.5 ? '#38c060' : pct > 0.2 ? '#f0c020' : '#e03030'; return `<span class="hpbar"><i style="width:${(pct * 100).toFixed(1)}%;background:${col}"></i></span>`; }

// ---- start menu and screens ----
async function startMenu() {
  SND.fx('select');
  let idx = 0;
  while (true) {
    const items = [
      { html: 'LENGUADEX', disabled: !S.flags.starter }, { html: 'LENGUAMON', disabled: !S.team.length }, 'MAP', 'SAYINGS', DAF(), { html: esc(S.name) }, 'SAVE', 'OPTIONS', 'EXIT'];
    const r = await choose(items, { cls: 'startmenu', start: idx, startCloses: true });
    if (r < 0) return;
    if (r === 8) {
      if (!(await ask('Return to the title screen? Your game will be saved.'))) continue;
      writeSave(); SND.music(null); await fade(true, 400);
      location.reload(); return;
    }
    idx = r;
    if (r === 0) await dexScreen();
    else if (r === 1) await teamScreen(false);
    else if (r === 2) { if ((await mapScreen()) === 'moved') return; }
    else if (r === 3) await sayingsScreen();
    else if (r === 4 && LANG === 'en') await say([`NOTEBOOK ${PF('دفتر')}<br>You have ${B('x' + S.daftar)}.`, 'In battle, write a weakened wild Lenguamon into your NOTEBOOK by typing its English word or phrase.']);
    else if (r === 4) await say([`DAFTAR ${F('دفتر', 'daftar')} = notebook.<br>You have ${B('x' + S.daftar)}.`, 'In battle, write a weakened wild Lenguamon into your DAFTAR by typing its Persian word. Weaker words are easier to catch!']);
    else if (r === 5) await say([`${B(S.name)}${S.cyrus ? ' 👑' : ''}<br>${LANG === 'en' ? 'STAR' : 'KASHI'} BADGES: ${['b1', 'b2', 'b3', 'b4', 'b5'].map(b => S.flags[b] ? '◆' : '◇').join(' ')}<br>LENGUADEX: ${caughtCount()} / ${WORDS.length}`,
      [1, 2, 3].map(r => `${ROUTE_NAMES[r]}: ${caughtInRoute(r)}/${wordsOfRoute(r).length}`).join('<br>'),
      [4, 5, 6].map(r => `${ROUTE_NAMES[r]}: ${caughtInRoute(r)}/${wordsOfRoute(r).length}`).join('<br>'),
      `${LANG === 'en' ? 'AMERICAN' : 'OLD PERSIAN'} SAYINGS: ${sayCount()} / ${sayList().length}`]);
    else if (r === 6) { writeSave(); SND.fx('good'); await say([`${esc(S.name)} saved the game!`, 'Your progress is saved on this device.']); }
    else if (r === 7) await optionsScreen();
  }
}
async function optionsScreen() {
  let idx = 0;
  while (true) {
    const items = [
      `TRANSLITERATION: ${OPTS.translit ? 'ON' : 'OFF'}`, `MUSIC: ${OPTS.music ? 'ON' : 'OFF'}`, `SOUND FX: ${OPTS.sfx ? 'ON' : 'OFF'}`, `TEXT SPEED: ${['FAST', 'MID', 'SLOW'][OPTS.speed]}`, 'BACK'];
    const cy = !!(S && S.cyrus); if (cy) items.splice(4, 0, `WILD LENGUAMON: ${S.flags.noEnc ? 'OFF' : 'ON'}`);
    const r0 = await choose(items, { cls: 'opts', start: idx });
    if (r0 < 0 || r0 === items.length - 1) return; idx = r0;
    if (cy && r0 === 4) { S.flags.noEnc = !S.flags.noEnc; writeSave(); continue; }
    const r = r0;
    if (r === 0) OPTS.translit = !OPTS.translit;
    if (r === 1) { OPTS.music = !OPTS.music; SND.refresh(); }
    if (r === 2) OPTS.sfx = !OPTS.sfx;
    if (r === 3) OPTS.speed = (OPTS.speed + 1) % 3;
    saveOpts();
  }
}
function dexEntryHtml(w) {
  const caught = S.caught[w.key], seen = S.seen[w.key];
  if (!seen && !caught) return `<div class="dx-d"><div class="dx-q">?</div><div><b>-----</b><br>Not seen yet.<br><small>${ROUTE_NAMES[w.route]}</small></div></div>`;
  const st = S.stats[w.key] || [0, 0];
  return `<div class="dx-d">${monImg(w)}<div><b>${esc(w.word)}</b> <small>Lv${w.level} ${TYPES[w.type].label}</small><br>${W(w)} <small>"${LANG === 'en' ? PF(w.en) : esc(w.en)}"</small><br><small>${esc(w.name)} ${F(speciesOf(w).fa, '')} · ${esc(speciesOf(w).name.toLowerCase())}${caught ? ` · ✓ ${st[0]} ✗ ${st[1]}` : ' · seen'}</small></div></div>`;
}
async function dexScreen() {
  const el = document.createElement('div'); el.className = 'layer dex show'; $('#screen').appendChild(el);
  let idx = 0; const per = 8;
  const draw = () => {
    const w = WORDS[idx]; const start = clamp(idx - 2, 0, WORDS.length - per);
    let list = '';
    for (let i = start; i < start + per; i++) {
      const x = WORDS[i]; const c = S.caught[x.key], s = S.seen[x.key];
      list += `<div class="dx-r${i === idx ? ' sel' : ''}"><span class="cur">▶</span>${String(i + 1).padStart(3, '0')} ${c ? '◆' : s ? '◇' : ' '} ${c || s ? esc(x.word) : '-----'}</div>`;
    }
    el.innerHTML = `<div class="box dx"><div class="dx-h">LENGUADEX <span>◆${caughtCount()} ◇${Object.keys(S.seen).length} / ${WORDS.length}</span></div>${dexEntryHtml(w)}<div class="dx-l">${list}</div><div class="dx-f">↑↓ move · ←→ page · A: add to team · B: back</div></div>`;
  };
  draw();
  await new Promise(res => {
    const h = async b => {
      if (b === 'up') idx = (idx - 1 + WORDS.length) % WORDS.length;
      else if (b === 'down') idx = (idx + 1) % WORDS.length;
      else if (b === 'left') idx = clamp(idx - per, 0, WORDS.length - 1);
      else if (b === 'right') idx = clamp(idx + per, 0, WORDS.length - 1);
      else if (b === 'b' || b === 'start') { SND.fx('cancel'); popH(h); el.remove(); res(); return; }
      else if (b === 'a') {
        const w = WORDS[idx];
        if (!S.caught[w.key]) { SND.fx('bump'); return; }
        if (S.team.some(m => m.key === w.key)) { await say(`${esc(w.name)} is already on your team.`); return; }
        if (S.team.length < 6) { S.team.push(makeMon(w)); SND.fx('good'); await say(`${esc(w.name)} joined your team!`); }
        else {
          await say(`Your team is full. Swap out which Lenguamon for ${esc(w.name)}?`, { keep: true });
          const r = await choose(S.team.map(m => `${monW(m).name} Lv${m.lvl}`), { cls: 'teamsel' }); hideText();
          if (r >= 0) { const old = S.team[r]; S.team[r] = makeMon(w); await say(`${esc(monW(old).name)} went back to the Lenguadex. ${esc(w.name)} joined the team!`); }
        }
        draw(); writeSave(); return;
      } else return;
      SND.fx('blip'); draw();
    };
    pushH(h);
  });
}
async function teamScreen(inBattle) {
  while (true) {
    const items = S.team.map((m, i) => ({ html: `<span class="tm">${monImg(monW(m), 'tiny')}<span>${esc(monW(m).name)} <small>${esc(monW(m).word)}</small><br><small>Lv${m.lvl} ${hpBar(m, maxHp(m.lvl))} ${m.hp}/${maxHp(m.lvl)}</small></span></span>` }));
    const r = await choose(items, { cls: 'team' });
    if (r < 0) return null;
    const m = S.team[r], w = monW(m);
    const sub = await choose(inBattle ? ['SEND OUT', 'INFO', 'CANCEL'] : ['MAKE LEAD', 'INFO', 'CANCEL'], { cls: 'sub' });
    if (sub === 0) {
      if (m.hp <= 0) { await say(`${esc(w.name)} has no energy left!`); continue; }
      if (inBattle) return r;
      S.team.splice(r, 1); S.team.unshift(m); SND.fx('good'); await say(`${esc(w.name)} is now your lead Lenguamon.`); writeSave();
    } else if (sub === 1) {
      await say([`${esc(w.name)} ${W(w)}<br>"${LANG === 'en' ? PF(w.en) : esc(w.en)}" · ${TYPES[w.type].label}`, `Lv${m.lvl} · XP ${m.xp}/${m.lvl * 8}<br>HP ${m.hp}/${maxHp(m.lvl)}${EVO[m.key] && (m.stage || 0) < 2 ? `<br>Grows into a phrase at Lv${WORD[EVO[m.key]].level}` : (m.stage || 0) >= 2 ? '<br>Fully evolved ★★' : ''}`]);
    }
  }
}
