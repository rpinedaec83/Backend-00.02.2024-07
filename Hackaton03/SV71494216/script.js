function ejercicio1() {
    try 
    {
        console.log("Ejercicio 1");
        let strNumero = prompt("Digita un numero");
        let intNumero = parseInt(strNumero);
       if (!isNaN(intNumero))
        {
         let arrNumero = strNumero.split("");
         if (arrNumero.length == 3) 
         {
           alert("Si tiene 3 digitos");
         } 
         else 
         {
           alert("No tiene 3 digitos");
         }
        } 
       else 
        {
            throw "No es un numero"
        }
    }
    catch (error) 
    {
        alert("No es un numero");
    }
  
}

function ejercicio2() {


  try 
    {
        console.log("Ejercicio 2");
        let strNumero = prompt("Ingrese un numero");
        let intNumero = parseInt(strNumero);
       if (intNumero > 0)
        {

          alert("El numero "+intNumero+" es positivo");
         
        } 
     
        else if (intNumero < 0)
            {
    
              alert("El numero "+intNumero+" es negativo");
             
            } 
         if (!isNaN(intNumero))
        {
         let arrNumero = strNumero.split("");
         if (arrNumero.length == 3) 
         {
           alert("Si tiene 3 digitos");
         } 
         else 
         {
           alert("No tiene 3 digitos");
         }
        } 
     
       
    }
    catch (error) 
    {
        alert("No es un numero");
    }

}

function ejercicio3() {
 

  try 
  {
      console.log("Ejercicio 3");
      let strNumero = prompt("Ingrese un numero");
      let intNumero = parseInt(strNumero);

    if (!isNaN(intNumero))
    {
     if (intNumero % 10 == 4)
      {

        alert("El numero "+intNumero+" termina en 4");
       
      } 
      else
      {
         alert("El numero "+intNumero+" no  termina en 4");
      } 
      
    }
    else 
    {
         throw "No es un numero"
    }
  }

  catch (error) 
  {
      alert("No es un numero");
  }
}

function ejercicio4() 
{
  try 
  {
      console.log("Ejercicio 4");
      let strNumero = prompt("Ingrese un numero");
      let n1 = parseInt(strNumero);

      let strNumero2 = prompt("Ingrese un numero");
      let n2 = parseInt(strNumero2);

      let strNumero3 = prompt("Ingrese un numero");
      let n3 = parseInt(strNumero3);

    if (!isNaN(n1,n2,n3))
    {
     if (n1 <= n2 & n1 <= n3)
      {

        if (n2 <= n3)
        {
          alert("Los numeros en orden de menor a mayor : "+n1+ ", "+n2+ ", "+n3+"");
        }
        else
        {
          alert("Los numeros en orden de menor a mayor : "+n1+ ", "+n3+ ", "+n2+"");
        }

      } 
     else
     {
      if (n2 <= n1 & n2 <= n3)
      {
        if (n1 <= n3) 
        {
          alert("Los numeros en orden de menor a mayor : "+n2+ ", "+n1+ ", "+n3+"");
        } 
        else 
        {
          alert("Los numeros en orden de menor a mayor : "+n2+ ", "+n3+ ", "+n1+"");
        }

      }
      else if (n1 <= n2)
      {
        alert("Los numeros en orden de menor a mayor : "+n3+ ", "+n1+ ", "+n2+"");
      } 
      else 
      {
        alert("Los numeros en orden de menor a mayor : "+n3+ ", "+n2+ ", "+n1+"");
      }
   
     }
      
    }
    else 
    {
         throw "No es un numero"
    }
  }

  catch (error) 
  {
      alert("No es un numero");
  }

  
}

