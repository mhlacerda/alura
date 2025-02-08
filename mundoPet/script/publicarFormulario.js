
export function publicar() {
  const botaoPublicar = document.querySelector(".publicar");
  const listaTags = document.querySelector(".lista__hashtags");

  async function publicarProjeto(nomedoProjeto, descricaoDoProjeto, tagsDoProjeto, imagemDoProjeto) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const deuCerto = Math.random() > 0.5;
        if (deuCerto) {
          resolve("Projeto publicado com sucesso.");
        } else {
          reject("Erro ao publicar o projeto.");
        }
      }, 2000);
    });
  }

  botaoPublicar.addEventListener("click", async (evento) => {
    evento.preventDefault();

    const nomedoProjeto = document.getElementById("nome").value;
    const descricaoDoProjeto = document.getElementById("descricao").value;
    const tagsDoProjeto = Array.from(listaTags.querySelectorAll(".nome__hashtag")).map((tag) => tag.textContent);
    const imagemDoProjeto = document.querySelector(".image__upload");

    console.log(nomedoProjeto);
    console.log(descricaoDoProjeto);
    console.log(tagsDoProjeto);
    console.log(imagemDoProjeto);

    try {
      const resultadoDaPromessa = await publicarProjeto(nomedoProjeto, descricaoDoProjeto, tagsDoProjeto, imagemDoProjeto);

      console.log(resultadoDaPromessa);
      alert("Projeto publicado com sucesso!");

    } catch (error) {
      console.log("Deu errado: ", error);
      alert("Erro ao publicar o projeto.");
    }
  });
}
