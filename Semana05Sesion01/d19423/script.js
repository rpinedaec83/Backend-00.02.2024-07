//Características: Herencia, encapsulación, polimorfismo, y abstracción.

//El objetivo es Vender Electrodomesticos

//tamaño
//precio
//marca
//resolucion
//tecnologia

class Electrodomesticos{
    constructor(nombre,marca, modelo, color, precio, voltaje, conectividad){
        this.nombre = nombre;
        this.marca = marca;
        this.modelo=modelo;
        this.color = color;
        this.precio = precio;
        this.voltaje = voltaje;
        this.conectividad = conectividad;
    }
    prender(){
        if(this.voltaje !== 220){
            console.log(`verifique su sumistro de energia que sea de ${this.voltaje}`)
        }
        console.log(`El ${this.nombre} se esta encendiendo`)
    }
    apagar(){
        console.log(`El ${this.nombre} se esta apagando`)
    }
    conectar(medio){
        const index = this.conectividad.indexOf(medio);
        console.log(index);
        if (index > -1) { // only splice array when item is found
            console.log("Conectando al "+ medio)
        }
        else{
            console.log(`Imposible conectar al ${medio} ya que solo se tienen la siguiente conectividad ${this.conectividad.join(",")}`)
       
        }
    }
}

class LineaMarron extends Electrodomesticos{
    constructor(nombre,marca, modelo, color, precio, voltaje, conectividad = null, audio, entradas){
        super(nombre,marca, modelo, color, precio, voltaje, conectividad);
        this.audio = audio;
        this.entradas = entradas;
    }
    ajustarVolumen(nivel){
        console.log(`Ajustando el volumen al nivel ${nivel} del dispositivo ${this.audio}`)
    }
    cambiarOrigen(origen = "HDMI 1"){
        const index = this.entradas.indexOf(origen);
        console.log(index);
        if (index > -1) { // only splice array when item is found
            console.log("Conectando al "+ origen)
        }
        else{
            console.log(`Imposible conectar al ${origen} ya que solo se tienen las siguientes entradas ${this.entradas.join(",")}`)
        }
    }
}



class Television extends LineaMarron{
    constructor(nombre,marca, modelo, color, precio, voltaje, conectividad, audio, entradas, tipoPantalla, tamaño, resolucion){
        super(nombre,marca, modelo, color, precio, voltaje, conectividad, audio, entradas);
        this.tipoPantalla = tipoPantalla;
        this.tamaño = tamaño;
        this.resolucion = resolucion;
    }

    navegarInternet(url){
        console.log(`Navegando en la pagina ${url}`)
    }
    verStreaming(proveedor){
        console.log(`Viendo ${proveedor} en la pantalla ${this.tipoPantalla} en resolucion ${this.resolucion}`)
    }
    apagar(){
        console.log(`Desconectando los medios ${this.conectividad.join(',')}`);
        console.log(`El ${this.nombre} se esta apagando`)
    }
}



class EquipoSonido extends LineaMarron{
    constructor(nombre,marca, modelo, color, precio, voltaje, conectividad, audio, entradas, salida){
        super(nombre,marca, modelo, color, precio, voltaje, conectividad, audio, entradas);
        this.salida = salida
    }
    mezclar(nuevaCancion){
        console.log(`Reproduciendo ${nuevaCancion} en ${this.audio}`)
    }
}



let tv1 = new Television("TV Dormitorio","LG","XXX3","Negro",900, 110, ["wifi", "lan", "BT"], "Dolby Atmos",["HDMI 1", "HDMI 2", "AV1"],"LED",42,"4K");
let tv2 = new Television("TV Sala","LG","XXX3","Negro",900, 220, ["lan"], "Dolby Atmos",["HDMI 1", "HDMI 2", "AV1"],"LED",42,"4K");

tv1.prender()
tv2.prender()
tv1.conectar("wifi");
tv2.conectar("wifi");
tv1.ajustarVolumen(100)
tv2.ajustarVolumen(20)
tv1.cambiarOrigen()
tv2.cambiarOrigen("HDMI 3")

tv1.navegarInternet("www.x-codec.net")
tv2.navegarInternet("www.google.com")

tv1.verStreaming("NetFlix")
tv2.verStreaming("HBO MAX")
tv1.apagar()
tv2.apagar()

let equipo = new EquipoSonido("Equipo Sala","LG","XXX3","Negro",900, 220, ["lan"], "Dolby Atmos",["HDMI 1", "HDMI 2", "AV1"]);
equipo.apagar()



// class Television{
//     constructor(marca, modelo, tamaño, resolucion ){
//         this.marca = marca;
//         this.modelo=modelo;
//         this.tamaño = tamaño;
//         this.resolucion = resolucion;
//     }
//     prender(){
//         console.log(`El televisor ${this.modelo} se esta prendiendo`)
//     }
//     apagar(){
//         console.log(`El televisor ${this.modelo} se esta apagando`)
//     }
// }

// let miTV = new Television("LG", "STD2021", 43, "4K");
// let tv2 = new Television("Sony", "STK1000", 55, "8K");

// //miTV = "OBJ"

// console.log(miTV.marca);

// miTV.marca = "Life Goods Electroncis"

// console.log(miTV.marca);

// console.log(tv2.marca);

// miTV.prender()
// tv2.apagar()


class Persona{
    constructor(nombre, apellido, edad, sexo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
    }
}


class Cliente extends Persona{
    constructor(nombre, apellido, edad, sexo, codigoCliente) {
        super(nombre, apellido, edad, sexo)
        this.codigoCliente = codigoCliente
    }
}

class Proveedor extends Persona{
    constructor(nombre, apellido, edad, sexo, codigoProveedor) {
        super(nombre, apellido, edad, sexo)
        this.codigoProveedor = codigoProveedor
    }
}


let cliente1 = new Cliente("Roberto", "Pineda", 40, "Masculino", "CL00001");


console.log(cliente1.nombre)
