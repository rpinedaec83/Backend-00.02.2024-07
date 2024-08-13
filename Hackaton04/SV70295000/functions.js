//1. Crea una función que retorne la suma de dos números.

function suma2Numeros(num1, num2){
    let resultado = num1 + num2;
    return resultado;
}

let ejercicio1 = suma2Numeros(50,10)
console.log("La suma es: " + ejercicio1)


//2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

function potenciaNumero(num, potencia){
let resultado = Math.pow(num, potencia);
return resultado
}

let ejercicio2 = potenciaNumero(2,5);
console.log("El resultado es: " +ejercicio2)


//3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855

function sumadeCubos(...numeros){
    return numeros.reduce((suma, numero) => suma + Math.pow(numero,3),0);
}

let ejercicio3 = sumadeCubos(1,2,3)
console.log("La suma de los cubos es: " + ejercicio3)



//4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.


function areaTriangulo(base, altura){
    let resultado = (base * altura)/2;
    return resultado;
}

let ejercicio4 = areaTriangulo(4,5)
console.log("El area del triangulo es: " + ejercicio4)



//5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
//(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

function calculator(num1, operador, num2) {
    switch (operador) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case 'x':
        case '*':
            return num1 * num2;
        case '%':
            return num1 % num2;
        default:
            return "La operacion no es valida";
    }
}

console.log(calculator(3,"+",4))
console.log(calculator(3,"-",4))
console.log(calculator(3,"*",4))
console.log(calculator(3,"/",4))
console.log(calculator(3,"&",4))
console.log(calculator(3,"%",4))

//--------PREGUNTAS--------\\

// ¿Cómo defines una función?
// Una funcion es un proposito o tarea que se le asigna a algo o alguien.
//En Javascript y en programacion como tal,  una funcion es un conjunto de instrucciones que realizan una tarea especifica.

//Para definir una función en JavaScript, puedes utilizar la palabra clave function

//  ¿Hasta cuantos argumentos puedes declarar en una función?
//Una funcion puede tener hasta 255 argumentos.


//-------------------------------------------------\\



//----EJERCICIOS ADICIONALES----\\

//1. Utilizando función arrow, crear una función que reciba como parámetros un nombre, apellido y edad y los retorne en un string concatenado “Hola mi nombre es sebastián yabiku y mi edad 33”

