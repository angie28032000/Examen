const SUELDO_BASE = 500;
const META_VENTAS = 10;


pintarEstrellas=function(numeroEstrellas){
  if (numeroEstrellas == 0) {
     mostrarTextoEnDiv("estrellas","☆☆☆☆☆");
  }
  else if (numeroEstrellas == 1) {
     mostrarTextoEnDiv("estrellas","★☆☆☆☆");
  }
 
}

calcularBono = function (ventasMes) {
  if (ventasMes > META_VENTAS) {
    let ventasAdicionales = ventasMes - META_VENTAS;
    return ventasAdicionales * 30;
  } else {
    return 0;
  }
}

calcularSueldo=function(){
   //A. recupera la información de nombre y apellido y guarda en variables
   //B. muestra el valor del sueldo base en el div "base"
   mostrarTextoEnDiv("base",SUELDO_BASE);
   //C. recupera la información de la caja de texto de ventas y guarda en una variable
   let ventasMes = recuperarEntero("txtVentas");
   //D. invoca a la función calcularBono, pasándole el numero de ventas y guarda la respuesta en una variable
   let bono = calcularBono (ventasMes);
   //E. muestra las ventas adicionales en el div "bono"
    //F. suma el bono y el sueldo base y muestra en el div "total"
    //G. invocar a calcularEstrellas, guardar el resultado en una variable
    //H. con el valor obtenido, invocar a pintarEstrellas
    //I. en el div "mensaje" muestra un mensaje <nombre> <apellido> este mes cobrará USD <sueldo>
    //tomando los valores y apellidos ingresados en las cajas y el sueldo calculado incluido los bonos
    //Ejemplo: Juan Perez este mes cobrará USD 560
    //J. Deshabilitar el boton Calcular y las 3 cajas de texto
    //habilitar el botón Nuevo
    habilitar("btnNuevo");
}

