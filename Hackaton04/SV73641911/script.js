// RETO 1
console.log("RETO 1")

// 1. Crea una función que retorne la suma de dos números.
console.log("Problema 1")
function suma(a, b) {
    return a + b;
}
console.log(suma(5, 7));

// 2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.
console.log("Problema 2")
function potenciacion(numero, potencia) {
    let resultado = Math.pow(numero, potencia);
    return resultado;
}
console.log(potenciacion(4, 3));
   
// 3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
console.log("Problema 3")
function sumOfCubes(a, b, c) {
    let resultado = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
    return resultado;
}
console.log(sumOfCubes(1, 5, 9));

// 4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3
console.log("Problema 4");
function triArea(b, a){
    return b * a / 2;
}
console.log(triArea(3, 2));

// 5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática (+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4
console.log("Problema 5");
function calculator(a, operacion, b) {
    switch (operacion) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "/":
            return a / b;
        case "x":
            return a * b;
        case "%":
            return a % b;
        default:
            return "El parámetro no es reconocido"
    }
}
console.log(calculator(2, "+", 2));
console.log(calculator(5, "-", 2));
console.log(calculator(15, "/", 3));
console.log(calculator(2, "x", 2));
console.log(calculator(2, "%", 2));
console.log(calculator(2, "xd", 2));

// RETO 2
console.log("RETO 2");
// 1) Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”
console.log("Ejercicio 1");
const funcionFlecha = (nombre, apellido, edad) => "Hola mi nombre es " + nombre + " " + apellido + " y mi edad " + edad;
console.log(funcionFlecha("Diego", "Rivas", 27));

// 2) Cree una función que tome números y devuelva la suma de sus cubos.
// sumOfCubes(1, 5, 9) ➞ 855
console.log("Ejercicio 2");
console.log(sumOfCubes(1, 5, 9));

// 3) Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js
console.log("Ejercicio 3");
function tipoValor(valor) {
    if (valor === null) {
        return "null";
    }
    else {
        return typeof valor;
    }
}
console.log(tipoValor(5));
console.log(tipoValor(null));

// 4) Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)
console.log("Ejercicio 4");
function suma(...numeros) {
    let total = 0;
    for (const num of numeros) {
      total += num;
    }
    return total;
}
console.log(suma(5, 3, 4));
console.log(suma(5, 3, 4, 2));

// 5) Crear una función que reciba un array de valores y filtre los valores que no son string
console.log("Ejercicio 5");
function filterString(valores) {
    return valores.filter(valor => typeof valor === "string");
}
console.log(filterString([1,2,3,"Hola", "como", "estas"]));

// 6) Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
console.log("Ejercicio 6");
function minMax(numeros) {
    const minimo = Math.min(...numeros);
    const maximo = Math.max(...numeros);
    return [minimo, maximo];
}
console.log(minMax([1,2,3,-1,-2,-3]));

// 7) Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
console.log("Ejercicio 7");
function formatPhoneNumber(lista) {
    const part1 = lista.slice(0, 3).join("");
    const part2 = lista.slice(3, 6).join("");
    const part3 = lista.slice(6).join("");
    return "(" + part1 + ") " + part2 + "-" + part3; 
}
console.log(formatPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

// 8) Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
console.log("Ejercicio 8");
function findLargestNums(matrices) {
    return matrices.map(submatrices => Math.max(...submatrices));
}
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));

// 9) Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
// charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
// charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.
console.log("Ejercicio 9");
function charIndex(palabra, caracter) {
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);
    if (primerIndice == -1) return "El caracter no se encuentra en el string";
    return [primerIndice, ultimoIndice];
}
console.log(charIndex("hello", "l"));

// 10) Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
console.log("Ejercicio 10");
function toArray(objeto) {
    return Object.entries(objeto);
}
console.log(toArray({ a: 1, b: 2 }));

// 11) Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.
/*
getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]) ➞ 65700
 */
console.log("Ejercicio 11");
function getBudgets(matriz){
    return matriz.reduce((total, persona) => total + persona.budget, 0);
}
console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]));

// 12) Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
/*
getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ]) ➞ ["Becky", "John", "Steve"]
*/
console.log("Ejercicio 12");
function getStudentNames(estudiantes) {
    return estudiantes.map((elemento, index) => {
        return elemento.name;
    }).sort()
}
console.log(getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ]));

// 13) Escriba una función que convierta un objeto en una matriz de claves y valores.
/*
objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
*/
console.log("Ejercicio 13");
function objectToArray(objeto) {
    return Object.entries(objeto);
}
console.log(objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
  }));

// 14) Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
// squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
console.log("Ejercicio 14");
function squaresSum(numero) {
    let suma = 0;
    for (let i = 1; i <= numero; i++) {
        suma += Math.pow(i, 2);
    }
    return suma;
}
console.log(squaresSum(3));

// 15) Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
console.log("Ejercicio 15");
function multiplyByLength(matriz) {
    const length = matriz.length;
    return matriz.map(item => item * length);
}
console.log(multiplyByLength([2, 3, 1, 0]));

// 16) Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
console.log("Ejercicio 16");
function countdown(numero) {
    let lista = [];
    for (let i = numero; i >= 0; i--) {
        lista.push(i);
    }
    return lista;
}
console.log(countdown(5));

// 17) Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
console.log("Ejercicio 17");
function diffMaxMin(lista) {
    minimo = Math.min(...lista);
    maximo = Math.max(...lista);
    return maximo - minimo;
}
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

// 18) Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
console.log("Ejercicio 18");
function filterList(lista) {
    return lista.filter(valor => typeof valor == "number");
}
console.log(filterList([1, 2, 3, "x", "y", 10]));

// 19) Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]
console.log("Ejercicio 19");
function repeat(elemento, tiempo) {
    return Array(tiempo).fill(elemento);
}
console.log(repeat(13, 5));

// 20) Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"
console.log("Ejercicio 20");
String.prototype.vreplace = function(reemplazo) {
    const regex = new RegExp("[aeiouAEIOU]", "g");
    return this.replace(regex, reemplazo);
}
console.log("apples and bananas".vreplace("u"));

// 21) Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
console.log("Ejercicio 21");
function findNemo(sentence) {
    const words = sentence.split(" ");
    const index = words.indexOf("Nemo");
    if (index != -1) {
        return "¡Encontré a Nemo en " + (index + 1) + "!";
    }
    else {
        return "Nemo not found!";
    }
}
console.log(findNemo("I am finding Nemo !"));

// 22) Cree una función que capitalice la última letra de cada palabra.
// capLast("hello") ➞ "hellO"
console.log("Ejercicio 22");
const capLast = (sentence) => {
    return sentence.split(" ").map(word => {
        if (word.length > 0) {
            return word.slice(0, -1) + word.slice(-1).toUpperCase();
        }
        return word;
    }).join("")
}
console.log(capLast("hello"));
