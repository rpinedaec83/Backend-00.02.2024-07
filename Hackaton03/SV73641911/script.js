function ejercicio1() {
    try {
        console.log("Ejercicio 1");
  let strNumero = prompt("Digita un numero");
  let intNumero = parseInt(strNumero);
  if (!isNaN(intNumero)) {
    let arrNumero = strNumero.split("");
    if (arrNumero.length == 3) {
      alert("Si tiene 3 digitos");
    } else {
      alert("No tiene 3 digitos");
    }
  } else {
    throw "No es un numero"
  }
    } catch (error) {
        alert("No es un numero");
    }
  
}

function ejercicio2() {
  try {
    console.log("Ejercicio 2");
    let strNumero = prompt("Digita un núero");
    let intNumero = parseInt(strNumero);
    if (!isNaN(intNumero)) {
      if (intNumero < 0) {
        alert("Es un número negativo")
      }
      else {
        alert("No es un número negativo")
      }
    }
    else {
      throw "No es un número"
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio3() {
  try {
    console.log("Ejercicio 3");
    let strNumero = prompt("Digita un número");
    let intNumero = parseInt(strNumero);
    if (!isNaN(intNumero)) {
      ultimoNumero = strNumero.substring(strNumero.length - 1, strNumero.length);
      console.log(ultimoNumero);
      if (ultimoNumero == "4") {
        alert("El número termina en 4");
      }
      else {
        alert("El número no termina en 4");
      }
    }
    else {
      throw "No es un número"
    }
  }
  catch (error) {
    alert("No es un número");
  }
}


function ejercicio4() {
  try {
    console.log("Ejercicio 4");
    let primerNumero = prompt("Ingrese el primer número");
    let segundoNumero = prompt("Ingrese el segundo número");
    let tercerNumero = prompt("Ingrese el tercer número");
    let primerInt = parseInt(primerNumero);
    let segundoInt = parseInt(segundoNumero);
    let tercerInt = parseInt(tercerNumero);
    let lista = [primerInt, segundoInt, tercerInt];
    // Ordenar los numeros de menor a mayor
    if (!isNaN(primerInt) && !isNaN(segundoInt) && !isNaN(tercerInt)) {
      for (let i = 0; i < 2; i++) {
        posMenor = i;
        for (j = i + 1; j < 3; j++){
          if (lista[j] < lista[posMenor]) {
            posMenor = j;
          }
        }
        // Intercambiar posicion
        temp = lista[i];
        lista[i] = lista[posMenor];
        lista[posMenor] = temp;
      }
      alert(lista[0] + "\n" + lista[1] + "\n" + lista[2]);
    }
    else {
      throw "No es un número"
    }
  }
  catch (error) {
    alert("No es un número")
  }
}

function ejercicio5() {
  try {
    console.log("Ejercicio 5");
    let strNumero = prompt("Ingrese cantidad de zapatos");
    let intNumero = parseInt(strNumero);
    let precio = 80;
    let descuento = 0;
    if (!isNaN(intNumero)) {
      if (intNumero > 30) {
        descuento = 40;
      }
      else if (intNumero > 20) {
        descuento = 20;
      }
      else if (intNumero > 10) {
        descuento = 10;
      }
      total = intNumero * precio * (100 - descuento) / 100;
      alert("El total a pagar es: " + total + " con un descuento del " + descuento + "%");
    }
    else {
      throw "No es un número"
    }
  }
  catch (error) {
    alert("No es un número")
  }
}

function ejercicio6() {
  try {
    console.log("Ejercicio 6");
    let strNumero = prompt("Ingrese horas trabajadas");
    let horasTrabajadas = parseInt(strNumero);
    let sueldoBase = 20;
    let sueldoExtra = 25;
    let sueldo;
    if (!isNaN(horasTrabajadas)) {
      if (horasTrabajadas <= 40) {
        sueldo = horasTrabajadas * sueldoBase;
      }
      else {
        sueldo = 40 * sueldoBase + (horasTrabajadas - 40) * sueldoExtra;
      }
      alert("El sueldo semanal es: " + sueldo);
    }
    else {
      throw "No es un número"
    }
  }
  catch (error) {
    alert("No es un número")
  }
}

function ejercicio7() {
  try {
    console.log("Ejercicio 7");
    let membresia = prompt("Ingrese el tipo de membresía (A, B o C):");
    let precio = 100;
    let descuento;
    switch (membresia) {
      case "A":
        descuento = 10;
        break;
      case "B":
        descuento = 15;
        break;
      case "C":
        descuento = 20;
        break;
      default:
        throw "Tipo de membresía no válido"
    }
    let total = precio * (100 - descuento) / 100;
    alert("El total a pagar es: " + total + " con un descuento del " + descuento + "%");
  }
  catch (error) {
    alert("Tipo de membresía no válido");
  }
}

function ejercicio8() {
  try {
    console.log("Ejercicio 8");
    let strNota1 = prompt("Ingrese la primera nota:");
    let strNota2 = prompt("Ingrese la segunda nota:");
    let strNota3 = prompt("Ingrese la tercera nota:");
    let intNota1 = parseInt(strNota1);
    let intNota2 = parseInt(strNota2);
    let intNota3 = parseInt(strNota3);
    if (!isNaN(intNota1) && !isNaN(intNota2) && !isNaN(intNota3)) {
      let promedio = (intNota1 + intNota2 + intNota3) / 3;
      if (promedio >= 10) {
        alert("El estudiante aprobó");
      }
      else {
        alert("El estudiante no aprobó");
      }
    }
    else {
      throw "No es una nota válida"
    }
  }
  catch (error) {
    alert("No es una nota válida");
  }
}

function ejercicio9() {
  try {
    console.log("Ejercicio 9");
    let strSalario = prompt("INgrese el salario actual del trabajador");
    let intSalario = parseInt(strSalario);
    let aumento;
    if (!isNaN(intSalario)) {
      if (intSalario > 2000) {
        aumento = intSalario * 0.05;
      }
      else {
        aumento = intSalario * 0.1;
      }
      alert("El aumento es de: " + aumento);
    }
    else {
      throw "No es un salario válido"
    }
  }
  catch (error) {
    alert("No es un salario válido");
  }
}

function ejercicio10() {
  try {
    console.log("Ejercicio 10");
    let strNumero = prompt("Ingrese un número");
    let intNumero = parseInt(strNumero);
    if (!isNaN(intNumero)) {
      if (intNumero % 2 == 0) {
        alert("El número es par");
      }
      else {
        alert("El número es impar");
      }
    }
    else {
      throw "No es un número"
    } 
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio11() {
  try {
    console.log("Ejercicio 11");
    let strNum1 = prompt("Ingrese el primer número");
    let strNum2 = prompt("Ingrese el segundo número");
    let strNum3 = prompt("Ingrese el tercer número");
    let intNum1 = parseInt(strNum1);
    let intNum2 = parseInt(strNum2);
    let intNum3 = parseInt(strNum3);
    if (!isNaN(intNum1) && !isNaN(intNum2) && !isNaN(intNum3)) {
      if (intNum1 >= intNum2 && intNum1 >= intNum3) {
        alert("El primer número es el mayor");
      }
      else if (intNum2 >= intNum3) {
        alert("El segundo número es el mayor");
      }
      else {
        alert("El tercer número es el mayor");
      }
    }
    else {
      throw "No es un número"
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio12() {
  try {
    console.log("Ejercicio 12");
    let strNum1 = prompt("Ingrese el primer número");
    let strNum2 = prompt("Ingrese el segundo número");
    let intNum1 = parseInt(strNum1);
    let intNum2 = parseInt(strNum2);
    if (!isNaN(intNum1) && !isNaN(intNum2)) {
      if (intNum1 >= intNum2) {
        alert("El primer número es el mayor");
      }
      else {
        alert("El segundo número es el mayor");
      }
    }
    else {
      throw "No es un número"
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio13() {
  console.log("Ejercicio 13");
  let strLetra = prompt("Ingrese una letra:");
  let letra = strLetra.toLowerCase();
  switch (letra) {
    case "a": 
    case "e":
    case "i":
    case "o":
    case "u":
      alert("Es una vocal");
      break;
    default:
      alert("No es una vocal");
  }
}

function ejercicio14() {
  try {
    console.log("Ejercicio 14");
    let strNumero = prompt("Ingrese un número");
    let intNumero = parseInt(strNumero);
    let contador = 0;
    if (!isNaN(intNumero)) {
      for (i = 0; i < intNumero; i++) {
        if (intNumero % (intNumero - i) == 0) {
          contador++;
        }
      }
      if (contador == 2) {
        alert("Es un número primo");
      }
      else {
        alert("No es un número primo");
      }
    }
    else {
      throw "No es un número"
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio15() {
  try {
    console.log("Ejercicio 15");
    let strCentimetros = prompt("Ingrese la longitud en centímetros:");
    let strLibras = prompt("Ingrese el peso en libras:");
    let intCentimetros = parseFloat(strCentimetros);
    let intLibras = parseFloat(strLibras);
    if (!isNaN(intCentimetros) && !isNaN(intLibras)) {
      let pulgadas = intCentimetros / 2.54;
      let kilos = intLibras / 2.205;
      alert("La longitud en pulgadas es: " + pulgadas + "\n" + "EL peso en kilogramos es: " + kilos);
    }
    else {
      throw "No es número"
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio16() {
  try {
    console.log("Ejercicio 16");
    let strNumero = prompt("Ingrese un número");
    let intNumero = parseInt(strNumero);
    if (!isNaN(intNumero)) {
      switch (intNumero) {
        case 1:
          alert("Lunes");
          break;
        case 2:
          alert("Martes");
          break;
        case 3:
          alert("Miércoles");
          break;
        case 4:
          alert("Jueves");
          break;
        case 5:
          alert("Viernes");
          break;
        case 6:
          alert("Sábado");
          break;
        case 7:
          alert("Domingo");
          break;
        default:
          alert("Número no válido");
      }
    }
    else {
      throw "No es un número"
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio17() {
  try {
    console.log("Ejercicio 17");
    let strHora = prompt("Ingrese la hora");
    let strMinuto = prompt("Ingrese el minuto");
    let strSegundo = prompt("Ingrese el segundo");
    let intHora = parseInt(strHora);
    let intMinuto = parseInt(strMinuto);
    let intSegundo = parseInt(strSegundo);
    if (!isNaN(intHora) && !isNaN(intMinuto) && !isNaN(intSegundo)) {
      intSegundo = intSegundo + 1;
      if (intSegundo >= 60) {
        intSegundo = 0;
        intMinuto = intMinuto + 1;
        if (intMinuto >= 60) {
          intMinuto = 0;
          intHora = intHora + 1;
          if (intHora >= 24) {
            intHora = 0;
          }
        }
      }
      alert("La hora después de un segundo es: " + intHora + ":" + intMinuto + ":" + intSegundo); 
    }
    else {
      throw "No es un número"
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio18() {
  try {
    console.log("Ejercicio 18");
    let strCantidad = prompt("Ingrese la cantidad de CDs a vender:");
    let intCantidad = parseInt(strCantidad);
    let precio;
    let ganancia;
    if (!isNaN(intCantidad)) {
      if (intCantidad < 10) {
        precio = intCantidad * 10;
      }
      else if (intCantidad < 100) {
        precio = intCantidad * 8;
      }
      else if (intCantidad < 500) {
        precio = intCantidad * 7;
      }
      else {
        precio = intCantidad * 6;
      }
      ganancia = precio * 0.00825;
      alert("El precio total para el cliente es: " + precio + "\n" + "La ganancia para el vendedor es: " + ganancia);
    }
    else {
      throw "No es un número"
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio19() {
  try {
    console.log("Ejercicio 19");
    let idEmpleado = prompt("Ingrese el número identificador del empleado:");
    let strDias = prompt("Ingrese la cantidad de días trabajados en la semana (máx. 6 días):");
    let intDias = parseInt(strDias);
    let monto;
    if (!isNaN(intDias)) {
      if (intDias >= 0 && intDias <= 6) {
        switch (idEmpleado) {
          case "1":
            monto = intDias * 56;
            alert("El monto a pagar al cajero es: " + monto);
            break;
          case "2":
            monto = intDias * 64;
            alert("El monto a pagar al servidor es: " + monto);
            break;
          case "3":
            monto = intDias * 80;
            alert("El monto a pagar al preparador es: " + monto);
            break;
          case "4":
            monto = intDias * 48;
            alert("El monto a pagar al mantenimiento es: " + monto);
            break;
          default:
            alert("Número de empleado no válido");
        }
      }
      else {
        alert("No es una cantidad de días válida");
      }
    }
    else {
      throw "No es un número";
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio20() {
  try {
    console.log("Ejercicio 20");
    let strNum1 = prompt("Ingrese el primer número:");
    let strNum2 = prompt("Ingrese el segundo número:");
    let strNum3 = prompt("Ingrese el tercer número:");
    let strNum4 = prompt("Ingrese el cuarto número:");
    let intNum1 = parseInt(strNum1);
    let intNum2 = parseInt(strNum2);
    let intNum3 = parseInt(strNum3);
    let intNum4 = parseInt(strNum4);
    if (!isNaN(intNum1) && !isNaN(intNum2) && !isNaN(intNum3) && !isNaN(intNum4)) {
      // Encontrar el mayor número
      let mayorNum = intNum1;
      if (intNum2 > mayorNum) {
        mayorNum = intNum2;
      }
      if (intNum3 > mayorNum) {
        mayorNum = intNum3;
      }
      if (intNum4 > mayorNum) {
        mayorNum = intNum4;
      }
      // Contar números pares
      let pares = 0;
      if (intNum1 % 2 == 0) {
        pares++;
      }
      if (intNum2 % 2 == 0) {
        pares++;
      }
      if (intNum3 % 2 == 0) {
        pares++;
      }
      if (intNum4 % 2 == 0) {
        pares++;
      }
      alert("Cantidad de números pares: " + pares +"\n" + 
        "El mayor número es: " + mayorNum + "\n"
      );
      // Si el tecero es par
      if (intNum3 % 2 == 0) {
        alert("El cuadrado del segundo número es: " + (intNum2 * intNum2));
      }
      // Si el primero es menor que el cuarto
      if (intNum1 < intNum4) {
        let media = (intNum1 + intNum2 + intNum3 + intNum4) / 4;
        alert("La media de los números es: " + media);
      }
      // Si el segundo es mayor que el tercero y el tercero se encuentra entre 50 y 700
      if (intNum2 > intNum3 && intNum3 >= 50 && intNum3 <= 700) {
        let suma = intNum1 + intNum2 + intNum3 + intNum4;
        alert("La suma de los números es: " + suma);
      }
    }
    else {
      throw "No es número";
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio21() {
  try {
    console.log("Ejercicio 21");
    let strNumero = prompt("Ingrese un número");
    let intNumero = parseInt(strNumero);
    if (!isNaN(intNumero)) {
      let factorial = 1;
      for (let i = 0; i < intNumero; i++) {
        factorial = factorial * (i + 1);
      }
      alert("el factorial de " + intNumero + " es: " + factorial);
    }
    else {
      throw "No es un número";
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio22() {
  try {
    console.log("Ejercicio 22");
    let strNumero = prompt("Ingrese un número");
    let intNumero = parseInt(strNumero);
    let suma = 0;
    if (!isNaN(intNumero)) {
      for (let i = 1; i <= intNumero; i++) {
        suma = suma + i;
      }
      alert("La suma es: " + suma);
    }
    else {
      throw "No es un número";
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio23() {
  try {
    console.log("Ejercicio 23");
    let strNumero = prompt("Ingrese un número");
    let intNumero = parseInt(strNumero);
    let suma = 0;
    if (!isNaN(intNumero)) {
      for (let i = 1; i <= intNumero; i += 2) {
        suma = suma + i;
      }
      alert("La suma de los impares es: " + suma);
    }
    else {
      throw "No es un número";
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio24() {
  try {
    console.log("Ejercicio 24");
    let suma = 0;
    for (i = 2; i <= 1000; i += 2) {
      suma = suma + i;
    }
    alert("La suma de los números pares hasta el 1000 es: " + suma);
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio25() {
  try {
    console.log("Ejercicio 25");
    let strNumero = prompt("Ingrese un número: ");
    let intNumero = parseInt(strNumero);
    function factorial(n) {
      let facto;
      if (n == 0 || n == 1) {
        facto = 1;
      }
      else {
        facto = n * (factorial(n - 1));
      }
      return facto;
    }
    if (!isNaN(intNumero)) {
      if (intNumero >= 0) {
        alert("el factorial de " + intNumero + " es: " + factorial(intNumero));
      }
      else {
        alert("Número no válido");
      }
    }
    else {
      throw "No es un número";
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio26() {
  try {
    console.log("Ejercicio 26");
    let strDividendo = prompt("Ingrese el dividendo");
    let strDivisor = prompt("Ingrese el divisor");
    let intDividendo = parseInt(strDividendo);
    let intDivisor = parseInt(strDivisor);
    if (!isNaN(intDividendo) && !isNaN(intDivisor)) {
      let cociente = 0;
      let resto = intDividendo;
      while (resto >= intDivisor) {
        resto = resto - intDivisor;
        cociente++;
      }
      alert("El cociente es: " + cociente + "\n" + "El resto es: " + resto);
    }
    else {
      throw "No es un número";
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio27() {
  try {
    console.log("Ejercicio 27");
    let suma = 0;
    let cantidad = 0;
    let strNumero = prompt("Ingrese números positivos. Ingrese un número negativo para terminar");
    let floatNumero = parseFloat(strNumero);
    if (!isNaN(floatNumero)) {
      while (floatNumero >= 0) {
        suma = suma + floatNumero;
        cantidad++;
        strNumero = prompt("Ingrese otro número");
        floatNumero = parseFloat(strNumero);
        if (isNaN(floatNumero)) {
          throw "No es un número";
        }
      }
      if (cantidad > 0) {
        alert("La media de los números es: " + (suma / cantidad));
      }
      else {
        alert("No se ingresaron números positivos");
      }
    }
    else {
      throw "No es un número";
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio28() {
  console.log("Ejercicio 28");
  let suma = 0;
  let i = 0;
  do {
    suma = suma + i;
    i++;
  }
  while (i <= 100);
  alert("La suma de los cien primero números es: " + suma);
}

function ejercicio29() {
  console.log("Ejercicio 29");
  let suma = 0;
  let i = 0;
  while (i <= 100) {
    suma = suma + i;
    i++;
  }
  alert("La suma de los cien primero números es: " + suma);
}

function ejercicio30() {
  console.log("Ejercicio 30");
  let suma = 0;
  for (let i = 0; i <= 100; i++) {
    suma = suma + i;
  }
  alert("La suma de los cien primero números es: " + suma);
}

function ejercicio31() {
  try {
    console.log("Ejercicio 31");
    let sumaImpares = 0;
    let sumaPares = 0;
    let contImpares = 0;
    let contPares = 0;
    for (let i = 0; i < 10; i++) {
      strNumero = prompt("Ingrese un número");
      intNumero = parseInt(strNumero);
      if (!isNaN(intNumero)) {
        if (intNumero % 2 == 0) {
          sumaPares = sumaPares + intNumero;
          contPares++;
        }
        else {
          sumaImpares = sumaImpares + intNumero;
          contImpares++;
        }
      }
      else {
        throw "No es un número";
      }
    }
    if (contPares > 0) {
      alert("La media de los números pares es: " + (sumaPares / contPares));
    }
    else {
      alert("No se ingresaron números pares");
    }
    if (contImpares > 0) {
      alert("La media de los números impares es: " + (sumaImpares / contImpares));
    }
    else {
      alert("No se ingresaron números impares");
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio32() {
  console.log("Ejercicio 32");
  alert("No hay datos suficientes");
}

function ejercicio33() {
  console.log("Ejercicio 33");
  alert("No hay datos suficientes");
}

function ejercicio34() {
  console.log("Ejercicio 34");
  let tabla = [];
  let resultado;
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
      resultado = i + "x" + j + "=" + (i * j);
      tabla.push(resultado);
    }
  }
  let mostrar = tabla[0] + "\n";
  for (k = 1; k < tabla.length; k++) {
    mostrar = mostrar + tabla[k] + "\n";
  }
  alert(mostrar);
}

function ejercicio35() {
  try {
    console.log("Ejercicio 35");
    let strNumero = prompt("Ingrese 20 números:");
    let intNumero = parseInt(strNumero);
    let mayor = intNumero;
    let menor = intNumero;
    if (!isNaN(intNumero)) {
      for (let i = 0; i < 19; i++) {
        strNumero = prompt("Ingrese el siguiente número");
        intNumero = parseInt(strNumero);
        if (!isNaN(intNumero)) {
          if (intNumero > mayor) {
            mayor = intNumero;
          }
          if (intNumero < menor) {
            menor = intNumero;
          }
        }
        else {
          throw "No es un número";
        }
      }
      alert("El mayor número es: " + mayor + "\n" + "El menor número es: " + menor);
    }
    else {
      throw "No es un número";
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio36() {
  try {
    console.log("Ejercicio 36");
    let strNumero = prompt("Ingrese el número de términos de la serie de Fibonacci:");
    let intNumero = parseInt(strNumero);
    let primero = 0;
    let segundo = 1;
    let resultado = "\n";
    if (!isNaN(intNumero)) {
      let siguiente;
      for (let i = 0; i < intNumero; i++) {
        resultado = resultado + primero + "\n";
        siguiente = primero + segundo;
        primero = segundo;
        segundo = siguiente;
      }
      alert("Los " + intNumero + " primeros números de la serie de Fibonacci son:" + resultado);
    }
    else {
      throw "No es un número";
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio37() {
  try {
    console.log("Ejercicio 37");
    let strNum1 = prompt("Ingrese el primer número");
    let strNum2 = prompt("Ingrese el segundo número");
    let intNum1 = parseInt(strNum1);
    let intNum2 = parseInt(strNum2);
    if (!isNaN(intNum1) && !isNaN(intNum2)) {
      let resto;
      while (intNum2 != 0) {
        resto = intNum1 % intNum2;
        intNum1 = intNum2;
        intNum2 = resto;
      }
      alert("El MCD es: " + intNum1);
    }
    else {
      throw "No es un número";
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio38() {
  try {
    console.log("Ejercicio 38");
    let strNumero = prompt("Ingrese un número:");
    let intNumero = parseInt(strNumero);
    if (!isNaN(intNumero)) {
      let sumaDivisores = 0;
      for (let i = 1; i <= intNumero / 2; i++) {
        if (intNumero % i == 0) {
          sumaDivisores = sumaDivisores + i;
        }
      }
      if (sumaDivisores == intNumero) {
        alert("El número es perfecto");
      }
      else {
        alert("El número no es perfecto");
      }
    }
    else {
      throw "No es un número";
    }
  }
  catch (error) {
    alert("No es un número");
  }
}

function ejercicio39() {
  console.log("Ejercicio 39");
  let pi = 0;
  let signo = 1;
  for (let i = 1; i <= 100000; i++) {
    pi = pi + signo * (4 / ((i * 2) - 1));
    signo = signo * (-1);
  }
  alert("El valor aproximado de pi es: " + pi);
}

function ejercicio40() {
  console.log("Ejercicio 40");
  let pi = 3;
  let signo = 1;
  for (let i = 2; i <= 100000; i += 2) {
    pi = pi + signo * (4 / (i * (i + 1) * (i + 2)));
    signo = signo * (-1);
  }
  alert("El valor aproximado de pi es: " + pi);
}