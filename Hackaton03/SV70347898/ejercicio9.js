//9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de 
//$2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

function ejecutarEjercicio9() {
    let input = prompt("Por favor, ingrese cuanto ganaba para determinar el total de su percibo");
    let numero = parseInt(input);
    console.log(typeof (numero))

    if (numero <= 2000) {
        alert("El salario final será de" + numero * 1.1 + "dolares");
    }
    else {
        alert("El salario final será de " + numero * 1.05 + " dolares");
    }
}
