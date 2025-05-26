#!/bin/bash

# RUN:  bash -x ./deploy-all.sh

# Lista projektów
projects=(
  "gui (React 18) v1"
  "gui (React 18) v2"
)

for project in "${projects[@]}"; do
  echo "🔨 Processing: '$project'..."
  
  # Wejdź do folderu projektu
  cd "$project" || { echo "❌ Folder nie istnieje: $project"; exit 1; }
  
  # Zbuduj projekt
  echo "⌛ Budowanie..."
  if ! npm run build; then
    echo "❌ Błąd budowania $project"
    exit 1
  fi
  
  # Skopiuj build
  echo "📁 Kopiowanie..."
  node ../copy-build.js "$project"
  
  cd ..
done

# Strona główna
echo "📄 Generating index.html..."
cat <<EOF > docs/index.html
<!DOCTYPE html>
<html>
<body>
  <h1>Projekty:</h1>
  <ul>
    <li><a href="./v1/">v1</a></li>
    <li><a href="./v2/">v2</a></li>
  </ul>
</body>
</html>
EOF

echo "✅ Done! Run: git add docs && git commit -m 'Update' && git push"