function ejercicio5()
 {
 
  console.log("Ejercicio 5");
  const precioPorZapato = 80;

  let cantidadZapatos = parseInt(prompt("¿Cuántos zapatos deseas comprar?"), 10);

if (isNaN(cantidadZapatos) || cantidadZapatos <= 0) {
    alert("Por favor, ingresa una cantidad válida de zapatos.");
} else {
    
    let costoTotal = cantidadZapatos * precioPorZapato;
    
    let porcentajeDescuento = 0;

    if (cantidadZapatos > 30) {
        porcentajeDescuento = 0.40; // 40% de descuento
    } else if (cantidadZapatos > 20) {
        porcentajeDescuento = 0.20; // 20% de descuento
    } else if (cantidadZapatos > 10) {
        porcentajeDescuento = 0.10; // 10% de descuento
    }

    let montoDescuento = costoTotal * porcentajeDescuento;
    
    let costoFinal = costoTotal - montoDescuento;
    
    alert(`El costo total antes del descuento es: $${costoTotal.toFixed(2)}\n` +
          `El descuento aplicado es del ${(porcentajeDescuento * 100).toFixed(0)}%\n` +
          `El costo final después del descuento es: $${costoFinal.toFixed(2)}`);
}

  
}

function ejercicio6() {
 
  try 
  {
    
      console.log("Ejercicio 6");

      const  precioxhora = 20;
      const  horaextras = 25;

      let strNumero3 = prompt("Ingresa el número de horas trabajadas en la semana:");
      let intHoras = parseInt(strNumero3);
      if (!isNaN(intHoras))
        {

     if (intHoras >= 1 & intHoras <= 40)
      {

        let totalhoras = intHoras * precioxhora;
        alert("EL sueldo semanal por la cantidad de "+intHoras+" horas trabajadas es : "+totalhoras+" soles");
       
      } 
     
      else
      {
         if (intHoras >= 41) 
          {
            let totalhoras = intHoras * horaextras;
            alert("EL sueldo semanal por la cantidad de "+intHoras+" horas trabajadas mas horas extras es : " +totalhoras+ " soles");
          } 
          else 
          {
            alert("La cantidad de "+intHoras+" horas ingresadas no es valida");
          }
      }
    }
    else 
    {
         throw "No es un numero"
    }
    
  }

  catch (error) 
  {
      alert("No es un numero");
  }
}

function ejercicio7() {


     console.log("Ejercicio 7");

      const descuentos = 
      {
        A: 0.10,  // 10% de descuento
        B: 0.15,  // 15% de descuento
        C: 0.20   // 20% de descuento
       };
    
    let tipoMembresia = prompt("Ingresa el tipo de membresía (A, B, C):").toUpperCase();
    
    if (!descuentos[tipoMembresia]) {
        alert("Tipo de membresía inválido. Por favor ingresa A, B, o C.");
    } else {
    
        let totalCompra = parseFloat(prompt("Ingresa el total de la compra:"));
    
        
        if (isNaN(totalCompra) || totalCompra < 0) {
            alert("Por favor, ingresa un monto válido para la compra.");
        } else {
           
            let descuento = descuentos[tipoMembresia];

            let montoDescuento = totalCompra * descuento;

            let totalPagar = totalCompra - montoDescuento;
 
            alert(`Tipo de membresía: ${tipoMembresia}\n` +
                  `Monto de la compra: $${totalCompra.toFixed(2)}\n` +
                  `Descuento aplicado: $${montoDescuento.toFixed(2)}\n` +
                  `Total a pagar: $${totalPagar.toFixed(2)}`);
        }
      }
  
}

function ejercicio8() {
  

  try 
  {
      console.log("Ejercicio 8");
      let strNumero = prompt("Ingrese sus pimera nota :");
      let n1 = parseInt(strNumero);
      let strNumero2 = prompt("Ingrese sus segunda nota :");
      let n2 = parseInt(strNumero2);
      let strNumero3 = prompt("Ingrese sus tercera nota :");
      let n3 = parseInt(strNumero3);

    if (!isNaN(n1,n2,n3))
    {

      const promedio = (n1 + n2 + n3)/3;

     if (promedio >= 13)
      {

        alert("Usted aprobo con "+promedio+" en promedio");
       
      } 
      else
      {
         alert("usted desaprobo con "+promedio+" en promedio");
      } 
      
    }
    else 
    {
         throw "No es un numero"
    }
  }

  catch (error) 
  {
      alert("No es un numero");
  }
}

