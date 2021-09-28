const jsdom = require("jsdom");
const { JSDOM } = jsdom;
import fs from "fs";
import path from "path";

describe("Calculadora", () => {
  it("devuelve la suma de los dos numeros", () => {
    document.body.innerHTML = fs.readFileSync(
      path.resolve(__dirname, "../index.html"),
      "utf8"
    );

    require("./index");

    const firstInput = document.querySelector("#first-number");
    const secondInput = document.querySelector("#second-number");
    const formSubmit = document.querySelector("#form-submit");
    const resultadoDiv = document.querySelector("#resultado-div");

    firstInput.value = 2;
    secondInput.value = 3;

    formSubmit.click();

    expect(resultadoDiv.innerHTML).toEqual("5");
  });
});
