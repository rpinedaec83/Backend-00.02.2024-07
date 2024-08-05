function ejercicio1() {
  console.log("Ejercicio 1");
  let strNum = prompt("Digite un numero");
  let intNum = parseInt(strNum);

  if (!isNaN(intNum)) {
    if (intNum > 99 && intNum < 1000) {
      alert("Tiene 3 digitos");
    } else {
      alert("No tiene 3 digitos");
    }
  } else {
    alert("No es un numero");
  }
}

function ejercicio2() {
  console.log("Ejercicio 2");
  let strNum = prompt("Digite un numero");
  let intNum = parseInt(strNum);

  if (!isNaN(intNum)) {
    if (intNum < 0) {
      alert("El numero es negativo");
    } else {
      alert("El numero es positivo");
    }
  } else {
    alert("No es un numero");
  }
}

function ejercicio3() {
  console.log("Ejercicio 3");
  let strNum = prompt("Digite un numero");
  let intNum = parseInt(strNum);

  if (!isNaN(intNum)) {
    if ((intNum - 4) % 10 == 0) {
      alert("El numero termina en 4");
    } else {
      alert("El numero no termina en 4");
    }
  } else {
    alert("No es un numero");
  }
}

function ejercicio4() {
  console.log("Ejercicio 4");
  let strNum1 = prompt("Digite el primer numero");
  let num1 = parseInt(strNum1);
  let strNum2 = prompt("Digite el segundo numero");
  let num2 = parseInt(strNum2);
  let strNum3 = prompt("Digite el tercer numero");
  let num3 = parseInt(strNum3);

  if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    var menor = 0;
    var medio = 0;
    var mayor = 0;
    if (num1 < num2 && num1 < num3) {
      menor = num1;
      if (num2 < num3) {
        medio = num2;
        mayor = num3;
      } else {
        medio = num3;
        mayor = num2;
      }
    } else if (num2 < num1 && num2 < num3) {
      menor = num2;
      if (num1 < num3) {
        medio = num1;
        mayor = num3;
      } else {
        medio = num3;
        mayor = num1;
      }
    } else if (num3 < num1 && num3 < num2) {
      menor = num3;
      if (num1 < num2) {
        medio = num1;
        mayor = num2;
      } else {
        medio = num2;
        mayor = num1;
      }
    }
    alert("De menor a mayor: " + menor + "->" + medio + "->" + mayor);
  } else {
    alert("Alguno de los valores ingresados NO es un numero");
  }
}

function ejercicio5() {
  console.log("Ejercicio 5");
  let strNum = prompt("Cuantos zapatos quiere comprar?");
  let zapatos = parseInt(strNum);

  if (!isNaN(zapatos)) {
    let precioTotal = zapatos * 80;
    let descuento = "0%";
    if (zapatos >= 10 && zapatos < 20) {
      precioTotal = precioTotal * 0.9;
      descuento = "10%";
    } else if (zapatos >= 20 && zapatos < 30) {
      precioTotal = precioTotal * 0.8;
      descuento = "20%";
    } else if (zapatos >= 30) {
      precioTotal = precioTotal * 0.6;
      descuento = "40%";
    }
    alert("El descuento es de: " + descuento);
    alert("El precio final es de: $" + precioTotal);
  } else {
    alert("No es un numero");
  }
}

function ejercicio6() {
  console.log("Ejercicio 6");
  let strNum = prompt("Cuantas horas trabajara esta semana?");
  let horas = parseInt(strNum);
  let pago = 0;

  if (!isNaN(horas)) {
    if (horas > 40) {
      pago = 40 * 20 + (horas - 40) * 25;
    } else {
      pago = horas * 20;
    }
    alert("Su sueldo de esta semana sera: $" + pago);
  } else {
    alert("No es un numero");
  }
}

function ejercicio7() {
  console.log("Ejercicio 7");
  let tipo = prompt("Ingrese el tipo de cliente (A,B,C): ");
  let descuento = 0;

  if (tipo == "A") descuento = 10;
  else if (tipo == "B") descuento = 15;
  else if (tipo == "C") descuento = 20;
  if (descuento != 0) {
    alert("Tiene un descuento de " + descuento + "%");
  } else {
    alert("No es un caracter valido");
  }
}

