// 1. Función que retorne la suma de dos números
function suma(a, b) {
    return a + b;
}

// 2. Función que retorne la potencia de un número dado
function potencia(base, exponente) {
    return Math.pow(base, exponente);
}

// 3. Función que tome números y devuelva la suma de sus cubos
function sumdecubos(...numeros) {
    return numeros.reduce((sum, n) => sum + Math.pow(n, 3), 0);
}

// 4. Función que tome la base y la altura de un triángulo y devuelva su área
function triArea(base, altura) {
    return (base * altura) / 2;
}

// 5. Función llamada calculator que recibe dos números y una operación matemática
function calculadora(a, operacion, b) {
    switch (operacion) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : "No se puede dividir por cero";
        case "%":
            return a % b;
        default:
            return "El parámetro no es reconocido";
    }
}



// Función que recibe nombre, apellido y edad y retorna un string concatenado
const presentarPersona = (nombre, apellido, edad) => 
    `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;

// Función que toma números y devuelve la suma de sus cubos
const sumOfCubes = (...numeros) => 
    numeros.reduce((sum, n) => sum + Math.pow(n, 3), 0);

// Función que retorna el tipo de valor entregado
const tipoDeValor = (valor) => 
    typeof valor;

// Función que recibe n cantidad de argumentos y los suma (usando parámetros rest)
const sumarTodos = (...numeros) => 
    numeros.reduce((sum, n) => sum + n, 0);

// Función que recibe un array y filtra los valores que no son string
const filtrarStrings = (array) => 
    array.filter(valor => typeof valor === 'string');

// Función que toma una matriz de números y devuelve los números mínimos y máximos
const minMax = (array) => 
    [Math.min(...array), Math.max(...array)];

// Función que toma una matriz de 10 enteros y devuelve una cadena en forma de un número de teléfono
const formatPhoneNumber = (numeros) => 
    `(${numeros.slice(0, 3).join('')}) ${numeros.slice(3, 6).join('')}-${numeros.slice(6).join('')}`;

// Función que toma una matriz de matrices y devuelve una nueva matriz con el mayor número de cada uno
const findLargestNums = (matrices) => 
    matrices.map(arr => Math.max(...arr));

// Función que devuelve el primer y último índice de un carácter en una palabra
const charIndex = (palabra, char) => {
    const firstIndex = palabra.indexOf(char);
    const lastIndex = palabra.lastIndexOf(char);
    return firstIndex === -1 ? [] : [firstIndex, lastIndex];
}

// Función que convierte un objeto en una matriz de pares clave-valor
const toArray = (objeto) => 
    Object.entries(objeto);



// Función que toma una matriz con objetos y devuelve la suma de los presupuestos
const getBudgets = (arr) => 
    arr.reduce((sum, person) => sum + person.budget, 0);

// Función que toma una matriz de estudiantes y devuelve una matriz de nombres
const getStudentNames = (students) => 
    students.map(student => student.name);

// Función que convierte un objeto en una matriz de claves y valores
const objectToArray = (obj) => 
    Object.entries(obj);

// Función que devuelve la suma de todos los números cuadrados incluyendo n
const squaresSum = (n) => 
    Array.from({ length: n }, (_, i) => (i + 1) ** 2).reduce((sum, num) => sum + num, 0);

// Función para multiplicar todos los valores en una matriz por la cantidad de valores
const multiplyByLength = (arr) => 
    arr.map(num => num * arr.length);

// Función que toma un número como argumento y devuelve una matriz contando desde este número a cero
const countdown = (n) => 
    Array.from({ length: n + 1 }, (_, i) => n - i);

// Función que devuelve la diferencia entre los números más grandes y más pequeños en una matriz
const diffMaxMin = (arr) => 
    Math.max(...arr) - Math.min(...arr);

// Función que filtra las cadenas de una matriz y devuelve una nueva matriz solo con enteros
const filterList = (arr) => 
    arr.filter(item => typeof item === 'number');

// Función que toma dos argumentos (elemento, veces) y devuelve una matriz con el elemento repetido
const repeat = (element, times) => 
    Array(times).fill(element);

// Función que extiende el prototipo de cadena para reemplazar todas las vocales con una vocal especificada
String.prototype.vreplace = function(vowel) {
    return this.replace(/[aeiou]/gi, vowel);
}

// Función que busca la palabra "Nemo" y devuelve su posición en la oración
const findNemo = (sentence) => {
    const words = sentence.split(" ");
    const index = words.indexOf("Nemo");
    return index !== -1 ? `I found Nemo at ${index + 1}!` : "Nemo not found";
}

// Función que capitaliza la última letra de cada palabra
const capLast = (str) => 
    str.split(" ").map(word => word.slice(0, -1) + word.slice(-1).toUpperCase()).join(" ");
/* EJERCISIOS TERMINADOS*/