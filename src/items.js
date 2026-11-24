// ===== LENGUAMON money, food and drink =====
// Money is kept in "units": 1 unit = 10,000 toman in the Persian game, or $1 in the English game.
// Win battles to earn it; buy food and drink from teahouse and café owners; eat mid-battle to heal.
const FOOD_FA = [
  { id: 'chai', fa: 'چای', tr: 'chai', en: 'tea', heal: 20, price: 2 },
  { id: 'doogh', fa: 'دوغ', tr: 'doogh', en: 'yogurt drink', heal: 30, price: 3 },
  { id: 'barbari', fa: 'نان بربری', tr: 'nan-e barbari', en: 'barbari bread', heal: 40, price: 5 },
  { id: 'faloodeh', fa: 'فالوده', tr: 'faloodeh', en: 'rosewater sorbet', heal: 50, price: 6 },
  { id: 'ash', fa: 'آش رشته', tr: 'ash-e reshteh', en: 'noodle and herb soup', heal: 60, price: 8 },
  { id: 'kabab', fa: 'کباب کوبیده', tr: 'kabab koobideh', en: 'ground-meat kebab', heal: 100, price: 12 },
  { id: 'ghormeh', fa: 'قورمه‌سبزی', tr: 'ghormeh sabzi', en: 'herb stew', heal: 999, price: 25 },
  { id: 'sohan', fa: 'سوهان', tr: 'sohan', en: 'saffron toffee', revive: true, price: 15 },
];
const FOOD_EN = [
  { id: 'coffee', en: 'coffee', fa: 'قهوه', heal: 20, price: 2 },
  { id: 'lemonade', en: 'lemonade', fa: 'لیموناد', heal: 30, price: 3 },
  { id: 'hotdog', en: 'hot dog', fa: 'هات‌داگ', heal: 40, price: 5 },
  { id: 'applepie', en: 'apple pie', fa: 'پای سیب', heal: 50, price: 6 },
  { id: 'pancakes', en: 'pancakes', fa: 'پنکیک', heal: 60, price: 8 },
  { id: 'cheeseburger', en: 'cheeseburger', fa: 'چیزبرگر', heal: 100, price: 12 },
  { id: 'ribs', en: 'BBQ ribs', fa: 'دنده‌ی کبابی', heal: 999, price: 25 },
  { id: 'cookie', en: 'chocolate chip cookie', fa: 'کوکی شکلاتی', revive: true, price: 15 },
];
const FOODS = () => (LANG === 'en' ? FOOD_EN : FOOD_FA);
const money = () => (S.money === undefined ? (S.money = 20) : S.money);
const fmtMoney = u => LANG === 'en' ? `$${u}` : `${(u * 10000).toLocaleString('en-US')} toman`;
const foodName = f => LANG === 'en' ? E(f.en, f.fa) : F(f.fa, f.tr);
const foodPlain = f => (LANG === 'en' ? f.en : f.tr).toUpperCase();
const bag = () => (S.bag || (S.bag = {}));
const bagItems = () => FOODS().filter(f => bag()[f.id] > 0);
function foodEffect(f) { return f.revive ? 'wakes a fainted Lenguamon' : f.heal >= 999 ? 'heals fully' : `heals ${f.heal} HP`; }

async function earn(units, why) {
  if (!units) return;
  S.money = money() + units; SND.fx('good');
  await say(`${why || 'You earned'} ${B(fmtMoney(units))}! (You have ${fmtMoney(S.money)}.)`);
}

