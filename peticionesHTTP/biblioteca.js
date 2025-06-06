function cargarDatos() {
  const promise = fetch("http://localhost/programacionweb/programacionWeb/peticionesHTTP/datos.xml");

  promise.then(function (response) {
    const divContent = document.getElementById("contenedor");

    if (divContent) {
      divContent.innerHTML = response;
    }
  });
}
