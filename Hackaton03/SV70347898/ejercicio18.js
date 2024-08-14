//Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. 
//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//$10. Si se compran unidades separadas hasta 9.
//$8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
//$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender 
//calcule el precio total para el cliente y la ganancia para el vendedor.

function ejecutarEjercicio18() {
let i = 1;  

    while (i <= 4) {
        let input = prompt("Por favor, ingrese la cantidad de CDs vendidos para determinar el precio total y la ganancia para el vendedor. Tiene hasta 4 intentos");
        let numero = parseInt(input);
            

    if (numero > 0 && numero <= 9) {
        alert("El precio total es $ " + (numero * 10) + " y la comisión es de $ " + (numero * 10 * 0.0825));
    }

    else if (numero => 10 && numero < 99) {
        alert("El precio total es $ " + (numero * 8) + " y la comisión es de $ " + (numero * 8 * 0.0825));
    }
    else if (numero => 100 && numero < 499) {
        alert("El precio total es $ " + (numero * 7) + " y la comisión es de $ " + (numero * 7 * 0.0825));
    }
    else if (numero > 500) {
        alert("El precio total es $ " + (numero * 6) + " y la comisión es de $ " + (numero * 6 * 0.0825));
    }
i++
}
}