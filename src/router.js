import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import NotFoundView from "../views/NotFoundView";
import CalculadoraView from "../views/CalculadoraView";
import SaludadorView from "../views/SaludadorView";

const route = (event) => {
  //Np se ven necesarios:
  //event = event || window.event;
  //event.preventDefault();
  //window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: new NotFoundView(),
  "/": new HomeView(),
  "/about": new AboutView(),
  "/calculadora": new CalculadoraView(),
  "/saludador": new SaludadorView(),
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const view = routes[path] || routes[404];
  const html = view.render();
  document.getElementById("main-page").innerHTML = html;

  //solucion fea, por que import en parcel no acepta que se le envie la ruta como variable/paramentro
  try {
    if (path == "/calculadora") {
      await import("./presenterSumador.js");
    }
    if (path == "/saludador") {
      await import("./presenterSaludador.js");
    }
  } catch (error) {
    console.error("Error al cargar el presentador del Sumador:", error);
  }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
