//Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
//pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

function ejecutarEjercicio6() {
    let input = prompt("Por favor, ingrese la cantidad de horas trabajada para determinar el salario final");
    let numero = parseInt(input);
    console.log(typeof (numero))

    if (numero <= 40) {
        alert("El salario final será de" + numero * 20 + "dolares");
    }
    else {
        alert("El salario final será de " + ((40 * 20) + ((numero - 40) * 25)) + " dolares");
    }
}