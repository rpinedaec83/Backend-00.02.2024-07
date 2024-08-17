// Función que devuelve una matriz de números contando desde n hasta 0
const countdown = (n) => {
    // Creamos un array con los números desde n hasta 0
    return Array.from({ length: n + 1 }, (_, i) => n - i);
};

// Exponer la función para que pueda ser utilizada desde el HTML
window.countdown = countdown;

// Función para manejar la entrada del usuario y mostrar el resultado
const setup = () => {
    document.getElementById('botonMostrar').addEventListener('click', () => {
        try {
            // Obtener el valor del campo de entrada
            const inputValue = parseInt(document.getElementById('inputNumber').value, 10);
            
            if (isNaN(inputValue) || inputValue < 0) {
                throw new Error('Por favor, ingrese un número entero positivo.');
            }

            // Obtener el resultado usando la función countdown
            const result = window.countdown(inputValue);

            // Mostrar el resultado en el párrafo con id="resultado"
            document.getElementById('resultado').textContent = `Cuenta regresiva desde ${inputValue}: [${result.join(', ')}]`;
        } catch (error) {
            alert('Ocurrió un error: ' + error.message);
        }
    });
};

// Asegurarse de que el DOM esté completamente cargado antes de configurar los eventos
document.addEventListener('DOMContentLoaded', setup);
