# Lenguamon

A Game Boy Color style language learning game. Instead of catching Pokemon, you catch **Lenguamon** (Language Monsters): vocabulary words and phrases that fill your **Lenguadex**.

Version 1 teaches conversational Persian (Farsi) to a native English speaker who is starting from zero. The word bank comes from Kurt's Farsi class vocabulary (Weeks 1-11).

## Play

Open `index.html` in a browser, or play the hosted version on GitHub Pages.

## How it works

- Name your trainer, choose your language (Persian only in v1, more coming later), and receive your free starter Lenguamon **"Hello" (salam)** from **Professor Haydeh**.
- Explore Golshan Town, Route 1, and Shiraz Town with its bazaar and tea house. Wild Lenguamon appear in the grass.
- Battles are typed-answer quizzes: you get the English meaning and a read-only bank of 4 Farsi options, and you must type the correct Farsi transliteration. Right answer, your attack lands. Wrong answer, you miss, and the enemy's counterattack shows you the correct word.
- Enemy level scales with how long the word or phrase is.
- Weaken a wild Lenguamon below half HP and a CATCH quiz appears: answer one bonus question correctly to catch it.
- Beat Ostad Dariush's 7-line conversation trial in the tea house to win.
- Every word shows its Persian script with the transliteration underneath. A Settings toggle turns the transliteration off when you are ready.
- Every Lenguamon has its own procedurally generated pixel monster, seeded by the word itself.
- Sound is original chiptune-style beeps synthesized with WebAudio. No audio files, no external assets, no frameworks. The whole game is one 92 KB HTML file.

## Controls

- PC: arrow keys or WASD to move, Enter or Z to talk/confirm, Esc or X for menu/back.
- Phone: on-screen D-pad and A/B buttons.

## Saving

Your progress saves automatically in the browser (localStorage). The save expires on a rolling 48-hour window: come back more than 48 hours after your last session and you start over. No account, no cross-device sync yet (on the roadmap).

## Roadmap

- More languages
- More words (top 1000 Persian words) and more towns/routes
- Cross-device save sync
- Hand-drawn monster art
