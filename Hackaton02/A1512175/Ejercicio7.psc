Proceso Ejercicio7
	//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	//Tipo A 10% de descuento
	//Tipo B 15% de descuento
	//Tipo C 20% de descuento
		Definir precioOriginal, precioFinal, descuento Como Real
		Definir tipoMembresia Como Caracter
		Escribir "Ingrese el precio original del helado:"
		Leer precioOriginal
		Escribir "Ingrese el tipo de membresía (A, B, C):"
		Leer tipoMembresia
		Segun tipoMembresia Hacer
			Caso "A" o "a":
				descuento = 0.10
			Caso "B" o "b":
				descuento = 0.15
			Caso "C" o "c":
				descuento = 0.20
			De Otro Modo:
				Escribir "Tipo de membresía no válida. No se aplicará descuento."
				descuento = 0
		Fin Segun
		precioFinal = precioOriginal * (1 - descuento)
		Escribir "El precio final del helado es: ", precioFinal
FinProceso
