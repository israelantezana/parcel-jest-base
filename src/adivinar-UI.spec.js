import fs from "fs";

describe("Adivinar Palabra", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
  });

  it("No ver ningun mensaje si intento con una palabra sin ninguna letra que coincide", () => {
    const palabraAdivinar = document.querySelector("#palabra-adivinar");
    palabraAdivinar.value = "autos";

    const botonAdivinar = document.querySelector("#boton-adivinar");
    botonAdivinar.click();

    const resultado = document.querySelector("#resultado-div");
    expect(resultado.innerHTML).toEqual("Letras:");
  });

  afterEach(() => {
    const resultado = document.querySelector("#resultado-div");
    resultado.innerHTML = "";
  });
});
