//24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.

function ejecutarEjercicio24() {
    let suma = 0;
    console.log(typeof (suma));

    for (let index = 0; index <= 1000; index+=2) {
        suma = suma + index;

    }
    alert("La suma de todos lo numeros pares debajo de 1000 es " + suma);


}