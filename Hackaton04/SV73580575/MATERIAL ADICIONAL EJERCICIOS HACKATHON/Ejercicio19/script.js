// Función que repite un elemento una cantidad de veces
const repeat = (element, times) => {
    // Validar que 'times' sea un número entero positivo
    if (typeof times !== 'number' || times <= 0 || !Number.isInteger(times)) {
        throw new Error('El número de veces debe ser un entero positivo.');
    }

    // Crear una matriz con el elemento repetido 'times' veces
    return Array(times).fill(element);
};

// Exponer la función para que pueda ser utilizada desde el HTML
window.repeat = repeat;

// Función para manejar la entrada del usuario y mostrar el resultado
const setup = () => {
    document.getElementById('botonMostrar').addEventListener('click', () => {
        try {
            // Obtener los valores del campo de entrada
            const elementValue = document.getElementById('inputElement').value.trim();
            const timesValue = parseInt(document.getElementById('inputTimes').value, 10);

            if (isNaN(timesValue) || timesValue <= 0) {
                throw new Error('Por favor, ingrese un número entero positivo para la cantidad de veces.');
            }

            // Obtener el resultado usando la función repeat
            const result = window.repeat(elementValue, timesValue);

            // Mostrar el resultado en el párrafo con id="resultado"
            document.getElementById('resultado').textContent = `Resultado: [${result.join(', ')}]`;
        } catch (error) {
            alert('Ocurrió un error: ' + error.message);
        }
    });
};

// Asegurarse de que el DOM esté completamente cargado antes de configurar los eventos
document.addEventListener('DOMContentLoaded', setup);