function ejercicio8() {
  console.log("Ejercicio 8");
  let strNum1 = prompt("Digite el primer numero");
  let num1 = parseFloat(strNum1);
  let strNum2 = prompt("Digite el segundo numero");
  let num2 = parseFloat(strNum2);
  let strNum3 = prompt("Digite el tercer numero");
  let num3 = parseFloat(strNum3);

  if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    let promedio = (num1 + num2 + num3) / 3;
    let aprueba = "";
    if (promedio >= 10.5) aprueba = "Si aprueba";
    else aprueba = "No aprueba";
    alert("La nota minima para aprobar es 10.5(11)");
    alert("Su promedio es de: " + promedio);
    alert("Usted " + aprueba);
  } else {
    alert("Alguno de los valores ingresados NO es un numero");
  }
}

function ejercicio9() {
  console.log("Ejercicio 9");
  let strNum = prompt("Digite su sueldo");
  let num = parseFloat(strNum);
  let porcentaje = 0;
  let aumento = 0;

  if (!isNaN(num)) {
    if (num >= 2000) {
      porcentaje = 5;
      aumento = num * 0.05;
    } else {
      porcentaje = 10;
      aumento = num * 0.1;
    }
    alert("Le corresponde un aumento de " + porcentaje + "%: $" + aumento);
  } else {
    alert("No es un numero");
  }
}

function ejercicio10() {
  console.log("Ejercicio 10");
  let strNum = prompt("Digite un numero");
  let num = parseFloat(strNum);

  if (!isNaN(num)) {
    if (num % 2 == 0) alert("El numero es par");
    else alert("El numero es impar");
  } else {
    alert("No es un numero");
  }
}

function ejercicio11() {
  console.log("Ejercicio 11");
  let strNum1 = prompt("Digite el primer numero");
  let num1 = parseFloat(strNum1);
  let strNum2 = prompt("Digite el segundo numero");
  let num2 = parseFloat(strNum2);
  let strNum3 = prompt("Digite el tercer numero");
  let num3 = parseFloat(strNum3);

  if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    var mayor = 0;
    if (num1 > num2 && num1 > num3) mayor = num1;
    else if (num2 > num1 && num2 > num3) mayor = num2;
    else if (num3 > num1 && num3 > num2) mayor = num3;
    alert("El numero mayor es: " + mayor);
  } else {
    alert("Alguno de los valores ingresados NO es un numero");
  }
}

function ejercicio12() {
  console.log("Ejercicio 12");
  let strNum1 = prompt("Digite el primer numero");
  let num1 = parseFloat(strNum1);
  let strNum2 = prompt("Digite el segundo numero");
  let num2 = parseFloat(strNum2);

  if (!isNaN(num1) && !isNaN(num2)) {
    var mayor = 0;
    if (num1 > num2) mayor = num1;
    else mayor = num2;
    alert("El numero mayor es: " + mayor);
  } else {
    alert("Alguno de los valores ingresados NO es un numero");
  }
}

function ejercicio13() {
  console.log("Ejercicio 13");
  let letra = prompt("Digite una letra (a-z)");

  if (
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u"
  )
    alert("El caracter SI es una vocal");
  else alert("El caracter NO es una vocal");
}

function ejercicio14() {
  console.log("Ejercicio 14");
  let strNum = prompt("Digite un numero del 1 al 10:");
  let num = parseInt(strNum);
  let contador = 0;

  if (!isNaN(num)) {
    if (num >= 1 && num <= 10) {
      for (let i = 0; i <= num; i++) {
        if (num % i == 0) contador = contador + 1;
      }
      if (contador == 2) alert("El numero SI es primo");
      else alert("El numero NO es primo");
    } else alert("El numero debe estar entre 1 y 10");
  } else {
    alert("No es un numero");
  }
}

function ejercicio15() {
  console.log("Ejercicio 15");
  let strNum1 = prompt("Ingrese los centimetros a convertir: ");
  let cent = parseFloat(strNum1);
  let strNum2 = prompt("Ingrese las libras a convertir: ");
  let lib = parseFloat(strNum2);

  if (!isNaN(cent) && !isNaN(lib)) {
    let pulg = cent / 2.54;
    let kg = lib / 2.205;
    alert(cent + " centimetros son " + pulg + " pulgadas");
    alert(lib + " libras son " + kg + " kilogramos");
  } else {
    alert("Alguno de los valores ingresados NO es un numero");
  }
}

