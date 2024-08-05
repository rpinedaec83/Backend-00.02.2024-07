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

}


