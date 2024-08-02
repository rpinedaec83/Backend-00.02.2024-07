let edad = 18;
if (edad > 17) {
  console.log("Si puedes votar");
} else {
  console.log("Aun no puedes votar");
}

let objPersona = {
  nombre: "Roberto",
  apellido: "Pineda",
  edad: 40,
  licencia: false,
};

objPersona.licencia = true;

if (objPersona.edad > 17 && objPersona.licencia) {
  console.log("Si puedes conducir");
} else {
  console.log("No puedes conducir");
}

console.log(edad > 17 ? "Si puedes votar" : "No puedes votar");

console.log(typeof objPersona.licencia);
objPersona.licencia = "Tipo B";

if (typeof objPersona.licencia != "boolean") {
  console.log("Hay un error");
}

let numero = 33;
let strNumero = "33";

if (numero == strNumero) {
  console.log("Es igual");
} else {
  console.log("No es igual");
}

if (numero === strNumero) {
  console.log("Es igual");
} else {
  console.log("No es igual");
}

let arrNumeros= [10,20,30,40,50,60,70,80,90,100];

for (let index = 0; index < arrNumeros.length; index++) {
    const element = arrNumeros[index];
    console.log(element);
}

for (let index = 0; index < 100; index++) {
    console.log(index);
}

for (const key in objPersona) {
    if (Object.hasOwnProperty.call(objPersona, key)) {
        const element = objPersona[key];
        console.log(element);
    }
}

arrNumeros.forEach(element => {
    console.log(element);
});

let bandera = false;

while (bandera) {
  let intPrimerNumero = parseInt(prompt("Escribe el Primer Numero"));
  let intSegundoNumero = parseInt(prompt("Escribe el segundo Numero"));
  let intOpcion = parseInt(
    prompt(`Digita 1 para sumar
Digita 2 para restar
Digita 3 para multiplicar
Digita 4 para dividir
Digita 0 para salir`)
  );

  console.log(intOpcion);
  console.log(typeof intOpcion);

  let flResultado = 0.0;

  try {
    switch (intOpcion) {
      case 1:
        console.log("Opcion 1");
        flResultado = intPrimerNumero + intSegundoNumero;
        break;
      case 2:
        console.log("Opcion 2");
        flResultado = intPrimerNumero - intSegundoNumero;
        break;
      case 3:
        console.log("Opcion 3");
        flResultado = intPrimerNumero * intSegundoNumero;
        break;
      case 4:
        console.log("Opcion 4");
        flResultado = intPrimerNumero / intSegundoNumero;
        break;
      case 0:
        console.log("Opcion 0");
        bandera = false;
        break;

      default:
        console.log("Puso cualquier cosa");
        throw "Error por que no puso ninguna opcion valida";
        break;
    }

    alert(`El resultado es ${flResultado}`);
  } catch (error) {
    console.error(error);
  }
}
// let bandera = true;
// let intNumero  = 0;
// while (bandera) {
//     console.log(intNumero);
//     intNumero ++;
//     if(intNumero>10){
//         bandera = false;
//     }
// }


// Realizar el codigo de verificacion del DNI