//Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número 
//identificador y salario diario correspondiente:

//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).

//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del 
//empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero 
//que el dueño le debe pagar al empleado que ingresó.

function ejecutarEjercicio19() {
    let input = prompt("Ingrese el codigo del empleado. 11 para cajero, 22 para servidor, 33 para preparador de mezclas, y 44 para mantenimiento")
    let number = parseInt(input)
    let input1 = prompt("Ingrese la cantidad de dias laborados")
    let number1 = parseInt(input1)

    switch (number) {
        case 11:
            alert("El salario del cajero es de $" + number1 * 56)
            break;
        case 22:
            alert("El salario del cajero es de $" + number1 * 64)
            break;
        case 33:
            alert("El salario del cajero es de $" + number1 * 80)
            break;
        case 44:
            alert("El salario del cajero es de $" + number1 * 48)
            break;
        default:
            alert("ingrese 11, 22, 33 o 44")
            break;
    }

}