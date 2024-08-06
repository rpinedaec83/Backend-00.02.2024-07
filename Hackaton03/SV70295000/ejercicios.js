//<-----Ejercicio1----->\\
// Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
function ejercicio01(){

    let input = prompt("Ingrese un numero de 3 cifras");
    let numero = parseInt(input);
     if(isNaN(numero)){
        alert("El dato ingresado no es un numero");

    }else{
        if(numero > 99 && numero<= 999){
            alert("El numero ingresado cumple con la regla");
        
    }else{
        alert("El numero ingresado no tiene 3 cifras");
    }
}
}


//<-----Ejercicio2----->\\
 // Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function ejercicio02() {
   
   let input = prompt("ingrese un numero");
   let numero = parseInt(input);

   if (isNaN(numero)){
    alert("Por favor, ingrese un numero valido");

   }else{
    if(numero<0){
        alert("El numero es negativo");
    }else{
        alert("El numero es positivo");
    }
   }

}


//<-----Ejercicio3----->\\
//Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
function ejercicio03(){
    let input = prompt("Ingrese un numero");
    let numero = parseInt(input);
    if(isNaN(numero) || input === "" ){
        alert("El dato ingresado no es un numero") 

    }else{
        if(input.endsWith("4")){
            alert("El numero ingresado acaba en 4")
        }else{
            alert("El numero ingresado no acaba en 4")
        }
    }
}


//<-----Ejercicio4----->\\
//Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
function ejercicio04(){

    let input1 = prompt("Ingrese el primero numero");
    let input2 = prompt("Ingrese el segundo numero");
    let input3 = prompt("Ingrese el tercer numero");

    let numero1 = parseInt(input1);
    let numero2 = parseInt(input2);
    let numero3 = parseInt(input3);
    if(isNaN(numero1), isNaN(numero2), isNaN(numero3)){
        alert("ingrese los datos validos");
    }else{
        let numeros = [numero1, numero2, numero3];
        numeros.sort((a,b) => a - b);
        alert("Los numero ordenados de menor a mayor son: " + numeros.join(" , "))

    }
    }


//<-----Ejercicio5----->\\
    //Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
    function ejercicio05(){
        
        let input = prompt("Ingrese la cantidad de zapatos a comprar");
        let cantidad = parseInt(input);
        
        const precio_zapatos = 80;

        if(isNaN(cantidad), cantidad <= 0){
            alert("Ingrese una dato valido")
            let descuento = 0
        }else{
            if(cantidad > 10){
                descuento = 0.10;
            }else if(cantidad > 20){
                descuento = 0.20;
            }else if(cantidad > 30){
                descuento = 0.40
            }
             let precioSinDescuento = cantidad * precio_zapatos;
             let precioConDescuento = precioSinDescuento * (1 - descuento);

             alert("El precio final a pagar es: " + precioConDescuento.toFixed(2))

        }
    }



    //<-----Ejercicio6----->\\
    //Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

function ejercicio06(){

    let input = prompt("Ingrese la cantidad de horas laboradas: ")
    let horas = parseInt(input);
    if (isNaN(horas)){
    alert("Ingrese un dato valido")
    }else{
        let pago = 0
        if (horas < 40) {
            pago = horas * 20
            alert("Su sueldo sera de:$ " + pago)
        }else if (horas > 40){
            pago = (horas - 40) * 25 + 800
            alert("Su pago sera de:$ " + pago)
        }

    }
}


//<-----Ejercicio7----->\\
//Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento.//

function ejercicio07(){

    const precio_Helado = parseFloat(prompt("Ingrese el precio del helado a comprar"));
    if(isNaN(precio_Helado) || precio_Helado <= 0){
        alert("Ingrese un precio valido");
        return;
    }

        const tipo_Membresia = prompt("Ingrese el tipo de membresia (A, B o C)").toUpperCase();
        let descuento = 0

    switch(tipo_Membresia){
        case "A":
            descuento = 0.10;
            break;
        case "B":
            descuento = 0.15;
            break;
        case "C":
            descuento = 0.20;
            break;
        default:
            alert("Tipo de membresia no valido");
        return;                    
    }
    const precio_Final = precio_Helado * (1 - descuento);
alert("El precio final del helado sera de: $" + precio_Final.toFixed(2))

}



