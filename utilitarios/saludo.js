recuperarTexto = function(idComponente) {
    let componente;
    let valorComponente;
    componente = document.getElementById(idComponente);
    valorComponente = componente.value;
    return valorComponente;
}

saludar = function() {
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");

    alert("Hola " + nombre + " " + apellido);
}