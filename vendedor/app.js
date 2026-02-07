const SUELDO_BASE = 500;
const META_VENTAS = 10;


pintarEstrellas=function(numeroEstrellas){
  if (numeroEstrellas == 0) {
     mostrarTextoEnDiv("estrellas","☆☆☆☆☆");
  }
  else if (numeroEstrellas == 1) {
     mostrarTextoEnDiv("estrellas","★☆☆☆☆");
  }else if (numeroEstrellas == 2) {
    mostrarTextoEnDiv("estrellas", "★★☆☆☆");
  } else if (numeroEstrellas == 3) {
    mostrarTextoEnDiv("estrellas", "★★★☆☆");
  } else if (numeroEstrellas == 4) {
    mostrarTextoEnDiv("estrellas", "★★★★☆");
  } else if (numeroEstrellas == 5) {
    mostrarTextoEnDiv("estrellas", "★★★★★");
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

calcularEstrellas = function (ventasMes) {
  if (ventasMes < META_VENTAS) {
    return 0;
  } else if (ventasMes == META_VENTAS) {
    return 1;
  } else if (ventasMes <= META_VENTAS + 1) {
    return 2;
  } else if (ventasMes <= META_VENTAS + 2) {
    return 3;
  } else if (ventasMes <= META_VENTAS + 3) {
    return 4;
  } else {
    return 5;
  }
}
crearNuevo = function () {

  habilitar("btnCalcular");
  deshabilitar("btnNuevo");
  habilitar("txtNombre");
  habilitar("txtApellido");
  habilitar("txtVentas");

  mostrarTextoEnCaja("txtNombre", "");
  mostrarTextoEnCaja("txtApellido", "");
  mostrarTextoEnCaja("txtVentas", "");

  pintarEstrellas(0);

  mostrarTextoEnDiv("base", "");
  mostrarTextoEnDiv("bono", "");
  mostrarTextoEnDiv("total", "");
  mostrarTextoEnDiv("mensaje", "");
}




calcularSueldo=function(){
   //A. recupera la información de nombre y apellido y guarda en variables
   let nombre = recuperarTexto("txtNombre");
   let apellido = recuperarTexto("txtApellido");  
   //B. muestra el valor del sueldo base en el div "base"
   mostrarTextoEnDiv("base",SUELDO_BASE);
   //C. recupera la información de la caja de texto de ventas y guarda en una variable
   let ventasMes = recuperarEntero("txtVentas");
   //D. invoca a la función calcularBono, pasándole el numero de ventas y guarda la respuesta en una variable
   let bono = calcularBono (ventasMes);
   //E. muestra las ventas adicionales en el div "bono"
   mostrarTextoEnDiv("bono", bono);
    //F. suma el bono y el sueldo base y muestra en el div "total"
    let total = SUELDO_BASE + bono ;
    mostrarTextoEnDiv("total",total);
    //G. invocar a calcularEstrellas, guardar el resultado en una variable
    let numeroEstrellas = calcularEstrellas(ventasMes);
    //H. con el valor obtenido, invocar a pintarEstrellas
    pintarEstrellas(numeroEstrellas);
    //I. en el div "mensaje" muestra un mensaje <nombre> <apellido> este mes cobrará USD <sueldo>
    let mensaje = nombre + " " + apellido + " este mes cobrará USD " + total;
    mostrarTextoEnDiv("mensaje", mensaje);
    //tomando los valores y apellidos ingresados en las cajas y el sueldo calculado incluido los bonos
    
    //Ejemplo: Juan Perez este mes cobrará USD 560
    //J. Deshabilitar el boton Calcular y las 3 cajas de texto
    deshabilitar("btnCalcular");
    deshabilitar("txtNombre");
    deshabilitar("txtApellido");
    deshabilitar("txtVentas");
    habilitar("btnNuevo");
}

