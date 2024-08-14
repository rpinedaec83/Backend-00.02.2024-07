// Función que multiplica todos los valores en una matriz por la cantidad de valores en la matriz
const multiplyByLength = (arr) => {
    const length = arr.length;
    return arr.map(value => value * length);
};

// Exponer la función para que pueda ser utilizada desde el HTML
window.multiplyByLength = multiplyByLength;

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

            // Multiplicar los valores usando la función multiplyByLength
            const result = window.multiplyByLength(array);

            // Mostrar el resultado en el párrafo con id="resultado"
            document.getElementById('resultado').textContent = `Resultado: [${result.join(', ')}]`;
        } catch (error) {
            alert('Ocurrió un error: ' + error.message);
        }
    });
};

// Asegurarse de que el DOM esté completamente cargado antes de configurar los eventos
document.addEventListener('DOMContentLoaded', setup);
