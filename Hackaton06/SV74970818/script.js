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
    mostrarEstado(
      "Diagnóstico realizado: " + this.serie + " " + this.diagnostico
    );
  }

  autorizarRevision(autorizacionEscrita, costoEstimado, abono) {
    this.costoEstimado = costoEstimado;
    this.abono = abono;
    if (autorizacionEscrita && abono >= costoEstimado * 0.5) {
      this.autorizacion = true;
      this.estado = "Autorización concedida";
      mostrarEstado("Estado: " + this.estado);
    } else {
      this.estado =
        "Autorización pendiente, Autorizacion escrita pendiente o no se realizo el abono del 50% ";
      mostrarEstado("Estado: " + this.estado);
    }
  }

  agregarRepuesto(repuesto) {
    if (this.autorizacion) {
      this.repuestos.push(repuesto);
      this.estado = "Repuesto agregado - " + repuesto;
      mostrarEstado("Estado: " + this.estado);
    } else {
      mostrarEstado("Por favor autorizar reparacion.");
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
      if (!this.telefonosAsignados.includes(telefono)) {
        this.telefonosAsignados.push(telefono);
        telefono.actualizarEstado("Asignado a técnico");
        mostrarEstado(
          `Teléfono con serie ${telefono.serie} asignado a técnico: ${this.nombre}`
        );
      } else {
        mostrarEstado(
          `Teléfono con serie ${telefono.serie} ya se encuentra asignado al tecnico ${this.nombre}`
        );
      }
    } else {
      alert(
        `El técnico ${this.nombre} no tiene habilidades para reparar teléfonos de la marca ${telefono.marca}.`
      );
    }
  }

  repararTelefono(telefono) {
    if (this.telefonosAsignados.includes(telefono) && telefono.autorizacion) {
      telefono.actualizarEstado("En reparación");
      mostrarEstado("Estado del teléfono: " + telefono.estado);
    } else {
      alert(
        "No se puede reparar el teléfono. Autorización pendiente o teléfono no asignado."
      );
    }
  }

  finalizarReparacion(telefono) {
    if ((telefono.estado = "En reparación")) {
      telefono.actualizarEstado("Reparado y listo para entrega al cliente");
      mostrarEstado("Estado del teléfono: " + telefono.estado);
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
      mostrarEstado(
        `Teléfono con serie ${telefono.serie}, marca ${telefono.marca} ingresado.`
      );
    } else {
      alert("El teléfono está reportado y no puede ser ingresado.");
    }
  }
}

// Variables globales
let sucursal, tecnico, telefono;

// Funciones para manejar el flujo

// Crear sucursal
function crearSucursal() {
  sucursal = new Sucursal("Reparaciones Cel SAC");
  mostrarEstado("Sucursal creada: " + sucursal.nombre);
}

// Agregar técnicos
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
    tecnico = new Tecnico(nombre, skills);
    sucursal.agregarTecnico(tecnico);
    localStorage.setItem("tecnicos", JSON.stringify(sucursal.tecnicos));
    actualizarTablaTecnicos();
  } else {
    alert("El valor ingresado no es valido");
  }
}

// Ingresar un teléfono serie, imei, marca
function ingresarTelefono() {
  alert(`Se muestra la lista de Imei bloqueados: ${listaDeImeiBloqueados}`);
  let serie = prompt("Ingrese el numero de serie");
  let imei = prompt("Ingrese el IMEI");
  let marca = prompt("Ingrese la marca");
  telefono = new Telefono(serie, imei, marca);
  sucursal.ingresarTelefono(telefono);
  localStorage.setItem("telefonos", JSON.stringify(sucursal.telefonos));
  actualizarTablaTelefonos();
}

// Realizar diagnóstico
function realizarDiagnostico() {
  let serie = prompt("Ingrese el numero de serie del telefono a diagnosticar");
  let phone = encontrarTelefono(serie);
  if (phone != null) {
    let diagnostico = prompt("Ingrese el diagnostico");
    phone.realizarDiagnostico(diagnostico);
    localStorage.setItem("telefonos", JSON.stringify(sucursal.telefonos));
    actualizarTablaTelefonos();
  } else {
    alert("Telefono no registrado, intente nuevamente");
  }
}

// Autorizar reparación
function autorizarReparacion() {
  let serie = prompt("Ingrese el numero de serie del telefono a reparar");
  let phone = encontrarTelefono(serie);
  if (phone != null) {
    let autorizacion = prompt(
      "Ingrese el numero 1 SI cuenta con autorizacion escrita del cliente"
    );
    let auth = false;
    if (autorizacion == "1") auth = true;
    let costo = prompt("Ingrese el costo estimado");
    let num1 = parseFloat(costo);
    let abono = prompt("Ingrese el abono (min 50% del costo estimado)");
    let num2 = parseFloat(abono);
    phone.autorizarRevision(auth, num1, num2);
    localStorage.setItem("telefonos", JSON.stringify(sucursal.telefonos));
    actualizarTablaTelefonos();
  } else {
    alert("Telefono no registrado, intente nuevamente");
  }
}