//<-----Ejercicio8----->\\
//Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.

function ejercicio08(){
    let nota1 = parseFloat(prompt("Ingrese la primera nota"));
    let nota2 = parseFloat(prompt("Ingrese la segundaa nota"));
    let nota3 = parseFloat(prompt("Ingrese la tercera nota"));
    let media = 0

    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota2 < 0 || nota3 < 0){
        alert("Ingrese notas validas")
    }else {
        let media = (nota1 + nota2 + nota3) / 3;
        if(media > 12){
            alert("El promedio de las notas es: " + media + " el estudiante aprobo")
        }else{
            alert("El promedio es menor a 12, el estudiante desaprobo")
        }
    }
}


//<-----Ejercicio9----->\\
//Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.

function ejercicio09(){

     let sueldo = parseFloat(prompt("Ingrese su sueldo"));
     
     if(isNaN(sueldo) || sueldo <= 0){
        alert("Ingrese un monto valido");
     }else{
        let porcentaje = 0;
        let sueldoFinal = 0;
        if(sueldo > 2000){
            porcentaje = 0.05
            sueldoFinal = sueldo + (sueldo*porcentaje)
            alert("Su sueldo con el aumento sera de: $" + sueldoFinal)
            
    }else 
    if(sueldo <= 2000){
                porcentaje = 0.10
                sueldoFinal = sueldo + (sueldo*porcentaje)
                alert("Su sueldo con el aumento sera de: $" + sueldoFinal)
     
            }
       }
   }    
     
    

   //<-----Ejercicio10----->\\
   //Hacer un algoritmo en JavaScript que diga si un número es par o impar.

function ejercicio10(){

    let numero = parseInt(prompt("Ingrese un numero para verificar si es par o no"));

    if(isNaN(numero) && numero % 1 !== 0){
        alert("Ingresa un dato valido")
    }else if(numero % 2 === 0){
        alert("El numero ingresado es par");

    }else{
     alert("El numero ingresado no es par")

    }
}



//<-----Ejercicio11----->\\
//Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.

function ejercicio11(){

    let num1 = parseFloat(prompt("Ingrese el primer numero"));
    let num2 = parseFloat(prompt("Ingrese el segundo numero"));
    let num3 = parseFloat(prompt("Ingrese el tercer numero"));
    
    if(isNaN(num1), isNaN(num2), isNaN(num3)){
        alert("Ingrese numeros validos");
    }else{
        if(num1 > num2 && num1 > num3){
        alert("El numero mayor es: " + num1);
        }else if(num2 > num1 && num2 > num3){
            alert ("El numero mayor es: " + num2);
        }else{
        alert("El numero mayor es: " + num3);
        
    }
 }
}


 
//<-----Ejercicio12----->\\
//Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.

function ejercicio12(){

    let num1 = parseFloat(prompt("Ingrese el primer numero"));
    let num2 = parseFloat(prompt("Ingrese el segundo numero"));
    
    if(isNaN(num1), isNaN(num2)){
        alert("Ingrese numeros validos");
    }else{
        if(num1 > num2){
        alert("El numero mayor es: " + num1);
 }else{
    alert("El numero mayor es: " + num2)
}
}
}


//<-----Ejercicio13----->\\
//Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.

function ejercicio13(){
    
    let vocal = prompt("Ingrese una letra").toUpperCase();

    if((vocal === "A") || (vocal === "E") || (vocal === "I") || (vocal === "O") || (vocal === "U")){
        alert("La letra ingresada es una vocal")
    }else {
        alert("La letra ingresada es una consonante o un numero")
    }
}



//<-----Ejercicio14----->\\
//Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y determine si es un número primo.

function ejercicio14(){

    let primo = parseInt(prompt("Ingrese un numero para ver si es primo o no"))
    
    if(isNaN(primo) || (primo <= 1)){
        alert("Ingrese un dato valido");
        return false;
    }
    for(let i = 2; i <= primo; i++){
        if(primo % i === 0){
        alert("El numero ingresado es primo");
        }else{
            alert("El numero ingresado no es primo");
        }   
    }
}
    

