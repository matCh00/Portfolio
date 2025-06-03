#!/bin/bash

# RUN:  ./deploy.sh "Komunikat do commita"


# katalog z projektem do wdrożenia na match00.github.io
PROJECT_NAME="gui (React 19) v3"     
BUILD_DIR="$PROJECT_NAME/build"   

# katalog GitHub Pages
DEST_DIR="../../4) GitHub/matCh00.github.io"  

# komunikat commita – można przekazać jako argument do skryptu
COMMIT_MSG="${1:-"Update"}"

# ścieżka do katalogu, w którym znajduje się ten skrypt
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"


# Funkcja wyjścia w razie błędu
exit_with_error() {
  echo "Błąd: $1"
  exit 1
}

echo "=== START: Kopiowanie plików z $BUILD_DIR do $DEST_DIR ==="

# Sprawdź, czy katalog build istnieje
if [[ ! -d "$BUILD_DIR" ]]; then
  exit_with_error "Nie znaleziono katalogu build: $BUILD_DIR"
fi

# Sprawdź, czy katalog docelowy istnieje
if [[ ! -d "$DEST_DIR" ]]; then
  echo "Katalog docelowy nie istnieje: $DEST_DIR"
  echo "Próbuję utworzyć: $DEST_DIR"
  mkdir -p "$DEST_DIR" || exit_with_error "Nie udało się utworzyć katalogu docelowego."
fi

# 1. Skopiuj folder 'static'
echo "Kopiuję folder 'static'..."
rm -rf "$DEST_DIR/static"
cp -R "$BUILD_DIR/static" "$DEST_DIR/" || exit_with_error "Nie udało się skopiować folderu static."

# 2. Skopiuj plik asset-manifest.json
echo "Kopiuję asset-manifest.json..."
cp "$BUILD_DIR/asset-manifest.json" "$DEST_DIR/" || exit_with_error "Nie udało się skopiować asset-manifest.json."

# 3. Skopiuj plik index.html
echo "Kopiuję index.html..."
cp "$BUILD_DIR/index.html" "$DEST_DIR/" || exit_with_error "Nie udało się skopiować index.html."

echo "=== Kopiowanie zakończone. ==="
echo

# 4. Wykonaj git add/commit/push w katalogu, w którym znajduje się skrypt
echo "=== Git w katalogu skryptu: $SCRIPT_DIR ==="
if [[ ! -d "$SCRIPT_DIR/.git" ]]; then
  exit_with_error "Wygląda na to, że $SCRIPT_DIR nie jest repozytorium Git."
fi

pushd "$SCRIPT_DIR" >/dev/null
echo "git add ."
git add . || exit_with_error "git add nie powiódł się w katalogu skryptu."
echo "git commit -m \"$COMMIT_MSG\""
git commit -m "$COMMIT_MSG" --allow-empty || echo "Uwaga: nic do commita w katalogu skryptu."
echo "git push"
git push || exit_with_error "git push nie powiódł się w katalogu skryptu."
popd >/dev/null

echo "=== Git w katalogu skryptu zakończony. ==="
echo

# 5. Wykonaj git add/commit/push w katalogu GitHub Pages
echo "=== Git w katalogu GitHub Pages: $DEST_DIR ==="
if [[ ! -d "$DEST_DIR/.git" ]]; then
  exit_with_error "Wygląda na to, że $DEST_DIR nie jest repozytorium Git."
fi

pushd "$DEST_DIR" >/dev/null
echo "git add ."
git add . || exit_with_error "git add nie powiódł się w katalogu Pages."
echo "git commit -m \"$COMMIT_MSG\""
git commit -m "$COMMIT_MSG" --allow-empty || echo "Uwaga: nic do commita w repozytorium Pages."
echo "git push"
git push || exit_with_error "git push nie powiódł się w katalogu Pages."
popd >/dev/null

echo "=== Git w katalogu GitHub Pages zakończony. ==="
echo
echo "=== WSZYSTKO ZROBIONE! ==="
