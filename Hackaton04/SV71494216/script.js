//reto 1 
//Ejercicio 1
function sumar(a, b) 
{
     return a + b;
}
    let resulsumar = sumar(5, 7);
    console.log(resulsumar);


// Ejercicio 2
function potencia(base, exponente) 
{
    return Math.pow(base, exponente);
}
let resulpot = potencia(3, 6); 
console.log(resulpot);

// Ejercicio 3

function sumOfCubes(...numbers) 
{
    return numbers.reduce((sum, num) => sum + Math.pow(num, 3), 0);
}
let resulcubes = sumOfCubes(1, 5, 9);
console.log(resulcubes); 

// Ejercicio 4
function triArea(base, altura) 
{
    return 0.5 * base * altura;
}
let resularea = triArea(3, 2);
console.log(resularea);

// Ejercicio 5

function calculator(num1, operador, num2) 
{
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':

            if (num2 === 0) {
                return 'Error: División por cero';
            }
            return num1 / num2;
        case '%':
            return num1 % num2;
        default:
            return 'El parámetro no es reconocido';
    }
}

console.log(calculator(2, "+", 2));
console.log(calculator(5, "-", 3)); 
console.log(calculator(6, "*", 4)); 
console.log(calculator(10, "/", 2)); 
console.log(calculator(10, "/", 0));
console.log(calculator(10, "%", 3)); 
console.log(calculator(10, "^", 2)); 

// Preguntas
/*-  ¿Cómo defines una función?

Es un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento
califique como función, debe tomar alguna entrada y devolver una salida
Para definir una función en JavaScript, puedes utilizar la palabra clave function

-  ¿Hasta cuantos argumentos puedes declarar en una función?

No hay un límite fijo para el número de argumentos que puedes pasar a una función. Puedes definir
una función que acepte cualquier cantidad de argumentos

*/

// RETO 2
/*Ejercicio 1
Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y 
los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33 
*/
const saludar = (nombre, apellido, edad) => {
    return "Hola, mi nombre es "+nombre+" "+apellido+" y mi edad es "+edad+"";
};
const nombre = 'Erick';
const apellido = 'Neyra';
const edad = 25;

const mensaje = saludar(nombre, apellido, edad);
console.log(mensaje); 


/*Ejercicio 2
Cree una función que tome números y devuelva la suma de sus cubos.
sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

*/
function sumOfCubes() {
    const numbers = Array.from(arguments);
    return numbers.reduce((sum, num) => sum + Math.pow(num, 3), 0);
}

console.log(sumOfCubes(1, 5, 9)); 



/*Ejercicio 3
Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
*/
const tipoDeValor = valor => typeof valor;
console.log(tipoDeValor(42));        
console.log(tipoDeValor('Hola'));      
console.log(tipoDeValor(true));         
console.log(tipoDeValor({ nombre: 'Ana' }));
console.log(tipoDeValor([1, 2, 3]));      
console.log(tipoDeValor(null));     
console.log(tipoDeValor(undefined));     
console.log(tipoDeValor(function() {}));
console.log(tipoDeValor(Symbol('desc')));



/*Ejercicio 4
Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
*/

const sumarTodos = (...numeros) => {
    return numeros.reduce((suma, num) => suma + num, 0);
};
console.log(sumarTodos(1, 2, 3));          
console.log(sumarTodos(10, 20, 30, 40));    
console.log(sumarTodos(5));             
console.log(sumarTodos());               




/*Ejercicio 5
Crear una función que reciba un array de valores y filtre los valores que no son string
*/
const filtrarStrings = (array) => {
    return array.filter(valor => typeof valor === 'string');
};
const valores = [42, 'texto', true, 'otro texto', 100, null, 'más texto'];

const soloStrings = filtrarStrings(valores);

console.log(soloStrings); 


/*Ejercicio 6
Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

*/

const minMax = (array) => {
    if (array.length === 0) {
        return []; 
    }
    
    const min = Math.min(...array);
    const max = Math.max(...array);

    return [min, max];
};

console.log(minMax([1, 2, 3, 4, 5])); 
console.log(minMax([-10, 0, 5, 23, -1])); 


/*Ejercicio 7
Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

*/

const formatPhoneNumber = (numeros) => {
    if (numeros.length !== 10) {
        throw new Error("El array debe contener exactamente 10 enteros.");
    }
    

    if (!numeros.every(num => Number.isInteger(num) && num >= 0 && num <= 9)) {
        throw new Error("Todos los elementos del array deben ser enteros entre 0 y 9.");
    }

    const [a, b, c, d, e, f, g, h, i, j] = numeros;
    return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
};
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // 



