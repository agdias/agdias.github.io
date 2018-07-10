const menu = document.querySelector("#menu");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", (e) => {
    drawer.classList.toggle('open');
    e.stopPropagation();
});

main.addEventListener("click", (e) => {
  drawer.classList.remove('open');
});