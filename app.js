/* ============================================================
   Štěpán Zámostný — desktop OS portfolio
   ============================================================ */
(() => {
'use strict';

/* ---------- data ---------- */
const PROFILE = {
  name: 'Štěpán Zámostný',
  role: 'Web Developer · FiveM · Custom Programátor',
  email: 'zamostnystepan@gmail.com',
  discord: 'clippercze',
  location: 'Česká republika',
  uptime: '99.9 %',
};

const ICONS = {
  user: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="8" r="3.6"/><path d="M4.6 20a7.4 7.4 0 0 1 14.8 0"/></svg>',
  code: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 8 4 12l4.5 4M15.5 8 20 12l-4.5 4M13.6 5l-3.2 14"/></svg>',
  server: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="4" width="18" height="6.5" rx="2"/><rect x="3" y="13.5" width="18" height="6.5" rx="2"/><path d="M7 7.2h.01M7 16.8h.01"/></svg>',
  cpu: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9.5 9.5h5v5h-5zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>',
  terminal: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="4" width="19" height="16" rx="2.5"/><path d="M6.5 9.5 9.5 12l-3 2.5M12.5 14.5h5"/></svg>',
  mail: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="m3.5 7 8.5 6 8.5-6"/></svg>',
  layers: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M13.5 2 5 13.5h6L10.5 22 19 10.5h-6L13.5 2Z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M12 2.5 20 6v6c0 5-3.4 8.6-8 9.8C7.4 20.6 4 17 4 12V6l8-3.5Z"/><path d="m9 12 2.2 2.2L15.5 10"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M13.5 3c3.5 1 6.5 4 7.5 7.5-3 4.5-6 7-10 8l-3-3c1-4 3.5-9.5 8-12Z"/><circle cx="14.5" cy="9" r="1.4"/><path d="M7 14c-1.5 1-2 3-2 5 2 0 4-.5 5-2M6 21l-2 1"/></svg>',
  github: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
  copy: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="9" width="11" height="11" rx="2.5"/><path d="M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5"/></svg>',
  check: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 12.5 5 5 10-11"/></svg>',
};

/* ---------- apps ---------- */
const APPS = {
  about: {
    title: 'Profil', icon: ICONS.user, w: 620, h: 500, min: 500,
    desc: 'Kdo jsem',
    html: () => `
      <div class="sect">
        <h3 class="sect__title">${PROFILE.name}</h3>
        <p class="lead">Profesionální <b>web developer</b>, <b>FiveM vývojář</b> a autor <b>custom programů a scriptů</b>.</p>
        <p class="muted" style="font-weight:300">
          Říkám si Štěpán a už roky stavím weby, FiveM servery a software, které mají smysl a vydrží.
          Web beru jako produkt — od návrhu a architektury až po poslední pixel a Core Web Vitals.
          Vedle toho se specializuji na FiveM servery pro GTA V, kde kladu důraz na výkon serveru,
          čitelný kód a stabilitu i při stovkách hráčů. K tomu píšu vlastní scripty, nástroje a utility
          v Pythonu a C, když je potřeba automatizace, sběr dat nebo výpočet, který má být rychlý.
        </p>
      </div>
      <div class="sect">
        <h3 class="sect__title">Jak pracuji</h3>
        <div class="grid2">
          ${[
            [ICONS.code, 'Nejdřív problém', 'Nejdřív pochopím, co potřebuješ. Teprve pak přichází design a kód. Bez zbytečných funkcí navíc.'],
            [ICONS.bolt, 'Čistý a rychlý kód', 'Optimalizovaný JavaScript, dotazy do databáze, které nesbíjejí server, a build, který se dá rozšířit.'],
            [ICONS.rocket, 'Šipka vpřed', 'Technologie se mění. Řešení stavím tak, aby se dalo rozšířit bez přepisování od nuly.'],
            [ICONS.shield, 'Bezpečnost', 'Validace vstupů, ochrana proti SQL injection, XSS, rate limiting a sanizace uživatelských dat.'],
          ].map(([i, t, d]) => `<div class="card"><div class="card__ico card__ico--sm">${i}</div><h3>${t}</h3><p>${d}</p></div>`).join('')}
        </div>
      </div>
      <div class="sect">
        <h3 class="sect__title">Rychlé fakty</h3>
        <div class="grid2">
          ${[
            ['Jazyky', 'JavaScript · C · Python'],
            ['Specializace', 'Web · FiveM · Custom nástroje'],
            ['Běh', 'Lokálně i na vlastním serveru'],
            ['Dostupnost', 'Vzdálená / remote'],
          ].map(([k, v]) => `<div class="card"><h3 style="font-size:13px;color:var(--ink-mute);font-family:var(--font-m);letter-spacing:.12em;text-transform:uppercase">${k}</h3><p style="color:var(--teal-200)">${v}</p></div>`).join('')}
        </div>
      </div>`,
    status: () => `<span>běží <b>${PROFILE.uptime}</b></span><span>roleplay <b>online</b></span>`,
  },

  skills: {
    title: 'Dovednosti', icon: ICONS.code, w: 580, h: 520, min: 460,
    desc: 'JS · C · Python',
    html: () => `
      <div class="sect">
        <h3 class="sect__title">Co umím profesionálně</h3>
        <div class="grid2">
          ${[
            [ICONS.code, 'Weby na míru', 'Profesionální web development od návrhu a designu po nasazení — responzivní, rychlé a snadno spravovatelné.'],
            [ICONS.server, 'FiveM servery', 'Kompletní roleplay i PvP servery pro GTA V — framework, systémy, anticheat a optimalizace výkonu.'],
            [ICONS.cpu, 'Custom programy', 'Nástroje na míru, které šetří čas: automatizace, utility, CLI nástroje a systémové programy.'],
            [ICONS.terminal, 'Scripty & Lua', 'Serverové i clientové skripty, Discord boti, integrace API a dávkové zpracování dat.'],
          ].map(([i, t, d]) => `<div class="card"><div class="card__ico card__ico--sm">${i}</div><h3>${t}</h3><p>${d}</p></div>`).join('')}
        </div>
      </div>
      <div class="sect">
        <h3 class="sect__title">Jazyky a technologie</h3>
        ${[
          ['JavaScript / TypeScript', 95, 'Node.js, moderní frameworky, WebSocket, REST API'],
          ['Python', 90, 'automatizace, boti, scrapery, datové zpracování'],
          ['C', 82, 'systémové utility, výpočty, výkon a paměť pod kontrolou'],
          ['HTML / CSS', 96, 'responzivní layouty, animace, přístupnost'],
          ['Lua', 88, 'FiveM servery, ESX / QBCore, client i server logika'],
          ['SQL', 87, 'schémata dotazů, indexy, optimalizace dotazů'],
        ].map(([n, p, d]) => `
          <div class="skill">
            <div class="skill__top"><span><b style="color:var(--teal-100)">${n}</b> <span class="muted" style="font-size:12px">— ${d}</span></span><span>${p} %</span></div>
            <div class="skill__bar" data-p="${p}"><i></i></div>
          </div>`).join('')}
      </div>
      <div class="sect">
        <h3 class="sect__title">Co umím navíc</h3>
        <div class="chiplist">
          ${['Node.js','Discord boti','REST API','WebSocket','Docker','Linux','Nginx','Git','Bcrypt','Rate limiting','Anticheat','Optimizace DB','Windows Forms','Makefile'].map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="sect">
        <h3 class="sect__title">Ukázka kódu</h3>
        <pre class="code"><span class="c">// serverový Lua handler — FiveM</span>
<span class="f">RegisterNetEvent</span>(<span class="s">'shop:buy'</span>, <span class="f">function</span>(item)
  <span class="f">local</span> src = source
  <span class="f">if</span> <span class="f">not</span> Config.Items[item] <span class="f">then return end</span> <span class="c">-- validace vstupu</span>
  <span class="f">local</span> ped = GetPlayerPed(src)
  <span class="f">if</span> GetEntityDistance(ped, shop.coords) &gt; <span class="s">5.0</span> <span class="f">then return end</span>
  TriggerEvent(<span class="s">'shop:charge'</span>, src, item)
<span class="f">end</span>)

<span class="c"># Python — filtrace logů</span>
<span class="f">from</span> pathlib <span class="f">import</span> Path
<span class="f">def</span> <span class="f">errors</span>(log: Path) -&gt; <span class="f">int</span>:
    <span class="f">return</span> sum(<span class="s">'ERROR'</span> <span class="f">in</span> l <span class="f">for</span> l <span class="f">in</span> log.<span class="f">read_text</span>(errors=<span class="s">'ignore'</span>).splitlines())</pre>
      </div>`,
    status: () => `<span>skill level <b>expert</b></span>`,
  },

  fivem: {
    title: 'FiveM Servery', icon: ICONS.server, w: 640, h: 540, min: 500,
    desc: 'Roleplay servery',
    html: () => `
      <div class="sect">
        <h3 class="sect__title">FiveM servery na míru</h3>
        <p class="lead">Kompletní serverový framework pro GTA V roleplay — od struktury až po poslední detail v UI.</p>
        <p class="muted" style="font-weight:300">
          Postavím ti server, který udrží hráče. Dbám na výkon, řešení kolizí s anticheatem,
          čistou strukturu resourců, databázi, která se nezastaví, a design, který vypadá dobře.
        </p>
      </div>
      <div class="sect">
        <h3 class="sect__title">Co obsahuje</h3>
        <div class="grid2">
          ${[
            [ICONS.server, 'Framework', 'ESX nebo QBCore, vlastní úpravy, inventář, práce, vozidla, nemovitosti.'],
            [ICONS.cpu, 'Výkon', 'Optimalizované dotazy, cache, throttling a profiling. Server běží i přes 200 hráčů.'],
            [ICONS.shield, 'Bezpečnost', 'Anticheat, validace server-side, ochrana proti exploitu a event injection.'],
            [ICONS.layers, 'UI / Design', 'Čisté HUD, menu, notifikace a animace v NUI, které nepřekážejí.'],
            [ICONS.bolt, 'Custom systémy', 'Nové joby, hry, ekonomika, questy, telefony a všechno vlastní.'],
            [ICONS.rocket, 'Nasazení', 'Klíč, build pipeline, artefakty, monitoring a automatické zálohy.'],
          ].map(([i, t, d]) => `<div class="card"><div class="card__ico card__ico--sm">${i}</div><h3>${t}</h3><p>${d}</p></div>`).join('')}
        </div>
      </div>
      <div class="sect">
        <h3 class="sect__title">Technický stack</h3>
        <div class="chiplist">
          <span class="tag">FiveM</span><span class="tag">Lua</span><span class="tag">ESX</span><span class="tag">QBCore</span>
          <span class="tag">ox_lib</span><span class="tag">MySQL</span><span class="tag">NUI</span><span class="tag">React</span><span class="tag">Redis</span>
        </div>
      </div>
      <div class="sect">
        <h3 class="sect__title">Výhody</h3>
        <ul class="muted" style="margin:0;padding-left:20px;font-weight:300;line-height:1.9">
          <li>Struktura kódu, do které se dá orientovat i po měsíci</li>
          <li>Dokumentace resourců a čisté commity do repozitáře</li>
          <li>Bezpečnostní audit a testování před nasazením</li>
          <li>Aktualizace a podpora po předání</li>
        </ul>
      </div>
      <div class="sect">
        <h3 class="sect__title">Projekty</h3>
        <div class="card" style="border-color:var(--stroke-2);background:linear-gradient(150deg,rgba(46,230,197,.1),rgba(8,34,40,.5))">
          <div class="row" style="gap:14px">
            <div class="card__ico">${ICONS.server}</div>
            <div style="flex:1">
              <h3 style="font-size:17px">Krypton PvP <span class="tag" style="margin-left:6px">FiveM server</span></h3>
              <p>PvP server pro GTA V — vlastní framework,optimalizovaný serverový kód, vlastní
              anticheat, hráčské systémy a UI. Postavený od nuly, vyladěný na hranici výkonu
              i při vysokém počtu hráčů.</p>
              <div class="chiplist">
                <span class="tag">FiveM</span><span class="tag">Lua</span><span class="tag">ESX / QBCore</span>
                <span class="tag">Anticheat</span><span class="tag">MySQL</span><span class="tag">NUI</span>
              </div>
            </div>
          </div>
        </div>
      </div>`,
    status: () => `<span>tickrate <b>optimalizovaný</b></span><span>build <b>stable</b></span>`,
  },

  custom: {
    title: 'Custom programy', icon: ICONS.cpu, w: 620, h: 520, min: 480,
    desc: 'Python · C · Automatizace',
    html: () => `
      <div class="sect">
        <h3 class="sect__title">Custom programy a nástroje</h3>
        <p class="lead">Když na weby a servery nestačí, napíšu ti nástroj, který udělá práci za tebe.</p>
        <p class="muted" style="font-weight:300">
          Od malých utilit po plné automatizace. Dávám pozor na to, aby šlo program rozšířit,
          mít přehlednou strukturu a běžel bez zbytečné spotřeby zdrojů.
        </p>
      </div>
      <div class="sect">
        <h3 class="sect__title">Příklady</h3>
        <div class="grid2">
          ${[
            [ICONS.bolt, 'Automatizace', 'Skripty v Pythonu, které šetří hodiny práce — zpracování souborů, reporty, hromadné operace.'],
            [ICONS.terminal, 'CLI nástroje', 'Textové nástroje s jasným výstupem, stavem a bezpečným ukládáním dat.'],
            [ICONS.mail, 'Discord boti', 'Boti na moderaci, tickety, role, notifikace i propojení s FiveM serverem.'],
            [ICONS.cpu, 'C utility', 'Výpočty, parsování a systémové nástroje tam, kde je potřeba rychlost.'],
            [ICONS.layers, 'Web scraping', 'Sběr dat z API i webů s retry logikou, rate limitingem a ukládáním do DB.'],
            [ICONS.shield, 'Bezpečnost', 'Hashování, šifrování, sanitizace a bezpečné zpracování uživatelských dat.'],
          ].map(([i, t, d]) => `<div class="card"><div class="card__ico card__ico--sm">${i}</div><h3>${t}</h3><p>${d}</p></div>`).join('')}
        </div>
      </div>
      <div class="sect">
        <h3 class="sect__title">Proces</h3>
        <div class="code" style="color:var(--ink-dim)">
          <span class="f">01</span> &nbsp;Zadání a rozsah &nbsp;→&nbsp; <span class="f">02</span> &nbsp;Návrh &nbsp;→&nbsp;
          <span class="f">03</span> &nbsp;Implementace &nbsp;→&nbsp; <span class="f">04</span> &nbsp;Testy &nbsp;→&nbsp;
          <span class="f">05</span> &nbsp;Předání + dokumentace
        </div>
      </div>`,
    status: () => `<span>build <b>python / c</b></span>`,
  },

  contact: {
    title: 'Kontakt', icon: ICONS.mail, w: 560, h: 560, min: 460,
    desc: 'Napiš mi',
    html: () => `
      <div class="sect">
        <h3 class="sect__title">Ozveš se</h3>
        <p class="lead">Máš projekt? Napiš pár vět a domluvíme se.</p>
      </div>
      <div class="sect">
        <h3 class="sect__title">Přímé kontakty</h3>
        <div class="contact-list">
          <a class="contact-item" href="mailto:${PROFILE.email}">
            <span class="contact-item__ico">${ICONS.mail}</span>
            <span><small>E-mail</small><span>${PROFILE.email}</span></span>
          </a>
          <div class="contact-item">
            <span class="contact-item__ico">${ICONS.shield}</span>
            <span><small>Discord</small><span>${PROFILE.discord}</span></span>
          </div>
          <div class="contact-item">
            <span class="contact-item__ico">${ICONS.user}</span>
            <span><small>Lokalita</small><span>${PROFILE.location} · remote</span></span>
          </div>
        </div>
      </div>
      <div class="sect">
        <h3 class="sect__title">Rychlý formulář</h3>
        <form class="contact-form" id="mailForm">
          <div class="field"><label for="fName">Jméno</label><input id="fName" type="text" placeholder="Jak se jmenuješ" required></div>
          <div class="field"><label for="fMail">E-mail</label><input id="fMail" type="email" placeholder="tvuj@email.cz" required></div>
          <div class="field"><label for="fType">Typ projektu</label>
            <select id="fType" style="padding:11px 13px;border-radius:11px;background:rgba(1,12,15,.65);border:1px solid rgba(46,230,197,.16);color:var(--ink);font-family:inherit;font-size:14px">
              <option>Web / landing page</option>
              <option>Web aplikace</option>
              <option>FiveM server</option>
              <option>Custom program / automatizace</option>
              <option>Jiný projekt</option>
            </select>
          </div>
          <div class="field"><label for="fMsg">Zpráva</label><textarea id="fMsg" rows="4" placeholder="Co potřebuješ postavit?" required></textarea></div>
          <button class="btn btn--primary" type="submit">Odeslat zprávu</button>
          <p class="form-note">Otevře se tvůj e-mailový klient s předvyplněnou zprávou.</p>
        </form>
      </div>`,
    status: () => `<span>odpovídám <b>do 24 h</b></span>`,
  },

  term: {
    title: 'Terminál', icon: ICONS.terminal, w: 660, h: 420, min: 380,
    desc: 'Bash', cls: 'win--term',
    html: () => `<div class="term" id="term"><div id="termOut"></div>
      <div class="term__in"><span class="term__prompt">stepan@dev:~$</span><input id="termIn" autocomplete="off" spellcheck="false" aria-label="Terminál"><span class="caret" id="termCaret"></span></div></div>`,
    status: () => `<span>bash <b>5.2</b></span><span>uptime <b>stable</b></span>`,
  },
};

/* ---------- icons on desktop & start ---------- */
const DESK_ICONS = ['about', 'skills', 'fivem', 'custom', 'contact', 'term'];
const START_ICONS = ['about', 'skills', 'fivem', 'custom', 'contact', 'term'];

/* ---------- state ---------- */
const state = { open: new Map(), z: 10, sound: true, cascade: 0 };
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const layer = $('#winLayer'), tasksEl = $('#taskbarTasks'), toastsEl = $('#toasts');

/* ---------- sound (WebAudio, no assets) ---------- */
let actx;
function beep(kind = 'open') {
  if (!state.sound) return;
  try {
    actx ||= new (window.AudioContext || window.webkitAudioContext)();
    if (actx.state === 'suspended') actx.resume();
    const now = actx.currentTime;
    const notes = { open: [440, 660, 880], close: [520, 330], click: [1200], error: [220, 165] }[kind] || [440];
    notes.forEach((f, i) => {
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(0, now + i * 0.06);
      g.gain.linearRampToValueAtTime(0.045, now + i * 0.06 + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.06 + 0.18);
      o.connect(g).connect(actx.destination);
      o.start(now + i * 0.06); o.stop(now + i * 0.06 + 0.2);
    });
  } catch (e) {}
}

/* ---------- toast ---------- */
function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast'; t.innerHTML = msg;
  toastsEl.append(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 320); }, 2600);
}

