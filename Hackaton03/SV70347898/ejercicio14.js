//14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y determine si es un número primo.
function esPrimo(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function ejecutarEjercicio14() {
    let input = prompt("Por favor, ingrese un número del 1 al 10 para determinar si es primo");
    let numero = parseInt(input);
    console.log(typeof (numero))

    if (esPrimo(numero)) {
        if (numero > 1 && numero <= 10) {
            alert("El número " + numero + " es primo")
        }
        else {
            alert("Ingrese un número del 1 al 10")
        }
    }
    else {
        alert("En número " + numero + " no es primo")
    }
}







