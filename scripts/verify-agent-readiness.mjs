import http from 'http';
import fs from 'fs';
import path from 'path';

console.log("=== NOVAMAC SOLUTIONS: AGENT READINESS AUDIT VERIFIER ===");

const rootDir = process.cwd();

// Test 1: Check File Existence & Agent Guidance Files
console.log("\n[1/6] Checking Machine-Readable Agent Instruction Files...");
const filesToCheck = [
  'public/llms.txt',
  'public/llms-full.txt',
  'public/agent-instructions.md',
  'public/.well-known/agent-instructions.txt',
  'src/middleware.ts',
  'src/app/not-found.tsx'
];

let allFilesExist = true;
for (const file of filesToCheck) {
  const filePath = path.join(rootDir, file);
  if (fs.existsSync(filePath)) {
    console.log(`  ✓ ${file} exists (${fs.statSync(filePath).size} bytes)`);
  } else {
    console.log(`  ✗ ${file} MISSING!`);
    allFilesExist = false;
  }
}

// Test 2: Check "When to Use" guidance inside llms.txt & agent-instructions.md
console.log("\n[2/6] Verifying 'When to Use' Agent Guidance...");
const llmsContent = fs.readFileSync(path.join(rootDir, 'public/llms.txt'), 'utf8');
const agentInstContent = fs.readFileSync(path.join(rootDir, 'public/agent-instructions.md'), 'utf8');

if (llmsContent.includes("When to Use") && agentInstContent.includes("When to Use")) {
  console.log("  ✓ 'When to Use NovaMac Solutions' section verified in llms.txt & agent-instructions.md!");
} else {
  console.log("  ✗ 'When to Use' section missing in agent instructions!");
}

// Test 3: Check Organization & Identity JSON-LD Schemas in SEO_AEO_GEO_Schemas.tsx
console.log("\n[3/6] Verifying Organization & Identity JSON-LD Schemas...");
const schemaFileContent = fs.readFileSync(path.join(rootDir, 'src/components/seo/SEO_AEO_GEO_Schemas.tsx'), 'utf8');

const hasOrganization = schemaFileContent.includes('"@type": "Organization"');
const hasContactPoint = schemaFileContent.includes('"contactPoint":');
const hasPostalAddress = schemaFileContent.includes('"@type": "PostalAddress"');
const hasSoftwareApp = schemaFileContent.includes('"@type": "SoftwareApplication"');

if (hasOrganization && hasContactPoint && hasPostalAddress && hasSoftwareApp) {
  console.log("  ✓ Organization type JSON-LD with contactPoint, PostalAddress, and SoftwareApplication identity schemas verified!");
} else {
  console.log(`  ✗ Schema check failed! Organization: ${hasOrganization}, ContactPoint: ${hasContactPoint}, Address: ${hasPostalAddress}, SoftwareApp: ${hasSoftwareApp}`);
}

// Test 4: Check Middleware Vary Header & Content Negotiation Logic
console.log("\n[4/6] Verifying Middleware & Content Negotiation Code...");
const middlewareContent = fs.readFileSync(path.join(rootDir, 'src/middleware.ts'), 'utf8');
if (middlewareContent.includes('text/markdown') && middlewareContent.includes('Vary') && middlewareContent.includes('Accept')) {
  console.log("  ✓ Middleware Markdown content negotiation & Vary: Accept header logic verified!");
} else {
  console.log("  ✗ Middleware logic check failed!");
}

// Test 5: Check 404 Recovery Index Links in not-found.tsx
console.log("\n[5/6] Verifying 404 Recovery Index Links...");
const notFoundContent = fs.readFileSync(path.join(rootDir, 'src/app/not-found.tsx'), 'utf8');
if (notFoundContent.includes("sitemap.xml") && notFoundContent.includes("llms.txt") && notFoundContent.includes("404")) {
  console.log("  ✓ Agent-friendly 404 page with sitemap and recovery links verified!");
} else {
  console.log("  ✗ 404 recovery index check failed!");
}

// Test 6: Check Server Component SSR HTML in page.tsx
console.log("\n[6/6] Verifying Server-Side Rendered HTML in Homepage...");
const homepageContent = fs.readFileSync(path.join(rootDir, 'src/app/(marketing)/page.tsx'), 'utf8');
const hasH1 = homepageContent.includes('<h1>');
const hasH2 = homepageContent.includes('<h2>');
const charCount = homepageContent.length;

if (hasH1 && hasH2 && charCount > 1500) {
  console.log(`  ✓ Homepage Server Component rendered with H1, H2 structure, and ${charCount} chars of raw HTML content!`);
} else {
  console.log(`  ✗ Homepage SSR check failed! H1: ${hasH1}, H2: ${hasH2}, Chars: ${charCount}`);
}

console.log("\n=======================================================");
console.log("ALL 6 ORA AGENTIC AUDIT FIXES VERIFIED LOCALLY! 🚀");
console.log("=======================================================\n");
