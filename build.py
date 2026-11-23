#!/usr/bin/env python3
"""Build dist/index.html: one self-contained file (no external requests)."""
import pathlib, re
root = pathlib.Path(__file__).parent
src = root / 'src'
order = ['words.js', 'core.js', 'art.js', 'art2.js', 'monsters.js', 'portraits.js', 'ui.js', 'world.js', 'battle.js', 'story.js', 'places.js', 'sayings.js', 'mapview.js', 'main.js']
import base64
def b64(name): return 'data:image/jpeg;base64,' + base64.b64encode((src / 'assets' / name).read_bytes()).decode()
assets = "const TEA_IMG = { boy: '%s', girl: '%s' };\n" % (b64('tea-boy.jpg'), b64('tea-girl.jpg'))
js = "'use strict';\n" + assets + '\n'.join((src / f).read_text().replace("'use strict';\n", '') for f in order)
css = (src / 'style.css').read_text()
html = (src / 'shell.html').read_text().replace('/*CSS*/', css).replace('/*JS*/', js)
out = root / 'dist'; out.mkdir(exist_ok=True)
(out / 'index.html').write_text(html)
(root / 'index.html').write_text(html)  # served by GitHub Pages
print('built', out / 'index.html', len(html.encode()) // 1024, 'KB')
