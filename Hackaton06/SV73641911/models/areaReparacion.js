export class AreaReparacion {
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