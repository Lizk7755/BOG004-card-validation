/* eslint-disable no-console */
import validator from './validator.js';

function traerNroTarjeta() {
  let valor=document.getElementById("digitostarjeta").value;	
  console.log("valor:",valor)
}

document.getElementById("siguientevalidar").addEventListener("click",traerNroTarjeta)

console.log(validator);
