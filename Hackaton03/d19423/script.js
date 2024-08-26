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
  console.log("Ejercicio 2");
  let numero = parseInt (prompt("Digite un numero"));
  if (numero < 0) {
    alert(numero + " Es un numero negativo");
  }
  else if (numero > 0) {
    alert(numero + " No es un numero negativo");
  }else{
    alert(numero + " No es un numero");
  }  
}


function ejercicio3() {
  console.log("Ejercicio 3");

    let strNumero = prompt("Digita un número");
    let intNumero = parseInt(strNumero);
    
    if (!isNaN(intNumero)) {
      ultimoNumero = strNumero.substring(strNumero.length - 1, strNumero.length);
      console.log(ultimoNumero);
      
      if (ultimoNumero == "4") {
        alert("El número termina en 4"); }
      else {
        alert("El número no termina en 4"); }
        
    }
    
}

function ejercicio4() {
  console.log("Ejercicio 4");

   let strNumero1 = prompt("Digita el primer número ");
   let strNumero2 = prompt("Digita el segundo número ");
   let strNumero3 = prompt("Digita el tercer número ");
    
    let numero1 = parseInt(strNumero1, 10);
    let numero2 = parseInt(strNumero2, 10);
    let numero3 = parseInt(strNumero3, 10);

     let numeros = [numero1, numero2, numero3];
     numeros.sort(function(a, b) {
     return a - b;
     });

     console.log("" + numeros.join(" "));
     alert("" + numeros.join(" "));
    
}

function ejercicio5() {
  console.log("Ejercicio 5");
    let strNumero = prompt("Digite una cantidad de zapatos");
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
        alert(" precio: " + total + " descuento: " + descuento + "%");
    }

}

function ejercicio6() {
  console.log("Ejercicio 6");
  
    let horasdeTrabajo = parseInt(prompt("Digite las horas trabajadas:"));
    let sueldo;

      if (horasdeTrabajo <= 40) {
      sueldo = horasdeTrabajo * 20; } 
      
      else {
      let horasExtras = horasdeTrabajo - 40;
      sueldo = (40 * 20) + (horasExtras * 25); }

      alert("Sueldo semanal: " + sueldo);
      
}

function ejercicio7() {
  console.log("Ejercicio 7");

  let tipo = prompt("Ingrese el tipo de cliente(A,B o C): ");
  let descuento = 0;

    if (tipo == "A") descuento = 10;
    else if (tipo == "B") descuento = 15;

    else if (tipo == "C") descuento = 20;
    if (descuento != 0) {
    alert("El cliente tiene un descuento de " + descuento + "%"); } 
    
    else {
    alert("No es un cliente"); }
  
}

function ejercicio8() {
  console.log("Ejercicio 8");

    let input1 = prompt("Digite la primera nota (de 1-20)");
    let numero1 = parseInt(input1);
    console.log(typeof (numero1));
    
    let input2 = prompt("Digite la segunda nota (1-20)");
    let numero2 = parseInt(input2);
    console.log(typeof (numero2));

    let input3 = prompt("Digite la ttercera nota (1-20)");
    let numero3 = parseInt(input3);
    console.log(typeof (numero3));

      if ((numero1 + numero2 + numero3) / 3 >= 12 && (numero1 + numero2 + numero3) / 3 <= 20) {
        alert("El estudiante aprobó"); }
      
        else if ((numero1 + numero2 + numero3) / 3 < 12 && (numero1 + numero2 + numero3) / 3 >= 0) {
        alert("El estudiante desaprobó"); }

}

function ejercicio9() {
  console.log("Ejercicio 9");

    let strSalario = prompt("Digite el salario del trabajador");
    let intSalario = parseInt(strSalario);
    let aumento;
    
    if (!isNaN(intSalario)) {
    if (intSalario > 2000) {
        aumento = intSalario * 0.05; }
       
        else {
        aumento = intSalario * 0.1; }
       
        alert("El aumento es de: " + aumento); }

}

function ejercicio10() {
  console.log("Ejercicio 10");

  let strNum = prompt("Digite un numero");
  let num = parseFloat(strNum);

    if (!isNaN(num)) {
    if (num % 2 == 0) alert("El numero es par");
    else alert("El numero es impar");
  
  } 

}

function ejercicio11() {
  console.log("Ejercicio 11");

    let input1 = prompt("Digite el primer número");
    let numero1 = parseInt(input1);
    console.log(typeof (numero1));

    let input2 = prompt("Digite el segundo número");
    let numero2 = parseInt(input2);
    console.log(typeof (numero2));

    let input3 = prompt("Digite el tercer número");
    let numero3 = parseInt(input3);
    console.log(typeof (numero3));

      if (numero1 > numero2 && numero1 > numero3) {
        alert("Numero mayor: " + numero1 ); }

      else if (numero2 > numero1 && numero2 > numero3) {
        alert("Numero mayor: " + numero2 ); }

      else {
        alert("Numero mayor: " + numero3 ); }

}

