# 📸 Open Graph Sharecard Guide

## Implementação Completa ✅

Todas as meta tags Open Graph foram adicionadas ao seu site para otimizar compartilhamentos em redes sociais.

### Arquivos Atualizados

- ✅ `index.html` — Página inicial com OG completo
- ✅ `capitulos/capitulo-1.html` — O General e o Trono de Vidro
- ✅ `capitulos/capitulo-2.html` — Os Cordeiros com Dentes  
- ✅ `capitulos/capitulo-3.html` — A Noite da Esplanada
- ✅ `capitulos/capitulo-4.html` — O Tribunal dos Espelhos
- ✅ `capitulos/capitulo-5.html` — A Tornozeleira e o Animal
- ✅ `capitulos/capitulo-6.html` — O Exílio Conveniente
- ✅ `capitulos/capitulo-7.html` — Os Herdeiros do Caos

---

## Meta Tags Implementadas

### Open Graph (Facebook, LinkedIn, WhatsApp)
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:type" content="book|article">
<meta property="og:image" content="...">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:url" content="...">
<meta property="og:site_name" content="A República de Granvia">
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="...">
```

### Article Metadata
```html
<meta property="article:author" content="Araguaci Carlos de Andrade">
<meta property="article:published_time" content="2025-01-01">
<meta property="article:section" content="Ficção Política">
```

---

## 🎨 Gerando as Imagens de Sharecard

### Opção 1: Usar o Gerador HTML (Recomendado)

1. Abra `/og-generator.html` em seu navegador
2. Customize os campos conforme o conteúdo
3. Clique em "Gerar Imagem"
4. Clique em "Baixar como PNG"
5. Salve em `/images/og-*.jpg`

### Opção 2: Usar a Template SVG

Abra `/images/og-sharecard.svg` em um editor gráfico (Figma, Adobe XD, Illustrator) e exporte como PNG em 1200x630px.

### Especificações de Imagem

- **Dimensões**: 1200×630 pixels (razão 1.91:1)
- **Formato**: JPG (melhor compressão) ou PNG
- **Tamanho máximo**: ~300KB (recomendado: <100KB)
- **Localização**: `/images/og-*.jpg`

---

## 📋 Checklist de Sharecards

Crie uma imagem para cada página:

### Página Principal
- [ ] `images/og-sharecard.jpg` — Homepage
- Referência: O layout deve destacar o título principal e a subtítulo

### Capítulos
- [ ] `images/og-capitulo-1.jpg` — O General e o Trono de Vidro
- [ ] `images/og-capitulo-2.jpg` — Os Cordeiros com Dentes
- [ ] `images/og-capitulo-3.jpg` — A Noite da Esplanada
- [ ] `images/og-capitulo-4.jpg` — A Tornozeleira e o Animal
- [ ] `images/og-capitulo-5.jpg` — O Tribunal dos Espelhos
- [ ] `images/og-capitulo-6.jpg` — O Exílio Conveniente
- [ ] `images/og-capitulo-7.jpg` — Os Herdeiros do Caos

---

## 🧪 Testando os Sharecards

### Facebook Debugger
1. Acesse: https://developers.facebook.com/tools/debug/
2. Cole sua URL
3. Verifique se os metadados aparecem corretamente

### Twitter Card Validator
1. Acesse: https://cards-dev.twitter.com/validator
2. Cole sua URL
3. Confirme se o card preview é exibido

### LinkedIn URL Inspector
1. Acesse: https://www.linkedin.com/feed/
2. Cole o link na caixa de composição
3. Aguarde preview e ajuste se necessário

### Preview Local
```bash
# Se quiser testar localmente, você pode usar:
# (Compartilhe via WhatsApp Web ou Telegram Bot para testar links)
```

---

## 📐 Dimensões Recomendadas por Rede

| Rede | Dimensão | Taxa | Notas |
|------|----------|------|-------|
| Facebook | 1200x630 | 1.91:1 | Padrão recomendado |
| Twitter | 1200x630 | 1.91:1 | Mesmo padrão |
| LinkedIn | 1200x627 | 1.91:1 | Muito similar |
| WhatsApp | 1200x630 | 1.91:1 | USA a OG |
| Pinterest | 1000x1500 | 2:3 | (Opcional) |

---

## 🎯 Melhores Práticas

### Titles (og:title)
- ✅ Máximo 60 caracteres idealmente
- ✅ Inclua o número do capítulo
- ✅ Seja descritivo e intrigante

### Descriptions (og:description)
- ✅ Máximo 160 caracteres
- ✅ Inclua a referência intelectual
- ✅ Crie curiosidade sem spoilers

### Images (og:image)
- ✅ Logo/marca no canto
- ✅ Tipografia clara e legível
- ✅ Alto contraste (fundo escuro, texto claro)
- ✅ Sem texto muito pequeno
- ✅ Mantenha a identidade visual

---

## 🔧 Estrutura de Cores (já configurada)

```css
/* Baseado no seu design */
Dark Background: #0a0a0a → #1a1515
Gold Accent: #d4a574 → #a67c52
Light Text: #e8e6e1
Medium Text: #c8c6c1
Dim Text: #a8a6a1
```

---

## 📱 Exemplo de Sharecard

```
┌─────────────────────────────────┐
│  A República de Granvia         │
│                                 │
│  Uma novela sobre poder,        │
│  traição e o silêncio dos       │
│  que deveriam falar             │
│                                 │
│  — Ficção Política —            │
│                                 │
│  republicadegranvia.vercel.app  │
│  Sun Tzu · Maquiavel · Orwell   │
└─────────────────────────────────┘
```

---

## 🚀 Deploy Final

Após criar as imagens:

1. Coloque todos os JPGs em `/images/`
2. Confirme os nomes correspondem aos meta tags
3. Teste com o Facebook Debugger
4. Faça push para o repositório
5. Aguarde o Vercel redeployar

---

## 📚 Referências

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [LinkedIn Documentation](https://www.linkedin.com/help/linkedin/answer/46687)

---

**Status**: ✅ Meta tags implementadas em todas as páginas  
**Próximo passo**: Gerar e fazer upload das imagens de sharecard

