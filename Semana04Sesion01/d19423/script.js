// function sumarDigitos(primerNumero = 0, segundoNumero = 0){
//     let resultado = primerNumero + segundoNumero;
//    // console.log(resultado);
//    // alert(resultado);
//    let validacion = validarSuma(resultado, primerNumero)
//    if(validacion === segundoNumero){
//     console.log("Correcto")
//     return resultado;
//    }
//    else{
//     throw "Error"
//    }

// }

// function validarSuma(valor, primerNumero){

//     let resultado = valor - primerNumero;
//     return resultado
// }

// let suma = sumarDigitos(50, 10);
// console.log(suma);
// let resultado = 0;

// let resta = function(){return "Hola"}
// console.log(resta);

// hello = () => {
//     return "Hello World!";
//   }

//   let myFunction = (a, b) => a * b;

//  console.log( myFunction(3,5))

//  async function myDisplay(nombre) {
//     let myPromise = new Promise(function(resolve) {
//         let rdnNumero = randomIntFromInterval(1000, 5000)
//       setTimeout(function() {resolve(`I love You ${nombre}!!`);}, rdnNumero);
//     });
//     console.log( await myPromise);
//   }

//   function randomIntFromInterval(min, max) { // min and max included
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }

//   myDisplay("deysi");
//   myDisplay("Selina");
//   myDisplay("Bjor");

//  let objPersona={
//     nombre: "Roberto",
//     apellido: "Pineda",
//     levantarse(alarma){
//         console.log("Me estoy levantando a las " + alarma)
//     }
//  }

//  console.log(objPersona.nombre)
//  objPersona.levantarse("08:30")

const Heladeria = (function () {
  let Nombre, Direccion;

  let arrClientes = [];
  let $table = $('#table');

  function configurar() {
    document.getElementById("nombre").innerText = Nombre;
    document.getElementById("direccion").innerText = Direccion;
  }

  function eventos() {


    $table.bootstrapTable({ data: arrClientes })

    let btnCrearCliente = document.getElementById("crearCliente");
    btnCrearCliente.addEventListener("click", crearCliente);

    document.getElementById("cerrarVentana").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("infoCliente").style.display = "none";
    })

    document.getElementById("verOrdenes").addEventListener("click", (e) => {
        e.preventDefault();
        $table.bootstrapTable('load', arrClientes)
        //$tableDespachos.bootstrapTable('load', arrDespachos)
        //$table.bootstrapTable({data: arrClientes})
        document.getElementById("tblOrdenes").style.display = "block";
    })
  }

  function crearCliente() {
    let nombre = prompt("Escribe tu Nombre");
    let documento = prompt("Escribe tu documento");
    let telefono = prompt("Escribe tu telefono");

    let objCliente = {
        nombre,
        documento,
        telefono,
        helado: {},
        estado: true,
        precio: 0,
        cobrado : false,
        comprarHelado() {
            let sabor = prompt("Escoje tu sabor")
            let tamano = prompt("Escoje tu tamaño")
            let toppis = prompt("Escoje tus toppins")
            this.helado.sabor = sabor;
            this.helado.tamano = tamano;
            this.helado.toppis = toppis;

        }
    };
    objCliente.comprarHelado();

    cargarInfoCliente(objCliente);
    document.getElementById("infoCliente").style.display = "block";
    arrClientes.push(objCliente);

    console.log(arrClientes)
}

function cargarInfoCliente(obj) {
    document.getElementById("nombreCliente").value = obj.nombre;
    document.getElementById("telefonoCliente").value = obj.telefono;
    document.getElementById("saborHelado").value = obj.helado.sabor;
    document.getElementById("tamanoHelado").value = obj.helado.tamano;
    document.getElementById("toppisHelado").value = obj.helado.toppis;

}
  return {
    init: function (parametros) {
      console.log(parametros);
      Nombre = parametros.nombre;
      Direccion = parametros.direccion;
      configurar();
      eventos();
    },
  };
})();





window.ordenesEvents = {
    'click .like': function (e, value, row, index) {
        despacharHelado(row)
        //alert('You click like action, row: ' + JSON.stringify(row))
    },
    'click .remove': function (e, value, row, index) {
        $table.bootstrapTable('remove', {
            field: 'id',
            values: [row.id]
        })
    }
}
function ordenesFormatter(value, row, index) {
    if (row.estado) {
        return [
            '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
            '<i class="fa fa-heart">Despachar</i>',
            '</a>  '
        ].join('')
    }
}