
import gerarDiaDaSemana from "./gerarDiaDaSemana.js";


const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemNaLista () {

   if (inputItem.value === ""){
    alert ("Por favor, insira um item.");
    return;
  }

  const itemLista = document.createElement("li");
  const itemListaContainer = document.createElement("div");
  itemListaContainer.classList.add("lista-item-container");
  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = "checkbox-" + contador++;
  const nomeItem = document.createElement("p");
  nomeItem.innerText = inputItem.value;

  const dataCompleta = gerarDiaDaSemana ();
  const itemData = document.createElement("p");
  itemData.classList.add("texto-data");
  itemData.innerText = dataCompleta;

 
  itemLista.appendChild(itemListaContainer);
  itemLista.appendChild(itemData);
  itemListaContainer.appendChild(inputCheckbox);
  itemListaContainer.appendChild(nomeItem);


  inputCheckbox.addEventListener("click", function() {
    if(inputCheckbox.checked){
      nomeItem.style.textDecoration = "line-through";
    } else {
      nomeItem.style.textDecoration = "none";
    }
  });  

  inputItem.value = "";
  return itemLista;
}