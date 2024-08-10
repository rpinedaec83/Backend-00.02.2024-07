// Función para capitalizar la última letra de cada palabra en una cadena
function capLast(sentence) {
    // Dividir la cadena en palabras
    const words = sentence.split(' ');

    // Capitalizar la última letra de cada palabra
    const capitalizedWords = words.map(word => {
        if (word.length > 0) {
            // Capitalizar la última letra
            return word.slice(0, -1) + word.slice(-1).toUpperCase();
        }
        return word;
    });

    // Unir las palabras de nuevo en una cadena
    return capitalizedWords.join(' ');
}

// Función para manejar la entrada del usuario y mostrar el resultado
function setup() {
    document.getElementById('botonCapitalizar').addEventListener('click', () => {
        // Obtener el valor del campo de entrada
        const sentence = document.getElementById('inputSentence').value.trim();

        // Obtener el resultado usando la función capLast
        const result = capLast(sentence);

        // Mostrar el resultado en el párrafo con id="resultado"
        document.getElementById('resultado').textContent = result;
    });
}

// Asegurarse de que el DOM esté completamente cargado antes de configurar los eventos
document.addEventListener('DOMContentLoaded', setup);
