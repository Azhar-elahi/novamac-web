const fs = require('fs');
let home = fs.readFileSync('f:/novamac website/src/app/(marketing)/home/HomeClient.tsx', 'utf8');

// Tone down sales copy
home = home.replace('Looking for a web design and development company or digital marketing agency to drive growth? Our experts are master crafters of website design, development, and digital marketing services that attract, delight, and convert users to customers.', 'Need a tech partner you can actually rely on? Our team designs and builds fast, secure, and user-friendly digital solutions. From simple landing pages to complex web applications, we focus on delivering high-quality code and clear communication at every step.');

// Replace static image with dynamic video
home = home.replace(/<img[^>]*src="\/images\/web_dev\.jpg"[^>]*>/g, '<video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover"><source src="/videos/girl-working.mp4" type="video/mp4" /></video>');

// Remove leftover Studio from alt tag
home = home.replace(/NovaMac Engineering Studio/g, 'NovaMac Software Engineers');

fs.writeFileSync('f:/novamac website/src/app/(marketing)/home/HomeClient.tsx', home);
console.log('Updated service section copy and video.');
