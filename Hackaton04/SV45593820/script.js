const validateNumber = (num, alertar = true) => {
  if (Number(num) === parseFloat(num)) {
      return true;
  }

  if (alertar) alert('( ! ) No es un dato válido');
  return false;
}

// POTENCIA
const obtenerPotencia = (base, exponente) => {
  return Math.pow(base, exponente);
}

// OBTENER ARREGLO DE NUMEROS
const obtenerArregleNumeros = () => {
  let cantidad = prompt('Cantidad de números a ingresar');
  if (!validateNumber(cantidad, true)) return;
  cantidad = parseInt(cantidad);

  let arrNumeros = [];

  for (let x = 0; x < cantidad; x++) {
    let num = prompt(`Ingrese el ${x + 1} número:`);
    if (!validateNumber(num, true)) return;
    
    arrNumeros.push(parseFloat(num));
  }

  return arrNumeros;
}

const ejercicio_1 = () => {
  let sum = 0;
  for (let j = 1; j < 3; j++) {
    let num = prompt(`Ingrese el ${j} número`);
    if (validateNumber(num)) {
      num = parseFloat(num);
      sum += num;
    } else {
      return;
    }
  }

  alert(`La suma de los dos números es: ${sum}`);
}

const ejercicio_2 = () => {
  let base = prompt('Ingrese el número base:');
  if (!validateNumber(base)) return;

  let exponente = prompt('Ingrese el número exponente');
  if (!validateNumber(exponente)) return;

  base = parseFloat(base);
  exponente = parseFloat(exponente);

  let potencia = obtenerPotencia(base, exponente);

  alert(`${base} elevado a la potencia ${exponente} es: ${potencia}`);
}

const ejercicio_3 = () => {
  let cantidad = prompt('Cantidad de números a sumar sus cubos:');
  if (!validateNumber(cantidad, true)) return;
  cantidad = parseInt(cantidad);

  let sumCubos = 0;

  for (let x = 0; x < cantidad; x++) {
    let num = prompt(`Ingrese el ${x + 1} número:`);
    if (!validateNumber(num, true)) return;
    
    sumCubos += obtenerPotencia(num, 3);
  }

  alert(`La suma de cubos de los números ingresados es: ${sumCubos}`);
}

const word_ejercicio_1 = () => {
  let nom = prompt('Ingrese su nombre');
  let ape = prompt('Ingrese su apellido');
  let eda = prompt('Ingrese su edad');

  alert(oracionNombre(nom, ape, eda));
}
const oracionNombre = (nombre, apellido, edad) => {
  return `Hola mi nombre es ${nombre} ${apellido} y mi edad es ${edad}`;
}


const word_ejercicio_3 = () => {
  let valor = prompt('Ingrese un valor para obtener su tipo de dato');
  let tipo = 'STRING';

  if (validateNumber(valor, false)) {
    tipo = 'NUMBER';
  }

  if (valor === 'true' || valor === 'false') {
    tipo = 'BOOLEAN';
  }

  alert(`El tipo de dato es ${tipo}`);
}


const word_ejercicio_4 = () => {
  let cantidad = alert('Se sumará 1, 2 y 3 usando parámetros rest');
  

  alert(`La suma de todos los números es: ${sumaRest(1, 2, 3)}`);
}
const sumaRest = (...arrNumeros) => {
  let sum = 0;

  for (const num of arrNumeros) {
    console.log(num);
    sum += num;
  }

  return sum;
}


const word_ejercicio_5 = () => {
  alert(`
    se enviará el siguiente arreglo

    [
      true,
      2,
      'consola',
      '*',
      false
    ]
    
    se filtrará los tipo string
  `);

  let arreglo = [
    true,
    2,
    'consola',
    '*',
    false
  ];

  let arrString = arreglo.filter((item) => typeof(item) === 'string');

  alert(`los tipo string son: [${arrString}]`);
}

const word_ejercicio_6 = () => {
  let arrNumeros = obtenerArregleNumeros();

  if (arrNumeros) {
    let max = arrNumeros[0];
    let min = arrNumeros[0];

    arrNumeros.forEach((num) => {
      if (num > max) {
        max = num;
      }

      if (num < min) {
        min = num;
      }
    });

    alert(`El número mayor es ${max} y el menor es ${min}`);
  }
}

