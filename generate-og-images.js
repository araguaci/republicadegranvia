#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Função auxiliar para criar canvas como SVG
function generateSharecard(config) {
  const { mainTitle, subTitle, description, label, url, footer, filename } = config;
  
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
  
  <text x="600" y="160" font-family="Playfair Display, serif" font-size="72" font-weight="700" text-anchor="middle" fill="#e8e6e1" letter-spacing="2">
    ${mainTitle}
  </text>
  
  <text x="600" y="240" font-family="Playfair Display, serif" font-size="64" font-weight="700" text-anchor="middle" fill="url(#goldGradient)" letter-spacing="3">
    ${subTitle}
  </text>
  
  <text x="600" y="310" font-family="EB Garamond, serif" font-size="28" text-anchor="middle" fill="#c8c6c1" font-style="italic">
    ${description.split('\n')[0]}
  </text>
  
  ${description.split('\n')[1] ? `<text x="600" y="350" font-family="EB Garamond, serif" font-size="28" text-anchor="middle" fill="#c8c6c1" font-style="italic">
    ${description.split('\n')[1]}
  </text>` : ''}
  
  <text x="600" y="420" font-family="Space Mono, monospace" font-size="20" text-anchor="middle" fill="url(#goldGradient)" letter-spacing="4">
    — ${label} —
  </text>
  
  <line x1="100" y1="480" x2="1100" y2="480" stroke="url(#goldGradient)" stroke-width="1" opacity="0.4"/>
  
  <text x="600" y="540" font-family="Space Mono, monospace" font-size="16" text-anchor="middle" fill="#a8a6a1" letter-spacing="1">
    ${url}
  </text>
  
  <text x="600" y="580" font-family="EB Garamond, serif" font-size="14" text-anchor="middle" fill="#888682">
    ${footer}
  </text>
</svg>`;

  return svg;
}

// Dados de cada sharecard
const sharecards = [
  {
    mainTitle: 'A República',
    subTitle: 'de Granvia',
    description: 'Uma novela sobre poder, traição\ne o silêncio dos que deveriam falar',
    label: 'Ficção Política',
    url: 'republicadegranvia.vercel.app',
    footer: 'Sete capítulos · Sun Tzu · Maquiavel · Orwell · Gramsci',
    filename: 'og-sharecard.svg'
  },
  {
    mainTitle: 'Capítulo I',
    subTitle: 'O General e o Trono de Vidro',
    description: 'Em que um homem comum chega ao poder\ne o poder finge não ter medo dele',
    label: 'Sun Tzu — A Arte da Guerra',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia',
    filename: 'og-capitulo-1.svg'
  },
  {
    mainTitle: 'Capítulo II',
    subTitle: 'Os Cordeiros com Dentes',
    description: 'Em que os aliados se apresentam\ne a lealdade revela seu verdadeiro preço',
    label: 'Maquiavel — O Príncipe',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia',
    filename: 'og-capitulo-2.svg'
  },
  {
    mainTitle: 'Capítulo III',
    subTitle: 'A Noite da Esplanada',
    description: 'Em que o povo fiel é conduzido até o precipício\npor vozes que não estariam lá para ver a queda',
    label: 'Falsa bandeira',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia',
    filename: 'og-capitulo-3.svg'
  },
  {
    mainTitle: 'Capítulo IV',
    subTitle: 'A Tornozeleira e o Animal',
    description: 'Em que o mais forte dos homens\né apanhado no único momento em que é fraco',
    label: 'Maquiavel',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia',
    filename: 'og-capitulo-4.svg'
  },
  {
    mainTitle: 'Capítulo V',
    subTitle: 'O Tribunal dos Espelhos',
    description: 'Em que a verdade é reescrita nove vezes\naté que a nona sirva ao propósito',
    label: 'Orwell — 1984',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia',
    filename: 'og-capitulo-5.svg'
  },
  {
    mainTitle: 'Capítulo VI',
    subTitle: 'O Exílio Conveniente',
    description: 'Em que os que convocaram prosperam longe\ne os que atenderam pagam perto',
    label: 'Orwell — A Revolução dos Bichos',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia',
    filename: 'og-capitulo-6.svg'
  },
  {
    mainTitle: 'Capítulo VII',
    subTitle: 'Os Herdeiros do Caos',
    description: 'Em que os que administraram a derrota\ndescobrem que administraram também a própria',
    label: 'Gramsci',
    url: 'republicadegranvia.vercel.app',
    footer: 'A República de Granvia',
    filename: 'og-capitulo-7.svg'
  }
];

// Criar diretório images se não existir
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Gerar todos os sharecards
sharecards.forEach(config => {
  const svg = generateSharecard(config);
  const filepath = path.join(imagesDir, config.filename);
  fs.writeFileSync(filepath, svg, 'utf8');
  console.log(`✓ Criado: ${filepath}`);
});

console.log('\n✅ Todas as imagens SVG foram geradas!');
console.log('📝 Próximo passo: Converta os SVGs para PNG usando:');
console.log('   - Figma (recomendado)');
console.log('   - Inkscape (gratuito)');
console.log('   - Online converter');
