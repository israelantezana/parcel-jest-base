export default class CalculadoraView {
  presenterPath() {
    return `./presenterSumador.js`;
  }

  render() {
    return `<div>
        <h1>Sumador</h1>
        <form id="sumar-form">
          <label for="primer-numero">Primer número:</label>
          <input type="number" id="primer-numero" />
          <label for="segundo-numero">Segundo número:</label>
          <input type="number" id="segundo-numero" />
          <input type="submit" value="Sumar" id="sumar-button" />
        </form>
        <div id="resultado-div"></div>
</div>`;
  }
}
