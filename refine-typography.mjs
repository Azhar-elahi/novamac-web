import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src/app');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Font weights
    content = content.replace(/font-black/g, 'font-extrabold');

    // Font sizes (clamps)
    content = content.replace(/text-\[clamp\(3rem,10vw,10rem\)\]/g, 'text-[clamp(2.5rem,6vw,5.5rem)]');
    content = content.replace(/text-\[clamp\(2\.5rem,8vw,8rem\)\]/g, 'text-[clamp(2.5rem,6vw,5.5rem)]');
    content = content.replace(/text-\[clamp\(2\.8rem,8vw,7\.5rem\)\]/g, 'text-[clamp(2.2rem,5vw,4.5rem)]');
    content = content.replace(/text-\[clamp\(2\.5rem,7vw,7rem\)\]/g, 'text-[clamp(2.2rem,5vw,4.5rem)]');
    content = content.replace(/text-\[clamp\(2\.5rem,6vw,5\.5rem\)\]/g, 'text-[clamp(2rem,5vw,4rem)]');
    content = content.replace(/text-\[clamp\(2\.4rem,6vw,5\.5rem\)\]/g, 'text-[clamp(2rem,5vw,4rem)]');
    content = content.replace(/text-\[clamp\(2rem,5vw,4\.5rem\)\]/g, 'text-[clamp(1.8rem,4vw,3.5rem)]');

    // Text colors (gray to slate)
    content = content.replace(/text-gray-500/g, 'text-slate-600');
    content = content.replace(/text-gray-400/g, 'text-slate-500');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
});
console.log('Done.');
