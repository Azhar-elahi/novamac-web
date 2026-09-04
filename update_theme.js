const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) results.push(file);
    }
  });
  return results;
}
const files = walk('f:/novamac website/src');
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  let o = c;
  c = c.replace(/NovaMac Studio/g, 'NovaMac Solutions');
  c = c.replace(/NovaMacStudio/g, 'NovaMacSolutions');
  c = c.replace(/#FF5733/g, '#2563EB');
  c = c.replace(/#FF5D4C/g, '#2563EB');
  c = c.replace(/bg-\\[#FF5733\\]/g, 'bg-blue-600');
  c = c.replace(/text-\\[#FF5733\\]/g, 'text-blue-600');
  c = c.replace(/bg-\\[#FF5D4C\\]/g, 'bg-blue-600');
  c = c.replace(/text-\\[#FF5D4C\\]/g, 'text-blue-600');
  c = c.replace(/hover:text-\\[#FF5D4C\\]/g, 'hover:text-blue-600');
  c = c.replace(/border-\\[#FF5D4C\\]/g, 'border-blue-600');
  
  if (f.includes('HomeClient.tsx')) {
    c = c.replace(/opacity: activeVideo === \"A\" \? 0\.9 : 0/g, 'opacity: activeVideo === "A" ? 0.6 : 0');
    c = c.replace(/opacity: activeVideo === \"B\" \? 0\.9 : 0/g, 'opacity: activeVideo === "B" ? 0.6 : 0');
  }
  
  if (c !== o) {
    fs.writeFileSync(f, c);
    console.log('Updated', f);
  }
});
