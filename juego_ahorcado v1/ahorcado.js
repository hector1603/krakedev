//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;

esMayuscula = function(caracter) {
    let ascii = caracter.charCodeAt();
    if(ascii > 64 && ascii < 91) {
        return true;
    } else {
        return false;
    }
}

guardarPalabra = function() {
    let palabra = recuperarTexto("txtSecreta");
    let palabraMayuscula = false;

    if(palabra.length == 5) {
        for(let i = 0; i < palabra.length; i++) {
            let letra = palabra.charAt(i);
            if(esMayuscula(letra)) {
                palabraMayuscula = true;
            } else {
                palabraMayuscula = false;
                break;
            }
        }
        
        if(palabraMayuscula == true) {
            palabraSecreta = palabra;
            console.log(palabraSecreta);
        } else {
            alert("Ingresa una palabra de 5 letras mayusculas.");
        }
    } else {
        alert("Error"); 
    }

}