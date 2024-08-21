class reto01 {
  ejercicio01(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      alert("Por favor, ingresa números válidos.");
      return;
    }
    const resultado = num1 + num2;
    alert("La suma es: " + resultado);
  }
  hidePrompt01() {
    document.getElementById("customPrompt01").style.display = "none";
  }
  showPrompt01() {
    document.getElementById("customPrompt01").style.display = "flex";
  }
  //Resolucion Ej02
  ejercicio02(numDat1, numDat2) {
    if (isNaN(numDat1) || isNaN(numDat2)) {
      alert("Por favor ingresar números válidos.");
      return;
    }
    let resultado = 1;
    for (let i = 1; i <= numDat2; i++) {
      resultado *= numDat1;
    }
    alert(
      "El resultado de la potencia de " +
        numDat1 +
        " al " +
        numDat2 +
        " es: " +
        resultado
    );
  }
  hidePrompt02() {
    document.getElementById("customPrompt02").style.display = "none";
  }
  showPrompt02() {
    document.getElementById("customPrompt02").style.display = "flex";
  }
  //Resolucion Ej03
  ejercicio03(num3Dat1, num3Dat2, num3Dat3) {
    if (isNaN(num3Dat1) || isNaN(num3Dat2) || isNaN(num3Dat3)) {
      alert("Por favor ingresar números válidos.");
      return;
    }
    let resultado1 = 1;
    let resultado2 = 1;
    let resultado3 = 1;
    for (let i = 1; i <= 3; i++) {
      resultado1 *= num3Dat1;
      resultado2 *= num3Dat2;
      resultado3 *= num3Dat3;
    }
    const sumaTotal = resultado1 + resultado2 + resultado3;
    alert("El resultado de la suma de los cubos es: " + sumaTotal);
  }
  hidePrompt03() {
    document.getElementById("customPrompt03").style.display = "none";
  }
  showPrompt03() {
    document.getElementById("customPrompt03").style.display = "flex";
  }
  //Resolucion Ej04
  ejercicio04(num4Dat1, num4Dat2) {
    if (isNaN(num4Dat1) || isNaN(num4Dat2)) {
      alert("Por favor ingresar números válidos.");
      return;
    }
    const areaTotal = (num4Dat1 * num4Dat2) / 2;
    alert("El area calculado del triangulo es: " + areaTotal);
  }
  hidePrompt04() {
    document.getElementById("customPrompt04").style.display = "none";
  }
  showPrompt04() {
    document.getElementById("customPrompt04").style.display = "flex";
  }
  //Resolucion Ej05
  ejercicio05(numDat1, numDat2, operador) {
    if (isNaN(numDat1) || isNaN(numDat2)) {
      alert("Por favor ingresar números válidos.");
      return;
    }
    let resultado = 0;
    switch (operador) {
      case "+":
        resultado = numDat1 + numDat2;
        break;
      case "-":
        resultado = numDat1 - numDat2;
        break;
      case "x":
      case "X":
        resultado = numDat1 * numDat2;
        break;
      case "%":
        if (numDat2 === 0) {
          alert("No se puede dividir por cero.");
        } else {
          resultado = numDat1 % numDat2;
        }
        break;
      default:
        alert("Operador no válido.");
    }
    if (typeof resultado !== "undefined") {
      alert("El resultado de la operación " + operador + " es: " + resultado);
    } else {
      throw new Error("Operador válido.");
    }
  }

  hidePrompt05() {
    document.getElementById("customPrompt05").style.display = "none";
  }
  showPrompt05() {
    document.getElementById("customPrompt05").style.display = "flex";
  }
}

const reto = new reto01();

  //GetValues Ej01
document.getElementById("btnAction01").addEventListener("click", () => {
  const num1 = parseInt(document.getElementById("userInput1").value.trim());
  const num2 = parseInt(document.getElementById("userInput2").value.trim());
  reto.ejercicio01(num1, num2);
  if (
    document.getElementById("userInput1").value.trim() !== "" &&
    document.getElementById("userInput2").value.trim() !== ""
  ) {
    reto.hidePrompt01();
    document.getElementById("userInput1").value = "";
    document.getElementById("userInput2").value = "";
  }
});
  //GetValues Ej02
