// Función que filtra las cadenas y devuelve una matriz solo con enteros
const filterList = (arr) => {
    // Filtrar solo los elementos que son números
    return arr.filter(item => typeof item === 'number');
};

// Exponer la función para que pueda ser utilizada desde el HTML
window.filterList = filterList;

// Función para manejar la entrada del usuario y mostrar el resultado
const setup = () => {
    document.getElementById('botonMostrar').addEventListener('click', () => {
        try {
            // Obtener el valor del campo de entrada
            const inputValue = document.getElementById('inputArray').value.trim();
            
            // Convertir el texto de entrada en una matriz de elementos
            const array = inputValue.split(',').map(item => {
                // Convertir los elementos a números si es posible, sino dejarlo como string
                const parsed = parseFloat(item.trim());
                return isNaN(parsed) ? item.trim() : parsed;
            });

            // Obtener el resultado usando la función filterList
            const result = window.filterList(array);

            // Mostrar el resultado en el párrafo con id="resultado"
            document.getElementById('resultado').textContent = `Matriz filtrada con enteros: [${result.join(', ')}]`;
        } catch (error) {
            alert('Ocurrió un error: ' + error.message);
        }
    });
};

// Asegurarse de que el DOM esté completamente cargado antes de configurar los eventos
document.addEventListener('DOMContentLoaded', setup);
