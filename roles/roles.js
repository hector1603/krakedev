let esNuevo = false;

let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "5231456985", nombre: "Mario", apellido: "Cruz", sueldo: 560.0 }
]

mostrarEmpleados = function () {
    let tablaEmpleados = document.getElementById("tablaEmpleados");
    let crearTabla = "<table><tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";
    for (let i = 0; i < empleados.length; i++) {
        let empleado = empleados[i];
        crearTabla += "<tr><td>" + empleado.cedula + "</td>"
            + "<td>" + empleado.nombre + "</td>"
            + "<td>" + empleado.apellido + "</td>"
            + "<td>" + empleado.sueldo + "</td></tr>";
    }
    crearTabla += "</table>";
    tablaEmpleados.innerHTML = crearTabla;
}

buscarEmpleado = function (cedula) {
    let empleadoN;
    let empleadoEncontrado = true;
    for (let i = 0; i < empleados.length; i++) {
        empleadoN = empleados[i];
        if (empleadoN.cedula == cedula) {
            empleadoEncontrado = empleadoN;
            break;
        }
    }
    return empleadoEncontrado;
}

agregarEmpleado = function (empleado) {
    esNuevo = buscarEmpleado(empleado.cedula);
    if (esNuevo == true) {
        empleados.push(empleado);
        return true;
    }
    return false;
}

guardar = function () {

    let msgError = "";

    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");

    let clienteValido = validar(valorCedula, valorNombre, valorApellido, valorSueldo);

    if(clienteValido == true) {
        esNuevo = true;
    }
    /*
    // Valida que el campo cedula tenga 10 caracteres y sean solo digitos.
    if (valorCedula != '') {
        if (valorCedula.length == 10) {
            for (let i = 0; i < valorCedula.length; i++) {
                if (!esDigito(valorCedula[i])) {
                    msgError = "La cedula debe contener solamente digitos."
                    mostrarTexto("lblErrorCedula", msgError);
                }
            }
        } else {
            msgError = "La cedula debe tener 10 digitos.";
            mostrarTexto("lblErrorCedula", msgError);
        }
    } else {
        mostrarTexto("lblErrorCedula", "Este campo es obligatorio.");
    }

    // Valida que el campo nombre tenga 3 caracteres como minimo y sean solo mayusculas.
    if (valorNombre != '') {
        if (valorNombre.length >= 3 && valorNombre.length <= 10) {
            for (let i = 0; i < valorNombre.length; i++) {
                if (!esMayuscula(valorNombre[i])) {
                    msgError = "El nombre debe estar en mayusculas.";
                    mostrarTexto("lblErrorNombre", msgError);
                }
            }
        } else {
            msgError = "El nombre debe tener entre 3 y 10 caracteres.";
            mostrarTexto("lblErrorNombre", msgError);
        }
    } else {
        mostrarTexto("lblErrorNombre", "Este campo es obligatorio.");
    }

    // Valida que el campo apellido tenga como minimo 3 caracteres y que sean solo mayusculas.
    if (valorApellido != '') {
        if (valorApellido.length >= 3 && valorApellido.length <= 10) {
            for (let i = 0; i < valorApellido.length; i++) {
                if (!esMayuscula(valorApellido[i])) {
                    msgError = "El apellido debe estar en mayusculas."
                    mostrarTexto("lblErrorApellido", msgError);
                }
            }
        } else {
            msgError = "El apellido debe tener entre 3 y 10 caracteres.";
            mostrarTexto("lblErrorApellido", msgError);
        }
    } else {
        mostrarTexto("lblErrorApellido", "Este campo es obligatorio.");
    }

    // Valida que el valor ingresado en sueldo sea un flotante.
    if (!isNaN(valorSueldo)) {
        if (valorSueldo >= 400 && valorSueldo <= 5000) {
            let numFloat = esFlotante(valorSueldo);
            if (numFloat == false) {
                msgError = "El valor ingresado debe ser con decimal.";
                mostrarTexto("lblErrorCedula", "Este campo es obligatorio.");
            }
        } else {
            msgError = "El valor ingresado no esta dentro del rango válido.";
            mostrarTexto("lblErrorSueldo", msgError);
        }
    } else {
        msgError = "Este campo es obligatorio.";
        mostrarTexto("lblErrorSueldo", msgError);
    }
    */

    if (esNuevo == true) {
        let agregado;
        let empleadoNuevo = {};
        empleadoNuevo.cedula = valorCedula;
        empleadoNuevo.nombre = valorNombre;
        empleadoNuevo.apellido = valorApellido;
        empleadoNuevo.sueldo = valorSueldo;
        agregado = agregarEmpleado(empleadoNuevo);
        if (agregado == true) {
            alert("Empleado guardado correctamente.");
            mostrarEmpleados();
            document.getElementById("txtCedula").value = '';
            document.getElementById("txtNombre").value = '';
            document.getElementById("txtApellido").value = '';
            document.getElementById("txtSueldo").value = '';
            deshabilitarComponente("txtCedula");
            deshabilitarComponente("txtNombre");
            deshabilitarComponente("txtApellido");
            deshabilitarComponente("txtSueldo");
            deshabilitarComponente("btnGuardar");
        } else {
            alert("Ya existe el empleado con cedula " + valorCedula);
        }
    } else if (valorCedula == '' || valorNombre == '' || valorApellido == '' || valorSueldo == '') {
        alert("Completa los campos obligatorios por favor!")

    }
}

ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    
}

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    mostrarEmpleados();

    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");

    ocultarComponente("divRol");
    ocultarComponente("divResumen");
}

