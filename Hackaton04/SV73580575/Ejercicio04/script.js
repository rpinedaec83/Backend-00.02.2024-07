function calcularAreaTriangulo() {
    // Obtener los valores de la base y la altura
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Verificar si los valores son números válidos
    if (isNaN(base) || isNaN(altura)) {
        alert("Por favor, ingrese valores numéricos válidos para la base y la altura.");
        return;
    }

    // Calcular el área del triángulo
    const area = triArea(base, altura);

    // Mostrar el resultado en el párrafo con id="resultado"
    document.getElementById('resultado').textContent = `El área del triángulo es: ${area}`;
}

function triArea(base, altura) {
    return (base * altura) / 2;
}
