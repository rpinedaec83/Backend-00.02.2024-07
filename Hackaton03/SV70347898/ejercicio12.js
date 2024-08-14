// Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.

function ejecutarEjercicio12() {
    alert("Debes ingresar 3 número para determinar cual es el mayor");
    let input1 = prompt("Por favor, ingrese el primer número");
    let numero1 = parseInt(input1);
    console.log(typeof (numero1));

    let input2 = prompt("Por favor, ingrese el segundo número");
    let numero2 = parseInt(input2);
    console.log(typeof (numero2));


    if (numero1 > numero2) {
        alert("El número " + numero1 + " es el mayor");
    }
    
    else {
        alert("El número " + numero2 + " es el mayor");
    }
}