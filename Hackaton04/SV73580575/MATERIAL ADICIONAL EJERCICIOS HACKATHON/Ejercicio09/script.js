// Función que devuelve el primer y último índice de un carácter en una palabra
const charIndex = (word, char) => {
    const firstIndex = word.indexOf(char);
    const lastIndex = word.lastIndexOf(char);

    // Verificar si el carácter está presente en la palabra
    if (firstIndex === -1) {
        throw new Error("El carácter no se encuentra en la palabra.");
    }

    return [firstIndex, lastIndex];
};

// Exponer la función para que pueda ser utilizada desde el HTML
window.charIndex = charIndex;

// Función para manejar la entrada del usuario y mostrar los resultados
const setup = () => {
    document.getElementById('botonMostrar').addEventListener('click', () => {
        try {
            // Obtener la palabra y el carácter ingresados por el usuario
            const word = document.getElementById('inputWord').value;
            const char = document.getElementById('inputChar').value;

            // Validar que el carácter sea una sola letra
            if (char.length !== 1) {
                throw new Error("Por favor, ingrese un solo carácter.");
            }

            // Encontrar los índices usando la función charIndex
            const [firstIndex, lastIndex] = window.charIndex(word, char);

            // Mostrar el resultado en el párrafo con id="resultado"
            document.getElementById('resultado').textContent = `Primer índice: ${firstIndex}, Último índice: ${lastIndex}`;
        } catch (error) {
            alert(error.message);
        }
    });
};

document.addEventListener('DOMContentLoaded', setup);