document.getElementById("btnAction02").addEventListener("click", () => {
  const numDat1 = parseInt(document.getElementById("user2Input1").value.trim());
  const numDat2 = parseInt(document.getElementById("user2Input2").value.trim());
  reto.ejercicio02(numDat1, numDat2);
  if (
    document.getElementById("user2Input1").value.trim() !== "" &&
    document.getElementById("user2Input2").value.trim() !== ""
  ) {
    reto.hidePrompt02();
    document.getElementById("user2Input1").value = "";
    document.getElementById("user2Input2").value = "";
  }
});
  //GetValues Ej03
  document.getElementById("btnAction03").addEventListener("click", () => {
    const num3Dat1 = parseInt(document.getElementById("user3Input1").value.trim());
    const num3Dat2 = parseInt(document.getElementById("user3Input2").value.trim());
    const num3Dat3 = parseInt(document.getElementById("user3Input3").value.trim());
    reto.ejercicio03(num3Dat1, num3Dat2, num3Dat3);
    if (
      document.getElementById("user3Input1").value.trim() !== "" &&
      document.getElementById("user3Input2").value.trim() !== "" &&
      document.getElementById("user3Input3").value.trim() !== ""
    ) {
      reto.hidePrompt03();
      document.getElementById("user3Input1").value = "";
      document.getElementById("user3Input2").value = "";
      document.getElementById("user3Input3").value = "";
    }
  });
 //GetValues Ej04
 document.getElementById("btnAction04").addEventListener("click", () => {
  const num4Dat1 = parseInt(document.getElementById("user4Input1").value.trim());
  const num4Dat2 = parseInt(document.getElementById("user4Input2").value.trim());
  reto.ejercicio04(num4Dat1, num4Dat2);
  if (
    document.getElementById("user4Input1").value.trim() !== "" &&
    document.getElementById("user4Input2").value.trim() !== ""
  ) {
    reto.hidePrompt04();
    document.getElementById("user4Input1").value = "";
    document.getElementById("user4Input2").value = "";
  }
});
//GetValues Ej05
document.getElementById("btnAction05").addEventListener("click", () => {
  const numDat1 = parseInt(document.getElementById("user5Input1").value.trim());
  const numDat2 = parseInt(document.getElementById("user5Input2").value.trim());
  const operador = document.getElementById("user5Input3").value.trim();
  reto.ejercicio05(numDat1, numDat2, operador);
  if (
    document.getElementById("user5Input1").value.trim() !== "" &&
    document.getElementById("user5Input2").value.trim() !== "" &&
    document.getElementById("user5Input3").value.trim() !== ""
  ) {
    reto.hidePrompt05();
    document.getElementById("user5Input1").value = "";
    document.getElementById("user5Input2").value = "";
    document.getElementById("user5Input3").value = "";
  }
});

 

class reto02 {
  ejercicio01 = (nombre, apellido, edad) => {
    return `Hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`;
  };

  hidePrompt01() {
    document.getElementById("custom2Prompt01").style.display = "none";
  }
  showPrompt01() {
    document.getElementById("custom2Prompt01").style.display = "flex";
  }

  ejercicio02(num3Dat1, num3Dat2, num3Dat3) {
    if (isNaN(num3Dat1) || isNaN(num3Dat2) || isNaN(num3Dat3)) {
      alert("Por favor ingresar números válidos.");
      return;
    }
    let resultado1 = 1;
    let resultado2 = 1;
    let resultado3 = 1;
    for (let i = 1; i <= 3; i++) {
      resultado1 *= num3Dat1;
      resultado2 *= num3Dat2;
      resultado3 *= num3Dat3;
    }
    const sumaTotal = resultado1 + resultado2 + resultado3;
    alert("El resultado de la suma de los cubos es: " + sumaTotal);
  }

  hidePrompt02() {
    document.getElementById("custom2Prompt02").style.display = "none";
  }
  showPrompt02() {
    document.getElementById("custom2Prompt02").style.display = "flex";
  }

