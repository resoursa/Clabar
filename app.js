'use strict';

/* ================= i18n ================= */

const STRINGS = {
  uk: {
    rules: 'Правила',
    menu: 'Меню',
    undo: 'Скасувати останню роздачу',
    rematch: 'Реванш тим самим складом',
    rematchShort: 'Реванш',
    confirmRematchTitle: 'Почати реванш?',
    newGame: 'Нова партія',
    switchLang: 'English',
    lightTheme: 'Світла тема',
    darkTheme: 'Темна тема',
    install: 'Встановити на телефон',

    setupTitle: 'Нова партія',
    setupLede: 'Записник замість листочка в клітинку: рахує бейти, висяки та хто здає.',
    players: 'Гравці',
    modeTwo: 'Двоє',
    modeThree: 'Троє',
    modePairs: 'Пара на пару',
    names: 'Імена',
    namesHint: 'Позначте, хто здає першим.',
    deals: 'здає',
    team: 'Пара',
    playTo: 'Грати до',
    ruleBait3: 'Третій бейт і далі: −100',
    ruleBait3Hint: 'Штраф гравцю за кожен бейт, починаючи з третього.',
    ruleNoTricks: 'Лижі: жодної взятки',
    ruleNoTricksHint: 'Штраф, якщо гравець чи пара не взяли жодної взятки.',
    off: 'Немає',
    start: 'Почати гру',
    player: 'Гравець',

    to: 'до',
    dealsNow: 'Здає',
    hand: 'Роздача',
    recordHand: 'Записати роздачу',
    emptyBig: 'Аркуш чистий',
    emptyText: 'Після кожної роздачі натисніть «Записати роздачу». Щоб виправити запис, торкніться рядка.',
    potHangs: (n) => `На кону висить ${n}. Забере переможець наступної роздачі.`,
    wins: (name) => `${name} перемагає`,
    winsPair: (name) => `Перемагає пара ${name}`,
    finalScore: 'Остаточний рахунок',
    bait: 'бейт',
    baits: 'Бейти',

    editHand: (n) => `Роздача ${n}`,
    newHand: (n) => `Роздача ${n}`,
    whoPlayed: 'Хто грав (взяв козир)',
    trump: 'Козир',
    optional: 'необовʼязково',
    trickPoints: 'Очки за взятки',
    trickHint: 'Разом з останньою взяткою 162. Останнє поле заповниться саме.',
    sum: 'Сума',
    of: 'з',
    melds: 'Комбінації',
    meldsHint: 'Торкніться, щоб додати. Терц і полтину можна додати двічі, третій дотик очищає клітинку. Вносьте лише зараховані комбінації.',
    terz: 'Терц',
    poltina: 'Полтина',
    bella: 'Белла',
    noTricks: 'Лижі',
    noTricksSub: 'без взяток',
    save: 'Зберегти',
    cancel: 'Скасувати',
    close: 'Закрити',
    delete: 'Видалити',
    pickPlayer: 'Оберіть, хто грав.',
    enterPoints: 'Внесіть очки за взятки.',
    vPlayed: (n, pts) => `${n} зіграв: ${pts}`,
    vPlayedPair: (n, pts) => `Пара ${n} зіграла: ${pts}`,
    vBait: (n, pts, to) => `Бейт! ${pts} від ${n} забирає ${to}`,
    vHang: (n, pts) => `Висяк: ${pts} від ${n} висить на кону`,
    and: 'і',

    saved: 'Записано',
    undone: 'Останню роздачу скасовано',
    deleted: 'Роздачу видалено',
    nothingToUndo: 'Немає що скасовувати',

    confirmNewTitle: 'Почати нову партію?',
    confirmNewText: 'Поточний рахунок буде стерто.',
    confirmNewOk: 'Почати нову',
    confirmDelTitle: 'Видалити роздачу?',
    confirmDelText: 'Рахунок перерахується без неї.',

    back: 'Назад до рахунку',
  },
  en: {
    rules: 'Rules',
    menu: 'Menu',
    undo: 'Undo last hand',
    rematch: 'Rematch, same players',
    rematchShort: 'Rematch',
    confirmRematchTitle: 'Start a rematch?',
    newGame: 'New game',
    switchLang: 'Українська',
    lightTheme: 'Light theme',
    darkTheme: 'Dark theme',
    install: 'Install on phone',

    setupTitle: 'New game',
    setupLede: 'A scoresheet instead of graph paper: it tracks baits, hanging points and whose deal it is.',
    players: 'Players',
    modeTwo: 'Two',
    modeThree: 'Three',
    modePairs: 'Two pairs',
    names: 'Names',
    namesHint: 'Mark who deals first.',
    deals: 'deals',
    team: 'Pair',
    playTo: 'Play to',
    ruleBait3: 'Third bait onwards: −100',
    ruleBait3Hint: 'Penalty for each bait starting from the third one.',
    ruleNoTricks: 'Skis: no tricks taken',
    ruleNoTricksHint: 'Penalty when a player or pair takes no tricks at all.',
    off: 'None',
    start: 'Start game',
    player: 'Player',

    to: 'to',
    dealsNow: 'Dealer',
    hand: 'Hand',
    recordHand: 'Record hand',
    emptyBig: 'Clean sheet',
    emptyText: 'After each hand tap “Record hand”. To fix an entry, tap its row.',
    potHangs: (n) => `${n} points are hanging. The winner of the next hand takes them.`,
    wins: (name) => `${name} wins`,
    winsPair: (name) => `Pair ${name} wins`,
    finalScore: 'Final score',
    bait: 'bait',
    baits: 'Baits',

    editHand: (n) => `Hand ${n}`,
    newHand: (n) => `Hand ${n}`,
    whoPlayed: 'Who played (took trump)',
    trump: 'Trump',
    optional: 'optional',
    trickPoints: 'Trick points',
    trickHint: 'Including the last trick the total is 162. The last box fills itself.',
    sum: 'Total',
    of: 'of',
    melds: 'Melds',
    meldsHint: 'Tap to add. A tierce or fifty can be added twice; a third tap clears the cell. Enter only melds that counted.',
    terz: 'Tierce',
    poltina: 'Fifty',
    bella: 'Bella',
    noTricks: 'Skis',
    noTricksSub: 'no tricks',
    save: 'Save',
    cancel: 'Cancel',
    close: 'Close',
    delete: 'Delete',
    pickPlayer: 'Choose who played.',
    enterPoints: 'Enter trick points.',
    vPlayed: (n, pts) => `${n} made it: ${pts}`,
    vPlayedPair: (n, pts) => `Pair ${n} made it: ${pts}`,
    vBait: (n, pts, to) => `Bait! ${to} takes ${pts} from ${n}`,
    vHang: (n, pts) => `Hang: ${pts} from ${n} stays on the table`,
    and: 'and',

    saved: 'Saved',
    undone: 'Last hand undone',
    deleted: 'Hand deleted',
    nothingToUndo: 'Nothing to undo',

    confirmNewTitle: 'Start a new game?',
    confirmNewText: 'The current score will be erased.',
    confirmNewOk: 'Start new',
    confirmDelTitle: 'Delete this hand?',
    confirmDelText: 'The score will be recalculated without it.',

    back: 'Back to score',
  },
};

