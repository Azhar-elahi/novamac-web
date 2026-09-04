const fs = require('fs');
let about = fs.readFileSync('f:/novamac website/src/app/(marketing)/about/AboutClient.tsx', 'utf8');

const heroReplacement = 
      {/* HERO SECTION WITH VIDEO BACKGROUND */}
      <section className="relative px-6 sm:px-12 lg:px-20 py-24 lg:py-32 border-b border-white/10 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30">
            <source src="/videos/city-traffic.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl relative z-10"
        >
;

about = about.replace(/\{\/\* HERO SECTION \*\/\}[\s\S]*?<section className=\"[^\"]*\">[\s\S]*?<motion\.div[\s\S]*?className=\"max-w-4xl\"[\s\S]*?>/, heroReplacement);
fs.writeFileSync('f:/novamac website/src/app/(marketing)/about/AboutClient.tsx', about);
console.log('Updated AboutClient to include video background');