//<-----Ejercicio15----->\\
//Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.

function ejercicio15(){

    let valor = parseFloat(prompt("Ingrese el dato que desea convertir"));
    let tipo_Medida = prompt("Ingrese el tipo de medida a la que desea convertir Centimetros a pulgadas (C) o  Libras a Kilos (K)").toUpperCase();
    let resultado = 0

    if(isNaN(valor) || valor == 0){
        alert("Ingrese una cifra valida")
    }else 

    if(tipo_Medida == "C"){
        resultado = valor / 2.54;
        alert("El resultado de la conversion es: " + resultado + " pulgadas");
    }else 
    if(tipo_Medida == "K"){
        resultado = valor * 0.453592;
        alert("El resultado de la conversion es: " + resultado + " Kilos");
    } 
}



//<-----Ejercicio16----->\\
//Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.

function ejercicio16(){

    let numero = parseInt(prompt("Ingrese un numero del 1 al 7 para verificar que dia de la semana le corresponde"));
    if(isNaN(numero) || numero < 1 || numero > 7){
        alert("Ingrese un numero valido")
    }else {
    let dia 
    switch (numero) {
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miércoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sábado";
            break;
        case 7:
            dia = "Domingo";
            break;
    }
    alert("El dia que corresponde es: " + dia)
}
}



//<-----Ejercicio17----->\\
//Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.

function ejercicio17(){

    let seg = parseInt(prompt("Ingrese los segundos"));
    let min = parseInt(prompt("Ingrese los minutos"));
    let horas = parseInt(prompt("Ingrese las horas"));

    if(isNaN(seg) || isNaN(min) || isNaN(horas)){
        alert("Ingrese datos validos")
    }else{
    let apm;
    let hora_Final = seg + 1;
    if (hora_Final >= 60){
        hora_Final = 0;
        min = min + 1;
    }
    if (min >= 60){
        min = 0;
        horas = horas + 1
    }
    if(horas >= 23){
        horas = 0
    }
    if(horas >=13){
        apm = "PM";
    }else
        apm = "AM"
    alert("La hora luego de 1 segundo sera: " + horas + " :" + min + " :" + hora_Final + " " + apm)
}  
}



//<-----Ejercicio18----->\\
//Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son:
//$10. Si se compran unidades separadas hasta 9.
//$8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
//$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.


function ejercicio18(){

    let cantidad = parseInt(prompt("Ingrese la cantidad de discos a comprar"));
    let precio = 0;

    if(isNaN(cantidad) || cantidad <= 0){
        alert("Ingrese una cantidad valida")
    }else{
    let ganancia = 0;
    if(cantidad <= 9){
        precio = cantidad * 10;
    }else if(cantidad <=99){
        precio = cantidad * 8;
        }else if(cantidad >= 499){
            precio = cantidad * 7;
            }else if(cantidad >= 500){
                precio = cantidad * 6
               }
    }   
    ganancia = precio * (0.25)
    alert("El precio total de los discos sera de: $" + precio + " y la ganancia del vendedor sera de: $" + ganancia )
}



//<-----Ejercicio19----->\\
//Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

function ejercicio19(){

    let dias_Trabajados = parseInt(prompt("Ingrese la cantidad de dias trabajados (solo dias completos)"))
    let identificador = parseInt(prompt("Ingrese el identificador del trabajador: Cajero :1, Servidor:2, Preparador de mezclas:3, Mantenimiento:4"));
    let salario_Diario = 0;

    if(isNaN(identificador) || identificador <= 0 || identificador >= 5){
        alert("Ingrese un codiggo identificador valido");
    }else 
    if(identificador = 1){
        salario_Diario = dias_Trabajados * 56
    }
    if(identificador = 2){
        salario_Diario = dias_Trabajados * 64
    }
    if(identificador = 3){
        salario_Diario = dias_Trabajados * 80
    }
    if(identificador = 4){
        salario_Diario = dias_Trabajados * 48
    }
    
    alert("El pago correspondiente es: $" + salario_Diario)
}



//<-----Ejercicio20----->\\
//Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:

//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.