  ejercicio03(valor) {
    const valorString = valor.toString();
    if (!isNaN(valor) && valorString !== "") {
      return "Número";
    } else if (
      valorString.toLowerCase() === "true" ||
      valorString.toLowerCase() === "false"
    ) {
      return "Booleano";
    } else if (
      valorString.charAt(0) === '"' &&
      valorString.charAt(valorString.length - 1) === '"'
    ) {
      return "Cadena";
    } else if (valor instanceof Date) {
      return "Fecha";
    } else if (Array.isArray(valor)) {
      return "Arreglo";
    } else if (valor === null) {
      return "Null";
    } else if (valor === undefined) {
      return "Undefined";
    } else {
      return "String";
    }
  }

  hidePrompt03() {
    document.getElementById("custom2Prompt03").style.display = "none";
  }
  showPrompt03() {
    document.getElementById("custom2Prompt03").style.display = "flex";
  }

  ejercicio04(...numeros) {
    const resultado = numeros.reduce((total, numero) => total + numero, 0);
    return resultado;
  }

  hidePrompt04() {
    document.getElementById("custom2Prompt04").style.display = "none";
  }
  showPrompt04() {
    document.getElementById("custom2Prompt04").style.display = "flex";
  }

  ejercicio05(array) {
    const strings = array.filter((elemento) => typeof elemento === "string");
    return strings;
  }

  hidePrompt05() {
    document.getElementById("custom2Prompt05").style.display = "none";
  }
  showPrompt05() {
    document.getElementById("custom2Prompt05").style.display = "flex";
  }

  ejercicio06(numeros) {
    const minimo = Math.min(...numeros);
    const maximo = Math.max(...numeros);
    return [minimo, maximo];
  }

  hidePrompt06() {
    document.getElementById("custom2Prompt06").style.display = "none";
  }
  showPrompt06() {
    document.getElementById("custom2Prompt06").style.display = "flex";
  }

  ejercicio07(numbers) {
    const areaCode = numbers.slice(0, 3).join("");
    const firstPart = numbers.slice(3, 6).join("");
    const lastPart = numbers.slice(6).join("");
    return `(${areaCode}) ${firstPart}-${lastPart}`;
  }

  hidePrompt07() {
    document.getElementById("custom2Prompt07").style.display = "none";
  }
  showPrompt07() {
    document.getElementById("custom2Prompt07").style.display = "flex";
  }

  ejercicio08(matrizDeMatriz) {
    if (
      !Array.isArray(matrizDeMatriz) ||
      !matrizDeMatriz.every((subMatrix) => Array.isArray(subMatrix))
    ) {
      alert(
        "Dato invalido por favor ingresar los valores correctos para la matriz."
      );
      return;
    }
    if (typeof matrizDeMatriz === "string") {
      matrizDeMatriz = matrizDeMatriz
        .split(",")
        .map((row) => row.trim().split(" ").map(Number));
    }
    return matrizDeMatriz.map((subMatrix) => Math.max(...subMatrix));
  }

  hidePrompt08() {
    document.getElementById("custom2Prompt08").style.display = "none";
  }
  showPrompt08() {
    document.getElementById("custom2Prompt08").style.display = "flex";
  }

