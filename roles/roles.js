let esNuevo = false;

let empleados = [
    {cedula:"1714616123", nombre:"John", apellido:"Cena", sueldo:500.0},
    {cedula:"0914632123", nombre:"Luisa", apellido:"Gonzalez", sueldo:900.0},
    {cedula:"5231456985", nombre:"Mario", apellido:"Cruz", sueldo:560.0}
]

mostrarEmpleados = function() {
    let tablaEmpleados = document.getElementById("tablaEmpleados");
    let crearTabla = "<table><tr><th>CEDULA</th><th>NOMBRE</th><th>APELLIDO</th><th>SUELDO</th></tr>";
    for(let i = 0; i < empleados.length; i++) {
        let empleado = empleados[i];
        crearTabla += "<tr><td>" + empleado.cedula + "</td>"
                    +"<td>" + empleado.nombre + "</td>"
                    +"<td>" + empleado.apellido + "</td>"
                    +"<td>" + empleado.sueldo + "</td></tr>";
    }
    crearTabla += "</table>";
    tablaEmpleados.innerHTML = crearTabla;
}

ejecutarNuevo = function() {
    esNuevo = true;
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}

mostrarOpcionEmpleado = function() {
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

mostrarOpcionRol = function() {
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function() {
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
}
