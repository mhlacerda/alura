import { configurarMenu }  from "./menu.js"
import { lerConteudoDoArquivo } from "./uploadImagem.js";
import { incluirTag } from "./tags.js";
import { publicar } from "./publicarFormulario.js";
import { descartar } from "./descartar.js";

configurarMenu();;
incluirTag();
publicar();
descartar();

const botaoUpload = document.getElementById("upload-btn");
const inputUpload = document.getElementById("imagem-upload");
const imagemPrincipal = document.querySelector(".image__upload");
const nomeDaImagem = document.querySelector(".nome__imagem p");
  
botaoUpload.addEventListener("click", () =>{
  inputUpload.click();
});

inputUpload.addEventListener("change", async (evento)=>{
  const arquivo = evento.target.files[0];
  if (arquivo){
    try{
      const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
      imagemPrincipal.src = conteudoDoArquivo.url;
      nomeDaImagem.textContent = conteudoDoArquivo.nome;
    } catch(error) {
      console.error(error)
      }
  }else {
    console.error("Nenhum arquivo foi selecionado.");
    }
});



