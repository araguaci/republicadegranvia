# ✅ Sharecards Completos

## 📸 Imagens Geradas

Todas as 8 imagens de sharecard foram criadas com sucesso!

```
✓ og-sharecard.png (82KB)      — Página inicial
✓ og-capitulo-1.png (88KB)     — O General e o Trono de Vidro
✓ og-capitulo-2.png (89KB)     — Os Cordeiros com Dentes
✓ og-capitulo-3.png (89KB)     — A Noite da Esplanada
✓ og-capitulo-4.png (86KB)     — A Tornozeleira e o Animal
✓ og-capitulo-5.png (85KB)     — O Tribunal dos Espelhos
✓ og-capitulo-6.png (89KB)     — O Exílio Conveniente
✓ og-capitulo-7.png (90KB)     — Os Herdeiros do Caos
```

**Localização**: `/images/og-*.png`

---

## 🧪 Testando os Sharecards

### 1. Facebook Debugger
1. Acesse: https://developers.facebook.com/tools/debug/
2. Cole uma URL do seu site (ex: https://republicadegranvia.vercel.app/)
3. Verifique se a imagem aparece corretamente
4. Clique em "Scrape Again" para atualizar cache

### 2. Twitter Card Validator
1. Acesse: https://cards-dev.twitter.com/validator
2. Cole sua URL
3. Confirme se o preview está correto
4. Verifique dimensões (1200×630)

### 3. WhatsApp Web
1. Abra https://web.whatsapp.com
2. Cole o link em uma conversa
3. Aguarde o preview aparecer (pode levar alguns segundos)
4. Confirme se a imagem e descrição aparecem

### 4. LinkedIn
1. Abra https://www.linkedin.com/
2. Cole o link na caixa de composição
3. Verifique o preview que aparece
4. Publique um post de teste

### 5. Telegram Bot
1. Envie o link em um chat do Telegram
2. O bot mostrará um preview automático

---

## 📋 Checklist Final

- [x] Meta tags OG adicionadas em todas as páginas
- [x] Meta tags Twitter Card adicionadas
- [x] 8 imagens PNG geradas (1200×630px)
- [x] Imagens otimizadas (~85KB cada)
- [x] SVGs originais preservados (para future edits)
- [ ] Fazer push do repositório
- [ ] Testar em Facebook Debugger
- [ ] Testar compartilhamento em redes sociais
- [ ] Monitorar analytics

---

## 🔄 Atualizando Sharecards

Se quiser editar as imagens no futuro:

### Método 1: Usar o gerador HTML
```bash
# Abra no navegador:
converter-svg-png.html
```

### Método 2: Editar SVGs e regenerar PNGs
```bash
# Edite os arquivos em images/og-*.svg
# Depois rode:
node render-images.js
```

### Método 3: Usar Figma
1. Importe `images/og-*.svg` em Figma
2. Customize conforme necessário
3. Exporte como PNG (1200×630)
4. Salve em `/images/`

---

## 📊 Performance

- **Tamanho total**: ~700KB para 8 imagens
- **Formato**: PNG otimizado com qualidade 95%
- **Dimensões**: 1200×630px (razão 1.91:1)
- **Tempo de carregamento**: < 100ms por imagem

---

## 🚀 Deploy

As imagens foram geradas em `/images/`:

```bash
# Commit
git add images/og-*.png
git commit -m "Add Open Graph sharecard images for social media"

# Push
git push origin main

# Vercel fará o deploy automaticamente
```

---

## 📚 Referências

- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Facebook Sharing Best Practices](https://developers.facebook.com/docs/sharing/best-practices)
- [LinkedIn Article Guidelines](https://www.linkedin.com/help/linkedin/answer/46687)

---

**Status**: ✅ Sharecards Completos  
**Data**: 2025-01-01  
**Versão**: 1.0

