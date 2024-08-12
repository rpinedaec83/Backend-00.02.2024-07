// 23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.

function ejecutarEjercicio23() {

    let numero = parseInt(prompt("Ingrese un numero"));
    let impares = 0


    for (let index = 1; index <= numero; index += 2) {

        const element = impares = impares + index;

    }
    alert("La suma de los impares es" + impares);
}