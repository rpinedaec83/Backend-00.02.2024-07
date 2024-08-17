//?Reto 1//
//*1. Crea una función que retorne la suma de dos números.//*

function Ejercicio1() {
    let numero1 = parseFloat(prompt("Ingresa el primer número para la suma:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número para la suma:"));
    let resultadoSuma = numero1 + numero2;
    console.log("La suma es: " + resultadoSuma);
    alert("La suma es: " + resultadoSuma);
}

//*2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.//*

function Ejercicio2() {
    let base = parseFloat(prompt("Ingresa la base para la potencia:"));
    let exponente = parseFloat(prompt("Ingresa el exponente para la potencia:"));
    let resultadoPotencia = Math.pow(base, exponente);
    console.log("La potencia es: " + resultadoPotencia);
    alert("La potencia es: " + resultadoPotencia);
}

//*3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855//*

function Ejercicio3() {
    let numeroA = parseFloat(prompt("Ingresa el primer número para el cubo:"));
    let numeroB = parseFloat(prompt("Ingresa el segundo número para el cubo:"));
    let numeroC = parseFloat(prompt("Ingresa el tercer número para el cubo:"));
    let resultadoCubos = Math.pow(numeroA, 3) + Math.pow(numeroB, 3) + Math.pow(numeroC, 3);
    console.log("La suma de los cubos es: " + resultadoCubos);
    alert("La suma de los cubos es: " + resultadoCubos);
}


//*4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.//*
//*triArea(3, 2) ➞ 3//*

function Ejercicio4() {
    let baseTriangulo = parseFloat(prompt("Ingresa la base del triángulo:"));
    let alturaTriangulo = parseFloat(prompt("Ingresa la altura del triángulo:"));
    let resultadoArea = (baseTriangulo * alturaTriangulo) / 2;
    console.log("El área del triángulo es: " + resultadoArea);
    alert("El área del triángulo es: " + resultadoArea);
}


//*5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática //*
//*(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,//*"+", 2) ➞ 4//*

function Ejercicio5() {
    let numeroX = parseFloat(prompt("Ingresa el primer número para la calculadora:"));
    let operacion = prompt("Ingresa la operación (+, -, /, x, %):");
    let numeroY = parseFloat(prompt("Ingresa el segundo número para la calculadora:"));
    
    let resultadoCalculadora;
    
    switch (operacion) {
        case '+':
            resultadoCalculadora = numeroX + numeroY;
            break;
        case '-':
            resultadoCalculadora = numeroX - numeroY;
            break;
        case '/':
            resultadoCalculadora = numeroX / numeroY;
            break;
        case 'x':
        case '*':
            resultadoCalculadora = numeroX * numeroY;
            break;
        case '%':
            resultadoCalculadora = numeroX % numeroY;
            break;
        default:
            resultadoCalculadora = "El parámetro no es reconocido";
    }

    console.log("Resultado de la operación: " + resultadoCalculadora);
    alert("Resultado de la operación: " + resultadoCalculadora);
}


//?Reto 2//

//*1. Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”//*

