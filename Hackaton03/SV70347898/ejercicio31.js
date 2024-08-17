//31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.

function ejecutarEjercicio31(){
    let sumapares = 0;
    let sumaimpares = 0;
    let contadorimpares = 0;
    let contadorpares=0;


    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt("Ingrese un númer"));

        if (numero %2 === 0) {
        sumapares = sumapares+numero;
        contadorpares = contadorpares+1;
        }
        else {
        sumaimpares = sumaimpares+numero;
        contadorimpares = contadorimpares+1;
        }
          
    }
    alert ("el promedio de los pares es: " + (sumapares/contadorpares));
    alert ("el promedio de los impares es: " + (sumaimpares/contadorimpares));


}