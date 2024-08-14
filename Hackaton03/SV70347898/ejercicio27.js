//27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, 
//se debe acabar el programa al ingresar un número negativo.

function ejecutarEjercicio27() {
    let suma = 0;
    let numero = parseInt(prompt("Ingrese un número entero positivo"));
   
if (numero > 0) {
        
    for (let i = 0; i < numero; i++) {
        suma = suma + i;
    
}
    alert("La media de los números ingresados es " + (suma/numero));   
}

else {
        alert("No ha ingresado ningún número positivo");
    }
}