function ejercicio12() {
  console.log("Ejercicio 12");

  let input1 = prompt("Digite el primer número");
  let numero1 = parseInt(input1);
  console.log(typeof (numero1));

  let input2 = prompt("Digite el segundo número");
  let numero2 = parseInt(input2);
  console.log(typeof (numero2));


    if (numero1 > numero2) {
      alert("Numero mayor: " + numero1); }

    else {
      alert("Numero mayor:  " + numero2); }

}

function ejercicio13() {
  console.log("Ejercicio 13");

    let input = prompt("Digite una letra");
    let letra = input.toUpperCase();
    console.log(typeof (letra))

      if (letra == 'A', letra == "E", letra == "I", letra == "O", letra == "U") {
        alert("Es una vocal"); }
      
        else { alert("No es una vocal") }

}

function ejercicio14() {
  console.log("Ejercicio 14");
  
  let numero = parseInt(prompt("Digite un numero del 1 al 10"));

  if (isNaN(numero) || numero < 1 || numero > 10) {
      alert("Digite un numero del 1 al 10");
  } else {
    
  function esPrimo(n) {
    if (n <= 1) return false; 
    if (n === 2) return true; 
    if (n % 2 === 0) return false; 
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false; }
    return true;
    }
      if (esPrimo(numero)) {
          alert("El numero "+numero+" es primo");
      } else {
          alert("El numero "+numero+" no es primo");
      }
  }

  }

function ejercicio15() {
  console.log("Ejercicio 15");

  let valor = parseFloat(prompt("Digite el numero a convertir"));
    let tipo_Medida = prompt("1 = centimetros a pulgadas, 2 = libras a kilos").toUpperCase();
    let resultado = 0

    if(isNaN(valor) || valor == 0){
        alert("Ingrese una cifra valida")
    }else 

    if(tipo_Medida == "1"){
        resultado = valor / 2.54;
        alert("" + resultado + " Valor en pulgadas");
    }else 
    if(tipo_Medida == "2"){
        resultado = valor * 0.453592;
        alert("" + resultado + " Valor en kilos");
    } 



}

function ejercicio16() {
  console.log("Ejercicio 16");

  let strNum1 = prompt("Digite un numero (1-7): ");
  let num = parseInt(strNum1);

  switch (num) {

      case 1: alert("Lunes");

      break;
      case 2: alert("Martes");

      break;
      case 3: alert("Miercoles");

      break;
      case 4: alert("Jueves");

      break;
      case 5: alert("Viernes");

      break;
      case 6: alert("Sabado");

      break;
      case 7: alert("Domingo");

  }

}

function ejercicio17() {
  console.log("Ejercicio 17");

  let hora = parseInt(prompt("Digite la hora"));
  let minuto = parseInt(prompt("Digite los minutos:"));
  let segundo = parseInt(prompt("Digite los segundos:"));
    
    segundo = segundo + 1;
    if (!isNaN(hora,minuto,segundo))
    {
    if (segundo == 6)
    { segundo = 0;
    minuto = minuto + 1; } 
      if (minuto == 60 )
        { minuto = 0;
          hora = hora + 1; } 
      if (hora == 24)
       { hora == 0; } 
       alert(""+hora+":"+minuto+ ":"+segundo+"");
    }

}

function ejercicio18() {
  console.log("Ejercicio 18");
  
  let cantidad = parseInt(prompt("Digite la cantidad de discos que comprara"));
  let precio = 0;

    if(isNaN(cantidad) || cantidad <= 0){
        alert("Valor no valido") }
    else{
    let ganancia = 0;
    if(cantidad <= 9){
    precio = cantidad * 10; }
    else if(cantidad <=99){
    precio = cantidad * 8; }
    else if(cantidad >= 499){
    precio = cantidad * 7; }
    else if(cantidad >= 500){
    precio = cantidad * 6 }
    }   
    ganancia = precio * (0.25)
    alert("Precio total: " + precio + " Ganancia del vendedor: " + ganancia )

}

function ejercicio19() {
  console.log("Ejercicio 19");



}

function ejercicio20() {
  console.log("Ejercicio 20");

}

function ejercicio21() {
  console.log("Ejercicio 21");

  let numero = parseInt(prompt("Digite un numero"));
  let factorial = 1;

  if(isNaN(numero) || numero < 0){
      alert("Digite un numero positivo")
  }else {

  for (let i = 1; i <= numero; i++) {
      factorial *= i; }

  alert("Factorial: " + factorial)

  }
  
}