const word_ejercicio_7 = () => {
  alert('Se enviarán los siguiente números: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0');

  let caracteres = ['(', ')', ' ', '-'];
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  let formato = 'CNNNCCNNNCNNNN';
  let indCar = 0;
  let indNum = 0;
  let phone = '';

  let splitFormato = formato.split('');

  splitFormato.forEach((f) => {
    if (f === 'C') {
      phone = phone + '' + caracteres[indCar];
      indCar++;
    }

    if (f === 'N') {
      phone = phone + '' + numeros[indNum];
      indNum++;
    }
  });

  alert(`El número de telefono es: ${phone}`);
}

const word_ejercicio_8 = () => {
  alert(`
    se enviara la siguientes matrices:
    [4, 2, 7, 1]
    [20, 70, 40, 90]
    [1, 2, 0]
  `);

  let arrA = [4, 2, 7, 1];
  let arrB = [20, 70, 40, 90];
  let arrC = [1, 2, 0];

  alert(`
    La matriz con los mayores es:
    ${mayorFromArray(arrA, arrB, arrC)}
  `);
}
const mayorFromArray = (arrA, arrB, arrC) => {
  return [Math.max(...arrA), Math.max(...arrB), Math.max(...arrC)];
}

const word_ejercicio_9 = () => {
  let word = prompt('Ingrese una palabra:');
  let char = prompt('Ingrese una letra a buscar en la palabra:');

  getFirstLastIndex(word, char);
}
const getFirstLastIndex = (word, character) => {
  let arrWord = word.split('');
  // buscar en modo no invertido
  let firstIndex = arrWord.findIndex((item) => item === character);

  // invertir para buscar del final hacia inicio
  let arrRevWord = [...arrWord.reverse()];
  // buscar en modo invertido
  let lastIndex = arrRevWord.findIndex((item) => item === character);

  if (firstIndex < 0 && lastIndex < 0) {
    alert(`No existe el caracter "${character}" en "${word}"`);
    return;
  };

  if (firstIndex > -1) {
    // obtener indice como no invertido
    lastIndex = (arrWord.length - 1) - lastIndex;

    if (firstIndex === lastIndex) {
      alert(`
        ${word}
        El primer caracter "${character}" esta en indice ${firstIndex}.
        ( ! ) No existe un segundo o ultimo caracter.
      `);
    } else {
      alert(`
        ${word}
        El primer caracter "${character}" esta en indice ${firstIndex}.
        El ultimo caracter "${character}" esta en indice ${lastIndex}.
      `);
    }
  };
}

const word_ejercicio_10 = () => {
  alert(`
    se enviará el siguiente objeto:
    { a: 1, b: 2 }
  `);

  let json = {
    a: 1,
    b: 2
  };

  displayParValor(json);
}
const displayParValor = (obj) => {
  let arr = [];

  for (const [key, value] of Object.entries(obj)){
    arr.push([key, value]);
  }

  alert(`
    Se obtiene:
    ${arr}
    * Desplegar consola para una mejor visualización del resultado
  `);

  console.log(arr);
}

const word_ejercicio_11 = () => {
  alert(`
    Se enviará los siguiente objetos:
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  `);

  let arrPersonas = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ];

  displaySumaPresupuestos(arrPersonas);
}
const displaySumaPresupuestos = (arrPersonas) => {
  let suma = 0;

  arrPersonas.forEach((item) => {
    suma += item.budget;
  })

  alert(`
    Suma de los presupuestos:
    ${suma}
  `);
}

const word_ejercicio_12 = () => {
  alert(`
    Se enviará los siguiente datos de estudiantes:
      { name: "Steve" },
      { name: "Mike" },
      { name: "John" }
  `);

  let arrEstudiantes = [
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
  ];

  displayNombreEstudiantes(arrEstudiantes);
}
const displayNombreEstudiantes = (arrEstudiantes) => {
  let nombres = [];

  arrEstudiantes.forEach((item) => {
    nombres.push(item.name);
  });

  alert(`
    Nombre de estudiantes:
    [${nombres}]
  `);
}

