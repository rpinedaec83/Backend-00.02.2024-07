function calcularSumaDeCubos() {
    // Obtener los números ingresados por el usuario
    const numerosInput = document.getElementById('numeros').value;
    
    // Convertir la cadena de texto en un array de números
    const numerosArray = numerosInput.split(',').map(Number);

    // Verificar que todos los elementos sean números válidos
    if (numerosArray.some(isNaN)) {
        alert("Por favor, ingrese números válidos separados por comas.");
        return;
    }

    // Calcular la suma de los cubos
    const resultado = sumOfCubes(...numerosArray);

    // Mostrar el resultado en el párrafo con id="resultado"
    document.getElementById('resultado').textContent = `La suma de los cubos es: ${resultado}`;
}

function sumOfCubes(...numeros) {
    return numeros.reduce((suma, numero) => suma + Math.pow(numero, 3), 0);
}