function ejercicio20(){
    
    let num1 = parseInt(prompt("Ingrese el primero numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    let num3 = parseInt(prompt("Ingrese el tercer numero"));
    let num4 = parseInt(prompt("Ingrese el cuarto numero"));
    let pares = 0;
    let cuadrado = 0;
    let suma = 0;
    let media = 0;

    if(isNaN(num1) || isNaN(num2) || isNaN(num3)|| isNaN(num4) || num1 <= 0 || num2 <= 0 || num3 <= 0 || num4 <= 0){
        alert("Los datos ingresados no son validos");
         }else 
         if(num1 % 2 === 0){
            pares = pares + 1
         }
         if(num2 % 2 === 0){
            pares = pares + 1
         }
         if(num3 % 2 === 0){
            pares = pares + 1
         }
         if(num4 % 2 === 0){
            pares = pares + 1
         }
         
            if(num1 > num2 && num1 > num3 && num1 > num4){
                num_Mayor = num1;
            }else
            if(num2 > num1 && num2 > num3 && num2 > num4){
                num_Mayor = num2;
            }else
            if(num3 > num1 && num3 > num2 && num3 > num4){
                num_Mayor = num3;
            }else
            if(num4 > num1 && num4 > num2 && num4 > num3){
                num_Mayor = num4;
            }

        if(num3 % 2 === 0){
            cuadrado = num2 * num2
        }

        if(num1 < num4){
            media = (num1 + num2 + num3 + num4) / 4
        }

        if(num2 > num3 && num3 >= 50 && num3 <= 700){
            suma =num1 + num2 + num3 + num4
        } 
        alert("La cantidad de numeros pares es: " + pares)
        alert("El numero mayor es:" + num_Mayor)
        alert("Ya que " + num3  + " es par, el cuadrado de " +  num2 +" es: " + cuadrado.toFixed(2))
        alert("La  media de los numeros es:" + suma)
}



//<-----Ejercicio21----->\\
//Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.

function ejercicio21(){

    let numero = parseInt(prompt("Ingrese el numero a calcular el logaritmo"));
    let factorial = 1;

    if(isNaN(numero) || numero < 0){
        alert("El factorial no está definido para números negativos.")
    }else {

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    alert("El factorial del numero es: " + factorial)

    }
}



//<-----Ejercicio22----->\\
//Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.

function ejercicio22(){

    let numero = parseInt(prompt("Ingrese la cantidad de numeros a sumar"));
    let suma = 0;

    if(isNaN(numero) || numero < 0){
        alert("Ingrese una cantidad valida")
    }else {

    for (let i = 1; i <= numero; i++) {
        suma += i;
    }

    alert("La suma de los primeros " + numero + " numeros es: " + suma)

    }
}



//<-----Ejercicio23----->\\
//Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.
 
function ejercicio23(){

    let cantidad = parseInt(prompt("Ingrese la cantidad de numeros a evaluar"));
    let suma = 0;

    if(isNaN(cantidad) || cantidad <= 0){
        alert("Ingrese un numero valido.")
    }else {
        
        for(let i = 1; i <= cantidad; i += 2){
            suma += i;

        }
        alert("La suma de los numeros impares menores o iguales a " + cantidad + " es: " + suma)
    }
}



//<-----Ejercicio24----->\\
//Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.

function ejercicio24(){

    let suma = 0;
    
        for(let i = 2; i <= 1000; i += 2){
            suma += i;

        }
        alert("La suma de los numeros pares hasta 1000 es: " + suma)
    }
    


  //<-----Ejercicio25----->\\
  //Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.
 
  function ejercicio25() {
    // Definir num y factorial como enteros
    let num = parseInt(prompt("Ingrese un número:"));
    let factorial = 1;

    // Mientras num > 1 hacer
    while (num > 1) {
        factorial *= num;  // factorial <- factorial * num
        num--;             // num <- num - 1
    }

    alert(`El factorial es: ${factorial}`);
}



//<-----Ejercicio26----->\\
//Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.

function ejercicio26() {
    
    let dividendo = parseInt(prompt("Ingrese el dividendo:"));
    let divisor = parseInt(prompt("Ingrese el divisor:"));
    let cociente = 0;
    let resto = dividendo;

    // Mientras resto >= divisor hacer
    while (resto >= divisor) {
        resto -= divisor;   // resto = resto - divisor
        cociente++;         // cociente = cociente + 1
    }
    alert(`El cociente es: ${cociente}`);
    alert(`El resto es: ${resto}`);
}



//<-----Ejercicio27----->\\
//Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

function ejercicio27() {
    
    let suma = 0;
    let cantidadNumeros = 0;
    let numero = parseFloat(prompt("Ingrese números positivos. Ingrese un número negativo para terminar."));

    // Mientras numero >= 0 hacer
    while (numero >= 0) {
        suma += numero;  // suma = suma + numero
        cantidadNumeros++;  // cantidad_numeros = cantidad_numeros + 1
        numero = parseFloat(prompt("Ingrese otro número:"));
    }
    if (cantidadNumeros > 0) {
        alert(`La media de los números es: ${suma / cantidadNumeros}`);
    } else {
        alert("No se ingresaron números positivos.");
    }
}


//<-----Ejercicio28----->\\
//Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.

function ejercicio28() {

    let suma = 0;
    let i = 1;

    // Repetir
    do {
        suma += i;  // suma = suma + i
        i++;        // i = i + 1
    } while (i <= 100);  // Hasta que i > 100

    alert(`La suma de los primeros cien números es: ${suma}`);
}



//<-----Ejercicio29----->\\
//Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.

function ejercicio29() {

    let suma = 0;
    let i = 1;

    // Mientras i <= 100 hacer
    while (i <= 100) {
        suma += i;  // suma = suma + i
        i++;        // i = i + 1
    }

    alert(`La suma de los primeros cien números es: ${suma}`);
}



//<-----Ejercicio30----->\\
//Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.

function ejercicio30() {

    let suma = 0;

    // Para i = 1 hasta 100 con paso 1 hacer
    for (let i = 1; i <= 100; i++) {
        suma += i;  // suma = suma + i
    }

    alert(`La suma de los primeros cien números es: ${suma}`);
}



//<-----Ejercicio31----->\\
//Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.

function ejercicio31() {
    // Definir variables
    let sumaPares = 0;
    let sumaImpares = 0;
    let contadorPares = 0;
    let contadorImpares = 0;
    let numero;

    // Para i = 1 hasta 10 con paso 1 hacer
    for (let i = 1; i <= 10; i++) {
        numero = parseFloat(prompt("Ingrese un número:"));

        // Si numero MOD 2 = 0 entonces
        if (numero % 2 === 0) {
            sumaPares += numero;  // suma_pares = suma_pares + numero
            contadorPares++;      // contador_pares = contador_pares + 1
        } else {
            sumaImpares += numero;  // suma_impares = suma_impares + numero
            contadorImpares++;      // contador_impares = contador_impares + 1
        }
    }

    // Si contador_pares > 0 entonces
    if (contadorPares > 0) {
        alert(`La media de los números pares es: ${sumaPares / contadorPares}`);
    } else {
        alert("No se ingresaron números pares.");
    }

    // Si contador_impares > 0 entonces
    if (contadorImpares > 0) {
        alert(`La media de los números impares es: ${sumaImpares / contadorImpares}`);
    } else {
        alert("No se ingresaron números impares.");
    }
}



//<-----Ejercicio32----->\\
//Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.

function ejercicio32() {
    let continuar = true;

    while (continuar) {
        alert("Bienvenido al programa!");

        let respuesta = prompt("¿Desea continuar? (sí/no)").toLowerCase();

        if (respuesta !== 'sí' && respuesta !== 'si') {
            continuar = false;
            alert("Gracias por usar el programa. ¡Adiós!");
        }
    }
}



//<-----Ejercicio33----->\\
//Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.

function ejercicio33() {
    let resultado = '';

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 10; j++) {
            resultado += `${i} x ${j} = ${i * j}\n`;
        }
        resultado += '\n'; // Espacio en blanco entre las tablas
    }

    // Mostrar el resultado en una alerta
    console.log(resultado);
    alert("Ingrese a la consola para ver el resultado")
}



