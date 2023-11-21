const nombreInput = document.querySelector("#nombre");
const form = document.querySelector("#saludador-form");
const saludoDiv = document.querySelector("#saludo-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;

  saludoDiv.innerHTML = "<p> Hola " + nombre + "</p>";
});