function ejercicio16() {
  console.log("Ejercicio 16");
  let strNum1 = prompt("Ingrese un numero del 1 al 7: ");
  let num = parseInt(strNum1);

  switch (num) {
    case 1:
      alert("El dia correspondiente es Lunes");
      break;
    case 2:
      alert("El dia correspondiente es Martes");
      break;
    case 3:
      alert("El dia correspondiente es Miercoles");
      break;
    case 4:
      alert("El dia correspondiente es Jueves");
      break;
    case 5:
      alert("El dia correspondiente es Viernes");
      break;
    case 6:
      alert("El dia correspondiente es Sabado");
      break;
    case 7:
      alert("El dia correspondiente es Domingo");
      break;
    default:
      alert("El caracter ingresado NO es valido");
      break;
  }
}

function ejercicio17() {
  console.log("Ejercicio 17");
  let strNum1 = prompt("Ingrese la hora 0-23(hh): ");
  let hora = parseInt(strNum1);
  let strNum2 = prompt("Ingrese los minutos 0-59(mm): ");
  let min = parseInt(strNum2);
  let strNum3 = prompt("Ingrese los segundos 0-59(ss): ");
  let seg = parseInt(strNum3);
  let hora2 = 0;
  let min2 = 0;
  let seg2 = 0;

  if (!isNaN(hora) && !isNaN(min) && !isNaN(seg)) {
    if (seg + 1 == 60) {
      seg2 = 0;
      if (min + 1 == 60) {
        min2 = 0;
        if (hora + 1 == 24) hora2 = 0;
        else hora2 = hora + 1;
      } else {
        min2 = min + 1;
        hora2 = hora;
      }
    } else {
      seg2 = seg + 1;
      min2 = min;
      hora2 = hora;
    }
    alert(
      "La hora dentro de un segundo es: " + hora2 + ":" + min2 + ":" + seg2
    );
  } else {
    alert("Alguno de los valores ingresados NO es un numero");
  }
}

function ejercicio18() {
  console.log("Ejercicio 18");
  let strNum1 = prompt("Ingrese la cantidad de CD a vender:");
  let num = parseInt(strNum1);
  let total = 0;

  if (!isNaN(num)) {
    if (num <= 9) total = num * 10;
    else if (num >= 10 && num <= 99) total = num * 8;
    else if (num >= 100 && num <= 499) total = num * 7;
    else if (num >= 500) total = num * 6;
    let ganancia = total * 0.0825;
    alert("El precio total es: " + total);
    alert("La ganacia para el vendedor es: " + ganancia);
  } else {
    alert("El valor ingresado NO es valido");
  }
}

function ejercicio19() {
  console.log("Ejercicio 19");
  let strNum1 = prompt(
    "Ingrese cuantos dias trabajo el empleado en la semana (6 dias max): "
  );
  let dias = parseInt(strNum1);

  if (!isNaN(dias)) {
    if (dias < 0 || dias > 6)
      alert(
        "La cantidad de dias trabajados no es valida. Debe ser un numero entre 0 y 6."
      );
    else {
      let id = prompt(
        "Ingrese los dos digitos numericos del identificador del empleado \n a. Cajero (11): \n b. Servidor (12): \n c. Preparador de mezclas (13): \n d. Mantenimiento (14): "
      );

      let pago = 0;
      switch (id) {
        case "11":
          pago = dias * 56;
          break;
        case "12":
          pago = dias * 64;
          break;
        case "13":
          pago = dias * 80;
          break;
        case "14":
          pago = dias * 48;
          break;
        default:
          alert("Opcion no valida");
          break;
      }
      alert("El pago al empleado es de: " + pago);
    }
  } else {
    alert("El valor ingresado NO es valido");
  }
}

