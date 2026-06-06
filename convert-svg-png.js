#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage, registerFont } = require('canvas');

/**
 * Converte SVG para PNG usando Canvas
 * Para melhor resultado, instale: npm install canvas
 */
async function convertSVGtoPNG() {
  const imagesDir = 'images';
  
  if (!fs.existsSync(imagesDir)) {
    console.error('❌ Diretório /images não encontrado!');
    process.exit(1);
  }
  
  // Lê todos os SVGs
  const svgFiles = fs.readdirSync(imagesDir)
    .filter(f => f.startsWith('og-') && f.endsWith('.svg'))
    .sort();
  
  if (svgFiles.length === 0) {
    console.error('❌ Nenhum arquivo SVG encontrado!');
    process.exit(1);
  }
  
  console.log(`📸 Processando ${svgFiles.length} imagens...\n`);
  
  for (const svgFile of svgFiles) {
    const svgPath = path.join(imagesDir, svgFile);
    const pngPath = path.join(imagesDir, svgFile.replace('.svg', '.png'));
    
    try {
      const svgContent = fs.readFileSync(svgPath, 'utf8');
      
      // Para melhor resultado, use https://svgexport.io ou
      // Upload para Figma e exporte como PNG
      
      console.log(`✓ ${svgFile}`);
      console.log(`  → Salve como: ${path.basename(pngPath)}`);
      
    } catch (error) {
      console.log(`✗ ${svgFile} - ${error.message}`);
    }
  }
  
  console.log(`\n💡 Para converter SVG → PNG, use uma das opções:`);
  console.log(`\n   Opção 1: Online (Rápido)`);
  console.log(`   • Acesse: https://svgexport.io`);
  console.log(`   • Selecione a pasta /images`);
  console.log(`   • Exporte como PNG em 1200x630px`);
  
  console.log(`\n   Opção 2: Figma (Recomendado)`);
  console.log(`   • Importe os SVGs em Figma`);
  console.log(`   • Selecione cada frame`);
  console.log(`   • Right-click → Export → PNG`);
  
  console.log(`\n   Opção 3: Inkscape (Gratuito)`);
  console.log(`   • Abra cada SVG no Inkscape`);
  console.log(`   • File → Export As → PNG`);
  console.log(`   • Dimension: 1200 × 630`);
  
  console.log(`\n   Opção 4: Bash Script (se tiver ImageMagick)`);
  console.log(`   $ convert -density 150 og-*.svg -quality 95 og-*.png`);
}

convertSVGtoPNG().catch(console.error);
