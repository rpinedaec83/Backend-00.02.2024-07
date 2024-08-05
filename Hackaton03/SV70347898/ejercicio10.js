//10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.

function ejecutarEjercicio10() {
    let input = prompt("Por favor, ingrese un número para determinar si es par o impar");
    let numero = parseInt(input);
    console.log(typeof (numero))

    if (numero % 2 === 0) {
        alert("El número es par");
    }
    else {
        alert("El número es impar");
    }
}
