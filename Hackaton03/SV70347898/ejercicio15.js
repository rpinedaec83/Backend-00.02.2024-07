//15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.

function ejecutarEjercicio15() {
    alert("Ingrese el valor que desea convertir")
    let input = prompt("Ingrese 1 para centimetros y 2 para libras");
    let numero = parseInt(input);
    console.log(typeof (numero))

    if (numero === 1) {
        let centimetros = parseInt(prompt("Ingrese los centimetros que desea transformar a pulgadas"));
        console.log(typeof (centimetros))
        alert(+ centimetros + " centimetros equivalen a:" + (centimetros / 2.54) + "pulgadas");
    }
    else if (numero === 2) {
        let libras = parseInt(prompt("Ingrese las libras que desea transformar a kilogramos"));
        console.log(typeof (libras))
        alert(+ libras + "libras equivalen a: " + (libras * 0.55) + "kilos");
    }
    else {
        alert("Ingrese el número 1 o 2");
    }

}