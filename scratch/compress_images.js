const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

async function compressAll() {
  for (const file of files) {
    const filePath = path.join(dir, file);
    const tempPath = path.join(dir, 'temp_' + file);
    const webpPath = path.join(dir, file.replace(/\.(jpg|png)$/, '.webp'));

    const metadata = await sharp(filePath).metadata();
    console.log(`Processing ${file}: original size ${metadata.width}x${metadata.height}`);

    // Compress JPG to max width 800px with 75% quality
    await sharp(filePath)
      .resize({ width: 800, withoutEnlargement: true })
      .jpeg({ quality: 75, progressive: true })
      .toFile(tempPath);

    // Overwrite original JPG
    fs.renameSync(tempPath, filePath);

    // Create WEBP version
    await sharp(filePath)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 75 })
      .toFile(webpPath);

    const newStat = fs.statSync(filePath);
    const webpStat = fs.statSync(webpPath);
    console.log(`Done ${file}: JPG ${Math.round(newStat.size / 1024)} KB, WEBP ${Math.round(webpStat.size / 1024)} KB`);
  }
}

compressAll().catch(console.error);