const RULES_HTML = {
  uk: `
    <h1>Правила клабару</h1>
    <p class="lede">Коротка шпаргалка. Правила різняться від компанії до компанії, тож домовтеся про деталі перед грою.</p>

    <section class="card">
      <h2>Колода і гравці</h2>
      <p>32 карти: від сімки до туза. Грають удвох, утрьох або пара на пару (партнери сидять навпроти).</p>
      <p>Спочатку кожному по 6 карт (по дві за раз), наступну карту відкривають — це пропонований козир. Після торгу докладають ще карти:</p>
      <table class="values">
        <thead><tr><th>Гравців</th><th>Спочатку</th><th>Після торгу</th><th>У руці</th></tr></thead>
        <tbody>
          <tr><td>2</td><td>6</td><td>+3</td><td class="hi">9</td></tr>
          <tr><td>3</td><td>6</td><td>+3</td><td class="hi">9</td></tr>
          <tr><td>4</td><td>6</td><td>+2</td><td class="hi">8</td></tr>
        </tbody>
      </table>
      <p class="hint">Учотирьох розходиться вся колода. Удвох і втрьох решта карт лишається в прикупі й у гру не йде.</p>
    </section>

    <section class="card">
      <h2>Торг</h2>
      <ol>
        <li>Перше коло: кожен, починаючи зліва від того, хто здає, каже «беру» (грає у відкриту масть) або «пас».</li>
        <li>Друге коло: якщо всі спасували, можна назвати будь-яку іншу масть.</li>
        <li>Якщо всі спасували і вдруге, той, хто здає, зобовʼязаний грати.</li>
      </ol>
    </section>

    <section class="card">
      <h2>Старшинство і очки карт</h2>
      <table class="values">
        <thead><tr><th>Карта</th><th>Козир</th><th>Не козир</th></tr></thead>
        <tbody>
          <tr><td>Валет (мусор)</td><td class="hi">20</td><td>2</td></tr>
          <tr><td>Девʼятка (манела)</td><td class="hi">14</td><td>0</td></tr>
          <tr><td>Туз</td><td>11</td><td>11</td></tr>
          <tr><td>Десятка</td><td>10</td><td>10</td></tr>
          <tr><td>Король</td><td>4</td><td>4</td></tr>
          <tr><td>Дама</td><td>3</td><td>3</td></tr>
          <tr><td>8, 7</td><td>0</td><td>0</td></tr>
        </tbody>
      </table>
      <p class="hint">Козирі за старшинством: В (мусор), 9 (манела), Т, 10, К, Д, 8, 7. Інші масті: Т, 10, К, Д, В, 9, 8, 7. Остання взятка дає ще 10, тож у роздачі разом 162.</p>
    </section>

    <section class="card">
      <h2>Хід гри</h2>
      <ul>
        <li>Масть треба давати. Якщо її немає — треба бити козирем.</li>
        <li>Якщо зайшли козирем, треба перебити старшим козирем, коли він є.</li>
        <li>Взятку забирає старший козир, а якщо козирів немає — старша карта масті, з якої зайшли.</li>
      </ul>
    </section>

    <section class="card">
      <h2>Комбінації</h2>
      <div class="combo-list">
        <div class="combo-item"><span><span class="term">Терц</span> — три карти однієї масті підряд</span><b>20</b></div>
        <div class="combo-item"><span><span class="term">Полтина</span> — чотири карти підряд</span><b>50</b></div>
        <div class="combo-item"><span><span class="term">Белла</span> — козирні король і дама</span><b>20</b></div>
        <div class="combo-item"><span><span class="term">Остання взятка</span></span><b>10</b></div>
      </div>
      <p class="hint">Комбінації оголошують на першому ході. Зараховується лише у того, в кого старша: полтина старша за терц, серед рівних — за старшою картою, при повній рівності — козирна. Беллу оголошують, коли кладуть короля чи даму козиря.</p>
    </section>

    <section class="card">
      <h2>Підрахунок</h2>
      <ul>
        <li><span class="term">Зіграв</span> — той, хто взяв козир, набрав більше за кожного суперника. Усі записують собі свої очки.</li>
        <li><span class="term">Бейт</span> — набрав менше за когось із суперників. Його очки (разом з комбінаціями) забирає той, хто набрав найбільше. Третій і кожен наступний бейт — ще −100.</li>
        <li><span class="term">Висяк</span> — нічия з найсильнішим суперником. Очки гравця висять на кону й дістаються переможцю наступної роздачі.</li>
        <li><span class="term">Лижі</span> — не взяв жодної взятки: штраф, зазвичай −100 (буває −50).</li>
      </ul>
      <p>Грають до 501 (коротка партія) або до 1001 (довга). Перемагає той, хто першим набрав потрібну суму; якщо дійшли кілька — у кого більше.</p>
    </section>
  `,
  en: `
    <h1>Klabar rules</h1>
    <p class="lede">A short cheat sheet. House rules vary between tables, so agree on the details before you play.</p>

    <section class="card">
      <h2>Deck and players</h2>
      <p>32 cards, seven to ace. Play with two, three, or two pairs (partners sit opposite each other).</p>
      <p>Everyone first gets 6 cards (two at a time), then the next card is turned up as the proposed trump. After bidding, more cards are dealt:</p>
      <table class="values">
        <thead><tr><th>Players</th><th>First deal</th><th>After bidding</th><th>In hand</th></tr></thead>
        <tbody>
          <tr><td>2</td><td>6</td><td>+3</td><td class="hi">9</td></tr>
          <tr><td>3</td><td>6</td><td>+3</td><td class="hi">9</td></tr>
          <tr><td>4</td><td>6</td><td>+2</td><td class="hi">8</td></tr>
        </tbody>
      </table>
      <p class="hint">With four players the whole deck is dealt. With two or three, the remaining cards stay face down and are not played.</p>
    </section>

    <section class="card">
      <h2>Bidding</h2>
      <ol>
        <li>Round one: starting left of the dealer, each player says “take” (plays the turned-up suit) or “pass”.</li>
        <li>Round two: if everyone passed, a player may name any other suit.</li>
        <li>If everyone passes again, the dealer must play.</li>
      </ol>
    </section>

    <section class="card">
      <h2>Card ranks and points</h2>
      <table class="values">
        <thead><tr><th>Card</th><th>Trump</th><th>Plain</th></tr></thead>
        <tbody>
          <tr><td>Jack (musor)</td><td class="hi">20</td><td>2</td></tr>
          <tr><td>Nine (menel)</td><td class="hi">14</td><td>0</td></tr>
          <tr><td>Ace</td><td>11</td><td>11</td></tr>
          <tr><td>Ten</td><td>10</td><td>10</td></tr>
          <tr><td>King</td><td>4</td><td>4</td></tr>
          <tr><td>Queen</td><td>3</td><td>3</td></tr>
          <tr><td>8, 7</td><td>0</td><td>0</td></tr>
        </tbody>
      </table>
      <p class="hint">Trump rank: J (musor), 9 (menel), A, 10, K, Q, 8, 7. Plain suits: A, 10, K, Q, J, 9, 8, 7. The last trick adds 10, so each hand holds 162 in total.</p>
    </section>

    <section class="card">
      <h2>Play</h2>
      <ul>
        <li>Follow suit. If you can’t, you must trump.</li>
        <li>When trump is led, beat it with a higher trump if you have one.</li>
        <li>The highest trump takes the trick; without trumps, the highest card of the led suit.</li>
      </ul>
    </section>

    <section class="card">
      <h2>Melds</h2>
      <div class="combo-list">
        <div class="combo-item"><span><span class="term">Tierce</span> — three cards in a row, same suit</span><b>20</b></div>
        <div class="combo-item"><span><span class="term">Fifty</span> — four cards in a row</span><b>50</b></div>
        <div class="combo-item"><span><span class="term">Bella</span> — king and queen of trump</span><b>20</b></div>
        <div class="combo-item"><span><span class="term">Last trick</span></span><b>10</b></div>
      </div>
      <p class="hint">Melds are declared on the first trick. Only the player with the best one scores: a fifty beats a tierce, equal lengths compare by top card, and on a full tie the trump meld wins. Bella is announced when the king or queen of trump is played.</p>
    </section>

    <section class="card">
      <h2>Scoring</h2>
      <ul>
        <li><span class="term">Made it</span> — the player who took trump scored more than every opponent. Everyone writes down their own points.</li>
        <li><span class="term">Bait</span> — scored less than an opponent. Their points, melds included, go to the top-scoring opponent. The third bait and each one after costs another −100.</li>
        <li><span class="term">Hang</span> — tied with the strongest opponent. The player’s points hang on the table and go to the winner of the next hand.</li>
        <li><span class="term">Skis</span> — took no tricks: a penalty, usually −100 (sometimes −50).</li>
      </ul>
      <p>Play to 501 (short game) or 1001 (long game). The first to reach it wins; if several reach it together, the highest score wins.</p>
    </section>
  `,
};

