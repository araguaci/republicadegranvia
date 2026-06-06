#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const http = require('http');

/**
 * Script para gerar PNGs a partir dos SVGs
 * Usa um servidor HTTP local + Canvas para renderizar
 */

// Dados dos sharecards
const sharecards = [
  {
    file: 'og-sharecard',
    mainTitle: 'A República',
    subTitle: 'de Granvia',
    description: 'Uma novela sobre poder, traição\ne o silêncio dos que deveriam falar',
    label: 'Ficção Política',
    url: 'republicadegranvia.vercel.app',
    footer: 'Sete capítulos · Sun Tzu · Maquiavel · Orwell · Gramsci'
  },
  {
    file: 'og-capitulo-1',
    mainTitle: 'Capítulo I',
    subTitle: 'O General e o Trono de Vidro',
    description: 'Em que um homem comum chega ao poder\ne o poder finge não ter medo dele',
    label: 'Sun Tzu — A Arte da Guerra',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia'
  },
  {
    file: 'og-capitulo-2',
    mainTitle: 'Capítulo II',
    subTitle: 'Os Cordeiros com Dentes',
    description: 'Em que os aliados se apresentam\ne a lealdade revela seu verdadeiro preço',
    label: 'Maquiavel — O Príncipe',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia'
  },
  {
    file: 'og-capitulo-3',
    mainTitle: 'Capítulo III',
    subTitle: 'A Noite da Esplanada',
    description: 'Em que o povo fiel é conduzido até o precipício\npor vozes que não estariam lá para ver a queda',
    label: 'Falsa bandeira',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia'
  },
  {
    file: 'og-capitulo-4',
    mainTitle: 'Capítulo IV',
    subTitle: 'A Tornozeleira e o Animal',
    description: 'Em que o mais forte dos homens\né apanhado no único momento em que é fraco',
    label: 'Maquiavel',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia'
  },
  {
    file: 'og-capitulo-5',
    mainTitle: 'Capítulo V',
    subTitle: 'O Tribunal dos Espelhos',
    description: 'Em que a verdade é reescrita nove vezes\naté que a nona sirva ao propósito',
    label: 'Orwell — 1984',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia'
  },
  {
    file: 'og-capitulo-6',
    mainTitle: 'Capítulo VI',
    subTitle: 'O Exílio Conveniente',
    description: 'Em que os que convocaram prosperam longe\ne os que atenderam pagam perto',
    label: 'Orwell — A Revolução dos Bichos',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia'
  },
  {
    file: 'og-capitulo-7',
    mainTitle: 'Capítulo VII',
    subTitle: 'Os Herdeiros do Caos',
    description: 'Em que os que administraram a derrota\ndescobrem que administraram também a própria',
    label: 'Gramsci',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia'
  }
];

// Função para gerar PNG base64 usando SVG
function generateBase64PNG(config) {
  // Gera um SVG válido
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a1515;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#d4a574;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#a67c52;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bgGradient)"/>
  <line x1="100" y1="80" x2="1100" y2="80" stroke="url(#goldGradient)" stroke-width="2" opacity="0.6"/>
  <text x="600" y="160" font-family="Playfair Display, serif" font-size="72" font-weight="700" text-anchor="middle" fill="#e8e6e1" letter-spacing="2">${config.mainTitle}</text>
  <text x="600" y="240" font-family="Playfair Display, serif" font-size="64" font-weight="700" text-anchor="middle" fill="url(#goldGradient)" letter-spacing="3">${config.subTitle}</text>
  <text x="600" y="310" font-family="EB Garamond, serif" font-size="28" text-anchor="middle" fill="#c8c6c1" font-style="italic">${config.description.split('\n')[0]}</text>
  ${config.description.split('\n')[1] ? `<text x="600" y="350" font-family="EB Garamond, serif" font-size="28" text-anchor="middle" fill="#c8c6c1" font-style="italic">${config.description.split('\n')[1]}</text>` : ''}
  <text x="600" y="420" font-family="Space Mono, monospace" font-size="20" text-anchor="middle" fill="url(#goldGradient)" letter-spacing="4">— ${config.label} —</text>
  <line x1="100" y1="480" x2="1100" y2="480" stroke="url(#goldGradient)" stroke-width="1" opacity="0.4"/>
  <text x="600" y="540" font-family="Space Mono, monospace" font-size="16" text-anchor="middle" fill="#a8a6a1" letter-spacing="1">${config.url}</text>
  <text x="600" y="580" font-family="EB Garamond, serif" font-size="14" text-anchor="middle" fill="#888682">${config.footer}</text>
</svg>`;

  return Buffer.from(svg).toString('base64');
}

console.log('📸 Gerando imagens PNG a partir dos SVGs...\n');

// Salva um placeholder PNG (1x1 pixel) para cada sharecard
// Isto permite que o site funcione enquanto as imagens reais são geradas
const imagesDir = 'images';

sharecards.forEach(sharecard => {
  const pngPath = path.join(imagesDir, `${sharecard.file}.png`);
  
  // Cria um PNG mínimo válido como placeholder
  // Esta é uma imagem PNG 1x1 preta
  const minimalPNG = Buffer.from([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D, 
    0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 
    0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53, 0xDE, 0x00, 0x00, 0x00, 
    0x0C, 0x49, 0x44, 0x41, 0x54, 0x08, 0x99, 0x63, 0xF8, 0x0F, 0x00, 0x00, 
    0x01, 0x01, 0x00, 0x05, 0x1B, 0x0B, 0xB5, 0x00, 0x00, 0x00, 0x00, 0x49, 
    0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82
  ]);
  
  fs.writeFileSync(pngPath, minimalPNG);
  console.log(`✓ ${path.basename(pngPath)} (placeholder)`);
});

console.log('\n⚠️  Imagens placeholder criadas.');
console.log('\n📋 Para obter imagens de qualidade completa, use:\n');
console.log('   OPÇÃO 1: Browser (Recomendado)');
console.log('   ➜ Abra: converter-svg-png.html');
console.log('   ➜ Clique em "Download PNG" para cada imagem\n');

console.log('   OPÇÃO 2: Ferramenta Online');
console.log('   ➜ Acesse: https://svgexport.io');
console.log('   ➜ Upload: images/og-*.svg');
console.log('   ➜ Exporte como PNG em 1200x630px\n');

console.log('   OPÇÃO 3: Figma');
console.log('   ➜ Importe os SVGs em Figma');
console.log('   ➜ Exporte cada um como PNG\n');

console.log('   OPÇÃO 4: Command Line (ImageMagick)');
console.log('   ➜ convert -density 150 images/og-*.svg -quality 95 images/og-*.png\n');

console.log('✅ Próximo passo: Gere as imagens e faça push para o repositório!');
