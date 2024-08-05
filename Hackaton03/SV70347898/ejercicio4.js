//4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.

function ejecutarEjercicio4() {
    alert("Ingrese 3 numero para ordenarlos de mayor a menor")
    let input1 = prompt("Por favor, ingrese el primer número");
    let numero1 = parseInt(input1);
    console.log(typeof (numero1));

    let input2 = prompt("Por favor, ingrese el segundo número");
    let numero2 = parseInt(input2);
    console.log(typeof (numero2));

    let input3 = prompt("Por favor, ingrese el tercer número");
    let numero3 = parseInt(input3);
    console.log(typeof (numero3));

    if (numero1 > numero2 && numero1 > numero3 && numero2 > numero3) {
        alert("El orden es: " + numero1 + " , " + numero2 + " y " + numero3);
    }

    else if (numero2 > numero1 && numero2 > numero3 && numero3 > numero1) {
        alert("El orden es: " + numero2 + " , " + numero3 + " y " + numero1);
    }
    else if (numero2 > numero1 && numero2 > numero3 && numero1 > numero3) {
        alert("El orden es: " + numero2 + " , " + numero1 + " y " + numero3);
    }
    else if (numero1 > numero2 && numero1 > numero3 && numero3 > numero2) {
        alert("El orden es: " + numero1 + " , " + numero3 + " y " + numero2);
    }
    else if (numero3 > numero2 && numero3 > numero1 && numero1 > numero2) {
        alert("El orden es: " + numero3 + " , " + numero1 + " y " + numero2);
    }
    else {
        alert("El orden es: " + numero3 + " , " + numero2 + " y " + numero1);
    }
}