/* ---------- clock ---------- */
const DAYS = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'];
const MONTHS = ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'];
function tickClock() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, '0'), mm = String(d.getMinutes()).padStart(2, '0');
  $('#topClock').textContent = `${hh}:${mm}`;
  $('#taskClock').innerHTML = `<b>${hh}:${mm}</b><i>${DAYS[d.getDay()].slice(0, 3)}. ${d.getDate()}. ${MONTHS[d.getMonth()].slice(0, 3)}</i>`;
}
setInterval(tickClock, 1000); tickClock();

/* ---------- window manager ---------- */
function sizeWin(app) {
  const pad = 26;
  const maxW = Math.min(app.w, window.innerWidth - 120);
  const maxH = Math.min(app.h, window.innerHeight - 130);
  return { w: Math.max(app.min || 300, maxW), h: Math.max(260, maxH), pad };
}

function openApp(id) {
  const app = APPS[id]; if (!app) return;

  // already open -> focus / restore
  const existing = state.open.get(id);
  if (existing) {
    focusWin(id);
    if (existing.el.classList.contains('minimized')) {
      existing.el.classList.remove('minimized');
      existing.el.classList.add('restoring');
      existing.el.addEventListener('animationend', () => existing.el.classList.remove('restoring'), { once: true });
    }
    return;
  }

  closeStart();
  const { w, h, pad } = sizeWin(app);
  const layerW = layer.clientWidth, layerH = layer.clientHeight;
  const off = (state.cascade++ % 6) * 30;
  const x = Math.max(pad, Math.min(layerW - w - pad, Math.round((layerW - w) / 2 + off - 45)));
  const y = Math.max(pad, Math.min(layerH - h - pad, Math.round((layerH - h) / 2 + off - 40)));

  const el = document.createElement('section');
  el.className = 'win';
  el.dataset.app = id;
  el.style.cssText = `left:${x}px;top:${y}px;width:${w}px;height:${h}px;`;
  el.innerHTML = `
    <header class="win__bar">
      <div class="win__lights">
        <span class="lt lt--r" data-act="close" title="Zavřít"></span>
        <span class="lt lt--y" data-act="min" title="Minimalizovat"></span>
        <span class="lt lt--g" data-act="max" title="Maximalizovat"></span>
      </div>
      <div class="win__title">${app.title}<small>${app.desc || ''}</small></div>
      <div class="win__tools">
        <button class="wtool" data-act="min" title="Minimalizovat"><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><path d="M6 12h12"/></svg></button>
        <button class="wtool" data-act="max" title="Maximalizovat"><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><rect x="5" y="5" width="14" height="14" rx="2"/></svg></button>
        <button class="wtool" data-act="close" title="Zavřít"><svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none"><path d="m6 6 12 12M18 6 6 18"/></svg></button>
      </div>
    </header>
    <div class="win__body">${app.html()}</div>
    <footer class="statusbar">${app.status ? app.status() : ''}</footer>`;

  layer.append(el);
  state.open.set(id, { el, app });
  focusWin(id);
  beep('open');

  initWindow(id, el, app);
  renderTasks();
}

