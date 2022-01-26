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


