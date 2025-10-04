#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration des tailles d'images
const sizes = [
  { width: 640, suffix: '-sm' },
  { width: 750, suffix: '-md' },
  { width: 1080, suffix: '-lg' },
  { width: 1920, suffix: '-xl' }
];

// Formats supportés
const formats = [
  { ext: 'webp', quality: 80 },
  { ext: 'avif', quality: 70 }
];

async function optimizeImage(inputPath, outputDir) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const ext = path.extname(inputPath).slice(1);

  console.log(`Optimizing ${filename}...`);

  for (const size of sizes) {
    for (const format of formats) {
      const outputPath = path.join(
        outputDir, 
        `${filename}${size.suffix}.${format.ext}`
      );

      try {
        await sharp(inputPath)
          .resize(size.width, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          .toFormat(format.ext, { quality: format.quality })
          .toFile(outputPath);
        
        console.log(`✓ Generated ${path.basename(outputPath)}`);
      } catch (error) {
        console.error(`✗ Error generating ${outputPath}:`, error.message);
      }
    }
  }
}

async function optimizeImages() {
  const inputDir = path.join(__dirname, 'public', 'images');
  const outputDir = path.join(__dirname, 'public', 'images', 'optimized');

  // Créer le dossier de sortie s'il n'existe pas
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} images to optimize...`);

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      await optimizeImage(inputPath, outputDir);
    }

    console.log('✅ Image optimization complete!');
  } catch (error) {
    console.error('❌ Error during optimization:', error);
  }
}

// Exécuter seulement si appelé directement
if (require.main === module) {
  optimizeImages();
}

module.exports = { optimizeImages };
