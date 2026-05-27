# Site Touti Perfumes - Americana Shopping

Este pacote contém a landing page criada para a promoção da Touti Perfumes.

## Objetivo

Criar um link/site de venda simples, direto e chique para levar a pessoa ao WhatsApp da loja.

## Oferta atual

- Promoção: **pague 4 e leve 5**
- Preço: **5 perfumes por R$199,90**
- Benefício principal: **1 perfume grátis no kit**
- Local citado: **Touti Americana Shopping**

## WhatsApp usado

- Número: **+55 19 98919-1311**
- Link gerado pelo site:
  `https://wa.me/5519989191311`

Mensagem automática configurada:

```text
Oi! Vi a promoção da Touti Americana Shopping: pague 4 e leve 5 perfumes por R$199,90. Quero montar meu kit com 1 perfume grátis. Quais fragrâncias estão disponíveis?
```

## Direção visual pedida

A versão final foi ajustada para um estilo mais chique/premium:

- Fundo preto
- Detalhes champagne/dourado
- Produto grande em destaque
- Copy curta e comercial
- Sem textos com cara de explicação interna ou "site feito por IA"
- Sem botão de copiar mensagem
- WhatsApp como ação principal

## Textos principais da página

Headline:

```text
Leve 5 perfumes Touti por R$199,90.
```

Subtexto:

```text
Você paga 4 e ganha o 5º perfume no kit. Escolha entre as linhas VIP, LUX, SPA e FIT direto com a loja do Americana Shopping.
```

Fechamento:

```text
Promoção por tempo limitado.
Garanta 5 perfumes Touti por R$199,90 enquanto houver estoque.
```

## Arquivos do site

- `index.html`: estrutura da página
- `styles.css`: visual, responsivo e estilo chique
- `script.js`: configura o link do WhatsApp com mensagem pronta
- `assets/touti-produtos-hero.png`: imagem principal dos perfumes
- `assets/touti-lifestyle-fit.mp4`: vídeo curto usado na seção de experiência
- `assets/touti-lifestyle-poster.jpg`: poster/capa do vídeo
- `assets/touti-whatsapp-qr.png`: QR/Lnk.Bio usado como referência para confirmar o contato
- `previews/touti-chique-desktop-v2.png`: screenshot desktop da última versão
- `previews/touti-chique-mobile-v2.png`: screenshot mobile da última versão
- `originais/`: arquivos reais enviados/usados como base ou referência

## Arquivos originais usados como fonte

Imagem principal:

```text
C:\Users\Kethely\Downloads\touti perfumes\3b57ddc4-a46c-4070-b264-7f6d5c7903c2.png
```

Vídeo usado para recorte:

```text
C:\Users\Kethely\Downloads\touti perfumes\video MUITO BOm.mp4
```

QR/Lnk.Bio consultado para achar o WhatsApp:

```text
C:\Users\Kethely\Downloads\touti perfumes\LnkBioQr.png
```

O QR apontava para:

```text
https://lnk.bio/toutiperfumes
```

Também foi encontrada uma arte local confirmando o número:

```text
C:\Users\Kethely\Downloads\touti perfumes\anuncios\touti americana fixo.png
```

Esses arquivos foram copiados para a pasta `originais/` dentro do pacote:

- `originais/3b57ddc4-a46c-4070-b264-7f6d5c7903c2.png`
- `originais/1.png`
- `originais/touti-kickstart-oferta-12s.mp4`
- `originais/video MUITO BOm.mp4`
- `originais/LnkBioQr.png`
- `originais/touti americana fixo.png`

## Verificações feitas

Foram gerados screenshots finais:

- Desktop: `output/playwright/touti-chique-desktop-v2.png`
- Mobile: `output/playwright/touti-chique-mobile-v2.png`

Também foi verificado que não sobraram textos antigos como:

- "pague 3"
- "leve 4"
- "4 perfumes"
- "copiar mensagem"
- frases com cara de explicação interna

## Como abrir em outro lugar

Opção simples:

1. Extraia o ZIP.
2. Abra o arquivo `index.html` no navegador.

Opção recomendada para testar como site:

```powershell
python -m http.server 4173
```

Depois abra:

```text
http://127.0.0.1:4173/
```

## Observação importante

Se o número de WhatsApp, valor da promoção ou quantidade de perfumes mudar, edite:

- `index.html`: textos visíveis
- `script.js`: mensagem automática do WhatsApp
