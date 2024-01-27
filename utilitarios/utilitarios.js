recuperarTexto = function(idComponente) {
    let componente;
    let valorComponente;
    componente = document.getElementById(idComponente);
    valorComponente = componente.value;
    return valorComponente;
}

recuperarInt = function(idComponente) {
    let valor = recuperarTexto(idComponente);
    let valorEntero = parseInt(valor);
    return valorEntero;
}

recuperarFlotante = function(idComponente) {
    let valor = recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valor);
    return valorFlotante;
}

mostrarTexto = function(idComponente, message) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = message;
}

mostrarTextoEnCaja = function(idComponente, message) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = message;
}

mostrarImagen = function(idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}