/* Ejercicio 8
Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
*/

const findLargestNums = (matriz) => {
    return matriz.map(submatriz => Math.max(...submatriz));
};
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); 

/* Ejercicio 9
Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

*/
const charIndex = (palabra, caracter) => {
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);

    if (primerIndice === -1) {
       
        return [-1, -1];
    }

    return [primerIndice, ultimoIndice];
};
console.log(charIndex("hello", "l")); // Imprime: [2, 3]



/* Ejercicio 10
Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

*/
const toArray = (objeto) => {
    return Object.entries(objeto);
};

console.log(toArray({ a: 1, b: 2 })); 



/* Ejercicio 11
Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700

*/

const getBudgets = (personas) => {
    return personas.reduce((total, persona) => total + persona.budget, 0);
};

const personas = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
];

console.log(getBudgets(personas)); // Imprime: 65700



/* Ejercicio 12
Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
getStudentNames([
  { name: "Steve" },
  { name: "Mike" },
  { name: "John" }
]) ➞ ["Becky", "John", "Steve"]

*/
const getUniqueStudentNames = (estudiantes) => {
   
    const nombres = estudiantes.map(estudiante => estudiante.name);
    const nombresUnicos = [...new Set(nombres)];
    return nombresUnicos;
};
const estudiantes = [
    { name: "Becky" },
    { name: "MiJohnke" },
    { name: "Steven" },
   
];

console.log(getUniqueStudentNames(estudiantes)); // Imprime: ["Steve", "Mike", "John"]




/* Ejercicio 13
Escriba una función que convierta un objeto en una matriz de claves y valores.
objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

*/

const objectToArray = (objeto) => {
    return Object.entries(objeto);
};

const datos = {
    likes: 2,
    dislikes: 3,
    followers: 10
};

console.log(objectToArray(datos));




/* Ejercicio 14
Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
*/

const squaresSum = (n) => 
    {
        return Array.from(
            {
                length: n
            },
            (_, i) => (i + 1) ** 2
        ). reduce ((sum, square) => sum + square, 0)
    }

    console.log(squaresSum(3))

/* Ejercicio 15 
Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
*/

const multiplyByLength = (array) => {
    const length = array.length
    return array.map(item => item * length) 
}
console.log(multiplyByLength([2, 3, 1, 0]))

/* Ejercicio 16
Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
countdown(5) ➞ [5, 4, 3, 2, 1, 0]
*/

const countdown = (n) => {
    return Array.from
    (
        {
            length: n + 1
        },
        (_, i) => n - i
    )
}
console.log(countdown(5))

/* Ejercicio 17
Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
*/
const diffMaxMin = (array) => {

    const max = Math.max(...array)
    const min = Math.min(...array)
    return max - min
}
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]))

/* Ejercicio 18
Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
*/

const filterList = (array) => {

    return array.filter(item => Number.isInteger(item))
}
console.log(filterList([1, 2, 3, "x", "y", 10]))

/* Ejercicio 19
Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
repeat(13, 5) ➞ [13, 13, 13, 13, 13]
*/

const repeat = (variable, veces) => {
    return Array(veces).fill(variable)
}
console.log(repeat(13, 5))


/* Ejercicio 20
Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
"apples and bananas".vreplace("u") ➞ "upplus und bununus"
*/
String.prototype.vreplace = function(replacement)
{
    const vowels = 'aeiouEIOU'
    const regex = new RegExp (""+vowels+", G")
    return this.replace(regex, replacement)
}
console.log("apples and bananas".vreplace("u"))

/* Ejercicio 21
Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
*/
const findNemo = (sentence) => {
    const words = sentence.split ('')
    const index = words.indexOf('Nemo')

    if (index !== -1 ) {
        return "I found Nemo at "+index + 1+"!"
    }
    else
    {
        return "Nemo not found!";
    }
}
console.log(findNemo("I am finding otras cosas Nemo "))


/* Ejercicio 22
Cree una función que capitalice la última letra de cada palabra.
capLast("hello") ➞ "hellO"
*/

const capLast = (sentence) => 
{
    return sentence.split('').map(word => {
        if (word.length > 0) {
            return word.slice(0, -1) + word.slice(-1).toUpperCase();
            
        }
        return word
    }).join('')
}

console.log(capLast("Hello"))




