// 1. Determinar si un número tiene tres dígitos
function tieneTresDigitos() {
    let numero = prompt("Ingrese un número:");
    if (numero.length === 3) {
      console.log("El número tiene tres dígitos.");
    } else {
      console.log("El número no tiene tres dígitos.");
    }
  }
  
  // 2. Determinar si un número es negativo
  function esNegativo() {
    let numero = prompt("Ingrese un número entero:");
    if (numero < 0) {
      console.log("El número es negativo.");
    } else {
      console.log("El número no es negativo.");
    }
  }
  
  // 3. Determinar si un número termina en 4
  function terminaEnCuatro() {
    let numero = prompt("Ingrese un número:");
    if (numero.endsWith('4')) {
      console.log("El número termina en 4.");
    } else {
      console.log("El número no termina en 4.");
    }
  }
  
  // 4. Mostrar tres números enteros de menor a mayor
  function ordenarTresNumeros() {
    let num1 = parseInt(prompt("Ingrese el primer número entero:"));
    let num2 = parseInt(prompt("Ingrese el segundo número entero:"));
    let num3 = parseInt(prompt("Ingrese el tercer número entero:"));
  
    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
    console.log(numeros);
  }
  
  // 5. Calcular el descuento en una tienda de zapatos
  function calcularDescuentoZapatos() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de zapatos:"));
    let precioUnitario = 80;
    let descuento;
  
    if (cantidad > 30) {
      descuento = 0.40;
    } else if (cantidad > 20) {
      descuento = 0.20;
    } else if (cantidad > 10) {
      descuento = 0.10;
    } else {
      descuento = 0.0;
    }
  
    let total = cantidad * precioUnitario;
    let totalConDescuento = total - (total * descuento);
  
    console.log("El total a pagar con descuento es: $" + totalConDescuento);
  }
  
  // 6. Calcular el sueldo semanal de un trabajador
  function calcularSueldoSemanal() {
    let horasTrabajadas = parseInt(prompt("Ingrese las horas trabajadas:"));
    let sueldo;
  
    if (horasTrabajadas <= 40) {
      sueldo = horasTrabajadas * 20;
    } else {
      let horasExtras = horasTrabajadas - 40;
      sueldo = (40 * 20) + (horasExtras * 25);
    }
  
    console.log("El sueldo semanal es: $" + sueldo);
  }
  
  // 7. Calcular el descuento en una tienda de helados
  function calcularDescuentoHelados() {
    let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B, C):");
    let descuento;
  
    if (tipoMembresia === 'A') {
      descuento = 0.10;
    } else if (tipoMembresia === 'B') {
      descuento = 0.15;
    } else if (tipoMembresia === 'C') {
      descuento = 0.20;
    } else {
      descuento = 0.0;
    }
  
    console.log("El descuento es: " + (descuento * 100) + "%");
  }
  
  // 8. Calcular el promedio de tres notas y determinar si el estudiante aprobó
  function calcularPromedio() {
    let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
    let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
  
    let promedio = (nota1 + nota2 + nota3) / 3;
  
    if (promedio >= 6) {
      console.log("El estudiante aprobó con un promedio de " + promedio);
    } else {
      console.log("El estudiante no aprobó. Su promedio es " + promedio);
    }
  }
  
  // 9. Calcular el aumento de un trabajador
  function calcularAumento() {
    let sueldoActual = parseFloat(prompt("Ingrese el sueldo actual:"));
    let aumento;
  
    if (sueldoActual > 2000) {
      aumento = sueldoActual * 0.05;
    } else {
      aumento = sueldoActual * 0.10;
    }
  
    let nuevoSueldo = sueldoActual + aumento;
    console.log("El nuevo sueldo es: $" + nuevoSueldo);
  }
  
  // 10. Determinar si un número es par o impar
  function esParOImpar() {
    let numero = parseInt(prompt("Ingrese un número:"));
    if (numero % 2 === 0) {
      console.log("El número es par.");
    } else {
      console.log("El número es impar.");
    }
  }
  
  // 11. Determinar cuál de tres números es el mayor
  function mayorDeTresNumeros() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    let num3 = parseInt(prompt("Ingrese el tercer número:"));
  
    let mayor = Math.max(num1, num2, num3);
    console.log("El número mayor es: " + mayor);
  }
  
  // 12. Determinar cuál de dos números es el mayor
  function mayorDeDosNumeros() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
  
    if (num1 > num2) {
      console.log("El número mayor es: " + num1);
    } else if (num2 > num1) {
      console.log("El número mayor es: " + num2);
    } else {
      console.log("Ambos números son iguales.");
    }
  }
  
  // 13. Determinar si una letra es una vocal
  function esVocal() {
    let letra = prompt("Ingrese una letra:").toLowerCase();
  
    if (['a', 'e', 'i', 'o', 'u'].includes(letra)) {
      console.log("La letra es una vocal.");
    } else {
      console.log("La letra no es una vocal.");
    }
  }
  
  // 14. Determinar si un número del 1 al 10 es primo
  function esPrimo() {
    let numero = parseInt(prompt("Ingrese un número del 1 al 10:"));
    let esPrimo = true;
  
    if (numero < 2) {
      esPrimo = false;
    } else {
      for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          esPrimo = false;
          break;
        }
      }
    }
  
    if (esPrimo) {
      console.log("El número es primo.");
    } else {
      console.log("El número no es primo.");
    }
  }
  
  // 15. Convertir centímetros a pulgadas y libras a kilogramos
  function convertirUnidades() {
    let cm = parseFloat(prompt("Ingrese la cantidad en centímetros:"));
    let pulgadas = cm / 2.54;
    console.log(cm + " centímetros son " + pulgadas + " pulgadas.");
  
    let libras = parseFloat(prompt("Ingrese la cantidad en libras:"));
    let kg = libras * 0.453592;
    console.log(libras + " libras son " + kg + " kilogramos.");
  }
  
  // 16. Indicar el día de la semana según un número
  function diaDeLaSemana() {
    let numero = parseInt(prompt("Ingrese un número del 1 al 7:"));
    let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  
    if (numero >= 1 && numero <= 7) {
      console.log("El día correspondiente es: " + dias[numero - 1]);
    } else {
      console.log("Número fuera de rango.");
    }
  }
  
  // 17. Calcular la hora dentro de un segundo
  function calcularHoraEnUnSegundo() {
    let hora = prompt("Ingrese la hora en formato HH:MM:SS:");
    let partes = hora.split(":");
    let horas = parseInt(partes[0]);
    let minutos = parseInt(partes[1]);
    let segundos = parseInt(partes[2]);
  
    segundos++;
  
    if (segundos === 60) {
      segundos = 0;
      minutos++;
      if (minutos === 60) {
        minutos = 0;
        horas++;
        if (horas === 24) {
          horas = 0;
        }
      }
    }
  
    let nuevaHora = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    console.log("La nueva hora es: " + nuevaHora);
  }
  
  // 18. Calcular el precio total de CDs y la ganancia del vendedor
  function calcularPrecioCDs() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de CDs:"));
    let precio;
  
    if (cantidad > 500) {
      precio = 6;
    } else if (cantidad >= 100) {
      precio = 7;
    } else if (cantidad >= 10) {
      precio = 8;
    } else {
      precio = 10;
    }
  
    let total = cantidad * precio;
    let ganancia = total * 0.0825;
  
    console.log("El precio total para el cliente es: $" + total);
    console.log("La ganancia para el vendedor es: $" + ganancia);
  }
  
  // 19. Calcular el salario de un empleado en una heladería
  function calcularSalarioHeladeria() {
    let identificador = parseInt(prompt("Ingrese el identificador del empleado (1-4):"));
    let diasTrabajados = parseInt(prompt("Ingrese los días trabajados (1-6):"));
    let salarioDiario;
  
    switch (identificador) {
      case 1:
        salarioDiario = 56;
        break;
      case 2:
        salarioDiario = 64;
        break;
      case 3:
        salarioDiario = 80;
        break;
      case 4:
        salarioDiario = 96;
        break;
      default:
        console.log("Identificador no válido.");
        return;
    }
  
    let salarioTotal = salarioDiario * diasTrabajados;
    console.log("El salario total es: $" + salarioTotal);
  }

  // 20. Realizar varias operaciones con cuatro números
