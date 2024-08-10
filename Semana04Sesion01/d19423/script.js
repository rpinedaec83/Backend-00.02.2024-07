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


let arrClientes = [];
let arrDespachos = [];
let arrCaja = [];
let $table = $('#table');
let $tableDespachos = $('#tableDespachos');
let $tableCaja = $('#tableCaja');

const Heladeria = (function () {
  let Nombre, Direccion;

 
  function configurar() {
    document.getElementById("nombre").innerText = Nombre;
    document.getElementById("direccion").innerText = Direccion;
  }

  function eventos() {


    $table.bootstrapTable({ data: arrClientes })
    $tableDespachos.bootstrapTable({ data: arrDespachos })
    $tableCaja.bootstrapTable({ data: arrCaja })



    let btnCrearCliente = document.getElementById("crearCliente");
    btnCrearCliente.addEventListener("click", crearCliente);

    document.getElementById("cerrarVentana").addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById("infoCliente").style.display = "none";
    })

    document.getElementById("verOrdenes").addEventListener("click", (e) => {
        e.preventDefault();
        $table.bootstrapTable('load', arrClientes)
        $tableDespachos.bootstrapTable('load', arrDespachos)
        document.getElementById("tblOrdenes").style.display = "block";
    })
    document.getElementById("verDespachos").addEventListener("click", (e) => {
        e.preventDefault();
        $tableDespachos.bootstrapTable('load', arrDespachos)
        $table.bootstrapTable('load', arrClientes)
        document.getElementById("tblDespachos").style.display = "block";
    })

    document.getElementById("verCaja").addEventListener("click", (e) => {
        e.preventDefault();
        $tableCaja.bootstrapTable('load', arrCaja)
        document.getElementById("tblCaja").style.display = "block";
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
            '<i class="fa fa-heart"> Despachar</i>',
            '</a>  '
        ].join('')
    }
}



function despacharHelado(obj) {
    console.log(arrClientes);
    arrDespachos.push(obj);
    const index = arrClientes.indexOf(obj);
    console.log(index);
    if (index > -1) { // only splice array when item is found
        arrClientes.splice(index, 1); // 2nd parameter means remove one item only
    }
    console.log(arrClientes);
    $table.bootstrapTable('load', arrClientes);
    console.log(obj);
}

function despachoFormatter(value, row, index) {
    if (row.estado) {
        return [
            '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
            '<i class="fa fa-heart">Entregar</i>',
            '</a>  '
        ].join('')
    }
}

window.despachoEvents = {
    'click .like': function (e, value, row, index) {
        entregarHelado(row)
        //alert('You click like action, row: ' + JSON.stringify(row))
    },
    'click .remove': function (e, value, row, index) {
        $table.bootstrapTable('remove', {
            field: 'id',
            values: [row.id]
        })
    }
}

function entregarHelado(obj) {
    console.log(arrCaja);
    arrCaja.push(obj);
    const index = arrDespachos.indexOf(obj);
    console.log(index);
    if (index > -1) { // only splice array when item is found
        arrDespachos.splice(index, 1); // 2nd parameter means remove one item only
    }
    console.log(arrDespachos);
    $tableDespachos.bootstrapTable('load', arrDespachos);
    console.log(obj);
}

function cajaFormatter(value, row, index) {
    if (row.estado) {
        return [
            '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
            '<i class="fa fa-heart">Cobrar</i>',
            '</a>  '
        ].join('')
    }
}

function cobradoFormatter(value, row, index) {
    if (row.cobrado) {
        return [
            '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
            '<i class="fa-regular fa-sack-dollar">Cobrado</i>',
            '</a>  '
        ].join('')
    }else{
        return [
            '<a class="like" href="javascript:void(0)" id="btnDespachar" title="Like">',
            '<i class="fa-solid fa-circle-dollar-to-slot">Por Cobrar</i>',
            '</a>  '
        ].join('')
    }
}

window.cajaEvents = {
    'click .like': function (e, value, row, index) {
        cobrarHelado(row)
        //alert('You click like action, row: ' + JSON.stringify(row))
    },
    'click .remove': function (e, value, row, index) {
        $table.bootstrapTable('remove', {
            field: 'id',
            values: [row.id]
        })
    }
}

function cobrarHelado(obj) {
    console.log(arrCaja);
    const index = arrCaja.indexOf(obj);
    let precio = prompt("Pon el precio cobrado")
    console.log(index);
    if (index > -1) { // only splice array when item is found
        arrCaja[index].cobrado = true; 
        arrCaja[index].precio = precio; 
    }
    console.log(arrCaja);
    $tableCaja.bootstrapTable('load', arrCaja);
    console.log(obj);
}


function idFormatter() {
    return 'Total'
  }

  function nameFormatter(data) {
    return data.length
  }

  function priceFormatter(data) {
    var field = this.field
    return '$' + data.map(function (row) {
      return +row[field]
    }).reduce(function (sum, i) {
      return sum + i
    }, 0)
  }