  ejercicio09(cadenaConCaracter) {
    const [palabra, caracter] = cadenaConCaracter.split(",");
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);
    return [primerIndice, ultimoIndice];
  }
  hidePrompt09() {
    document.getElementById("custom2Prompt09").style.display = "none";
  }
  showPrompt09() {
    document.getElementById("custom2Prompt09").style.display = "flex";
  }

  ejercicio10(obj) {
    return Object.entries(obj);
  }
  hidePrompt10() {
    document.getElementById("custom2Prompt10").style.display = "none";
  }
  showPrompt10() {
    document.getElementById("custom2Prompt10").style.display = "flex";
  }

  ejercicio11(personas) {
    return personas.reduce((total, persona) => total + persona.budget, 0);
  }
  hidePrompt11() {
    document.getElementById("custom2Prompt11").style.display = "none";
  }
  showPrompt11() {
    document.getElementById("custom2Prompt11").style.display = "flex";
  }

  ejercicio12(personas) {
    const nombres = personas.map((persona) => persona.name);
    return nombres;
  }
  hidePrompt12() {
    document.getElementById("custom2Prompt12").style.display = "none";
  }
  showPrompt12() {
    document.getElementById("custom2Prompt12").style.display = "flex";
  }

  ejercicio13(obj) {
    return Object.entries(obj);
  }

  hidePrompt13() {
    document.getElementById("custom2Prompt13").style.display = "none";
  }
  showPrompt13() {
    document.getElementById("custom2Prompt13").style.display = "flex";
  }

  ejercicio14(n) {
    if (n <= 0 || isNaN(n)) {
      return "Por favor ingresar un número entero positivo válido.";
    }
    let resultado = (n * (n + 1) * (2 * n + 1)) / 6;
    return resultado;
  }

  hidePrompt14() {
    document.getElementById("custom2Prompt14").style.display = "none";
  }
  showPrompt14() {
    document.getElementById("custom2Prompt14").style.display = "flex";
  }

  ejercicio15(numeros) {
    if (!Array.isArray(numeros) || numeros.some(isNaN)) {
      throw new Error(
        "Dato invalido, por favor ingresar una matriz de números."
      );
    }
    const longitud = numeros.length;
    return numeros.map((numero) => numero * longitud);
  }
  hidePrompt15() {
    document.getElementById("custom2Prompt15").style.display = "none";
  }
  showPrompt15() {
    document.getElementById("custom2Prompt15").style.display = "flex";
  }

  ejercicio16(numeroInicial) {
    if (isNaN(numeroInicial)) {
      alert("Por favor, ingrese un número válido.");
      return;
    }
    const resultado = [];
    for (let i = numeroInicial; i >= 0; i--) {
      resultado.push(i);
    }
    return JSON.stringify(resultado);
  }
  hidePrompt16() {
    document.getElementById("custom2Prompt16").style.display = "none";
  }
  showPrompt16() {
    document.getElementById("custom2Prompt16").style.display = "flex";
  }

  ejercicio17(numeros) {
    if (!Array.isArray(numeros) || numeros.some(isNaN)) {
      throw new Error(
        "Dato invalido, por favor ingresar una matriz de números."
      );
    }
    const numeroMayor = Math.max(...numeros);
    const numeroMenor = Math.min(...numeros);
    return numeroMayor - numeroMenor;
  }
  hidePrompt17() {
    document.getElementById("custom2Prompt17").style.display = "none";
  }
  showPrompt17() {
    document.getElementById("custom2Prompt17").style.display = "flex";
  }

  ejercicio18(matriz) {
    const enteros = matriz.filter((elemento) => Number.isInteger(elemento));
    return JSON.stringify(enteros);
  }
  hidePrompt18() {
    document.getElementById("custom2Prompt18").style.display = "none";
  }
  showPrompt18() {
    document.getElementById("custom2Prompt18").style.display = "flex";
  }

  ejercicio19(elemento, veces) {
    return Array(veces).fill(Number(elemento));
  }
  hidePrompt19() {
    document.getElementById("custom2Prompt19").style.display = "none";
  }
  showPrompt19() {
    document.getElementById("custom2Prompt19").style.display = "flex";
  }

  hidePrompt20() {
    document.getElementById("custom2Prompt20").style.display = "none";
  }
  showPrompt20() {
    document.getElementById("custom2Prompt20").style.display = "flex";
  }

  ejercicio21(cadena) {
    const palabras = cadena.split(" ");
    const indiceNemo = palabras.indexOf("Nemo");
    if (indiceNemo !== -1) {
      return alert("¡Encontré a Nemo en la posición " + (indiceNemo + 1) + "!");
    } else {
      return alert("Nemo no fue encontrado.");
    }
  }
  hidePrompt21() {
    document.getElementById("custom2Prompt21").style.display = "none";
  }
  showPrompt21() {
    document.getElementById("custom2Prompt21").style.display = "flex";
  }

  ejercicio22(str) {
    return str
      .split(" ")
      .map((word) => {
        return word.slice(0, -1) + word.slice(-1).toUpperCase();
      })
      .join(" ");
  }
  hidePrompt22() {
    document.getElementById("custom2Prompt22").style.display = "none";
  }
  showPrompt22() {
    document.getElementById("custom2Prompt22").style.display = "flex";
  }
}


String.prototype.vreplace = function(newVocal) {
  return this.replace(/[aeiou]/gi, newVocal);
};