function initWindow(id, el, app) {
  // titlebar actions
  el.addEventListener('click', e => {
    const btn = e.target.closest('[data-act]'); if (!btn) return;
    e.stopPropagation();
    ({ close: () => closeWin(id), min: () => minWin(id), max: () => maxWin(id) })[btn.dataset.act]?.();
  });

  // click anywhere to focus
  el.addEventListener('pointerdown', () => focusWin(id), true);

  // drag
  const bar = $('.win__bar', el);
  bar.addEventListener('pointerdown', e => {
    if (e.target.closest('[data-act]')) return;
    const win = state.open.get(id); if (!win || win.max) return;
    const sx = e.clientX, sy = e.clientY;
    const ox = parseFloat(el.style.left), oy = parseFloat(el.style.top);
    try { bar.setPointerCapture(e.pointerId); } catch (_) {}
    const move = ev => {
      const lw = layer.clientWidth, lh = layer.clientHeight;
      const nx = Math.min(Math.max(6, ox + ev.clientX - sx), lw - el.offsetWidth - 6);
      const ny = Math.min(Math.max(4, oy + ev.clientY - sy), lh - 48);
      el.style.left = nx + 'px'; el.style.top = ny + 'px';
    };
    const up = () => {
      bar.removeEventListener('pointermove', move);
      bar.removeEventListener('pointerup', up);
    };
    bar.addEventListener('pointermove', move);
    bar.addEventListener('pointerup', up);
  });

  // hover glow for cards
  el.addEventListener('pointermove', e => {
    const c = e.target.closest('.card'); if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });

  // per-app logic
  if (id === 'skills') animateBars(el);
  if (id === 'term') initTerm(el);
  if (id === 'contact') initForm(el);

  // auto focus first input in terminal
  if (id === 'term') setTimeout(() => $('#termIn', el)?.focus(), 320);
}

