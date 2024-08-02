//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, 
//sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento
//Tipo B 15% de descuento
//Tipo C 20% de descuento
Proceso Ejercicio07
	Definir precio, descuento Como Real
    Definir membresia Como Carácter
    precio <- 100
    Escribir "Ingrese el tipo de membresía (A, B o C):"
    Leer membresia
    Segun membresia Hacer
        "A": descuento <- 10
        "B": descuento <- 15
        "C": descuento <- 20
        Otro: Escribir "Tipo de membresía no válido."
    FinSegun
    Escribir "El precio es: ", precio * (100 - descuento) / 100, " con un descuento del ", descuento, "%"
	
FinProceso
