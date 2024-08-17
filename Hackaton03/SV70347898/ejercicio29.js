//29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.

function ejecutarEjercicio29(){
    let suma = 0;
    let i = 0
    while (i<=100) {
        suma = suma + i;
    i++
    }
    
    alert ("La suma total de los 100 primeros numeros es: " +suma);
}