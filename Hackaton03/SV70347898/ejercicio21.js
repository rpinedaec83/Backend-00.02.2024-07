//21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.

function ejecutarEjercicio21() {
let number = parseInt(prompt("Ingrese un numero para calcular su factorial"));
let factorial = 1

for (let i = 0; i < number; i++) {
    const element = factorial= factorial + factorial*i;
}

alert ("El factorial del número " + number + " es " + factorial);

   
}