function ejercicio22() {
  console.log("Ejercicio 22");

  let n = parseInt(prompt("Digite el valor de n"));

if (isNaN(n) || n < 1) {
  alert("Numero no valido"); } 
  else {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
  suma += i; }
  alert("La suma de los primeros numeros de "+n+" es "+suma+".");
  }

}

function ejercicio23() {
  console.log("Ejercicio 23");

  let strNum1 = prompt("Digite el valor de n");
  let num = parseInt(strNum1);
  let suma = 0;

  if (!isNaN(num)) {
  for (let i = 1; i <= num; i++) {
  if (i % 2 != 0) suma = suma + i; }
    alert(
    "La suma de los numeros impares menores o iguales al valor de n(" + num + ") es: " + suma );
  } else {
    alert("Valor no valido");
  }

}

function ejercicio24() {
  console.log("Ejercicio 24");
  
  let suma = 0;
  for (let i = 2; i <= 1000; i += 2) {
  suma += i; }

alert("La suma de todos los números pares hasta 1000 es "+suma+"");

}

function ejercicio25() {
  console.log("Ejercicio 25");

}

function ejercicio26() {
  console.log("Ejercicio 26");

  let strNum1 = prompt("Digite el dividendo");
  let num1 = parseInt(strNum1);
  let strNum2 = prompt("Digite el divisor");
  let num2 = parseInt(strNum2);
  let cociente = 0;
  let resto = num1;

  if (!isNaN(num1) && !isNaN(num2)) {
  for (let i = 1; i <= num1; i = i + num2) {
  if (resto >= num2) {
  resto = resto - num2;
  cociente = cociente + 1; } }
    alert("Cociente: " + cociente);
    alert("Reciduo: " + resto); } 

}

function ejercicio27() {
  console.log("Ejercicio 27");

  let suma = 0;
  let conteo = 0;
  while (true) {
  let numero = parseFloat(prompt("Digite un numero positivo o negativo:"));
    if (numero < 0) {
    break; }
    suma += numero;
    conteo += 1;
  }

  if (conteo > 0) {
    let media = suma / conteo;
    alert("La media de los numeros digitados es: "+media+"");
  } else {
    alert("Se digito un numero negativo"); }

}

function ejercicio28() {
  console.log("Ejercicio 28");

  let suma = 0;
  let i = 0;
  do { suma = suma + i;
    i++; }
  while (i <= 100);
  alert("ciclo repetir: " + suma);

}

function ejercicio29() {
  console.log("Ejercicio 29");

  let suma = 0;
  let i = 0;
  while (i <= 100) {
    suma = suma + i;
    i++; }
  alert("ciclo mientras: " + suma);

}

function ejercicio30() {
  console.log("Ejercicio 30");

  let suma = 0;
  for (let i = 1; i <= 100; i++) {
    suma = suma + i; }
  alert("Ciclo para: " + suma);

}

function ejercicio31() {
  console.log("Ejercicio 31");

}

function ejercicio32() {
  console.log("Ejercicio 32");

}

function ejercicio33() {
  console.log("Ejercicio 33");

}

function ejercicio34() {
  console.log("Ejercicio 34");
  
  for (let i = 1; i <= 9; i++) {
  let tabla = "" + i;
  for (let j = 1; j <= 12; j++)
  tabla = tabla + "\n" + i + " * " + j + " = " + i * j;
  alert(tabla);
  
  }

}

function ejercicio35() {
  console.log("Ejercicio 35");

  let strNumero = prompt("Digite 20 numeros");
    
  let intNumero = parseInt(strNumero);
    let mayor = intNumero;
    let menor = intNumero;
    if (!isNaN(intNumero)) {
    for (let i = 0; i < 19; i++) {
    strNumero = prompt("Digite otro numero");
    intNumero = parseInt(strNumero);
    if (!isNaN(intNumero)) {
    if (intNumero > mayor) {
    mayor = intNumero; }
    if (intNumero < menor) {
    menor = intNumero; } } }
    alert("Numero mayor: " + mayor + "\n" + "Numero menor: " + menor); }

}

function ejercicio36() {
  console.log("Ejercicio 36");

}

function ejercicio37() {
  console.log("Ejercicio 37");

}

function ejercicio38() {
  console.log("Ejercicio 38");
  
  let strNum1 = prompt("Digite un numero");
  let num = parseInt(strNum1);
  let sum = 0;

  if (!isNaN(num)) {
  for (let i = 1; i <= num - 1; i++) {
  if (num % i == 0) sum = sum + i; }
    if (sum == num) alert("Es un numero perfecto");
    else alert("No es un numero perfecto");
  }

}

function ejercicio39() {
  console.log("Ejercicio 39");

}

function ejercicio40() {
  console.log("Ejercicio 40");

}