function operacionesConCuatroNumeros() {
    let num1 = leerEntero("Ingrese el primer número:");
    let num2 = leerEntero("Ingrese el segundo número:");
    let num3 = leerEntero("Ingrese el tercer número:");
    let num4 = leerEntero("Ingrese el cuarto número:");
  
    let pares = [num1, num2, num3, num4].filter(num => num % 2 === 0).length;
    let mayor = Math.max(num1, num2, num3, num4);
  
    console.log("Cantidad de números pares: " + pares);
    console.log("El mayor de los números es: " + mayor);
  
    if (num3 % 2 === 0) {
      console.log("El cuadrado del segundo número es: " + (num2 ** 2));
    }
  
    if (num1 < num4) {
      let media = (num1 + num2 + num3 + num4) / 4;
      console.log("La media de los cuatro números es: " + media);
    }
  
    if (num2 > num3 && num3 >= 50 && num3 <= 700) {
      let suma = num1 + num2 + num3 + num4;
      console.log("La suma de los cuatro números es: " + suma);
    }
  }
  
  // 21. Calcular el factorial de un número
  function calcularFactorial() {
    let numero = leerEntero("Ingrese un número:");
    let factorial = 1;
  
    for (let i = 1; i <= numero; i++) {
      factorial *= i;
    }
  
    console.log("El factorial de " + numero + " es: " + factorial);
  }
  
  // 22. Calcular la suma de los n primeros números
  function sumarPrimerosN() {
    let n = leerEntero("Ingrese un número:");
    let suma = 0;
  
    for (let i = 1; i <= n; i++) {
      suma += i;
    }
  
    console.log("La suma de los primeros " + n + " números es: " + suma);
  }
  
  // 23. Calcular la suma de los números impares menores o iguales a n
  function sumarImparesMenoresIgualesN() {
    let n = leerEntero("Ingrese un número:");
    let suma = 0;
  
    for (let i = 1; i <= n; i += 2) {
      suma += i;
    }
  
    console.log("La suma de los números impares menores o iguales a " + n + " es: " + suma);
  }
  
  // 24. Realizar la suma de todos los números pares hasta el 1000
  function sumarParesHasta1000() {
    let suma = 0;
  
    for (let i = 2; i <= 1000; i += 2) {
      suma += i;
    }
  
    console.log("La suma de todos los números pares hasta el 1000 es: " + suma);
  }
  
  // 25. Calcular el factorial de una forma distinta
  function calcularFactorialDistinto() {
    let numero = leerEntero("Ingrese un número:");
    let factorial = 1;
  
    while (numero > 1) {
      factorial *= numero;
      numero--;
    }
  
    console.log("El factorial es: " + factorial);
  }
  
  // 26. Calcular el resto y cociente por medio de restas sucesivas
  function calcularRestoYCociente() {
    let dividendo = leerEntero("Ingrese el dividendo:");
    let divisor = leerEntero("Ingrese el divisor:");
    let cociente = 0;
  
    while (dividendo >= divisor) {
      dividendo -= divisor;
      cociente++;
    }
  
    console.log("El cociente es: " + cociente);
    console.log("El resto es: " + dividendo);
  }
  
  // 27. Calcular la media de una lista indefinida de números positivos
  function calcularMediaIndefinida() {
    let suma = 0;
    let contador = 0;
    let numero;
  
    do {
      numero = leerNumero("Ingrese un número (negativo para terminar):");
      if (numero >= 0) {
        suma += numero;
        contador++;
      }
    } while (numero >= 0);
  
    if (contador > 0) {
      let media = suma / contador;
      console.log("La media es: " + media);
    } else {
      console.log("No se ingresaron números positivos.");
    }
  }
  
  // 28. Calcular la suma de los primeros cien números con un ciclo repetir
  function sumarPrimerosCienRepetir() {
    let suma = 0;
    let i = 1;
  
    do {
      suma += i;
      i++;
    } while (i <= 100);
  
    console.log("La suma de los primeros cien números es: " + suma);
  }
  
  // 29. Calcular la suma de los primeros cien números con un ciclo mientras
  function sumarPrimerosCienMientras() {
    let suma = 0;
    let i = 1;
  
    while (i <= 100) {
      suma += i;
      i++;
    }
  
    console.log("La suma de los primeros cien números es: " + suma);
  }
  
  // 30. Calcular la suma de los primeros cien números con un ciclo para
  function sumarPrimerosCienPara() {
    let suma = 0;
  
    for (let i = 1; i <= 100; i++) {
      suma += i;
    }
  
    console.log("La suma de los primeros cien números es: " + suma);
  }
  
  // 31. Calcular la media de los números pares e impares de una lista de diez números
  function calcularMediaParesImpares() {
    let numeros = [];
    let sumaPares = 0;
    let sumaImpares = 0;
    let contadorPares = 0;
    let contadorImpares = 0;
  
    for (let i = 0; i < 10; i++) {
      numeros.push(leerEntero("Ingrese un número:"));
    }
  
    numeros.forEach(num => {
      if (num % 2 === 0) {
        sumaPares += num;
        contadorPares++;
      } else {
        sumaImpares += num;
        contadorImpares++;
      }
    });
  
    let mediaPares = contadorPares > 0 ? sumaPares / contadorPares : 0;
    let mediaImpares = contadorImpares > 0 ? sumaImpares / contadorImpares : 0;
  
    console.log("La media de los números pares es: " + mediaPares);
    console.log("La media de los números impares es: " + mediaImpares);
  }
  
  // 32. Determinar la ciudad con mayor población (datos insuficientes)
  // Necesitaríamos una lista de ciudades y sus poblaciones para completar este algoritmo
  
  // 33. Permitir al usuario continuar con el programa
  function permitirContinuar() {
    let continuar;
  
    do {
      continuar = prompt("¿Desea continuar? (si/no):").toLowerCase();
      if (continuar === "si") {
        console.log("El usuario ha decidido continuar.");
        // Aquí puedes llamar a cualquier función para seguir con el programa
      } else if (continuar === "no") {
        console.log("El usuario ha decidido terminar.");
      } else {
        console.log("Respuesta no válida.");
      }
    } while (continuar !== "no");
  }

  // 34. Imprimir la tabla de multiplicar del 1 al 9
