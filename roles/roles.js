let esNuevo = false;
let roles = [];

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

ejecutarBusqueda = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let empleadoBuscado = buscarEmpleado(valorCedula);

    if (empleadoBuscado == null) {
        alert("Empleado no existe.")
    } else {
        mostrarTextoEnCaja("txtCedula", empleadoBuscado.cedula);
        mostrarTextoEnCaja("txtNombre", empleadoBuscado.nombre);
        mostrarTextoEnCaja("txtApellido", empleadoBuscado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleadoBuscado.sueldo);
        deshabilitarComponente("txtCedula");
    }
}

buscarEmpleado = function (cedula) {
    let empleadoN;
    let empleadoEncontrado = null;
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
    let empleadoBuscado = buscarEmpleado(empleado.cedula);
    if (empleadoBuscado == null) {
        empleados.push(empleado);
        return true;
    }
    return false;
}

guardar = function () {

    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");

    let clienteValido = validar(valorCedula, valorNombre, valorApellido, valorSueldo);
    if (clienteValido) {
        let empleadoNuevo = {
            cedula: valorCedula,
            nombre: valorNombre,
            apellido: valorApellido,
            sueldo: valorSueldo
        };

        if (esNuevo) {
            let agregado = agregarEmpleado(empleadoNuevo);
            if (agregado) {
                alert("Empleado guardado correctamente.");
                mostrarEmpleados();
                //guardarYDeshabilitar();
                esNuevo = false;
            } else {
                alert("Ya existe el empleado con cedula " + valorCedula);
            }
        } else {
            let empleadoExistente = buscarEmpleado(valorCedula);
            if (empleadoExistente) {
                empleadoExistente.nombre = valorNombre;
                empleadoExistente.apellido = valorApellido;
                empleadoExistente.sueldo = valorSueldo;
                alert("Empleado modificado exitosamente.");
                mostrarEmpleados();
                guardarYDeshabilitar();
            } else {
                alert("No se encontró un empleado con la cedula " + valorCedula);
            }

        }
    } else {
        alert('Corregir los errores en las cajas de texto')
    }
}
/*
guardar = function () {

    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");

    let clienteValido = validar(valorCedula, valorNombre, valorApellido, valorSueldo);
    if (clienteValido == true) {
        esNuevo = esNuevo;
    }

    let empleadoNuevo = {};
    if (esNuevo) {
        let agregado;
        empleadoNuevo.cedula = valorCedula;
        empleadoNuevo.nombre = valorNombre;
        empleadoNuevo.apellido = valorApellido;
        empleadoNuevo.sueldo = valorSueldo;
        agregado = agregarEmpleado(empleadoNuevo);
        if (agregado == true) {
            alert("Empleado guardado correctamente.");
            mostrarEmpleados();
            guardarYDeshabilitar();
            esNuevo = false;
        } else {
            alert("Ya existe el empleado con cedula " + valorCedula);
        }
    } else {
        let empleadoR = buscarEmpleado(empleadoNuevo.cedula);

        if(empleadoR) {
            empleadoR.nombre = valorNombre;
            empleadoR.apellido = valorApellido;
            empleadoR.sueldo = valorSueldo;
            alert("Empleado modificado exitosamente.");
            mostrarEmpleados();
            guardarYDeshabilitar();
        } else {

        } 
    }
}
*/

guardarYDeshabilitar = function () {
    document.getElementById("txtCedula").value = '';
    document.getElementById("txtNombre").value = '';
    document.getElementById("txtApellido").value = '';
    document.getElementById("txtSueldo").value = '';
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

ejecutarNuevo = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
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

    mostrarRoles();
    deshabilitarComponente("btnGuardarRol");
}

mostrarOpcionResumen = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
}

