function ejercicio1() {
  console.log("Ejercicio 1");
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
  console.log("Ejercicio 2");
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
  console.log("Ejercicio 3");
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
  console.log("Ejercicio 4");
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
  console.log("Ejercicio 5");
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

function reto1() {
  let nombre = prompt("Digite el nombre");
  let apellido = prompt("Digite el apellido");
  let edad = prompt("Digite la edad");
  miNombre(nombre, apellido, edad);
}
const miNombre = (nombre, apellido, edad) =>
  alert(`Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`);

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

function reto4() {
  alert("La suma de 3 numeros 1,2,3 usando rest es: " + sumarN(1, 2, 3));
}
const sumarN = (...numeros) => {
  suma = 0;
  for (let i = 0; i < numeros.length; i++) suma += numeros[i];
  return suma;
};

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