/* ================= state ================= */

const STORE_KEY = 'klabar.v1';
const HAND_TOTAL = 162;
const MELDS = { terz: 20, poltina: 50, bella: 20 };
const SUITS = [
  { s: '♠', red: false }, { s: '♥', red: true },
  { s: '♦', red: true }, { s: '♣', red: false },
];

let store = load();
let lang = store.lang || ((navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'uk');
let route = 'game';
let deferredInstall = null;

function t(key, ...args) {
  const v = STRINGS[lang][key];
  return typeof v === 'function' ? v(...args) : v;
}

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
  } catch {
    return {};
  }
}
function save() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(store));
  } catch { /* storage unavailable: keep in memory */ }
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ================= game logic ================= */

function sidesFor(mode, players) {
  if (mode === 'pairs') {
    return [
      { name: `${players[0]} ${t('and')} ${players[2]}`, short: `${players[0]}, ${players[2]}` },
      { name: `${players[1]} ${t('and')} ${players[3]}`, short: `${players[1]}, ${players[3]}` },
    ];
  }
  return players.map((p) => ({ name: p, short: p }));
}

function rawScore(hand, i) {
  const c = hand.combos[i] || {};
  return (hand.cards[i] || 0)
    + (c.terz || 0) * MELDS.terz
    + (c.poltina || 0) * MELDS.poltina
    + (c.bella ? MELDS.bella : 0);
}

