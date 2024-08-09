function sumarDigitos(primerNumero = 0, segundoNumero = 0){
    let resultado = primerNumero + segundoNumero;
   // console.log(resultado);
   // alert(resultado);
   let validacion = validarSuma(resultado, primerNumero)
   if(validacion === segundoNumero){
    console.log("Correcto")
    return resultado;
   }
   else{
    throw "Error"
   }
    
}

function validarSuma(valor, primerNumero){

    let resultado = valor - primerNumero;
    return resultado
}

let suma = sumarDigitos(50, 10);
console.log(suma);
let resultado = 0;



let resta = function(){return "Hola"}
console.log(resta);

hello = () => {
    return "Hello World!";
  }


  let myFunction = (a, b) => a * b;

 console.log( myFunction(3,5))




 async function myDisplay(nombre) {
    let myPromise = new Promise(function(resolve) {
        let rdnNumero = randomIntFromInterval(1000, 5000)
      setTimeout(function() {resolve(`I love You ${nombre}!!`);}, rdnNumero);
    });
    console.log( await myPromise);
  }

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  myDisplay("deysi");
  myDisplay("Selina");
  myDisplay("Bjor");



 let objPersona={
    nombre: "Roberto",
    apellido: "Pineda",
    levantarse(alarma){
        console.log("Me estoy levantando a las " + alarma)
    }
 }

 console.log(objPersona.nombre)
 objPersona.levantarse("08:30")