# Lenguamon

A Game Boy Color style language-learning game you play in the browser. Catch **Lenguamon** (language monsters): cartoon animals that each carry a word or phrase. To beat one, you type the answer.

There are two games in one:

| | Learn Persian | Learn English |
|---|---|---|
| For | English speakers | Persian speakers |
| Level | Beginner to conversational | Intermediate to advanced |
| Setting | Iran: Yazd to Tehran and Mashhad | America: Santa Fe to New York City and Washington, DC |
| Words and phrases | 564 | 454 |
| Animals | 106 animals of Iran | 75 animals of the United States |
| Healing stop | Teahouse (chai) | Café (coffee) |
| Money | Toman | Dollars |
| Secret name | Cyrus the Great | George Washington |

The whole game is one self-contained file, `index.html` (about 1.2 MB including the painted scenes), with no network requests. Progress is saved in the browser on each device and does not expire.

**Play:** https://lenguamon.polyglot-games.workers.dev (behind a Cloudflare Access login; see Hosting below).

## How to play

| Action | Keyboard | Phone |
|---|---|---|
| Move | Arrows or WASD | D-pad |
| A (talk, confirm) | Z, Space, Enter | A |
| B (back) | X, Esc | B |
| Menu | M or Shift | START |

1. Choose the language you speak and the one you want to learn, then boy or girl, then your name. Professor Haydeh explains everything in both English and Persian.
2. Visit Professor Haydeh's school for your first Lenguamon, a house mouse. It carries *salam* in the Persian game or "how's it going?" in the English game.
3. Walk through tall grass, desert scrub or wheat to meet wild Lenguamon. Every battle opens with a quiz about the wild word. You see 4 choices and **type** the answer.
   - Right answer: your attack lands. Fast answers are critical hits.
   - Wrong answer: you miss, and the wild Lenguamon attacks you with the answer you needed.
   - Wrong choices are picked to be close in length to the right one, so you have to read them all.
4. Weaken a word, then use a **DAFTAR** or **NOTEBOOK** to catch it by typing it again.
5. A Lenguamon's level is the length of its word or phrase, so long phrases are tougher. Harder words come with rarer animals.

### Features

- **Evolution.** After a level-up, a Lenguamon can grow its word into a phrase that uses it, if you can type the phrase. For example, *salam* becomes *salam, khubi?*, then *salam, khosh oomadi*. Each stage adds a hat to the animal: the first stage is a baseball cap, the second a graduate's cap, and the final stage a crown.
- **Bosses.** Each region ends in a real conversation in the target language. Win 20 battles in the area (wild Lenguamon, trainers or your rival) to take it on. START > LENGUADEX shows your wins in each area.
  - Persian game: a police checkpoint, an IRGC commander and THE ZEALOT at the tomb of Hafez. Then a State TV anchor at the gate of Tehran, and a final battle with THE ZEALOT on top of Milad Tower. The grand finale is against the Ghost of Cyrus the Great at the tomb of Ferdowsi, near Mashhad. (All bosses are invented caricatures.)
  - English game: the California Highway Patrol (CHiPs), a startup CEO, THE CYBORG in Seattle, a New York cabbie, and THE CYBORG again in New York City. The grand finale is against the Ghost of George Washington at the Capitol in Washington, DC.
- **Trainers.** 30 trainers in each game wander around the roads between the cities, 6 on each road. Walk into their line of sight and a "!" appears. They walk up and challenge you with a themed team from that route (a historian's heritage words, a trucker's small talk). Wins pay money and a notebook, and each trainer teaches you a phrase.
- **The rival.** A classmate (Dariush or Dorsa, Tyler or Madison) meets you in six cities. Their team uses the words you miss most.
- **Rematches.** Rest at a teahouse, café or at home, and beaten trainers come and ask whether you want to battle again. Say yes and they battle you; say no and they won't ask again until you next rest.
- **Money and food.** Win battles to earn toman or dollars. Teahouse and café owners sell food and drink, which you can eat from the **BAG** mid-battle or from the START menu.
  - Persian game: chai, doogh, barbari bread, faloodeh, ash reshteh, kabab koobideh, ghormeh sabzi (full heal), sohan (revive).
  - English game: coffee, lemonade, hot dogs, apple pie, pancakes, cheeseburgers, BBQ ribs (full heal), chocolate chip cookies (revive).
