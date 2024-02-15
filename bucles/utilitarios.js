
mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}
mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = " " + mensaje;
}
mostrarTextoEnCaja = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.value = mensaje;
}

recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

recuperarInt = function (idComponente) {
    let valor = recuperarTexto(idComponente).trim();
    return valor === '' ? null : parseInt(valor, 10);
}

recuperarFloat = function (idComponente) {
    let valor = document.getElementById(idComponente).value.trim();
    return valor === '' ? null : parseFloat(valor, 10);
}

limpiar = function() {
    cmpCadena = document.getElementById("lblCadena").value = '';
}

esMayuscula = function(caracter) {
    let mayuscula = false;
    let ascci = caracter.charCodeAt(0);
    if(ascci > 64 && ascci < 91) {
        mayuscula = true;
    } else {
        mayuscula = false;
    }
    return mayuscula;
}
