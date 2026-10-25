#!/bin/zsh
# Costruisce le cinque direzioni come export statici e le unisce in
# docs/capital-sites/, che è la cartella pubblicata sul progetto Vercel
# "silvestri-capital": un link solo, cinque siti bilingue dentro.
#
#   ./scripts/build-capital.sh
#
# La rotta catch-all del 404 non può esistere sotto `output: export`, quindi
# viene spostata da parte durante le build e rimessa a posto sempre, anche
# se la build fallisce. In export i percorsi sconosciuti li serve 404.html.
set -e
cd "$(dirname "$0")/.."

SITE_URL="${SITE_URL:-https://silvestri-capital.vercel.app}"
CATCH='src/app/(en)/[...unmatched]'
HIDDEN='src/app/(en)/_unmatched_export_disabled'

# Rifiuta di partire se un `next dev` gira in questa cartella: la build
# cancella `.next` e gli toglierebbe il terreno sotto i piedi.
for pid in $(pgrep -f "next dev" 2>/dev/null); do
  if [ "$(lsof -a -p "$pid" -d cwd -Fn 2>/dev/null | sed -n 's/^n//p')" = "$PWD" ]; then
    echo "Un next dev (pid $pid) usa questa cartella. Fermalo, o costruisci in una copia." >&2
    exit 1
  fi
done

restore() { [ -d "$HIDDEN" ] && mv "$HIDDEN" "$CATCH" || true; }
trap restore EXIT
[ -d "$CATCH" ] && mv "$CATCH" "$HIDDEN"

build_one () { # $1=tema  $2=basePath  $3=cartella di uscita
  rm -rf out .next
  NEXT_STATIC_EXPORT=true NEXT_BASE_PATH="$2" \
  NEXT_PUBLIC_THEME="$1" \
  NEXT_PUBLIC_SITE_INDEXABLE=false \
  NEXT_PUBLIC_CLAIM_FIRST_FIRM=false \
  NEXT_PUBLIC_SITE_URL="$SITE_URL$2" \
  pnpm build
  rm -rf "docs/capital-sites/$3"
  mv out "docs/capital-sites/$3"
  echo "OK  $1 -> docs/capital-sites/$3"
}

build_one capital-a      /a               a
build_one capital-b      /b               b
build_one modernist      /modernist       modernist
build_one modernist-blue /modernist-blue  modernist-blue
build_one institutional  /atto            atto
rm -rf .next
echo "Fatto. Pubblica con:  cd docs/capital-sites && vercel deploy --prod"
