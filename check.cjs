const fs = require('fs');
const path = require('path');

function getFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, filesList);
    } else if (name.endsWith('.ts') || name.endsWith('.tsx')) {
      filesList.push(name);
    }
  }
  return filesList;
}

const allFiles = getFiles(path.join(__dirname, 'src'));
const hooks = ['useState', 'useEffect', 'useContext', 'useRef'];

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let missing = [];
  
  hooks.forEach(hook => {
    // Check if hook is used without React. prefix
    const hookRegex = new RegExp(`(?<!React\\.)\\b${hook}\\b`);
    if (hookRegex.test(content)) {
      // Check if it's imported
      const importRegex = new RegExp(`import\\s+{[^}]*\\b${hook}\\b[^}]*}\\s+from\\s+['"]react['"]`);
      if (!importRegex.test(content)) {
        missing.push(hook);
      }
    }
  });

  if (missing.length > 0) {
    console.log(`Missing imports in ${file}: ${missing.join(', ')}`);
  }
});
