let resultado = "";
ejecutarValidacion = function () {
    let pass = recuperarTexto("txtPassword");
    let result = validarPassword(pass);

    if (result == "") {
        mostrarTexto("lblPassword", "Password Correcto");
    } else {
        mostrarTexto("lblPassword", resultado);
    }
}

validarPassword = function (password) {
    let existeMayuscula = false;
    let existeDigito = false;
    let caracterEspecial = false;
    let caracter;
    if (password.length < 8 || password.length > 16) {
        resultado = "La contraseña debe tener entre 8 a 16 caracteres \n";
    } else {
        resultado = resultado;
    }

    // Valida la existencia de al menos una letra mayuscula
    for (let i = 0; i < password.length; i++) {
        caracter = password.charAt(i);
        if (esMayuscula(caracter)) {
            existeMayuscula = true;
        }
    }
    if(existeMayuscula == true) {
        resultado = resultado;
    } else {
        resultado += " Debe contener al menos una letra mayuscula \n";
    }

    // Valida la existencia de al menos un dígito
    for (let i = 0; i < password.length; i++) {
        caracter = password.charAt(i);
        if (esDigito(caracter)) {
            existeDigito = true;
        } 
    }
    if(existeDigito == true) {
        resultado = resultado;
    } else {
        resultado += " Debe contener al menos un dígito \n";
    }

    // Valida la existencia de al menos un caracter especial que puede ser:
    // -
    // *
    // _
    for (let i = 0; i < password.length; i++) {
        caracter = password.charAt(i);
        if (esGuion(caracter)) {
            caracterEspecial = true;
        } else if (esAsterisco(caracter)) {
            caracterEspecial = true;
        } else if (esGuionBajo(caracter)) {
            caracterEspecial = true;
        } 
    }
    if(caracterEspecial == true) {
        resultado = resultado;
    } else {
        resultado += " Debe contener al menos un caracter especial -, * o _";
    }

    return resultado;
}
