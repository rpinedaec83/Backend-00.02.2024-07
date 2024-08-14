//Características: Herencia, encapsulación, polimorfismo, y abstracción.

//El objetivo es Vender Electrodomesticos

//tamaño
//precio
//marca
//resolucion
//tecnologia

class Television{
    constructor(marca, modelo, tamaño, resolucion ){
        this.marca = marca;
        this.modelo=modelo;
        this.tamaño = tamaño;
        this.resolucion = resolucion;
    }
    prender(){
        console.log(`El televisor ${this.modelo} se esta prendiendo`)
    }
    apagar(){
        console.log(`El televisor ${this.modelo} se esta apagando`)
    }
}

let miTV = new Television("LG", "STD2021", 43, "4K");
let tv2 = new Television("Sony", "STK1000", 55, "8K");

console.log(miTV.marca);

miTV.marca = "Life Goods Electroncis"

console.log(miTV.marca);

console.log(tv2.marca);

miTV.prender()
tv2.apagar()



