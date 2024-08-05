// Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

function ejecutarEjercicio11() {
    alert("Debes ingresar 3 número para determinar cual es el mayor");
    let input1 = prompt("Por favor, ingrese el primer número");
    let numero1 = parseInt(input1);
    console.log(typeof (numero1));

    let input2 = prompt("Por favor, ingrese el segundo número");
    let numero2 = parseInt(input2);
    console.log(typeof (numero2));

    let input3 = prompt("Por favor, ingrese el tercer número");
    let numero3 = parseInt(input3);
    console.log(typeof (numero3));

    if (numero1 > numero2 && numero1 > numero3) {
        alert("El número " + numero1 + " es el mayor");
    }

    if (numero2 > numero1 && numero2 > numero3) {
        alert("El número " + numero2 + " es el mayor");
    }
    else {
        alert("El número " + numero3 + " es el mayor");
    }
}
