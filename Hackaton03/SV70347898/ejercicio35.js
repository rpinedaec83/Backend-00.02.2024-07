//35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

function ejecutarEjercicio35() {
    let numeros = []

    for (let i = 1; i <= 20; i++) {
        let numero = parseInt(prompt("ingrese un número"));
        numeros.push(numero);
        
    }

    let maximo = Math.max(...numeros);
    let minimo = Math.min(...numeros);

    alert("el máximo numero es " + Math.max(maximo));
    alert("el mínimo numero es " + Math.min(minimo));
}
