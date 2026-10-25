#!/bin/zsh
# Costruisce le tre direzioni come export statici e le unisce in
# docs/capital-sites/, che è la cartella pubblicata sul progetto Vercel
# "silvestri-capital": un link solo, tre siti bilingue dentro.
#
#   ./scripts/build-capital.sh
#
# La rotta catch-all del 404 non può esistere sotto `output: export`, quindi
# viene spostata da parte durante le due build e rimessa a posto sempre, anche
# se la build fallisce. In export i percorsi sconosciuti li serve 404.html.
set -e
cd "$(dirname "$0")/.."

SITE_URL="${SITE_URL:-https://silvestri-capital.vercel.app}"
CATCH='src/app/(en)/[...unmatched]'
HIDDEN='src/app/(en)/_unmatched_export_disabled'

restore() { [ -d "$HIDDEN" ] && mv "$HIDDEN" "$CATCH" || true; }
trap restore EXIT
[ -d "$CATCH" ] && mv "$CATCH" "$HIDDEN"

build_one () { # $1=tema  $2=basePath  $3=cartella di uscita
  rm -rf out .next
  NEXT_STATIC_EXPORT=true NEXT_BASE_PATH="$2" \
  NEXT_PUBLIC_THEME="$1" \
  NEXT_PUBLIC_REFERENCE_MEDIA=true \
  NEXT_PUBLIC_SITE_INDEXABLE=false \
  NEXT_PUBLIC_CLAIM_FIRST_FIRM=false \
  NEXT_PUBLIC_SITE_URL="$SITE_URL$2" \
  pnpm build
  rm -rf "docs/capital-sites/$3"
  mv out "docs/capital-sites/$3"
  echo "OK  $1 -> docs/capital-sites/$3"
}

build_one capital-a     /a    a
build_one capital-b     /b    b
build_one institutional /atto atto
rm -rf .next
echo "Fatto. Pubblica con:  cd docs/capital-sites && vercel deploy --prod"
