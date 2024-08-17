// Clase que representa un teléfono
class Telefono {
    constructor(numeroSerie, IMEI) {
      this.numeroSerie = numeroSerie;
      this.IMEI = IMEI;
      this.diagnostico = null;
      this.repuestos = [];
      this.estado = 'Ingresado';
    }
  
    setDiagnostico(diagnostico) {
      this.diagnostico = diagnostico;
      this.estado = 'Diagnosticado';
    }
  
    agregarRepuesto(repuesto) {
      this.repuestos.push(repuesto);
    }
  }
  
  // Clase que representa a un cliente
  class Cliente {
    constructor(nombre, autorizacionEscrita) {
      this.nombre = nombre;
      this.autorizacionEscrita = autorizacionEscrita;
      this.abono = 0;
    }
  
    realizarAbono(cantidad) {
      this.abono += cantidad;
    }
  
    puedeAccederAlServicio() {
      return this.autorizacionEscrita && this.abono >= 50;
    }
  }
  
  // Clase que representa a un técnico
  class Tecnico {
    constructor(nombre, skills) {
      this.nombre = nombre;
      this.skills = skills;
    }
  
    puedeReparar(marcaTelefono) {
      return this.skills.includes(marcaTelefono);
    }
  }
  
  // Clase que representa un repuesto
  class Repuesto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  // Clase que representa una reparación
  class Reparacion {
    constructor(telefono, cliente, tecnico) {
      this.telefono = telefono;
      this.cliente = cliente;
      this.tecnico = tecnico;
      this.estaciones = [];
      this.costoTotal = 0;
    }
  
    agregarEstacion(estacion) {
      this.estaciones.push(estacion);
      this.telefono.estado = estacion;
    }
  
    calcularCostoTotal() {
      this.costoTotal = this.telefono.repuestos.reduce((total, repuesto) => total + repuesto.precio, 0);
    }
  
    mostrarEstado() {
      console.log(Estado actual del teléfono: ${this.telefono.estado});
    }
  }
  
  // Clase que representa una estación de trabajo
  class EstacionDeTrabajo {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }

  // Creación de objetos
const telefono = new Telefono('SN123456', 'IMEI987654321');
const cliente = new Cliente('Juan Pérez', true);
cliente.realizarAbono(150);

const tecnico = new Tecnico('Carlos Ramírez', ['Samsung', 'Apple']);
const reparacion = new Reparacion(telefono, cliente, tecnico);

const repuestoPantalla = new Repuesto('Pantalla Samsung', 200);
const repuestoBateria = new Repuesto('Batería Samsung', 50);

// Simulación del flujo de reparación
if (cliente.puedeAccederAlServicio()) {
  telefono.setDiagnostico('Pantalla y batería dañadas');
  telefono.agregarRepuesto(repuestoPantalla);
  telefono.agregarRepuesto(repuestoBateria);

  const estacionRevision = new EstacionDeTrabajo('Revisión');
  const estacionReparacion = new EstacionDeTrabajo('Reparación');
  reparacion.agregarEstacion(estacionRevision.nombre);
  reparacion.agregarEstacion(estacionReparacion.nombre);

  reparacion.calcularCostoTotal();
  reparacion.mostrarEstado();

  console.log(Costo total de la reparación: $${reparacion.costoTotal});
} else {
  console.log('El cliente no ha autorizado el servicio o no ha realizado el abono correspondiente.');
}
console.log(`prueba `.tecnico)
console.log(`prueba `.telefono)
console.log(`prueba `.cliente)
console.log(`prueba `.repuesto)
console.log(`prueba `.reparacion)
console.log(`prueba `.realizarAbono)