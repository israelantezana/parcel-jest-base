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
    require("./App.js");

    const firstInput = document.getElementById("first-number");
    const secondInput = document.getElementById("second-number");
    const form = document.getElementById("sumar-form");
    const formSubmit = document.getElementById("form-submit");
    const resultadoDiv = document.getElementById("resultado-div");

    firstInput.value = 2;
    secondInput.value = 3;

    //const handleSubmit = jest.fn().mockImplementation((e) => e.preventDefault()); // gets rid of console error
    //render(<Form onSubmit={handleSubmit} />);

    // fireEvent.click(screen.getByRole("button"));
    //const onSubmit = jest.fn(e => e.preventDefault());

    formSubmit.click();

    expect(resultadoDiv.innerHTML).toEqual("");
  });
});
