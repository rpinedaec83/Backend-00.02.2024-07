export class AreaDiagnostico {
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