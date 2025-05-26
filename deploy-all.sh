#!/bin/bash

# Lista projektów z oryginalnymi nazwami
projects=(
  "gui (React18) v1"
  "gui (React18) v2"
)

# Buduj i kopiuj każdy projekt
for project in "${projects[@]}"; do
  echo "🔨 Budowanie $project..."
  cd "$project"
  npm run deploy
  cd ..
done

# Generuj stronę główną
echo "📄 Tworzę index.html..."
cat <<EOF > docs/index.html
<!DOCTYPE html>
<html>
<head>
    <title>My Portfolio</title>
</head>
<body>
    <h1>Projekty:</h1>
    <ul>
        <li><a href="./gui%20(React18)%20v1/">GUI v1</a></li>
        <li><a href="./gui%20(React18)%20v2/">GUI v2</a></li>
    </ul>
</body>
</html>
EOF

echo "✅ Gotowe! Wypchnij zmiany na GitHub:"
echo "git add docs && git commit -m 'Aktualizacja projektów' && git push"