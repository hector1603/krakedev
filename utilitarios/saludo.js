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

saludar = function() {
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFlotante("txtEstatura");
    let message = "Bienvenido " + nombre + " " + apellido; 

    mostrarTexto("lblTexto", message);
}

mostrarTexto = function(idComponente, message) {
    let componente;
    componente = document.getElementById("lblTexto")
    componente.innerText = message;
}