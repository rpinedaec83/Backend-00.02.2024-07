export class Telefono {
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