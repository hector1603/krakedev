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
