#!/bin/bash

# RUN:  bash -x ./deploy-all.sh


# Lista projektów
projects=(
  "gui (React 18) v1"
  "gui (React 18) v2"
  "gui (React 19) v3"
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
  npm run deploy
  
  cd ..
done

# Strona główna
echo "📄 Generating index.html..."
cat <<EOF > docs/index.html
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Projekty | matCh00</title>
    <style>
        :root {
            --primary-color: #2c3e50;
            --secondary-color: #3498db;
            --background-color: #f8f9fa;
        }

        body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 2rem;
            background-color: var(--background-color);
            color: var(--primary-color);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .header {
            text-align: center;
            margin-bottom: 3rem;
            padding: 2rem 0;
            border-bottom: 2px solid var(--secondary-color);
        }

        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            padding: 1rem;
        }

        .project-card {
            background: white;
            border-radius: 10px;
            padding: 1.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
            text-decoration: none;
            color: inherit;
        }

        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .project-card h2 {
            color: var(--secondary-color);
            margin: 0 0 1rem 0;
        }

        .version-badge {
            background: var(--secondary-color);
            color: white;
            padding: 0.3rem 0.7rem;
            border-radius: 20px;
            font-size: 0.9em;
            display: inline-block;
            margin-bottom: 1rem;
        }

        footer {
            text-align: center;
            margin-top: 4rem;
            padding: 2rem 0;
            border-top: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>🚀 Portfolio versions</h1>
            <p>View different versions of my portfolio</p>
        </header>

        <div class="projects-grid">
            <a href="./v1/" class="project-card">
                <div class="version-badge">Version 1.0</div>
                <h2>Portfolio v1</h2>
                <p>First version of portfolio</p>
            </a>

            <a href="./v2/" class="project-card">
                <div class="version-badge">Version 2.0</div>
                <h2>Portfolio v2</h2>
                <p>Second version of portfolio</p>
            </a>

            <a href="./v3/" class="project-card">
                <div class="version-badge">Version 3.0</div>
                <h2>Portfolio v3</h2>
                <p>Third version of portfolio</p>
            </a>
        </div>

        <footer>
            <p>© 2024 matCh00 | Site hosted on GitHub Pages</p>
        </footer>
    </div>
</body>
</html>
EOF

echo "✅ Done! Run: git add docs && git commit -m 'Update' && git push"