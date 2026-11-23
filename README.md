# Lenguamon: Persian Edition (v1)

A tiny Game Boy Color style language game set in Iran. Catch **Lenguamon** (language monsters): 106 cartoon animals of Iran, from house mice and chickens to the Asiatic cheetah. Each wears a collar with its Persian name spelled phonetically, and each carries a secret word you have to know to beat it. Easy words come with common farm and house animals; harder words come with rarer animals.

- Native language: English. Target language: Persian (Farsi). More languages later.
- Runs in any browser. One self-contained file: `index.html` (about 120 KB, no network requests). Play it on GitHub Pages or open the file directly.
- Saves in your browser. A save is erased if you do not play for 48 hours.

## How to play

| Action | Keyboard | Phone |
|---|---|---|
| Move | Arrows or WASD | D-pad |
| A (talk, confirm) | Z, Space, Enter | A |
| B (back) | X, Esc | B |
| Menu | M or Shift | START |

1. Pick your name. Professor Haydeh gives you your first Lenguamon: **HELLO** (salam).
2. Walk into the tall grass to meet wild Lenguamon.
3. Every battle opens with a quiz about the wild Lenguamon's secret word, before you're told anything. After that, **FIGHT** = another quiz. You see 4 choices and type the answer. Right answer: your attack lands (fast answers are critical hits). Wrong answer: you miss and the wild word attacks you using the answer you needed.
4. Use a **DAFTAR** (notebook) to catch a weakened word by typing its Persian.
5. Enemy level = length of the Persian word or phrase, so long phrases are tougher.
6. The journey runs Yazd (windcatchers, Amir Chakhmaq) → Isfahan (bazaar, Shah Mosque, Si-o-se-pol) → Shiraz (gardens, tomb of Hafez). Each stage ends in a conversation battle in Persian. Catch 12 words in that area to take it on.
   - Basij checkpoint outside Yazd (invented caricature): greetings and introductions, with English hints
   - IRGC commander before Shiraz (invented caricature): age, family, time, days, prices
   - THE CENSOR (invented cyborg villain) who seized the tomb of Hafez: food, feelings, weather, daily life, no English hints
7. Beat the Censor, then talk to Professor Haydeh for the ending.

Options (START > OPTIONS): transliteration on/off, music, sound effects, text speed.

## Project layout

```
src/words.js    word bank (400 entries): translit | english | script | route | type
src/core.js     utils, answer matching, options, 48h save, chiptune audio, input
src/art.js      procedural pixel tiles and overworld characters
src/monsters.js SVG animal caricatures (106 species, ordered common to rare)
src/portraits.js boss and professor portraits
src/ui.js       text box, menus, Persian markup
src/world.js    maps, NPC placement, movement, start menu, Lenguadex, team
src/battle.js   quiz battles, catching, conversation bosses
src/story.js    NPC dialogue, intro, title, ending
src/style.css   look and feel
src/shell.html  page shell
build.py        joins everything into dist/index.html
data/farsi-word-bank.csv   original course word bank
```

Build: `python3 build.py`. It writes `index.html` (for GitHub Pages) and `dist/index.html`.

## Word bank sources

- Kurt's `farsi-word-bank.csv` (ICF course weeks 1-11, Quizlet, Instagram lists)
- High-frequency conversational words checked against the Persian top-1000 list from the `wordfreq` library
- Beginner phrase lists: MSU Open Books "Common Words and Phrases" and Omniglot Persian phrases

Persian script for the course words was added for this game; transliteration follows the course spelling.

## History

The first commit on `main` is an earlier single-file prototype (Golshan Town, one conversation trial). This version replaced it.

## Roadmap ideas

- Cross-device save sync
- More languages
- Audio pronunciation clips
