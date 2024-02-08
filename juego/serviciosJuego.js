obtenerAleatorio = function() {
    let numero = parseInt((Math.random() * 3) + 1);
    return numero;
}

generarElemento = function() {
    let mano = obtenerAleatorio()
    let cadena;

    if(mano === 1) {
        cadena = "Piedra";
    } else if(mano === 2) {
        cadena = "Papel";
    } else if(mano === 3) {
        cadena = "Tijera";
    }
    return cadena;
}

 
determinarGanador = function(eleccionJugador1, eleccionJugador2) {
    let estado;
    if(eleccionJugador1 == eleccionJugador2) {
        estado = 0;        
    } else if(eleccionJugador1 == "Piedra" && eleccionJugador2 == "Tijera") {
        estado = 1;
    } else if(eleccionJugador1 == "Papel" && eleccionJugador2 == "Piedra") {
        estado = 1;
    } else if(eleccionJugador1 == "Tijera" && eleccionJugador2 == "Papel") {
        estado = 1;
    } else {
        estado = 2;
    } 
    return estado;    
}


generarRuta = function(nombre) {
    let ruta;
    if(nombre == "Piedra") {
        ruta = "img/piedra.png";
    } else if(nombre == "Papel") {
        ruta = "img/papel.png";
    } else if(nombre == "Tijera") {
        ruta = "img/tijera.png";
    }
    return ruta;
}

limpiar = function() {
    cambiarImagen("imgComputador", "");
    mostrarTexto("txtResultado", "");
    mostrarTexto("puntosComputador", "");
    mostrarTexto("puntosUsuario", "");
    mostrarTexto("result", "")
}