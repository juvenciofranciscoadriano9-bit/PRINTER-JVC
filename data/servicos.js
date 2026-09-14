/* ============================================================
   PRINTER JVC — data/servicos.js
   Lista de serviços da empresa.
   Para adicionar/editar um serviço, basta alterar este ficheiro —
   ele é usado automaticamente pela página inicial e por servicos.html.
   Ícones disponíveis: ver objeto ICONS em js/main.js
   ============================================================ */

const SERVICOS = [
  {
    id: "copias-impressoes",
    icone: "copiadora",
    titulo: "Cópias e Impressões",
    descricao: "Impressão a preto e branco ou a cores, em vários formatos e tipos de papel.",
    destaque: true
  },
  {
    id: "emplastificacao",
    icone: "escudo",
    titulo: "Emplastificação",
    descricao: "Protegemos os seus documentos, certificados e cartões contra danos e humidade.",
    destaque: false
  },
  {
    id: "digitacao",
    icone: "teclado",
    titulo: "Digitação de Documentos",
    descricao: "Trabalhos académicos, relatórios e formulários, digitados com rapidez e precisão.",
    destaque: true
  },
  {
    id: "logotipos",
    icone: "caneta",
    titulo: "Criação de Logótipos e Emblemas",
    descricao: "Damos identidade à sua marca com um logótipo profissional e memorável.",
    destaque: true
  },
  {
    id: "flyers",
    icone: "flyer",
    titulo: "Flyers e Panfletos",
    descricao: "Materiais de divulgação com design apelativo para dar impacto ao seu negócio.",
    destaque: false
  },
  {
    id: "redes-sociais",
    icone: "social",
    titulo: "Posts para Redes Sociais",
    descricao: "Criação de artes gráficas para Facebook, Instagram e WhatsApp Business.",
    destaque: false
  },
  {
    id: "crachas",
    icone: "cracha",
    titulo: "Crachás",
    descricao: "Crachás de identificação para estudantes, empresas e eventos.",
    destaque: false
  },
  {
    id: "cartao-estudante",
    icone: "idcard",
    titulo: "Cartão de Estudante",
    descricao: "Produção rápida e com boa qualidade de impressão e acabamento.",
    destaque: false
  },
  {
    id: "corte-papel",
    icone: "tesoura",
    titulo: "Corte de Papéis",
    descricao: "Corte de precisão para convites, etiquetas e outros materiais impressos.",
    destaque: false
  },
  {
    id: "outros-servicos",
    icone: "estrela",
    titulo: "Outros Serviços Gráficos",
    descricao: "Tem um pedido diferente? Fale connosco — encontramos a melhor solução.",
    destaque: false
  }
];

if (typeof window !== "undefined") window.SERVICOS = SERVICOS;
