function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let imagem = gameClicado.querySelector('.dashboard__item__img');
  let botao = gameClicado.querySelector('.dashboard__item__button');
  let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

  console.log  (nomeJogo.textContent);

  if (botao.classList.contains("dashboard__item__button")){
    botao.classList.add("dashboard__item__button--return");
    botao.textContent = "Devolver";
  } else {
    botao.textContent = "Alugar";
  }
}