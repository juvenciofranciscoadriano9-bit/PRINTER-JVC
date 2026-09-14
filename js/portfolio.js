/* ============================================================
   PRINTER JVC — js/portfolio.js
   Renderiza a galeria a partir de data/portfolio.js,
   trata os filtros por categoria e a janela de destaque (lightbox)
   ============================================================ */

(function () {
  const CORES_CATEGORIA = {
    impressao: "linear-gradient(150deg,#0057B8,#003B7A)",
    design: "linear-gradient(150deg,#2E9DF7,#0057B8)",
    estampagem: "linear-gradient(150deg,#003B7A,#1E2126)",
    personalizacao: "linear-gradient(150deg,#1877D1,#002448)"
  };

  const NOME_CATEGORIA = {
    todos: "Todos",
    impressao: "Impressão",
    design: "Design",
    estampagem: "Estampagem",
    personalizacao: "Personalização"
  };

  function cartaoHTML(item) {
    const fundo = CORES_CATEGORIA[item.categoria] || CORES_CATEGORIA.impressao;
    const conteudoVisual = item.imagem
      ? `<img src="${item.imagem}" alt="${item.titulo}" loading="lazy">`
      : (window.ICONS ? window.ICONS[item.icone] || "" : "");
    return `
      <div class="portfolio-item" data-categoria="${item.categoria}" tabindex="0" role="button"
           data-titulo="${item.titulo}" data-etiqueta="${item.etiqueta}">
        <div class="visual" style="background:${fundo}">
          ${conteudoVisual}
        </div>
        <div class="caption">
          <span>${item.etiqueta}</span>
          <strong>${item.titulo}</strong>
        </div>
      </div>
    `;
  }

  let elementoAntesDoFoco = null;
  let itemAtualIndex = -1;

  function renderGrid(lista) {
    const grid = document.getElementById("portfolio-grid");
    if (!grid) return;
    if (!lista.length) {
      grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--grey-500)">
        Ainda não há trabalhos nesta categoria — volte em breve.
      </p>`;
      return;
    }
    grid.innerHTML = lista.map(cartaoHTML).join("");
    wireItemClicks();
  }

  function itensVisiveis() {
    return Array.from(document.querySelectorAll(".portfolio-item"));
  }

  function wireItemClicks() {
    itensVisiveis().forEach(function (elx, i) {
      elx.addEventListener("click", function () { abrirLightbox(i); });
      elx.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrirLightbox(i); }
      });
    });
  }

  function mostrarItemNoLightbox(index) {
    const itens = itensVisiveis();
    if (!itens.length) return;
    itemAtualIndex = (index + itens.length) % itens.length;
    const elx = itens[itemAtualIndex];
    const lightbox = document.getElementById("lightbox");
    const visual = lightbox.querySelector(".lightbox-visual");
    const titulo = lightbox.querySelector(".lightbox-title");
    const etiqueta = lightbox.querySelector(".lightbox-tag");
    visual.style.background = elx.querySelector(".visual").style.background;
    visual.innerHTML = elx.querySelector(".visual").innerHTML;
    titulo.textContent = elx.getAttribute("data-titulo");
    etiqueta.textContent = elx.getAttribute("data-etiqueta");
  }

  function abrirLightbox(index) {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox) return;
    elementoAntesDoFoco = document.activeElement;
    mostrarItemNoLightbox(index);
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const fechar = lightbox.querySelector(".lightbox-close");
    if (fechar) fechar.focus();
  }

  function fecharLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (!lightbox) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (elementoAntesDoFoco) elementoAntesDoFoco.focus();
  }

  function proximoItem() { mostrarItemNoLightbox(itemAtualIndex + 1); }
  function itemAnterior() { mostrarItemNoLightbox(itemAtualIndex - 1); }

  function initFiltros() {
    const barra = document.getElementById("filter-bar");
    if (!barra || typeof PORTFOLIO_ITEMS === "undefined") return;

    barra.querySelectorAll(".filter-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        barra.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const cat = btn.getAttribute("data-filter");
        const filtrado = cat === "todos" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(i => i.categoria === cat);
        renderGrid(filtrado);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (typeof PORTFOLIO_ITEMS !== "undefined") {
      renderGrid(PORTFOLIO_ITEMS);
    }
    initFiltros();

    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
      lightbox.querySelector(".lightbox-close").addEventListener("click", fecharLightbox);
      const btnAnterior = lightbox.querySelector(".lightbox-prev");
      const btnProximo = lightbox.querySelector(".lightbox-next");
      if (btnAnterior) btnAnterior.addEventListener("click", itemAnterior);
      if (btnProximo) btnProximo.addEventListener("click", proximoItem);
      lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) fecharLightbox();
      });
      document.addEventListener("keydown", function (e) {
        if (!lightbox.classList.contains("open")) return;
        if (e.key === "Escape") fecharLightbox();
        if (e.key === "ArrowRight") proximoItem();
        if (e.key === "ArrowLeft") itemAnterior();
      });
    }
  });
})();
