//idComponente: id de la caja de texto de donde se quiere obtener el dato
//retorna el valor recuperado como TEXTO 
recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

//idComponente: id de la caja de texto de donde se quiere obtener el dato
//retorna el valor recuperado como ENTERO
recuperarEntero = function (idComponente) {
    let valorCaja = recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
}

//idComponente: id del DIV donde se quiere mostrar el texto
//mensaje: lo que se muestra en la caja
//no retorna nada
mostrarTextoEnDiv = function (idComponenteDiv, mensaje) {
    let componente;
    componente = document.getElementById(idComponenteDiv);
    componente.textContent = mensaje;
}

//idComponente: id de la caja de texto donde se quiere mostrar el texto
//mensaje: lo que se muestra en la caja
//no retorna nada
mostrarTextoEnCaja = function (idComponenteCaja, mensaje) {
    let componente;
    componente = document.getElementById(idComponenteCaja);
    componente.value = mensaje;
}

//idComponente: id del componente que va a deshabilitar
//no retorna nada
deshabilitar = function(idComponente){
    let componente;
    componente = document.getElementById(idComponente);
    componente.disabled=true;
    
}

//idComponente: id del componente que va a habilitar
//no retorna nada
habilitar = function(idComponente){
    let componente;
    componente = document.getElementById(idComponente);
    componente.disabled=false;
    
}
