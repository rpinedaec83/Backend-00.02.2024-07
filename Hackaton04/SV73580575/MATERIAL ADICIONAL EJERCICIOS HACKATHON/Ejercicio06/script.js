// Función que toma un array de números y devuelve un array con el mínimo y máximo
const minMax = (array) => {
    if (array.length === 0) {
        return [null, null];
    }

    const minimo = Math.min(...array);
    const maximo = Math.max(...array);

    return [minimo, maximo];
};

// Función para manejar la entrada del usuario y mostrar los resultados
const mostrarMinMax = () => {
    // Obtener los números ingresados por el usuario
    const input = document.getElementById('inputArray').value;

    // Convertir la cadena de texto en un array de números
    const numerosArray = input.split(',').map(Number);

    // Verificar si el array contiene valores válidos
    if (numerosArray.some(isNaN)) {
        alert("Por favor, ingrese números válidos separados por comas.");
        return;
    }

    // Encontrar el mínimo y máximo usando la función minMax
    const [minimo, maximo] = minMax(numerosArray);

    // Mostrar el resultado en el párrafo con id="resultado"
    document.getElementById('resultado').textContent = `Mínimo: ${minimo}, Máximo: ${maximo}`;
};

// Vincular la función `mostrarMinMax` al botón cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('botonMostrar').addEventListener('click', mostrarMinMax);
});