function ejercicio20() {
  console.log("Ejercicio 20");
  let strNum1 = prompt("Digite el primer numero");
  let num1 = parseInt(strNum1);
  let strNum2 = prompt("Digite el segundo numero");
  let num2 = parseInt(strNum2);
  let strNum3 = prompt("Digite el tercer numero");
  let num3 = parseInt(strNum3);
  let strNum4 = prompt("Digite el cuarto numero");
  let num4 = parseInt(strNum4);
  let contadorPar = 0;
  let mayor = 0;
  let cuadrado = 0;
  let media = 0;
  let suma = 0;

  if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3) && !isNaN(num4)) {
    // Cuantos numeros son Pares?
    if (num1 % 2 == 0) contadorPar = contadorPar + 1;
    if (num2 % 2 == 0) contadorPar = contadorPar + 1;
    if (num3 % 2 == 0) {
      contadorPar = contadorPar + 1;
      cuadrado = num2 * num2;
    }
    if (num4 % 2 == 0) contadorPar = contadorPar + 1;
    alert("La cantidad de pares es: " + contadorPar);

    // Cual es el mayor de todos?
    if (num1 >= num2 && num1 >= num3 && num1 >= num4) mayor = num1;
    else if (num2 >= num1 && num2 >= num3 && num2 >= num4) mayor = num2;
    else if (num3 >= num1 && num3 >= num2 && num3 >= num4) mayor = num3;
    else if (num4 >= num1 && num4 >= num2 && num4 >= num3) mayor = num4;
    alert("El mayor de todos es: " + mayor);

    //Si el tercero es par, calcular el cuadrado del segundo.\
    if (cuadrado != 0) alert("El cuadrado del segundo es: " + cuadrado);

    //Si el primero es menor que el cuarto, calcular la media de los 4 n�meros.
    if (num1 < num4) {
      media = (num1 + num2 + num3 + num4) / 4;
      alert("La media de los 4 numeros es: " + media);
    }

    // Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condici�n, calcular la suma de los 4 n�meros.
    if (num2 > num3) {
      if (num3 >= 50 && num3 <= 70) {
        suma = num1 + num2 + num3 + num4;
        alert("La suma de los 4 numeros es: " + suma);
      }
    }
  } else {
    alert("Alguno de los valores ingresados NO es un numero");
  }
}

function ejercicio21() {
  console.log("Ejercicio 21");
  let strNum1 = prompt("Digite un numero");
  let num = parseInt(strNum1);
  let factorial = 1;

  if (!isNaN(num)) {
    if (num != 0) {
      for (let i = 1; i <= num; i++) factorial = factorial * i;
    }
    alert("El factorial de " + num + " es: " + factorial);
  } else {
    alert("El valor ingresado NO es valido");
  }
}

function ejercicio22() {
  console.log("Ejercicio 22");
  let strNum1 = prompt("Digite un numero");
  let num = parseInt(strNum1);
  let suma = 0;

  if (!isNaN(num)) {
    for (let i = 1; i <= num; i++) suma = suma + i;

    alert("La suma de los " + num + " primeros numeros es: " + suma);
  } else {
    alert("El valor ingresado NO es valido");
  }
}

function ejercicio23() {
  console.log("Ejercicio 23");
  let strNum1 = prompt("Digite un numero");
  let num = parseInt(strNum1);
  let suma = 0;

  if (!isNaN(num)) {
    for (let i = 1; i <= num; i++) {
      if (i % 2 != 0) suma = suma + i;
    }
    alert(
      "la suma de los numeros impares menores o iguales a " +
        num +
        " es: " +
        suma
    );
  } else {
    alert("El valor ingresado NO es valido");
  }
}

function ejercicio24() {
  console.log("Ejercicio 24");
  let suma = 0;

  for (let i = 1; i <= 1000; i++) {
    if (i % 2 == 0) suma = suma + i;
  }
  alert("la suma de los numeros pares hasta 1000 es: " + suma);
}

function ejercicio25() {
  console.log("Ejercicio 25");
  let strNum1 = prompt("Digite un numero");
  let num = parseInt(strNum1);

  if (!isNaN(num)) {
    let fact = factorial(num);
    alert("El factorial de " + num + " es: " + fact);
  } else {
    alert("El valor ingresado NO es valido");
  }
}

function factorial(n) {
  if (n == 0 || n == 1) return 1;
  else return n * factorial(n - 1);
}

