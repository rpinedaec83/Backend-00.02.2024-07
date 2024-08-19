const listaDeImeiBloqueados = ["943", "964", "912", "843", "754", "412"];

class Telefono {
	constructor(numeroSerie, imei, marca, modelo) {
		this.numeroSerie = numeroSerie;
		this.imei = imei;
		this.marca = marca;
		this.modelo = modelo;
	}

	validarSerieImei() {
		// Validar número de serie y IMEI
        this.estaBloqueado = listaDeImeiBloqueados.includes(this.imei);
        if (this.estaBloqueado) {
        return true;
        } else {
        return false;
     }
	}
}

class Reparacion {
	constructor(telefono) {
		this.telefono = telefono;
		this.diagnosticoInicial = "";
		this.autorizacionUsuario = false;
		this.abono = 0;
		this.estado = "En revisión";
	}

	agregarRepuesto(repuesto) {
		// Agregar repuesto a la reparación
        if (!this.telefono.estaBloqueado && this.telefono.autorizacion) {
            this.telefono.area = 'Area Reparacion'
            this.telefono.encargado = this.tecnico.nombre
            this.telefono.repuestos.push(this.nombre);
            this.telefono.estado = "En reparacion";
          } else {
            console.log("Por favor autorizar reparacion.");
          }
	}

	actualizarEstado(estado) {
		this.estado = estado;
	}
}

class Tecnico {
	constructor(nombre, skills = [], area) {
		this.nombre = nombre;
		this.skills = skills;
        this.area = area;
	}
    getArea() {
        return this.area;
    }
	puedeReparar(Telefono) {
		// Verificar si el técnico tiene skills para la marca del teléfono
        if (this.skills.includes(marcaTelefono)) {
            return this.nombre;
          } else {
            return `el tecnico ${this.nombre} no puede reparar este telefono.`;
          }
    }
}

class Sucursal {
	constructor(nombre) {
		this.nombre = nombre;
		this.tecnicos = [];
	}

	asignarTecnico(reparacion) {
		// Asignar técnico a la reparación
	}
}

const formTelefono = document.getElementById('form-telefono');
const formRevision = document.getElementById('form-revision');
const formAutorizacion = document.getElementById('form-autorizacion');
const resultado = document.getElementById('resultado');
const estadoEquipo = document.getElementById('estado-equipo');

formTelefono.addEventListener('submit', (e) => {
	e.preventDefault();
	const numeroSerie = document.getElementById('numeroSerie').value;
	const imei = document.getElementById('imei').value;
	const marca = document.getElementById('marca').value;
	const modelo = document.getElementById('modelo').value;

	const telefono = new Telefono(numeroSerie, imei, marca, modelo);
	const reparacion = new Reparacion(telefono);
    console.log(telefono.numeroSerie);
	resultado.innerHTML = `
		<h2>Información del Teléfono</h2>
		<p>Número de Serie: ${telefono.numeroSerie}</p>
		<p>IMEI: ${telefono.imei}</p>
		<p>Marca: ${telefono.marca}</p>
		<p>Modelo: ${telefono.modelo}</p>
		<button id="btn-revisar-telefono">Revisar Teléfono</button>
	`;

	const btnRevisarTelefono = document.getElementById('btn-revisar-telefono');
	btnRevisarTelefono.addEventListener('click', () => {
		formRevision.style.display = 'block';})
    })