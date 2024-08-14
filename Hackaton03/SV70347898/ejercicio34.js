//34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.

function ejecutarEjercicio34() {
    for (let i = 1; i <= 9; i++) {
        alert("Tabla de multiplicar del " + i + ":");
        for (let j = 1; j <= 12; j++) {
            alert(i + " x " + j + " = " + i*j);
        }
    }
}
