function ejercicio01() {
  try {
    let strNumero = document.getElementById("userInput").value.trim();
    let intNumero = parseInt(strNumero, 10);

    if (strNumero === "") {
      throw new Error("El campo no puede estar vacío.");
    }

    if (!isNaN(intNumero) && Number.isInteger(intNumero)) {
      let arrNumero = strNumero.trim().split("");

      if (arrNumero.length === 3) {
        alert("El número " + strNumero + " tiene 3 dígitos.");
      } else {
        alert("El número " + strNumero + " no tiene 3 dígitos.");
      }
    } else {
      throw new Error("El valor ingresado no es un número entero válido.");
      return;
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput").value.trim() !== "") {
      hidePrompt01();
      document.getElementById("userInput").value = "";
    }
  }
}

function ejercicio02() {
  try {
    let strNumero = document.getElementById("userInput02").value.trim();
    let intNumero = parseInt(strNumero, 10);

    if (strNumero === "") {
      throw new Error("El campo no puede estar vacío.");
    }

    if (!isNaN(intNumero)) {
      if (intNumero > 0) {
        alert("El número " + strNumero + " NO es negativo");
      } else {
        alert("El número " + strNumero + " es NEGATIVO");
      }
    } else {
      throw new Error("El valor ingresado no es un número.");
    }
  } catch (error) {
    alert(error.message);
  } 
  finally {
    if (document.getElementById("userInput02").value.trim() !== "") {
      hidePrompt02();
      document.getElementById("userInput02").value = "";
    }
  }
}

function ejercicio03() {
  try {
    let strNumero = document.getElementById("userInput03").value.trim();
    let intNumero = parseInt(strNumero);
    let lastDigit = intNumero % 10;

    if (strNumero === "") {
      throw new Error("El campo no puede estar vacío.");
    }

    if (!isNaN(intNumero)) {
      if (lastDigit === 4) {
        alert("El número " + strNumero + " termina en 4.");
      } else {
        alert("El número " + strNumero + " NO termina en 4.");
      }
    } else {
      throw new Error("El valor ingresado no es un número.");
    }
  } catch (error) {
    alert(error.message);
  }  finally {
    if (document.getElementById("userInput03").value.trim() !== "") {
      hidePrompt03();
      document.getElementById("userInput03").value = "";
    }
  }
}

