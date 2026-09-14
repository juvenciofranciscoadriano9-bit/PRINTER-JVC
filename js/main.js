/* ============================================================
   PRINTER JVC — js/main.js
   Configuração global, biblioteca de ícones e renderização
   de componentes a partir dos ficheiros em /data.
   Carregar este ficheiro em TODAS as páginas, depois dos
   ficheiros de dados (data/*.js) e antes dos scripts específicos.
   ============================================================ */

/* ---------- Configuração central do negócio ----------
   Fonte única de dados de contacto/identidade da empresa.
   Para atualizar WhatsApp, morada, horário, Facebook ou email,
   basta editar os valores aqui — todo o site lê a partir daqui. */
const PRINTER_JVC = {
  nomes: {
    empresa: "PRINTER JVC",
    slogan: "Impressão que dá vida às suas ideias"
  },
  whatsapp: [
    { numero: "258873674154", visivel: "873 674 154" },
    { numero: "258856612403", visivel: "856 612 403" }
  ],
  /* Email: ainda não foi fornecido pela PRINTER JVC.
     Assim que existir um endereço oficial, preencher aqui
     (ex.: "geral@printerjvc.co.mz") — os botões de email
     no site aparecem automaticamente quando este valor deixar
     de ser null. */
  email: null,
  localizacao: "Rua do Bairro Central, Alua",
  /* Usado tanto no mapa incorporado como no botão "Como chegar" */
  localizacaoMapaQuery: "Alua, Moçambique",
  horario: "Segunda a Sábado · 08h00 – 18h00",
  facebook: "https://www.facebook.com/profile.php?id=61582956533700"
};
if (typeof window !== "undefined") window.PRINTER_JVC = PRINTER_JVC;

