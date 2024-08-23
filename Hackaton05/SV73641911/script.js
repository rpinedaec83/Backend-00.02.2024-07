const listaDeImeiBloqueados = ["943", "964", "912", "843", "754", "412"];

class Telefono {
  constructor(numeroSerie, imei, marca) {
    this.numeroSerie = numeroSerie;
    this.imei = imei;
    this.marca = marca;
    this.estaBloqueado = true;
    this.diagnostico = null;
    this.estado = "Ingresado";
    this.autorizacion = false;
    this.encargado = null;
    this.area = null;
    this.repuestos = [];
  }

  verificarImei(listaDeBlqoueados) {
    this.estaBloqueado = listaDeBlqoueados.includes(this.imei);
    if (this.estaBloqueado) {
      return true;
    }
    else {
      return false;
    }
  }

  autorizarRevision(autorizacionEscrita, abono) {
    if (!this.estaBloqueado && autorizacionEscrita && abono >= 50) {
      this.autorizacion = true;
    }
    else {
      console.log("Debe autorizar al reparacion");
    }
  }
}

class Tecnico {
  constructor(nombre, skills = [], area) {
    this.nombre = nombre;
    this.skills = skills;
    this.area = area;
  }
  
  getArea() {
    return this.area
  }

  puedeReparar(marcaTelefono) {
    if (this.skills.includes(marcaTelefono)) {
      return this.nombre;
    }
    else {
      return `el tecnico ${this.nombre} no puede reparar este telefono.`;
    }
  }
  
}

class AreaDiagnostico {
  constructor(diagnostico, telefono, tecnico) {
    this.diagnostico = diagnostico;
    this.telefono = telefono;
    this.tecnico = tecnico
  }

  agregarDiagnostico() {
    if (!this.telefono.estaBloqueado && this.telefono.estado === "Ingresado" && this.tecnico.getArea() === 'diagnosticos') {
      this.telefono.diagnostico = this.diagnostico;
      this.telefono.encargado = this.tecnico.puedeReparar(this.telefono.marca);
      this.telefono.area = 'Area diagnostico'
      this.telefono.estado = "Diagnosticado";
    }
    else {
      console.log("El telefono esta siendo revisado");
    }
  }
}

class AreaReparacion {
  constructor(nombre, telefono, tecnico) {
    this.nombre = nombre;
    this.tecnico = tecnico;
    this.telefono = telefono;
  }

  agregarRepuesto() {
    if (!this.telefono.estaBloqueado && this.telefono.autorizacion) {
      this.telefono.area = 'Area Reparacion'
      this.telefono.encargado = this.tecnico.nombre
      this.telefono.repuestos.push(this.nombre);
      this.telefono.estado = "En reparacion";
    }
    else {
      console.log("Por favor autorizar reparacion.");
    }
  }

  finalizarReparacion() {
    if ((this.telefono.estado = "En reparacion")) {
      this.telefono.estado = "Finalizado";
    }
    else {
      console.log("La reparacion esta en curso");
    }
  }
}

// numeroSerie, imei, marca
const telefono1 = new Telefono("A111", "9222", "Samsung");
const tecnico1 = new Tecnico("Juan", ["Samsung", "iphone", "xiaomi"], 'diagnosticos');
const tecnico2 = new Tecnico("Pedro", ["Samsung", "iphone", "xiaomi"], 'reparacion');
const repracion1 = new AreaReparacion("pantalla penKey",telefono1, tecnico2);

const diagnostico1 = new AreaDiagnostico('Cambio de pantalla', telefono1, tecnico1)

telefono1.verificarImei(listaDeImeiBloqueados);
diagnostico1.agregarDiagnostico()
telefono1.autorizarRevision('Yo juan permito el diagnostico previo', 100)
repracion1.agregarRepuesto()
repracion1.finalizarReparacion()

console.log(telefono1);