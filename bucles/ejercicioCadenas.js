ejecutarCadena = function() {
    let mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

recorrerCadena = function(cadena) {
    let caracter;

    for(let i = 0; i < cadena.length; i++) {
        caracter = cadena.charAt(i);
        console.log("Caracter " + caracter + " Posicion " + i);
    }
}

let inversa = "";
recorrerInversa = function(cadena) {
    let caracter;
    let ultimoCaracter = cadena.length - 1;

    for(let i = ultimoCaracter; i >= 0; i--) {
        caracter = cadena.charAt(i);
        inversa += caracter;
    }
}

ejecutarInversa = function() {
    let mensaje = recuperarTexto("txtCadena");
    recorrerInversa(mensaje);
    mostrarTexto("lblCadena", inversa);
}