function ejercicio04() {
  try {
    let datoNum1 = document.getElementById("exc4Input1").value.trim();
    let datoNum2 = document.getElementById("exc4Input2").value.trim();
    let datoNum3 = document.getElementById("exc4Input3").value.trim();
    let intDato1 = parseInt(datoNum1);
    let intDato2 = parseInt(datoNum2);
    let intDato3 = parseInt(datoNum3);

    if (datoNum1 === "" || datoNum2 === "" || datoNum3 === "") {
      throw new Error("El campo no puede estar vacío.");
    }

    if (!isNaN(intDato1) && !isNaN(intDato2) && !isNaN(intDato3)) {
      if (intDato1 > intDato2) {
        let temp = intDato1;
        intDato1 = intDato2;
        intDato2 = temp;
      }
      if (intDato1 > intDato3) {
        let temp = intDato1;
        intDato1 = intDato3;
        intDato3 = temp;
      }
      if (intDato2 > intDato3) {
        let temp = intDato2;
        intDato2 = intDato3;
        intDato3 = temp;
      }
      alert(
        "Se muestra la informacion en orden de menor a mayor: " +
          intDato1 +
          " ," +
          intDato2 +
          ", " +
          intDato3
      );
    } else {
      throw new Error("Uno o mas de los valores ingresados no es un número.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("exc4Input1").value.trim() !== "" &&
    document.getElementById("exc4Input2").value.trim() !== "" &&
    document.getElementById("exc4Input3").value.trim() !== "") {
      hidePrompt04();
      document.getElementById("exc4Input1").value = "";
      document.getElementById("exc4Input2").value = "";
      document.getElementById("exc4Input3").value = "";
    }
  }

}

function ejercicio05() {
  try {
    let zapatosNum = document.getElementById("userInput5").value.trim();
    let intDato = parseInt(zapatosNum);
    let costoxZapato = 80;
    let montoTotal = 0;

    if (zapatosNum === "") {
      throw new Error("El campo no puede estar vacío.");
    }

    if (!isNaN(intDato) && intDato > 0) {
      if (intDato <= 10) {
        montoTotal = intDato * costoxZapato;
        alert("El costo total de los zapatos es: " + montoTotal);
      }
      if (intDato > 10 && intDato <= 20) {
        montoTotal = intDato * costoxZapato;
        precioFinal = montoTotal - 0.1 * montoTotal;
        alert("El costo total de los zapatos es: " + precioFinal);
      }
      if (intDato > 20 && intDato < 30) {
        montoTotal = intDato * costoxZapato;
        precioFinal = montoTotal - 0.2 * montoTotal;
        alert("El costo total de los zapatos es: " + precioFinal);
      }
      if (intDato >= 30) {
        montoTotal = intDato * costoxZapato;
        precioFinal = montoTotal - 0.4 * montoTotal;
        alert("El costo total de los zapatos es: " + precioFinal);
      }
    } else {
      throw new Error("El valor ingresado no es un número valido.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput5").value.trim() !== "") {
        hidePrompt05();
      document.getElementById("userInput5").value = "";
    }
  } 
}

function ejercicio06() {
  try {
    let numDato = document.getElementById("userInput6").value.trim();
    let intDato = parseInt(numDato);
    let pagoSemanal = 0;

    if (numDato === "") {
      throw new Error("El campo no puede estar vacío.");
    }

    if (!isNaN(intDato) && intDato > 0) {
      if (intDato <= 40) {
        pagoSemanal = intDato * 20;
        alert(
          "El empleado trabajo " +
            intDato +
            " horas y el sueldo semanal calculado es: " +
            pagoSemanal
        );
      } else {
        pagoSemanal = 40 * 20 + (intDato - 40) * 25;
        alert(
          "El empleado trabajo " +
            intDato +
            " horas y el sueldo semanal calculado es: " +
            pagoSemanal
        );
      }
    } else {
      throw new Error("El valor ingresado no es un número valido.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput6").value.trim() !== "") {
        hidePrompt06();
      document.getElementById("userInput6").value = "";
    }
  } 
}

function ejercicio07() {
  try {
    let tipoMembresia = document.getElementById("userInput7").value.trim();
    let desc = "";

    if (tipoMembresia === "") {
      throw new Error("El campo no puede estar vacío.");
    }

    if (isNaN(tipoMembresia)) {
      if (tipoMembresia == "A" || tipoMembresia == "a") {
        desc = "10% de descuento";
        alert(
          "El descuento que tiene el cliente por el tipo de membresia " +
            tipoMembresia +
            " es: " +
            desc
        );
      } else if (tipoMembresia == "B" || tipoMembresia == "b") {
        desc = "15% de descuento";
        alert(
          "El descuento que tiene el cliente por el tipo de membresia " +
            tipoMembresia +
            " es: " +
            desc
        );
      } else if (tipoMembresia == "C" || tipoMembresia == "c") {
        desc = "20% de descuento";
        alert(
          "El descuento que tiene el cliente por el tipo de membresia " +
            tipoMembresia +
            " es: " +
            desc
        );
      } else {
        alert("Opcion no valida, no existe tipo de cliente");
      }
    } else {
      throw new Error("El valor ingresado no es un dato valido.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput7").value.trim() !== "") {
        hidePrompt07();
      document.getElementById("userInput7").value = "";
    }
  }  
}

function ejercicio08() {
  try {
    let numNota1 = document.getElementById("excer8Input1").value.trim();
    let numNota2 = document.getElementById("excer8Input2").value.trim();
    let numNota3 = document.getElementById("excer8Input3").value.trim();
    let intDato1 = parseInt(numNota1);
    let intDato2 = parseInt(numNota2);
    let intDato3 = parseInt(numNota3);

    if (numNota1 === "" || numNota2 === "" || numNota3 === "") {
      throw new Error("El campo no puede estar vacío.");
    }

    let cantNotas = 3;
    let notaPromedio = 0;

    notaPromedio = (intDato1 + intDato2 + intDato3) / cantNotas;

    if (!isNaN(intDato1) && !isNaN(intDato2) && !isNaN(intDato2)) {
      if (notaPromedio > 10) {
        alert(
          "El alumno aprobo la materia con una nota promedio de: " +
            notaPromedio
        );
      } else {
        alert(
          "El alumno desaprobo la materia con una nota promedio de: " +
            notaPromedio
        );
      }
    } else {
      throw new Error("El valor ingresado no es un dato valido.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("excer8Input1").value.trim() !== "" &&
    document.getElementById("excer8Input2").value.trim() !== "" &&
    document.getElementById("excer8Input3").value.trim() !== "") {
        hidePrompt08();
      document.getElementById("excer8Input1").value = "";
      document.getElementById("excer8Input2").value = "";
      document.getElementById("excer8Input3").value = "";
    }
  } 
}

function ejercicio09() {
  try {
    let salActual = document.getElementById("userInput9").value.trim();
    let intDato = parseInt(salActual);
    let salAumento = 0;

    if (salActual === "") {
      throw new Error("El campo no puede estar vacío.");
    }

    if (!isNaN(intDato)) {
      if (intDato >= 2000) {
        salAumento = salActual * 0.05;
        alert(
          "El salario actual del trabajador es $" +
            salActual +
            " y el aumento que recibiria el trabajador es de: $" +
            salAumento
        );
      } else {
        salAumento = salActual * 0.1;
        alert(
          "El salario actual del trabajador es $" +
            salActual +
            " y el aumento que recibiria el trabajador es de: $" +
            salAumento
        );
      }
    } else {
      throw new Error("El valor ingresado no es un dato valido.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput9").value.trim() !== "") {
        hidePrompt09();
      document.getElementById("userInput9").value = "";
    }
  }   
}

function ejercicio10() {
  try {
    let numDato = document.getElementById("userInput10").value.trim();
    let intDato = parseInt(numDato);

    if (numDato === "") {
      throw new Error("El campo no puede estar vacío.");
    }

    if (!isNaN(intDato)) {
      if (intDato % 2 == 0) {
        alert("El número evaluado " + intDato + " es par.");
      } else {
        alert("El número evaluado " + intDato + " es impar.");
      }
    } else {
      throw new Error("El valor ingresado no es un dato valido.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput10").value.trim() !== "") {
        hidePrompt10();
      document.getElementById("userInput10").value = "";
    }
  }   
 
}

function ejercicio11() {
  try {
    let numDato1 = document.getElementById("excer11Input1").value.trim();
    let numDato2 = document.getElementById("excer11Input2").value.trim();
    let numDato3 = document.getElementById("excer11Input3").value.trim();
    let intDato1 = parseInt(numDato1);
    let intDato2 = parseInt(numDato2);
    let intDato3 = parseInt(numDato3);

    if (numDato1 === "" || numDato2 === "" || numDato3 === "") {
      throw new Error("El campo no puede estar vacío.");
    }
    if (!isNaN(intDato1) && !isNaN(intDato2) && !isNaN(intDato3)) {
      if (intDato1 > intDato2) {
        temp = intDato1;
        intDato1 = intDato2;
        intDato2 = temp;
      }
      if (intDato1 > intDato3) {
        temp = intDato1;
        intDato1 = intDato3;
        intDato3 = temp;
      }
      if (intDato2 > intDato3) {
        temp = intDato2;
        intDato2 = intDato3;
        intDato3 = temp;
      }
      alert("Se muestra la informacion del número mayor: " + intDato3);
    } else {
      throw new Error("El valor ingresado no es un dato valido.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("excer11Input1").value.trim() !== "" &&
    document.getElementById("excer11Input2").value.trim() !== "" &&
    document.getElementById("excer11Input3").value.trim() !== "") {
        hidePrompt11();
      document.getElementById("excer11Input1").value = "";
      document.getElementById("excer11Input2").value = "";
      document.getElementById("excer11Input3").value = "";
    }
  } 
 
}

function ejercicio12() {
  try {
    let numDato1 = document.getElementById("excer12Input1").value.trim();
    let numDato2 = document.getElementById("excer12Input2").value.trim();
    let intDato1 = parseInt(numDato1);
    let intDato2 = parseInt(numDato2);

    if (numDato1 == "" || numDato2 == "") {
      throw new Error("No se permiten campos vacíos.");
    }

    if (!isNaN(intDato1) && !isNaN(intDato2)) {
      if (intDato1 > intDato2) {
        temp = intDato1;
        intDato1 = intDato2;
        intDato2 = temp;
      }
      alert("Se muestra la informacion del número mayor: " + intDato2);
    } else {
      throw new Error("El dato ingresado no es valido.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("excer12Input1").value.trim() !== "" &&
    document.getElementById("excer12Input2").value.trim() !== "") {
        hidePrompt12();
      document.getElementById("excer12Input1").value = "";
      document.getElementById("excer12Input2").value = "";
    }
  } 
 
}

function ejercicio13() {
  try {
    let strLetra = document.getElementById("userInput13").value.trim();

    if (strLetra == "") {
      throw new Error("No se permiten campos vacíos.");
    }
    if (isNaN(strLetra)) {
      if (
        strLetra == "A" ||
        strLetra == "a" ||
        strLetra == "E" ||
        strLetra == "e" ||
        strLetra == "I" ||
        strLetra == "i" ||
        strLetra == "O" ||
        strLetra == "o" ||
        strLetra == "U" ||
        strLetra == "u"
      ) {
        alert("La letra ingresada " + strLetra + " es una vocal.");
      } else {
        alert("La letra ingresada " + strLetra + " NO es una vocal.");
      }
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput13").value.trim() !== "") {
        hidePrompt13();
      document.getElementById("userInput13").value = "";
    }
  }  
}

function ejercicio14() {
  try {
    let numPrimo = document.getElementById("userInput14").value.trim();
    let intDato = parseInt(numPrimo);
    if (numPrimo == "") {
      throw new Error("No se permiten campos vacíos.");
    }

    if (isNaN(intDato) || intDato < 1 || intDato > 10) {
      alert("Opcion no valida, por favor ingrese un numero permitido");
    } else if (intDato == 1) {
      esPrimo = false;
      alert("El número " + intDato + " NO es primo.");
    } else if (intDato == 2 || intDato == 3 || intDato == 5 || intDato == 7) {
      esPrimo = true;
      alert("El número " + intDato + " es primo.");
    } else {
      esPrimo = false;
      alert("El número " + intDato + " NO es primo.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput14").value.trim() !== "") {
        hidePrompt14();
      document.getElementById("userInput14").value = "";
    }
  }  
}

function ejercicio15() {
  try {
    let numDato1 = document.getElementById("excer15Input1").value.trim();
    let numDato2 = document.getElementById("excer15Input2").value.trim();
    let intDato1 = parseInt(numDato1);
    let intDato2 = parseInt(numDato2);

    if (numDato1 == "" || numDato2 == "") {
      throw new Error("No se permiten campos vacíos.");
    }

    if (!isNaN(intDato1) && !isNaN(intDato2)) {
      pulgadas = intDato1 * 0.393701;
      kilogramos = intDato2 * 0.453592;

      alert(
        "La cantidad de " +
          intDato1 +
          " centímetros es igual a " +
          pulgadas +
          " pulgadas.\nLa cantidad de " +
          intDato2 +
          " libras es igual a " +
          kilogramos +
          " kilogramos."
      );
    } else {
      throw new Error("Dato ingresado no valido.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (
      document.getElementById("excer15Input1").value.trim() !== "" &&
      document.getElementById("excer15Input2").value.trim() !== ""
    ) {
      hidePrompt15();
      document.getElementById("excer15Input1").value = "";
      document.getElementById("excer15Input2").value = "";
    }
  }
}

function ejercicio16() {
  try {
    let diaSem = document.getElementById("userInput16").value.trim();
    let intDato = parseInt(diaSem);

    if (diaSem == "") {
      throw new Error("No se permiten campos vacios.");
    }

    if (!isNaN(intDato)) {
      switch (intDato) {
        case 1:
          alert("El día que corresponde al número " + intDato + " es Lunes");
          break;
        case 2:
          alert("El día que corresponde al número " + intDato + " es Martes");
          break;
        case 3:
          alert(
            "El día que corresponde al número " + intDato + " es Miercoles"
          );
          break;
        case 4:
          alert("El día que corresponde al número " + intDato + " es Jueves");
          break;
        case 5:
          alert("El día que corresponde al número " + intDato + " es Viernes");
          break;
        case 6:
          alert("El día que corresponde al número " + intDato + " es Sabado");
          break;
        case 7:
          alert("El día que corresponde al número " + intDato + " es Domingo");
          break;
        default:
          alert("Número de dia no se encuentra en el rango indicado");
      }
    } else {
      throw new Error("Dato ingresado no valido.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput16").value.trim() !== "") {
      hidePrompt16();
      document.getElementById("userInput16").value = "";
    }
  }
}

function ejercicio17() {
  try {
    let inputElement = document.getElementById("userInput17");
    let horaIngresada = inputElement.value.trim();

    if (!/^\d{2}:\d{2}:\d{2}$/.test(horaIngresada)) {
      throw new Error("El formato de la hora ingresada debe ser hh:mm:ss.");
    }

    let hora = horaIngresada.substring(0, 2);
    let minuto = horaIngresada.substring(3, 5);
    let segundo = horaIngresada.substring(6, 8);

    let thora = parseInt(hora, 10);
    let tminuto = parseInt(minuto, 10);
    let tsegundo = parseInt(segundo, 10);

    tsegundo += 1;

    if (tsegundo === 60) {
      tsegundo = 0;
      tminuto += 1;
      if (tminuto === 60) {
        tminuto = 0;
        thora += 1;
        if (thora === 24) {
          thora = 0;
        }
      }
    }

    let horaFormatted = thora < 10 ? "0" + thora : thora.toString();
    let minutoFormatted = tminuto < 10 ? "0" + tminuto : tminuto.toString();
    let segundoFormatted = tsegundo < 10 ? "0" + tsegundo : tsegundo.toString();

    alert(
      `La hora después de un segundo es: ${horaFormatted}:${minutoFormatted}:${segundoFormatted}`
    );
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput17").value.trim() !== "") {
      hidePrompt17();
      document.getElementById("userInput17").value = "";
    }
  }
}

function ejercicio18() {

try {
let cantCDs = document.getElementById("userInput18").value.trim();
let intDato = parseInt(cantCDs);
let precioTotal=0;
let gananciaVendedor=0;

    if (cantCDs==""){
        throw new Error ("Los campos no pueden ser vacios.")
    }
    if (!isNaN(intDato)) {
        if (intDato<=9){
            precioTotal=intDato*9;
            gananciaVendedor=precioTotal*0.0825;
            alert("El precio total por "+intDato+" unidades es: $"+precioTotal+"\nLa ganancia para el vendedor es: $"+gananciaVendedor);
        } else if (intDato>9 && intDato<=99){
            precioTotal=intDato*8;
            gananciaVendedor=precioTotal*0.0825;
            alert("El precio total por "+intDato+" unidades es: $"+precioTotal+"\nLa ganancia para el vendedor es: $"+gananciaVendedor);      
        } else if (intDato>99 && intDato<=499){
            precioTotal=intDato*7;
            gananciaVendedor=precioTotal*0.0825;
            alert("El precio total por "+intDato+" unidades es: $"+precioTotal+"\nLa ganancia para el vendedor es: $"+gananciaVendedor);      
        } else if (intDato>499){
            precioTotal=intDato*6;
            gananciaVendedor=precioTotal*0.0825;
            alert("El precio total por "+intDato+" unidades es: $"+precioTotal+"\nLa ganancia para el vendedor es: $"+gananciaVendedor);      
        }
    } else {
        throw new Error ("El dato ingresado no es valido");
    }
} catch(error) {
    alert(error.message);
} finally {
    if (document.getElementById("userInput18").value.trim()!==""){
        hidePrompt18();
        document.getElementById("userInput18").value=""; 

    }
}

}

function ejercicio19() {
  try {
    let idEmpleado = document.getElementById("excer19Input1").value.trim();
    let cantDias = document.getElementById("excer19Input2").value.trim();
    let intDato2 = parseInt(cantDias);
    let posicion = "";
    let montoSueldo = 0;

    if (idEmpleado == "" || cantDias == "") {
      throw new Error("Los campos no pueden estar vacíos.");
    }
    if (!isNaN(intDato2)) {
      switch (idEmpleado) {
        case '01':
                    posicion = "Cajero";
                    if (intDato2 > 6) {
                        alert(
                        "La cantidad de días maxima son 06 días y no se puede superar"
                        );
                    } else {
                        montoSueldo = 56 * intDato2;
                        alert(
                        "El monto a pagar al empleado tipo " +
                            posicion +
                            " es $" +
                            montoSueldo
                        );
                    }
                    break;
        case '02':
                    posicion = "Servidor";
                    if (intDato2 > 6) {
                        alert(
                        "La cantidad de días maxima son 06 días y no se puede superar"
                        );
                    } else {
                        montoSueldo = 64 * intDato2;
                        alert(
                        "El monto a pagar al empleado tipo " +
                            posicion +
                            " es $" +
                            montoSueldo
                        );
                    }
                    break;
        case '03':
                    posicion = "Preparador de mezclas";
                    if (intDato2 > 6) {
                        alert(
                        "La cantidad de días maxima son 06 días y no se puede superar"
                        );
                    } else {
                        montoSueldo = 80 * intDato2;
                        alert(
                        "El monto a pagar al empleado tipo " +
                            posicion +
                            " es $" +
                            montoSueldo
                        );
                    }
                    break;
        case '04':
                    posicion = "Mantenimiento";
                    if (intDato2 > 6) {
                        alert(
                        "La cantidad de días maxima son 06 días y no se puede superar"
                        );
                    } else {
                        montoSueldo = 48 * intDato2;
                        alert(
                        "El monto a pagar al empleado tipo " +
                            posicion +
                            " es $" +
                            montoSueldo
                        );
                    }
                    break;
        default:
                    alert("Id de empleado no valido");
                    break;
      }
    } else {
      throw new Error("El dato ingresado no es valido.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("excer19Input1").value.trim()!=="" && document.getElementById("excer19Input2").value.trim()!=="") {
      hidePrompt19();
      document.getElementById("excer19Input1").value = "";
      document.getElementById("excer19Input2").value = "";
    }
  }
}

function ejercicio20() {
  try {
    let numDato1 = document.getElementById("excer20Input1").value;
    let numDato2 = document.getElementById("excer20Input2").value;
    let numDato3 = document.getElementById("excer20Input3").value;
    let numDato4 = document.getElementById("excer20Input4").value;
    let intDato1 = parseInt(numDato1);
    let intDato2 = parseInt(numDato2);
    let intDato3 = parseInt(numDato3);
    let intDato4 = parseInt(numDato4);
    let cantPares = 0;
    let numMayor = 0;

    if (numDato1 == "" || numDato2 == "" || numDato3 == "" || numDato4 == "") {
      throw new Error("No se permiten campos vacios.");
    }
    if (
      !isNaN(intDato1) &&
      !isNaN(intDato2) &&
      !isNaN(intDato3) &&
      !isNaN(intDato4)
    ) {
      if (intDato1 % 2 == 0) {
        cantPares = cantPares + 1;
      }
      if (intDato2 % 2 == 0) {
        cantPares = cantPares + 1;
      }
      if (intDato3 % 2 == 0) {
        cantPares = cantPares + 1;
      }
      if (intDato4 % 2 == 0) {
        cantPares = cantPares + 1;
      }
      numMayor = intDato1;
      if (intDato2 > numMayor) {
        numMayor = intDato2;
      }
      if (intDato3 > numMayor) {
        numMayor = intDato3;
      }
      if (intDato4 > numMayor) {
        numMayor = intDato4;
      }
      alert(
        "Ope1. La cantidad de números pares es: " +
          cantPares +
          "\nOpe2. El número mayor de los cuatro es: " +
          numMayor
      );
      if (intDato3 % 2 == 0) {
        cuadradoSegundo = intDato2 * intDato2;
        alert(
          "Ope3. El tercer valor es par y el cuadrado del segundo número es: " +
            cuadradoSegundo
        );
      }
      if (intDato1 < intDato4) {
        media = (intDato1 + intDato2 + intDato3 + intDato4) / 4;
        alert(
          "Ope4. El primer número es menor que el cuarto, la media de los cuatro números es: " +
            media
        );
      }
      if (intDato2 > intDato3) {
        if (intDato3 >= 50 && intDato3 <= 700) {
          suma = intDato1 + intDato2 + intDato3 + intDato4;
          alert(
            "Ope5. El segundo es mayor que el tercero, la suma de los cuatro números es: " +
              suma
          );
        }
      }
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (
      document.getElementById("excer20Input1").value.trim() !== "" &&
      document.getElementById("excer20Input2").value.trim() !== "" &&
      document.getElementById("excer20Input3").value.trim() !== "" &&
      document.getElementById("excer20Input4").value.trim() !== ""
    ) {
      hidePrompt20();
      document.getElementById("excer20Input1").value = "";
      document.getElementById("excer20Input2").value = "";
      document.getElementById("excer20Input3").value = "";
      document.getElementById("excer20Input4").value = "";
    }
  }
}

function ejercicio21() {
  try {
    let numDato = document.getElementById("userInput21").value;
    let intDato = parseInt(numDato);
    let resultado = 0;

    if (numDato == "") {
      throw new Error("No se permiten campos vacios.");
    }
    if (!isNaN(intDato)) {
      if (intDato < 0) {
        alert("El valor ingresado debe ser un entero positivo.");
      } else {
        let expresion = "";
        for (let i = intDato; i >= 1; i--) {
          if (i == intDato) {
            expresion = i.toString();
          } else {
            expresion += " x " + i;
          }
        }
        let resultado = 1;
        for (let i = 1; i <= intDato; i++) {
          resultado *= i;
        }
        alert(
          "El cálculo del factorial de !" +
            intDato +
            " = " +
            expresion +
            "\nEl resultado de la operacion es: " +
            resultado
        );
      }
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput21").value.trim() !== "") {
      hidePrompt21();
      document.getElementById("userInput21").value = "";
    }
  }
}

function ejercicio22() {
  try {
    let numDato = document.getElementById("userInput22").value;
    let intDato = parseInt(numDato);
    let resultado = 0;

    if (numDato == "") {
      throw new Error("No se permiten campos vacios.");
    }

    if (!isNaN(intDato)) {
      if (intDato <= 0) {
        alert(
          "El valor ingresado es invalido, por favor ingresar numeros enteros positivos"
        );
      } else {
        for (let i = 1; i <= intDato; i++) {
          resultado += i;
        }
        alert(
          "El resultado de la suma de los primeros " +
            intDato +
            " números es: " +
            resultado
        );
      }
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput22").value.trim() !== "") {
      hidePrompt22();
      document.getElementById("userInput22").value = "";
    }
  }
}

function ejercicio23() {
  try {
    let numDato = document.getElementById("userInput23").value;
    let intDato = parseInt(numDato);
    let resultado = 0;

    if (numDato == "") {
      throw new Error("No se permiten campos vacios.");
    }
    if (!isNaN(intDato)) {
      if (intDato <= 0) {
        alert("Por favor ingresar numeros enteros positivos");
      } else {
        for (i = 1; i <= intDato; i++) {
          if (i % 2 != 0) {
            resultado += i;
          }
        }
        alert(
          "El resultado de la suma de los números impares menores a " +
            intDato +
            " es: " +
            resultado
        );
      }
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput23").value.trim() !== "") {
      hidePrompt23();
      document.getElementById("userInput23").value = "";
    }
  }
}

function ejercicio24() {
  try {
    let numDato = document.getElementById("userInput24").value;
    let intDato = parseInt(numDato);
    let resultado = 0;

    if (numDato == "") {
      throw new Error("No se permiten campos vacios.");
    }
    if (!isNaN(intDato)) {
      if (intDato <= 0 || intDato > 1000) {
        alert(
          "El valor ingresado es invalido, por favor ingresar numeros enteros positivos hasta el 1000"
        );
      } else {
        for (let i = 1; i <= intDato; i++) {
          if (i % 2 == 0) {
            resultado += i;
          }
        }
        alert(
          "El resultado de la suma de los números pares menores a " +
            intDato +
            " es: " +
            resultado
        );
      }
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput24").value.trim() !== "") {
      hidePrompt24();
      document.getElementById("userInput24").value = "";
    }
  }
}

function ejercicio25() {
  try {
    let numDato = document.getElementById("userInput25").value;
    let intDato = parseInt(numDato);
    let resultado = 0;

    if (numDato == "") {
      throw new Error("No se permiten campos vacios.");
    }
    if (!isNaN(intDato)) {
      if (intDato < 0) {
        alert("Dato no valido, el número debe ser entero positivo.");
      } else {
        factorial = 1;
        for (i = 1; i <= intDato; i++) {
          factorial *= i;
        }
        alert("Se muestra el factorial de !" + intDato + " es: " + factorial);
      }
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput25").value.trim() !== "") {
      hidePrompt25();
      document.getElementById("userInput25").value = "";
    }
  }
}

function ejercicio26() {
  try {
    let numDato1 = document.getElementById("Excer26Input1").value;
    let numDato2 = document.getElementById("Excer26Input2").value;
    let intDato1 = parseInt(numDato1);
    let intDato2 = parseInt(numDato2);
    let resultado = 0;

    if (numDato1 == "" || numDato2 == "") {
      throw new Error("No se permiten campos vacios.");
    }
    if (!isNaN(intDato1) && !isNaN(intDato2)) {
      if (intDato1 <= 0 || intDato2 <= 0) {
        alert(
          "El dividendo o divisor debe ser un número entero positivo mayor que 0."
        );
      } else {
        intCociente = 0;
        intResto = intDato1;
        while (intResto >= intDato2) {
          intResto -= intDato2;
          intCociente += 1;
        }
        alert(
          "El valor calculado del cociente es: " +
            intCociente +
            "\nEl valor calculado del resto es: " +
            intResto
        );
      }
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (
      document.getElementById("Excer26Input1").value.trim() !== "" &&
      document.getElementById("Excer26Input2").value.trim() !== ""
    ) {
      hidePrompt26();
      document.getElementById("Excer26Input1").value = "";
      document.getElementById("Excer26Input2").value = "";
    }
  }
}

function ejercicio27() {
  try {
    let totalSuma = 0;
    let contador = 0;
    let datoNumero = document.getElementById("userInput27").value;
    let intDato = parseInt(datoNumero);

    if (datoNumero == "") {
        throw new Error("No se permiten campos vacios.");
      }

    if (!isNaN(intDato)) {
      while (intDato >= 0) {
        totalSuma += intDato;
        contador++;

        intDato = parseFloat(prompt("Por favor ingrese un número:"));

        if (isNaN(intDato)) {
          alert("El dato ingresado no es un número valido.");
          return;
        }
      }

      if (contador > 0) {
            const proMedia = totalSuma / contador;
            alert(
            "El cálculo de la media de los "+contador+" números ingresados es " + proMedia
            );
        } else {
            alert(
            "No es posible determinar la media, se ingresaron números negativos."
            );
        }
        } else {
      alert("Entrada no válida. Por favor, ingrese un número.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput27").value.trim() !== "") {
      hidePrompt27();
      document.getElementById("userInput27").value = "";
    }
  }
}


function ejercicio28() {
  try {
    let numDato = document.getElementById("userInput28").value;
    let intDato = parseInt(numDato);
    let resultado = 0;

    if (numDato == "") {
      throw new Error("No se permiten campos vacios.");
    }
    if (!isNaN(intDato)) {
      if (intDato <= 0 || intDato > 100) {
        alert("El valor ingresado debe ser entero positivo y menor a 101");
      } else {
        
        let i = 0;
        do {
          i += 1;
          resultado += i;
        } while (i<intDato);
        alert(
          "El resultado de la suma de los primeros " +
            intDato +
            " números es: " +
            resultado
        );
      }
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput28").value.trim() !== "") {
      hidePrompt28();
      document.getElementById("userInput28").value = "";
    }
  }
}

function ejercicio29() {
  try {
    let numDato = document.getElementById("userInput29").value.trim();
    let intDato = parseInt(numDato);
    let resultado = 0;

    if (numDato == "") {
      throw new Error("No se permiten campos vacios.");
    }
    if (!isNaN(intDato)) {
      if (intDato <= 0 || intDato > 100) {
        alert("El valor ingresado debe ser entero positivo y menor a 101");
      } else {
        let i = 0;

        while (i < intDato) {
          i += 1;
          resultado += i;
        }

        alert(
          "El resultado de la suma de los primeros " +
            intDato +
            " números es: " +
            resultado
        );
      }
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput29").value.trim() !== "") {
      hidePrompt29();
      document.getElementById("userInput29").value = "";
    }
  }
}

function ejercicio30() {
  try {
    let numDato = document.getElementById("userInput30").value.trim();
    let intDato = parseInt(numDato);
    let resultado = 0;

    if (numDato == "") {
      throw new Error("No se permiten campos vacios.");
    }
    if (!isNaN(intDato)) {
      if (intDato <= 0 || intDato > 100) {
        alert("El valor ingresado debe ser entero positivo y menor a 101");
      } else {
        for (let i = 1; i <= intDato; i++) {
          resultado += i;
        }

        alert(
          "El resultado de la suma de los primeros " +
            intDato +
            " números es: " +
            resultado
        );
      }
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput30").value.trim() !== "") {
      hidePrompt30();
      document.getElementById("userInput30").value = "";
    }
  }
}

function ejercicio31() {
  try {
    let totalPar = 0;
    let totalImpar = 0;
    let cantPares = 0;
    let cantImpares = 0;
    let datoNumero = document.getElementById("userInput31").value;
    let intDato = parseInt(datoNumero);

    if (datoNumero == "") {
        throw new Error("No se permiten campos vacios.");
      }

    if (!isNaN(intDato)) {
      let i = 0;
      while (i < 10) {
        i++;
        if (intDato % 2 == 0) {
          cantPares++;
          totalPar += intDato;
        } else {
          cantImpares++;
          totalImpar += intDato;
        }

        intDato = parseFloat(
          prompt("Por favor ingrese el siguiente número:")
        );

        if (isNaN(intDato)) {
          alert("El dato ingresado no es un número valido.");
          return;
        }
      }

      if (0 < cantPares) {
        media = totalPar / cantPares;
      }

      if (0 < cantImpares) {
        mediaI = totalImpar / cantImpares;
      }
      alert(
        "La cantidad de pares es " +
          cantPares +
          " y la suma de pares es " +
          totalPar +
          " por lo que la media de pares es: " +
          media +
          "\nLa cantidad de impares es " +
          cantImpares +
          " y la suma de impares es " +
          totalImpar +
          " por lo que la media de impares es: " +
          mediaI
      );
    } else {
      alert("Entrada no válida. Por favor, ingrese un número.");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput31").value.trim() !== "") {
      hidePrompt31();
      document.getElementById("userInput31").value = "";
    }
  }
}

function ejercicio32() {
    try {
      let provincias = [];
      let mayorPoblacion = -1;
      let ciudadMayorPoblacion = "";
          
      for (let provincia = 1; provincia <= 3; provincia++) {
        let nombrePro = prompt(`Por favor ingrese el nombre de la provincia número ${provincia}:`);
        if (nombrePro.trim() === "") {
          throw new Error("No se permiten campos vacíos.");
        }
          
        if (!provincias[nombrePro]) {
          provincias[nombrePro] = [];
        }
          
        for (let ciudad = 1; ciudad <= 11; ciudad++) {
          let ciudadNombre = prompt(`Por favor ingrese el nombre de la ciudad número ${ciudad}:`);
          if (ciudadNombre.trim() === "") {
            throw new Error("No se permiten campos vacíos.");
          }
          
          let poblacionActual = parseInt(prompt(`Por favor ingrese la cantidad de la población de ${ciudadNombre}:`));
          if (isNaN(poblacionActual) || poblacionActual <= 0) {
            throw new Error("La población debe ser un número entero positivo.");
          }
          
          if (poblacionActual > mayorPoblacion) {
            mayorPoblacion = poblacionActual;
            ciudadMayorPoblacion = ciudadNombre;
          }
        }
      }
          
      alert("La ciudad con la mayor población es "+ciudadMayorPoblacion+" con una población de "+mayorPoblacion);
    } catch (error) {
      alert(error.message);
    } finally {
              if(document.getElementById("userInput32").value.trim() !=="") {
                hidePrompt32();
                document.getElementById("userInput32").value="";
              }
            }
          
}

function ejercicio33() {
  try {
    let datoNumero = document.getElementById("userInput33").value;
    let intDato = parseFloat(datoNumero);

    if (datoNumero == "") {
      throw new Error("No se permiten campos vacios.");
    }

    if (datoNumero === "N" || datoNumero === "n") {
      alert("De acuerdo, programa finalizado.");
    } else if (datoNumero === "S" || datoNumero === "s") {
      alert("De acuerdo, continua en ejecucion el programa...");
      let confirmacion;
      do {
        confirmacion = prompt(
          "Confirmar, ¿Sí desea continuar con el programa? (S/N): "
        );
        switch (confirmacion) {
          case "S" :
            alert("De acuerdo, continua en ejecucion el programa...");
            break;
          case "N" :
            alert("De acuerdo, programa finalizado.");
            break;
          default:
            alert(
              "Opción no válida. Por favor ingrese S para continuar o N para finalizar."
            );
            break;
        }
      } while (confirmacion !== "N" && confirmacion !== "n");
    } else {
      alert(
        "Opción no válida. Por favor ingrese S para continuar o N para finalizar."
      );
      let confirmacion;
      do {
        confirmacion = prompt(
          "Confirmar, ¿Sí desea continuar con el programa? (S/N): "
        );
        switch (confirmacion) {
          case "S" :
            alert("De acuerdo, continua en ejecucion el programa...");
            break;
          case "N" :
            alert("De acuerdo, programa finalizado.");
            break;
          default:
            alert(
              "Opción no válida. Por favor ingrese S para continuar o N para finalizar."
            );
            break;
        }
      } while (confirmacion !== "N" && confirmacion !== "n");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput33").value.trim() !== "") {
      hidePrompt33();
      document.getElementById("userInput33").value = "";
    }
  }
}

function ejercicio34() {
  try {
    let numDato = document.getElementById("userInput34").value;
    let intDato = parseInt(numDato);
    let resultado = 0;

    if (numDato == "") {
      throw new Error("No se permiten campos vacios.");
    }
    if (!isNaN(intDato)) {
      if (intDato < 1 || intDato > 9) {
        alert(
          "El número a ingresar debe estar entre 1 y 9. Por favor pruebe nuevamente"
        );
      } else {
        let expresion = "";
        for (i = 1; i <= 12; i++) {
          resultado = intDato * i;
          expresion +=
            intDato.toString() +
            " x " +
            i.toString() +
            " = " +
            resultado.toString() +
            "\n";
        }
        alert("Tabla de multiplicar del " + intDato + " : \n" + expresion);
      }
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput34").value.trim() !== "") {
      hidePrompt34();
      document.getElementById("userInput34").value = "";
    }
  }
}

function ejercicio35() {
  try {
    let inputElement = document.getElementById("userInput35");
    let numDato = inputElement.value.trim();

    if (numDato === "") {
      throw new Error("No se permiten campos vacíos.");
    }

    let intDato = parseFloat(numDato);

    if (isNaN(intDato)) {
      throw new Error("El valor ingresado no es un número válido.");
    }

    let numMayor = intDato;
    let numMenor = intDato;

    for (let i = 2; i <= 20; i++) {
      let datoNum = prompt(`Por favor ingrese el siguiente número ${i}:`);
      intDato = parseFloat(datoNum);

      if (isNaN(intDato)) {
        throw new Error("El valor ingresado no es un número válido.");
      }

      if (intDato > numMayor) {
        numMayor = intDato;
      }
      if (intDato < numMenor) {
        numMenor = intDato;
      }
    }

    alert(
      `El valor determinado como número mayor es ${numMayor}. \nEl valor determinado como número menor es ${numMenor}.`
    );
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput35").value.trim() !== "") {
      hidePrompt35();
      document.getElementById("userInput35").value = "";
    }
  }
}

function ejercicio36() {
  try {
    let numDato = document.getElementById("userInput36").value;
    let intDato = parseInt(numDato);

    if (numDato == "") {
      throw new Error("No se permiten campos vacios.");
    }
    if (!isNaN(intDato)) {
      if (intDato <= 0) {
        alert("La cantidad de datos debe ser mayor o igual a 1.");
      } else {
        let a=0;
        let b=1;
        let mensaje = "La serie de Fibonacci calculada es: \n";

        if (intDato > 1) {
          mensaje += "Inicio = " + b + "\n";
        }

        for (let i = 2; i <= intDato; i++) {
          let c = a + b;
          mensaje += a + " + " + b + " = " + c + "\n";
          a = b;
          b = c;
        }
        alert(mensaje);
      }
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput36").value.trim() !== "") {
      hidePrompt36();
      document.getElementById("userInput36").value = "";
    }
  }
}

function ejercicio37() {
  try {
    let numDato1 = document.getElementById("excer37Input1").value;
    let numDato2 = document.getElementById("excer37Input2").value;
    let intDato1 = parseInt(numDato1);
    let intDato2 = parseInt(numDato2);

    if (numDato1 == "" || numDato2 == "") {
      throw new Error("No se permiten campos vacios.");
    }
    if (!isNaN(intDato1) && !isNaN(intDato2)) {
      if (intDato1 <= 0 || intDato2 <= 0) {
        alert("Los números deben ser enteros positivos.");
      }
      {
        while (intDato2 !== 0) {
          let cons = intDato2;
          intDato2 = intDato1 % intDato2;
          intDato1 = cons;
        }
        alert("EL MCD determinado es " + intDato1);
      }
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (
      document.getElementById("excer37Input1").value.trim() !== "" &&
      document.getElementById("excer37Input2").value.trim() !== ""
    ) {
      hidePrompt37();
      document.getElementById("excer37Input1").value = "";
      document.getElementById("excer37Input2").value = "";
    }
  }
}

function ejercicio38() {
  try {
    let numDato = document.getElementById("userInput38").value;
    let intDato = parseInt(numDato);
    let sumaDivisor = 0;

    if (numDato == "") {
      throw new Error("No se permiten campos vacios.");
    }
    if (!isNaN(intDato)) {
      if (intDato <= 0) {
        alert("Dato invalido, el número debe ser entero y positivo.");
      } else {
        
        for (let i = 1; i <= intDato / 2; i++) {
          if (intDato % i === 0) {
            sumaDivisor += i;
          }
        }
        if (sumaDivisor === intDato) {
          alert("El número " + intDato + " es perfecto");
        } else {
          alert("El número " + intDato + " NO es perfecto");
        }

      }
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput38").value.trim() !== "") {
      hidePrompt38();
      document.getElementById("userInput38").value = "";
    }
  }
}

function ejercicio39() {
  try {
    let numDato = document.getElementById("userInput39").value;
    let intDato = parseInt(numDato);
    let numPI = 0;

    if (numDato == "") {
      throw new Error("No se permiten campos vacios.");
    }
    if (!isNaN(intDato)) {
      for (i = 0; i <= intDato - 1; i++) {
        let denominador = 2 * i + 1;
        let termino = 4 / denominador;
        if (i % 2 == 0) {
          numPI += termino;
        } else {
          numPI -= termino;
        }
      }
      alert("Se determina la aproximación de pi es: " + numPI);
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput39").value.trim() !== "") {
      hidePrompt39();
      document.getElementById("userInput39").value = "";
    }
  }
}

function ejercicio40() {
  try {
    let numDato = document.getElementById("userInput40").value;
    let intDato = parseInt(numDato);
    let numPI = 3;

    if (numDato == "") {
      throw new Error("No se permiten campos vacios.");
    }
    if (!isNaN(intDato)) {
      for (i = 1; i <= intDato; i++) {
        let denominador1 = 2 * i;
        let denominador2 = denominador1 + 1;
        let denominador3 = denominador2 + 1;
        let termino = 4 / (denominador1 * denominador2 * denominador3);
        if (i % 2 == 1) {
          numPI += termino;
        } else {
          numPI -= termino;
        }
      }
      alert("Se determina la aproximación de pi es: " + numPI);
    } else {
      throw new Error("El dato ingresado no es valido");
    }
  } catch (error) {
    alert(error.message);
  } finally {
    if (document.getElementById("userInput40").value.trim() !== "") {
      hidePrompt40();
      document.getElementById("userInput40").value = "";
    }
  }
}

function showPrompt01() {
  document.getElementById("customPrompt01").style.display = "flex";
}

function hidePrompt01() {
  document.getElementById("customPrompt01").style.display = "none";
}

function hidePrompt02() {
  document.getElementById("customPrompt02").style.display = "none";
}

function showPrompt02() {
  document.getElementById("customPrompt02").style.display = "flex";
}

function showPrompt03() {
  document.getElementById("customPrompt03").style.display = "flex";
}

function hidePrompt03() {
  document.getElementById("customPrompt03").style.display = "none";
}

function hidePrompt04() {
  document.getElementById("customPrompt04").style.display = "none";
}

function showPrompt04() {
  document.getElementById("customPrompt04").style.display = "flex";
}

function showPrompt05() {
  document.getElementById("customPrompt05").style.display = "flex";
}

function hidePrompt05() {
  document.getElementById("customPrompt05").style.display = "none";
}

function hidePrompt06() {
  document.getElementById("customPrompt06").style.display = "none";
}

function showPrompt06() {
  document.getElementById("customPrompt06").style.display = "flex";
}

function showPrompt07() {
  document.getElementById("customPrompt07").style.display = "flex";
}

function hidePrompt07() {
  document.getElementById("customPrompt07").style.display = "none";
}

function hidePrompt08() {
  document.getElementById("customPrompt08").style.display = "none";
}

function showPrompt08() {
  document.getElementById("customPrompt08").style.display = "flex";
}

function showPrompt09() {
  document.getElementById("customPrompt09").style.display = "flex";
}

function hidePrompt09() {
  document.getElementById("customPrompt09").style.display = "none";
}

function hidePrompt10() {
  document.getElementById("customPrompt10").style.display = "none";
}

function showPrompt10() {
  document.getElementById("customPrompt10").style.display = "flex";
}

function showPrompt11() {
  document.getElementById("customPrompt11").style.display = "flex";
}

function hidePrompt11() {
  document.getElementById("customPrompt11").style.display = "none";
}

function hidePrompt12() {
  document.getElementById("customPrompt12").style.display = "none";
}

function showPrompt12() {
  document.getElementById("customPrompt12").style.display = "flex";
}

function showPrompt13() {
  document.getElementById("customPrompt13").style.display = "flex";
}

function hidePrompt13() {
  document.getElementById("customPrompt13").style.display = "none";
}

function hidePrompt14() {
  document.getElementById("customPrompt14").style.display = "none";
}

function showPrompt14() {
  document.getElementById("customPrompt14").style.display = "flex";
}

function showPrompt15() {
  document.getElementById("customPrompt15").style.display = "flex";
}

function hidePrompt15() {
  document.getElementById("customPrompt15").style.display = "none";
}

function hidePrompt16() {
  document.getElementById("customPrompt16").style.display = "none";
}

function showPrompt16() {
  document.getElementById("customPrompt16").style.display = "flex";
}

function showPrompt17() {
  document.getElementById("customPrompt17").style.display = "flex";
}

function hidePrompt17() {
  document.getElementById("customPrompt17").style.display = "none";
}

function hidePrompt18() {
  document.getElementById("customPrompt18").style.display = "none";
}

function showPrompt18() {
  document.getElementById("customPrompt18").style.display = "flex";
}

function showPrompt19() {
  document.getElementById("customPrompt19").style.display = "flex";
}

function hidePrompt19() {
  document.getElementById("customPrompt19").style.display = "none";
}

function hidePrompt20() {
  document.getElementById("customPrompt20").style.display = "none";
}

function showPrompt20() {
  document.getElementById("customPrompt20").style.display = "flex";
}

function showPrompt21() {
  document.getElementById("customPrompt21").style.display = "flex";
}

function hidePrompt21() {
  document.getElementById("customPrompt21").style.display = "none";
}

function hidePrompt22() {
  document.getElementById("customPrompt22").style.display = "none";
}

function showPrompt22() {
  document.getElementById("customPrompt22").style.display = "flex";
}

function showPrompt23() {
  document.getElementById("customPrompt23").style.display = "flex";
}

function hidePrompt23() {
  document.getElementById("customPrompt23").style.display = "none";
}

function hidePrompt24() {
  document.getElementById("customPrompt24").style.display = "none";
}

function showPrompt24() {
  document.getElementById("customPrompt24").style.display = "flex";
}

function showPrompt25() {
  document.getElementById("customPrompt25").style.display = "flex";
}

function hidePrompt25() {
  document.getElementById("customPrompt25").style.display = "none";
}

function hidePrompt26() {
  document.getElementById("customPrompt26").style.display = "none";
}

function showPrompt26() {
  document.getElementById("customPrompt26").style.display = "flex";
}

function showPrompt27() {
  document.getElementById("customPrompt27").style.display = "flex";
}

function hidePrompt27() {
  document.getElementById("customPrompt27").style.display = "none";
}

function hidePrompt28() {
  document.getElementById("customPrompt28").style.display = "none";
}

function showPrompt28() {
  document.getElementById("customPrompt28").style.display = "flex";
}

function showPrompt29() {
  document.getElementById("customPrompt29").style.display = "flex";
}

function hidePrompt29() {
  document.getElementById("customPrompt29").style.display = "none";
}

function hidePrompt30() {
  document.getElementById("customPrompt30").style.display = "none";
}

function showPrompt30() {
  document.getElementById("customPrompt30").style.display = "flex";
}

function showPrompt31() {
  document.getElementById("customPrompt31").style.display = "flex";
}

function hidePrompt31() {
  document.getElementById("customPrompt31").style.display = "none";
}

function hidePrompt32() {
  document.getElementById("customPrompt32").style.display = "none";
}

function showPrompt32() {
  document.getElementById("customPrompt32").style.display = "flex";
}

function showPrompt33() {
  document.getElementById("customPrompt33").style.display = "flex";
}

function hidePrompt33() {
  document.getElementById("customPrompt33").style.display = "none";
}

function hidePrompt34() {
  document.getElementById("customPrompt34").style.display = "none";
}

function showPrompt34() {
  document.getElementById("customPrompt34").style.display = "flex";
}

function showPrompt35() {
  document.getElementById("customPrompt35").style.display = "flex";
}

function hidePrompt35() {
  document.getElementById("customPrompt35").style.display = "none";
}

function hidePrompt36() {
  document.getElementById("customPrompt36").style.display = "none";
}

function showPrompt36() {
  document.getElementById("customPrompt36").style.display = "flex";
}

function showPrompt37() {
  document.getElementById("customPrompt37").style.display = "flex";
}

function hidePrompt37() {
  document.getElementById("customPrompt37").style.display = "none";
}

function hidePrompt38() {
  document.getElementById("customPrompt38").style.display = "none";
}

function showPrompt38() {
  document.getElementById("customPrompt38").style.display = "flex";
}

function showPrompt39() {
  document.getElementById("customPrompt39").style.display = "flex";
}

function hidePrompt39() {
  document.getElementById("customPrompt39").style.display = "none";
}

function hidePrompt40() {
  document.getElementById("customPrompt40").style.display = "none";
}

function showPrompt40() {
  document.getElementById("customPrompt40").style.display = "flex";
}
