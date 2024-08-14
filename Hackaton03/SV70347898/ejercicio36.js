function ejecutarEjercicio36() {
    let numeros = [0, 1];

    for (let i = 2; i < 100; i++) {
        numeros[i] = numeros[i - 1] + numeros[i - 2];
    }

    alert("La secuencia de Fibonacci es: " + numeros.join(", "));
}