function ejercicio9() {

  try 
  {
      console.log("Ejercicio 9");
      let strNumero = prompt("Ingrese su salario :");
      let salario = parseInt(strNumero);

    if (!isNaN(salario))
    {

     if (salario > 2000)
      {
        const aumento = salario * 5/100;
        alert("El salario aumentado del trabajador es: "+aumento+ " soles");
        const nuevosalario = salario + aumento;
	    	alert ( "El total del salario actual del trabajador es : "+nuevosalario+ " soles")
      } 
      else
      {
        const aumento = salario * 10/100;
		    alert( "El salario aumentado del trabajador es:"+aumento+ " soles");
		    nuevosalario = salario + aumento
		    alert ("El total del salario actual del trabajador es : "+nuevosalario+ " soles ")

      } 
    }
    else 
    {
         throw "No es un numero"
    }
  }

  catch (error) 
  {
      alert("No es un numero");
  }
}

function ejercicio10() {
  
  try 
  {
      console.log("Ejercicio 10");
      let strNumero = prompt("Ingrese un numero");
      let intNumero = parseInt(strNumero);

    if (!isNaN(intNumero))
    {
     if (intNumero % 2 == 0)
      {

        alert("El numero "+intNumero+" es par");
       
      } 
      else
      {
        alert("El numero "+intNumero+" es impar");
      } 
      
    }
    else 
    {
         throw "No es un numero"
    }
  }

  catch (error) 
  {
      alert("No es un numero");
  }


}

function ejercicio11() {
  console.log("Ejercicio 11");

  try 
  {
 
      let strNumero = prompt("Ingrese el primer numero :");
      let n1 = parseInt(strNumero);
      let strNumero2 = prompt("Ingrese el segundo numero :");
      let n2 = parseInt(strNumero2);
      let strNumero3 = prompt("Ingrese el tercer numero :");
      let n3 = parseInt(strNumero3);

    if (!isNaN(n1,n2,n3))
    {
     if (n1 > n2 & n1 > n3 )
      {

        alert("El primer numero ("+n1+") es mayor");
       
      } 
      else
      {
        if (n2 > n1 & n2 > n3) 
        {
          alert("El segundo numero ("+n2+") es mayor");
        }
        else
        {
          if (n3 > n1 & n3 > n2)
          {
            alert("El tercer numero ("+n3+") es mayor");
          }
          else
          {
            alert("los numeros ingresados son iguales");
          }
        }
        
      } 
      
    }
    else 
    {
         throw "No es un numero"
    }
  }

  catch (error) 
  {
      alert("No es un numero");
  }
}

function ejercicio12() {
  console.log("Ejercicio 12");
  try 
  {
   
      let strNumero = prompt("Ingrese el primer numero :");
      let n1 = parseInt(strNumero);
      let strNumero2 = prompt("Ingrese el segundo numero :");
      let n2 = parseInt(strNumero2);

    if (!isNaN(n1,n2))
    {
     if (n1 > n2)
      {

        alert("El primer numero ("+n1+") es mayor");
       
      } 
      else
      {
        if (n2 > n1) 
          {
            alert("El segundo numero ("+n2+") es mayor");
          }
          else
          {
            alert("los numeros ingresados son iguales");
          }
      } 
      
    }
    else 
    {
         throw "No es un numero"
    }
  }

  catch (error) 
  {
      alert("No es un numero");
  }

}

function ejercicio13() {
  console.log("Ejercicio 13");

 let letra = prompt("Ingresa una letra:");


if (letra.length !== 1 || !/[a-zA-Z]/.test(letra)) {
    alert("Por favor, ingresa una sola letra.");
} else {
  
    letra = letra.toLowerCase();

    if ("aeiou".includes(letra)) {
      alert(""+letra+"  es una vocal.");
    } else {
        alert(""+letra+" no es una vocal.");
    }
}
 }


