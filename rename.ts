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
      .replace(/NovaCalc/g, 'QuickSolve')
      .replace(/Nova Calc/g, 'QuickSolve')
      .replace(/Nova/g, 'QuickSolve')
      .replace(/cyan/g, 'orange')
      .replace(/rgba\(34,211,238,/g, 'rgba(249,115,22,');
    
    if (content !== newContent) {
      fs.writeFileSync(filepath, newContent, 'utf8');
      console.log('Updated ' + filepath);
    }
  }
});