const Presentacion = (nombre, apellido, edad) =>
    `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;
console.log(Presentacion("Jose", "Castro", 25));



//2. Crear una funcion que me retorne el tipo de valor entregado, invocar la función para los distintos tipos de js

const tiposJS = (valor) =>{
    return typeof valor 
}

console.log(tiposJS(true))



//3. Crear una función que reciba n cantidad de argumentos y los sume ( utilizar parametros rest)

const operacion = (...numeros) => 
    numeros.reduce((suma, numero) => suma + numero, 0);


 console.log(operacion(1, 5, 7, 9, 10));
 console.log(operacion(1, 2, 3));



 //4.Crear una función que reciba un array de valores y filtre los valores que no son string.

 const filtrarString = (valores) =>
    valores.filter(valor => typeof valor === 'string');

 console.log(filtrarString([151, "string1", [], "string2"]))




 //5. Cree una función que tome una matriz de números y devuelva los números mínimos y máximos, en ese orden.
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5

const minMax = ([...valores]) => [Math.min(...valores), Math.max(...valores)];

console.log(minMax([1,5,6,100]))



//6. Escriba una función que tome una matriz de 10 enteros (entre 0 y 9) y devuelva una cadena en forma de un número de teléfono.
//formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

const numeroTelefono = (numeros) =>{
    if (numeros.length !==10){
        return "Tienen que ser 10 numeros exactamente"
    }
    const localArea = numeros.slice(0, 3).join('');
    const fisrtPart = numeros.slice(3,6).join('');
    const secPart = numeros.slice(6).join('');
    return `(${localArea}) ${fisrtPart}-${secPart}`;
}

console.log(numeroTelefono([1,2,3,4,5,6,7,8,9,0]));



//7.Cree una función que tome una matriz de matrices con números. Devuelve una nueva matriz (única) con el mayor número de cada uno.
//findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

const numerosMayores = (numeros) =>
    numeros.map(matrices => Math.max(...matrices));

console.log(numerosMayores([[100,25,350],[70,284,19],[1,-100,450]]));



//9.Dada una palabra, escriba una función que devuelva el primer índice y el último índice de un carácter.
//charIndex("hello", "l") ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.
//charIndex("circumlocution", "c") ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.

function ultimo_Caracter(word, char) {
    let firstIndex = word.indexOf(char);
    let lastIndex = word.lastIndexOf(char);
    
    if (firstIndex === -1) {
        return null;  // El carácter no se encuentra en la palabra
    }

    return [firstIndex, lastIndex];
}
console.log(ultimo_Caracter("esternocleidomastopideo", "e"))


//10.Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

function ejercicio10(obj) {
    return Object.entries(obj);
}
console.log(ejercicio10({z:1,key:2}));



//11.Cree la función que toma una matriz con objetos y devuelve la suma de los presupuestos de las personas.

//getBudgets([
//    { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700

function ejercicio11(arr) {
    return arr.reduce((total, person) => total + person.budget, 0);
}
console.log(ejercicio11([
    {name: "Juan", edad: 25, budget:1500},
    {name: "Ana", edad: 20, budget:2100},
    {name: "Oscar", edad: 34, budget:1800},
]));



//12. Cree una función que tome una matriz de estudiantes y devuelva una matriz de nombres de estudiantes.
//getStudentNames([
//    { name: "Steve" },
//    { name: "Mike" },
//    { name: "John" }
//]) ➞ ["Becky", "John", "Steve"] 

function ejercicio12(alumnos) {
    return alumnos.map(alumno => alumno.name);
}
console.log(ejercicio12([
    {name: "Juan"},
    {name: "Ana"},
    {name: "Oscar"},
    {name: "Sofia"},
]));



//13.Escriba una función que convierta un objeto en una matriz de claves y valores.
//objectToArray({
//    likes: 2,
//    dislikes: 3,
//    followers: 10
//  }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
  
function ejercicio13(obj) {
    return Object.entries(obj);
  }
  const resultado = ejercicio13({
    Manzanas:2, Peras:5, Papayas:3});
    console.log(resultado);



//14.Cree una función donde, dado el número n, devuelva la suma de todos los números cuadrados  incluyendo n.
//squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
    
function ejercicio14(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
      suma += i * i;
    }
    return suma;
  }

  const result = ejercicio14(5);
  console.log(result);



//15.Cree una función para multiplicar todos los valores en una matriz por la cantidad de valores en la matriz dada
//multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]

function ejercicio15(arr) {
    const length = arr.length;
    return arr.map(value => value * length);
}

const ejemplo = ejercicio15([5,1,4,8]);
console.log(ejemplo);



//16.Cree una función que tome un número como argumento y devuelva una matriz de números contando desde este número a cero.
//countdown(5) ➞ [5, 4, 3, 2, 1, 0]

function ejercicio16(n) {
    const result = [];
    for (let i = n; i >= 0; i--) {
      result.push(i);
    }
    return result;
  }

  const example = ejercicio16(10);
  console.log(example);



//17.Cree una función que tome una matriz y devuelva la diferencia entre los números más grandes y más pequeños.
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.

function ejercicio17(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
  }

  const resp = ejercicio17([-84,100,199,1,-98]);
  console.log(resp);

  

//18.Cree una función que filtre las cadenas de una matriz y devuelva una nueva matriz que solo contenga enteros.
//filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
 
function ejercicio18(arr) {
    return arr.filter(item => Number.isInteger(item));
  }
  
  const resultdo = ejercicio18([1, 5, 19, "m", "pez", -99]);
  console.log(resultdo);

 

//19.Cree una función que tome dos argumentos (elemento, tiempos). El primer argumento (elemento) es el elemento que necesita repetirse, mientras que el segundo argumento (veces) es la cantidad de veces que se debe repetir el elemento. Devuelve el resultado en una matriz.
// repeat(13, 5) ➞ [13, 13, 13, 13, 13]

function ejercicio19(element, times) {
    return Array(times).fill(element);
  }

  const rpta = ejercicio19(17,10);
  console.log(rpta);



//20.Escriba una función, .vreplace () que extienda el prototipo de cadena reemplazando todas las vocales en una cadena con una vocal especificada.
//  "apples and bananas".vreplace("u") ➞ "upplus und bununus"
  
// Extiende el prototipo de la cadena
String.prototype.vreplace = function(vowel) {
    // Asegúrate de que el argumento sea una sola vocal
    if (!vowel || vowel.length !== 1 || !/[aeiou]/i.test(vowel)) {
      throw new Error('El argumento debe ser una sola vocal.');
    }
  
    
    const vowels = 'aeiou';
    

    return this.replace(/[aeiou]/gi, vowel);
  };
  const rpta2 = "la ruta natural".vreplace("e");
  console.log(rpta2);



//21.Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y devolver una cadena como esta: "¡Encontré a Nemo en [el orden de la palabra que encuentra nemo]!".
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

function ejercicio21(sentence) {
    // Divide la cadena en palabras
    const words = sentence.split(' ');
    
    // Busca la posición de la palabra "Nemo"
    const index = words.indexOf('Nemo');
    
    // Verifica si "Nemo" está en la cadena y devuelve el mensaje correspondiente
    if (index !== -1) {
      return `I found Nemo at ${index + 1}!`;
    } else {
      return "Nemo not found!";
    }
  }

  const rpta3 = ejercicio21("I am finding Nemo !");
console.log(rpta3);



//22.Cree una función que capitalice la última letra de cada palabra.
// capLast("hello") ➞ "hellO"

function ejercicio22(str) {
    // Divide la cadena en palabras
    const words = str.split(' ');
  
    // Mapea cada palabra para capitalizar su última letra
    const capitalizedWords = words.map(word => {
      if (word.length > 0) {
        // Capitaliza la última letra y deja el resto igual
        return word.slice(0, -1) + word.slice(-1).toUpperCase();
      }
      return word;
    });
  
    // Une las palabras de nuevo en una sola cadena
    return capitalizedWords.join(' ');
  }
  
  // Ejemplo de uso
  const rpta4 = ejercicio22("aprendiendo a programar en javascript");
  console.log(rpta4);

  //end
  