function ejercicio14() {
  console.log("Ejercicio 14");
  
  let numero = parseInt(prompt("Ingresa un número entero positivo del 1 al 10:"));

  if (isNaN(numero) || numero < 1 || numero > 10) {
      alert("Por favor, ingresa un número entero positivo del 1 al 10.");
  } else {
    
      function esPrimo(n) {
          if (n <= 1) return false; 
          if (n === 2) return true; 
          if (n % 2 === 0) return false; 
          for (let i = 3; i <= Math.sqrt(n); i += 2) {
              if (n % i === 0) return false; 
          }
          return true;
      }
      
      if (esPrimo(numero)) {
          alert(""+numero+" es un número primo.");
      } else {
          alert(""+numero+" no es un número primo.");
      }
  }


}

function ejercicio15() {
  console.log("Ejercicio 15");
  try 
  {
  
      let strNumero = prompt("Ingrese el valor en centimetros:");
      let cm = parseInt(strNumero);
      let strNumero1 = prompt("Ingrese el valor en libras:");
      let libras = parseInt(strNumero1);

    if (!isNaN(cm,libras))
    {
      const pulgadas = cm / 2.54;
      alert(""+cm+" centimetros equivale a "+pulgadas+" pulgadas");
      kg = libras * 0.453592;
      alert(""+libras+" libras equivale a "+kg+" kilogramos")

    }
    else 
    {
         throw "No es un numero"
    }
  }

  catch (error) 
  {
      alert("No es un numero");
  }

}

function ejercicio16() {
  console.log("Ejercicio 16");

  let numero = parseInt(prompt("Ingresa un número del 1 al 7 para obtener el día de la semana:"));

// Array que contiene los nombres de los días de la semana
const diasDeLaSemana = [
    "Domingo",  // 1
    "Lunes",    // 2
    "Martes",   // 3
    "Miércoles",// 4
    "Jueves",   // 5
    "Viernes",  // 6
    "Sábado"    // 7
];

// Verifica si el número está en el rango válido
if (isNaN(numero) || numero < 1 || numero > 7) {
    alert("Por favor, ingresa un número del 1 al 7.");
} else {

    let dia = diasDeLaSemana[numero - 1];

    alert("El día correspondiente al número "+numero+" es "+dia+".");
}
}

function ejercicio17() {
  console.log("Ejercicio 17");

  try 
  {
  
    let hora = parseInt(prompt("Ingrese la hora"));
    let minuto = parseInt(prompt("Ingrese los minutos:"));
    let segundo = parseInt(prompt("Ingrese los segundos:"));
    
    segundo = segundo + 1;
    if (!isNaN(hora,minuto,segundo))
    {
     if (segundo == 6)
      {
        segundo = 0;
        minuto = minuto + 1;

      } 
      if (minuto == 60 )
        {
          minuto = 0;
          hora = hora + 1;
  
        } 
      if (hora == 24)
       {
        
          hora == 0;
    
       } 
       alert("La hora dentro de un segundo sera: "+hora+":"+minuto+ ":"+segundo+"");
      
    }
    else 
    {
         throw "No es un numero"
    }
  }

  catch (error) 
  {
      alert("No es un numero");
  }
}

function ejercicio18() {
  console.log("Ejercicio 18");

  const precioPorUnidad = (cantidad) => 
    {
    if (cantidad >= 1 && cantidad <= 9) return 10;
    if (cantidad >= 10 && cantidad <= 99) return 8;
    if (cantidad >= 100 && cantidad <= 499) return 7;
    if (cantidad >= 500) return 6;
    return 0;
};

let cantidadCDs = parseInt(prompt("Ingresa la cantidad de CDs a vender:"));

if (isNaN(cantidadCDs) || cantidadCDs < 1) {
    alert("Por favor, ingresa una cantidad válida de CDs (número entero positivo).");
} else {
   
    let precioUnitario = precioPorUnidad(cantidadCDs);
    
    let precioTotal = cantidadCDs * precioUnitario;
    
    let gananciaVendedor = precioTotal * 0.0825;
    
    alert(`Precio total para el cliente: $${precioTotal.toFixed(2)}\n` +
          `Ganancia para el vendedor: $${gananciaVendedor.toFixed(2)}`);
}
}

