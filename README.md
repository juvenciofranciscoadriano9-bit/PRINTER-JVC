# PRINTER JVC — Website

Site institucional da **PRINTER JVC** — impressão, design gráfico e estampagem/personalização em Alua.

> "Impressão que dá vida às suas ideias"

## 📁 Estrutura do projeto

```
PRINTER-JVC/
├── index.html                 → Página inicial (com FAQ)
├── manifest.webmanifest       → Manifesto PWA (ícone, nome, cores)
├── pages/
│   ├── servicos.html          → Lista de serviços
│   ├── estampagem.html        → Personalização de produtos
│   ├── portfolio.html         → Galeria de trabalhos (com filtros e lightbox com navegação)
│   ├── sobre.html             → Sobre a empresa
│   ├── orcamento.html         → Formulário de orçamento → WhatsApp
│   └── contacto.html          → Contactos, Facebook, "Como chegar" e FAQ
├── css/
│   ├── style.css              → Tokens de cor/tipografia, reset, header, footer, botões
│   ├── components.css         → Hero, cartões, formulários, portfólio, FAQ, lightbox
│   └── responsive.css         → Breakpoints (tablet e telemóvel)
├── js/
│   ├── main.js                → Configuração global (PRINTER_JVC), ícones SVG, renderização
│   │                             de cartões/FAQ, dados estruturados (Schema.org)
│   ├── menu.js                → Menu hamburger + destaque do link ativo
│   ├── portfolio.js           → Filtros, galeria e lightbox (com navegação anterior/seguinte)
│   ├── orcamento.js           → Validação (incl. ficheiro) e envio do formulário → WhatsApp
│   └── whatsapp.js            → Botão flutuante + envio de mensagens para o WhatsApp
├── data/
│   ├── servicos.js            → Lista de serviços (fonte única de dados)
│   ├── produtos.js            → Lista de produtos de estampagem
│   ├── portfolio.js           → Itens do portfólio
│   └── faq.js                 → Perguntas frequentes (usado em Início e Contacto)
├── assets/
│   ├── logo/                  → Logótipo (com e sem fundo), favicon e apple-touch-icon
│   └── images/                → Fotografias reais fornecidas pela empresa
├── robots.txt                 → Indicações para motores de busca
├── sitemap.xml                → Mapa do site para SEO
├── 404.html                   → Página de erro personalizada
└── README.md
```

## 🗂️ Revisão completa — resumo das alterações

Esta revisão trabalhou sobre o projeto existente (sem recomeçar do zero) para
corrigir lacunas e completar funcionalidades. Nada do que já funcionava foi
removido, e nenhum dado da empresa foi inventado.

**Ficheiros novos:**
- `data/faq.js` — perguntas/respostas movidas para um único sítio (antes só existiam,
  escritas à mão, em `contacto.html`); agora também aparecem na página inicial.
- `manifest.webmanifest` — permite "adicionar à página inicial" no telemóvel.

**Funcionalidades adicionadas:**
- Link do Facebook oficial da PRINTER JVC — antes não existia em lado nenhum do
  site; agora está no rodapé de todas as páginas e num cartão dedicado em Contacto.
- Secção de Perguntas Frequentes na página inicial (reaproveitando `data/faq.js`).
- Botão "Como chegar" (abre direções no Google Maps) em Contacto.
- Botão de Email em Contacto — **fica automaticamente oculto** enquanto a
  PRINTER JVC não fornecer um endereço oficial (ver `js/main.js`, campo
  `PRINTER_JVC.email`). Assim que o endereço existir, basta preenchê-lo lá.
- Formulário de Orçamento: campos novos de **Email** (opcional), **Produto**
  (lista dos mesmos produtos de estampagem), **Prazo desejado** e **Observações**.
- Validação de ficheiro no formulário de Orçamento: tipo (imagem/PDF/Word) e
  tamanho máximo (8 MB), com aviso claro se o ficheiro escolhido não for aceite.
- Navegação entre imagens no lightbox do Portfólio (setas na tela, teclado ← →,
  e foco devolvido ao elemento anterior ao fechar — acessibilidade).
- Dados estruturados Schema.org (`LocalBusiness`, `Service`, `FAQPage`), gerados
  dinamicamente a partir dos mesmos dados reais já usados no site (contacto,
  serviços, FAQ) — ajuda a aparecer melhor no Google.

