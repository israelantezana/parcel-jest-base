import sumar from "./sumador";

const palabra = document.querySelector("#palabra-adivinar");
const formAdivinar = document.querySelector("#adivinar-form");
const botonAdivinar = document.querySelector("#boton-adivinar");
const div = document.querySelector("#resultado-div");

formAdivinar.addEventListener("submit", (event) => {
  event.preventDefault();
  const wordle = new Wordle();
  wordle.palabraSecreta("casas");
  const letrasCoincidentes = wordle.obtenerLetrasCoincidentes(palabra.value());
  div.innerHTML = "Letras: " + letrasCoincidentes;
});
