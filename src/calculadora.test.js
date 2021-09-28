const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("Calculadora", () => {
  it("devuelve la suma de los dos numeros", () => {
    //const dom = new JSDOM(
    document.body.innerHTML = `
                             <form id="sumar-form"/>                    
                                <input id="first-number" />   
                                <input id="second-number" />   
                                <input type="submit" id="form-submit" value="Sumar" />
                            </form>
                            <div id="resultado-div"></div>`;
    //,
    //{ runScripts: "dangerously" }
    //);
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