- **Gyms.** A zurkhaneh (traditional Iranian gym) or a boxing gym in each city gives an 8-round typed drill on that city's words, with experience for your whole team. You have to beat 3 gym trainers before the head trainer will train you.
- **Old sayings.** An elder in every city teaches proverbs, 50 in each game, recorded in the SAYINGS notebook. You'll always find elders at the teahouses and cafés. Persian proverbs come with a word-for-word translation and their meaning. American sayings come with a Persian equivalent. Once you know an elder's sayings, they quiz you.
- **Sightseeing.** Every landmark has a sign saying what it is, where it is and why it matters, and you can reach every one of them on foot. The Persian game covers windcatchers, Si-o-se-pol, Hafezieh, Persepolis, the Tomb of Cyrus, Fin Garden, Milad Tower, Azadi Tower, Damavand, the tomb of Omar Khayyam and the tomb of Ferdowsi. The English game covers Route 66, the Golden Gate Bridge, the Space Needle, Old Faithful, Devils Tower, the Bean, the Empire State Building, the Statue of Liberty, the Liberty Bell, Fort McHenry, the Washington Monument and the Capitol Building.
- **Map.** START > MAP shows Iran or the United States with your route and a "you are here" marker.
- **Painted scenes.** Kurt's paintings show when a teahouse owner serves chai, a barista serves coffee, or Maman puts you to bed. There are boy and girl versions of each.
- **Girl hero.** If you play as a girl, most NPCs have women counterparts.
- **Living landscape.** The routes have scattered trees, bushes, rocks and wildflowers that sway in the wind. Grass sways, water sparkles, butterflies, birds and cloud shadows move across the land, and steam rises from samovars and espresso machines.
- **Sightseeing mode.** Name your hero **Cyrus the Great** (Persian game) or **George Washington** (English game). Every road opens, every word is in your Lenguadex, and you start with a fully evolved team. Wild battles and trainers stay quiet (turn them back on in OPTIONS), and you can fast-travel from the map.

Options (START > OPTIONS): transliteration on/off, music, sound effects and text speed. In sightseeing mode there is also a wild Lenguamon on/off option.

## Project layout

```
src/words.js      Persian word bank: translit | english | script | route | type
src/words_en.js   English word bank: english | Persian meaning | route | type
src/core.js       utilities, answer matching, word types, options, save, chiptune audio, input
src/art.js        base tiles and characters
src/art2.js       smooth tiles, characters, Iranian landmarks, terrain (mountains, dunes, salt flats)
src/art_us.js     American tiles and landmarks
src/scenery.js    scattered trees, bushes, rocks and wildflowers; ambient animation
src/monsters.js   SVG animals (Iranian and American sets), species assignment, evolution
src/portraits.js  boss and professor portraits, teahouse and café scenes
src/ui.js         text box, menus, bilingual and Persian markup
src/world.js      Iranian maps (including the Khorasan road to Mashhad), movement, START menu, Lenguadex, team
src/world_us.js   American maps (including the road to Washington, DC)
src/battle.js     quiz battles, catching, conversation bosses, evolution scene
src/story.js      Persian-game story, intro, title, ending
src/story_us.js   English-game story, NPCs and bosses
src/places.js     teahouses, cafés and gyms
src/sayings.js    proverbs and elders
src/mapview.js    the map screen, Cyrus the Great and George Washington modes
src/trainers.js   trainers (route and gym), wandering, line of sight, the rival, rematches
src/items.js      money, food and drink, the shop, the bag, bedtime
src/main.js       boot
src/style.css     look and feel
src/shell.html    page shell
src/assets/       painted scenes (teahouse, café, bedtime; boy and girl versions)
build.py          joins everything into dist/index.html and index.html
wrangler.jsonc    Cloudflare Workers config (publishes dist/ only)
data/farsi-word-bank.csv   original course word bank (not published)
```

Build: `python3 build.py`. It writes `dist/index.html` and a copy at `index.html`.

## Hosting

Pushing to `main` deploys automatically to a Cloudflare Worker at https://lenguamon.polyglot-games.workers.dev. Only `dist/` is published; the source, README and word bank CSV are not served.

The site is protected by Cloudflare Access with one-time email codes. To let someone play:

1. Open the Cloudflare Zero Trust dashboard (one.dash.cloudflare.com).
2. Go to Access > Applications > Lenguamon > Policies, and edit the "Lenguamon family" policy.
3. Add their email under Include > Emails, then save.

They open the link, enter their email and type the code they receive.

## Word bank sources

- Persian game:
  - Kurt's `farsi-word-bank.csv` (ICF course weeks 1-11, Quizlet, Instagram lists)
  - high-frequency words checked against the Persian top-1000 list from the `wordfreq` library
  - MSU Open Books "Common Words and Phrases" and Omniglot Persian phrases
  - conversational phrases for the Zagros, Kavir, Tehran and Khorasan routes (nature, travel, opinions, daily life, the city, taarof, heritage and formal phrases)
- English game: intermediate-to-advanced conversational English. It covers small talk, phrasal verbs, work and money, opinions and feelings, road trips and the outdoors, errands and health, idioms, slang and big-city phrases, and civics and formal English for the road to Washington, DC. Each entry has a Persian meaning, using a matching Persian proverb where one exists.

The Persian script and Persian meanings written for this game should be reviewed by a native speaker.

## Roadmap ideas

- Cross-device save sync
- Audio pronunciation clips
- More languages
