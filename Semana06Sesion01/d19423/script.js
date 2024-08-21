$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });

let objMascota = {
    nombre:"Pancho",
    especie:"Gato",
    raza:"Mestizo",
    edad: 2,
    color:"Atigrado"
}

console.log(JSON.stringify(objMascota));

let strMascota = `{"nombre":"Pancho","especie":"Gato","raza":"Mestizo","edad":2,"color":"Atigrado"}`;

let objMascota2 = JSON.parse(strMascota);
console.log(objMascota2);
console.log(objMascota2.nombre);

class Television{
    constructor(modelo, nombre, precio){
        this.modelo = modelo;
        this.nombre = nombre;
        this.precio = precio;
    }
    prender(){
        console.log("Se prendio")
    }
    toJSON(){
        return JSON.stringify(this);
    }
}

let tv = new Television("LG","KTV001",1500);

tv.prender();
tv.toJSON();

let strTV = JSON.stringify(tv);
console.log(strTV)
