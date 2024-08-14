/* 1. Hacer un algoritmo en JavaScript que lea un número por el teclado
      y determinar si tiene tres dígitos.*/
function ejercicio1() {
  try {
    // Pedimos el número al usuario
    let num = parseInt(prompt("Ingresa un número:"));
    // Verificamos que sea un número
    if (isNaN(num)) {
      throw new Error("Por favor, ingresa solo números");
    }
    // Verificamos si tiene tres dígitos
    if (num.toString().length === 3) {
      alert("El número tiene tres dígitos");
    } else {
      alert("El número no tiene tres dígitos");
    }
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }   
}
/* 2. Hacer un algoritmo en JavaScript que 
      lea un número entero por el teclado y determinar si es negativo.*/
function ejercicio2() {
  try {
    // Pedimos el número al usuario
    let Num = parseInt(prompt("Digita un numero"));
    if (isNaN(Num)) {
      throw new Error("Por favor, ingresa solo números");
    }
    if (Num<0) {
        alert("El numero es negativo");
      } else {
        alert("El numero es positivo");
      }
      } catch (error) {
        alert("OCURRIO UN ERROR: " + error.message);
      }
}
/* 3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.*/
function ejercicio3(){
  try {
    // Pedimos el número al usuario
    let numero = prompt("Ingresa un número:");
    // Verificamos que sea un número
    if (isNaN(numero)) {
      throw new Error("Por favor, ingresa solo números");
    }
    // Verificamos si el número termina en 4
    if (numero.toString().endsWith("4")) {
      alert("El número termina en 4");
    } else {
      alert("El número no termina en 4");
    }
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }  
}
/* 4. Hacer un algoritmo en JavaScript 
que lea tres números enteros y los muestre de menor a mayor.*/
function ejercicio4(){
  try {
    // Pedimos los números al usuario
    let num1 = parseInt(prompt("Ingresa el primer número:"));
    let num2 = parseInt(prompt("Ingresa el segundo número:"));
    let num3 = parseInt(prompt("Ingresa el tercer número:"));
    // Verificamos que sean números
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      throw new Error("Por favor, ingresa solo números");
    }
    // Los ordenamos de menor a mayor
    let numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
    // Los mostramos
    alert("Los números ordenados de menor a mayor son: " + numeros.join(", "));
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/* 5. Hacer un algoritmo en JavaScript para una tienda de zapatos 
que tiene una promoción de descuento para vender al mayor, 
esta dependerá del número de zapatos que se compren. Si son más de diez, 
se les dará un 10% de descuento sobre el total de la compra; 
si el número de zapatos es mayor de veinte pero menor de treinta, 
se le otorga un 20% de descuento; y si son más treinta zapatos 
se otorgará un 40% de descuento. El precio de cada zapato es de $80.*/
function ejercicio5(){
  try {
    // Pedimos los números al usuario
    let cantidadZapatos = parseInt(prompt("Ingresa la cantidad de zapatos:"));
    // Verificamos que sean números
    if (isNaN(cantidadZapatos) || cantidadZapatos <= 0) {
      throw new Error("Por favor, ingresa una cantidad válida de zapatos");
    }
      // Precios y descuentos
      let precioZapato = 80;
      let descuento = 0;
      let totalCompra = cantidadZapatos * precioZapato;
      if(cantidadZapatos > 10 && cantidadZapatos<= 20){
        descuento = totalCompra * 0.10;
        }else if(cantidadZapatos > 20 && cantidadZapatos < 30){
          descuento = totalCompra * 0.20;
        }else if(cantidadZapatos >= 30){
            descuento = totalCompra * 0.40;  
          }
          alert(`La cantidad de zapatos es: ${cantidadZapatos} 
            \nTotal de la compra: ${totalCompra} 
            \nDescuento: ${descuento} 
            \n====================
            \nTOTAL A PAGAR: ${totalCompra-descuento}`);
        } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, 
se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.*/
function ejercicio6(){
  try {
    // Pedimos los números al usuario
    let horasTrabajo = parseInt(prompt("Ingresa la cantidad de horas trabajadas:"));
    // Verificamos que sean números
    if (isNaN(horasTrabajo) || horasTrabajo <= 0) {
      throw new Error("Por favor, ingresa una cantidad válida");
    }
      // Precios y descuentos
      let sueldoBase = 20;
      let sueldoExtra = 25;
      let sueldoTotal = 0;
      if(horasTrabajo <= 40){
          sueldoTotal = horasTrabajo * sueldoBase;
        }else {
          sueldoTotal = (40 * sueldoBase) + ((horasTrabajo - 40)*sueldoExtra)
        }
          alert(`El suedo semanal es: ${sueldoTotal}`);
        } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra 
a sus clientes con membresía dependiendo de su tipo, 
sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. 
Los descuentos son los siguientes:
   Tipo A 10% de descuento
   Tipo B 15% de descuento
   Tipo C 20% de descuento*/
function ejercicio7(){
    try {
      let descuento = 0;
      let precioDesc = 0;
      let tipoMembresia = prompt("Ingresa el tipo de menbresia (A,B,C)");
      let precio = parseFloat(prompt("Ingresa el precio del helado")); 
      if (isNaN(tipoMembresia) && isNaN(precio)) {
        throw new Error("Por favor, ingresa una cantidad válida");
      }
      let Membresia = tipoMembresia.toLocaleUpperCase();
      switch (Membresia) {
        case "A":
           descuento = precio * 0.10
          break;
        case "B":
          descuento = precio * 0.15
          break;
        case "C":
          descuento = precio * 0.20
          break;
        default:
          alert("Tipo de menbresia no valido");
          precio = 0;
          precioDesc = 0;
          break;
      }
       precioDesc = precio - descuento;
      alert(`Precio original: ${precio}
             \nDescuento: ${descuento}
             \nPrecio con descuento: ${precioDesc}`);
    } catch (error) {
      // Manejamos el error
      alert("OCURRIO UN ERROR: " + error.message);
    }
   }
   /*8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas 
   y determinar si el estudiante aprob� o no.*/
   function ejercicio8(){
    try {
      let nota1, nota2,nota3, promedio;
      nota1 = parseFloat(prompt("Ingrese primera nota"));
      nota2 = parseFloat(prompt("Ingrese segunda nota"));
      nota3 = parseFloat(prompt("Ingrese tercera nota"));
      if(isNaN(nota1) && isNaN(nota1) && isNaN(nota1)){
        throw new Error("Por favor, ingresa solo números");
      }
      promedio = (nota1 + nota2 + nota3)/3;
      if(promedio>= 12.5){
        alert(`El alumno esta aprobado, su promedio es: ${promedio}`);
      }
      else{
        alert(`El alumno esta desaprobado, su promedio es: ${promedio}`);
      }
    } catch (error) {
      // Manejamos el error
      alert("OCURRIO UN ERROR: " + error.message);
    }
   }
/*9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en
     cuenta que si ganaba m�s de $2000 tendr� un aumento del 5%, si generaba menos de $2000
     su aumento ser� de un 10%.*/
     function ejercicio9() {
      try {
        let sueldo, aumento, sueldoNuevo;
        sueldo = parseFloat(prompt("Ingrese sueldo del trabajador"));
        if(isNaN(sueldo)){
          throw new Error("Por favor, ingresa solo números");
        }
        if(sueldo > 2000){
          aumento = sueldo * 0.05;
        } else {
          aumento = sueldo * 0.10;
        }
        sueldoNuevo = sueldo +aumento;
        alert(`Sueldo actual : ${sueldo}
              \nAumento : ${aumento}
              \nSueldo Nuevo: ${sueldoNuevo}`);
      } catch (error) {
        // Manejamos el error
        alert("OCURRIO UN ERROR: " + error.message);
      }
     }
/*10. Hacer un algoritmo en JavaScript que diga si un n�mero es par o impar.*/
     function ejercicio10() {
      try {
        let num = parseInt(prompt("Ingrese un numero: "));
        if(isNaN(num)) {
          throw new Error("Por favor, ingresa solo numeros");
        }
        if(num%2===0){
          alert(`El numero: ${num} es par`);
        }else{
          alert(`El numero: ${num} es impar`);
        }
      } catch (error) {
        // Manejamos el error
        alert("OCURRIO UN ERROR: " + error.message);
      }
     }
/*11. Hacer un algoritmo en JavaScript que lea tres n�meros y diga cu�l es el mayor.*/
     function ejercicio11() {
      try {
          // Pedimos los números al usuario
          let mayor;
          let num1 = parseInt(prompt("Ingresa el primer número:"));
          let num2 = parseInt(prompt("Ingresa el segundo número:"));
          let num3 = parseInt(prompt("Ingresa el tercer número:"));
          // Verificamos que sean números
          if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            throw new Error("Por favor, ingresa solo números");
          }
          if(num1 > num2 && num1 > num3){
            mayor = num1;
          }else if(num2 > num1 && num2 > num3){
            mayor  = num2;
          }else{
            mayor = num3;
          }
          alert(`El numero mayor es: ${mayor}`);
      } catch (error) {
        // Manejamos el error
        alert("OCURRIO UN ERROR: " + error.message);
      }
     }
/*12. Hacer un algoritmo en JavaScript que lea dos n�meros y diga cu�l es el mayor.*/
     function ejercicio12(){
      try {
        // Pedimos los números al usuario
        let num1 = parseInt(prompt("Ingresa el primer número:"));
        let num2 = parseInt(prompt("Ingresa el segundo número:"));
        // Verificamos que sean números
        if (isNaN(num1) || isNaN(num2)) {
          throw new Error("Por favor, ingresa solo números");
        }
        if(num1 > num2 ){
          alert(`${num1} es mayor que: ${num2}`);
        }else{
          alert(`${num2} es mayor que: ${num1}`);
        }
    } catch (error) {
      // Manejamos el error
      alert("OCURRIO UN ERROR: " + error.message);
    }
   }
/*13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.*/
   function ejercicio13() {
    try {
      let Vocal = prompt("Ingrese una letra");
      if (isNaN(Vocal) || isNaN(Vocal)===' ') {
        throw new Error("Por favor, ingresa un valor");
      }else{
      switch (Vocal) {
        case "A":
           alert("Es una vocal");
          break;
        case "E":
          alert("Es una vocal");
          break;
        case "I":
          alert("Es una vocal");
          break;
        case "O":
          alert("Es una vocal");
          break;
        case "U":
          alert("Es una vocal");
          break;
        case "a":
          alert("Es una vocal");
          break;
        case "e":
          alert("Es una vocal");
          break;
        case "i":
          alert("Es una vocal");
          break;
        case "o":
          alert("Es una vocal");
          break;
        case "u":
          alert("Es una vocal");
          break;
        default:
          alert("no es una vocal"); 
      }
    }
    } catch (error) {
      // Manejamos el error
      alert("OCURRIO UN ERROR: " + error.message);
    }
   }
/*14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y al 9 y determine si es un n�mero primo.*/
function ejercicio14(){
  try {
    let num, esPrimo;
    num = parseInt(prompt("Ingrese un numero positivo del 1 al 10"));
    if(isNaN(num)){
      throw new Error("Por favor, ingresa solo números");
    }
    if(num <1 || num > 10){
      alert("Numero fuera de rango");
    }
    else { 
      esPrimo= true;
      for (var i = 2; i < num-1; i++) {
        
        if(num%i==0){
          esPrimo = false;
        }
      }
      if(esPrimo){
        alert(`${num}, es un numero primo`);
      }else{
        alert(`${num}, no es un numero primo`);
      }
    }
  } catch (error) {
     // Manejamos el error
     alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*15. Hacer un algoritmo en JavaScript que convierta cent�metros a pulgadas y libras a kilogramos.*/
 function ejercicio15(){
  try {
    let cm, pulg, lib, kg;
    cm = parseFloat(prompt("Ingresar cantidad de centimetros"));
    lib = parseFloat(prompt("Ingresar cantidad de libras"));
    if(isNaN(cm) || isNaN(lib)){
      throw new Error("Por favor, ingresa solo números");
    }
    pulg = cm / 2.54;
	  kg = lib * 0.453592;
    alert(`${cm} cm. son ${pulg} pulg.
          \n${lib} lib. son ${kg} kg.`);
  } catch (error) {
      // Manejamos el error
     alert("OCURRIO UN ERROR: " + error.message);
  }
 }
 /*16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.*/
 function ejercicio16(){
  try {
    let num;
    num = parseInt(prompt("Ingrese sun numero"));
    if(isNaN(num)){
      throw new Error("Por favor, ingresa solo números");
    }else{
      switch (num) {
        case 1:
           alert("Lunes");
          break;
        case 2:
          alert("Martes");
          break;
        case 3:
          alert("Miercoles");
          break;
        case 4:
          alert("Jueves");
          break;
        case 5:
          alert("Viernes");
          break;
        case 6:
          alert("Sabado");
          break;
        case 7:
          alert("Domingo");
          break;
        default:
          alert("Numero no valido");   
      }
    }
  } catch (error) {
      // Manejamos el error
     alert("OCURRIO UN ERROR: " + error.message);
  }
 }
/*17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.*/
function ejercicio17(){
  try {
    let h,m,s;
    h = parseInt(prompt("Ingrese Hora"));
    m = parseInt(prompt("Ingrese Minutos"));
    s = parseInt(prompt("Ingrese Segundos"));
    if(isNaN(h)||isNaN(m)||isNaN(s)){
      throw new Error("Por favor, ingresa solo numeros");
    }
    s=s+1;
    if(s>=60){
      s=0;
      m=m+1;
      if(m>=60){
        m=0;
        h=h+1;
        if(h>=24){
          h=0
        }
      }
    }
    alert(`La hora de un segundo es: ${h}:${m}:${s}`);
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y
      distribuci�n de CD v�rgenes. Los clientes pueden adquirir los art�culos
      (supongamos un �nico producto de una �nica marca) por cantidad. Los precios son:
      $10. Si se compran unidades separadas hasta 9.
      $8. Si se compran entre 10 unidades hasta 99.
      $7. Entre 100 y 499 unidades.
      $6. Para mas de 500 unidades.
      La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un 
      n�mero de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.*/
function ejercicio18(){
  try {
    let cantidad, precioUnitario = 0, precioTotal = 0, gananciaVendedor = 0;
    cantidad = parseInt(prompt("Ingresar cantidad: "));
    if(isNaN(cantidad)){
      throw new Error("Por favor ingresa solo numeros");
    }
    if(cantidad < 10){
      precioUnitario = 10;
    }else if(cantidad >= 10 && cantidad <= 99){
      precioUnitario = 8;
    }else if(cantidad >= 100 && cantidad <= 499){
      precioUnitario = 7;
    }else{
      precioUnitario = 6;
    }
    precioTotal = cantidad * precioUnitario;
    gananciaVendedor = precioTotal * 0.0825;
    alert(`Precio total para el cliente: $${precioTotal}
          \nGanancia para el vendedor: $${gananciaVendedor}`);
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de 
      empleados ordenados de la siguiente forma con su número identificador y 
      salario diario correspondiente:
      Cajero (56$/día).
      Servidor (64$/día).
      Preparador de mezclas (80$/día)
      Mantenimiento (48$/día).
      El dueño de la tienda desea tener un programa donde sólo ingrese dos números 
      enteros que representen al número identificador del empleado y 
      la cantidad de días que trabajó en la semana (6 días máximos). 
      Y el programa le mostrará por pantalla la cantidad de dinero que 
      el dueño le debe pagar al empleado que ingresó.*/
function ejercicio19(){
  try {
    let idEmpl, diasTrabajados = 0, pagoSemanal, cargo;
    idEmpl = parseInt(prompt("Digitar 1: Cajero, 2: Servidor, 3: Preparador de Mezclas, 4: Mantenimiento"));
    diasTrabajados = parseInt(prompt("Ingresa cantidad de Dias Trabajados"));
    if(isNaN(idEmpl)&&isNaN(diasTrabajados)){
      throw new Error("Por favor ingresa solo numeros");
    }
    switch (idEmpl) {
        case 1:
        pagoSemanal = 56 * diasTrabajados;
        cargo = "Cajero";
        break;
        case 2:
        pagoSemanal = 64 * diasTrabajados;
        cargo = "Servidor";
        break;
        case 3:
        pagoSemanal = 80 * diasTrabajados;
        cargo = "Preparador de Mezclas";
        break;
        case 4:
        pagoSemanal = 48 * diasTrabajados;
        cargo = "Mantenimiento";
        break;
      default:
        alert("Numero de identificador no valido");
        break;
    }
    if(diasTrabajados > 6){
      alert("Numero de dias trabajados no valido (maximo 6 dias)");
    }else{
      alert(`El cargo del empleado es: ${cargo}
            \nPago semanal: ${pagoSemanal}`);
    }
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*20. Hacer un algoritmo en JavaScript que que lea 4 números enteros
      positivos y verifique y realice las siguientes operaciones:
      ¿Cuántos números son Pares?
      ¿Cuál es el mayor de todos?
      Si el tercero es par, calcular el cuadrado del segundo.
      Si el primero es menor que el cuarto, calcular la media de los 4 números.
      Si el segundo es mayor que el tercero, verificar si el tercero 
      esta comprendido entre los valores 50 y 700. Si cumple se cumple 
      la segunda condición, calcular la suma de los 4 números.*/
function ejercicio20(){
  try {
    let num1, num2, num3, num4, pares = 0, mayor = 0, cuadrado = 0, suma = 0, media = 0;
    num1 = parseInt(prompt("Ingresa primer numero"));
    num2 = parseInt(prompt("Ingresa segundo numero"));
    num3 = parseInt(prompt("Ingresa tercer numero"));
    num4 = parseInt(prompt("Ingresa cuarto numero"));
    if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)){
      throw new Error("Ingresa valor correcto");
    }
    if(num1 % 2 === 0){
      pares = pares +1;
    }
    if(num2 % 2 === 0){
      pares = pares +1
    }
    if(num3 % 2 === 0){
      pares = pares +1
    }
    if(num4 % 2 === 0){
      pares = pares +1
    }
    if(num1 >= num2 && num1 >= num3 && num1 >= num4){
      mayor = num1;
    }else if(num2 >= num1 && num2 >= num3 && num2 >= num4){
      mayor = num2;
    }else if(num3 >= num1 && num3 >= num2 && num3 >= num4){
      mayor = num3;
    }else{
      mayor = num4;
    }
    if(num3 % 2 === 0){
      cuadrado = num2 * num2;
    }
    if(num1 < num4){
      media = (num1+num2+num3+num4) / 4;
    }
    if(num2 > num3){
      if(num3 >= 50 && num3 <= 700){
        suma = num1 + num2 + num3 + num4; 
      }
    }
    alert(`NUMEROS PARES: ${pares}
          \nMAYOR: ${mayor}
          \nCUADRADO DEL SEGUNDO: ${cuadrado}
          \nMEDIA: ${media}
          \nSUMA: ${suma}`);
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.*/
function ejercicio21(){
  try {
    let num, factorial;
    num = parseInt(prompt("Ingresa numero para calcular factorial"));
    if(isNaN(num)){
      throw new Error("por favor, ingresa un numero");
    }
    factorial = 1;
    for (var i = 1; i <= num; i++) {
      factorial = factorial * i; 
    }
    alert(`el factorial de ${num} es: ${factorial}`);
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.*/
function ejercicio22(){
  try {
    let num, suma = 0;
    num = parseInt(prompt("Ingresar numero"));
    if(isNaN(num)){
      throw new Error("por favor, ingresa un numero");
    }
    for (var i = 1; i <= num; i++){
      suma = suma + i;
    }
    alert(`La suma de los primeros ${num} numeros es: ${suma}`);
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.*/
function ejercicio23(){
  try {
    let num, suma = 0;
    num = parseInt(prompt("Ingresa numero"));
    if(isNaN(num)){
      throw new Error("por favor, ingresa un numero");
    }
    for (var i = 1; i <= num; i+=2) {
      suma = suma + i;
    }
    alert(`La suma de los numeros impares menores o iguales a ${num} es ${suma}`);
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.*/
function ejercicio24(){
  try {
    let suma = 0;
    for (var i = 2; i <= 1000; i+=2){
      suma = suma + i;
    }
    alert(`La suma de todos los numeros pares hasta 1000 es ${suma}`);
  } catch (error) {
    
  }
}
/*25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.*/
function ejercicio25(){
  try {
    let num, factorial, contador;
    num = parseInt(prompt("Ingresa numero"));
    if(isNaN(num)){
      throw new Error("por favor, ingresa un numero");
    }
    factorial = 1;
    contador = 1;
    while (contador <= num) {
      factorial = factorial * contador;
      contador = contador + 1;
    }
    alert(`El factorial de ${num} es ${factorial}`);
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.*/
function ejercicio26(){
  try {
    let dividendo, divisor, cociente, resto;
    dividendo = parseInt(prompt("Ingresar primer numero"));
    divisor = parseInt(prompt("Ingresa segundo numero"));
    if(isNaN(dividendo) || isNaN(divisor)){
      throw new Error("por favor, ingresa un numero");
    }
    cociente = 0;
    resto = dividendo;
    while(resto >= divisor){
      resto = resto - divisor;
      cociente = cociente + 1;
    }
    alert(`Cociente: ${cociente}
          \nResto: ${resto}`);
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*27. Hacer un algoritmo en JavaScript para determinar la 
      media de una lista indefinida de números positivos, se debe 
      acabar el programa al ingresar un número negativo.*/
function ejercicio27(){
  try {
    let suma = 0, cantNum = 0, num;
    num = parseInt(prompt("Ingresa numeros positivos"));
    if(isNaN(num)){
      throw new Error("por favor, ingresa un numero");
    }
    while(num>=0){
      suma = suma + num;
      cantNum = cantNum + 1;
      num = prompt("Ingrese otro numero");
    }
    if(cantNum > 0){
      alert(`La media de los numeros es, ${suma/cantNum}`);
    }else{
      alert("No se ingresaron numeros positivos");
    }
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.*/
function ejercicio28(){
  try {
    let suma = 0, contador = 1;
    do {
      suma += contador;
      contador++;
    } while (contador <= 100);
    alert(`La suma de los primeros cien numeros es: ${suma}`);
    } catch (error) {
  }
}
/*29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.*/
function ejercicio29(){
  let suma = 0, contador = 1;
  while (contador <=100) {
    suma += contador;
    contador++;
  }
  alert(`La suma de los cien primeros numeros es ${suma}`);
}
/*30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.*/
function ejercicio30(){
  let suma = 0;
  for (var i = 1; i <= 100; i++){
    suma = suma + i;
  }
  alert(`La suma de los cien primeros numeros es ${suma}`);
}
/*31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.*/
function ejercicio31(){
  try {
    let num, sumPares = 0, sumImpares = 0, contPares = 0, contImpares = 0, mediaPares, mediaImpares;
    
    for (var i = 1; i <= 10; i++){
      num = parseInt(prompt("Ingrese un numero"));
      if(isNaN(num)){
        throw new Error("por favor, ingresa un numero");
      }else if(num % 2 === 0 ){
        sumPares = sumPares + num;
        contPares = contPares + 1;
      }else{
        sumImpares = sumImpares + num;
        contImpares = contImpares + 1;
      }
    }
    if(contPares > 0){
      mediaPares = sumPares / contPares;
      alert(`La media de los numeros pares es: ${mediaPares}`);
    }else{
      alert("No se ingresaron numeros pares");
    }
    if(contImpares > 0){
      mediaImpares = sumImpares / contImpares;
      alert(`La media de los numeros impares es: ${mediaImpares}`);
    }else{
      alert("No se ingresaron numeros impares");
    }
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)*/
function ejercicio32(){
  alert("No hay datos suficientes para determinar la ciudad con mayor poblacion.");
}
/*33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.*/
function ejercicio33(){
  try {
    let respuesta = prompt("¿Desea continuar con el programa? (si/no)");
    while (respuesta.toLowerCase() === "si") {
    // Código a ejecutar si el usuario decide continuar
    alert("Continuando con el programa...");
    // Preguntar de nuevo al usuario si desea continuar
    respuesta = prompt("¿Desea continuar con el programa? (si/no)");
}

alert("Fin del programa.");
   
  } catch (error) {
     // Manejamos el error
     alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.*/
function ejercicio34(){
  for (let i = 1; i <= 9; i++) {
    console.log(`Tabla de multiplicar del ${i}:`);
    for (let j = 1; j <= 12; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("--------------------");
  }
}
/*35. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.*/
function ejercicio35(){
  try{
  let num, mayor, menor;
  num = parseInt(prompt("Ingrese el numero 1"));
  mayor = num;
  menor = num;
  if(isNaN(num)){
    throw new Error("por favor, ingresa un numero");
  }
  for(var i = 2; i <= 20; i++){
    num = parseInt(prompt(`Ingrese el numero ${i}`));
    if(isNaN(num)){
      throw new Error("por favor, ingresa un numero");
    }else if(num > mayor){
      mayor = num;
    }else if(num < menor){
      menor = num;
    }
  }
  alert(`El numero mayor es: ${mayor}
        \nEl numero menor es: ${menor}`);
} catch (error){
  // Manejamos el error
  alert("OCURRIO UN ERROR: " + error.message);
}
}
/*36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.*/
function ejercicio36() {
  try {
    let num = prompt("Ingrese un número para calcular la serie de Fibonacci:");
    let a = 0;
    let b = 1;
    let resultado = "";
    if(isNaN(num)){
      throw new Error("por favor, ingresa un numero");
    }
    for (let i = 0; i < num; i++) {
      resultado += a + " ";
      let temporal = a;
      a = b;
      b = temporal + b;
    }

    alert("La serie de Fibonacci es: " + resultado);
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.*/
function ejercicio37(){
  try {
    let num1, num2, resto;
    num1 = parseInt(prompt("Ingresar el primer numero"));
    num2 = parseInt(prompt("Ingresar el segundo numero"));
    if(isNaN(num1) || isNaN(num2)){
      throw new Error("por favor, ingresa un numero");
    }
    while (num2 !== 0) {
      resto = num1 % num2
      num1 = num2;
      num2 = resto
    }
    alert(`El MCD es: ${num1}`);
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.*/
function ejercicio38(){
  try {
    let num, suma = 0;
    num = parseInt(prompt("Ingrese un numero"));
    if(isNaN(num)){
      throw new Error("por favor, ingresa un numero");
    }else{
    for (var i = 1; i < num; i++){
      if (num % i === 0){
        suma += i;
      }
    }
    
    if(suma === num){
      alert(`El numero ${num}, es perfecto `);
    }else{
      alert(`El numero ${num}, no es perfecto`);
    }
  }
  } catch (error) {
    // Manejamos el error
    alert("OCURRIO UN ERROR: " + error.message);
  }
}
/*39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

    Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...*/
    function ejercicio39(){
      try {
        let aproxPi = 0, denominador,signo= 1;
        for (var i = 1; i <= 100000; i++){
          denominador = (i * 2) - 1;
          aproxPi = aproxPi + signo * (4/denominador);
          signo = signo * (-1);
        }
        alert(`El valor aprox. de PI es: ${aproxPi}`);
      } catch (error) {
        
      }
    }
/*40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
        Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...*/
function ejercicio40(){
  try {
    let aproxPi = 3, signo = 1;
    for (var i = 2; i <= 100000; i+=2){
      aproxPi = aproxPi + signo * (4/(i * (i + 1) * (i +2)));
      signo = signo * (-1);
    }
    alert(`El valor aprox. de PI es: ${aproxPi}`);
  } catch (error) {
    
  }
}