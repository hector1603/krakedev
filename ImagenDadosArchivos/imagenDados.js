let puntos = 0;
let intentos = 5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);

    mostrarDado(resultado); 

    mostrarPuntos(resultado); 
    mostrarIntentos(); 
}

mostrarPuntos = function(numero) {
    puntos = puntos + numero;
    cambiarTexto("lblPuntos", puntos)

    if(puntos > 20 && intentos >= 0) {
        cambiarTexto("lblResultado", "GANASTE!!!");
        limpiar();
        puntos = 0;
    }
}

mostrarIntentos = function() {
    intentos = intentos - 1;
    cambiarTexto("lblLanzamientos", intentos);

    if(intentos == 0 && puntos < 20) {
        cambiarTexto("lblResultado", "GAME OVER");
        intentos = 5
        limpiar();
    }

    /*
    if(intentos == 0) {
        cambiarTexto("lblResultado", "GAME OVER");
        intentos = 5
        limpiar();
    }
    */
}

limpiar = function() {
    cambiarTexto("lblPuntos", "0");
    cambiarTexto("lblLanzamientos", "5");
    cambiarImagen("imgDado", "");
}

mostrarDado = function(numero) {
    if(numero == 1) {
        cambiarImagen("imgDado", "dados1.png");
    } else if(numero == 2) {
        cambiarImagen("imgDado", "dados2.png");
    } else if(numero == 3) {
        cambiarImagen("imgDado", "dados3.png");
    } else if(numero == 4) {
        cambiarImagen("imgDado", "dados4.png");
    } else if(numero == 5) {
        cambiarImagen("imgDado", "dados5.png");
    } else if(numero == 6) {
        cambiarImagen("imgDado", "dados6.png");
    }
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}