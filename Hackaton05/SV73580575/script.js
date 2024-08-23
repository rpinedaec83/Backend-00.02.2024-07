const imeiBloqueados = ['1234', '2345', '3456', '4567'];
const nserieBloqueados = ['ABC123', 'CBA321', 'ASD123'];

class Telefono {
    constructor(marca, IMEI, NSERIE, diagnostico) {
        this.marca = marca;
        this.IMEI = IMEI;
        this.NSERIE = NSERIE;
        this.diagnostico = diagnostico;
        this.bloqueado = !validarTelefono(IMEI, NSERIE);
        this.repuestos = [];
    }
}

function validarTelefono(IMEI, NSERIE) {
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
            return new Telefono("Marca genérica", imei, serialNumber, "Diagnóstico preliminar");
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const telefono = result.value;
            const eligible = validarTelefono(telefono.IMEI, telefono.NSERIE);
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
            document.getElementById('result-message').innerText = 
                `Autorización y abono recibidos de ${nombre_Cliente}. El costo total de la reparación es $${costo_Reparacion}. Puede proceder con la reparación.`;
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
        return this.repairData.costo + partsCost;
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
                    <div>
                        <input type="checkbox" id="${part.name}" value="${part.name}">
                        <label for="${part.name}">${part.name} - $${part.cost}</label>
                    </div>
                `).join('')}
            </div>
        `,
        focusConfirm: false,
        preConfirm: () => {
            const selectedTechnicianName = document.getElementById('technician').value;
            const selectedParts = availableParts.filter(part =>
                document.getElementById(part.name).checked
            );
            const selectedTechnician = technicians.find(tech => tech.name === selectedTechnicianName);

            return new RepairAssignment(repairData, selectedTechnician, selectedParts);
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const assignment = result.value;
            document.getElementById('result-message').innerText =
                `Asignación realizada: Técnico ${assignment.technician.name} ha sido asignado con un costo total de reparación de $${assignment.totalCost}.`;
        } else {
            document.getElementById('result-message').innerText = 'No se asignó ningún técnico.';
        }
    });
}

document.getElementById('tecnicos-btn').addEventListener('click', function() {
    const repairData = new RepairData('Cliente Ejemplo', 'Diagnóstico Ejemplo', 200); 
    assignTechnicianAndParts(repairData);
});

document.getElementById('update-status-btn').addEventListener('click', function() {
    Swal.fire({
        title: 'Actualizar Estado del Equipo',
        input: 'select',
        inputOptions: {
            'En Proceso': 'En Proceso',
            'Finalizado': 'Finalizado',
            'Entregado': 'Entregado'
        },
        inputPlaceholder: 'Selecciona el estado',
        showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            const status = result.value;
            document.getElementById('status-message').innerText =
                `Estado del equipo actualizado a: ${status}`;
        } else {
            document.getElementById('status-message').innerText = 'No se actualizó el estado.';
        }
    });
});

