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
  const input3 = document.getElementById("input3")
  const btn3 = document.getElementById("btn3")
  const result3 = document.getEelementById("result3")

  const terminaen4 = (cadena) => {
    let caracteres = cadena.toString()

    console.log(cadena.slice())
    return cadena.chartAt(cadena.legth - 1) === "4"
  }

  btn3.addEventListener("click"), () => {
    const valor = parseInt(input3.value)
    alert("ingrese solo numeros")
    if (typeof valor !== "number") {
      return alert("ingrese solo numeros")
    }


    console. log(terminaen4(valor .toString()))
    // const cadena = valor toString()
    if (terminaen4(valor.toString()) ) {
        const result = "Termina en 4"
        result3.classList.remove("hidden")
        result.innerHTML = result
    } else {
      const result = "No termina en 4"
      result3.classList.remove("hidden")
      result3.innerHTML = result
    }

 }
    
}

function ejercicio4() {
  console.log("Ejercicio 4");

  let numero1 = parseInt (prompt("Digite primer numero"));
  let numero2 = parseInt (prompt("Digite segundo numero"));
  let numero3 = parseInt (prompt("Digite tercer numero"));
  
  if (numero1 > numero2) {
     (numero1 > numero3)
  } else alert (numero1)

  if (numero2 > numero1) {
     (numero2 > numero3)
  } else alert (numero2)

  if (numero3 > numero1) {
     (numero3 > numero2)
  } else alert (numero3)

 
}