/* Devolve um link wa.me pronto a abrir, com mensagem opcional */
function linkWhatsApp(numero, mensagem) {
  const base = `https://wa.me/${numero}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}
if (typeof window !== "undefined") window.linkWhatsApp = linkWhatsApp;

/* ============================================================
   BIBLIOTECA DE ÍCONES (SVG em linha, sem dependências externas)
   ============================================================ */
const ICONS = {
  copiadora: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="9" rx="1.5"/><path d="M8 8V4h8v4"/><path d="M8 21h8v-4H8v4Z"/><circle cx="16" cy="11.5" r=".6" fill="currentColor" stroke="none"/></svg>',
  escudo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/><path d="M9 12l2 2 4-4"/></svg>',
  teclado: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01M7 14h10"/></svg>',
  caneta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l4-1 11-11-3-3L5 16l-1 4Z"/><path d="M14 6l3 3"/></svg>',
  flyer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  social: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 13c1 1.4 2.3 2 4 2s3-.6 4-2"/><path d="M9 9h.01M15 9h.01"/></svg>',
  cracha: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="7" width="12" height="15" rx="2"/><circle cx="12" cy="13" r="2.2"/><path d="M9 18.5c.6-1.2 1.7-1.8 3-1.8s2.4.6 3 1.8"/><path d="M9 7V5a3 3 0 0 1 6 0v2"/></svg>',
  idcard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="8.5" cy="11.5" r="1.8"/><path d="M6 16c.4-1.3 1.3-2 2.5-2s2.1.7 2.5 2"/><path d="M14 10h5M14 13h5"/></svg>',
  tesoura: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.3"/><circle cx="6" cy="18" r="2.3"/><path d="M7.8 7.6 19 18M7.8 16.4 19 6"/></svg>',
  estrela: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.5Z"/></svg>',
  camisa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4 4 7l2 3 2-1v11h8V9l2 1 2-3-4-3-2 2h-2L8 4Z"/></svg>',
  caneca: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 6h10v10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6Z"/><path d="M15 8h2a2.5 2.5 0 0 1 0 5h-2"/></svg>',
  copo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h10l-1.2 15a1.5 1.5 0 0 1-1.5 1.3H9.7A1.5 1.5 0 0 1 8.2 19L7 4Z"/><path d="M7.6 9h8.8"/></svg>',
  bone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14c0-4.4 3.6-8 8-8s8 3.6 8 8"/><path d="M4 14h13.5a2.5 2.5 0 0 0 0-5"/><path d="M12 6V4"/></svg>',
  garrafa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2h4v3l1.5 2v13a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V7L10 5V2Z"/><path d="M9 12h6"/></svg>',
  saco: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l-1 12.5a1.5 1.5 0 0 1-1.5 1.5h-7a1.5 1.5 0 0 1-1.5-1.5L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
  uniforme: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4 5 6.5 6.5 10 9 8.5V20h6V8.5l2.5 1.5L19 6.5 15 4l-1.5 1.5h-3L9 4Z"/><circle cx="12" cy="13" r="1.6"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2.02c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.4 1.26 4.83L2 22l5.32-1.28a9.9 9.9 0 0 0 4.72 1.2h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04a9.9 9.9 0 0 0-7.05-2.9Zm0 18.18h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.15.76.75-3.07-.2-.31a8.22 8.22 0 1 1 7.09 3.94Zm4.5-6.15c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.37-1.7-.14-.24-.02-.37.11-.5.11-.11.25-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.71 2.6 4.14 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>',
  location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4M8 8l4-4 4 4"/><path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c.7-3.2 3-5 6-5s5.3 1.8 6 5"/><path d="M16 4.5c1.4.4 2.4 1.7 2.4 3.2S17.4 10.5 16 11"/><path d="M18.5 15.3c1.7.6 2.9 2.2 3.5 4.7"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5.2"/><path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5S3.5 15 3.5 9.2A4.7 4.7 0 0 1 12 6.5a4.7 4.7 0 0 1 8.5 2.7c0 5.8-8.5 11.3-8.5 11.3Z"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.7h2.6l.4-3h-3V8.3c0-.87.24-1.46 1.5-1.46h1.6V4.14C15.9 4.1 14.9 4 13.7 4c-2.4 0-4 1.46-4 4.14V10.3H7v3h2.7V21h3.8Z"/></svg>',
  directions: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 21 3l-8 18-2.5-7.5L3 11Z"/></svg>'
};
if (typeof window !== "undefined") window.ICONS = ICONS;

function icon(nome) {
  return ICONS[nome] || ICONS.estrela;
}

/* ============================================================
   RENDERIZAÇÃO A PARTIR DOS DADOS
   ============================================================ */

/* Cartões de serviço — usado em index.html e servicos.html */
function renderServiceCards(containerId, opts) {
  const el = document.getElementById(containerId);
  if (!el || typeof SERVICOS === "undefined") return;
  const options = opts || {};
  let lista = SERVICOS;
  if (options.apenasDestaque) lista = lista.filter(s => s.destaque);
  if (options.limite) lista = lista.slice(0, options.limite);

  el.innerHTML = lista.map(s => `
    <article class="service-card">
      <div class="service-icon">${icon(s.icone)}</div>
      <h3>${s.titulo}</h3>
      <p>${s.descricao}</p>
    </article>
  `).join("");
}
if (typeof window !== "undefined") window.renderServiceCards = renderServiceCards;

/* Grelha de produtos de estampagem — usado em index.html e estampagem.html */
function renderProductGrid(containerId) {
  const el = document.getElementById(containerId);
  if (!el || typeof PRODUTOS_ESTAMPAGEM === "undefined") return;
  /* Página vive na raiz (index.html) ou dentro de /pages/ — ajusta o caminho da imagem */
  const prefixo = location.pathname.includes("/pages/") ? "../" : "";
  el.innerHTML = PRODUTOS_ESTAMPAGEM.map(p => `
    <article class="product-card">
      <div class="thumb">${p.imagem ? `<img src="${prefixo}${p.imagem}" alt="${p.nome} personalizados com o logótipo PRINTER JVC" loading="lazy">` : icon(p.icone)}</div>
      <div class="label">${p.nome}</div>
    </article>
  `).join("");
}
if (typeof window !== "undefined") window.renderProductGrid = renderProductGrid;

/* Accordion de FAQ — usado em index.html e contacto.html, a partir de data/faq.js */
function renderFAQ(containerId, opts) {
  const el = document.getElementById(containerId);
  if (!el || typeof FAQ_ITEMS === "undefined") return;
  const options = opts || {};
  let lista = FAQ_ITEMS;
  if (options.limite) lista = lista.slice(0, options.limite);

  /* Resolve o link para a página de Orçamento consoante a página atual
     (raiz ou dentro de /pages/), reaproveitando o link já existente no menu */
  const linkOrcamento = document.querySelector('[data-page="orcamento.html"]');
  const hrefOrcamento = linkOrcamento ? linkOrcamento.getAttribute("href") : "pages/orcamento.html";

  el.innerHTML = lista.map(function (item, i) {
    const resposta = item.resposta.replace(/\{\{orcamento\}\}/g, hrefOrcamento);
    return '<div class="accordion-item' + (i === 0 ? " open" : "") + '">' +
      '<button class="accordion-trigger">' + item.pergunta + '<span class="plus">+</span></button>' +
      '<div class="accordion-panel"' + (i === 0 ? ' style="max-height:200px"' : '') + '>' +
      '<p>' + resposta + '</p></div></div>';
  }).join("");

  initAccordion();
}
if (typeof window !== "undefined") window.renderFAQ = renderFAQ;

/* ============================================================
   DADOS ESTRUTURADOS (Schema.org) PARA SEO
   Construídos a partir da mesma fonte única de dados (PRINTER_JVC,
   SERVICOS, FAQ_ITEMS), para nunca desatualizar em relação ao
   conteúdo visível na página.
   ============================================================ */
function injetarDadosEstruturados() {
  if (document.querySelector('script[data-schema="local-business"]')) return;

  const paginaUrl = window.location.href.split("#")[0];
  const negocio = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": PRINTER_JVC.nomes.empresa,
    "description": PRINTER_JVC.nomes.slogan,
    "image": (document.querySelector('meta[property="og:image"]') || {}).content || undefined,
    "telephone": "+" + PRINTER_JVC.whatsapp[0].numero,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": PRINTER_JVC.localizacao,
      "addressCountry": "MZ"
    },
    "openingHours": "Mo-Sa 08:00-18:00",
    "sameAs": [PRINTER_JVC.facebook],
    "url": paginaUrl
  };

  const blocos = [negocio];

  if (typeof SERVICOS !== "undefined" && document.getElementById("servicos-todos")) {
    blocos.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": SERVICOS.map(function (s, i) {
        return {
          "@type": "Service",
          "position": i + 1,
          "name": s.titulo,
          "description": s.descricao,
          "provider": { "@type": "LocalBusiness", "name": PRINTER_JVC.nomes.empresa }
        };
      })
    });
  }

  if (typeof FAQ_ITEMS !== "undefined" && document.querySelector(".accordion-item")) {
    blocos.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_ITEMS.map(function (f) {
        return {
          "@type": "Question",
          "name": f.pergunta,
          "acceptedAnswer": { "@type": "Answer", "text": f.resposta.replace(/<[^>]+>/g, "") }
        };
      })
    });
  }

  blocos.forEach(function (bloco, i) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    if (i === 0) script.setAttribute("data-schema", "local-business");
    script.textContent = JSON.stringify(bloco);
    document.head.appendChild(script);
  });
}

/* ---------- Ano automático no rodapé ---------- */
function setFooterYear() {
  document.querySelectorAll("[data-year]").forEach(function (elx) {
    elx.textContent = new Date().getFullYear();
  });
}

/* ---------- Preenche números de WhatsApp em toda a página ---------- */
function wireWhatsAppLinks() {
  document.querySelectorAll("[data-whatsapp]").forEach(function (elx) {
    const idx = parseInt(elx.getAttribute("data-whatsapp"), 10) || 0;
    const contato = PRINTER_JVC.whatsapp[idx] || PRINTER_JVC.whatsapp[0];
    const msg = elx.getAttribute("data-whatsapp-msg") || "";
    elx.setAttribute("href", linkWhatsApp(contato.numero, msg));
    elx.setAttribute("target", "_blank");
    elx.setAttribute("rel", "noopener");
  });
}

/* ---------- Preenche links do Facebook oficial da PRINTER JVC ---------- */
function wireFacebookLinks() {
  document.querySelectorAll("[data-facebook]").forEach(function (elx) {
    elx.setAttribute("href", PRINTER_JVC.facebook);
    elx.setAttribute("target", "_blank");
    elx.setAttribute("rel", "noopener");
  });
}

/* ---------- Preenche o botão "Como chegar" (Google Maps) ---------- */
function wireDirectionsLinks() {
  const url = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(PRINTER_JVC.localizacaoMapaQuery);
  document.querySelectorAll("[data-directions]").forEach(function (elx) {
    elx.setAttribute("href", url);
    elx.setAttribute("target", "_blank");
    elx.setAttribute("rel", "noopener");
  });
}

/* ---------- Preenche/oculta os botões de email ----------
   Só aparecem quando PRINTER_JVC.email estiver preenchido,
   para nunca mostrar um endereço de email inventado. */
function wireEmailLinks() {
  document.querySelectorAll("[data-email]").forEach(function (elx) {
    if (PRINTER_JVC.email) {
      elx.setAttribute("href", "mailto:" + PRINTER_JVC.email);
      elx.classList.remove("hidden");
      const label = elx.querySelector("[data-email-label]");
      if (label) label.textContent = PRINTER_JVC.email;
    } else {
      elx.classList.add("hidden");
    }
  });
}

/* ---------- Preenche números de telefone (ligar agora) ---------- */
function wirePhoneLinks() {
  document.querySelectorAll("[data-phone]").forEach(function (elx) {
    const idx = parseInt(elx.getAttribute("data-phone"), 10) || 0;
    const contato = PRINTER_JVC.whatsapp[idx] || PRINTER_JVC.whatsapp[0];
    elx.setAttribute("href", "tel:+" + contato.numero);
  });
}

/* ---------- FAQ accordion ---------- */
function initAccordion() {
  document.querySelectorAll(".accordion-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = btn.closest(".accordion-item");
      const panel = item.querySelector(".accordion-panel");
      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".accordion-item.open").forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove("open");
          openItem.querySelector(".accordion-panel").style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove("open");
        panel.style.maxHeight = null;
      } else {
        item.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}

/* ---------- Botão "voltar ao topo" ---------- */
function injetarBotaoTopo() {
  if (document.querySelector(".back-to-top")) return;
  const btn = document.createElement("button");
  btn.className = "back-to-top";
  btn.setAttribute("aria-label", "Voltar ao topo da página");
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.body.appendChild(btn);

  window.addEventListener("scroll", function () {
    btn.classList.toggle("visible", window.scrollY > 640);
  }, { passive: true });
}

document.addEventListener("DOMContentLoaded", function () {
  setFooterYear();
  wireWhatsAppLinks();
  wireFacebookLinks();
  wireDirectionsLinks();
  wireEmailLinks();
  wirePhoneLinks();
  injetarBotaoTopo();

  if (document.getElementById("servicos-destaque")) {
    renderServiceCards("servicos-destaque", { apenasDestaque: true, limite: 6 });
  }
  if (document.getElementById("servicos-todos")) {
    renderServiceCards("servicos-todos");
  }
  if (document.getElementById("produtos-grid")) {
    renderProductGrid("produtos-grid");
  }
  if (document.getElementById("faq-lista")) {
    renderFAQ("faq-lista");
  } else {
    /* Páginas sem FAQ dinâmica (ex.: accordion estático) ainda
       precisam do accordion inicializado */
    initAccordion();
  }

  injetarDadosEstruturados();
});
