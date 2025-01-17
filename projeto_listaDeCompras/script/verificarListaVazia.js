
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia (listaDeCompras) {
  const qddDaLista = listaDeCompras.querySelectorAll("li");
  if (qddDaLista.length === 0) {
    mensagemListaVazia.style.display = "block";
  } else {
    mensagemListaVazia.style.display = "none";
  }
}

export default verificarListaVazia;