function ejercicio26() {
  console.log("Ejercicio 26");
  let strNum1 = prompt("Digite el numero dividendo");
  let num1 = parseInt(strNum1);
  let strNum2 = prompt("Digite el numero divisor");
  let num2 = parseInt(strNum2);
  let cociente = 0;
  let resto = num1;

  if (!isNaN(num1) && !isNaN(num2)) {
    for (let i = 1; i <= num1; i = i + num2) {
      if (resto >= num2) {
        resto = resto - num2;
        cociente = cociente + 1;
      }
    }
    alert("El cociente es: " + cociente);
    alert("El resto es: " + resto);
  } else {
    alert("Alguno de los valores ingresados NO es un numero");
  }
}

function ejercicio27() {
  console.log("Ejercicio 27");
  let bandera = true;
  let suma = 0;
  let contador = 0;
  while (bandera) {
    let strNum1 = prompt(
      "Ingrese un numero positivo (si ingresa un numero negativo se termina el programa)"
    );
    let num = parseInt(strNum1);

    if (!isNaN(num)) {
      if (num < 0) bandera = false;
      else {
        suma = suma + num;
        contador = contador + 1;
      }
    } else {
      alert("El valor ingresado NO es valido");
    }
  }
  let prom = suma / contador;
  alert("La media de la lista de " + contador + " numeros positivos: " + prom);
}

function ejercicio28() {
  console.log("Ejercicio 28");
  let n = 100;
  let suma = 0;

  do {
    suma = suma + n;
    n = n - 1;
  } while (n != 0);
  alert("La suma de los primeros cien numeros es: " + suma);
}

function ejercicio29() {
  console.log("Ejercicio 29");
  let n = 100;
  let suma = 0;

  while (n != 0) {
    suma = suma + n;
    n = n - 1;
  }
  alert("La suma de los primeros cien numeros es: " + suma);
}

function ejercicio30() {
  console.log("Ejercicio 30");
  let suma = 0;

  for (let i = 1; i <= 100; i++) {
    suma = suma + i;
  }
  alert("La suma de los primeros cien numeros es: " + suma);
}

function ejercicio31() {
  console.log("Ejercicio 31");
  let sumaPar = 0;
  let sumaImpar = 0;
  let contadorPar = 0;
  let contadorImpar = 0;

  for (let i = 1; i <= 10; i++) {
    let strNum1 = prompt("Ingrese el numero " + i);
    let num = parseInt(strNum1);
    if (!isNaN(num)) {
      if (num % 2 == 0) {
        sumaPar = sumaPar + num;
        contadorPar = contadorPar + 1;
      } else {
        sumaImpar = sumaImpar + num;
        contadorImpar = contadorImpar + 1;
      }
    } else {
      i--;
      alert("El valor ingresado NO es valido");
    }
  }
  let mediaPar = sumaPar / contadorPar;
  let mediaImpar = sumaImpar / contadorImpar;
  alert("La media de los numeros pares ingresados es: " + mediaPar);
  alert("La media de los numeros impares ingresados es: " + mediaImpar);
}

function ejercicio32() {
  console.log("Ejercicio 32");
  let mayor = 0;
  let numeroCiudad = 0;

  for (let i = 1; i <= 11; i++) {
    let strNum1 = prompt("Ingrese el numero de habitantes de la ciudad: " + i);
    let num = parseInt(strNum1);
    if (!isNaN(num)) {
      if (num > mayor) {
        mayor = num;
        numeroCiudad = i;
      }
    } else {
      i--;
      alert("El valor ingresado NO es valido");
    }
  }
  alert(
    "La ciudad con la poblacion de mas personas es la ciudad " +
      numeroCiudad +
      " con " +
      mayor +
      " personas"
  );
}

function ejercicio33() {
  console.log("Ejercicio 33");
  let op = "";
  do {
    op = prompt(
      "Elija las siguientes opciones: \n 1. Continuar con el programa \n 0. Terminar el programa"
    );
    switch (op) {
      case "1":
        alert(" Felicidades, ha decidido continuar con el programa");
        break;
      case "0":
        alert(" Hasta luego");
        break;
      default:
        alert("Opcion invalida");
        break;
    }
  } while (op != 0);
}

