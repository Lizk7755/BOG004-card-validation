/* eslint-disable no-debugger */
/* eslint-disable no-console */

import validator from './validator.js';

document.getElementById("siguientevalidar").addEventListener("click",traerNroTarjeta)

function traerNroTarjeta() {

  const selectCreditCardNumber = document.getElementById("digitostarjeta");
  const selectMensaje = document.getElementById("mensaje-validacion")

  const creditCardNumber = selectCreditCardNumber.value


  if(creditCardNumber === '') return selectMensaje.innerHTML ='Por favor ingresar datos'

  const numeroEnmascarado = validator.maskify(creditCardNumber)
  selectCreditCardNumber.value = numeroEnmascarado

  const numeroValidado = validator.isValid(creditCardNumber)
  if(numeroValidado) {
    return selectMensaje.innerHTML ='Número de tarjeta validada con éxito'
  }else{
    return selectMensaje.innerHTML ='Número no válido, intente con otro número'
  }

}

//Ocultar y mostrar pantallas de la pagina web e interactividad de los botones
// Mantener solo el home a la vista

document.getElementById('home').style.display = "block";
document.getElementById('productos').style.display = "none";
document.getElementById('puntos-de-venta').style.display = "none";
document.getElementById('formulario-panal').style.display = "none";
document.getElementById('validacion-panal').style.display = "none";

// Funcionalidad al boton productos

document.getElementById("botonproductoshome").addEventListener("click",ocultarConBtnProductos)

  function ocultarConBtnProductos() {
 
    document.getElementById('home').style.display = "none"
    document.getElementById('productos').style.display = "block"
    document.getElementById('puntos-de-venta').style.display = "none"
    document.getElementById('formulario-panal').style.display = "none"
    document.getElementById('validacion-panal').style.display = "none"
  }
// funcionalidad al boton puntos de venta

document.getElementById("botontiendashome").addEventListener("click",ocultarConBtnTiendas)

  function ocultarConBtnTiendas() {
 
    document.getElementById('home').style.display = "none"
    document.getElementById('productos').style.display = "none"
    document.getElementById('puntos-de-venta').style.display = "block"
    document.getElementById('formulario-panal').style.display = "none"
    document.getElementById('validacion-panal').style.display = "none"
  } 
// funcionalidad al boton pagos formulario

document.getElementById("botonpagoshome").addEventListener("click",ocultarConBtnPagos)

  function ocultarConBtnPagos() {
 
    document.getElementById('home').style.display = "none"
    document.getElementById('productos').style.display = "none"
    document.getElementById('puntos-de-venta').style.display = "none"
    document.getElementById('formulario-panal').style.display = "block"
    document.getElementById('validacion-panal').style.display = "none"
  }

  //funcionalidad boton inicio

document.getElementById("Inicio-volverhome").addEventListener("click",volverHome)

  function volverHome() {
 
    document.getElementById('home').style.display = "block"
    document.getElementById('productos').style.display = "none"
    document.getElementById('puntos-de-venta').style.display = "none"
    document.getElementById('formulario-panal').style.display = "none"
    document.getElementById('validacion-panal').style.display = "none"
}

//funcionalidad boton panal de pagos ubicado en pagina de productos

document.getElementById("Pagos").addEventListener("click",irAlPanaldePagos)

  function irAlPanaldePagos() {
 
    document.getElementById('home').style.display = "none"
    document.getElementById('productos').style.display = "none"
    document.getElementById('puntos-de-venta').style.display = "none"
    document.getElementById('formulario-panal').style.display = "block"
    document.getElementById('validacion-panal').style.display = "none"
}

//funcionalidad boton siguiente en formulario de panal de pagos 

document.getElementById("siguientevalidacion").addEventListener("click",irAlPaginaDeValidacion)

  function irAlPaginaDeValidacion() {
 
    document.getElementById('home').style.display = "none"
    document.getElementById('productos').style.display = "none"
    document.getElementById('puntos-de-venta').style.display = "none"
    document.getElementById('formulario-panal').style.display = "none"
    document.getElementById('validacion-panal').style.display = "block"
}