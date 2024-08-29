import { Telefono } from "./models/telefono.js";
import { Tecnico } from "./models/tecnico.js";
import { AreaDiagnostico } from "./models/areaDiagnostico.js";
import { AreaReparacion } from "./models/areaReparacion.js";

const getTelefonos = JSON.parse(localStorage.getItem("telefonos"));
const telefonoActual = getTelefonos[getTelefonos.length - 1];
const newTelefono = new Telefono(telefonoActual["numeroSerie"], telefonoActual["imei"], telefonoActual["marca"]);
newTelefono.diagnostico = telefonoActual.diagnostico;
newTelefono.estado = telefonoActual.estado;
newTelefono.autorizacion = telefonoActual.autorizacion;
newTelefono.encargado = telefonoActual.encargado;
newTelefono.area = telefonoActual.area;
newTelefono.repuestos = telefonoActual.repuestos;
//info adicional
const tecnico1 = new Tecnico("Juan", ["Samsung", "iphone", "xiaomi"], 'diagnosticos');
const tecnico2 = new Tecnico("Pedro", ["Samsung", "iphone", "xiaomi"], 'reparacion');

// Verificar bloqueo
const listaDeImeiBloqueados = ["943", "964", "912", "843", "754", "412"];
newTelefono.verificarImei(listaDeImeiBloqueados);

// Mostrar datos
function actualizarDatos() {
    const estadoNumeroSerie = document.getElementById("estadoNumeroSerie");
    const estadoImei = document.getElementById("estadoImei");
    const estadoMarca = document.getElementById("estadoMarca");
    const estadoBloqueo = document.getElementById("estadoBloqueo");
    const estadoDiagnostico = document.getElementById("estadoDiagnostico");
    const estadoEstado = document.getElementById("estadoEstado");
    const estadoAutorizacion = document.getElementById("estadoAutorizacion");
    const estadoEncargado = document.getElementById("estadoEncargado");
    const estadoArea = document.getElementById("estadoArea");
    const listaRepuestos = document.getElementById("estadoRepuestos");

    estadoNumeroSerie.innerHTML = newTelefono.numeroSerie;
    estadoImei.innerHTML = newTelefono.imei;
    estadoMarca.innerHTML = newTelefono.marca;
    if (newTelefono.estaBloqueado == true){
        estadoBloqueo.innerHTML = "Bloqueado";
    }
    else {
        estadoBloqueo.innerHTML = "Libre";
    }
    // en caso sea null
    if (newTelefono.diagnostico == null){
        estadoDiagnostico.innerHTML = "";
    }
    else {
        estadoDiagnostico.innerHTML = newTelefono.diagnostico;
    }
    estadoEstado.innerHTML = newTelefono.estado;
    if (newTelefono.autorizacion == true){
        estadoAutorizacion.innerHTML = "Autorizado";
    }
    else {
        estadoAutorizacion.innerHTML = "Sin Autorizar";
    }
    if (newTelefono.encargado == null){
        estadoEncargado.innerHTML = "";
    }
    else {
        estadoEncargado.innerHTML = newTelefono.encargado;
    }
    if (newTelefono.area == null){
        estadoArea.innerHTML = "";
    }
    else {
        estadoArea.innerHTML = newTelefono.area;
    }

    newTelefono.repuestos.map((elemento, index) => {
        const createLi = document.createElement("li");
        createLi.textContent = elemento;
        listaRepuestos.appendChild(createLi);
    })
}

// actualizar y guardar el localstorage
function guardarDatos(){
    // Reemplazar el ultimo telefono guardado
    getTelefonos.pop();
    getTelefonos.push(newTelefono);
    localStorage.setItem("telefonos", JSON.stringify(getTelefonos));
}

const botonDiagnosticar = document.getElementById("botonDiagnosticar");
botonDiagnosticar.onclick = function(){
    const diagnostico1 = new AreaDiagnostico('Cambio de pantalla', newTelefono, tecnico1);
    diagnostico1.agregarDiagnostico();
    actualizarDatos();
    guardarDatos();
}

const botonAutorizar = document.getElementById("botonAutorizar");
botonAutorizar.onclick = function(){
    newTelefono.autorizarRevision("Yo Juan autorizo", 100);
    actualizarDatos();
    guardarDatos();
}

const botonReparar = document.getElementById("botonReparar");
botonReparar.onclick = function(){
    const reparacion1 = new AreaReparacion("pantalla penKey", newTelefono, tecnico2);
    reparacion1.agregarRepuesto();
    actualizarDatos();
    guardarDatos();
}

const botonFinalizar = document.getElementById("botonFinalizar");
botonFinalizar.onclick = function(){
    const reparacion1 = new AreaReparacion("pantalla penKey", newTelefono, tecnico2);
    reparacion1.finalizarReparacion();
    guardarDatos();
}

const botonInicio = document.getElementById("botonInicio");
botonInicio.onclick = function(){
    window.location.href = "index.html";
}

actualizarDatos();
