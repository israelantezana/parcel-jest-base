import fs from "fs";

describe("Adivinar Palabra", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });

  it("No ver ningun mensaje si intento con una palabra sin ninguna letra que coincide", () => {
    const palabraAdivinar = document.querySelector("#palabra-adivinar");
    palabraAdivinar.value = "autos";

    const botonAdivinar = document.querySelector("#boton-adivinar");
    botonAdivinar.click();

    const resultado = document.querySelector("#resultado-div");
    expect(resultado.innerHTML).toEqual("Letras:");
  });

  it("Ver un mensaje con las letras que se acerto", () => {
    //palabra secreta: casas
    const palabraAdivinar = document.querySelector("#palabra-adivinar");
    palabraAdivinar.value = "cello";

    const botonAdivinar = document.querySelector("#boton-adivinar");
    botonAdivinar.click();

    const resultado = document.querySelector("#resultado-div");
    expect(resultado.innerHTML).toEqual("Letras: c");
  });

  afterEach(() => {
    const resultado = document.querySelector("#resultado-div");
    resultado.innerHTML = "";
  });
});
