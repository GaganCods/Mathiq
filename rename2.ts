import fs from 'fs';
import path from 'path';

function walkDir(dir: string, callback: (filepath: string) => void) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir('./src', function(filepath) {
  if (filepath.endsWith('.tsx') || filepath.endsWith('.ts') || filepath.endsWith('.css')) {
    let content = fs.readFileSync(filepath, 'utf8');
    let newContent = content
      .replace(/blue-/g, 'orange-')
      .replace(/purple-/g, 'orange-')
      .replace(/indigo-/g, 'orange-')
      .replace(/emerald-/g, 'orange-')
      .replace(/violet-/g, 'orange-')
      .replace(/pink-/g, 'orange-')
      .replace(/rose-/g, 'orange-')
      .replace(/fuchsia-/g, 'orange-')
      .replace(/cyan-/g, 'orange-');
    
    if (content !== newContent) {
      fs.writeFileSync(filepath, newContent, 'utf8');
      console.log('Updated ' + filepath);
    }
  }
});
