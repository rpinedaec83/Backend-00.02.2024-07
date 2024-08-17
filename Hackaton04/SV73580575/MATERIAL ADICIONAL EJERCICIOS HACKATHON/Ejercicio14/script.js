// Función que calcula la suma de los cuadrados de los números del 1 hasta n
const squaresSum = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i;
    }
    return sum;
};

// Exponer la función para que pueda ser utilizada desde el HTML
window.squaresSum = squaresSum;

// Función para manejar la entrada del usuario y mostrar el resultado
const setup = () => {
    document.getElementById('botonMostrar').addEventListener('click', () => {
        try {
            // Obtener el valor del campo de entrada
            const inputValue = parseInt(document.getElementById('inputNumber').value, 10);
            
            if (isNaN(inputValue) || inputValue <= 0) {
                throw new Error('Por favor, ingrese un número positivo.');
            }

            // Calcular la suma de los cuadrados usando la función squaresSum
            const result = window.squaresSum(inputValue);

            // Mostrar el resultado en el párrafo con id="resultado"
            document.getElementById('resultado').textContent = `La suma de los cuadrados hasta ${inputValue} es: ${result}`;
        } catch (error) {
            alert('Ocurrió un error: ' + error.message);
        }
    });
};

// Asegurarse de que el DOM esté completamente cargado antes de configurar los eventos
document.addEventListener('DOMContentLoaded', setup);
