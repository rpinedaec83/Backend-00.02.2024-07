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