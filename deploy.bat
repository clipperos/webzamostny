@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo === Nasazeni na GitHub + Vercel ===
echo.
set /p MSG=Popis zmeny (napr. "upravena barva"):
if "%MSG%"=="" set MSG=aktualizace

git add .
git commit -m "%MSG%"
if errorlevel 1 (
  echo.
  echo [INFO] Zmena asi neni co pushnout - zkontroluj Vercel dashboard.
  goto :konec
)
git push
if errorlevel 1 (
  echo.
  echo [CHYBA] Push se nezdaril. Az pri prvnim pushu az potom zadej GitHub username
  echo         a Personal Access Token misto hesla.
) else (
  echo.
  echo [OK] Hotovo! Vercel nasadi novou verzi do ~20 sekund.
  echo      Kontrola: https://vercel.com/dashboard
)
:konec
echo.
pause