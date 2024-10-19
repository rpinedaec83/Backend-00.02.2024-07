
const imeiBloqueados = ['1234','2345','3456','4567'];
const nserieBloqueados = ['ABC123', 'CBA321', 'ASD123'];

class Telefono {
    constructor(marca, IMEI, NSERIE, diagnostico) {
        this.marca = marca;
        this.IMEI = IMEI;
        this.NSERIE = NSERIE;
        this.diagnostico = diagnostico;
        this.bloqueado = true;
        this.repuestos = [];
    }
}

function validarTelefono(IMEI, NSERIE) {
    const verIMEI = imeiBloqueados.includes(IMEI);
    const verNserie = nserieBloqueados.includes(NSERIE);
    return !(verIMEI || verNserie);
}

function guardarLocalStorage(telefono) {
    let fono = JSON.parse(localStorage.getItem('fono')) || [];
    fono.push(telefono);  // Se corrige esta línea
    localStorage.setItem('fono', JSON.stringify(fono));
}

document.getElementById('ingresar-informacion-celular-btn').addEventListener('click', function() {
    Swal.fire({
        title: 'Información del Teléfono',
        html: `
            <input type="text" id="imei" class="swal2-input" placeholder="IMEI">
            <input type="text" id="serial-number" class="swal2-input" placeholder="Número de Serie">
            <input type="text" id="marca" class="swal2-input" placeholder="Marca del Teléfono">
            <input type="text" id="diagnostico" class="swal2-input" placeholder="Diagnóstico">
        `,
        focusConfirm: false,
        preConfirm: () => {
            const imei = document.getElementById('imei').value;
            const serialNumber = document.getElementById('serial-number').value;
            const marca = document.getElementById('marca').value;
            const diagnostico = document.getElementById('diagnostico').value;

            if (!imei || !serialNumber || !marca || !diagnostico) {
                Swal.showValidationMessage('Por favor, completa todos los campos.');
                return false;
            }

            return new Telefono(marca, imei, serialNumber, diagnostico);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const telefono = result.value;
            const eligible = validarTelefono(telefono.IMEI, telefono.NSERIE);

            telefono.bloqueado = !eligible;  // Actualizamos el estado de "bloqueado" basado en la validación
            guardarLocalStorage(telefono);   // Guardamos el teléfono en localStorage
            Swal.fire(
                'Guardado!',
                'Los datos del telefono han sido guardados correctamente.',
                'success'
            );

            document.getElementById('result-message').innerText = 
                eligible ? 'El teléfono puede acceder al servicio.' : 
                'El teléfono está reportado y no puede acceder al servicio.';
        } else {
            document.getElementById('result-message').innerText = 'No se ingresaron los datos del teléfono.';
        }
    });
});

class RepairData {
    constructor(nombre_Cliente, diagnostico, costo) {
        this.nombre_Cliente = nombre_Cliente;
        this.diagnostico = diagnostico;
        this.costo = costo;
    }
}

function reparacionLocalStorage(repairData){
    let  reparaciones = JSON.parse(localStorage.getItem('reparaciones')) || [];
    reparaciones.push(repairData);
    
    localStorage.setItem('reparaciones', JSON.stringify(reparaciones));
}

function iniciarReparacion() {
    Swal.fire({
        title: 'Datos del Cliente y Diagnóstico',
        html: `
            <input type="text" id="nombre-cliente" class="swal2-input" placeholder="Nombre del Cliente">
            <input type="text" id="diagnostico" class="swal2-input" placeholder="Diagnóstico del Celular">
            <input type="number" id="costo" class="swal2-input" placeholder="Monto a Cobrar (en dólares)" step="0.01">
        `,
        focusConfirm: false,
        preConfirm: () => {
            const nombre_Cliente = document.getElementById('nombre-cliente').value;
            const diagnostico = document.getElementById('diagnostico').value;
            const costo = parseFloat(document.getElementById('costo').value);
            if (!nombre_Cliente || !diagnostico || isNaN(costo) || costo <= 0) {
                Swal.showValidationMessage('Por favor, completa todos los campos correctamente.');
                return false;
            }
           const repairData = new RepairData(nombre_Cliente, diagnostico, costo);
            return repairData;
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const repairData = result.value;
            reparacionLocalStorage(repairData);
            Swal.fire(
                'Guardado!',
                'Los datos del cliente y la reparación han sido guardados correctamente.',
                'success'
            );
            document.getElementById('result-message').innerText = 
                `Datos recibidos:Nombre: ${repairData.nombre_Cliente}Diagnóstico: ${repairData.diagnostico}Monto a Cobrar: $${repairData.costo}`;
        } else {
            document.getElementById('result-message').innerText = 'No se ingresaron los datos del cliente.';
        }
    });
}
    
