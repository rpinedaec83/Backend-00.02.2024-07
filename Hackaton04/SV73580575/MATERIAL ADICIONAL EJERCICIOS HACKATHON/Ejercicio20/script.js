// Extender el prototipo de String para incluir el método vreplace
String.prototype.vreplace = function(newVowel) {
    // Definir las vocales a reemplazar
    const vowels = 'aeiou';
    
    // Asegurarse de que newVowel es una sola vocal
    if (newVowel.length !== 1 || !vowels.includes(newVowel.toLowerCase())) {
        throw new Error('El nuevo carácter debe ser una vocal (a, e, i, o, u).');
    }

    // Reemplazar todas las vocales en la cadena con newVowel
    return this.replace(/[aeiou]/gi, newVowel);
};

// Función para manejar la entrada del usuario y mostrar el resultado
const setup = () => {
    document.getElementById('botonMostrar').addEventListener('click', () => {
        try {
            // Obtener los valores del campo de entrada
            const elementValue = document.getElementById('inputString').value.trim();
            const vowelValue = document.getElementById('inputVowel').value.trim();

            if (vowelValue.length !== 1 || !'aeiou'.includes(vowelValue.toLowerCase())) {
                throw new Error('La vocal de reemplazo debe ser una vocal (a, e, i, o, u).');
            }

            // Obtener el resultado usando la función vreplace
            const result = elementValue.vreplace(vowelValue);

            // Mostrar el resultado en el párrafo con id="resultado"
            document.getElementById('resultado').textContent = `Resultado: ${result}`;
        } catch (error) {
            alert('Ocurrió un error: ' + error.message);
        }
    });
};

// Asegurarse de que el DOM esté completamente cargado antes de configurar los eventos
document.addEventListener('DOMContentLoaded', setup);
