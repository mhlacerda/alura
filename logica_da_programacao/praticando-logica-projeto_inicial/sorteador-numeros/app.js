function sortear(){
  let quantidade =parseInt(document.querySelector("#quantidade").value);
  let de = parseInt(document.querySelector("#de").value);
  let ate = parseInt(document.querySelector("#ate").value);
  
  let sorteados = [];
  let numero;

  if (de >= ate) {
    alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
    return;
  }

  if (quantidade > (ate - de + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
  }
  
  for (let i=0; i<quantidade; i++){
    numero = obterNumeroAleatorio(de, ate);
    
    while (sorteados.includes(numero)){
      numero = obterNumeroAleatorio (de, ate);
    }
    sorteados.push(numero);
  }

  let resultado = document.querySelector(".resultado");
  resultado.textContent = `Números sorteados: ${sorteados}`; 

  alterarStatusBotao();

  
  console.log(quantidade, de, ate);
  console.log(sorteados);
}

function obterNumeroAleatorio (min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
  let botao = document.querySelector("#btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")){
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else{
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}

function reiniciar(){
  (document.querySelector("#quantidade").value) = "";
  (document.querySelector("#de").value) = "";
  (document.querySelector("#ate").value) = "";
  document.querySelector(".resultado").textContent = "Números sorteados:  nenhum até agora";
  alterarStatusBotao();
}