function splitAmong(amount, winners, out) {
  if (!amount || !winners.length) return;
  const each = Math.floor(amount / winners.length);
  let rest = amount - each * winners.length;
  winners.forEach((w) => {
    out[w] += each + (rest > 0 ? 1 : 0);
    rest--;
  });
}

/* Resolve one hand given carried state. Returns deltas and outcome. */
function resolveHand(game, hand, ctx) {
  const n = game.sides.length;
  const raw = Array.from({ length: n }, (_, i) => rawScore(hand, i));
  const d = hand.declarer;
  const opp = raw.map((_, i) => i).filter((i) => i !== d);
  const oppMax = Math.max(...opp.map((i) => raw[i]));
  const delta = raw.slice();
  let outcome;
  let winners;
  let pot = ctx.pot;
  let penalty = 0;

  if (raw[d] > oppMax) {
    outcome = 'played';
    winners = [d];
  } else if (raw[d] < oppMax) {
    outcome = 'bait';
    winners = opp.filter((i) => raw[i] === oppMax);
    delta[d] = 0;
    splitAmong(raw[d], winners, delta);
    ctx.baits[d]++;
    if (game.rules.bait3 && ctx.baits[d] >= 3) {
      penalty = 100;
      delta[d] -= 100;
    }
  } else {
    outcome = 'hang';
    winners = [];
    delta[d] = 0;
  }

  if (outcome !== 'hang' && pot) {
    splitAmong(pot, winners, delta);
    pot = 0;
  }
  if (outcome === 'hang') pot += raw[d];

  const skis = game.rules.noTricks;
  if (skis) {
    hand.combos.forEach((c, i) => { if (c && c.noTricks) delta[i] -= skis; });
  }

  ctx.pot = pot;
  return { raw, delta, outcome, winners, penalty, pot };
}

function computeGame(game) {
  const n = game.sides.length;
  const ctx = { pot: 0, baits: Array(n).fill(0) };
  const totals = Array(n).fill(0);
  const rows = game.hands.map((hand) => {
    const r = resolveHand(game, hand, ctx);
    r.delta.forEach((v, i) => { totals[i] += v; });
    return { ...r, totals: totals.slice() };
  });
  let winner = null;
  const reached = totals.map((v, i) => [v, i]).filter(([v]) => v >= game.target);
  if (reached.length) {
    const best = Math.max(...reached.map(([v]) => v));
    const top = reached.filter(([v]) => v === best);
    if (top.length === 1) winner = top[0][1];
  }
  return { rows, totals, pot: ctx.pot, baits: ctx.baits, winner };
}

function dealerIndex(game) {
  return (game.firstDealer + game.hands.length) % game.players.length;
}

/* ================= rendering ================= */

const $ = (sel, root = document) => root.querySelector(sel);
const view = $('#view');

function applyTheme() {
  const light = store.theme === 'light';
  if (light) document.documentElement.dataset.theme = 'light';
  else delete document.documentElement.dataset.theme;
  document.querySelector('meta[name="theme-color"]').content = light ? '#F5F7F4' : '#171B22';
}

function applyStatic() {
  document.documentElement.lang = lang === 'uk' ? 'uk' : 'en';
  $('#themeItem').textContent = store.theme === 'light' ? t('darkTheme') : t('lightTheme');
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
}

function render() {
  applyStatic();
  $('#rulesBtn').setAttribute('aria-pressed', route === 'rules');
  if (route === 'rules') return renderRules();
  if (!store.game || route === 'setup') return renderSetup();
  renderGame();
}

/* ---------- setup ---------- */

let draft = null;

function freshDraft() {
  const last = store.game;
  const def = lang === 'uk'
    ? ['Андрій', 'Оля', 'Тарас', 'Ірина']
    : ['Alex', 'Sam', 'Jo', 'Kim'];
  const names = last ? [...last.players, ...def].slice(0, 4) : def.slice();
  if (last && last.players.length < 4) {
    for (let i = last.players.length; i < 4; i++) names[i] = def[i];
  }
  return {
    mode: last ? last.mode : '3',
    names,
    firstDealer: 0,
    target: last ? last.target : 501,
    bait3: last ? last.rules.bait3 : true,
    noTricks: last ? last.rules.noTricks : 100,
  };
}

function countFor(mode) { return mode === '2' ? 2 : mode === '3' ? 3 : 4; }

