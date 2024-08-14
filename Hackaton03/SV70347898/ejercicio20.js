//Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
//Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

function ejecutarEjercicio20() {
    alert("Ingrese 4 numero enteros positivos");
    let number = parseInt(prompt("Ingrese el primer número"));
    let number2 = parseInt(prompt("Ingrese el segundo número"));
    let number3 = parseInt(prompt("Ingrese el tercer número"));
    let number4 = parseInt(prompt ("Ingrse el cuarto número"));
    let number5 = parseInt
    let mayor = Math.max(number, number2, number3, number4)
    number5 = 0

    if (number % 2 === 0) {
        number5++
    }
    if (number2 % 2 === 0) {
        number5++
    }
    if (number3 % 2 === 0){
        number5++
    }
    if (number4 % 2 === 0) {
        number5++
    }
    alert ("La cantidad de pares es " + number5);
    alert ("El mayor es " +mayor);

    if (number3 % 2 == 0) {
        alert ("El cuadrado del segundo es " +number2*number2);
    }
    else {
        alert ("No se calculará el cuadrado del 2 porque el tercero no es par")
    }

    if (number < number4) {
        alert ("El promedio de los 4 es : " + ((number+number2+number3+number4)/4));
    }
    if (number2 > number3) {
        if (number3 =>50 && number3 <=700);
        alert ("El numero 3 se encuentra entre 50 y 700");
        alert ("Asimismo la suma de los 4 es " + (number+number2+number3+number4));
    }
    else {
        alert ("No se calculará la suma de los 4");
    }
}
   
