
const imeiBloqueados = ['1234','2345','3456','4567'];
const nserieBloqueados = ['ABC123', 'CBA321', 'ASD123'];


class telefono {
    constructor(marca, IMEI, NSERIE, diagnostico, ){
        this.marca = marca;
        this.IMET = IMEI;
        this.NSERIE = NSERIE;
        this.diagnostico = diagnostico;
        this.bloqueado = true;
        this.repuestos =[];
         }
    }

    function validarTelefono(IMEI,NSERIE){
        const verIMEI = imeiBloqueados.includes(IMEI);
        const verNserie = nserieBloqueados.includes(NSERIE);

        return !(verIMEI || verNserie);
    }


    document.getElementById('ingresar-informacion-celular-btn').addEventListener('click', function() {
        Swal.fire({
            title: 'Información del Teléfono',
            html: `
                <input type="text" id="imei" class="swal2-input" placeholder="IMEI">
                <input type="text" id="serial-number" class="swal2-input" placeholder="Número de Serie">
            `,
            focusConfirm: false,
            preConfirm: () => {
                const imei = document.getElementById('imei').value;
                const serialNumber = document.getElementById('serial-number').value;
    
                if (!imei || !serialNumber) {
                    Swal.showValidationMessage('Por favor, ingresa ambos IMEI y número de serie.');
                    return false;
                }
                return new telefono(imei, serialNumber);
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const telefono = result.value;
                const eligible = validarTelefono(telefono.imei, telefono.serialNumber);
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
            return new RepairData(nombre_Cliente, diagnostico, costo);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const repairData = result.value;
            document.getElementById('result-message').innerText = 
                `Datos recibidos:\nNombre: ${repairData.nombre_Cliente}\nDiagnóstico: ${repairData.diagnostico}\nMonto a Cobrar: $${repairData.costo}`;
        } else {
            document.getElementById('result-message').innerText = 'No se ingresaron los datos del cliente.';
        }
    });
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
            const { nombre_Cliente, costo_Reparacion } = result.value;
            document.getElementById('result-message').innerText = `Autorización y abono recibidos de ${nombre_Cliente}. El costo total de la reparación es $${costo_Reparacion}. Puede proceder con la reparación.`;
        } else {
            document.getElementById('result-message').innerText = 'No se completó la autorización.';
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
            const repairAssignment = result.value;
            document.getElementById('result-message').innerText = 
                `Reparación asignada a: ${repairAssignment.technician.name}\n` +
                `Repuestos seleccionados: ${repairAssignment.parts.map(part => part.name).join(', ')}\n` +
                `Costo total de la reparación: $${repairAssignment.totalCost}`;
        } else {
            document.getElementById('result-message').innerText = 'No se asignó técnico ni repuestos.';
        }
    });
}

document.getElementById('tecnicos-btn').addEventListener('click', function() {
    assignTechnicianAndParts(repairData);
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
            repairStatus.advanceStage();
            document.getElementById('status-message').innerText = repairStatus.getProgress();
            Swal.fire('¡Estado actualizado!', `Ahora el equipo está en: ${repairStatus.getCurrentStage()}`, 'success');
        }
    });
}

// Ejemplo de datos de estado de reparación existentes
const repairStatus = new RepairStatus();

// Manejar el evento del botón para abrir el Swal de actualización de estado
document.getElementById('update-status-btn').addEventListener('click', function() {
    handleStatusUpdate(repairStatus);
});

