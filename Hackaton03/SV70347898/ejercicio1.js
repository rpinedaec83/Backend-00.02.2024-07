//1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
function ejecutarEjercicio1(){

let input = prompt ("Por favor, ingrese un número para determinar si tiene 3 dígitos");
let numero = parseInt(input);
console.log(typeof (numero))

if (numero > 99 && numero < 1000) {
    alert("Tiene 3 dígitos");
}
else {
    alert("No tiene 3 dígitos");
}
}