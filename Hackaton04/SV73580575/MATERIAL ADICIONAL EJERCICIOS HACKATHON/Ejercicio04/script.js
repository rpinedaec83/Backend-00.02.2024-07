// Función que recibe una cantidad variable de argumentos y los suma
const sumarNumeros = (...numeros) => 
    numeros.reduce((total, numero) => total + numero, 0);

function calcularSuma() {
    // Obtener los números ingresados por el usuario
    const numerosInput = document.getElementById('numeros').value;
    
    // Convertir la cadena de texto en un array de números
    const numerosArray = numerosInput.split(',').map(Number);

    // Verificar que todos los elementos sean números válidos
    if (numerosArray.some(isNaN)) {
        alert("Por favor, ingrese números válidos separados por comas.");
        return;
    }

    // Calcular la suma de los números
    const resultado = sumarNumeros(...numerosArray);

    // Mostrar el resultado en el párrafo con id="resultado"
    document.getElementById('resultado').textContent = `La suma es: ${resultado}`;
}