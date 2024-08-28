export class Tecnico {
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