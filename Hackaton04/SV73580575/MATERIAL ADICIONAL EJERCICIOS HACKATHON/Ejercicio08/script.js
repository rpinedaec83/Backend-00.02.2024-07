// Función que toma una matriz de matrices y devuelve una nueva matriz con el mayor número de cada submatriz
const findLargestNums = (arrays) => {
    return arrays.map(subArray => Math.max(...subArray));
};

// Exponer la función para que pueda ser utilizada desde el HTML
window.findLargestNums = findLargestNums;

// Función para manejar la entrada del usuario y mostrar los resultados
const setup = () => {
    document.getElementById('botonMostrar').addEventListener('click', () => {
        try {
            // Obtener la entrada del usuario y parsearla como una matriz de matrices
            const input = document.getElementById('inputArray').value;
            const arrays = JSON.parse(input);

            // Verificar que la entrada sea una matriz de matrices de números
            if (!Array.isArray(arrays) || !arrays.every(Array.isArray)) {
                throw new Error("Por favor, ingrese una matriz de matrices en formato JSON.");
            }

            // Encontrar los mayores números en cada submatriz usando la función findLargestNums
            const result = window.findLargestNums(arrays);

            // Mostrar el resultado en el párrafo con id="resultado"
            document.getElementById('resultado').textContent = `Resultado: ${result}`;
        } catch (error) {
            alert(error.message);
        }
    });
};

// Asegurarse de que el DOM esté completamente cargado antes de configurar los eventos
document.addEventListener('DOMContentLoaded', setup);