//<-----Ejercicio34----->\\
//Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

function calcularMayorYMenor() {

    let num;
    let numMayor;
    let numMenor;

    num = parseInt(prompt("Ingrese un número:"));
    numMayor = num;
    numMenor = num;

    // Para i = 1 hasta 19 con paso 1 hacer
    for (let i = 1; i < 20; i++) {
        num = parseInt(prompt("Ingrese otro número:"));
        
        if (num > numMayor) {
            numMayor = num;  // numMayor = num
        }
        
        if (num < numMenor) {
            numMenor = num;  // numMenor = num
        }
    }

    alert(`El mayor número es: ${numMayor}`);

    alert(`El menor número es: ${numMenor}`);
}


//<-----Ejercicio35----->\\
//Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.

function calcular(max) {

    let a = 0;
    let b = 1;
    let resultado = [a];

    while (b <= max) {
        resultado.push(b);
        [a, b] = [b, a + b];
    }

    return resultado;
}

function ejercicio35() {
    const maxNumero = parseInt(prompt("Ingrese el número máximo:"));
    const serie = calcular(maxNumero);
    alert(`La serie de Fibonacci hasta ${maxNumero} es: ${serie.join(', ')}`);
}



//<-----Ejercicio36----->\\
//Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.

function calcularMCD(num1, num2) {
    let resto;

    // Algoritmo de Euclides para calcular el MCD
    while (num2 !== 0) {
        resto = num1 % num2;
        num1 = num2;
        num2 = resto;
    }

    return num1;
}

