/* ============================================================
   PRINTER JVC — data/faq.js
   Perguntas frequentes, usadas na página inicial e em contacto.html.
   Fonte única — para editar uma pergunta, basta alterar aqui.
   ============================================================ */

const FAQ_ITEMS = [
  {
    pergunta: "Como faço um pedido de orçamento?",
    resposta: 'Basta preencher o formulário na página de <a href="{{orcamento}}" style="color:var(--blue-600);font-weight:600">Orçamento</a> ou falar diretamente connosco pelo WhatsApp.'
  },
  {
    pergunta: "Quanto tempo demora um pedido?",
    resposta: "Depende do tipo e da quantidade do pedido. Confirmamos sempre um prazo consigo antes de iniciar a produção."
  },
  {
    pergunta: "Posso enviar o meu próprio design?",
    resposta: "Sim! Pode enviar-nos o seu ficheiro pelo WhatsApp ou anexá-lo no formulário de orçamento."
  },
  {
    pergunta: "Fazem entrega ao domicílio?",
    resposta: "Fale connosco pelo WhatsApp para confirmarmos a melhor forma de entrega para o seu pedido."
  }
];

if (typeof window !== "undefined") window.FAQ_ITEMS = FAQ_ITEMS;
