export function descartar() {
  const imagemPrincipal = document.querySelector(".image__upload");
  const nomeDaImagem = document.querySelector(".nome__imagem p");
  const listaTags =  document.querySelector(".lista__hashtags");
  const botaoDescartar = document.querySelector(".descartar");

  botaoDescartar.addEventListener("click", (evento) => {

    const formulario = document.querySelector("form");
    formulario.reset();

    imagemPrincipal.src = "../img/gatoLaranja.jpg";
    nomeDaImagem.textContent = "imagem_do_projeto.png";

    listaTags.innerHTML = "";
  })
}