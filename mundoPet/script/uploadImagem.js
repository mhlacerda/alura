
export function lerConteudoDoArquivo(arquivo){
  
  return new Promise((resolve, reject) => {
    let leitor = new FileReader();
    leitor.onload = ()=>{
      resolve({url: leitor.result, nome: arquivo.name});
    } 
    leitor.onerror = () => {
      reject(`Erro na leitura do arquivo ${arquivo.name}`);
    }
    leitor.readAsDataURL(arquivo);
  });
}



