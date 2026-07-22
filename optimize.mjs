import fs from 'fs';

const files = [
  'src/app/(marketing)/about/page.tsx',
  'src/app/(marketing)/contact/page.tsx',
  'src/app/(marketing)/page.tsx',
  'src/app/(marketing)/services/page.tsx',
  'src/app/(marketing)/work/WorkClient.tsx',
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Replace WordReveal
  content = content.replace(/function WordReveal\([\s\S]*?\)\s*\{[\s\S]*?return \([\s\S]*?<\/motion\.span>\s*\);\s*\}/g, `function WordReveal({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ staggerChildren: 0.04, delayChildren: delay }}
      className={className}
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="overflow-hidden inline-block mr-[0.28em] pb-4 -mb-4 pt-4 -mt-4">
          <motion.span
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: { y: "0%", opacity: 1, transition: { ease, duration: 0.8 } },
            }}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}`);

  // Replace BlurReveal (variations with style and without)
  content = content.replace(/function BlurReveal\([\s\S]*?\)\s*\{[\s\S]*?return \([\s\S]*?<\/motion\.div>\s*\);\s*\}/g, `function BlurReveal({ children, delay = 0, className = "", style = {} }: { children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className + " will-change-transform"}
      style={style}
    >
      {children}
    </motion.div>
  );
}`);

  fs.writeFileSync(file, content);
}
console.log("Optimization complete!");
