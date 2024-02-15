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

esDigito = function(caracter) {
    let digito = false;
    let ascii = caracter.charCodeAt(0);
    if(ascii > 47 && ascii < 58 ) {
        digito = true;
    } else {
        digito = false;
    }
    return digito
}

esGuion = function(caracter) {
    let guion = false;
    let ascii = caracter.charCodeAt(0);
    if(ascii === 45) {
        guion = true;
    } else {
        guion = false;
    }
    return guion;
}

esAsterisco = function(caracter) {
    let guion = false;
    let ascii = caracter.charCodeAt(0);
    if(ascii === 42) {
        guion = true;
    } else {
        guion = false;
    }
    return guion;
}

esGuionBajo = function(caracter) {
    let guion = false;
    let ascii = caracter.charCodeAt(0);
    if(ascii === 95) {
        guion = true;
    } else {
        guion = false;
    }
    return guion;
}

recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}