function ejercicio19() {
  console.log("Ejercicio 19");

  const salariosDiarios = {
    1: 56,   // Cajero
    2: 64,   // Servidor
    3: 80,   // Preparador de mezclas
    4: 48    // Mantenimiento
};

let identificadorEmpleado = parseInt(prompt("Ingresa el número identificador del empleado (1-4):"));
let diasTrabajados = parseInt(prompt("Ingresa la cantidad de días trabajados en la semana (hasta 6 días):"));

if (!salariosDiarios[identificadorEmpleado]) {
    alert("Número identificador inválido. Por favor ingresa un número entre 1 y 4.");
} else if (isNaN(diasTrabajados) || diasTrabajados < 1 || diasTrabajados > 6) {
    alert("Cantidad de días trabajados inválida. Por favor ingresa un número entre 1 y 6.");
} else {
    
    let salarioDiario = salariosDiarios[identificadorEmpleado];
 
    let salarioTotal = salarioDiario * diasTrabajados;

    alert(`El monto que se debe pagar al empleado con identificador ${identificadorEmpleado} por ${diasTrabajados} días trabajados es: $${salarioTotal.toFixed(2)}`);
}
}

function ejercicio20() {
  console.log("Ejercicio 20");

  let num1 = parseInt(prompt("Ingresa el primer número entero positivo:"));
  let num2 = parseInt(prompt("Ingresa el segundo número entero positivo:"));
  let num3 = parseInt(prompt("Ingresa el tercer número entero positivo:"));
  let num4 = parseInt(prompt("Ingresa el cuarto número entero positivo:"));

if ([num1, num2, num3, num4].some(num => isNaN(num) || num <= 0)) {
    alert("Por favor, ingresa cuatro números enteros positivos.");
} else {
    // Función para contar números pares
    function contarPares(...nums) {
        return nums.filter(num => num % 2 === 0).length;
    }

    let mayor = Math.max(num1, num2, num3, num4);

    if (num3 % 2 === 0) {
        let cuadradoSegundo = num2 ** 2;
        alert(`El cuadrado del segundo número es: ${cuadradoSegundo}`);
    }

    if (num1 < num4) {
        let media = (num1 + num2 + num3 + num4) / 4;
        alert(`La media de los cuatro números es: ${media.toFixed(2)}`);
    }

    if (num2 > num3 && num3 >= 50 && num3 <= 700) {
        let suma = num1 + num2 + num3 + num4;
        alert(`La suma de los cuatro números es: ${suma}`);
    }

    alert(`Cantidad de números pares: ${contarPares(num1, num2, num3, num4)}`);
    alert(`El mayor de los números es: ${mayor}`);
}

}

function ejercicio21() {
  console.log("Ejercicio 21");

  let numero = parseInt(prompt("Ingresa un número entero positivo para calcular su factorial:"));

if (isNaN(numero) || numero < 0) {
    alert("Por favor, ingresa un número entero positivo.");
} else {

    function calcularFactorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }

    let resultado = calcularFactorial(numero);

    alert("El factorial de "+numero+" es "+resultado+".");
}
}

function ejercicio22() {
  console.log("Ejercicio 22");

  let n = parseInt(prompt("Ingresa el valor de n para calcular la suma de los primeros n números:"));

if (isNaN(n) || n < 1) {
    alert("Por favor, ingresa un número entero positivo.");
} else {
    
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i;
    }
    
    alert("La suma de los primeros "+n+" números es "+suma+".");
}
}

function ejercicio23() {
  console.log("Ejercicio 23");

  let n = parseInt(prompt("Ingresa el valor de n para calcular la suma de los números impares menores o iguales a n:"));


if (isNaN(n) || n < 1) {
    alert("Por favor, ingresa un número entero positivo.");
} else {

    let suma = 0;
    for (let i = 1; i <= n; i += 2) { 
        suma += i;
    }
    
  
    alert("La suma de los números impares menores o iguales a "+n+" es "+suma+".");
}
}

function ejercicio24() {
  console.log("Ejercicio 24");

  let suma = 0;

for (let i = 2; i <= 1000; i += 2) {
    suma += i; 
}

alert("La suma de todos los números pares hasta 1000 es "+suma+"");

}

