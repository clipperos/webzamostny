# Nasazení na Vercel + automatická aktualizace přes GitHub

Cíl: když se cokoli změní v těchto souborech a pushneš to na GitHub, Vercel
automaticky znovu nasadí web. Ty nic dalšího neklikáš.

```
Tvůj počítač            GitHub                 Vercel
index.html  ──push──►   repo (zdroj pravdy)  ──automaticky──►  živý web
styles.css                                                https://tvuj-web.vercel.app
app.js
```

---

## Krok 1 — Nainstaluj GitHub Desktop (jednou)

GitHub Desktop je grafická aplikace, **nepotřebuješ psát žádné příkazy**.
Nainstaluje i Git k sobě.

1. Otevři: **https://desktop.github.com/download**
2. Stáhni `GitHubDesktopSetup.exe` a nainstaluj (všechno potvrď, nic neměň).
3. Spusť GitHub Desktop a přihlas se svým GitHub účtem
   (klikni `Sign in with your browser`).

> Kdybys chtěl radši příkazovou řáchu, alternativou je oficiální
> [Git for Windows](https://git-scm.com/download/win) — pak následuj
> *Varianta B* na konci.

---

## Krok 2 — Založ repozitář z tvých souborů

1. Otevři GitHub Desktop → **`File` → `Add local repository…`**
2. Klikni **`Choose…`** a vyber složku:
   ```
   C:\Users\steae\OneDrive\Desktop\web
   ```
3. Dole se zobrazí *"is not a Git repository"* → klikni **`Create a repository`**.
   - **Name:** např. `stepan-zamostny-web`
   - **Description:** *Web developeři portfolio*
   - **Visibility:** `Public` (veřejné, ať se na to Vercel dostane bez hesla)
4. GitHub Desktop vytvoří lokální git repozitář. Soubory uvidíš v seznamu.

---

## Krok 3 — První commit a push na GitHub

1. Vlevo nahoře najdeš pole **Changes** se soubory, které je potřeba uložit.
2. Napiš do řádku popisu např. `první verze webu`.
3. Klikni **`Commit to main`**.
4. Vpravo nahoře klikni **`Publish repository`** (objeví se jen při prvním commitu).
5. Přihlas se k GitHubu, když se zeptá. Hotovo — soubory jsou na GitHubu.

> ⚠️ **Pozor na OneDrive!** Tvoje složka je synchronizovaná s OneDrivem.
> `.git` složka uvnitř OneDrivedrive občas vytváří problémy (chybové soubory,
> locky). Jestli se něco bude chovat divně, nejrychlejší řešení je složku
> přesunout mimo OneDrive, např. na `C:\Users\steae\Desktop\web`, a repozitář
> založit znovu.

---

## Krok 4 — Nasadit na Vercel (automaticky)

1. Otevři **https://vercel.com/signup** a přihlas se **přes GitHub**
   (tlačítko *Continue with GitHub*). Tím se propojí účty, nepotřebuješ nic kopírovat.
2. Na úvodní obrazovce klikni **`Add New…` → `Project`**.
3. V seznamu repozitářů najdi **`stepan-zamostny-web`** a klikni **`Import`**.
4. Nastavení nech být takhle (Vercel tohle zvládne bez nastavování):
   - **Framework Preset:** `Other`
   - **Build Command:** nech prázdné
   - **Output Directory:** nech prázdné
5. Klikni **`Deploy`**.
6. Po ~30 sekundách dostaneš adresu, například:
   ```
   https://stepan-zamostny-web.vercel.app
   ```
7. **Doporučení:** v záložce **Settings → Domains** si přidej vlastní adresu
   (např. `stepanzamostny.cz`) a u `www` i bez www.

---

## Krok 5 — Automatické nasazování už běží ✅

Od teďka to funguje takhle:

1. Změníš soubor (`index.html`, `styles.css`, `app.js`) — ať v editoru kódu,
   nebo to necháš upravit AI asistenta.
2. V GitHub Desktop klikneš **`Commit to main`** (napiš co jsi změnil).
3. GitHub Desktop sám **pushne** na GitHub (pokud máš zapnutý auto-push).
4. **Vercel uvidí push a do ~20 sekund nasadí novou verzi na živý web.**

Nedáš se nic jinak. Kontroluješ to jen na adrese z bodu 4.6.

### Kde zkontrolovat, že Vercel nasadil správně
- **https://vercel.com/dashboard** → tvůj projekt → záložka **Deployments**
  → u každého vidíš `Ready` nebo `Error` + logy.

### Kdyby GitHub Desktop nepushoval automaticky
`GitHub Desktop → Settings → Git` → zapni **`Always push my commits`**.

---

## Varianta B — příkazová varianta (pro ty, kdo má rád příkazy)

### Instalace Gitu
```powershell
winget install --id Git.Git -e --source winget
```
*(po instalaci otevři nové PowerShell okno, ať se `git` načte)*

### Přihlášení a repozitář
```powershell
cd C:\Users\steae\OneDrive\Desktop\web
git init
git branch -M main
git config user.name "Štěpán Zámostný"
git config user.email "zamostnystepan@gmail.com"
git add .
git commit -m "první verze webu"
```

### Propojení s GitHubem
Na `https://github.com/new` vytvoř prázdné repozitář (žádný README),
název např. `stepan-zamostny-web`, pak:
```powershell
git remote add origin https://github.com/TVEJUZIVOT/stepan-zamostny-web.git
git push -u origin main
```
(Při pushu se zeptá na username + personal access token. Bez hesla to nefunguje —
na GitHubu: **Settings → Developer settings → Personal access tokens → Generate**
a zaškrtni `repo`.)

### Každá další změna (2 příkazy)
```powershell
git add .
git commit -m "co jsem změnil"
git push
```

### Nebo použij připravený skript
`deploy.bat` v této složce udělá `add` + `commit` + `push` jedním
poklikáním (ptá se jen na text zprávy).

---

## Rychlé řešení problémů

| Problém | Řešení |
|---|---|
| Vercel ukazuje 404 | Překlep v názvu souboru — musí být `index.html` přesně malými písmeny |
| Build selhal / červená hláška | Otevři log v Deployments. U statického webu spadá build jen když je špatně nastavený Framework Preset — použij `Other` |
| Web se neaktualizuje po pushi | Zkontroluj v Deployments, jestli vznikl nový deployment. Když ne, jdi Vercel → Settings → Git → *Reconnect Repository* |
| GitHub Desktop hlásí chybu s `.git` | Přesuň složku mimo OneDrive a založ repozitář znovu |
| Chceš vlastní doménu | Vercel → Settings → Domains → Add. DNS zadáš u svého registrátora domény podle instrukcí Vercelu |

---

## Co kam patří (aby se nic nerozbilo)

- Do souborů na GitHubu **nech** jen: `index.html`, `styles.css`, `app.js`,
  `README.md`. Žádné screenshoty, žádné `.txt` poznámky.
- **Žádný `package.json` nepotřebuješ** — je to čistý statický web, Vercel
  ho umí obsluhovat bez buildu.
- `deploy.bat` a `NASAZENI-VERCEL.md` můžeš na GitHubu mít, Vercel je ignoruje.