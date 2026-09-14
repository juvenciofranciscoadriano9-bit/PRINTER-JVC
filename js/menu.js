/* ============================================================
   PRINTER JVC — js/menu.js
   Menu mobile (hamburger) + destaque automático do link ativo
   ============================================================ */

(function () {
  function initHamburger() {
    const btn = document.querySelector(".hamburger");
    const nav = document.querySelector(".main-nav");
    if (!btn || !nav) return;

    btn.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");
      btn.classList.toggle("open", isOpen);
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      nav.setAttribute("aria-hidden", isOpen ? "false" : "true");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    /* Fecha o menu ao escolher uma página (mobile) */
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        btn.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        nav.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      });
    });

    /* Fecha com a tecla Escape */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        btn.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        nav.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      }
    });

    /* Fecha ao clicar/tocar fora do menu (mobile) */
    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("open")) return;
      if (nav.contains(e.target) || btn.contains(e.target)) return;
      nav.classList.remove("open");
      btn.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      nav.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    });
  }

  /* Marca como ativo o link correspondente à página atual */
  function markActiveLink() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".main-nav a[data-page]").forEach(function (link) {
      if (link.getAttribute("data-page") === path) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initHamburger();
    markActiveLink();
  });
})();
