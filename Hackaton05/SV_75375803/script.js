class Reparacion {
  constructor(usuario, problema, especialista, autorizacion, pago) {
      this.usuario = usuario;
      this.problema = problema;
      this.especialista = especialista;
      this.autorizacion = autorizacion;
      this.pago = pago;
      this.estado = 'INICIO';
  }

  diagnosticarProblema(problema) {
      const diagnosticos = {
          pantalla_rota: 'Se encontraron abolladuras y un golpe demasiado fuerte que provocó varios daños en la pantalla.',
          bateria_no_carga: 'La batería está hinchada y necesita reemplazo urgente.',
          problema_audio: 'El altavoz está dañado debido a una sobrecarga eléctrica.',
          no_enciende: 'El circuito de encendido está quemado por un cortocircuito.',
          problema_software: 'El sistema operativo ha sido corrompido por un virus.',
          conector_cargador_danado: 'El conector está roto y tiene residuos de humedad.',
      };
      return diagnosticos[problema] || 'No se pudo determinar un diagnóstico específico para este problema.';
  }

  mostrarEstado() {
      let mensaje;
      switch (this.estado) {
          case 'INICIO':
              mensaje = 'Estado del equipo: INICIO';
              this.estado = 'EN PROCESO';
              break;
          case 'EN PROCESO':
              mensaje = 'Estado del equipo: EN PROCESO';
              this.estado = 'POR ENTREGAR';
              break;
          case 'POR ENTREGAR':
              mensaje = 'Estado del equipo: POR ENTREGAR. Debe recogerlo en la sucursal.';
              this.estado = 'ENTREGADO';
              break;
          default:
              mensaje = 'El equipo ya ha sido entregado.';
              break;
      }
      return mensaje;
  }
}

class Usuario {
  constructor(nombre, correo, telefono, imei, sucursal) {
      this.nombre = nombre;
      this.correo = correo;
      this.telefono = telefono;
      this.imei = imei;
      this.sucursal = sucursal;
  }
}

class Especialista {
  constructor(nombre, sucursal, skills) {
      this.nombre = nombre;
      this.sucursal = sucursal;
      this.skills = skills;
  }
}

class Autorizacion {
  constructor(autorizacionEscrita, montoAbonar) {
      this.autorizacionEscrita = autorizacionEscrita;
      this.montoAbonar = montoAbonar;
  }
}

class Pago {
  constructor(costoTotal, abono) {
      this.costoTotal = costoTotal;
      this.abono = abono;
  }

  validarPago() {
      return this.abono >= this.costoTotal * 0.5;
  }
}

let usuario = null;
let problemaSeleccionado = null;
let especialistaSeleccionado = null;
let reparacion = null;
let costoTotal = 0;

document.getElementById('registro-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const imei = document.getElementById('imei').value;
  const imeiAleatorio = generarImeiAleatorio();

  if (imei === imeiAleatorio) {
      alert('Este número IMEI coincide con uno robado. Por favor, repórtelo a las autoridades.');
  } else {
      alert('Número IMEI seguro. Puede continuar con la reparación.');

      usuario = new Usuario(
          document.getElementById('nombre').value,
          document.getElementById('correo').value,
          document.getElementById('telefono').value,
          document.getElementById('imei').value,
          document.getElementById('sucursal').value
      );

      console.log('Usuario registrado:', usuario);

      document.getElementById('form-problema').classList.remove('hidden');
      document.getElementById('registro-form').parentElement.classList.add('hidden');
  }
});

document.getElementById('problema-form').addEventListener('submit', function(event) {
  event.preventDefault();

  problemaSeleccionado = document.getElementById('problema').value;
  const diagnostico = new Reparacion().diagnosticarProblema(problemaSeleccionado);
  alert(`Diagnóstico: ${diagnostico}`);
  console.log('Diagnóstico:', diagnostico);

  costoTotal = generarCostoReparacion();
  mostrarDetallesPago(problemaSeleccionado, costoTotal);

  document.getElementById('form-especialista').classList.remove('hidden');
  document.getElementById('form-problema').classList.add('hidden');

  mostrarEspecialistas(problemaSeleccionado);
});

document.getElementById('confirmar-especialista').addEventListener('click', function() {
  if (especialistaSeleccionado) {
      console.log('Especialista seleccionado:', especialistaSeleccionado);
      document.getElementById('form-autorizacion').classList.remove('hidden');
      document.getElementById('form-especialista').classList.add('hidden');
  } else {
      alert('Por favor, seleccione un especialista.');
  }
});