**Problemas corrigidos:**
- Nenhuma referência ao Facebook da empresa em todo o site.
- FAQ existia só em Contacto, não na Home (onde o pedido original também a queria).
- Formulário de Orçamento aceitava qualquer ficheiro sem validar tipo/tamanho.
- Lightbox do Portfólio não tinha forma de ver o item seguinte/anterior sem fechar.
- Focus management incompleto no lightbox (o foco não regressava ao botão que o abriu).

## 🧩 Dados que ainda precisam de ser fornecidos pela PRINTER JVC

- **Email oficial da empresa** — deixado como `null` em `js/main.js`
  (`PRINTER_JVC.email`); os botões de email aparecem sozinhos assim que for preenchido.
- **Morada completa** (código postal/referência, se existir) — atualmente só
  "Rua do Bairro Central, Alua".
- **Domínio definitivo** — substituir `https://www.printerjvc.co.mz` em
  `robots.txt`, `sitemap.xml` e nas meta tags `canonical`/`og:*`/`twitter:*`.

## ⚙️ Funcionalidades que dependem de backend (fora do âmbito deste site estático)

Este site é 100% estático (HTML/CSS/JS, sem servidor). Para os pontos abaixo,
seria necessário desenvolver um backend (ex.: Node.js/PHP + base de dados):

- **Envio automático de ficheiros anexados** — hoje o utilizador tem de anexar o
  ficheiro manualmente no WhatsApp depois de o formulário abrir a conversa,
  porque o link `wa.me` não permite anexar ficheiros por programação.
- **Painel administrativo (`/admin`)** — dashboard, gestão de produtos, serviços,
  portfólio, pedidos, clientes e configurações. Precisaria de autenticação,
  base de dados e uma API.
- **Sistema de pedidos com estados** (Novo → Em análise → Orçamento enviado →
  Aprovado → Em produção → Pronto → Entregue → Cancelado) — hoje os pedidos só
  existem como mensagens de WhatsApp; para os "guardar" e mudar de estado seria
  necessário uma base de dados.
- Se decidirem avançar com isto no futuro, os dados já centralizados em
  `js/main.js` (`PRINTER_JVC`) e em `data/*.js` facilitam a transição — bastaria
  passar a carregá-los de uma API em vez de ficheiros estáticos.



## 🔧 Melhorias de funcionamento incluídas

- **SEO e partilha em redes sociais**: cada página tem `title`/`description` próprios,
  link `canonical`, e meta tags Open Graph / Twitter Card (para quando o link for
  partilhado no Facebook, WhatsApp ou Instagram, aparece com título, descrição e o
  logótipo da empresa).
- **`robots.txt` e `sitemap.xml`**: prontos a usar — só é preciso substituir
  `https://www.printerjvc.co.mz` pelo domínio real assim que o site for publicado
  (procure por esse endereço nos dois ficheiros).
- **Página 404 personalizada** (`404.html`), com a mesma identidade visual do site,
  para quando alguém aceder a um link inválido. Usa caminhos absolutos (`/css/...`,
  `/assets/...`), pelo que só funciona corretamente quando o site está publicado na
  raiz do domínio (não ao abrir o ficheiro localmente).
- **Botão "voltar ao topo"**, que aparece automaticamente ao rolar a página.
- **Imagens otimizadas**: `loading="lazy"` nas imagens fora do topo da página (carregam
  só quando o utilizador se aproxima delas) e dimensões declaradas para evitar saltos
  de layout enquanto a página carrega.
- **Acessibilidade**: estados `aria-hidden`/`aria-expanded` no menu mobile, o pop-up do
  portfólio (lightbox) identificado como janela de diálogo para leitores de ecrã, e
  campos do formulário com `autocomplete`/`inputmode` para preenchimento mais rápido
  em telemóvel.

## ✏️ Como editar conteúdo (sem tocar no código)

O site foi feito para que consigas atualizar o conteúdo mais comum apenas editando os
ficheiros dentro de `data/` — sem precisar de mexer em HTML ou CSS.

- **Adicionar/editar um serviço** → abre `data/servicos.js` e edita ou copia um bloco `{ ... }`.
- **Adicionar/editar um produto de estampagem** → `data/produtos.js`.
- **Adicionar um trabalho ao portfólio** → `data/portfolio.js`. Quando tiveres a foto real de
  um trabalho, podes substituir o ícone por uma imagem (ver comentário no topo do ficheiro).