function focusWin(id) {
  state.z++;
  for (const [k, w] of state.open) {
    w.el.classList.toggle('focused', k === id);
    if (k === id) w.el.style.zIndex = state.z;
  }
}

function closeWin(id) {
  const w = state.open.get(id); if (!w) return;
  beep('close');
  w.el.classList.add('closing');
  w.el.addEventListener('animationend', () => {
    w.el.remove(); state.open.delete(id); renderTasks();
    const next = [...state.open.keys()].pop();
    if (next) focusWin(next);
  }, { once: true });
}

function minWin(id) {
  const w = state.open.get(id); if (!w) return;
  w.el.classList.add('minimized');
  renderTasks();
  const next = [...state.open.keys()].filter(k => k !== id && !state.open.get(k).el.classList.contains('minimized')).pop();
  if (next) focusWin(next);
}

function maxWin(id) {
  const w = state.open.get(id); if (!w) return;
  const el = w.el;
  if (w.max) {
    el.classList.remove('max');
    Object.assign(el.style, w.prev);
    w.max = false;
  } else {
    w.prev = { left: el.style.left, top: el.style.top, width: el.style.width, height: el.style.height };
    el.classList.add('max');
    w.max = true;
  }
  el.classList.add('restoring');
  el.addEventListener('animationend', () => el.classList.remove('restoring'), { once: true });
  beep('click');
}

