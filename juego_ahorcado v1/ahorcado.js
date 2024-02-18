//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta = "";
let intentos = 0;
let coincidencias = 0;
let errores = 0;
//let tiros = 9;

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

mostrarLetra = function(letra, posicion) {
    if(posicion == 0) {
        mostrarTexto("div0", letra);
    } else if(posicion == 1) {
        mostrarTexto("div1", letra);
    } else if(posicion == 2) {
        mostrarTexto("div2", letra);
    } else if(posicion == 3) {
        mostrarTexto("div3", letra);
    } else if(posicion == 4) {
        mostrarTexto("div4", letra);
    } 
}

validar = function(letra) {
    let letrasEncontradas = 0;
    let letraCadena;

    for(let i = 0; i < palabraSecreta.length; i++) {
        letraCadena = palabraSecreta.charAt(i);
        if(letraCadena == letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
        }
    }
    
    if(letrasEncontradas > 0) {
        coincidencias += letrasEncontradas;
    } else {
        errores++;
        alert("La letra no es parte de la palabra.");
        mostrarAhorcado();
    }
}

ingresarLetra = function() {
    //mostrarTexto("txtTiros", tiros--);
    intentos++;
    let letraRecuperada = recuperarTexto("txtLetra");
    if(esMayuscula(letraRecuperada)) {
        validar(letraRecuperada);
        if(coincidencias == 5) {
            alert("Has ganado.")
            mostrarImagen("ahorcadoImagen", "ganador.gif");
        }
        if(intentos == 10) {
            alert("Has perdido.");
            mostrarImagen("ahorcadoImagen", "gameOver.gif");
            palabraSecreta = "";
            document.getElementById("txtSecreta").value = '';
            document.getElementById("txtLetra").value = '';
        }
    } else {
        alert("Solo se aceptan mayusculas.");
    }
}

mostrarAhorcado = function() {
    if(errores == 1) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_01.png");
    } else if(errores == 2) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_02.png"); 
    } else if(errores == 3) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_03.png"); 
    } else if(errores == 4) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_04.png"); 
    } else if(errores == 5) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_05.png"); 
    } else if(errores == 6) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_06.png"); 
    } else if(errores == 7) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_07.png"); 
    } else if(errores == 8) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_08.png"); 
    } else if(errores == 9) {
        mostrarImagen("ahorcadoImagen", "Ahorcado_09.png"); 
    }
}