- **Editar uma pergunta frequente** → `data/faq.js` (usado na página inicial e em Contacto).
- **Números de WhatsApp, morada, horário, Facebook e email** → estão centralizados no topo de
  `js/main.js`, dentro do objeto `PRINTER_JVC`. O campo `email` está vazio (`null`) — assim que
  a PRINTER JVC tiver um endereço oficial, basta escrevê-lo aí que os botões de email aparecem
  automaticamente no site.
- **Logótipo** → substitui os ficheiros em `assets/logo/` mantendo os mesmos nomes.

## 🖼️ Sobre as imagens

- O logótipo foi tratado a partir do ficheiro original (fundo removido) e guardado em
  `assets/logo/logo.png` e `assets/logo/logo-symbol.png`.
- As fotografias em `assets/images/hero/` e `assets/images/estampagem/` foram recortadas dos
  materiais promocionais reais fornecidos pela PRINTER JVC.
- Os cartões do Portfólio usam agora as fotografias reais dos trabalhos, guardadas em
  `assets/images/portfolio/` e referenciadas pelo campo `imagem` de cada item em
  `data/portfolio.js`. Para trocar uma foto, basta substituir o ficheiro (mantendo o
  nome) ou apontar `imagem` para um novo caminho; se um item não tiver `imagem`, volta
  a usar o ícone SVG como reserva.

## 📱 WhatsApp

Os dois números de contacto (873 674 154 e 856 612 403) estão configurados para abrir
conversas diretas via `wa.me`, tanto no botão flutuante como nos botões "Pedir Orçamento" e
no formulário de orçamento (que monta automaticamente uma mensagem com os dados preenchidos).

> Nota: por limitação técnica do link `wa.me`, não é possível anexar automaticamente um
> ficheiro à mensagem — o utilizador é avisado no formulário para anexar o ficheiro
> manualmente assim que a conversa abrir no WhatsApp.

## 📦 Dependências

Este projeto **não precisa de instalação nenhuma** (sem `npm install`, sem build, sem
frameworks) — é HTML, CSS e JavaScript puro. Basta abrir `index.html` ou publicar a
pasta tal como está.

As únicas dependências são de **serviços externos**, carregados diretamente no
navegador de quem visita o site (por isso precisam de ligação à internet do lado do
visitante, não do servidor):

| Serviço | Onde é usado | Se não houver internet |
|---|---|---|
| Google Fonts (Poppins, Inter, Caveat) | `@import` no topo de `css/style.css` | O navegador usa as alternativas já definidas (`sans-serif` / `cursive`) |
| Google Maps (mapa incorporado e botão "Como chegar") | `iframe` e link em `pages/contacto.html` | O mapa não carrega/o botão não abre; o resto da página funciona normalmente |
| WhatsApp (`wa.me`) | Botões de contacto e formulário de orçamento | Os links só funcionam com o WhatsApp instalado/acessível |

Não há nenhuma biblioteca JavaScript externa (nada de jQuery, React, Bootstrap, etc.) —
os ícones são todos SVG escritos diretamente no código, em `js/main.js`.

## 🚀 Como publicar

O site é 100% estático (HTML, CSS e JS puro, sem necessidade de build ou servidor). Para
publicar, basta:

1. Copiar toda a pasta `PRINTER-JVC/` para o serviço de alojamento (cPanel, Netlify, Vercel,
   GitHub Pages, etc.);
2. Garantir que `index.html` fica na raiz do domínio;
3. Substituir `https://www.printerjvc.co.mz` pelo domínio real em `robots.txt`,
   `sitemap.xml` e nas meta tags `canonical`/`og:*`/`twitter:*` de cada página HTML
   (usar "localizar e substituir" no editor de código poupa tempo aqui);
4. Pronto — todos os caminhos entre HTML, CSS, JS e imagens são relativos e já estão
   preparados para funcionar tal como estão.

Também podes simplesmente abrir `index.html` diretamente no navegador para testar localmente.

## 🎨 Identidade visual

- **Azul** (`#0057B8` / `#2E9DF7`) — do gradiente do "J" do logótipo
- **Preto/cinza-chumbo** (`#1E2126`) — do traço "VC" do logótipo
- **Branco** — fundo principal
- **Amarelo** (`#FFC93C`) — destaque pontual, como nos materiais promocionais originais
- **Tipografia**: Poppins (títulos), Inter (texto corrido), Caveat (pequenos toques manuscritos)
