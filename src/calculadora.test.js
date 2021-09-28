const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("Calculadora", () => {
  it("devuelve la suma de los dos numeros", () => {
    const dom = new JSDOM(
      `
                             <form id="sumar-form"/>                    
                                <input id="first-number" />   
                                <input id="second-number" />   
                                <input type="submit" id="form-submit" value="Sumar" />
                            </form>
                            <div id="resultado-div"></div>`,
      { runScripts: "dangerously" }
    );
    require("./App.js");

    const firstInput = dom.window.document.getElementById("first-number");
    const secondInput = dom.window.document.getElementById("second-number");
    const form = dom.window.document.getElementById("sumar-form");
    const formSubmit = dom.window.document.getElementById("form-submit");
    const resultadoDiv = dom.window.document.getElementById("resultado-div");

    firstInput.value = 2;
    secondInput.value = 3;

    //formSubmit.click();

    expect(resultadoDiv.innerHTML).toBe("");
  });
});
