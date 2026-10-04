# Štěpán Zámostný — web

Moderní osobní web ve stylu desktopového OS. Tmavé tyriskové / modrozelené barvy,
animovaná okna, drag & drop, minimalizace, maximalizace a funkční terminál.
Bez jediné fotografie — jen typografie, barvy a animace.

## Soubory

| Soubor | Popis |
|---|---|
| `index.html` | Struktura stránky, boot sekvence, plocha, taskbar, start menu |
| `styles.css` | Celý vizuální styl, barvy, animace oken, responzivita |
| `app.js` | Okna (obsah, drag, minimalizace), terminál, kontaktní formulář, hodiny |

## Otevření

Dvojklik na `index.html` — jde o čistý statický web, nepotřebuje build ani server.

Pro lokální testování přes HTTP (doporučené, kvůli fontům z internetu):

```powershell
python -m http.server 8000
# pak http://localhost:8000
```

## Kde upravit údaje

Všechny osobní údaje jsou nahoře v `app.js` v objektu `PROFILE`:

```js
const PROFILE = {
  name: 'Štěpán Zámostný',
  role: 'Web Developer · FiveM · Custom Programátor',
  email: 'zamostnystepan@gmail.com',   // ← tvůj e-mail
  discord: 'clippercze',              // ← tvůj Discord
  location: 'Česká republika',
  uptime: '99.9 %',
};
```

Texty v oknech jsou v objektu `APPS` (klíče `about`, `skills`, `fivem`, `custom`, `contact`, `term`).
Projekt **Krypton PvP** je v `APPS.fivem.html()` v sekci *Projekty*.

## Ovládání

- Klik na ikonu na ploše nebo na Start → otevře okno s animací
- Okno: tažením za titulek, tři světla = zavřít / minimalizovat / maximalizovat
- `Esc` — zavře nejvyšší okno · `Space` — start menu · `S` — zapnout/vypnout zvuky
- Terminál: `help`, `about`, `skills`, `fivem`, `custom`, `contact`, `neofetch`, `ls`, `whoami`, `date`, `clear`, `exit`
- Mobil: okna se otevírají přes celou obrazovku, ikony pod hero sekcí

## Nasazení

Nahraj složku na jakýkoliv statický hosting (netlify, vercel, github pages, nebo tvůj
vlastní server přes nginx). Žádná databáze ani backend není potřeba — kontaktní
formulář otevře e-mailový klient přes `mailto:`.