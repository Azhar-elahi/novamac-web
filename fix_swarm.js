const fs = require('fs');

// 1. UPDATE LAYOUT.TSX
let layout = fs.readFileSync('f:/novamac website/src/app/(marketing)/layout.tsx', 'utf8');
layout = layout.replace('const isHeaderVisible = !isHomePage;', 'const isHeaderVisible = !isHomePage || scrolled;');
layout = layout.replace('NovaMac<span className=\"text-[#202020]\">Studio</span>', 'NovaMac<span className="text-[#202020]">Solutions</span>');
layout = layout.replace('NovaMac<span className=\"text-black\">Studio</span>', 'NovaMac<span className="text-black">Solutions</span>');
fs.writeFileSync('f:/novamac website/src/app/(marketing)/layout.tsx', layout);

// 2. UPDATE HOMECLIENT.TSX (Copywriting and Logo)
let home = fs.readFileSync('f:/novamac website/src/app/(marketing)/home/HomeClient.tsx', 'utf8');
home = home.replace('New York Web Design Company & Digital Marketing Agency Since 2020', 'Digital Products That Work Beautifully');
home = home.replace('Build a high performance website with NovaMac Solutions, an award winning web design company and digital marketing agency trusted by brands for over 5 years.', 'Build a fast, reliable, and stunning website with NovaMac Solutions. We are a dedicated team of designers and developers helping businesses grow online since 2020.');
home = home.replace('Our website design and development services combine strategic UX, brand storytelling, SEO, AEO, and conversion driven technology to create websites that captivate users, generate leads, and accelerate growth. From custom website development to data driven digital marketing, we engineer online experiences that turn traffic into revenue.', 'We focus on clean code, clear design, and real results. Whether you need a fresh website, a complex web application, or better search visibility, we bring your ideas to life without the jargon. Honest work, clear communication, and digital experiences that your customers will love.');

// Fix any leftover Studio
home = home.replace(/NovaMac<span[^>]*>Studio<\/span>/g, 'NovaMac<span className="text-black">Solutions</span>');
home = home.replace(/Studio<\/span>/g, 'Solutions</span>');

// Make logo in hero slightly bigger to be more visible
home = home.replace('className=\"w-9 h-9 object-contain brightness-0 invert\"', 'className="w-12 h-12 object-contain brightness-0 invert"');

fs.writeFileSync('f:/novamac website/src/app/(marketing)/home/HomeClient.tsx', home);

console.log('Fixed copywriting, logo, and navbar scroll logic!');
