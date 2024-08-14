function mostrarPotencia() {
    // Obtener los valores de los campos de entrada
    const numeroBase = parseFloat(document.getElementById('numeroBase').value);
    const exponente = parseFloat(document.getElementById('exponente').value);

    // Verificar si los valores son números válidos
    if (isNaN(numeroBase) || isNaN(exponente)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    // Calcular la potencia
    const resultado = calcularPotencia(numeroBase, exponente);

    // Mostrar el resultado en el párrafo con id="resultado"
    document.getElementById('resultado').textContent = `${numeroBase} elevado a la potencia de ${exponente} es: ${resultado}`;
}

function calcularPotencia(base, exponente) {
    return Math.pow(base, exponente);
}