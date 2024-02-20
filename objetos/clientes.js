let clientes = [
    {cedula: "256321", nombre: "Hector", edad: 29},
    {cedula: "589654", nombre: "Pedro", edad: 56},
    {cedula: "254698", nombre: "Juan", edad: 19}
]

crearCliente = function() {
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");
    let valorCedula = recuperarTexto("txtCedula");
    let nuevoCliente = {};
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;
    nuevoCliente.cedula = valorCedula;

    agregarCliente(nuevoCliente);
    mostrarClientes();
}

agregarCliente = function(cliente) {
    let result;
    result = buscarCliente(cliente.cedula);
    if(result == null) {
        clientes.push(cliente);
        alert("Cliente agregado.")
    } else {
        alert("El cliente con cedula " + cliente.cedula + " ya existe.");
    }

}

buscarCliente = function(cedula) {
    let elementoCliente;
    let clienteEncontrado = null;
    for(let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if(elementoCliente.cedula == cedula) {
            clienteEncontrado =  elementoCliente;
            break;
        }
    }
    return clienteEncontrado;
}

ejecutarBusqueda = function() {
    let valorCedula = recuperarTexto("txtBuscarCedula");
    let cliente = buscarCliente(valorCedula);

    if(cliente == null) {
        alert("Cliente no encontrado.");
    } else {
        mostrarTextoEnCaja("txtNombre", cliente.nombre);
        mostrarTextoEnCaja("txtEdad", cliente.edad);
        mostrarTextoEnCaja("txtCedula", cliente.cedula);
    }
}

mostrarClientes = function() {
    let cmpTabla = document.getElementById("tablaClientes");
    let crearTabla = "<table><tr><th>Cedula</th><th>Nombre</th><th>Edad</th></tr>";
    for(let i = 0; i < clientes.length; i++) {
        let valorCliente = clientes[i];
        crearTabla += "<tr><td>" + valorCliente.cedula + "</td>";
        crearTabla += "<td>" + valorCliente.nombre + "</td>";
        crearTabla += "<td>" + valorCliente.edad + "</td></tr>";
    }
    crearTabla += "</table>";
    cmpTabla.innerHTML = crearTabla;
}

guardarCambios = function() {
    
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarInt("txtEdad");
    let valorCedula = recuperarTexto("txtCedula");

    let datosCliente = {};
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;
    datosCliente.cedula = valorCedula;

    modificarCliente(datosCliente);
    mostrarClientes();
}

modificarCliente = function(cliente) {
    let clienteEncontrado = buscarCliente(cliente.cedula);

    if(clienteEncontrado != null) {
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;
    }
}