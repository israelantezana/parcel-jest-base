export default class SaludadorView {
  presenterPath() {
    return "src/presenter.js";
  }

  render() {
    return `<div>
          <h1>Saludador</h1>
          <form id="saludador-form">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" />
            <input type="submit" value="Saludar" id="saludar-button" />
          </form>
          <div id="saludo-div"></div>
  </div>`;
  }
}