function ejercicio25() {
  console.log("Ejercicio 25");

  let numero = parseInt(prompt("Ingresa un número entero positivo para calcular su factorial:"));


if (isNaN(numero) || numero < 0) {
    alert("Por favor, ingresa un número entero positivo.");
} else {
  
    let array = Array.from({ length: numero }, (_, i) => i + 1);
    

    let factorial = array.reduce((accumulator, current) => accumulator * current, 1);
    

    alert("El factorial de "+numero+" es "+factorial+".");
}
}

function ejercicio26() {
  console.log("Ejercicio 26");

  let dividendo = parseInt(prompt("Ingresa el dividendo (número positivo):"));
  let divisor = parseInt(prompt("Ingresa el divisor (número positivo):"));


if (isNaN(dividendo) || dividendo < 0 || isNaN(divisor) || divisor <= 0) {
    alert("Por favor, ingresa números enteros positivos. El divisor debe ser mayor que 0.");
} else {
 
    let cociente = 0;
    let resto = dividendo;

    
    while (resto >= divisor) {
        resto -= divisor; 
        cociente += 1;
    }


    alert(`Cociente: ${cociente}\nResto: ${resto}`);
}
}

function ejercicio27() {
  console.log("Ejercicio 27");

  let suma = 0;
  let conteo = 0;


while (true) {

    let numero = parseFloat(prompt("Ingresa un número positivo (o un número negativo para finalizar):"));

    if (numero < 0) {
        break;
    }

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, ingresa un número positivo.");
        continue;
    }

    suma += numero;
    conteo += 1;
}

if (conteo > 0) {
    let media = suma / conteo;
    alert("La media de los números ingresados es "+media+"");
} else {
    alert("No se ingresaron números positivos.");
}
}

function ejercicio28() {
  console.log("Ejercicio 28");

  let suma = 0;
  let contador = 1;

do {
    suma += contador; 
    contador += 1;  
} while (contador <= 100); 

alert("La suma de los primeros 100 números es "+suma+".");
}

function ejercicio29() {
  console.log("Ejercicio 29");

  let suma = 0;
  let contador = 1;

while (contador <= 100) {
    suma += contador;
    contador += 1; 
}

alert("La suma de los primeros 100 números es "+suma+".");
}

function ejercicio30() {
  console.log("Ejercicio 30");

  let suma = 0;

for (let i = 1; i <= 100; i++) {
    suma += i; 
}

alert("La suma de los primeros 100 números es "+suma+".");

}

function ejercicio31() {
  console.log("Ejercicio 31");

  let sumaPares = 0;
  let conteoPares = 0;
  let sumaImpares = 0;
  let conteoImpares = 0;


for (let i = 1; i <= 10; i++) {

    let numero = parseInt(prompt(`Ingresa el número ${i} de 10:`));

    if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        i--; 
        continue; 
    }

    if (numero % 2 === 0) {
       
        sumaPares += numero; 
        conteoPares++; 
    } else {
     
        sumaImpares += numero; 
        conteoImpares++; 
    }
}

let mediaPares = conteoPares > 0 ? sumaPares / conteoPares : 0;
let mediaImpares = conteoImpares > 0 ? sumaImpares / conteoImpares : 0;

alert("La media de los números pares es "+mediaPares.toFixed(2)+".");
alert("La media de los números impares es "+mediaImpares.toFixed(2)+".");

}

function ejercicio32() {
  console.log("Ejercicio 32");
  function encontrarCiudadConMayorPoblacion() {
    let mayorPoblacion = 0;
    let ciudadConMasPoblacion = 0;

    for (let i = 1; i <= 11; i++) {
        let poblacion = parseInt(prompt(`Ingrese la cantidad de población de la ciudad ${i}:`), 10);
        
        if (poblacion > mayorPoblacion) {
            mayorPoblacion = poblacion;
            ciudadConMasPoblacion = i;
        }
    }
    
    alert("La ciudad con la mayor población es la ciudad número: "+ciudadConMasPoblacion+"");
    alert("Con una población de: "+mayorPoblacion+"");
}

encontrarCiudadConMayorPoblacion();
  
}

