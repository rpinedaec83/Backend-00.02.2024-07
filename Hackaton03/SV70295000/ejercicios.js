//<-----Ejercicio1----->\\
// Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.
function ejercicio01(){

    let input = prompt("Ingrese un numero de 3 cifras");
    let numero = parseInt(input);
     if(isNaN(numero)){
        alert("El dato ingresado no es un numero");

    }else{
        if(numero > 99 && numero<= 999){
            alert("El numero ingresado cumple con la regla");
        
    }else{
        alert("El numero ingresado no tiene 3 cifras");
    }
}
}


//<-----Ejercicio2----->\\
 // Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function ejercicio02() {
   
   let input = prompt("ingrese un numero");
   let numero = parseInt(input);

   if (isNaN(numero)){
    alert("Por favor, ingrese un numero valido");

   }else{
    if(numero<0){
        alert("El numero es negativo");
    }else{
        alert("El numero es positivo");
    }
   }

}


//<-----Ejercicio3----->\\
//Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
function ejercicio03(){
    let input = prompt("Ingrese un numero");
    let numero = parseInt(input);
    if(isNaN(numero) || input === "" ){
        alert("El dato ingresado no es un numero") 

    }else{
        if(input.endsWith("4")){
            alert("El numero ingresado acaba en 4")
        }else{
            alert("El numero ingresado no acaba en 4")
        }
    }
}


//<-----Ejercicio4----->\\
//Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.
function ejercicio04(){

    let input1 = prompt("Ingrese el primero numero");
    let input2 = prompt("Ingrese el segundo numero");
    let input3 = prompt("Ingrese el tercer numero");

    let numero1 = parseInt(input1);
    let numero2 = parseInt(input2);
    let numero3 = parseInt(input3);
    if(isNaN(numero1), isNaN(numero2), isNaN(numero3)){
        alert("ingrese los datos validos");
    }else{
        let numeros = [numero1, numero2, numero3];
        numeros.sort((a,b) => a - b);
        alert("Los numero ordenados de menor a mayor son: " + numeros.join(" , "))

    }
    }


//<-----Ejercicio5----->\\
    //Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
    function ejercicio05(){
        
        let input = prompt("Ingrese la cantidad de zapatos a comprar");
        let cantidad = parseInt(input);
        
        const precio_zapatos = 80;

        if(isNaN(cantidad), cantidad <= 0){
            alert("Ingrese una dato valido")
            let descuento = 0
        }else{
            if(cantidad > 10){
                descuento = 0.10;
            }else if(cantidad > 20){
                descuento = 0.20;
            }else if(cantidad > 30){
                descuento = 0.40
            }
             let precioSinDescuento = cantidad * precio_zapatos;
             let precioConDescuento = precioSinDescuento * (1 - descuento);

             alert("El precio final a pagar es: " + precioConDescuento.toFixed(2))

        }
    }



    //<-----Ejercicio6----->\\
    //Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

function ejercicio06(){

    let input = prompt("Ingrese la cantidad de horas laboradas: ")
    let horas = parseInt(input);
    if (isNaN(horas)){
    alert("Ingrese un dato valido")
    }else{
        let pago = 0
        if (horas < 40) {
            pago = horas * 20
            alert("Su sueldo sera de:$ " + pago)
        }else if (horas > 40){
            pago = (horas - 40) * 25 + 800
            alert("Su pago sera de:$ " + pago)
        }

    }
}


//<-----Ejercicio7----->\\
//Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento.//

function ejercicio07(){

    const precio_Helado = parseFloat(prompt("Ingrese el prfecio del helado a comprar"));
    if(isNaN(precio_Helado) || precio_Helado <=0){
        alert("Ingrese un precio valido")
    return;
    }    
    const tipo_Membresia = prompt("Ingrese el tipo de membresia que posee (A, B O C)");
}