//2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function ejecutarEjercicio2(){
let input = prompt ("Por favor, ingrese un número para determinar si es negativo");
let numero = parseInt(input);
console.log(typeof (numero))

if (numero < 0) {
    alert("El número es negativo");
}
else {
    alert("El número no es negativo");
}
}