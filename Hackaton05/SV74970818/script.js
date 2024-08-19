const listaDeImeiBloqueados = ["943", "964", "912", "843", "754", "412"];

class Telefono {
  constructor(serie, imei, marca) {
    this.serie = serie;
    this.imei = imei;
    this.marca = marca;
    this.diagnostico = null;
    this.autorizacion = false;
    this.costoEstimado = 0;
    this.abono = 0;
    this.repuestos = [];
    this.estado = "Pendiente de revisión";
  }

  realizarDiagnostico(diagnostico) {
    this.diagnostico = diagnostico;
    this.estado = "Diagnóstico realizado";
    mostrarEstado("Diagnóstico realizado: " + telefono.diagnostico);
  }

  autorizarRevision(autorizacionEscrita, costoEstimado, abono) {
    this.costoEstimado = costoEstimado;
    this.abono = abono;
    if (autorizacionEscrita && abono >= costoEstimado * 0.5) {
      this.autorizacion = true;
      this.estado = "Autorización concedida";
      mostrarEstado("Estado: " + telefono.estado);
    } else {
      this.estado = "Autorización pendiente";
      mostrarEstado("Estado: " + telefono.estado);
    }
    
  }

  agregarRepuesto(repuesto) {
    if (this.autorizacion) {
      this.repuestos.push(repuesto);
      this.estado = "Repuesto agregado";
    } else {
      console.log("Por favor autorizar reparacion.");
    }
  }

  actualizarEstado(nuevoEstado) {
    this.estado = nuevoEstado;
  }
}

class Tecnico {
  constructor(nombre, skills = []) {
    this.nombre = nombre;
    this.skills = skills;
    this.telefonosAsignados = [];
  }

  asignarTelefono(telefono) {
    if (this.skills.includes(telefono.marca)) {
      this.telefonosAsignados.push(telefono);
      telefono.actualizarEstado("Asignado a técnico");
    } else {
      alert(
        `El técnico ${this.nombre} no tiene habilidades para reparar teléfonos de la marca ${telefono.marca}.`
      );
    }
  }

  repararTelefono(telefono) {
    if (this.telefonosAsignados.includes(telefono) && telefono.autorizacion) {
      telefono.actualizarEstado("En reparación");
    } else {
      alert(
        "No se puede reparar el teléfono. Autorización pendiente o teléfono no asignado."
      );
    }
  }

  finalizarReparacion(telefono) {
    if ((telefono.estado = "En reparación")) {
      telefono.actualizarEstado("Reparado");
    } else {
      console.log("La reparacion esta en curso");
    }
  }
}

class Sucursal {
  constructor(nombre) {
    this.nombre = nombre;
    this.tecnicos = [];
    this.telefonos = [];
    this.listaDeImeiBloqueados = ["943", "964", "912", "843", "754", "412"];
  }

  agregarTecnico(tecnico) {
    this.tecnicos.push(tecnico);
    mostrarEstado(
        `Técnico agregado: ${tecnico.nombre + " [" + tecnico.skills + "]"}`
      );
  }

  ingresarTelefono(telefono) {
    if (!this.listaDeImeiBloqueados.includes(telefono.imei)) {
      this.telefonos.push(telefono);
      telefono.actualizarEstado("Ingresado");
      mostrarEstado(`Teléfono con serie ${telefono.serie}, marca ${telefono.marca} ingresado.`);
    } else {
      alert("El teléfono está reportado y no puede ser ingresado.");
    }
  }
}

// Variables globales
let sucursal, tecnico, telefono;

// Funciones para manejar el flujo
function crearSucursal() {
  sucursal = new Sucursal("Reparaciones Cel SAC");
  mostrarEstado("Sucursal creada: " + sucursal.nombre);
}

