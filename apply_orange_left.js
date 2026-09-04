const fs = require('fs');
let c = fs.readFileSync('f:/novamac website/src/app/(marketing)/home/HomeClient.tsx', 'utf8');
let o = c;

// Fix GRO WTH badge text
c = c.replace(/NovaMac\s*<\/span>\s*<span[^>]*>\s*Studio/g, 'NovaMac\n                </span>\n                <span className="text-[6px] sm:text-[8px] md:text-[10px] tracking-widest font-mono text-white/90 uppercase font-bold leading-none mt-0.5">\n                  Solutions');

// Hero Left Panel
c = c.replace(/className=\"w-full lg:w-\[460px\] xl:w-\[520px\] bg-\[#0A2540\] text-white/g, 'className="w-full lg:w-[460px] xl:w-[520px] bg-[#FF5733] text-white');

// Service Box Left Panel
c = c.replace(/className=\"w-full lg:w-1\/2 bg-\[#0A2540\] text-white/g, 'className="w-full lg:w-1/2 bg-[#FF5733] text-white');

// Change logo text from black to white/black if needed? "NovaMac<span className='text-black'>Solutions</span>" is fine on Orange.

fs.writeFileSync('f:/novamac website/src/app/(marketing)/home/HomeClient.tsx', c);
console.log('Updated HomeClient.tsx');