// ---- the shop: teahouse and café owners sell food and drink ----
async function shopMenu(host) {
  if (!S.flags.starter) return;
  if (!(await ask(LANG === 'en' ? `${host}: Want something to eat or drink for the road?` : `${host}: Something to eat or drink for the road? ${F('چیزی میل دارید؟', 'chizi meyl darid?')}`))) return;
  let idx = 0;
  while (true) {
    const list = FOODS();
    await say(`${host}: What would you like? You have ${B(fmtMoney(money()))}.`, { keep: true });
    const r = await choose(list.map(f => ({ html: `<span class="shopi">${foodName(f)}<small>${fmtMoney(f.price)} · ${foodEffect(f)}${bag()[f.id] ? ` · have ${bag()[f.id]}` : ''}</small></span>` })), { cls: 'shop', start: idx });
    hideText();
    if (r < 0) break;
    idx = r; const f = list[r];
    if (money() < f.price) { SND.fx('bad'); await say(`${host}: Sorry, that costs ${fmtMoney(f.price)}. Win a few more battles!`); continue; }
    S.money -= f.price; bag()[f.id] = (bag()[f.id] || 0) + 1; SND.fx('good');
    await say(LANG === 'en' ? `You bought ${foodName(f)}! Say ${E(`can I get a ${f.en}, please?`, 'میشه یه دونه بدید، لطفاً؟')} next time!`
      : `You bought ${foodName(f)} (${esc(f.en)})! To order, say ${F(`یه ${f.fa} لطفا`, `ye ${f.tr} lotfan`)}.`);
  }
  writeSave();
  await say(T(host, LANG === 'en' ? 'Thanks! Come back anytime.' : `${F('نوش جان', 'noosh-e jan')}! Come back anytime.`));
}

// ---- using food: from the bag in the START menu, or mid-battle ----
async function useFoodMenu(inBattle) {
  const items = bagItems();
  if (!items.length) { await say(`Your bag is empty. Buy food and drink at a ${LANG === 'en' ? 'café' : 'teahouse'}! You have ${fmtMoney(money())}.`); return false; }
  await say(`Your bag (${fmtMoney(money())}). What will you use?`, { keep: true });
  const r = await choose(items.map(f => ({ html: `<span class="shopi">${foodName(f)} x${bag()[f.id]}<small>${foodEffect(f)}</small></span>` })), { cls: 'shop' });
  hideText(); if (r < 0) return false;
  const f = items[r];
  await say(`Give ${foodPlain(f)} to which Lenguamon?`, { keep: true });
  const t = await choose(S.team.map(m => ({ html: `${esc(monW(m).name)} <small>${m.hp}/${maxHp(m.lvl)}</small>`, disabled: f.revive ? m.hp > 0 : (m.hp <= 0 || m.hp >= maxHp(m.lvl)) })), { cls: 'teamsel' });
  hideText(); if (t < 0) return false;
  const m = S.team[t], before = m.hp;
  m.hp = f.revive ? Math.ceil(maxHp(m.lvl) / 2) : Math.min(maxHp(m.lvl), m.hp + f.heal);
  bag()[f.id]--; SND.fx('heal');
  if (inBattle) bDraw();
  await say(f.revive ? `${esc(monW(m).name)} ate the ${foodPlain(f)} and woke up! (${m.hp} HP)` : `${esc(monW(m).name)} enjoyed the ${foodPlain(f)}! +${m.hp - before} HP`);
  writeSave(); return true;
}

// ---- bedtime: Maman tucks you in ----
async function sleepScene() {
  const p = $('#portrait'), girl = !!(S && S.gender === 'girl');
  const cap = LANG === 'en' ? E('Good night. Sleep well!', 'شب بخیر. خوب بخوابی!') : F('شب بخیر، خوب بخوابی', 'shab bekheir, khub bekhabi');
  SND.music(null); await fade(true, 400);
  p.innerHTML = `<div class="tea"><img src="${TEA_IMG[girl ? 'sleepGirl' : 'sleepBoy']}" alt="Maman says good night"><div class="tea-cap">${cap}</div></div>`;
  p.classList.add('show'); await fade(false, 400);
  SND.fx('heal'); healTeam(); S.rest = (S.rest || 0) + 1;
  await sleep(3500);
  await fade(true, 400); p.classList.remove('show'); p.innerHTML = ''; await fade(false, 500);
  musicForPlace();
}
