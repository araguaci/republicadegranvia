#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script para gerar PNGs de alta qualidade
 * Requer: npm install canvas
 */

let canvas;
try {
  canvas = require('canvas');
} catch (e) {
  console.log('❌ canvas não está instalado.');
  console.log('Instale com: npm install canvas');
  console.log('\nOu use a ferramenta online:');
  console.log('👉 https://svgexport.io');
  process.exit(0);
}

const { createCanvas, loadImage, registerFont } = canvas;

// Dados dos sharecards
const sharecards = [
  {
    file: 'og-sharecard',
    mainTitle: 'A República',
    subTitle: 'de Granvia',
    description: ['Uma novela sobre poder, traição', 'e o silêncio dos que deveriam falar'],
    label: 'Ficção Política',
    url: 'republicadegranvia.vercel.app',
    footer: 'Sete capítulos · Sun Tzu · Maquiavel · Orwell · Gramsci'
  },
  {
    file: 'og-capitulo-1',
    mainTitle: 'Capítulo I',
    subTitle: 'O General e o Trono de Vidro',
    description: ['Em que um homem comum chega ao poder', 'e o poder finge não ter medo dele'],
    label: 'Sun Tzu — A Arte da Guerra',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia'
  },
  {
    file: 'og-capitulo-2',
    mainTitle: 'Capítulo II',
    subTitle: 'Os Cordeiros com Dentes',
    description: ['Em que os aliados se apresentam', 'e a lealdade revela seu verdadeiro preço'],
    label: 'Maquiavel — O Príncipe',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia'
  },
  {
    file: 'og-capitulo-3',
    mainTitle: 'Capítulo III',
    subTitle: 'A Noite da Esplanada',
    description: ['Em que o povo fiel é conduzido até o precipício', 'por vozes que não estariam lá para ver a queda'],
    label: 'Falsa bandeira',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia'
  },
  {
    file: 'og-capitulo-4',
    mainTitle: 'Capítulo IV',
    subTitle: 'A Tornozeleira e o Animal',
    description: ['Em que o mais forte dos homens', 'é apanhado no único momento em que é fraco'],
    label: 'Maquiavel',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia'
  },
  {
    file: 'og-capitulo-5',
    mainTitle: 'Capítulo V',
    subTitle: 'O Tribunal dos Espelhos',
    description: ['Em que a verdade é reescrita nove vezes', 'até que a nona sirva ao propósito'],
    label: 'Orwell — 1984',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia'
  },
  {
    file: 'og-capitulo-6',
    mainTitle: 'Capítulo VI',
    subTitle: 'O Exílio Conveniente',
    description: ['Em que os que convocaram prosperam longe', 'e os que atenderam pagam perto'],
    label: 'Orwell — A Revolução dos Bichos',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia'
  },
  {
    file: 'og-capitulo-7',
    mainTitle: 'Capítulo VII',
    subTitle: 'Os Herdeiros do Caos',
    description: ['Em que os que administraram a derrota', 'descobrem que administraram também a própria'],
    label: 'Gramsci',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia'
  }
];

const WIDTH = 1200;
const HEIGHT = 630;

// Cores
const colors = {
  dark: '#0a0a0a',
  darkMid: '#1a1515',
  gold: '#d4a574',
  goldDark: '#a67c52',
  light: '#e8e6e1',
  lightMid: '#c8c6c1',
  lightDim: '#a8a6a1',
  dim: '#888682'
};

function renderImage(config) {
  const cnv = createCanvas(WIDTH, HEIGHT);
  const ctx = cnv.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, colors.dark);
  gradient.addColorStop(1, colors.darkMid);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  
  // Top line
  ctx.strokeStyle = colors.gold;
  ctx.lineWidth = 2;
  ctx.globalAlpha = 0.6;
  ctx.beginPath();
  ctx.moveTo(100, 80);
  ctx.lineTo(1100, 80);
  ctx.stroke();
  ctx.globalAlpha = 1;
  
  // Main title
  ctx.font = 'bold 72px "Playfair Display", serif';
  ctx.fillStyle = colors.light;
  ctx.textAlign = 'center';
  ctx.fillText(config.mainTitle, 600, 160);
  
  // Sub title
  ctx.font = 'bold 64px "Playfair Display", serif';
  ctx.fillStyle = colors.gold;
  ctx.fillText(config.subTitle, 600, 240);
  
  // Description
  ctx.font = 'italic 28px "EB Garamond", serif';
  ctx.fillStyle = colors.lightMid;
  config.description.forEach((line, i) => {
    ctx.fillText(line, 600, 310 + (i * 40));
  });
  
  // Label
  ctx.font = '20px "Space Mono", monospace';
  ctx.fillStyle = colors.gold;
  ctx.fillText(`— ${config.label} —`, 600, 420);
  
  // Bottom line
  ctx.strokeStyle = colors.gold;
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.moveTo(100, 480);
  ctx.lineTo(1100, 480);
  ctx.stroke();
  ctx.globalAlpha = 1;
  
  // URL
  ctx.font = '16px "Space Mono", monospace';
  ctx.fillStyle = colors.lightDim;
  ctx.fillText(config.url, 600, 540);
  
  // Footer
  ctx.font = '14px "EB Garamond", serif';
  ctx.fillStyle = colors.dim;
  ctx.fillText(config.footer, 600, 580);
  
  return cnv.toBuffer('image/png');
}

console.log('🎨 Renderizando imagens PNG de alta qualidade...\n');

const imagesDir = 'images';
let count = 0;

sharecards.forEach(config => {
  try {
    const pngBuffer = renderImage(config);
    const filepath = path.join(imagesDir, `${config.file}.png`);
    fs.writeFileSync(filepath, pngBuffer);
    
    const sizeKb = (pngBuffer.length / 1024).toFixed(1);
    console.log(`✓ ${config.file}.png (${sizeKb}KB)`);
    count++;
  } catch (error) {
    console.log(`✗ ${config.file}.png - ${error.message}`);
  }
});

if (count === sharecards.length) {
  console.log(`\n✅ ${count} imagens PNG geradas com sucesso!\n`);
  console.log('📋 Próximas etapas:');
  console.log('   1. Verifique as imagens em /images/');
  console.log('   2. Faça commit: git add images/og-*.png');
  console.log('   3. Faça push: git push');
  console.log('   4. Teste no Facebook Debugger: https://developers.facebook.com/tools/debug/\n');
} else {
  console.log(`\n⚠️  Apenas ${count}/${sharecards.length} imagens foram geradas.`);
}
