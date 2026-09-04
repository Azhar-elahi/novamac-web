const fs = require('fs');
let layout = fs.readFileSync('f:/novamac website/src/app/(marketing)/layout.tsx', 'utf8');

// Change dark gray text to Deep Blue for more premium feel
layout = layout.replace(/text-\[#202020\]/g, 'text-[#0A2540]');
// Make header logo text bigger
layout = layout.replace('text-xl sm:text-2xl', 'text-2xl sm:text-3xl');

fs.writeFileSync('f:/novamac website/src/app/(marketing)/layout.tsx', layout);
