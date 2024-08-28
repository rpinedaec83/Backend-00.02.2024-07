// Clase de  un teléfono


class Telefono {
    constructor(numeroSerie, imei) {
        this.numeroSerie = numeroSerie;
        this.imei = imei;
        this.diagnostico = null;
        this.estado = 'Ingresado'; // Estados posibles: Ingresado, Revisado, Reparado, Entregado
    }

    setDiagnostico(diagnostico) {
        this.diagnostico = diagnostico;
        this.estado = 'Revisado';
    }

    autorizarReparacion() {
        if (this.diagnostico && this.estado === 'Revisado') {
            this.estado = 'Autorizado';
        } else {
            throw new Error('El teléfono debe pasar por una revisión y tener un diagnóstico primero.');
        }
    }

    actualizarEstado(nuevoEstado) {
        this.estado = nuevoEstado;
    }
}

// Clase para representar un técnico
class Tecnico {
    constructor(nombre) {
        this.nombre = nombre;
        this.skills = [];
    }

    agregarSkill(skill) {
        if (!this.skills.includes(skill)) {
            this.skills.push(skill);
        }
    }

    puedeReparar(marcaTelefono) {
        return this.skills.includes(marcaTelefono);
    }
}

// Clase para representar un repuesto
class Repuesto {
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }

    agregarCantidad(cantidad) {
        this.cantidad += cantidad;
    }

    reducirCantidad(cantidad) {
        if (this.cantidad >= cantidad) {
            this.cantidad -= cantidad;
        } else {
            throw new Error('No hay suficiente cantidad de repuesto.');
        }
    }
}

// Clase para representar una reparación
class Reparacion {
    constructor(telefono, tecnico, repuestos) {
        this.telefono = telefono;
        this.tecnico = tecnico;
        this.repuestos = repuestos; 
        this.autorizado = false;
        this.abonoPagado = false;
    }

    autorizar() {
        if (this.telefono.estado === 'Autorizado' && this.abonoPagado) {
            this.autorizado = true;
            this.telefono.actualizarEstado('Reparado');
        } else {
            throw new Error('El teléfono debe estar autorizado y el abono debe estar pagado.');
        }
    }

    pagarAbono() {
        this.abonoPagado = true;
    }
}

