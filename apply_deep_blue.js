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
  
  // Replace the medium bright blue (#2563EB) with Deep Blue (#0A2540)
  c = c.replace(/#2563EB/gi, '#0A2540');

  if (c !== o) {
    fs.writeFileSync(f, c);
    console.log('Updated', f);
  }
});
