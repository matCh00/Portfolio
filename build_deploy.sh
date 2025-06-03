#!/bin/bash

# RUN:  ./build_deploy.sh "Komunikat do commita"


# Wyjście przy pierwszym błędzie
set -e

# Sprawdź, czy podano komunikat do commita
if [[ -z "$1" ]]; then
  echo "Użycie: $0 \"Update\""
  exit 1
fi

COMMIT_MSG="$1"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# 1. Uruchom build.sh
echo "=== Uruchamiam build.sh ==="
pushd "$SCRIPT_DIR" >/dev/null
if [[ ! -x "./build.sh" ]]; then
  echo "Błąd: Nie znaleziono lub skrypt build.sh nie ma uprawnień do wykonania."
  exit 1
fi

./build.sh
echo "=== build.sh zakończony pomyślnie ==="
popd >/dev/null

# 2. Uruchom deploy.sh z komunikatem do commita
echo "=== Uruchamiam deploy.sh z komunikatem: \"$COMMIT_MSG\" ==="
pushd "$SCRIPT_DIR" >/dev/null
if [[ ! -x "./deploy.sh" ]]; then
  echo "Błąd: Nie znaleziono lub skrypt deploy.sh nie ma uprawnień do wykonania."
  exit 1
fi

./deploy.sh "$COMMIT_MSG"
echo "=== deploy.sh zakończony pomyślnie ==="
popd >/dev/null

echo "=== WSZYSTKO ZROBIONE! ==="
