function ejercicio1() {
  let strNum1 = prompt("Digite el primer numero");
  let num1 = parseFloat(strNum1);
  let strNum2 = prompt("Digite el segundo numero");
  let num2 = parseFloat(strNum2);

  if (!isNaN(num1) && !isNaN(num2)) {
    let suma = num1 + num2;
    alert("La suma de los numeros es: " + suma);
  } else {
    alert("Alguno de los valores ingresados NO es un numero");
  }
}

function ejercicio2() {
  let strNum1 = prompt("Digite el numero a potenciar");
  let num1 = parseFloat(strNum1);
  let strNum2 = prompt("Digite la potencia");
  let num2 = parseFloat(strNum2);

  if (!isNaN(num1) && !isNaN(num2)) {
    let potencia = Math.pow(num1, num2);
    alert(`${num1} elevado a la ${num2} es igual a: ${potencia}`);
  } else {
    alert("Alguno de los valores ingresados NO es un numero");
  }
}

function ejercicio3() {
  let strNum = prompt("SUMA DE CUBOS \nCuantos numeros deseas sumar: ");
  let num = parseFloat(strNum);

  if (!isNaN(num) && num > 0) {
    let suma = 0;
    for (let i = 1; i <= num; i++) {
      let strNum1 = prompt(`Ingrese el numero ${i}: `);
      let num1 = parseFloat(strNum1);
      if (!isNaN(num)) {
        let potencia = Math.pow(num1, 3);
        suma += potencia;
      } else alert("El valor ingresado no es valido");
    }

    alert(`La suma de los cubos es igual a ${suma}`);
  } else {
    alert("El valor ingresado no es valido");
  }
}

function ejercicio4() {
  let strNum1 = prompt("Digite la base del triangulo: ");
  let num1 = parseFloat(strNum1);
  let strNum2 = prompt("Digite la altura del triangulo:");
  let num2 = parseFloat(strNum2);

  if (!isNaN(num1) && !isNaN(num2)) {
    let area = (num1 * num2) / 2;
    alert(`El area del triangulo es igual a: ${area}`);
  } else {
    alert("Alguno de los valores ingresados NO es un numero");
  }
}

function ejercicio5() {
  let strNum1 = prompt("Digite el primer numero");
  let num1 = parseFloat(strNum1);
  let strNum2 = prompt("Digite el segundo numero");
  let num2 = parseFloat(strNum2);
  let char = prompt("Digite la operacion matematica (+,-,/,x,%) :");

  if (!isNaN(num1) && !isNaN(num2)) {
    let resultado;
    switch (char) {
      case "+":
        resultado = num1 + num2;
        break;
      case "-":
        resultado = num1 - num2;
        break;
      case "/":
        resultado = num1 / num2;
        break;
      case "x":
        resultado = num1 * num2;
        break;
      case "%":
        resultado = num1 % num2;
        break;
      default:
        alert("El parámetro no es reconocido");
        break;
    }
    if (resultado != null) alert(`El resultado es igual a: ${resultado}`);
  } else {
    alert("Alguno de los valores ingresados NO es un numero");
  }
}

function teorica1() {
  console.log("Teorica 1");
  alert("¿Cómo defines una función?");
  alert(
    "Una función se define utilizando la palabra clave function, seguida del nombre de la función, paréntesis que pueden contener parámetros, y un bloque de código entre llaves {}"
  );
}

function teorica2() {
  console.log("Teorica 2");
  alert("¿Hasta cuantos argumentos puedes declarar en una función?");
  alert(
    "no hay un límite explícito en la cantidad de argumentos que puedes declarar en una función. Puedes definir tantos parámetros como necesites en la declaración de la función"
  );
}

////////////////////
function reto1() {
  let nombre = prompt("Digite el nombre");
  let apellido = prompt("Digite el apellido");
  let edad = prompt("Digite la edad");
  miNombre(nombre, apellido, edad);
}
const miNombre = (nombre, apellido, edad) =>
  alert(`Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`);

////////////////////
const reto2 = () => {
  let strNum = prompt("SUMA DE CUBOS \nCuantos numeros deseas sumar: ");
  let num = parseFloat(strNum);

  if (!isNaN(num) && num > 0) {
    let suma = 0;
    for (let i = 1; i <= num; i++) {
      let strNum1 = prompt(`Ingrese el numero ${i}: `);
      let num1 = parseFloat(strNum1);
      if (!isNaN(num)) {
        let potencia = Math.pow(num1, 3);
        suma += potencia;
      } else alert("El valor ingresado no es valido");
    }
    alert(`La suma de los cubos es igual a ${suma}`);
  } else {
    alert("El valor ingresado no es valido");
  }
};

////////////////////
function reto3() {
  alert(`Se muestra en consola los valores`);
  console.log("42 => " + tipoJs(42)); // "number"
  console.log("Hola => " + tipoJs("Hola")); // "string"
  console.log("true => " + tipoJs(true)); // "boolean"
  console.log("undefined => " + tipoJs(undefined)); // "undefined"
  console.log("null => " + tipoJs(null)); // "object"
  console.log("{ nombre: Juan } => " + tipoJs({ nombre: "Juan" })); // "object"
  console.log("[1, 2, 3] => " + tipoJs([1, 2, 3])); // "object"
  console.log("() => {} => " + tipoJs(() => {})); // "function"
}
const tipoJs = (valor) => typeof valor;