class autorization {
    constructor(nombre_Cliente, autorizacion, costo, adelanto){
        this.nombre_Cliente = nombre_Cliente;
        this.autorizacion = autorizacion;
        this.costo_Reparacion = costo_Reparacion;
        this.adelanto =adelanto;
    }
}

function autorizacionLocalStorage(Autorization){
    let autorizaciones = JSON.parse(localStorage.getItem('autorizaciones')) || [];
    autorizaciones.push(Autorization);
    
    localStorage.setItem('autorizaciones', JSON.stringify(autorizaciones));
}

document.getElementById('informacion-cliente-btn').addEventListener('click', iniciarReparacion);
// Autorizacion y adelanto del 50%
document.getElementById('autorizacion-btn').addEventListener('click', function() {
    Swal.fire({
        title: 'Datos del Cliente y Reparación',
        html: `
            <input type="text" id="nombre-cliente" class="swal2-input" placeholder="Nombre">
            <input type="text" id="autorizacion" class="swal2-input" placeholder="Autorización Escrita">
            <input type="number" id="costo-reparacion" class="swal2-input" placeholder="Costo Total de la Reparación" step="0.01">
            <input type="number" id="adelanto" class="swal2-input" placeholder="Adelanto (en dólares)" step="0.01">
        `,
        focusConfirm: false,
        preConfirm: () => {
            const nombre_Cliente = document.getElementById('nombre-cliente').value;
            const autorizacion = document.getElementById('autorizacion').value;
            const costo_Reparacion = parseFloat(document.getElementById('costo-reparacion').value);
            const adelanto = parseFloat(document.getElementById('adelanto').value);
            if (!nombre_Cliente || !autorizacion || isNaN(costo_Reparacion) || costo_Reparacion <= 0 || isNaN(adelanto) || adelanto < (costo_Reparacion * 0.5)) {
                Swal.showValidationMessage('Por favor, completa todos los campos correctamente. Asegúrate de que el abono sea al menos el 50% del costo total.');
                return false;
            }
            return { nombre_Cliente, autorizacion, costo_Reparacion, adelanto };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const autorization = result.value;
            autorizacionLocalStorage(autorization);
            Swal.fire(
                'Guardado!',
                'Autorizacion recibida, se procede con la reparacion.',
                'success'
            );
        } else {
            Swal.fire(
                'Autorizacion denegada',
                'Reparacion cancelada',
                'error'
            );
        }
    });
});
class Technician {
    constructor(name, skills) {
        this.name = name;
        this.skills = skills; 
    }
    hasSkill(skill) {
        return this.skills.includes(skill);
    }
}
class Part {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}
class RepairAssignment {
    constructor(repairData, technician, parts = []) {
        this.repairData = repairData;
        this.technician = technician;
        this.parts = parts;
        this.totalCost = this.calculateTotalCost();
    }
    calculateTotalCost() {
        const partsCost = this.parts.reduce((acc, part) => acc + part.cost, 0);
        return this.repairData.amount + partsCost;
    }
}
const technicians = [
    new Technician('Juan Pérez', ['Samsung', 'iPhone']),
    new Technician('María López', ['Huawei', 'Xiaomi']),
    new Technician('Pedro Ruiz', ['LG', 'Motorola'])
];
const availableParts = [
    new Part('Pantalla Samsung', 150),
    new Part('Batería iPhone', 80),
    new Part('Cámara Huawei', 100)
];

