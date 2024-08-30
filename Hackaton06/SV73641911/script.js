import { Telefono } from "./models/telefono.js";

// LocalStorage
let arrTelefonos = [];

// Mostrar telefonos del localstorage
let telefonoLocal = localStorage.getItem("telefonos");
if (telefonoLocal != null) {
  arrTelefonos = JSON.parse(telefonoLocal);
}

for (let telefonoMovil in arrTelefonos) {
  let table = document.getElementById("addRow");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  let cell6 = row.insertCell(5);
  let cell7 = row.insertCell(6);
  let cell8 = row.insertCell(7);
  let cell9 = row.insertCell(8);

  cell1.innerHTML = arrTelefonos[telefonoMovil]["numeroSerie"];
  cell2.innerHTML = arrTelefonos[telefonoMovil]["imei"];
  cell3.innerHTML = arrTelefonos[telefonoMovil]["marca"];
  cell4.innerHTML = arrTelefonos[telefonoMovil]["estaBloqueado"];
  cell5.innerHTML = arrTelefonos[telefonoMovil]["diagnostico"];
  cell6.innerHTML = arrTelefonos[telefonoMovil]["estado"];
  cell7.innerHTML = arrTelefonos[telefonoMovil]["autorizacion"];
  cell8.innerHTML = arrTelefonos[telefonoMovil]["encargado"];
  cell9.innerHTML = arrTelefonos[telefonoMovil]["area"];
}

// Agregar telefono mediante el formulario
const botonEnviar = document.getElementById("enviarTelefono");

botonEnviar.onclick = function(){
  let numeroSerie = document.getElementsByName("numeroSerie")[0].value;
  let imei = document.getElementsByName("imei")[0].value;
  let marca = document.getElementsByName("marca")[0].value;

  // Validar que esten todos los datos
  if (numeroSerie && imei && marca) {
    let nuevoTelefono = new Telefono(numeroSerie, imei, marca);

    // almacenar el nuevo telefono
    arrTelefonos.push(nuevoTelefono);
    localStorage.setItem("telefonos", JSON.stringify(arrTelefonos));

    // Enviar a la pagina con los datos
    window.location.href="estado.html";
  }
}