////////////////////
function reto4() {
  alert("La suma de 3 numeros 1,2,3 usando rest es: " + sumarN(1, 2, 3));
  alert("La suma de 2 numeros 5,6,7 usando rest es: " + sumarN(5, 6, 7));
  alert("La suma de 4 numeros -5,7,6 usando rest es: " + sumarN(-5, 7, 6));
}
const sumarN = (...numeros) => {
  suma = 0;
  for (let i = 0; i < numeros.length; i++) suma += numeros[i];
  return suma;
};

////////////////////
function reto5() {
  const valores = [1, "Hola", true, "Mundo", 42, "JavaScript", null];
  alert(
    `Se tiene el siguiente array: [1, "Hola", true, "Mundo", 42, "JavaScript", null]\nEl array resultante es el siguiente: ${filtrarStrings(
      valores
    )}`
  );
}
const filtrarStrings = (valores) => {
  return valores.filter((valor) => typeof valor == "string");
};

////////////////////
function reto6() {
  alert(
    `para el arreglo [1, 2, 3, 4, 5] el min y max son: [${minMax([
      1, 2, 3, 4, 5,
    ])}]`
  );
  alert(
    `para el arreglo [10, -2, 34, 56, 0] el min y max son: [${minMax([
      10, -2, 34, 56, 0,
    ])}]`
  );
  alert(
    `para el arreglo [7, 7, 7, 7] el min y max son: [${minMax([7, 7, 7, 7])}]`
  );
}
const minMax = (numeros) => {
  const minimo = Math.min(...numeros);
  const maximo = Math.max(...numeros);
  return [minimo, maximo];
};

////////////////////
function reto7() {
  arregloEnteros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  alert(
    `para el arreglo [1,2,3,4,5,6,7,8,9,0] el formato de numero es: \n ${formatPhoneNumber(
      arregloEnteros
    )}`
  );
}
const formatPhoneNumber = (numeros) => {
  const numeroString = numeros.join("");
  return `(${numeroString.slice(0, 3)} ${numeroString.slice(
    3,
    6
  )}-${numeroString.slice(6, 10)})`;
};

////////////////////

function reto8() {
  matrizMatrices = [
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ];
  alert(
    `para la matriz de matrices [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]] los mayores son: \n [${findLargestNums(
      matrizMatrices
    )}]`
  );
}
const findLargestNums = (matrices) => {
  let resultados = [];
  for (let i = 0; i < matrices.length; i++) {
    const maximo = Math.max(...matrices[i]);
    resultados.push(maximo);
  }
  return resultados;
};

////////////////////
function reto9() {
  let str1 = prompt("Ingrese la palabra");
  let str2 = prompt("Ingrese el caracter");
  let char = charIndex(str1, str2);
  if (char)
    alert(
      `el primer caracter se encuentra en la posicion ${char[0]} y el ultimo en la posicion ${char[1]}`
    );
  else alert("El caracter no se encuentra en la palabra");
}
const charIndex = (palabra, caracter) => {
  const primerIndice = palabra.indexOf(caracter);
  const ultimoIndice = palabra.lastIndexOf(caracter);
  if (primerIndice === -1) return null;
  return [primerIndice, ultimoIndice];
};

////////////////////
function reto10() {
  alert("el objeto { a: 1, b: 2 } se imprime en consola como matriz");
  console.log(toArray({ a: 1, b: 2 }));
  alert(
    "el objeto { name: 'Alice', age: 25 } se imprime en consola como matriz"
  );
  console.log(toArray({ name: "Alice", age: 25 }));
  alert("el objeto {} se imprime en consola como matriz");
  console.log(toArray({}));
}
const toArray = (obj) => {
  return Object.entries(obj);
};

////////////////////
function reto11() {
  let personas = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ];
  alert(
    "la suma de la matriz de objetos es la siguiente: " + getBudgets(personas)
  );
}
const getBudgets = (personas) => {
  let sumaPresupuestos = 0;
  for (let i = 0; i < personas.length; i++) {
    sumaPresupuestos += personas[i].budget;
  }
  return sumaPresupuestos;
};

////////////////////
function reto12() {
  let estudiantes = [{ name: "Becky" }, { name: "John" }, { name: "Steve" }];
  alert(
    "la matriz con nombres de estudiantes es: " + getStudentNames(estudiantes)
  );
}
const getStudentNames = (estudiantes) => {
  let nombres = [];
  for (let i = 0; i < estudiantes.length; i++) {
    nombres.push(estudiantes[i].name);
  }
  return nombres;
};

////////////////////
function reto13() {
  let social = {
    likes: 2,
    dislikes: 3,
    followers: 10,
  };
  alert(
    "el objeto {likes: 2,dislikes: 3,followers: 10} se imprime en consola como matriz"
  );
  console.log(toArray(social));
}

