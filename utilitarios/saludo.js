saludar = function() {
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let edad = recuperarInt("txtEdad");
    let estatura = recuperarFlotante("txtEstatura");
    let message = "Bienvenido " + nombre + " " + apellido; 

    mostrarTexto("lblTexto", message);
    mostrarImagen("lblImagen", "./img/saludar.gif");

    mostrarTextoEnCaja("txtNombre", "");
}