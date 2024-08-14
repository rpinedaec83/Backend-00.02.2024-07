// Función que toma una matriz de 10 enteros y devuelve una cadena en formato de número de teléfono
const formatPhoneNumber = (numbers) => {
    if (numbers.length !== 10 || numbers.some(num => num < 0 || num > 9)) {
        throw new Error("La matriz debe contener exactamente 10 enteros entre 0 y 9.");
    }

    const areaCode = numbers.slice(0, 3).join('');
    const centralOfficeCode = numbers.slice(3, 6).join('');
    const lineNumber = numbers.slice(6).join('');

    return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
};

// Función para manejar la entrada del usuario y mostrar los resultados
const setup = () => {
    document.getElementById('botonMostrar').addEventListener('click', () => {
        try {
            // Obtener los números ingresados por el usuario
            const input = document.getElementById('inputArray').value;

            // Convertir la cadena de texto en un array de números
            const numerosArray = input.split(',').map(Number);

            // Verificar si el array contiene 10 valores válidos
            if (numerosArray.length !== 10 || numerosArray.some(isNaN)) {
                alert("Por favor, ingrese exactamente 10 números enteros válidos entre 0 y 9.");
                return;
            }

            // Formatear el número de teléfono usando la función formatPhoneNumber
            const telefonoFormateado = formatPhoneNumber(numerosArray);

            // Mostrar el resultado en el párrafo con id="resultado"
            document.getElementById('resultado').textContent = telefonoFormateado;
        } catch (error) {
            alert(error.message);
        }
    });
};

// Asegurarse de que el DOM esté completamente cargado antes de configurar los eventos
document.addEventListener('DOMContentLoaded', setup);