////////////////////
function reto14() {
  let strNum1 = prompt("Digite un numero");
  let num1 = parseFloat(strNum1);

  if (!isNaN(num1)) {
    alert(
      "La suma de los cuadrados de los n primeros numeros es: " +
        squaresSum(num1)
    );
  } else {
    alert("el valor ingresado NO es un numero");
  }
}
const squaresSum = (n) => {
  let suma = 0;
  for (let i = 1; i <= n; i++) suma += i * i;
  return suma;
};

////////////////////
function reto15() {
  let arr1 = [2, 3, 1, 0];
  let arr2 = [4, 5, 6];
  let arr3 = [1, 2, 3, 4, 5];
  alert("El resultado para la matriz [2, 3, 1, 0] se imprime en consola");
  console.log(multiplyByLength(arr1));
  alert("El resultado para la matriz [4, 5, 6] se imprime en consola");
  console.log(multiplyByLength(arr2));
  alert("El resultado para la matriz [1, 2, 3, 4, 5] se imprime en consola");
  console.log(multiplyByLength(arr3));
}
const multiplyByLength = (arr) => {
  const length = arr.length;
  let result = [];
  for (let i = 0; i < length; i++) result.push(arr[i] * length);
  return result;
};

////////////////////
function reto16() {
  let strNum1 = prompt("Digite un numero");
  let num1 = parseFloat(strNum1);

  if (!isNaN(num1)) {
    alert("El resultado se imprime en consola");
    console.log(countdown(num1));
  } else {
    alert("El valor ingresado NO es un numero");
  }
}
const countdown = (n) => {
  let result = [];
  for (let i = n; i >= 0; i--) result.push(i);
  return result;
};

////////////////////
function reto17() {
  let arr1 = [10, 4, 1, 4, -10, -50, 32, 21];
  let arr2 = [3, 5, 1, 9, 2];
  let arr3 = [-1, -5, -3, -4];
  alert(
    "El resultado para la matriz 10, 4, 1, 4, -10, -50, 32, 21] es:\n" +
      diffMaxMin(arr1)
  );
  alert("El resultado para la matriz [3, 5, 1, 9, 2] es:\n" + diffMaxMin(arr2));
  alert(
    "El resultado para la matriz [-1, -5, -3, -4] es:\n" + diffMaxMin(arr3)
  );
}
const diffMaxMin = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  return max - min;
};

////////////////////
function reto18() {
  let arr1 = [1, 2, 3, "x", "y", 10];
  let arr2 = [5, "hello", 7, 8, "world"];
  let arr3 = ["a", 2, "b", 3];
  alert(
    `El resultado para la matriz [1, 2, 3, "x", "y", 10] se imprime en consola`
  );
  console.log(filterList(arr1));
  alert(
    `El resultado para la matriz [5, "hello", 7, 8, "world"] se imprime en consola`
  );
  console.log(filterList(arr2));
  alert(`El resultado para la matriz ["a", 2, "b", 3] se imprime en consola`);
  console.log(filterList(arr3));
}
const filterList = (arr) => {
  return arr.filter((item) => Number.isInteger(item));
};

////////////////////
function reto19() {
  let str = prompt("Digite el elemento");
  let strNum2 = prompt("Digite el tiempo");
  let num2 = parseFloat(strNum2);

  if (!isNaN(num2)) {
    alert(`El resultado se imprime en consola`);
    console.log(repeat(str, num2));
  } else {
    alert("Alguno de los valores ingresados NO es un numero");
  }
}
const repeat = (elemento, veces) => {
  let resultado = [];
  for (let i = 0; i < veces; i++) resultado.push(elemento);
  return resultado;
};

////////////////////
function reto20() {
  let str1 = prompt("Digite una frase cadena");
  let str2 = prompt("Digite la vocal que reemplazara a todas las vocales");

  if (str2 == "a" || str2 == "e" || str2 == "i" || str2 == "o" || str2 == "u") {
    alert("La nueva frase es:\n" + vreplace(str1, str2));
  } else {
    alert("Alguno de los valores ingresados NO es un numero");
  }
}
const vreplace = (str, vocal) => {
  return str.replace(/[aeiou]/g, vocal);
};

////////////////////
function reto21() {
  let str1 = prompt("Digite una frase que contenga Nemo");
  alert(findNemo(str1));
}
const findNemo = (str) => {
  const palabras = str.split(" ");
  const index = palabras.indexOf("Nemo");
  if (index !== -1)
    return `En la frase "${str}"\nEncontre a Nemo en la posicion ${index + 1}!`;
  else return "Nemo no se encontro";
};

////////////////////
function reto22() {
  let str1 = prompt("Digite una palabra");
  alert(
    "El resutado al capitalizar la ultima letra es el siguiente: " +
      capLast(str1)
  );
}
const capLast = (str) => {
  const palabra = str.split("");
  palabra[palabra.length - 1] = palabra[palabra.length - 1].toUpperCase();
  return palabra.join("");
};
