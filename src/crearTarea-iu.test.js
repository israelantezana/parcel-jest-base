import fs from "fs";
describe("Codebreaker", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("gestortareas.html", "utf8");
    require("./gestorTareas.js");
  });

  it("deberia mostrar la tarea creada", () => {
    const tarea_elem = document.querySelector("#tarea");
    const boton_elem = document.querySelector("#crear-tarea");
    const lista_elem = document.querySelector("#lista-tareas");

    tarea_elem.value = "Primera tarea";
    boton_elem.click();
    expect(lista_elem.innerHTML).toEqual("Primera Tarea");
  });

  it("Al iniciar no hay nada en la lista de tareas", () => {
    const lista_elem = document.querySelector("#lista-tareas");
    expect(lista_elem.innerHTML).toEqual("");
  });

  afterEach(() => {
    const lista_elem = document.querySelector("#lista-tareas");
    lista_elem.innerHTML = "";
  });
});
