function cargarDatos() {
  const promise = fetch("https://bryantuz.github.io/programacionWeb/peticionesHTTP/datos.xml");

  promise.then(function (response) {
    const divContent = document.getElementById("contenedor");

    if (divContent) {
      divContent.innerHTML = response;
    }
  });
}
