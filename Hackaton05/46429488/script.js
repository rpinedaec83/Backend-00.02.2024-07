const imeiBlacklist = ['999','998','993','9999']

class equipo {
    constructor(serie, imei, marca) {
    this.serie = serie;
    this.imei = imei;
    this.marca = marca;
    this.estaReportado = false;
    this.diagnostico = null;
    this.estado = "Ingresado";
    this.autorizacion = false;
    this.encargado = null;
    this.area = null;
    this.repuestos = [];
  }

    validarIMEI(imeiBlacklist) {
    this.estaReportado = imeiBlacklist.includes(this.imei);
    if (this.estaReportado) {
      this.estado = "Robado";
      return true;
    } else {
      return false;
    }
  }
  
  autorizarRevision(autorizacionEscrita, abono) {
    if (!this.estaReportado && autorizacionEscrita && abono >= 50 && this.estado == "Diagnosticado") {
      this.autorizacion = true;
      this.estado = "Autorizado";
    } else {
      this.autorizacion = false;
      console.log("Pendiente de aprobacion");
    }
  }
}

class tecnico {
  constructor(nombre, skills = [], area) {
    this.nombre = nombre;
    this.skills = skills;
    this.area = area;
    this.apto = false;
  }
  
  getArea() {
    return this.area
  }

  puedeReparar(marcaTelefono) {
    if (this.skills.includes(marcaTelefono)) {
      this.nombre
      return this.apto = true;
    } else {
      this.nombre = `El tecnico ${this.nombre} no puede reparar esta marca de telefono.`;
      return this.apto = false;
    }
  }
  
}

class areaDiagnostico {
  constructor(diagnostico, equipo, tecnico) {
    this.diagnostico = diagnostico;
    this.equipo = equipo;
    this.tecnico = tecnico;
  }

  agregarDiagnostico() {
    if (!this.equipo.estaReportado && this.equipo.estado === "Ingresado" && this.tecnico.getArea() === 'diagnosticos' && this.tecnico.puedeReparar(this.equipo.marca)){
      this.equipo.diagnostico = this.diagnostico;
      this.equipo.area = 'Area Diagnostico';
      this.equipo.estado = "Diagnosticado";
    } else {
      this.equipo.estado = "Requiere tecnico con skills";
      console.log("El telefono esta siendo revisado");
    }
  }
}

class areaReparacion {
  constructor(nombre, equipo, tecnico) {
    this.nombre = nombre;
    this.tecnico = tecnico;
    this.equipo = equipo;
  }

  agregarRepuesto() {
    if (!this.equipo.estaReportado && this.equipo.autorizacion) {
      this.equipo.area = 'Reparacion'
      this.equipo.encargado = this.tecnico.nombre
      this.equipo.repuestos.push(this.nombre);
      this.equipo.estado = "En reparacion";
    } else {
      this.estado = "Requiere de Aprobacion";
      console.log("Por favor autorizar reparacion.");
    }
  }

  finalizarReparacion() {
    if (!this.equipo.estaReportado && this.equipo.estado == "En reparacion") {
      this.equipo.estado = "Finalizado";
    } else {
      console.log("La reparacion esta en curso");
    }
  }

 }

const telefono1 = new equipo("SN9921", "993", "Samsung");
const telefono2 = new equipo("SN9922", "996", "Xiaomi");
const telefono3 = new equipo("SN9920", "1000", "Samsung");
const telefono4 = new equipo("SN9921", "1001", "Samsung");
const telefono5 = new equipo("SN9923", "1002", "Iphone");

const tecnico1 = new tecnico("Joaquin", ["Iphone","Samsung", "Xiaomi"], 'diagnosticos');
const tecnico2 = new tecnico("Lorenzo", ["Xiaomi"], 'reparacion');

const reparacion1 = new areaReparacion("pantalla penKey",telefono1, tecnico1);
const reparacion2 = new areaReparacion("bateria litio",telefono2, tecnico1);
const diagnostico1 = new areaDiagnostico('Cambio de pantalla', telefono1, tecnico1);
const diagnostico2 = new areaDiagnostico('Cambio de bateria', telefono2, tecnico1);
const diagnostico3 = new areaDiagnostico('Cambio de kernel', telefono3, tecnico1);
const diagnostico4 = new areaDiagnostico('Cambio de kernel', telefono4, tecnico1);
const diagnostico5 = new areaDiagnostico('Cambio de kernel', telefono5, tecnico2);

telefono1.validarIMEI(imeiBlacklist);
telefono2.validarIMEI(imeiBlacklist);
diagnostico2.agregarDiagnostico()
telefono2.autorizarRevision('Yo juan permito el diagnostico previo', 100)
reparacion2.agregarRepuesto()
reparacion2.finalizarReparacion()
telefono3.validarIMEI(imeiBlacklist);
diagnostico3.agregarDiagnostico()
telefono4.validarIMEI(imeiBlacklist);
diagnostico4.agregarDiagnostico();
telefono4.autorizarRevision('Yo Carlos permito el diagnostico previo', 100);
telefono5.validarIMEI(imeiBlacklist);
diagnostico5.agregarDiagnostico();

console.log(telefono1);
console.log(telefono3);
console.log(telefono4);
console.log(telefono5);
console.log(telefono2);