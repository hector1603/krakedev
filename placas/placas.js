let cmpEstado;
let cmpErrores;
let cmpProvicia;
let cmpTipo;
let cmpSalida;

validarPlaca = function() {
    let cmpPlaca;
    let provincia;
    let tipo;
    let salida;
    let msg;
    cmpPlaca = document.getElementById("txtPlaca").value;
    erroresEstructura = validarEstructura(cmpPlaca);

    cmpEstado = document.getElementById("lblEstadoPlaca");
    cmpErrores = document.getElementById("lblMsgError");
    cmpProvicia = document.getElementById("lblProvincia");
    cmpTipo = document.getElementById("lblTipoVehiculo");
    cmpSalida = document.getElementById("lblSalida");
    
    if(erroresEstructura === null) {
        msg = "Estructura válida.";
        cmpEstado.innerHTML = msg;
        cmpErrores.innerHTML = '';
        provincia = obtenerProvincia(cmpPlaca);
        tipo = obtenerTipoVehiculo(cmpPlaca);
        salida = obtenerDiaPicoYPlaca(cmpPlaca);
        if(provincia != null && tipo != null) {
            cmpProvicia.innerHTML = "Provincia: " + provincia;
            cmpTipo.innerHTML = "Tipo de vehiculo: " + tipo;
            cmpSalida.innerHTML = "Salida: " + salida;
        }
    } else {
        msg = "Estructura incorrecta ";
        cmpEstado.innerHTML = msg;
        if(provincia == null && tipo == null) {
            cmpProvicia.innerHTML = "Provincia incorrecta";
            cmpTipo.innerHTML = "Tipo de vehiculo incorrecto";
            cmpSalida.innerHTML = '';
        }
        cmpErrores.innerHTML = erroresEstructura;
    }
}
