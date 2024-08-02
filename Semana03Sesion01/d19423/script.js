var numero = 1;
console.log(numero);
var texto = "Hola";
var text1 = "Hola \n desde js";
var text2 = `Hola 
desde
mi 
aplicacion 
js ${numero}`;
console.log(text1);
console.log(text2);

var numero2 = 33;
var resultado = numero + numero2;
console.log(resultado);
var res = text1 + text2;
console.log(res);

var parseo = parseInt("33");
console.log(typeof parseo);

let primerNumero = 33;
var segundoNumero = 44;

const PI = 3.141516;

primerNumero = 55;
//PI = 3.14165444;
primerNumero = 66;

let bandera = true;
bandera = false;

{
  let bandera = "Lo que sea";
  bandera = true;
  console.log(bandera);
}

let indefinido = undefined;

let listadoNotas = [19, 20, 15, 14];
let hobbies = ["AeroModelisto", "Gunpla"];
let arrDatos = [true, undefined, "Palabra", 33.333, 33];

console.log(listadoNotas);
console.log(arrDatos[2]);

let persona = {
  nombre: "Roberto",
  apellido: "Pineda",
  edad: 41,
  hobbies: ["AeroModelisto", "Gunpla"],
  padre: {
    nombre: "Rene",
    apellido: "Pineda",
  },
  estadoCivil: false,
};

console.log(persona.nombre);
console.log(persona.hobbies);

let divResultado = document.getElementById("resultado");
divResultado.innerText = `mi nombre es: ${persona.nombre} ${persona.apellido}`;
