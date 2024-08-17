// Función que devuelve la diferencia entre el número más grande y el número más pequeño en una matriz
const diffMaxMin = (arr) => {
    if (arr.length === 0) {
        throw new Error('La matriz no debe estar vacía.');
    }
    
    // Encontrar el valor mínimo y máximo en la matriz
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    // Devolver la diferencia entre el máximo y el mínimo
    return max - min;
};

// Exponer la función para que pueda ser utilizada desde el HTML
window.diffMaxMin = diffMaxMin;

// Función para manejar la entrada del usuario y mostrar el resultado
const setup = () => {
    document.getElementById('botonMostrar').addEventListener('click', () => {
        try {
            // Obtener el valor del campo de entrada
            const inputValue = document.getElementById('inputArray').value.trim();
            
            // Convertir el texto de entrada en una matriz de números
            const array = inputValue.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

            if (array.length === 0) {
                throw new Error('Por favor, ingrese una lista de números separados por comas.');
            }

            // Obtener la diferencia entre el máximo y el mínimo usando la función diffMaxMin
            const result = window.diffMaxMin(array);

            // Mostrar el resultado en el párrafo con id="resultado"
            document.getElementById('resultado').textContent = `Diferencia entre el máximo y el mínimo: ${result}`;
        } catch (error) {
            alert('Ocurrió un error: ' + error.message);
        }
    });
};

// Asegurarse de que el DOM esté completamente cargado antes de configurar los eventos
document.addEventListener('DOMContentLoaded', setup);