const tarea = new reto02();

  //GetValues Ej01
  document.getElementById("btn2Action01").addEventListener("click", () => {
    const nombre = document.getElementById("tareaInput1").value;
    const apellido = document.getElementById("tareaInput2").value;
    const edad = document.getElementById("tareaInput3").value;
    const ejercicio01 = tarea.ejercicio01(nombre,apellido,edad);
    alert(ejercicio01);
    if (
      document.getElementById("tareaInput1").value.trim() !== "" &&
      document.getElementById("tareaInput2").value.trim() !== "" &&
      document.getElementById("tareaInput3").value.trim() !== ""
    ) {
      tarea.hidePrompt01();
      document.getElementById("tareaInput1").value = "";
      document.getElementById("tareaInput2").value = "";
      document.getElementById("tareaInput3").value = "";
    }
  });
//GetValues Ej02
  document.getElementById("btn2Action02").addEventListener("click", () => {
    const num3Dat1 = parseInt(document.getElementById("tarea2Input1").value.trim());
    const num3Dat2 = parseInt(document.getElementById("tarea2Input2").value.trim());
    const num3Dat3 = parseInt(document.getElementById("tarea2Input3").value.trim());
    tarea.ejercicio02(num3Dat1, num3Dat2, num3Dat3);
    if (
      document.getElementById("tarea2Input1").value.trim() !== "" &&
      document.getElementById("tarea2Input2").value.trim() !== "" &&
      document.getElementById("tarea2Input3").value.trim() !== ""
    ) {
      tarea.hidePrompt02();
      document.getElementById("tarea2Input1").value = "";
      document.getElementById("tarea2Input2").value = "";
      document.getElementById("tarea2Input3").value = "";
    }
  });
 
  document.getElementById("btn2Action03").addEventListener("click", () => {
    const valor = document.getElementById("tarea3Input1").value.trim();
    tarea.ejercicio03(valor);
    alert(tarea.ejercicio03(valor));
    if (
      document.getElementById("tarea3Input1").value.trim() !== "" 
      ) {
      tarea.hidePrompt03();
      document.getElementById("tarea3Input1").value = "";
    }
  });

  document.getElementById("btn2Action04").addEventListener("click", () => {
    const restData = document.getElementById("tarea4Input1");
    const valores =  restData.value.split(',').map(Number);
    const resultado = tarea.ejercicio04(...valores); 
    alert("La suma es: "+ resultado);
    if (
      document.getElementById("tarea4Input1").value.trim() !== "" 
      ) {
      tarea.hidePrompt04();
      document.getElementById("tarea4Input1").value = "";
    }
  });

  document.getElementById("btn2Action05").addEventListener("click", () => {
    const arrayData = document.getElementById("tarea5Input1");
    const valores =  arrayData.value.split(',');
    const valoresConvertidos = valores.map(valor => {
    const numero = Number(valor);
    return isNaN(numero) ? valor : numero;
    });

    const stringsFiltrados = tarea.ejercicio05(valoresConvertidos);
    alert("Los strings filtrados son: "+ stringsFiltrados);
    if (
      document.getElementById("tarea5Input1").value.trim() !== "" 
      ) {
      tarea.hidePrompt05();
      document.getElementById("tarea5Input1").value = "";
    }
  });

  document.getElementById("btn2Action06").addEventListener("click", () => {
    const arrayData = document.getElementById("tarea6Input1");
    const valoresString = arrayData.value.split(',');
    const valoresNumericos = valoresString.map(valor => Number(valor));
    const resultado = tarea.ejercicio06(valoresNumericos);
 
    alert("Los valores mínimo y máximo son: "+ resultado);
    if (
      document.getElementById("tarea6Input1").value.trim() !== "" 
      ) {
      tarea.hidePrompt06();
      document.getElementById("tarea6Input1").value = "";
    }
  });

  document.getElementById("btn2Action07").addEventListener("click", () => {
    const inputData = document.getElementById("tarea7Input1");
    const valoresString = inputData.value.split(',');
    const valoresNumericos = valoresString.map(Number);
    if (valoresNumericos.length !== 10) {
      alert('Por favor se debe ingresar exactamente 10 dígitos.');
      return;
    }
    const numeroFormateado = tarea.ejercicio07(valoresNumericos)
 
    alert("Número formateado: "+ numeroFormateado);
    if (
      document.getElementById("tarea7Input1").value.trim() !== "" 
      ) {
      tarea.hidePrompt07();
      document.getElementById("tarea7Input1").value = "";
    }
  });

  document.getElementById("btn2Action08").addEventListener("click", () => {
    const inputData = document.getElementById("tarea8Input1");
    const matrizString = inputData.value;
    try {
      const matrizDeMatrices = JSON.parse(matrizString);
      const resultado = tarea.ejercicio08(matrizDeMatrices);
      alert("Los números mayores del array son: " + resultado);
      if (document.getElementById("tarea8Input1").value.trim() !== "") {
        tarea.hidePrompt08();
        document.getElementById("tarea8Input1").value = "";
      }
    } catch (error) {
      alert(
        "Error al analizar la entrada, ingresar una matriz válida en formato JSON."
      );
    }
  });

  document.getElementById("btn2Action09").addEventListener("click", () => {
    const inputData = document.getElementById("tarea9Input1").value;
    try {
      const [primerIndice, ultimoIndice] = tarea.ejercicio09(inputData);
      alert(
        "El carácter aparece por primera vez en el índice es " +
          primerIndice +
          "y por última vez en el índice" +
          ultimoIndice
      );
      if (document.getElementById("tarea9Input1").value.trim() !== "") {
        tarea.hidePrompt09();
        document.getElementById("tarea9Input1").value = "";
      }
    } catch (error) {
      alert("El carácter no se encontró en la palabra.");
    }
  });

  document.getElementById("btn2Action10").addEventListener("click", () => {
    const inputData = document.getElementById("tarea10Input1");
    const objetoString = inputData.value;
    try {
      const objeto = JSON.parse(objetoString);
      const resultado = tarea.ejercicio10(objeto);
      alert("Array de pares clave-valor: " + JSON.stringify(resultado));
    } catch (error) {
      alert("Error al analizar el objeto: " + error);
    }
    if (inputData.value.trim() !== "") {
      tarea.hidePrompt10();
      inputData.value = "";
    }
  });

  document.getElementById("btn2Action11").addEventListener("click", () => {
    const inputData = document.getElementById("tarea11Input1").value;
    try {
      const cleanedData = inputData.trim();
      const personas = JSON.parse(cleanedData);
      const sumaTotal = tarea.ejercicio11(personas);
      alert("La suma total de los presupuestos es: " + sumaTotal);
    } catch (error) {
      alert("Error al analizar el input:", error);
    }
    if (inputData.value.trim() !== "") {
      tarea.hidePrompt11();
      inputData.value = "";
    }
  });

  document.getElementById("btn2Action12").addEventListener("click", () => {
    const inputData = document.getElementById("tarea12Input1").value;
    try {
      const cleanedData = inputData.trim();
      const personas = JSON.parse(cleanedData);
      const nombres = tarea.ejercicio12(personas);
      alert("La nueva matriz de nombres es: " + nombres);
      if (document.getElementById("tarea12Input1").value.trim() !== "") {
        tarea.hidePrompt12();
        document.getElementById("tarea12Input1").value = "";
      }
    } catch (error) {
      alert("Error al analizar el input:", error);
    }
  });

  document.getElementById("btn2Action13").addEventListener("click", () => {
    const inputData = document.getElementById("tarea13Input1");
   const objetoString = inputData.value;
   try {
    const objeto = JSON.parse(objetoString);
      const matriz = tarea.ejercicio13(objeto);
      alert("La nueva matriz de pares clave-valor es: " + JSON.stringify(matriz));
      if (document.getElementById("tarea13Input1").value.trim() !== "") {
        tarea.hidePrompt13();
        document.getElementById("tarea13Input1").value = "";
      }
    } catch (error) {
      alert("Error al analizar el input:", error);
    }
  });

  document.getElementById("btn2Action14").addEventListener("click", () => {
    const inputData = document.getElementById("tarea14Input1").value;
    const resultado = tarea.ejercicio14(parseInt(inputData));
    alert(
      "La suma de los cuadrados de los números hasta " +
        inputData +
        " es: " +
        resultado
    );
    if (document.getElementById("tarea14Input1").value.trim() !== "") {
      tarea.hidePrompt14();
      document.getElementById("tarea14Input1").value = "";
    }
  });

  document.getElementById("btn2Action15").addEventListener("click", () => {
    const inputData = document.getElementById("tarea15Input1").value;
    try {
      const numeros = JSON.parse(inputData);
      const resultado = tarea.ejercicio15(numeros);
      alert("La nueva matriz es: " + resultado);
      if (document.getElementById("tarea15Input1").value.trim() !== "") {
        tarea.hidePrompt15();
        document.getElementById("tarea15Input1").value = "";
      }
    } catch (error) {
      alert("Error al analizar el input:", error);
    }
  });

  document.getElementById("btn2Action16").addEventListener("click", () => {
    const inputData = parseInt(document.getElementById("tarea16Input1").value);
    const resultado = tarea.ejercicio16(inputData);
    alert("La cuenta regresiva es: " + resultado);
    if (document.getElementById("tarea16Input1").value.trim() !== "") {
      tarea.hidePrompt16();
      document.getElementById("tarea16Input1").value = "";
    }
  });

  document.getElementById("btn2Action17").addEventListener("click", () => {
    const inputData = document.getElementById("tarea17Input1").value;
    try {
      const numeros = JSON.parse(inputData);
      const resultado = tarea.ejercicio17(numeros);
      alert("La diferencia entre el número más grande y el más pequeño es: " + resultado);
      if (document.getElementById("tarea17Input1").value.trim() !== "") {
        tarea.hidePrompt17();
        document.getElementById("tarea17Input1").value = "";
      }
    } catch (error) {
      alert("Error al analizar el input:" +error.message);
    }
  });

  document.getElementById("btn2Action18").addEventListener("click", () => {
    const inputData = document.getElementById("tarea18Input1").value;
    try {
      const numeros = JSON.parse(inputData);
      const resultado = tarea.ejercicio18(numeros);
      alert("La nueva matriz con datos enteros son: " + resultado);
      if (document.getElementById("tarea18Input1").value.trim() !== "") {
        tarea.hidePrompt18();
        document.getElementById("tarea18Input1").value = "";
      }
    } catch (error) {
      alert("Error al analizar el input:", error);
    }
  });

  document.getElementById("btn2Action19").addEventListener("click", () => {
    const inputData = document.getElementById("tarea19Input1").value;
    const [elemento, veces] = inputData.split(",");
    try {
      const resultado = tarea.ejercicio19(parseInt(elemento), parseInt(veces));
      alert("La nueva matriz con datos enteros son: " + JSON.stringify(resultado));
      if (document.getElementById("tarea19Input1").value.trim() !== "") {
        tarea.hidePrompt19();
        document.getElementById("tarea19Input1").value = "";
      }
    } catch (error) {
      alert("Error al analizar el input:", error);
    }
  });

  document.getElementById("btn2Action20").addEventListener("click", () => {
    const inputData = document.getElementById("tarea20Input1").value;
    try {
       const resultado = eval(inputData);
       alert("La nueva cadena es: " + resultado);
      if (document.getElementById("tarea20Input1").value.trim() !== "") {
        tarea.hidePrompt20();
        document.getElementById("tarea20Input1").value = "";
      }
    } catch (error) {
      alert("Error al analizar el input:", error);
    }
  });

  document.getElementById("btn2Action21").addEventListener("click", () => {
    const inputData = document.getElementById("tarea21Input1").value;
    try {
      const resultado = tarea.ejercicio21(inputData);
      if (document.getElementById("tarea21Input1").value.trim() !== "") {
        tarea.hidePrompt21();
        document.getElementById("tarea21Input1").value = "";
      }
    } catch (error) {
      alert("Error al analizar el input:", error);
    }
  });

  document.getElementById("btn2Action22").addEventListener("click", () => {
    const inputData = document.getElementById("tarea22Input1").value;
    try {
      const resultado = tarea.ejercicio22(inputData);
      alert("La nueva cadena es: " + resultado);
      if (document.getElementById("tarea22Input1").value.trim() !== "") {
        tarea.hidePrompt22();
        document.getElementById("tarea22Input1").value = "";
      }
    } catch (error) {
      alert("Error al analizar el input:", error);
    }
  });