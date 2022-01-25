/* eslint-disable no-debugger */
/* eslint-disable no-console */

import validator from './validator.js';

document.getElementById("siguientevalidar").addEventListener("click",traerNroTarjeta)

function traerNroTarjeta() {
  let creditCardNumber = document.getElementById("digitostarjeta").value;	

  validator.isValid(creditCardNumber)  
}