function closeAll() {
  [...state.open.keys()].forEach((k, i) => setTimeout(() => closeWin(k), i * 55));
}

function renderTasks() {
  tasksEl.innerHTML = '';
  for (const [id, w] of state.open) {
    const b = document.createElement('button');
    const min = w.el.classList.contains('minimized');
    b.className = 'task' + (min ? ' min' : '');
    b.innerHTML = `<i></i><b>${w.app.title}</b>`;
    b.onclick = () => openApp(id);
    tasksEl.append(b);
  }
  // running indicator on desktop icons
  $$('.dicon').forEach(d => d.classList.toggle('running', state.open.has(d.dataset.app)));
}

/* ---------- skill bars ---------- */
function animateBars(el) {
  requestAnimationFrame(() => {
    $$('.skill__bar', el).forEach((b, i) => {
      setTimeout(() => { b.firstElementChild.style.width = b.dataset.p + '%'; }, 90 * i + 60);
    });
  });
}

/* ---------- contact form ---------- */
function initForm(el) {
  const f = $('#mailForm', el); if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#fName', el).value.trim();
    const mail = $('#fMail', el).value.trim();
    const type = $('#fType', el).value;
    const msg = $('#fMsg', el).value.trim();
    const subject = `[${type}] Nová zpráva od ${name}`;
    const body = `${msg}\n\n---\nJméno: ${name}\nE-mail: ${mail}\nTyp projektu: ${type}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    toast(`${ICONS.check} Zpráva připravena k odeslání`);
  });
}

/* ---------- terminal ---------- */
function initTerm(el) {
  const out = $('#termOut', el), inp = $('#termIn', el), box = $('#term', el);
  if (!out || state.termInited === el) { if (inp) inp.focus(); return; }
  state.termInited = el;

  const write = (html, cls = '') => {
    const l = document.createElement('div');
    l.className = 'term__line ' + cls; l.innerHTML = html;
    out.append(l); box.scrollTop = box.scrollHeight;
  };
  const banner = `
<span class="term__ok">  ███████╗ ████████╗███████╗██████╗  █████╗ ███╗   ██╗</span>
<span class="term__grad">  ██╔════╝ ╚══██╔══╝██╔════╝██╔══██╗██╔══██╗████╗  ██║</span>
<span class="term__ok">  ███████╗    ██║   █████╗  ██████╔╝███████║██╔██╗ ██║</span>
<span class="term__grad">  ╚════██║    ██║   ██╔══╝  ██╔══██╗██╔══██║██║╚██╗██║</span>
<span class="term__ok">  ███████║    ██║   ███████╗██████╔╝██║  ██║██║ ╚████║</span>
<span class="term__grad">  ╚══════╝    ╚═╝   ╚══════╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝</span>
<span class="term__dim">   web · fivem · custom software engineer</span>`;
  write(banner);
  write(`<span class="term__dim">Napiš </span><span class="term__ok">help</span><span class="term__dim"> pro seznam příkazů.</span>`);

  const CMDS = {
    help() {
      write(`<span class="term__ok">Dostupné příkazy:</span>`);
      [['help', 'tento seznam'], ['about', 'o mně'], ['skills', 'dovednosti'], ['fivem', 'FiveM servery'],
       ['custom', 'custom programy'], ['contact', 'kontaktní údaje'], ['ls', 'výpis souborů'],
       ['neofetch', 'info o systému'], ['whoami', 'kdo jsem'], ['date', 'aktuální čas'], ['clear', 'vymazat terminál'], ['exit', 'zavřít terminál']]
        .forEach(([c, d]) => write(`  <span class="term__ok">${c.padEnd(10)}</span><span class="term__dim">${d}</span>`));
    },
    about() { openApp('about'); write(`<span class="term__dim">Otevírám okno Profil…</span>`); },
    skills() { openApp('skills'); write(`<span class="term__dim">Otevírám okno Dovednosti…</span>`); },
    fivem() { openApp('fivem'); write(`<span class="term__dim">Otevírám okno FiveM…</span>`); },
    custom() { openApp('custom'); write(`<span class="term__dim">Otevírám okno Custom programy…</span>`); },
    contact() { openApp('contact'); write(`<span class="term__dim">E-mail: ${PROFILE.email}</span><span class="term__dim"> · Discord: ${PROFILE.discord}</span>`); },
    whoami() { write(`<span class="term__ok">stepan</span> <span class="term__dim">— web developer, FiveM vývojář, custom programátor</span>`); },
    ls() {
      ['about.html', 'skills.json', 'fivem/', 'krypton-pvp/', 'custom/', 'contact.md', 'README.md'].forEach(f => write(`<span class="term__grad">${f}</span>`));
    },
    neofetch() {
      write(`<span class="term__ok">  ${PROFILE.name}</span> <span class="term__dim">@ dev</span>`);
      write(`<span class="term__dim">  ─────────────────────────────</span>`);
      [['OS', 'DesktopOS 1.0'], ['Host', 'onecloud'], ['Shell', 'bash 5.2'], ['Uptime', '99.9%'],
       ['Language', 'JavaScript, C, Python'], ['Role', 'Web / FiveM / Custom'], ['Terminal', 'WebTerm']]
        .forEach(([k, v]) => write(`  <span class="term__ok">${k.padEnd(9)}</span><span class="term__dim">${v}</span>`));
    },
    date() { write(`<span class="term__ok">${new Date().toLocaleString('cs-CZ')}</span>`); },
    clear() { out.innerHTML = ''; },
    exit() { closeWin('term'); },
  };

  inp.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const val = inp.value.trim();
    write(`<span class="term__prompt">stepan@dev:~$</span> ${val ? val : '<span class="term__dim">&nbsp;</span>'}`);
    inp.value = '';
    const [cmd, ...args] = val.toLowerCase().split(/\s+/);
    if (!cmd) return;
    if (CMDS[cmd]) { beep('click'); CMDS[cmd](args); }
    else {
      beep('error');
      write(`<span class="term__err">command not found: ${val}</span> <span class="term__dim">— zkus help</span>`);
    }
  });
  box.addEventListener('click', () => { if (window.getSelection().toString() === '') inp.focus(); });
}

/* ---------- desktop icons ---------- */
function renderDeskIcons() {
  const wrap = $('#deskIcons');
  wrap.innerHTML = '';
  DESK_ICONS.forEach((id, i) => {
    const app = APPS[id];
    const b = document.createElement('button');
    b.className = 'dicon'; b.dataset.app = id;
    b.style.animationDelay = (0.25 + i * 0.06) + 's';
    b.innerHTML = `<span class="dicon__ico">${app.icon}</span><span class="dicon__label">${app.title}</span>`;
    b.onclick = () => openApp(id);
    wrap.append(b);
  });
}

/* ---------- start menu ---------- */
function renderStart() {
  const g = $('#startGrid');
  g.innerHTML = '';
  START_ICONS.forEach(id => {
    const app = APPS[id];
    const b = document.createElement('button');
    b.className = 'sapp';
    b.innerHTML = `<span class="sapp__ico">${app.icon}</span><span><b>${app.title}</b><small>${app.desc || ''}</small></span>`;
    b.onclick = () => openApp(id);
    g.append(b);
  });
}
function openStart() {
  const m = $('#startMenu');
  const show = m.hidden;
  m.hidden = !show;
  if (show) { renderStart(); $('#startBtn').classList.add('active'); }
  else $('#startBtn').classList.remove('active');
}
function closeStart() { $('#startMenu').hidden = true; $('#startBtn').classList.remove('active'); }

/* ---------- cursor glow ---------- */
if (window.matchMedia('(pointer:fine)').matches) {
  document.body.classList.add('has-pointer');
  const cg = $('#cursorGlow'); let tx = 0, ty = 0, cx = 0, cy = 0;
  window.addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; });
  (function loop() {
    cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12;
    cg.style.transform = `translate3d(${cx}px,${cy}px,0)`;
    requestAnimationFrame(loop);
  })();
}

/* ---------- global events ---------- */
$('#startBtn').onclick = e => { e.stopPropagation(); openStart(); };
$('#startMenu').onclick = e => e.stopPropagation();
document.addEventListener('click', () => { if (!$('#startMenu').hidden) closeStart(); });
$('#restartBtn').onclick = () => location.reload();
$('#aboutFooter').onclick = () => { closeStart(); openApp('about'); };
$('#closeAllBtn').onclick = closeAll;

const soundIcon = $('#soundIcon');
const setIcon = () => {
  soundIcon.innerHTML = state.sound
    ? '<path d="M4 9.5h3.5L12 5.5v13L7.5 14.5H4z" fill="currentColor"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" stroke="currentColor" stroke-width="1.7" fill="none" stroke-linecap="round"/>'
    : '<path d="M4 9.5h3.5L12 5.5v13L7.5 14.5H4z" fill="currentColor"/><path d="m16 9.5 5 5m0-5-5 5" stroke="currentColor" stroke-width="1.8" fill="none" stroke-linecap="round"/>';
};
setIcon();
$('#soundBtn').onclick = e => { e.stopPropagation(); state.sound = !state.sound; e.currentTarget.setAttribute('aria-pressed', state.sound); setIcon(); if (state.sound) beep('click'); };

// hero buttons
$$('[data-open]').forEach(b => b.onclick = () => openApp(b.dataset.open));

// keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.target.matches('input, textarea, select')) {
    if (e.key === 'Escape') e.target.blur();
    return;
  }
  if (e.key === 'Escape') {
    if (!$('#startMenu').hidden) return closeStart();
    const top = [...state.open.entries()].filter(([, w]) => !w.el.classList.contains('minimized')).pop();
    if (top) closeWin(top[0]);
  }
  if (e.key === ' ') { e.preventDefault(); openStart(); }
  if (e.key.toLowerCase() === 's') { state.sound = !state.sound; $('#soundBtn').setAttribute('aria-pressed', state.sound); setIcon(); }
});

// keep windows inside viewport on resize
let rt;
window.addEventListener('resize', () => {
  clearTimeout(rt);
  rt = setTimeout(() => {
    for (const [, w] of state.open) {
      const el = w.el;
      if (w.max) continue;
      const lw = layer.clientWidth, lh = layer.clientHeight;
      const maxL = Math.max(6, lw - el.offsetWidth - 6), maxT = Math.max(4, lh - 48);
      el.style.left = Math.min(parseFloat(el.style.left) || 0, maxL) + 'px';
      el.style.top = Math.min(parseFloat(el.style.top) || 0, maxT) + 'px';
    }
  }, 140);
});

/* ---------- boot ---------- */
function boot() {
  const fill = $('#bootFill'), log = $('#bootLog');
  const steps = [
    [14, 'inicializace jádra…'],
    [32, 'načítání CSS systému…'],
    [54, 'kompilace modulů…'],
    [72, 'JavaScript · C · Python…'],
    [88, 'FiveM runtime…'],
    [100, 'hotovo'],
  ];
  let i = 0;
  const t = setInterval(() => {
    const [p, msg] = steps[i];
    fill.style.width = p + '%';
    log.textContent = '> ' + msg;
    i++;
    if (i >= steps.length) {
      clearInterval(t);
      setTimeout(() => {
        $('#boot').classList.add('done');
        document.body.classList.remove('is-locked');
        beep('open');
        setTimeout(() => openApp('about'), 420);
      }, 420);
    }
  }, 320);
}

renderDeskIcons();
renderStart();
document.body.classList.add('is-locked');
window.addEventListener('load', boot, { once: true });
// fallback if load already fired
if (document.readyState === 'complete') setTimeout(() => { if (!$('#boot').classList.contains('done')) boot(); }, 300);

})();