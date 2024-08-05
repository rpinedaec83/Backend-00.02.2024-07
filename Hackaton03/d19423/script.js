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

  }

function ejercicio15() {
  console.log("Ejercicio 15");



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


}

function ejercicio18() {
  console.log("Ejercicio 18");

}

function ejercicio19() {
  console.log("Ejercicio 19");

}

function ejercicio20() {
  console.log("Ejercicio 20");

}

function ejercicio21() {
  console.log("Ejercicio 21");
  

}

function ejercicio20() {
  console.log("Ejercicio 20");

}

function ejercicio20() {
  console.log("Ejercicio 20");

}

function ejercicio20() {
  console.log("Ejercicio 20");

}

function ejercicio20() {
  console.log("Ejercicio 20");

}

function ejercicio20() {
  console.log("Ejercicio 20");

}

function ejercicio20() {
  console.log("Ejercicio 20");

}