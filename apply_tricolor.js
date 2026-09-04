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
  
  // Text colors -> Orange
  c = c.replace(/text-\[#2563EB\]/g, 'text-[#FF5733]');
  
  // Hover text colors -> Orange
  c = c.replace(/hover:text-\[#2563EB\]/g, 'hover:text-[#FF5733]');
  
  // Borders -> Orange
  c = c.replace(/border-\[#2563EB\]/g, 'border-[#FF5733]');
  
  // Small badge bg / buttons
  // Usually buttons have text-white or hover:bg-white
  // Let's replace all bg-[#2563EB] with Orange EXCEPT if it's the big left panel.
  // We can do this by first changing ALL to Orange, then changing the known big panels back to Blue.
  c = c.replace(/bg-\[#2563EB\]/g, 'bg-[#FF5733]');
  
  // Big Panel in Hero (HomeClient.tsx)
  c = c.replace(/className=\"w-full lg:w-\[460px\] xl:w-\[520px\] bg-\[#FF5733\] text-white/g, 'className="w-full lg:w-[460px] xl:w-[520px] bg-[#2563EB] text-white');
  
  // Big Service Box in Hero
  c = c.replace(/className=\"w-full lg:w-1\/2 bg-\[#FF5733\] text-white/g, 'className="w-full lg:w-1/2 bg-[#2563EB] text-white');
  
  // Footer big panel? It is dark #202020, so no worries there.
  
  // Make sure to replace any blue-600 leftovers just in case
  c = c.replace(/text-blue-600/g, 'text-[#FF5733]');
  c = c.replace(/bg-blue-600/g, 'bg-[#FF5733]');
  c = c.replace(/border-blue-600/g, 'border-[#FF5733]');

  if (c !== o) {
    fs.writeFileSync(f, c);
    console.log('Updated', f);
  }
});
