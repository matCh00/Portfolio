const fs = require('fs-extra');
const path = require('path');

const target = path.join(__dirname, '../docs', 'v6');

console.log(`🔄 Copying...`);

// Usuń istniejący folder
if (fs.existsSync(target)) {
  fs.removeSync(target);
}

// Utwórz i skopiuj
fs.ensureDirSync(target);
fs.copySync('build', target);

console.log('✅ Success\n');