#!/usr/bin/env python3
"""Build dist/index.html: one self-contained file (no external requests)."""
import pathlib, re
root = pathlib.Path(__file__).parent
src = root / 'src'
order = ['words.js', 'core.js', 'art.js', 'art2.js', 'monsters.js', 'portraits.js', 'ui.js', 'world.js', 'battle.js', 'story.js', 'main.js']
js = "'use strict';\n" + '\n'.join((src / f).read_text().replace("'use strict';\n", '') for f in order)
css = (src / 'style.css').read_text()
html = (src / 'shell.html').read_text().replace('/*CSS*/', css).replace('/*JS*/', js)
out = root / 'dist'; out.mkdir(exist_ok=True)
(out / 'index.html').write_text(html)
(root / 'index.html').write_text(html)  # served by GitHub Pages
print('built', out / 'index.html', len(html.encode()) // 1024, 'KB')