function Ejercicio2_1() {
    let nombre = prompt("Ingresa tu nombre:");
    let apellido = prompt("Ingresa tu apellido:");
    let edad = prompt("Ingresa tu edad:");
    let resultado = `Hola, mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;
    
    console.log(resultado);
    alert(resultado);
}


//*2. Cree una función que tome números y devuelva la suma de sus cubos.
//*sumOfCubes(1, 5, 9) ➞ 855//*

function Ejercicio2_2() {
    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    let numero3 = parseFloat(prompt("Ingresa el tercer número:"));
    let resultado = Math.pow(numero1, 3) + Math.pow(numero2, 3) + Math.pow(numero3, 3);
    
    console.log("La suma de los cubos es: " + resultado);
    alert("La suma de los cubos es: " + resultado);
}


// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
//*3. Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js//*

function Ejercicio2_3() {
    let valor = prompt("Ingresa un valor para conocer su tipo:");
    let resultado = typeof valor;
    
    console.log("El tipo de valor es: " + resultado);
    alert("El tipo de valor es: " + resultado);
}


//*4. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)//*

function Ejercicio2_4() {
    let numeros = prompt("Ingresa números separados por comas:").split(",").map(Number);
    let resultado = numeros.reduce((suma, numero) => suma + numero, 0);
    
    console.log("La suma de los números es: " + resultado);
    alert("La suma de los números es: " + resultado);
}


//*5. Crear una función que reciba un array de valores y filtre los valores que no son string//*

function Ejercicio2_5() {
    let array = prompt("Ingresa valores separados por comas:").split(",");
    let resultado = array.filter(item => typeof item === 'string');
    
    console.log("Los valores que son strings: " + resultado);
    alert("Los valores que son strings: " + resultado);
}


//*6. Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//*minMax([1, 2, 3, 4, 5]) ➞ [1, 5]//*

function Ejercicio2_6() {
    let numeros = prompt("Ingresa una matriz de números separados por comas:").split(",").map(Number);
    let min = Math.min(...numeros);
    let max = Math.max(...numeros);
    let resultado = [min, max];
    
    console.log("El mínimo y máximo son: " + resultado);
    alert("El mínimo y máximo son: " + resultado);
}


//*7. Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.//*
//*formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"//*

function Ejercicio2_7() {
    let numeros = prompt("Ingresa 10 números separados por comas (entre 0 y 9):").split(",").map(Number);
    if (numeros.length !== 10) {
        alert("Por favor, ingresa exactamente 10 números.");
        return;
    }
    let formato = `(${numeros.slice(0, 3).join('')}) ${numeros.slice(3, 6).join('')}-${numeros.slice(6, 10).join('')}`;
    
    console.log("Número de teléfono: " + formato);
    alert("Número de teléfono: " + formato);
}


//*8. Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.//*
//*findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]//*

function Ejercicio2_8() {
    let input = prompt("Ingresa matrices de números separados por comas, cada matriz entre corchetes (ej. [1,2,3],[4,5,6]):");
    let matrices = JSON.parse("[" + input + "]");
    let resultado = matrices.map(matriz => Math.max(...matriz));
    
    console.log("Los mayores números de cada matriz son: " + resultado);
    alert("Los mayores números de cada matriz son: " + resultado);
}


//*9. Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.//*
//*charIndex("hello", "l") ➞ [2, 3]//*
// The first "l" has index 2, the last "l" has index 3.

function Ejercicio2_9() {
    let palabra = prompt("Ingresa una palabra:");
    let caracter = prompt("Ingresa el carácter a buscar:");
    
    let primerIndice = palabra.indexOf(caracter);
    let ultimoIndice = palabra.lastIndexOf(caracter);
    
    let resultado = [primerIndice, ultimoIndice];
    
    console.log(`El primer índice de "${caracter}" es: ${primerIndice}, y el último índice es: ${ultimoIndice}`);
    alert(`El primer índice de "${caracter}" es: ${primerIndice}, y el último índice es: ${ultimoIndice}`);
}


//*10. Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.//*
//*toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]//*

function Ejercicio2_10() {
    let input = prompt("Ingresa un objeto en formato JSON (ej. { \"a\": 1, \"b\": 2 }):");
    let objeto = JSON.parse(input);
    let resultado = Object.entries(objeto);
    
    console.log("El objeto convertido a matriz es: " + JSON.stringify(resultado));
    alert("El objeto convertido a matriz es: " + JSON.stringify(resultado));
}


//*11. Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.//*

//*getBudgets([
//*  { name: "John", age: 21, budget: 23000 },//*
//*  { name: "Steve",  age: 32, budget: 40000 },//*
//*  { name: "Martin",  age: 16, budget: 2700 }//*
//*]) ➞ 65700//*

function Ejercicio2_11() {
    let input = prompt("Ingresa una matriz de objetos con nombres y presupuestos (ej. [{ \"name\": \"John\", \"age\": 21, \"budget\": 23000 }, ...]):");
    let personas = JSON.parse(input);
    let resultado = personas.reduce((suma, persona) => suma + persona.budget, 0);
    
    console.log("La suma de los presupuestos es: " + resultado);
    alert("La suma de los presupuestos es: " + resultado);
}


//*12. Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.//*
//*getStudentNames([//*
//*  { name: "Steve" },//*
//*  { name: "Mike" },//*
//*  { name: "John" }//*
//*]) ➞ ["Becky", "John", "Steve"]//*

function Ejercicio2_12() {
    let input = prompt("Ingresa una matriz de objetos de estudiantes (ej. [{ \"name\": \"Steve\" }, ...]):");
    let estudiantes = JSON.parse(input);
    let resultado = estudiantes.map(estudiante => estudiante.name);
    
    console.log("La matriz de nombres de estudiantes es: " + JSON.stringify(resultado));
    alert("La matriz de nombres de estudiantes es: " + JSON.stringify(resultado));
}


//*13. Escriba una función que convierta un objeto en una matriz de claves y valores.//*
//*objectToArray({//*
//*  likes: 2,//*
//*  dislikes: 3,//*
//*  followers: 10//*
//*}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]//*

function Ejercicio2_13() {
    let input = prompt("Ingresa un objeto en formato JSON (ej. { \"likes\": 2, \"dislikes\": 3, \"followers\": 10 }):");
    let objeto = JSON.parse(input);
    let resultado = Object.entries(objeto);
    
    console.log("El objeto convertido a matriz de claves y valores es: " + JSON.stringify(resultado));
    alert("El objeto convertido a matriz de claves y valores es: " + JSON.stringify(resultado));
}


//*14. Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.//*
//*squaresSum(3) ➞ 14//*
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14

function Ejercicio2_14() {
    let n = parseInt(prompt("Ingresa un número n:"));
    let resultado = 0;
    
    for (let i = 1; i <= n; i++) {
        resultado += i * i;
    }
    
    console.log("La suma de los cuadrados hasta " + n + " es: " + resultado);
    alert("La suma de los cuadrados hasta " + n + " es: " + resultado);
}


//*15. Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada//*
//*multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]//*

function Ejercicio2_15() {
    let input = prompt("Ingresa una matriz de números separados por comas (ej. [2, 3, 1, 0]):");
    let matriz = JSON.parse(input);
    let resultado = matriz.map(numero => numero * matriz.length);
    
    console.log("La matriz resultante es: " + JSON.stringify(resultado));
    alert("La matriz resultante es: " + JSON.stringify(resultado));
}


//*16. Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
//*countdown(5) ➞ [5, 4, 3, 2, 1, 0]//*

function Ejercicio2_16() {
    let numero = parseInt(prompt("Ingresa un número para iniciar la cuenta regresiva:"));
    let resultado = [];
    
    for (let i = numero; i >= 0; i--) {
        resultado.push(i);
    }
    
    console.log("Cuenta regresiva: " + resultado);
    alert("Cuenta regresiva: " + resultado);
}


//*17. Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.//*
//*diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82//*
// Smallest number is -50, biggest is 32.

function Ejercicio2_17() {
    let input = prompt("Ingresa una matriz de números separados por comas (ej. [10, 4, 1, -10, -50, 32]):");
    let numeros = JSON.parse(input);
    let max = Math.max(...numeros);
    let min = Math.min(...numeros);
    let resultado = max - min;
    
    console.log("La diferencia entre el número más grande y el más pequeño es: " + resultado);
    alert("La diferencia entre el número más grande y el más pequeño es: " + resultado);
}


//*18. Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.//*
//*filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]//*

function Ejercicio2_18() {
    let input = prompt("Ingresa una matriz de números y cadenas separados por comas (ej. [1, 2, 3, 'x', 'y', 10]):");
    let lista = JSON.parse(input);
    let resultado = lista.filter(item => Number.isInteger(item));
    
    console.log("La nueva matriz que solo contiene enteros es: " + resultado);
    alert("La nueva matriz que solo contiene enteros es: " + resultado);
}


//*19. Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.//*
//*repeat(13, 5) ➞ [13, 13, 13, 13, 13]//*

function Ejercicio2_19() {
    let elemento = prompt("Ingresa el elemento que deseas repetir:");
    let veces = parseInt(prompt("Ingresa la cantidad de veces que deseas repetir el elemento:"));
    let resultado = Array(veces).fill(elemento);
    
    console.log(`El elemento "${elemento}" repetido ${veces} veces es: ` + resultado);
    alert(`El elemento "${elemento}" repetido ${veces} veces es: ` + resultado);
}


//*20. Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.//*
//*"apples and bananas".vreplace("u") ➞ "upplus und bununus"//*

String.prototype.vreplace = function(vocal) {
    return this.replace(/[aeiou]/gi, vocal);
};

function Ejercicio2_20() {
    let cadena = prompt("Ingresa una cadena de texto (ej. 'apples and bananas'):");
    let nuevaVocal = prompt("Ingresa la vocal con la que deseas reemplazar todas las vocales:");
    let resultado = cadena.vreplace(nuevaVocal);
    
    console.log("Cadena resultante: " + resultado);
    alert("Cadena resultante: " + resultado);
}


//*21. Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".//*
//*findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"//*

function Ejercicio2_21() {
    let cadena = prompt("Ingresa una cadena de texto para buscar 'Nemo' (ej. 'I am finding Nemo!'):");
    let palabras = cadena.split(" ");
    let posicion = palabras.indexOf("Nemo") + 1; // Suma 1 porque los índices en arrays comienzan en 0
    
    let resultado = posicion > 0 ? `¡Encontré a Nemo en ${posicion}!` : "No se encontró a Nemo en la cadena.";
    
    console.log(resultado);
    alert(resultado);
}

//*22. Cree una función que capitalice la última letra de cada palabra.//*
//*capLast("hello") ➞ "hellO"//*

function Ejercicio2_22() {
    let cadena = prompt("Ingresa una cadena de texto (ej. 'hello world'):");
    let resultado = cadena.split(" ").map(palabra => {
        return palabra.slice(0, -1) + palabra.slice(-1).toUpperCase();
    }).join(" ");
    
    console.log("Cadena con la última letra capitalizada: " + resultado);
    alert("Cadena con la última letra capitalizada: " + resultado);
}