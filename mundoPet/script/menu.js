const imagemLogo = document.querySelector(".cabecalho__logo");
const linkMenu = document.querySelectorAll(".cabecalho__sidebar__lista-item");
const menu = document.querySelector('.cabecalho__sidebar');

export function configurarMenu (){
  imagemLogo.addEventListener("click", ()=>{
  menu.classList.toggle("menu-oculto");
});

linkMenu.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("menu-oculto");
  });
})
}
