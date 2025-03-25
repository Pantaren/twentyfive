document.querySelector(".menu-button").addEventListener("click", showMenu)

function showMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");
}