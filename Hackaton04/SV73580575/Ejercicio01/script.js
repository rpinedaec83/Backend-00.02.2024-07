// III. Descripción del reto:
// Investigar y resolver las preguntas y ejercicios planteados.
// Resolver problemas y definir algoritmos utilizando las nuevas funcionalidades de ES6+ y los métodos de los Objetos de ECMASCRIPT.

// IV. Pasos a seguir para resolver los retos:
// El docente indicará si este reto se resolverá de manera individual o grupal.

// Reto 1: JavaScript y HTTP

// EL PROBLEMA:
// En este caso, definiremos una serie de problemas para resolverlos utilizando el lenguaje JavaScript, y crearemos algoritmos para cada problema.

// Función que retorna la suma de dos números:
function calcularSuma() {
    // Obtener los valores de los campos de entrada
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    // Verificar si los valores son números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    // Llamar a la función suma
    const resultado = suma(numero1, numero2);

    // Mostrar el resultado en el párrafo con id="resultado"
    document.getElementById('resultado').textContent = `La suma de ${numero1} y ${numero2} es: ${resultado}`;
}

function suma(a, b) {
    return a + b;
}