// Funciones para guardar y cargar datos
function guardarEnLocalStorage(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

function cargarDesdeLocalStorage(clave) {
    const valor = localStorage.getItem(clave);
    return valor ? JSON.parse(valor) : null;
}

function guardarEnSessionStorage(clave, valor) {
    sessionStorage.setItem(clave, JSON.stringify(valor));
}

function cargarDesdeSessionStorage(clave) {
    const valor = sessionStorage.getItem(clave);
    return valor ? JSON.parse(valor) : null;
}

//logica
//----------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    const formTelefono = document.getElementById('formTelefono');
    const formTecnico = document.getElementById('formTecnico');
    const formRepuesto = document.getElementById('formRepuesto');
    const formReparacion = document.getElementById('formReparacion');
    const formCambioEstado = document.getElementById('formCambioEstado');
    const formConsultaTelefono = document.getElementById('formConsultaTelefono');
    const estadoDiv = document.getElementById('estadoTelefono');
    const datosTelefonoDiv = document.getElementById('datosTelefono');

    // Clases
    class Telefono {
        constructor(numeroSerie, imei) {
            this.numeroSerie = numeroSerie;
            this.imei = imei;
            this.estado = 'Ingresado'; // Estado inicial
        }
    }

    class Tecnico {
        constructor(nombre) {
            this.nombre = nombre;
            this.skills = [];
        }

        agregarSkill(skill) {
            this.skills.push(skill);
        }
    }

    class Repuesto {
        constructor(nombre, cantidad) {
            this.nombre = nombre;
            this.cantidad = cantidad;
        }

        reducirCantidad(cantidad) {
            this.cantidad -= cantidad;
        }
    }

    class Reparacion {
        constructor(telefono, tecnico, repuestos) {
            this.telefono = telefono;
            this.tecnico = tecnico;
            this.repuestos = repuestos;
        }
    }

    // Funciones de almacenamiento
    function guardarEnLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function cargarDesdeLocalStorage(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    function guardarEnSessionStorage(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    function cargarDesdeSessionStorage(key) {
        const data = sessionStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    // Registrar teléfono
    formTelefono.addEventListener('submit', (event) => {
        event.preventDefault();
        const numeroSerie = document.getElementById('numeroSerie').value;
        const imei = document.getElementById('imei').value;

        let telefono = new Telefono(numeroSerie, imei);
        guardarEnLocalStorage(`telefono_${numeroSerie}`, telefono);

        alert('Teléfono registrado.');
        formTelefono.reset();
    });

    // Registrar técnico
    formTecnico.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = document.getElementById('nombreTecnico').value;
        const skill = document.getElementById('skillTecnico').value;

        let tecnico = new Tecnico(nombre);
        if (skill) tecnico.agregarSkill(skill);
        guardarEnLocalStorage(`tecnico_${nombre}`, tecnico);

        alert('Técnico registrado.');
        formTecnico.reset();
    });

    // Agregar repuesto
    formRepuesto.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = document.getElementById('nombreRepuesto').value;
        const cantidad = parseInt(document.getElementById('cantidadRepuesto').value);

        let repuesto = new Repuesto(nombre, cantidad);
        guardarEnLocalStorage(`repuesto_${nombre}`, repuesto);

        alert('Repuesto agregado.');
        formRepuesto.reset();
    });

    // Registrar reparación
    formReparacion.addEventListener('submit', (event) => {
        event.preventDefault();
        const numeroSerie = document.getElementById('telefonoSerieReparacion').value;
        const nombreTecnico = document.getElementById('nombreTecnicoReparacion').value;
        const nombreRepuesto = document.getElementById('nombreRepuestoReparacion').value;
        const cantidad = parseInt(document.getElementById('cantidadRepuestoReparacion').value);

        let telefono = cargarDesdeLocalStorage(`telefono_${numeroSerie}`);
        let tecnico = cargarDesdeLocalStorage(`tecnico_${nombreTecnico}`);
        let repuesto = cargarDesdeLocalStorage(`repuesto_${nombreRepuesto}`);

        if (telefono && tecnico && repuesto) {
          
            let reparacion = new Reparacion(telefono, tecnico, [repuesto]);
            guardarEnSessionStorage(`reparacion_${numeroSerie}`, reparacion);

            // Actualizar el estado del teléfono
            telefono.estado = 'Reparado'; // Cambiar el estado según el progreso de la reparación
            guardarEnLocalStorage(`telefono_${numeroSerie}`, telefono);

            alert('Reparación registrada.');
            formReparacion.reset();
        } else {
            alert('Datos no válidos.');
        }
    });

    // Cambiar estado del teléfono
    formCambioEstado.addEventListener('submit', (event) => {
        event.preventDefault();
        const numeroSerie = document.getElementById('telefonoSerieEstado').value;
        const nuevoEstado = document.getElementById('nuevoEstado').value;

        let telefono = cargarDesdeLocalStorage(`telefono_${numeroSerie}`);
        if (telefono) {
            telefono.estado = nuevoEstado;
            guardarEnLocalStorage(`telefono_${numeroSerie}`, telefono);

            alert('Estado actualizado.');
            formCambioEstado.reset();
        } else {
            alert('Teléfono no encontrado.');
        }
    });

    // Consultar datos del teléfono
    formConsultaTelefono.addEventListener('submit', (event) => {
        event.preventDefault();
        const numeroSerie = document.getElementById('telefonoSerieConsulta').value;

        let telefono = cargarDesdeLocalStorage(`telefono_${numeroSerie}`);
        let reparacion = cargarDesdeSessionStorage(`reparacion_${numeroSerie}`);
        
        if (telefono) {
            let tecnicoNombre = reparacion ? reparacion.tecnico.nombre : 'No asignado';
            datosTelefonoDiv.innerHTML = `
                <strong>Número de Serie:</strong> ${telefono.numeroSerie}<br>
                <strong>IMEI:</strong> ${telefono.imei}<br>
                <strong>Estado:</strong> ${telefono.estado}<br>
                <strong>Técnico:</strong> ${tecnicoNombre}
            `;
        } else {
            datosTelefonoDiv.innerHTML = 'Teléfono no encontrado.';
        }
    });

    // Mostrar estado del teléfono
    window.mostrarEstado = () => {
        const numeroSerie = prompt('Ingrese el número de serie del teléfono:');
        if (numeroSerie) {
            let telefono = cargarDesdeLocalStorage(`telefono_${numeroSerie}`);
            if (telefono) {
                estadoDiv.textContent = `Número de Serie: ${telefono.numeroSerie}, Estado: ${telefono.estado}`;
            } else {
                estadoDiv.textContent = 'Teléfono no encontrado.';
            }
        }
    };
});