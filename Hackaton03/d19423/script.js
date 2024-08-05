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
<<<<<<< HEAD
  console.log("Ejercicio 3");
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
    
=======

>>>>>>> dba57c60c3dbe450a3f78c299f038ce835dfa7a2
}


<<<<<<< HEAD
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
        alert("El precio total a pagar es: " + total + " con un descuento del " + descuento + "%");
    }

}

function ejercicio6() {
  console.log("Ejercicio 6");
  
    let horasdeTrabajo = parseInt(prompt("Digite las horas trabajadas:"));
    let sueldo;

      if (horasdeTrabajo <= 40) {
      sueldo = horasdeTrabajo * 20;
      } else {
      let horasExtras = horasdeTrabajo - 40;
      sueldo = (40 * 20) + (horasExtras * 25);
      }

      alert("El sueldo semanal es: $" + sueldo);
      
}

function ejercicio7() {
  console.log("Ejercicio 7");
  

}


=======
>>>>>>> dba57c60c3dbe450a3f78c299f038ce835dfa7a2