const word_ejercicio_14 = () => {
  let num = prompt('Ingrese el número límite');

  if (validateNumber(num)) {
    let sumCuadrados = getSumaCuadrados(parseInt(num));

    alert(`
      La suma de todos los cuadrados es:
      ${sumCuadrados}
    `);
  }
}
const getSumaCuadrados = (limite) => {
  let sum = 1;

  for (let j = 2; j <= limite; j++) {
    sum += Math.pow(j, 2);
  }

  return sum;
}

const word_ejercicio_15 = () => {
  let num = prompt('Que cantidad de números quiere ingresar?');

  if (validateNumber(num)) {
    let numeros = [];
    num = parseInt(num);

    for (let j = 0; j < num; j++) {
      let n = prompt(`Ingrese el ${j + 1} número:`);
      if (validateNumber(n)) {
        numeros.push(parseFloat(n));
      } else {
        return;
      }
    }

    alert(`
      Los números multiplicados por total ingresados es:
      ${multiplyByLength(numeros)}
    `);
  }
}
const multiplyByLength = (arrNumeros) => {
  let mNumeros = [];

  arrNumeros.forEach((item) => {
    mNumeros.push(item * arrNumeros.length);
  })

  return mNumeros;
}

const word_ejercicio_16 = () => {
  let num = prompt('Ingrese un número mayor o igual a 0:');

  if (validateNumber(num)) {
    num = parseInt(num);

    if (num >= 0) {
      alert(`
        la secuencia es:
        [${getMinorNumbers(num)}]
      `);
    } else {
      alert('( ! ) Debe ser un numero positivo');
    }
  }
}
const getMinorNumbers = (number) => {
  let arrMinorNumbers = [];
  
  for (let j = number; j >= 0; j--) {
    arrMinorNumbers.push(j);
  }

  return arrMinorNumbers;
}

const word_ejercicio_17 = () => {
  alert(`
    Se enviará la siguiente matriz:
    [10, 4, 1, 4, -10, -50, 32, 21]
  `);

  let arrNums = [10, 4, 1, 4, -10, -50, 32, 21];

  alert(`
    La diferencia es:
    ${diffMaxMin(arrNums)}
  `);
}
const diffMaxMin = (arrNumbers) => {
  return Math.max(...arrNumbers) - Math.min(...arrNumbers);
}

const word_ejercicio_18 = () => {
  alert(`
    Se enviará la siguiente matriz:
    [1, 2, 3, "x", "y", 10]
  `);

  let arrValues = [1, 2, 3, "x", "y", 10];

  alert(`
    La matriz sin valores tipo string es:
    ${filterStrings(arrValues)}
  `);
}
const filterStrings = (arrValues) => {
  return arrValues.filter((item) => typeof(item) !== 'string');
}

const word_ejercicio_19 = () => {
  let caracter = prompt('Ingrese un caracter');
  let cont = prompt('Ingrese la cantidad de veces a repetir');

  if (validateNumber(cont)) {
    cont = parseInt(cont);

    alert(`
      El arreglo de elementos será:
      ${repetir(caracter, cont)}
    `)
  }
}
const repetir = (elemento, cantidad) => {
  let arrElementos = [];

  for (let j = 0; j < cantidad; j++) {
    arrElementos.push(elemento);
  }

  return arrElementos;
}

const word_ejercicio_20 = () => {
  let frase = prompt('Ingrese una frase');
  let caracter = prompt('Ingrese un caracter de reemplazo');

  alert(`
    La nueva frase es:
    ${frase.vReplace(frase, caracter)}
  `);
}
String.prototype.vReplace = (frase, caracter) => {
  const regex = /(a|e|i|o|u|A|E|I|O|U)/gi;

  return frase.replaceAll(regex, caracter);
}

const word_ejercicio_21 = () => {
  let frase = prompt('Ingrese una frase que contenga la palabra nemo');

  alert(`
    ${frase}
    "nemo" se encuentra en:
    ${findNemo(frase)}
  `);
}
const findNemo = (frase) => {
  let regex = /nemo/g;

  return frase.search(regex);
}

const word_ejercicio_22 = () => {
  let frase = prompt('Ingrese una palabra en minúscula');

  alert(`
    La palabra con la 1era letra en mayúscula es:
    ${firstMayus(frase)}
  `);
}
const firstMayus = (frase) => {
  let splitFrase = frase.split('');
  let first = (splitFrase[0]).toUpperCase();
  
  splitFrase[0] = first;

  return splitFrase.join('');
}