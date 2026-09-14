/* ============================================================
   PRINTER JVC — js/orcamento.js
   Valida o formulário de orçamento, mostra o nome do ficheiro
   escolhido e encaminha o pedido para o WhatsApp.
   ============================================================ */

(function () {
  /* Tipos e tamanho de ficheiro aceites no formulário */
  const TIPOS_ACEITES = ["image/", "application/pdf", "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  const TAMANHO_MAXIMO_MB = 8;

  function initProdutosSelect() {
    const select = document.getElementById("orc-produto");
    if (!select || typeof PRODUTOS_ESTAMPAGEM === "undefined") return;
    PRODUTOS_ESTAMPAGEM.forEach(function (p) {
      const opt = document.createElement("option");
      opt.value = p.nome;
      opt.textContent = p.nome;
      select.appendChild(opt);
    });
  }

  function ficheiroValido(ficheiro) {
    if (!ficheiro) return { ok: true };
    const tipoOk = TIPOS_ACEITES.some(function (t) { return ficheiro.type.indexOf(t) === 0; });
    if (!tipoOk) {
      return { ok: false, erro: "O ficheiro deve ser uma imagem, PDF ou documento Word (.doc/.docx)." };
    }
    if (ficheiro.size > TAMANHO_MAXIMO_MB * 1024 * 1024) {
      return { ok: false, erro: "O ficheiro deve ter no máximo " + TAMANHO_MAXIMO_MB + " MB." };
    }
    return { ok: true };
  }

  function initFileDrop() {
    const drop = document.getElementById("file-drop");
    const input = document.getElementById("orc-ficheiro");
    const nomeFicheiro = document.getElementById("orc-ficheiro-nome");
    if (!drop || !input) return;

    drop.addEventListener("click", function () { input.click(); });
    drop.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); input.click(); }
    });
    input.addEventListener("change", function () {
      const ficheiro = input.files && input.files[0];
      if (!ficheiro) { nomeFicheiro.textContent = ""; return; }
      const validacao = ficheiroValido(ficheiro);
      if (!validacao.ok) {
        nomeFicheiro.textContent = validacao.erro;
        nomeFicheiro.style.color = "#DC2626";
        input.value = "";
        return;
      }
      nomeFicheiro.style.color = "";
      nomeFicheiro.textContent = "Ficheiro selecionado: " + ficheiro.name;
    });
  }

  function validar(form) {
    const erros = [];
    const nome = form.querySelector("#orc-nome").value.trim();
    const telefone = form.querySelector("#orc-telefone").value.trim();
    const email = form.querySelector("#orc-email").value.trim();
    const servico = form.querySelector("#orc-servico").value;
    const produto = form.querySelector("#orc-produto").value;
    const quantidade = form.querySelector("#orc-quantidade").value.trim();
    const descricao = form.querySelector("#orc-descricao").value.trim();
    const prazo = form.querySelector("#orc-prazo").value.trim();
    const observacoes = form.querySelector("#orc-observacoes").value.trim();
    const ficheiroInput = form.querySelector("#orc-ficheiro");
    const ficheiro = ficheiroInput.files && ficheiroInput.files[0];

    if (nome.length < 2) erros.push("Indique o seu nome.");
    if (telefone.length < 7) erros.push("Indique um número de telefone válido.");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) erros.push("Indique um email válido ou deixe o campo em branco.");
    if (!servico) erros.push("Selecione o serviço pretendido.");
    if (!quantidade) erros.push("Indique a quantidade ou tamanho.");
    if (descricao.length < 5) erros.push("Descreva brevemente o seu pedido.");
    const validacaoFicheiro = ficheiroValido(ficheiro);
    if (!validacaoFicheiro.ok) erros.push(validacaoFicheiro.erro);

    return { erros, dados: { nome, telefone, email, servico, produto, quantidade, descricao, prazo, observacoes } };
  }

  function mostrarErros(form, erros) {
    let caixa = form.querySelector(".form-errors");
    if (!caixa) {
      caixa = document.createElement("div");
      caixa.className = "form-errors form-note";
      caixa.setAttribute("role", "alert");
      caixa.setAttribute("aria-live", "assertive");
      caixa.style.borderLeft = "4px solid #DC2626";
      form.prepend(caixa);
    }
    if (!erros.length) { caixa.remove(); return; }
    caixa.innerHTML = "<strong>Verifique os seguintes campos:</strong><br>" + erros.join("<br>");
    caixa.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function initFormOrcamento() {
    const form = document.getElementById("form-orcamento");
    if (!form) return;
    initFileDrop();
    initProdutosSelect();

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const { erros, dados } = validar(form);
      mostrarErros(form, erros);
      if (erros.length) return;

      const input = document.getElementById("orc-ficheiro");
      const temFicheiro = input && input.files && input.files[0];

      const linhas = [
        "*Novo pedido de orçamento — PRINTER JVC*",
        "",
        "Nome: " + dados.nome,
        "Telefone: " + dados.telefone,
        dados.email ? "Email: " + dados.email : "",
        "Serviço: " + dados.servico,
        dados.produto ? "Produto: " + dados.produto : "",
        "Quantidade/Tamanho: " + dados.quantidade,
        "Descrição: " + dados.descricao,
        dados.prazo ? "Prazo desejado: " + dados.prazo : "",
        dados.observacoes ? "Observações: " + dados.observacoes : "",
        temFicheiro ? "\n(Vou enviar em seguida um ficheiro/imagem de referência neste chat.)" : ""
      ];

      const numero = PRINTER_JVC.whatsapp[0].numero;

      form.classList.add("hidden");
      document.getElementById("orcamento-sucesso").classList.add("show");

      enviarParaWhatsApp(numero, linhas);
    });
  }

  document.addEventListener("DOMContentLoaded", initFormOrcamento);
})();