function renderSetup() {
  if (!draft) draft = freshDraft();
  const count = countFor(draft.mode);
  if (draft.firstDealer >= count) draft.firstDealer = 0;
  const seg = (items, cur, attr) => `<div class="seg" role="group">${items.map(([v, l]) =>
    `<button type="button" data-${attr}="${v}" aria-pressed="${String(v) === String(cur)}">${l}</button>`).join('')}</div>`;

  view.innerHTML = `
    <div class="setup">
      <h1>${t('setupTitle')}</h1>
      <p class="lede">${t('setupLede')}</p>
      <form class="card" id="setupForm" novalidate>
        <div>
          <span class="label">${t('players')}</span>
          ${seg([['2', t('modeTwo')], ['3', t('modeThree')], ['pairs', t('modePairs')]], draft.mode, 'mode')}
        </div>
        <div>
          <span class="label">${t('names')}</span>
          <div class="names">
            ${Array.from({ length: count }, (_, i) => `
              <div class="name-row">
                ${draft.mode === 'pairs' ? `<span class="team-tag">${t('team')} ${i % 2 + 1}</span>` : ''}
                <input class="input" data-name="${i}" value="${esc(draft.names[i])}" maxlength="14"
                  aria-label="${t('player')} ${i + 1}" autocomplete="off" enterkeyhint="next">
                <button type="button" class="dealer-pick" data-dealer="${i}" aria-pressed="${draft.firstDealer === i}"
                  aria-label="${t('deals')}: ${esc(draft.names[i])}">${t('deals')}</button>
              </div>`).join('')}
          </div>
          <p class="hint">${t('namesHint')}</p>
        </div>
        <div>
          <span class="label">${t('playTo')}</span>
          ${seg([[301, '301'], [501, '501'], [1001, '1001']], draft.target, 'target')}
        </div>
        <div class="switch-row">
          <div><p class="label" style="margin:0">${t('ruleBait3')}</p><p class="hint">${t('ruleBait3Hint')}</p></div>
          <button type="button" class="switch" role="switch" id="bait3" aria-checked="${draft.bait3}" aria-label="${t('ruleBait3')}"></button>
        </div>
        <div>
          <span class="label">${t('ruleNoTricks')}</span>
          ${seg([[100, '−100'], [50, '−50'], [0, t('off')]], draft.noTricks, 'skis')}
          <p class="hint">${t('ruleNoTricksHint')}</p>
        </div>
        <button class="btn btn-block" type="submit">${t('start')}</button>
      </form>
    </div>`;

  const form = $('#setupForm');
  form.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    if (b.dataset.mode) { draft.mode = b.dataset.mode; renderSetup(); }
    else if (b.dataset.target) { draft.target = +b.dataset.target; renderSetup(); }
    else if (b.dataset.skis !== undefined) { draft.noTricks = +b.dataset.skis; renderSetup(); }
    else if (b.dataset.dealer !== undefined) { draft.firstDealer = +b.dataset.dealer; renderSetup(); }
    else if (b.id === 'bait3') { draft.bait3 = !draft.bait3; b.setAttribute('aria-checked', draft.bait3); }
  });
  form.addEventListener('input', (e) => {
    if (e.target.dataset.name !== undefined) draft.names[+e.target.dataset.name] = e.target.value;
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    startGame(draft);
  });
}

function startGame(d) {
  const count = countFor(d.mode);
  const players = d.names.slice(0, count).map((s, i) => s.trim() || `${t('player')} ${i + 1}`);
  store.game = {
    mode: d.mode,
    players,
    sides: sidesFor(d.mode, players),
    target: d.target,
    rules: { bait3: d.bait3, noTricks: d.noTricks },
    firstDealer: d.firstDealer,
    hands: [],
    createdAt: Date.now(),
  };
  draft = null;
  save();
  route = 'game';
  render();
  view.focus({ preventScroll: true });
}

/* ---------- game ---------- */

function renderGame() {
  const g = store.game;
  const res = computeGame(g);
  const cols = g.sides.length;
  const dealer = g.players[dealerIndex(g)];
  const markChar = { played: '✓', bait: lang === 'uk' ? 'Б' : 'B', hang: lang === 'uk' ? 'В' : 'H' };
  const isPairs = g.mode === 'pairs';

  const head = `
    <div class="sheet-row sheet-head" style="--cols:${cols}">
      <span></span>
      ${g.sides.map((s, i) => `<span class="who" title="${esc(s.name)}">${esc(isPairs ? `${t('team')} ${i + 1}` : s.name)}${
        isPairs ? `<small>${esc(s.short)}</small>` : res.baits[i] ? `<small>${t('baits')}: ${res.baits[i]}</small>` : ''}</span>`).join('')}
    </div>`;

  const lastIdx = res.rows.length - 1;
  const rows = res.rows.map((r, h) => `
    <button type="button" class="sheet-row" data-hand="${h}" style="--cols:${cols}" aria-label="${t('editHand', h + 1)}">
      <span class="row-no">${h + 1}</span>
      ${r.totals.map((tot, i) => {
        const isDecl = g.hands[h].declarer === i;
        const mark = isDecl ? `<span class="mark ${r.outcome}" aria-hidden="true">${markChar[r.outcome]}</span>` : '';
        const dv = r.delta[i];
        const cls = h === lastIdx ? 'score current' : 'score old';
        return `<span class="${cls}">${mark}<span class="num">${tot}</span>${
          h === lastIdx ? '' : `<span class="delta">${dv > 0 ? '+' : ''}${dv}</span>`}</span>`;
      }).join('')}
    </button>`).join('');

  const progress = `
    <div class="progress" style="--cols:${cols}" aria-hidden="true"><span></span>
      ${res.totals.map((v) => `<i><b style="width:${Math.max(0, Math.min(100, (v / g.target) * 100))}%"></b></i>`).join('')}
    </div>`;

  const empty = `
    <div class="empty">
      <p class="big">${t('emptyBig')}</p>
      <p>${t('emptyText')}</p>
    </div>`;

  let winnerBlock = '';
  if (res.winner !== null) {
    const s = g.sides[res.winner];
    winnerBlock = `
      <div class="card winner" role="status">
        <h2>${esc(isPairs ? t('winsPair', s.short) : t('wins', s.name))}</h2>
        <p>${t('finalScore')}: ${res.totals.join(' : ')}</p>
        <div class="actions">
          <button class="btn" type="button" data-go="rematch">${t('rematch')}</button>
          <button class="btn btn-ghost" type="button" data-go="new">${t('newGame')}</button>
        </div>
      </div>`;
  }

  view.innerHTML = `
    <div class="game-head">
      <div class="game-meta">
        <strong>${t('to')} ${g.target}</strong>
        ${res.winner === null ? `<span>${t('dealsNow')}: <span class="dealer-now">${esc(dealer)}</span></span>` : ''}
      </div>
      ${res.winner === null ? `
        <div class="game-top-actions">
          <button class="chip-btn" type="button" data-go="rematch">${t('rematchShort')}</button>
          <button class="chip-btn" type="button" data-go="new">${t('newGame')}</button>
        </div>` : ''}
    </div>
    <div class="scoresheet">
      ${head}
      ${res.rows.length ? rows : empty}
      ${res.rows.length ? progress : ''}
    </div>
    ${res.pot ? `<p class="pot">${t('potHangs', res.pot)}</p>` : ''}
    ${winnerBlock}
    ${res.winner === null ? `<div class="dock"><button class="btn" type="button" id="addHand">＋ ${t('recordHand')}</button></div>` : ''}
  `;

  view.querySelectorAll('[data-hand]').forEach((b) => b.addEventListener('click', () => openHand(+b.dataset.hand)));
  const add = $('#addHand');
  if (add) add.addEventListener('click', () => openHand(null));
  view.querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', () => menuAction(b.dataset.go)));

  if (res.rows.length) {
    const last = view.querySelector('.sheet-row:last-of-type');
    if (last && last.getBoundingClientRect().bottom > innerHeight - 100) {
      last.scrollIntoView({ block: 'center', behavior: 'auto' });
    }
  }
}