function agregarTecnicos() {
  let nombre = prompt("Indique el nombre del tecnico");
  let cantSkills = prompt("Cuantas marcas domina el tecnico?");
  let num = parseFloat(cantSkills);
  let skills = [];
  if (!isNaN(num) && num > 0) {
    for (let i = 1; i <= num; i++) {
      let skill = prompt(`Ingrese el skill Nº${i} o marca que domina : `);
      skills.push(skill);
    }
  } else {
    alert("El valor ingresado no es valido");
  }
  tecnico = new Tecnico(nombre, skills);
  sucursal.agregarTecnico(tecnico);
}

function ingresarTelefono() {
  alert(`Se muestra la lista de Imei bloqueados: ${listaDeImeiBloqueados}`);
  let serie = prompt("Ingrese el numero de serie");
  let imei = prompt("Ingrese el IMEI");
  let marca = prompt("Ingrese la marca");
  telefono = new Telefono(serie, imei, marca);
  sucursal.ingresarTelefono(telefono);
}

function realizarDiagnostico() {
  let serie = prompt("Ingrese el numero de serie del telefono a diagnosticar");
  let phone = [];
  let encontrado = false;
  for (let i = 0; i <= sucursal.telefonos.length - 1; i++) {
    phone = sucursal.telefonos[i];
    if (serie == phone.serie) {
      let diagnostico = prompt("Ingrese el diagnostico");
      phone.realizarDiagnostico(diagnostico);
      encontrado = true;
    }
  }
  if (!encontrado) {
    alert("Telefono no registrado, intente nuevamente");
  }
}

function autorizarReparacion() {
    let serie = prompt("Ingrese el numero de serie del telefono a reparar");
  let autorizacion = prompt(
    "Ingrese el numero 1 SI cuenta con autorizacion escrita del cliente"
  );
  let auth = false;
  if (autorizacion == "1") auth = true;
  let costo = prompt("Ingrese el costo estimado");
  let num1 = parseFloat(costo);
  let abono = prompt("Ingrese el abono (min 50% del costo estimado)");
  let num2 = parseFloat(abono);

  telefono.autorizarRevision(auth, num1, num2);
}

function asignarTelefono() {
  tecnico1.asignarTelefono(telefono);
  mostrarEstado("Teléfono asignado a técnico: " + tecnico1.nombre);
}

function repararTelefono() {
  tecnico1.repararTelefono(telefono);
  mostrarEstado("Estado del teléfono: " + telefono.estado);
}

function mostrarEstado(mensaje) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML += `<p>${mensaje}</p>`;
}

function encontrarTelefono(serie){
  let phone = null;
  let encontrado = false;
  for (let i = 0; i <= sucursal.telefonos.length - 1; i++) {
    phone = sucursal.telefonos[i];
    if (serie == phone.serie) {
      encontrado = true;
      return phone
    }
  }
  if (!encontrado) {
    return null
  }
}
/*
// Crear sucursal
const sucursal1 = new Sucursal('Reparaciones Cel');

// Crear técnicos
const tecnico1 = new Tecnico('Juan', ['Samsung', 'Huawei']);
const tecnico2 = new Tecnico('Ana', ['iPhone', 'Xiaomi']);
sucursal1.agregarTecnico(tecnico1);
sucursal1.agregarTecnico(tecnico2);


// Ingresar un teléfono serie, imei, marca
const telefono = new Telefono('A111','9634' ,'Samsun');
console.log(telefono.estado)
sucursal1.ingresarTelefono(telefono);
console.log(telefono.estado)

// Realizar diagnóstico y autorizar reparación
const consentimientoCliente=true
telefono.realizarDiagnostico('Pantalla rota - se necesita cambio de pantalla');
console.log(telefono.estado)
telefono.autorizarRevision(consentimientoCliente,200, 100);
console.log(telefono.estado)

// Asignar teléfono a técnico
tecnico1.asignarTelefono(telefono);
console.log(telefono.estado)

// Asignar repuestos al telefono
telefono.agregarRepuesto("panatalla penkey")
console.log(telefono.estado)

// Realizar reparación
tecnico1.repararTelefono(telefono);
console.log(telefono.estado)
tecnico1.finalizarReparacion(telefono);
console.log(telefono.estado)

console.log(telefono);
*/
