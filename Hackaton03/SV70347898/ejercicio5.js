//5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. 
//Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de 
//descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.

function ejecutarEjercicio5() {
    let input = prompt("Por favor, ingrese la cantidad de zapatos para determinar precio final y descuento");
    let numero = parseInt(input);
    console.log(typeof (numero))

    if (numero > 10 && numero <= 19) {
        alert("El precio final será de" + numero * 80 * 0.9 + "dolares");
    }

    if (numero > 20 && numero <= 30) {
        alert("El precio final será de" + numero * 80 * 0.8 + "dolares");
    }
    else {
        alert("El precio final será de" + numero * 80 * 0.7 + "dolares");
    }
}