/* ---------- hand editor ---------- */

const sheet = $('#sheet');
let edit = null;

function blankHand(n) {
  return {
    declarer: null,
    suit: null,
    cards: Array(n).fill(null),
    combos: Array.from({ length: n }, () => ({ terz: 0, poltina: 0, bella: false, noTricks: false })),
  };
}

function openHand(index) {
  const g = store.game;
  const n = g.sides.length;
  const src = index === null ? blankHand(n) : structuredClone(g.hands[index]);
  edit = {
    index,
    hand: src,
    touched: src.cards.map((v) => v !== null),
    autoIdx: null,
  };
  if (index !== null) edit.touched = Array(n).fill(true);
  renderSheet();
  sheet.showModal();
  sheet.scrollTop = 0;
}

function autoFill() {
  const { hand, touched } = edit;
  const untouched = touched.map((v, i) => (v ? -1 : i)).filter((i) => i >= 0);
  edit.autoIdx = null;
  if (untouched.length === 1) {
    const i = untouched[0];
    const sum = hand.cards.reduce((a, v, j) => (j === i ? a : a + (v || 0)), 0);
    hand.cards[i] = Math.max(0, HAND_TOTAL - sum);
    edit.autoIdx = i;
  } else if (untouched.length > 1) {
    untouched.forEach((i) => { hand.cards[i] = null; });
  }
}

function handReady() {
  const h = edit.hand;
  return h.declarer !== null && h.cards.every((v) => v !== null);
}

function renderVerdict() {
  const g = store.game;
  const box = $('#verdict', sheet);
  const saveBtn = $('#saveHand', sheet);
  if (edit.hand.declarer === null) {
    box.className = 'verdict';
    box.innerHTML = `<p>${t('pickPlayer')}</p>`;
    saveBtn.disabled = true;
    return;
  }
  if (!handReady()) {
    box.className = 'verdict';
    box.innerHTML = `<p>${t('enterPoints')}</p>`;
    saveBtn.disabled = true;
    return;
  }
  // replay previous hands to get pot and bait counts at this point
  const upto = edit.index === null ? g.hands.length : edit.index;
  const ctx = { pot: 0, baits: Array(g.sides.length).fill(0) };
  for (let i = 0; i < upto; i++) resolveHand(g, g.hands[i], ctx);
  const r = resolveHand(g, edit.hand, ctx);
  const d = edit.hand.declarer;
  const name = (i) => (g.mode === 'pairs' ? g.sides[i].short : g.sides[i].name);
  let line;
  if (r.outcome === 'played') line = g.mode === 'pairs' ? t('vPlayedPair', name(d), r.raw[d]) : t('vPlayed', name(d), r.raw[d]);
  else if (r.outcome === 'bait') line = t('vBait', name(d), r.raw[d], r.winners.map(name).join(', '));
  else line = t('vHang', name(d), r.raw[d]);

  box.className = `verdict ${r.outcome}`;
  box.innerHTML = `<p>${esc(line)}</p>
    <div class="deltas">${r.delta.map((v, i) => `<span>${esc(name(i))} <b>${v > 0 ? '+' : ''}${v}</b></span>`).join('')}</div>`;
  saveBtn.disabled = false;
}