// Asignar repuestos al telefono
function agregarRepuesto() {
  let serie = prompt("Ingrese el numero de serie del telefono");
  let phone = encontrarTelefono(serie);
  let repuesto = prompt("Ingrese el repuesto para el telefono");
  if (phone != null) {
    phone.agregarRepuesto(repuesto);
    localStorage.setItem("telefonos", JSON.stringify(sucursal.telefonos));
    actualizarTablaTelefonos();
  } else {
    alert("Telefono no registrado, intente nuevamente");
  }
}

// Asignar teléfono a técnico
function asignarTelefono() {
  let nombre = prompt("Ingrese el nombre del tecnico que hara el trabajo");
  let tec = encontrarTecnico(nombre);
  let serie = prompt("Ingrese el numero de serie del telefono");
  let phone = encontrarTelefono(serie);
  if (phone != null && tec != null) {
    tec.asignarTelefono(phone);
    localStorage.setItem("tecnicos", JSON.stringify(sucursal.tecnicos));
    localStorage.setItem("telefonos", JSON.stringify(sucursal.telefonos));
    actualizarTablaTecnicos();
    actualizarTablaTelefonos();
  } else {
    alert("Telefono o Tecnico no registrado, intente nuevamente");
  }
}

// Realizar reparación
function repararTelefono() {
  let nombre = prompt("Ingrese el nombre del tecnico que hara el trabajo");
  let tec = encontrarTecnico(nombre);
  let serie = prompt("Ingrese el numero de serie del telefono");
  let phone = encontrarTelefono(serie);
  if (phone != null && tec != null) {
    tec.repararTelefono(phone);
    localStorage.setItem("tecnicos", JSON.stringify(sucursal.tecnicos));
    localStorage.setItem("telefonos", JSON.stringify(sucursal.telefonos));
    actualizarTablaTecnicos();
    actualizarTablaTelefonos();
  } else {
    alert("Telefono o Tecnico no registrado, intente nuevamente");
  }
}

// Finalizar reparación
function finalizarReparacion() {
  let nombre = prompt("Ingrese el nombre del tecnico que hara el trabajo");
  let tec = encontrarTecnico(nombre);
  let serie = prompt("Ingrese el numero de serie del telefono");
  let phone = encontrarTelefono(serie);
  if (phone != null && tec != null) {
    tec.finalizarReparacion(phone);
    localStorage.setItem("tecnicos", JSON.stringify(sucursal.tecnicos));
    localStorage.setItem("telefonos", JSON.stringify(sucursal.telefonos));
    actualizarTablaTecnicos();
    actualizarTablaTelefonos();
  } else {
    alert("Telefono o Tecnico no registrado, intente nuevamente");
  }
}

// Funciones extra
function mostrarEstado(mensaje) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML += `<p>${mensaje}</p>`;
}

function encontrarTelefono(serie) {
  let phone;
  let encontrado = false;
  for (let i = 0; i <= sucursal.telefonos.length - 1; i++) {
    phone = sucursal.telefonos[i];
    if (serie == phone.serie) {
      encontrado = true;
      return phone;
    }
  }
  if (!encontrado) {
    return null;
  }
}

function encontrarTecnico(nombre) {
  let tecnico;
  let encontrado = false;
  for (let i = 0; i <= sucursal.tecnicos.length - 1; i++) {
    tecnico = sucursal.tecnicos[i];
    if (nombre == tecnico.nombre) {
      encontrado = true;
      return tecnico;
    }
  }
  if (!encontrado) {
    return null;
  }
}

function actualizarTablaTecnicos() {
    const tabla = document.getElementById('tabla-tecnicos').getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';
    sucursal.tecnicos.forEach(tecnico => {
        let row = tabla.insertRow();
        row.insertCell(0).textContent = tecnico.nombre;
        row.insertCell(1).textContent = tecnico.skills.join(', ');
    });
}

function actualizarTablaTelefonos() {
    const tabla = document.getElementById('tabla-telefonos').getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';
    sucursal.telefonos.forEach(telefono => {
        let row = tabla.insertRow();
        row.insertCell(0).textContent = telefono.serie;
        row.insertCell(1).textContent = telefono.marca;
        row.insertCell(2).textContent = telefono.diagnostico || 'N/A';
        row.insertCell(3).textContent = telefono.estado;
    });
}

window.onload = function () {
  crearSucursal();
  let tecs = localStorage.getItem("tecnicos");
  if (tecs != null) {
    let tecnicos = JSON.parse(tecs);
    for (let i = 0; i <= tecnicos.length - 1; i++) {
      sucursal.tecnicos.push(
        Object.assign(new Tecnico(), tecnicos[i])
      );
    }
    actualizarTablaTecnicos();
    mostrarEstado("Tecnicos se cargaron correctamente");
  }
  let phones = localStorage.getItem("telefonos");
  if (phones != null) {
    let telefonos = JSON.parse(phones);
    for (let i = 0; i <= telefonos.length - 1; i++) {
      sucursal.telefonos.push(
        Object.assign(new Telefono(), telefonos[i])
      );
    }
    actualizarTablaTelefonos();
    mostrarEstado("Telefonos se cargaron correctamente");
  }
  console.log(sucursal);
};