function technicianLocalStorage(repairAssignment){
    let repair_assignment = JSON.parse(localStorage.getItem('repair_assignment')) || [];
    repair_assignment.push(repair_assignment);

    localStorage.setItem('repair_assignment', JSON.stringify(RepairAssignment));
}

function assignTechnicianAndParts(repairData) {
    Swal.fire({
        title: 'Asignación de Técnico y Repuestos',
        html: `
            <select id="technician" class="swal2-select">
                ${technicians.map(tech => `<option value="${tech.name}">${tech.name} - ${tech.skills.join(', ')}</option>`).join('')}
            </select>
            <hr>
            <label for="parts">Selecciona Repuestos:</label>
            <div id="parts">
                ${availableParts.map(part => `
                    <input type="checkbox" id="${part.name}" value="${part.name}">
                    <label for="${part.name}">${part.name} - $${part.cost}</label><br>
                `).join('')}
            </div>
        `,
        focusConfirm: false,
        preConfirm: () => {
            const selectedTechnicianName = document.getElementById('technician').value;
            const selectedTechnician = technicians.find(tech => tech.name === selectedTechnicianName);
            const selectedParts = availableParts.filter(part => document.getElementById(part.name).checked);
            return new RepairAssignment(repairData, selectedTechnician, selectedParts);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const RepairAssignment = result.value;
            technicianLocalStorage(RepairAssignment);
            document.getElementById('result-message').innerText = 
                `Reparación asignada a: ${RepairAssignment.technician.name}\n` +
                `Repuestos seleccionados: ${RepairAssignment.parts.map(part => part.name).join(', ')}\n` +
                `Costo total de la reparación: $${RepairAssignment.totalCost}`;
        } else {
            document.getElementById('result-message').innerText = 'No se asignó técnico ni repuestos.';
        }
    });
}
document.getElementById('tecnicos-btn').addEventListener('click', function() {
    assignTechnicianAndParts(RepairData);
});
// Clase para representar el estado del equipo
class RepairStatus {
    constructor() {
        this.stages = [
            { name: 'Recepción', completed: false },
            { name: 'Diagnóstico', completed: false },
            { name: 'Reparación', completed: false },
            { name: 'Control de Calidad', completed: false },
            { name: 'Entrega', completed: false }
        ];
        this.currentStageIndex = 0;
    }
    // Avanzar al siguiente estado
    advanceStage() {
        if (this.currentStageIndex < this.stages.length) {
            this.stages[this.currentStageIndex].completed = true;
            this.currentStageIndex++;
        }
    }
    // Obtener el estado actual
    getCurrentStage() {
        if (this.currentStageIndex < this.stages.length) {
            return this.stages[this.currentStageIndex].name;
        } else {
            return 'Reparación completada';
        }
    }
    // Obtener el progreso de la reparación
    getProgress() {
        return this.stages.map(stage => `${stage.name}: ${stage.completed ? 'Completado' : 'Pendiente'}`).join('\n');
    }
}

function statusProgress(repairStatus) {
    let progress = JSON.parse(localStorage.getItem('progress')) || [];
    progress.push(repairStatus);

    localStorage.setItem('progress', JSON.stringify(progress));
}
// Función para manejar la actualización del estado del equipo
function handleStatusUpdate(repairStatus) {
    Swal.fire({
        title: 'Actualizar Estado del Equipo',
        text: `El equipo está actualmente en: ${repairStatus.getCurrentStage()}. ¿Deseas avanzar al siguiente estado?`,
        showCancelButton: true,
        confirmButtonText: 'Sí, avanzar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            statusProgress(repairStatus);
            repairStatus.advanceStage();
            document.getElementById('status-message').innerText = repairStatus.getProgress();
            Swal.fire('¡Estado actualizado!', `Ahora el equipo está en: ${repairStatus.getCurrentStage()}`, 'success');
        }
    });
}
// Ejemplo de datos de estado de reparación existentes
const repairStatus = new RepairStatus();
// Manejar el evento del botón para abrir el Swal de actualización de estado
document.getElementById('estado-btn').addEventListener('click', function() {
    handleStatusUpdate(repairStatus);
});