document.getElementById('confirmar-autorizacion').addEventListener('click', function() {
  const autorizacion = new Autorizacion(
      document.getElementById('autorizacion').value,
      parseFloat(document.getElementById('abono').value)
  );

  const pago = new Pago(costoTotal, autorizacion.montoAbonar);

  if (pago.validarPago()) {
      reparacion = new Reparacion(usuario, problemaSeleccionado, especialistaSeleccionado, autorizacion, pago);
      console.log('Autorización y pago confirmados:', reparacion);

      alert('Sus datos han sido enviados correctamente.');
      document.getElementById('form-autorizacion').classList.add('hidden');
  } else {
      alert(`Debe proporcionar la autorización escrita y un abono de al menos $${costoTotal * 0.5}.`);
  }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  if (!reparacion) {
      alert('No hay información de reparación. Por favor, registre primero.');
      return;
  }

  const mensajeEstado = reparacion.mostrarEstado();
  alert(mensajeEstado);
  console.log('Estado actual del equipo:', mensajeEstado);
});

function mostrarEspecialistas(problema) {
  const especialistas = {
      pantalla_rota: [
          new Especialista('Carlos', 'La Libertad', 'Reparación de pantallas, Samsung, iPhone'),
          new Especialista('Ana', 'Lima', 'Reparación de pantallas, Huawei, Xiaomi'),
          new Especialista('Luis', 'Arequipa', 'Reparación de pantallas, Motorola, LG'),
      ],
      bateria_no_carga: [
          new Especialista('Pedro', 'La Libertad', 'Reemplazo de baterías, Samsung, iPhone'),
          new Especialista('María', 'Lima', 'Reemplazo de baterías, Huawei, Xiaomi'),
          new Especialista('Jorge', 'Arequipa', 'Reemplazo de baterías, Motorola, LG'),
      ],
      problema_audio: [
          new Especialista('Roberto', 'La Libertad', 'Reparación de audio, Samsung, iPhone'),
          new Especialista('Clara', 'Lima', 'Reparación de audio, Huawei, Xiaomi'),
          new Especialista('Ricardo', 'Arequipa', 'Reparación de audio, Motorola, LG'),
      ],
      no_enciende: [
          new Especialista('Sofía', 'La Libertad', 'Diagnóstico de encendido, Samsung, iPhone'),
          new Especialista('Tomás', 'Lima', 'Diagnóstico de encendido, Huawei, Xiaomi'),
          new Especialista('Miguel', 'Arequipa', 'Diagnóstico de encendido, Motorola, LG'),
      ],
      problema_software: [
          new Especialista('Esteban', 'La Libertad', 'Reinstalación de software, Samsung, iPhone'),
          new Especialista('Valeria', 'Lima', 'Reinstalación de software, Huawei, Xiaomi'),
          new Especialista('Gabriel', 'Arequipa', 'Reinstalación de software, Motorola, LG'),
      ],
      conector_cargador_danado: [
          new Especialista('Nicolás', 'La Libertad', 'Reemplazo de conectores, Samsung, iPhone'),
          new Especialista('Paula', 'Lima', 'Reemplazo de conectores, Huawei, Xiaomi'),
          new Especialista('Fernando', 'Arequipa', 'Reemplazo de conectores, Motorola, LG'),
      ],
  };

  const especialistasList = document.getElementById('especialistas-list');
  especialistasList.innerHTML = '';

  especialistas[problema].forEach(especialista => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.innerHTML = `<strong>${especialista.nombre}</strong> - Sucursal: ${especialista.sucursal} <br> Skills: ${especialista.skills}`;
      if (especialista.sucursal === usuario.sucursal) {
          li.className += ' bg-primary text-white';
          li.innerHTML += `<br><strong>Asignado</strong>`;
          especialistaSeleccionado = especialista;
      }
      li.addEventListener('click', function() {
          especialistaSeleccionado = especialista;
          console.log('Especialista seleccionado:', especialistaSeleccionado);
      });
      especialistasList.appendChild(li);
  });

  document.getElementById('confirmar-especialista').classList.remove('hidden');
}

function generarImeiAleatorio() {
  let imei = '';
  for (let i = 0; i < 15; i++) {
      imei += Math.floor(Math.random() * 10);
  }
  return imei;
}

function generarCostoReparacion() {
  return Math.floor(Math.random() * 9000) + 1000; // Costo entre 1000 y 9999
}

function mostrarDetallesPago(problema, costoTotal) {
  const detalles = {
      pantalla_rota: 'Pantalla de reemplazo, adhesivo especial',
      bateria_no_carga: 'Batería nueva, herramientas para apertura',
      problema_audio: 'Altavoz nuevo, cables de conexión',
      no_enciende: 'Revisión de circuitos, reemplazo de batería',
      problema_software: 'Reinstalación de sistema operativo, software de diagnóstico',
      conector_cargador_danado: 'Conector de carga, soldadura de precisión'
  };

  document.getElementById('detalle-piezas').innerText = `Piezas necesarias: ${detalles[problema]}. Costo estimado: $${costoTotal}`;
  document.getElementById('costo-total').innerText = costoTotal;
}
