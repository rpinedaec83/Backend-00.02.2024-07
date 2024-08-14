//Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.

function ejecutarEjercicio16() {
    let i = 1;
    while (i <= 7) {
        alert("Ingrese un número del 1 al 7 para designar el día que corresponda. El proceso se repetirá hasta 7 veces");
        let dia = parseInt(prompt("Ingrese un número del 1 al 7"));
        switch (dia) {
            case 1:
                alert("Lunes");
                break;
            case 2:
                alert("Martes");
                break;
            case 3:
                alert("Miércoles");
                break;
            case 4:
                alert("Jueves");
                break;
            case 5:
                alert("Viernes");
                break;
            case 6:
                alert("Sábado");
                break;
            case 7:
                alert("Domingo");
                break;
            }
        i++;
    }
}