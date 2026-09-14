/* ============================================================
   PRINTER JVC — data/portfolio.js
   Itens do portfólio, organizados por categoria.
   Categorias usadas nos filtros: impressao | design | estampagem | personalizacao
   Para adicionar um trabalho novo, junte um objeto à lista abaixo. Se já tiver a
   foto real, guarde-a em assets/images/portfolio/ e aponte "imagem" para ela
   (o "icone" fica como reserva, usado só se "imagem" não existir).
   ============================================================ */

const PORTFOLIO_ITEMS = [
  { id: 1, categoria: "impressao",      icone: "copiadora", titulo: "Cópias e Impressões",        etiqueta: "Impressão",       imagem: "../assets/images/portfolio/copias-impressoes.jpg" },
  { id: 2, categoria: "design",         icone: "caneta",    titulo: "Logótipo de Marca",           etiqueta: "Design",          imagem: "../assets/images/portfolio/logotipo-marca.jpg" },
  { id: 3, categoria: "estampagem",     icone: "camisa",    titulo: "Camisas Personalizadas",      etiqueta: "Estampagem",      imagem: "../assets/images/portfolio/camisas-personalizadas.jpg" },
  { id: 4, categoria: "design",         icone: "flyer",     titulo: "Flyer Promocional",           etiqueta: "Design",          imagem: "../assets/images/portfolio/flyer-promocional.jpg" },
  { id: 5, categoria: "personalizacao", icone: "caneca",    titulo: "Canecas com Logótipo",        etiqueta: "Personalização",  imagem: "../assets/images/portfolio/canecas-logotipo.jpg" },
  { id: 6, categoria: "impressao",      icone: "idcard",    titulo: "Cartões de Estudante",        etiqueta: "Impressão",       imagem: "../assets/images/portfolio/cartoes-estudante.jpg" },
  { id: 7, categoria: "estampagem",     icone: "bone",      titulo: "Bonés Personalizados",        etiqueta: "Estampagem",      imagem: "../assets/images/portfolio/bones-personalizados.jpg" },
  { id: 8, categoria: "design",         icone: "social",    titulo: "Artes para Redes Sociais",    etiqueta: "Design",          imagem: "../assets/images/portfolio/artes-redes-sociais.jpg" },
  { id: 9, categoria: "personalizacao", icone: "uniforme",  titulo: "Uniformes de Equipa",         etiqueta: "Personalização",  imagem: "../assets/images/portfolio/uniformes-equipa.jpg" },
  { id: 10, categoria: "impressao",     icone: "cracha",    titulo: "Crachás de Evento",           etiqueta: "Impressão",       imagem: "../assets/images/portfolio/crachas-evento.jpg" },
  { id: 11, categoria: "estampagem",    icone: "saco",      titulo: "Sacos Estampados",            etiqueta: "Estampagem",      imagem: "../assets/images/portfolio/sacos-personalizados.jpg" },
  { id: 12, categoria: "design",        icone: "escudo",    titulo: "Cartões de Visita",           etiqueta: "Design",          imagem: "../assets/images/portfolio/cartoes-visita.jpg" }
];

if (typeof window !== "undefined") window.PORTFOLIO_ITEMS = PORTFOLIO_ITEMS;
