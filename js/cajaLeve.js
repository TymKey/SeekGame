const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLeve = document.querySelector(".añadir-imagen");
const contenedorLeve = document.querySelector(".imagen-leve");
const menu1 = document.querySelector(".menu");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    aparecerImagen(imagen.getAttribute("src"));
  });
});

contenedorLeve.addEventListener("click", (e) => {
  if (e.target != imagenesLeve) {
    contenedorLeve.classList.toggle("show");
    imagenesLeve.classList.toggle("showImage");
    menu1.style.opacity = '1'
  }
});

const aparecerImagen = (imagen) => {
  imagenesLeve.src = imagen;
  contenedorLeve.classList.toggle("show");
  imagenesLeve.classList.toggle("showImage");
  menu1.style.opacity = '0'
};