validar = function (cedula, nombre, apellido, sueldo) {
    let msgError = "";
    let error = 0;

    // Valida que el campo cedula tenga 10 caracteres y sean solo digitos.
    if (cedula == '') {
        mostrarTexto("lblErrorCedula", "Este campo es obligatorio.");
        error++;
    } else if (cedula.length != 10) {
        msgError = "La cedula debe tener 10 digitos.";
        mostrarTexto("lblErrorCedula", msgError);
        error++;
    } else if (cedula.length == 10) {
        for (let i = 0; i < cedula.length; i++) {
            if (!esDigito(cedula[i])) {
                msgError = "La cedula debe contener solamente digitos.";
                mostrarTexto("lblErrorCedula", msgError);
                error++;
            } else {
                mostrarTexto("lblErrorCedula", "");
            }
        }
    }

    // Valida que el campo nombre tenga 3 caracteres como minimo y sean solo mayusculas. 
    if (nombre != '') {
        if (nombre.length >= 3 && nombre.length <= 10) {
            for (let i = 0; i < nombre.length; i++) {
                if (!esMayuscula(nombre[i])) {
                    msgError = "El nombre debe estar en mayusculas.";
                    mostrarTexto("lblErrorNombre", msgError);
                    error++;
                } else {
                    mostrarTexto("lblErrorNombre", "");
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
                    msgError = "El apellido debe estar en mayusculas.";
                    mostrarTexto("lblErrorApellido", msgError);
                    error++;
                    break;
                } else {
                    mostrarTexto("lblErrorApellido", "");
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
    if (sueldo >= 400 && sueldo <= 5000) {
        let numFloat = esFlotante(sueldo);
        if (numFloat == false) {
            msgError = "El valor ingresado debe ser con decimal.";
            mostrarTexto("lblErrorSueldo", msgError);
            error++;
        } else {
            mostrarTexto("lblErrorSueldo", "");
        }
    } else {
        if (isNaN(sueldo)) {
            mostrarTexto("lblErrorSueldo", "Este campo es obligatorio.");
            error++;
        } else {
            msgError = "El valor ingresado debe estar entre 400 y 5000.";
            mostrarTexto("lblErrorSueldo", msgError);
            error++;
        }
    }

    if (error > 0) {
        return false
    } else {
        return true;
    }
}


buscarPorRol = function() {
    let cedulaRecuperada = recuperarTexto("txtBusquedaCedulaRol");
    let empleadoBuscado = buscarEmpleado(cedulaRecuperada);
    if(empleadoBuscado != null) {
        mostrarTexto("infoCedula", empleadoBuscado.cedula);
        mostrarTexto("infoNombre", empleadoBuscado.nombre + " " + empleadoBuscado.apellido);
        mostrarTexto("infoSueldo", empleadoBuscado.sueldo);
    } else {
        alert("No existe.");
    }
}

calcularAporteEmpleado = function(sueldo) {
    let result;
    result = (sueldo * 9.45) / 100;
    return result.toFixed(2);
}

calcularValorAPagar = function(sueldo, aporteIESS, descuento) {
    aporteIESS = calcularAporteEmpleado(sueldo);
    let result = (sueldo - aporteIESS) - descuento;
    return result.toFixed(2);
}

calcularRol = function() {
    let valorSueldo = recuperarFloatDiv("infoSueldo");
    let valorDescuento = recuperarFloat("txtDescuentos");

    if(esFlotante(valorDescuento)) {
        if(valorDescuento >= 0 && valorDescuento <= valorSueldo) {
            let aporteEmpleado = calcularAporteEmpleado(valorSueldo);
            let totalAPagar = calcularValorAPagar(valorSueldo, aporteEmpleado, valorDescuento);
            mostrarTexto("infoIESS", aporteEmpleado);
            mostrarTexto("infoPago", totalAPagar)
            habilitarComponente("btnGuardarRol");
        }
    }
}

buscarRol = function(cedula) {
    let rol = null;
    for(let i = 0; i < roles.length; i++) {
        let buscar = roles[i];
        if(buscar.cedula == cedula) {
            rol = buscar;
            break;
        }
    }
    return rol;
}

agregarRol = function(rol) {
    let rolBuscado = buscarRol(rol.cedula);
    if(rolBuscado == null) {
        roles.push(rol);
        alert("Registro exitoso.");
    } else {
        alert("Rol existente.");
    }   
}

calcularAporteEmpleador = function(sueldoEmpleado) {
    let valorAporte = (sueldoEmpleado * 11.15) / 100;
    return valorAporte;
}

guardarRol = function() {
    let valorIESS = recuperarFloatDiv("infoIESS");
    let valorAPagar = recuperarFloatDiv("infoPago");
    let valorCedula = recuperarTextoDiv("infoCedula");
    let valorNombre = recuperarTextoDiv("infoNombre");
    let valorSueldo = recuperarFloatDiv("infoSueldo");

    let valorAporteEmpleador = calcularAporteEmpleador(valorSueldo);

    let rol = {};
    rol.cedula = valorCedula;
    rol.nombre = valorNombre;
    rol.sueldo = valorSueldo;
    rol.valorAPagar = valorAPagar;
    rol.aporteEmpleado = valorIESS;
    rol.aporteEmpleador = valorAporteEmpleador;

    agregarRol(rol);
    deshabilitarComponente("btnGuardarRol");
    mostrarRoles();
    mostrarTotales();
}

mostrarRoles = function() {
    let cmpRol = document.getElementById("tablaResumen");
    let crearTablaRoles = "<table><tr><th>CEDULA</th><th>NOMBRE</th><th>PAGAR</th><th>A/EMPLEADO</th><th>A/EMPLEADOR</th></tr>";
    for(let i = 0; i < roles.length; i++) {
        let agregarRol = roles[i];
        crearTablaRoles += "<tr><td>" + agregarRol.cedula + "</td>"
                        + "<td>" + agregarRol.nombre + "</td>"
                        + "<td>" + agregarRol.valorAPagar + "</td>"
                        + "<td>" + agregarRol.aporteEmpleado + "</td>"
                        + "<td>" + agregarRol.aporteEmpleador + "</td>"
    }
    crearTablaRoles += "</table>";
    cmpRol.innerHTML = crearTablaRoles;
}

mostrarTotales = function() {
    let totalEmpleado = 0 ;
    let totalEmpleador = 0;
    let totalAPagar = 0;
    let totalNomina = 0;

    for(let i = 0; i < roles.length; i++) {
        let valores = roles[i];
        totalAPagar += valores.valorAPagar;
        totalEmpleador += valores.aporteEmpleador;
        totalEmpleado += valores.aporteEmpleado;
    }

    totalNomina = totalAPagar + totalEmpleador + totalEmpleado;
    mostrarTexto("infoTotalPago", totalAPagar);
    mostrarTexto("infoAporteEmpresa", totalEmpleador);
    mostrarTexto("infoAporteEmpleado", totalEmpleado);
    mostrarTexto("infoNomina", totalNomina);
}