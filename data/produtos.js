/* ============================================================
   PRINTER JVC — data/produtos.js
   Produtos personalizáveis por estampagem.
   Para adicionar um novo produto, acrescente um objeto à lista.
   ============================================================ */

const PRODUTOS_ESTAMPAGEM = [
  { id: "camisas",  icone: "camisa",   nome: "Camisas",   imagem: "assets/images/portfolio/camisas-personalizadas.jpg" },
  { id: "canecas",  icone: "caneca",   nome: "Canecas",   imagem: "assets/images/portfolio/canecas-logotipo.jpg" },
  { id: "copos",    icone: "copo",     nome: "Copos" },
  { id: "bones",    icone: "bone",     nome: "Bonés",     imagem: "assets/images/portfolio/bones-personalizados.jpg" },
  { id: "garrafas", icone: "garrafa",  nome: "Garrafas",  imagem: "assets/images/produtos/garrafas.jpg" },
  { id: "sacos",    icone: "saco",     nome: "Sacos",     imagem: "assets/images/portfolio/sacos-personalizados.jpg" },
  { id: "uniformes",icone: "uniforme", nome: "Uniformes", imagem: "assets/images/portfolio/uniformes-equipa.jpg" },
  { id: "outros",   icone: "estrela",  nome: "Outros Produtos" }
];

if (typeof window !== "undefined") window.PRODUTOS_ESTAMPAGEM = PRODUTOS_ESTAMPAGEM;