function ejercicio33() {
  console.log("Ejercicio 33");

  function continuarPrograma() {
    let continuar = true;
    
    while (continuar) {
        
        alert("Este es el cuerpo principal del programa.");
        
        continuar = confirm("¿Desea continuar con el programa?");
    }
    
    alert("El programa ha terminado.");
}

continuarPrograma();

}

function ejercicio34() {
  console.log("Ejercicio 34");
  
  let resultado = "";

  for (let i = 1; i <= 9; i++) {
      resultado += `Tabla del ${i}:\n`;
      for (let j = 1; j <= 9; j++) {
          resultado += `${i} x ${j} = ${i * j}\n`;
      }

      resultado += "\n";
  }
  
  alert(resultado);
}


function ejercicio35() {
  console.log("Ejercicio 35");

  let numeroMayor = Number.NEGATIVE_INFINITY;
  let numeroMenor = Number.POSITIVE_INFINITY;
  
  for (let i = 1; i <= 20; i++) {

      let numero = parseFloat(prompt(`Ingrese el número ${i}:`));
      
      if (isNaN(numero)) {
          alert("Por favor, ingrese un número válido.");
          i--; 
          continue; 
      }
      if (numero > numeroMayor) {
          numeroMayor = numero;
      }
      if (numero < numeroMenor) {
          numeroMenor = numero;
      }
  }
  
  alert(`El número mayor es: ${numeroMayor}`);
  alert(`El número menor es: ${numeroMenor}`);

}

function ejercicio36() {
  console.log("Ejercicio 36");

  let n = parseInt(prompt("Ingrese la cantidad de términos de la serie Fibonacci:"));

if (isNaN(n) || n <= 0) {
    alert("Por favor, ingrese un número válido mayor a 0.");
} else {
    let fibonacci = [0, 1]; 

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    alert("Serie Fibonacci: " + fibonacci.join(", "));
}
}

function ejercicio37() {
  console.log("Ejercicio 37");

  function calcularMCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));

if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0) {
    alert("Por favor, ingrese dos números enteros positivos.");
} else {
    // Calcular el MCD
    let mcd = calcularMCD(numero1, numero2);

    // Mostrar el resultado
    alert("El MCD de "+numero1+" y "+numero2+"+ es: "+mcd+"");
}
}

function ejercicio38() {
  console.log("Ejercicio 38");

  let numero = parseInt(prompt("Ingrese un número para verificar si es perfecto:"));

// Validar la entrada
if (isNaN(numero) || numero <= 0) {
    alert("Por favor, ingrese un número entero positivo.");
} else {
    let sumaDivisores = 0;

    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) 
          { 
            sumaDivisores += i;
          }
    }

    if (sumaDivisores === numero) {
        alert(""+numero+" es un número perfecto.");
    } else {
        alert(""+numero+" no es un número perfecto.");
    }
}
}

function ejercicio39() {
  console.log("Ejercicio 39");

  let numTerminos = parseInt(prompt("Ingrese el número de términos para aproximar π:"));

if (isNaN(numTerminos) || numTerminos <= 0) {
    alert("Por favor, ingrese un número entero positivo.");
} else {
    let piAproximado = 0;

    for (let i = 0; i < numTerminos; i++) {
        let termino = 4 / (2 * i + 1);
        if (i % 2 === 0) {
            piAproximado += termino;
        } else {
            piAproximado -= termino;
        }
    }

    alert("La aproximación de π con "+numTerminos+" términos es: "+piAproximado+"");
}
}

function ejercicio40() {
  console.log("Ejercicio 40");

  let numTerminos = parseInt(prompt("Ingrese el número de términos para aproximar π:"));

if (isNaN(numTerminos) || numTerminos <= 0) {
    alert("Por favor, ingrese un número entero positivo.");
} else {
    let piAproximado = 3;

    for (let n = 1; n <= numTerminos; n++) {
        let denominador = (2 * n) * (2 * n + 1) * (2 * n + 2);
        let termino = 4 / denominador;
        
        if (n % 2 === 1) {
            piAproximado += termino;
        } else {
            piAproximado -= termino; 
        }
    }

    alert("La aproximación de π con "+numTerminos+" términos es: "+piAproximado+"");
}
}
