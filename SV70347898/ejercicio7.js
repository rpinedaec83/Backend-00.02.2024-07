//7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen 
//tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:

//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento

function ejecutarEjercicio7() {
    let input = prompt("Por favor, ingrese su tipo de membresía A, B o C para determinar su descuento");
    let letra = input.toUpperCase();
    console.log(typeof (letra))

    if (letra == 'A') {
        alert("Tu descuento será del 10%");
    }

    else if (letra == 'B') {
        alert("Tu descuento será del 15%");
    }

    else if (letra == 'C') {
        alert("Tu descuento será del 20%");
    }
    else {
        alert("Las membresías pueden ser A, B o C");
    }
}