mostrarOpcionRol = function () {
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
}

validar = function (cedula, nombre, apellido, sueldo) {
    let error = 0;

    // Valida que el campo cedula tenga 10 caracteres y sean solo digitos.
    if (cedula != '') {
        if (cedula.length == 10) {
            for (let i = 0; i < cedula.length; i++) {
                if (!esDigito(cedula[i])) {
                    msgError = "La cedula debe contener solamente digitos.";
                    mostrarTexto("lblErrorCedula", msgError);
                    error++;
                }
            }
        } else {
            msgError = "La cedula debe tener 10 digitos.";
            mostrarTexto("lblErrorCedula", msgError);
            error++;
        }
    } else {
        mostrarTexto("lblErrorCedula", "Este campo es obligatorio.");
        error++;
    }

    // Valida que el campo nombre tenga 3 caracteres como minimo y sean solo mayusculas.
    if (nombre != '') {
        if (nombre.length >= 3 && nombre.length <= 10) {
            for (let i = 0; i < nombre.length; i++) {
                if (!esMayuscula(nombre[i])) {
                    msgError = "El nombre debe estar en mayusculas.";
                    mostrarTexto("lblErrorNombre", msgError);
                    error++;
                }
            }
        } else {
            msgError = "El nombre debe tener entre 3 y 10 caracteres.";
            mostrarTexto("lblErrorNombre", msgError);
            error++;
        }
    } else {
        mostrarTexto("lblErrorNombre", "Este campo es obligatorio.");
        error++;
    }

    // Valida que el campo apellido tenga como minimo 3 caracteres y que sean solo mayusculas.
    if (apellido != '') {
        if (apellido.length >= 3 && apellido.length <= 10) {
            for (let i = 0; i < apellido.length; i++) {
                if (!esMayuscula(apellido[i])) {
                    msgError = "El apellido debe estar en mayusculas."
                    mostrarTexto("lblErrorApellido", msgError);
                    error++;
                }
            }
        } else {
            msgError = "El apellido debe tener entre 3 y 10 caracteres.";
            mostrarTexto("lblErrorApellido", msgError);
            error++;
        }
    } else {
        mostrarTexto("lblErrorApellido", "Este campo es obligatorio.");
        error++;
    }

    // Valida que el valor ingresado en sueldo sea un flotante.
    if (!isNaN(sueldo)) {
        if (sueldo >= 400 && sueldo <= 5000) {
            let numFloat = esFlotante(sueldo);
            if (numFloat == false) {
                msgError = "El valor ingresado debe ser con decimal.";
                mostrarTexto("lblErrorCedula", "Este campo es obligatorio.");
                error++;
            }
        } else {
            msgError = "El valor ingresado no esta dentro del rango válido.";
            mostrarTexto("lblErrorSueldo", msgError);
            error++
        }
    } else {
        msgError = "Este campo es obligatorio.";
        mostrarTexto("lblErrorSueldo", msgError);
        error++;
    }
    if(error == 0) {
        mostrarTexto("lblErrorCedula", "");
        mostrarTexto("lblErrorNombre", "");
        mostrarTexto("lblErrorApellido", "");
        mostrarTexto("lblErrorSueldo", "");
        return true;
    } else {
        return false
    }

}
