// 8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

function ejecutarEjercicio8() {
    alert("Debes ingresar 3 notas -del 1 al 20- para determinar si el alumno ha jalado");
    let input1 = prompt("Por favor, ingrese la primera nota");
    let numero1 = parseInt(input1);
    console.log(typeof (numero1));

    let input2 = prompt("Por favor, ingrese la segunda nota");
    let numero2 = parseInt(input2);
    console.log(typeof (numero2));

    let input3 = prompt("Por favor, ingrese la tercera nota");
    let numero3 = parseInt(input3);
    console.log(typeof (numero3));

    if ((numero1 + numero2 + numero3) / 3 >= 12 && (numero1 + numero2 + numero3) / 3 <= 20) {
        alert("El alumno aprobó");
    }
    else if ((numero1 + numero2 + numero3) / 3 < 12 && (numero1 + numero2 + numero3) / 3 >= 0) {
        alert("El alumno desaprobó");
    }
    else {
        alert("Ingrese notas del 1 al 20");
    }

}