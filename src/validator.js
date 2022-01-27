/* eslint-disable no-console */
const validator = {
  isValid: function(creditCardNumber){
    /* delcaramos las variables a usar mas adelante*/
    let multiplicacionPares = []
    let doble = null
    let esValido = false
    let sumaDigitos = 0
    let nroTarjetaInvertido = []

    /* Declaramos una variables para los datos ingresados y los convertimos en array con split */
    let arrayNroTarjeta = creditCardNumber.split("")

    /* Iniciamos un for donde hacemos que los datos convertidos en arrays se ordenen en forma inversa, indice de datos inicia en cero por lo que se resta -1 iterar desde i hasta 0, en cada push enviamos el i a la variable */
    for(let i = arrayNroTarjeta.length -1; i >= 0; i-- ){
      nroTarjetaInvertido.push(arrayNroTarjeta[i])
    }

    //Otra alternativa en una sola linea para retornar los datos invertidos
    //console.log(nroTarjeta.split("").reverse())

    for(let i = 0; i < nroTarjetaInvertido.length; i++){
      if((i+1) % 2 === 0){
        doble = nroTarjetaInvertido[i] * 2
        if(doble >= 10) {
          let arrayDoble = String(doble).split("")
          let sumaIndicePar = (+arrayDoble[0]) + (+arrayDoble[1])
          multiplicacionPares.push(sumaIndicePar)
        } else {
          multiplicacionPares.push(doble)
        }
      }else {
        multiplicacionPares.push(+nroTarjetaInvertido[i])
      }
    }


    for(let i = 0;  i < multiplicacionPares.length; i++) {
      sumaDigitos += multiplicacionPares[i]
    }

    if(sumaDigitos%10 === 0) esValido = true



    console.log(`IsValid: ${esValido}`)

    return esValido

  },

  maskify: function(creditCardNumber){
   
    if (creditCardNumber.length < 4) return creditCardNumber;

    const ulitimos4Caracteres = creditCardNumber.substr(-4)
    const convirtiendoANumeral = creditCardNumber.substr(0, creditCardNumber.length - 4).replace(/.(?=)/g, "#")

    const numeroEnmascarado= `${convirtiendoANumeral}${ulitimos4Caracteres}`

    return numeroEnmascarado

    }
  };

  export default validator;