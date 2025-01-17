import { criarItemNaLista } from "./criarItemDaLista.js";
import verificarListaVazia from "./verificarListaVazia.js";

const salvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");


salvarItem.addEventListener("click", (evento) =>{
  evento.preventDefault();

  const itemLista = criarItemNaLista();
  listaDeCompras.appendChild(itemLista);

  verificarListaVazia(listaDeCompras);
} )

verificarListaVazia(listaDeCompras);