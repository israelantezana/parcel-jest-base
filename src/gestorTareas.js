const tarea_elem = document.querySelector("#tarea");
const boton_elem = document.querySelector("#crear-tarea");
const lista_elem = document.querySelector("#lista-tareas");

boton_elem.addEventListener("click", (event) => {
  lista_elem.innerHTML = tarea_elem.value;
});

//solo como ejemplo para mostrar como funciona con un form
const tarea_input = document.querySelector("#tarea-input");
const form_elem = document.querySelector("#form-crear");

form_elem.addEventListener("submit", (event) => {
  event.preventDefault();
  lista_elem.innerHTML = tarea_input.value;
});