function renderSheet() {
  const g = store.game;
  const h = edit.hand;
  const n = g.sides.length;
  const handNo = edit.index === null ? g.hands.length + 1 : edit.index + 1;
  const sideName = (i) => (g.mode === 'pairs' ? g.sides[i].short : g.sides[i].name);
  const sum = h.cards.reduce((a, v) => a + (v || 0), 0);
  const allIn = h.cards.every((v) => v !== null);

  const meldRow = (key, label, sub) => `
    <span class="rh">${label}${sub ? `<small>${sub}</small>` : ''}</span>
    ${Array.from({ length: n }, (_, i) => {
      const v = h.combos[i][key];
      const on = typeof v === 'boolean' ? v : v > 0;
      const shown = typeof v === 'boolean' ? (on ? (key === 'noTricks' ? `−${g.rules.noTricks}` : `+${MELDS[key]}`) : '')
        : (v > 0 ? `+${v * MELDS[key]}` : '');
      return `<button type="button" class="tick ${on ? 'on' : ''} ${key === 'noTricks' ? 'neg' : ''}"
        data-meld="${key}" data-side="${i}" aria-pressed="${on}"
        aria-label="${label}: ${esc(sideName(i))}">${shown}</button>`;
    }).join('')}`;

  sheet.innerHTML = `
    <div class="sheet-top">
      <h2 id="sheetTitle">${edit.index === null ? t('newHand', handNo) : t('editHand', handNo)}</h2>
      <button class="text-btn" type="button" data-close>${t('close')}</button>
    </div>
    <div class="sheet-body">
      <div>
        <span class="label">${t('whoPlayed')}</span>
        <div class="seg" role="group">
          ${g.sides.map((_, i) => `<button type="button" data-decl="${i}" aria-pressed="${h.declarer === i}">${esc(sideName(i))}</button>`).join('')}
        </div>
      </div>
      <div>
        <span class="label">${t('trump')} <span class="hint" style="font-weight:400">(${t('optional')})</span></span>
        <div class="suits" role="group">
          ${SUITS.map((s) => `<button type="button" class="${s.red ? 'red' : ''}" data-suit="${s.s}" aria-pressed="${h.suit === s.s}">${s.s}</button>`).join('')}
        </div>
      </div>
      <div>
        <span class="label">${t('trickPoints')}</span>
        <div class="points" style="--cols:${n}">
          ${g.sides.map((_, i) => `<label><span>${esc(sideName(i))}</span>
            <input class="input ${edit.autoIdx === i ? 'auto' : ''}" data-card="${i}" type="number" inputmode="numeric"
              min="0" max="${HAND_TOTAL}" step="1" value="${h.cards[i] ?? ''}" placeholder="–" enterkeyhint="done"></label>`).join('')}
        </div>
        <div class="sum-line ${allIn && sum !== HAND_TOTAL ? 'bad' : ''}" id="sumLine">
          <span>${t('trickHint')}</span><span>${t('sum')} ${sum} ${t('of')} ${HAND_TOTAL}</span>
        </div>
      </div>
      <div>
        <span class="label">${t('melds')}</span>
        <div class="combos" style="--cols:${n}">
          <span></span>${g.sides.map((_, i) => `<span class="ch">${esc(sideName(i))}</span>`).join('')}
          ${meldRow('terz', t('terz'), '20')}
          ${meldRow('poltina', t('poltina'), '50')}
          ${meldRow('bella', t('bella'), '20')}
          ${g.rules.noTricks ? meldRow('noTricks', t('noTricks'), t('noTricksSub')) : ''}
        </div>
        <p class="hint">${t('meldsHint')}</p>
      </div>
    </div>
    <div class="sheet-foot">
      <div class="verdict" id="verdict" aria-live="polite"></div>
      <div class="foot-actions">
        ${edit.index !== null ? `<button class="btn btn-ghost" type="button" id="delHand">${t('delete')}</button>` : ''}
        <button class="btn" type="button" id="saveHand">${t('save')}</button>
      </div>
    </div>`;
  renderVerdict();
}

function refreshPoints() {
  const h = edit.hand;
  sheet.querySelectorAll('[data-card]').forEach((inp) => {
    const i = +inp.dataset.card;
    if (document.activeElement !== inp) inp.value = h.cards[i] ?? '';
    inp.classList.toggle('auto', edit.autoIdx === i);
  });
  const sum = h.cards.reduce((a, v) => a + (v || 0), 0);
  const allIn = h.cards.every((v) => v !== null);
  const line = $('#sumLine', sheet);
  line.classList.toggle('bad', allIn && sum !== HAND_TOTAL);
  line.lastElementChild.textContent = `${t('sum')} ${sum} ${t('of')} ${HAND_TOTAL}`;
  renderVerdict();
}

sheet.addEventListener('click', (e) => {
  if (e.target === sheet) { sheet.close(); return; }
  const b = e.target.closest('button');
  if (!b || !edit) return;
  const h = edit.hand;
  if (b.hasAttribute('data-close')) { sheet.close(); return; }
  if (b.dataset.decl !== undefined) {
    h.declarer = +b.dataset.decl;
    sheet.querySelectorAll('[data-decl]').forEach((x) => x.setAttribute('aria-pressed', x === b));
    renderVerdict();
  } else if (b.dataset.suit) {
    h.suit = h.suit === b.dataset.suit ? null : b.dataset.suit;
    sheet.querySelectorAll('[data-suit]').forEach((x) => x.setAttribute('aria-pressed', x.dataset.suit === h.suit));
  } else if (b.dataset.meld) {
    const key = b.dataset.meld;
    const i = +b.dataset.side;
    const c = h.combos[i];
    if (key === 'terz' || key === 'poltina') c[key] = (c[key] + 1) % 3;
    else if (key === 'bella') {
      const next = !c.bella;
      h.combos.forEach((x) => { x.bella = false; });
      c.bella = next;
    } else c.noTricks = !c.noTricks;
    const top = sheet.scrollTop;
    renderSheet();
    sheet.scrollTop = top;
    const again = sheet.querySelector(`[data-meld="${key}"][data-side="${i}"]`);
    if (again) again.focus();
  } else if (b.id === 'saveHand') {
    commitHand();
  } else if (b.id === 'delHand') {
    askConfirm(t('confirmDelTitle'), t('confirmDelText'), t('delete'), () => {
      store.game.hands.splice(edit.index, 1);
      save();
      sheet.close();
      toast(t('deleted'));
      render();
    });
  }
});

