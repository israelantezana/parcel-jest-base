import fs from "fs";
describe("Gestor Tareas", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("gestortareas.html", "utf8");
    require("./gestorTareas.js");
  });

  it("deberia mostrar la tarea creada", () => {
    const tarea_elem = document.querySelector("#tarea");
    const boton_elem = document.querySelector("#crear-tarea");
    const lista_elem = document.querySelector("#lista-tareas");

    tarea_elem.value = "Primera Tarea";
    boton_elem.click();
    expect(lista_elem.innerHTML).toEqual("Primera Tarea");
  });

  it("Al iniciar no hay nada en la lista de tareas", () => {
    const lista_elem = document.querySelector("#lista-tareas");
    expect(lista_elem.innerHTML).toEqual("");
  });

  //Solo para mostrar lo mismo que la primera prueba pero usando un form, en lugar de boton
  it("solo como ejemplo: formulario con submit", () => {
    const tarea_input = document.querySelector("#tarea-input");
    const form_submit_elem = document.querySelector("#crear-submit");
    const lista_elem = document.querySelector("#lista-tareas");
    tarea_input.value = "Otra tarea";

    form_submit_elem.click();

    expect(lista_elem.innerHTML).toEqual("Otra tarea");
  });

  afterEach(() => {
    const lista_elem = document.querySelector("#lista-tareas");
    lista_elem.innerHTML = "";
  });
});