function ejercicio34() {
  console.log("Ejercicio 34");
  for (let i = 1; i <= 9; i++) {
    let tabla = "Tabla de multiplicar del " + i;
    for (let j = 1; j <= 12; j++)
      tabla = tabla + "\n" + i + " * " + j + " = " + i * j;
    alert(tabla);
  }
}

function ejercicio35() {
  console.log("Ejercicio 35");
  let mayor = 0;
  let menor = 0;
  for (let i = 1; i <= 20; i++) {
    let strNum1 = prompt("Ingrese el numero " + i);
    let num = parseInt(strNum1);
    if (!isNaN(num)) {
      if (i == 1) {
        mayor = num;
        menor = num;
      } else {
        if (mayor < num) mayor = num;
        if (menor > num) menor = num;
      }
    } else {
      i--;
      alert("El valor ingresado NO es valido");
    }
  }
  alert("EL numero mayor es: " + mayor);
  alert("EL numero menor es: " + menor);
}

function ejercicio36() {
  console.log("Ejercicio 36");
  let strNum1 = prompt("Digite el termino n de la serie Fibonacci: ");
  let num = parseInt(strNum1);
  let suma = 0;
  if (!isNaN(num)) {
    for (let i = 1; i <= num; i++) {
      suma = suma + fibonacci(i);
    }
    alert("El termino " + num + " de Fibonacci es: " + fibonacci(num));
    alert("La suma de los " + num + " primeros terminos Fibonacci es: " + suma);
  } else {
    alert("El valor ingresado NO es valido");
  }
}

function fibonacci(n) {
  if (n == 0) resultado < -0;
  else {
    if (n == 1 || n == 2) return 1;
    else return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function ejercicio37() {
  console.log("Ejercicio 37");
  let strNum1 = prompt("Ingrese el primer numero: ");
  let num1 = parseInt(strNum1);
  let strNum2 = prompt("Ingrese el segundo numero: ");
  let num2 = parseInt(strNum2);

  if (!isNaN(num1) || !isNaN(num2)) {
    let variable = 0;
    while (num2 != 0) {
      variable = num2;
      num2 = num1 % num2;
      num1 = variable;
    }
    alert("El MCD es: " + num1);
  } else {
    alert("El valor ingresado NO es valido");
  }
}

function ejercicio38() {
  console.log("Ejercicio 38");
  let strNum1 = prompt("Ingrese un numero: ");
  let num = parseInt(strNum1);
  let sum = 0;

  if (!isNaN(num)) {
    for (let i = 1; i <= num - 1; i++) {
      if (num % i == 0) sum = sum + i;
    }
    if (sum == num) alert("El numero es perfecto");
    else alert("El numero NO es perfecto");
  } else {
    alert("El valor ingresado NO es valido");
  }
}

function ejercicio39() {
  console.log("Ejercicio 39");
  let strNum1 = prompt(
    "Ingrese el termino n para aproximar PI con la serie de Gregory-Leibniz: "
  );
  let num = parseInt(strNum1);
  let sum = 0;

  if (!isNaN(num)) {
    for (let i = 1; i <= num; i++) {
      if (i % 2 == 0) sum = sum - 4 / (i * 2 - 1);
      else sum = sum + 4 / (i * 2 - 1);
    }
    alert("El valor aproximado de Pi es: " + sum);
  } else {
    alert("El valor ingresado NO es valido");
  }
}

function ejercicio40() {
  console.log("Ejercicio 40");
  let strNum1 = prompt(
    "Ingrese el termino n para aproximar PI con la serie de Nilakantha: "
  );
  let num = parseInt(strNum1);
  let sum = 3;

  if (!isNaN(num)) {
    for (let i = 1; i <= num; i++) {
      if (i % 2 == 0) sum = sum - 4 / (i * 2 * (i * 2 + 1) * (i * 2 + 2));
      else sum = sum + 4 / (i * 2 * (i * 2 + 1) * (i * 2 + 2));
    }
    alert("El valor aproximado de Pi es: " + sum);
    if (i % 2 == 0) sum = sum - 4 / (i * 2 - 1);
  } else {
    alert("El valor ingresado NO es valido");
  }
}
