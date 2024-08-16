// console.log("Inicio del ciclo de vida de la aplicacion")

// class CuentaBancaria {
//     #saldo; // Propiedad privada

//     constructor(saldoInicial) {
//         this.#saldo = saldoInicial;
//     }

//     depositar(monto) {
//         if (monto > 0) {
//             console.log(`Depositando ${monto}`)
//             this.#saldo += monto;
//         }
//     }

//     retirar(monto) {
//         if (monto > 0 && monto <= this.#saldo) {
//             console.log(`Retirando ${monto}`)
//             this.#saldo -= monto;
//         } else {
//             console.log('Fondos insuficientes');
//         }
//     }

//     consultarSaldo() {
//         return this.#saldo;
//     }
// }

// const cuenta = new CuentaBancaria(1000);
// cuenta.depositar(500);
// console.log(cuenta.consultarSaldo()); // 1500
// cuenta.retirar(200);
// console.log(cuenta.consultarSaldo()); // 1300

// cuenta = "str"

// //console.log(cuenta.#saldo);

// console.log("Fin del ciclo de vida de la aplicacion")

/**
 * Sistema de reserva de vuelos
 * Aviones
 * Pasajeros
 * Rutas -> Aereopuertos
 * Reserva
 *
 */

const Reserva = (function () //a
{
  let Ciudad;
  let Nombre;
  function configurar() {
    console.log("Iniciando la Configuracion");
    $("#titulo").text(Nombre)
    $("#ciudad").text(Ciudad);
    $("#aerolinea").text(Nombre)
    crearAviones();
}

  return {
    init: function (parametros) {
      console.log(parametros);
      Nombre = parametros.nombre;
      Ciudad = parametros.ciudad;
      configurar();
      //eventos();
    },
  };
})();
