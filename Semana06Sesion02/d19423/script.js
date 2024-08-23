class Gundam {
    constructor(nombre, descripcion, imagen, escala, isCustom = false, custom = "") {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.escala = escala;
        this.isCustom = isCustom;
        this.custom = custom;
    }
}

let arrGundams = [];
let login;
let $table = $('#table');
window.accionEvents = {
    'click .like': function (e, value, row, index) {
        editarItem(row);
    },
    'click .remove': function (e, value, row, index) {
        borrarItem(row);

    }
}


const GundamStore = function () { //a
    login = JSON.parse(sessionStorage.getItem("login"));
    if (login == null) {
        window.location.replace("file:///Users/rpineda/Fuentes/Backend-00.02.2024-07/Semana06Sesion02/d19423/login.html");
    } else {
        if (!login.login)
            console.log("No se debe recordar las credenciales")
        //window.location.replace("file:///Users/rpineda/Fuentes/Backend-00.01.2024-03/Semana06Sesion01/d19423/login.html");
    }
    objLocalGundams = localStorage.getItem("gundams");
    if (objLocalGundams != null) {
        arrGundams = JSON.parse(objLocalGundams);
    }
    $table.bootstrapTable();
    $table.bootstrapTable('load', arrGundams);
    //modificarCSS();
}();

$("#btnAgregar").on("click", function (event) {
    event.preventDefault();
    console.log("Agregando un nuevo");
    let nombre = prompt("Agrega el nombre");
    let descripcion = prompt("Agrega la descripcion");
    let imagen = prompt("Agrega la imagen");
    let escala = prompt("Agrega la escala");
    let isCustom = prompt("Esta modificado???");
    let custom = ""
    if (isCustom == "SI") {
        custom = prompt("Que le modificaste???");
    }
    let objGundam = new Gundam(nombre, descripcion, imagen, escala, (isCustom == "SI" ? true : false), (isCustom == "SI" ? custom : ""))
    arrGundams.push(objGundam);
    console.log(arrGundams);
    localStorage.setItem("gundams", JSON.stringify(arrGundams));
    $table.bootstrapTable('load', arrGundams);
})

$("#btnEliminar").on("click", function (event) {
    event.preventDefault();
    console.log("Eliminar todo");
    arrGundams = [];
    localStorage.setItem("gundams", JSON.stringify(arrGundams));
    $table.bootstrapTable('load', arrGundams);
});
