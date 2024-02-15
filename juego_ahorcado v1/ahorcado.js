//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula = function(caracter) {
    let ascii = caracter.charCodeAt();
    if(ascii > 64 && ascii < 91) {
        return true;
    } else {
        return false;
    }
}

console.log(esMayuscula("s"));