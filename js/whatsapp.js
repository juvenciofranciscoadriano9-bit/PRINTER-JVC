/* ============================================================
   PRINTER JVC — js/whatsapp.js
   Botão flutuante do WhatsApp (injetado em todas as páginas)
   e função utilitária para redirecionar pedidos para o WhatsApp.
   ============================================================ */

(function () {
  function injetarBotaoFlutuante() {
    if (document.querySelector(".whatsapp-float")) return;
    if (typeof PRINTER_JVC === "undefined") return;

    const contato = PRINTER_JVC.whatsapp[0];
    const msg = "Olá! Vim do site da PRINTER JVC e gostaria de mais informações.";
    const a = document.createElement("a");
    a.href = linkWhatsApp(contato.numero, msg);
    a.className = "whatsapp-float";
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "Falar connosco no WhatsApp");
    a.innerHTML = window.ICONS ? window.ICONS.whatsapp : "";
    document.body.appendChild(a);
  }

  /* Constrói e abre uma mensagem de WhatsApp a partir de pares campo/valor */
  function enviarParaWhatsApp(numero, linhas) {
    const texto = linhas.filter(Boolean).join("\n");
    window.open(linkWhatsApp(numero, texto), "_blank", "noopener");
  }
  if (typeof window !== "undefined") window.enviarParaWhatsApp = enviarParaWhatsApp;

  document.addEventListener("DOMContentLoaded", injetarBotaoFlutuante);
})();