sheet.addEventListener('input', (e) => {
  const inp = e.target;
  if (inp.dataset.card === undefined) return;
  const i = +inp.dataset.card;
  const raw = inp.value.trim();
  if (raw === '') {
    edit.touched[i] = false;
    edit.hand.cards[i] = null;
  } else {
    edit.touched[i] = true;
    edit.hand.cards[i] = Math.max(0, Math.min(HAND_TOTAL + 200, Math.round(+raw) || 0));
  }
  // with every box filled by hand there is nothing to infer
  if (edit.touched.every(Boolean)) edit.autoIdx = null;
  else autoFill();
  refreshPoints();
});

sheet.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.dataset.card !== undefined) {
    e.preventDefault();
    const inputs = [...sheet.querySelectorAll('[data-card]')];
    const next = inputs[inputs.indexOf(e.target) + 1];
    if (next && edit.autoIdx !== +next.dataset.card) next.focus();
    else e.target.blur();
  }
});

sheet.addEventListener('close', () => { edit = null; });

function commitHand() {
  if (!handReady()) return;
  const g = store.game;
  const h = structuredClone(edit.hand);
  if (edit.index === null) g.hands.push(h);
  else g.hands[edit.index] = h;
  save();
  sheet.close();
  toast(t('saved'));
  render();
}

/* ---------- rules ---------- */

function renderRules() {
  view.innerHTML = `<article class="rules">${RULES_HTML[lang]}
    <button class="btn btn-ghost back" type="button" id="backBtn">${t('back')}</button></article>`;
  $('#backBtn').addEventListener('click', () => { route = 'game'; render(); scrollTo(0, 0); });
  scrollTo(0, 0);
}

/* ================= chrome: menu, confirm, toast ================= */

const menu = $('#menu');
const menuBtn = $('#menuBtn');

function toggleMenu(open = menu.hidden) {
  menu.hidden = !open;
  menuBtn.setAttribute('aria-expanded', open);
  if (open) {
    const g = store.game;
    menu.querySelector('[data-action="undo"]').disabled = !g || !g.hands.length;
    menu.querySelector('[data-action="install"]').hidden = !deferredInstall;
    menu.querySelector('button:not([disabled]):not([hidden])').focus();
  }
}

menuBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleMenu(); });
document.addEventListener('click', (e) => { if (!menu.hidden && !menu.contains(e.target)) toggleMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { toggleMenu(false); menuBtn.focus(); } });
menu.addEventListener('click', (e) => {
  const b = e.target.closest('[data-action]');
  if (!b) return;
  toggleMenu(false);
  menuAction(b.dataset.action);
});

function menuAction(action) {
  const g = store.game;
  if (action === 'undo') {
    if (!g || !g.hands.length) { toast(t('nothingToUndo')); return; }
    g.hands.pop();
    save();
    route = 'game';
    toast(t('undone'));
    render();
  } else if (action === 'rematch') {
    if (!g) return;
    if (g.hands.length && computeGame(g).winner === null) {
      askConfirm(t('confirmRematchTitle'), t('confirmNewText'), t('rematchShort'), () => {
        g.hands = [];
        menuAction('rematch');
      });
      return;
    }
    startGame({
      mode: g.mode,
      names: g.players,
      firstDealer: (g.firstDealer + 1) % g.players.length,
      target: g.target,
      bait3: g.rules.bait3,
      noTricks: g.rules.noTricks,
    });
  } else if (action === 'new') {
    const go = () => { draft = freshDraft(); route = 'setup'; render(); scrollTo(0, 0); };
    if (g && g.hands.length && computeGame(g).winner === null) {
      askConfirm(t('confirmNewTitle'), t('confirmNewText'), t('confirmNewOk'), go);
    } else go();
  } else if (action === 'theme') {
    store.theme = store.theme === 'light' ? 'dark' : 'light';
    save();
    applyTheme();
    applyStatic();
  } else if (action === 'lang') {
    lang = lang === 'uk' ? 'en' : 'uk';
    store.lang = lang;
    if (store.game) {
      // pair names include a localized conjunction
      store.game.sides = sidesFor(store.game.mode, store.game.players);
    }
    draft = draft && { ...draft };
    save();
    render();
  } else if (action === 'install' && deferredInstall) {
    deferredInstall.prompt();
    deferredInstall = null;
  }
}

const confirmDlg = $('#confirm');
function askConfirm(title, text, okLabel, onOk) {
  confirmDlg.innerHTML = `
    <h2>${esc(title)}</h2><p>${esc(text)}</p>
    <div class="actions">
      <button class="btn btn-ghost" type="button" data-no>${t('cancel')}</button>
      <button class="btn btn-danger" type="button" data-yes>${esc(okLabel)}</button>
    </div>`;
  confirmDlg.querySelector('[data-no]').onclick = () => confirmDlg.close();
  confirmDlg.querySelector('[data-yes]').onclick = () => { confirmDlg.close(); onOk(); };
  confirmDlg.showModal();
  confirmDlg.querySelector('[data-no]').focus();
}

let toastTimer;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

$('#homeBtn').addEventListener('click', () => { route = 'game'; render(); scrollTo(0, 0); });
$('#rulesBtn').addEventListener('click', () => { route = route === 'rules' ? 'game' : 'rules'; render(); });

/* ================= PWA ================= */

addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstall = e;
});

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}

applyTheme();
render();
