let strDNI = prompt("Escribe tu DNI");
let strNumeroVerificador = prompt("Escribe tu numero verificador")

let arrVerificador =  [6,7,8,9,0,1,1,2,3,4,5]
let arrStrDNI=strDNI.split('')
let arr=[3,2,7,6,5,4,3,2]
let suma = 0
let verificador = false
try {
    for (let index = 0; index < strDNI.length; index++) {
        suma = suma + arr[index]*arrStrDNI[index]
    }
    let res= suma%11
    let resultado = 11-res

    if(resultado==11){
        resultado=0
    }

    if (strNumeroVerificador==arrVerificador[resultado]){
        alert("Tu DNI es Valido")
    } else {
        alert("Tu DNI No es Valido")
    }
    console.log(resultado)

} catch (error) {
    //capturamos el error
}