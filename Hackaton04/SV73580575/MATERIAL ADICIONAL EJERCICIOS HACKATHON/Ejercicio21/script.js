// Función para encontrar la palabra "Nemo" y devolver un mensaje con su posición
function findNemo(sentence) {
    // Dividir la cadena en palabras
    const words = sentence.split(' ');

    // Buscar la posición de la palabra "Nemo"
    const index = words.indexOf('Nemo');

    // Verificar si "Nemo" está en la cadena
    if (index !== -1) {
        return `Encontramos a Nemo en ${index + 1}`;
    } else {
        return "No encontramos a Nemo";
    }
}

// Función para manejar la entrada del usuario y mostrar el resultado
function setup() {
    document.getElementById('botonBuscar').addEventListener('click', () => {
        // Obtener el valor del campo de entrada
        const sentence = document.getElementById('inputSentence').value.trim();

        // Obtener el resultado usando la función findNemo
        const result = findNemo(sentence);

        // Mostrar el resultado en el párrafo con id="resultado"
        document.getElementById('resultado').textContent = result;
    });
}

// Asegurarse de que el DOM esté completamente cargado antes de configurar los eventos
document.addEventListener('DOMContentLoaded', setup);
