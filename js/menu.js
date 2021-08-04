const menu = document.querySelector(".menu");
const navegacion = document.querySelector(".menu-navegacion");

console.log(navegacion);
console.log(menu);

menu.addEventListener("click", () => {
  navegacion.classList.toggle("spread");
});

window.addEventListener("click", (e) => {
  if (navegacion.classList.contains("spread") && e.target != navegacion && e.target != menu) {
    navegacion.classList.toggle("spread");
  }
});
