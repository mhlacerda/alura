const inputTag = document.getElementById("hashtags");
const listaTags =  document.querySelector(".lista__hashtags");


export function incluirTag() {

  const tagsPermitidas = [
    "cachorro", "mamífero", "preto", "labrador", "médio", "gato", "branco", "persa", "pequeno", "elefante", "cinza", "africano", "grande", "leão", "amarelo","tigre", "laranja", "preto", "bengala", "papagaio", "ave", "verde", "arara", "águia", "marrom", "branco", "pato", "cobra", "réptil", "jararaca","tartaruga", "jacaré", "salmão", "peixe", "rosa", "goldfish", "comum","sapo", "anfíbio", "rã"];

   // Função para verificar se a tag está na lista permitida
  async function verificaTagsPermitidas(tagTexto) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(tagsPermitidas.includes(tagTexto));
      }, 1000);
    });
  }

 // Função para adicionar tag
  inputTag.addEventListener("keypress", async (evento) => {
    if (evento.key === "Enter") {
      evento.preventDefault();
      const tagTexto = inputTag.value.trim().toLowerCase();
      if (tagTexto !== "") {
        try {
          const tagExiste = await verificaTagsPermitidas(tagTexto);
          if (tagExiste) {
            //imppedir tags duplicadas
            const tagsNaLista = [...listaTags.getElementsByClassName("nome__hashtag")].map(tag => tag.textContent.trim());
            if (!tagsNaLista.includes(tagTexto)) {
             
            //cria nova tag  
            const novaTag = document.createElement("li");
            novaTag.classList.add("item__hashtag");
            novaTag.innerHTML = `<p class="nome__hashtag">${tagTexto}</p><img class="icone__fechar" src="./img/close_roxo.svg" alt="">`;
            listaTags.appendChild(novaTag);
            inputTag.value = "";
          } else {
            alert("Tag já adicionada!");
            inputTag.value = "";
          }
          } else {
            alert("Tag inválida!");
            inputTag.value = "";
          }
        } catch (error) {
          console.error("Erro ao verificar a existência da tag no servidor");
          alert("Erro ao verificar o servidor.");
        }
      }
    }
  })

  listaTags.addEventListener("click", (e) => {
    if (e.target.classList.contains("icone__fechar")) {
      const removerTag = e.target.parentElement;
      listaTags.removeChild(removerTag);
    }
  });

  function atualizarDatalist() {
    const datalist = document.getElementById("tagsPermitidas");
    datalist.innerHTML = ""; // Limpar as opções antes de adicionar novas

    const tagsNaLista = [...listaTags.getElementsByClassName("nome__hashtag")].map(tag => tag.textContent.trim());
    const tagsDisponiveis = tagsPermitidas.filter(tag => !tagsNaLista.includes(tag)); // Filtrar tags não adicionadas

    tagsDisponiveis.forEach(hashtags => {
      const option = document.createElement("option");
      option.value = hashtags;
      datalist.appendChild(option);
    });
  }
  atualizarDatalist();

}