function ejercicio36() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));

    let mcd = calcularMCD(num1, num2);
    alert(`El MCD es: ${mcd}`);
}



//<-----Ejercicio37----->\\
//Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.

function esNumeroPerfecto(num) {
    if (num <= 1) return false;

    let sumaDivisores = 0;

    // Encontrar los divisores propios y sumarlos
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sumaDivisores += i;
        }
    }

    return sumaDivisores === num;
}

function ejercicio37() {
    let numero = parseInt(prompt("Ingrese un número para verificar si es perfecto:"));

    if (esNumeroPerfecto(numero)) {
        alert(`${numero} es un número perfecto.`);
    } else {
        alert(`${numero} no es un número perfecto.`);
    }
}



//<-----Ejercicio38----->\\
//Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

function aproximarPi(numTerminos) {
    let pi = 0;

    for (let i = 0; i < numTerminos; i++) {
        // Alternar entre sumar y restar
        let termino = (4 / (2 * i + 1)) * (i % 2 === 0 ? 1 : -1);
        pi += termino;
    }

    return pi;
}

function ejercicio38() {
    let numTerminos = parseInt(prompt("Ingrese el número de términos para aproximar π:"));

    if (numTerminos <= 0) {
        alert("El número de términos debe ser un entero positivo.");
        return;
    }

    let piAproximado = aproximarPi(numTerminos);
    alert(`La aproximación de π con ${numTerminos} términos es: ${piAproximado}`);
}



//<-----Ejercicio39----->\\
//Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
//Pi = = 3 + 4/(234) - 4/(456) + 4/(678) - 4/(8910) + 4/(101112) - 4/(121314) ...

function aproximarPiNilakantha(numTerminos) {
    let pi = 3; // Inicia con 3 como en la fórmula

    for (let i = 0; i < numTerminos; i++) {
        // Calcula los denominadores
        let denominador1 = 2 + (i * 2);
        let denominador2 = denominador1 + 1;
        let denominador3 = denominador2 + 1;

        // Alternar entre sumar y restar
        let termino = (4 / (denominador1 * denominador2 * denominador3)) * (i % 2 === 0 ? 1 : -1);
        pi += termino;
    }

    return pi;
}

function ejercicio39() {
    let numTerminos = parseInt(prompt("Ingrese el número de términos para aproximar π con la serie de Nilakantha:"));

    if (numTerminos <= 0) {
        alert("El número de términos debe ser un entero positivo.");
        return;
    }

    let piAproximado = aproximarPiNilakantha(numTerminos);
    alert(`La aproximación de π con ${numTerminos} términos es: ${piAproximado}`);
}