function imprimirTablasMultiplicar() {
    for (let i = 1; i <= 9; i++) {
      console.log("Tabla de multiplicar del " + i + ":");
      for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
      }
      console.log(""); // línea en blanco para separar las tablas
    }
  }
  
  // 35. Saber cuál es el número mayor y menor entre veinte números
  function mayorYMenorDeVeinte() {
    let numeros = [];
    for (let i = 0; i < 20; i++) {
      numeros.push(leerEntero("Ingrese un número:"));
    }
    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);
  
    console.log("El número mayor es: " + mayor);
    console.log("El número menor es: " + menor);
  }
  
  // 36. Calcular la serie de Fibonacci
  function serieFibonacci() {
    let n = leerEntero("Ingrese la cantidad de términos de la serie de Fibonacci:");
    let fib = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
  
    console.log("La serie de Fibonacci es: " + fib.join(", "));
  }
  
  // 37. Conseguir el M.C.D de un número por medio del algoritmo de Euclides
  function calcularMCD() {
    let a = leerEntero("Ingrese el primer número:");
    let b = leerEntero("Ingrese el segundo número:");
  
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
  
    console.log("El M.C.D es: " + a);
  }
  
  // 38. Saber si un número es perfecto
  function esNumeroPerfecto() {
    let numero = leerEntero("Ingrese un número:");
    let sumaDivisores = 0;
  
    for (let i = 1; i <= numero / 2; i++) {
      if (numero % i === 0) {
        sumaDivisores += i;
      }
    }
  
    if (sumaDivisores === numero) {
      console.log(numero + " es un número perfecto.");
    } else {
      console.log(numero + " no es un número perfecto.");
    }
  }
  
  // 39. Aproximación del número pi con la serie de Gregory-Leibniz
  function aproximarPiGregoryLeibniz() {
    let iteraciones = leerEntero("Ingrese el número de iteraciones:");
    let pi = 0;
  
    for (let i = 0; i < iteraciones; i++) {
      pi += (i % 2 === 0 ? 4 : -4) / (2 * i + 1);
    }
  
    console.log("La aproximación de Pi es: " + pi);
  }
  
  // 40. Aproximación del número pi con la serie de Nilakantha
  function aproximarPiNilakantha() {
    let iteraciones = leerEntero("Ingrese el número de iteraciones:");
    let pi = 3;
  
    for (let i = 1; i <= iteraciones; i++) {
      pi += (i % 2 === 0 ? -4 : 4) / (2 * i * (2 * i + 1) * (2 * i + 2));
    }
  
    console.log("La aproximación de Pi es: " + pi);
  }