//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su
//tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
//Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 20% de descuento
Proceso Ejercicio7
	Definir precio, descuento Como Real
	Definir tipoMembresia Como Caracter
	
	Escribir "ingrese el tipo de menbresia (A,B,C)"
	Leer tipoMembresia
	Escribir "ingrese el precio del helado"
	Leer precio

	
	Segun tipoMembresia Hacer
			Caso "A":
			descuento = precio * 0.10
			Caso "B":
			descuento = precio * 0.15
			Caso "C":
				descuento = precio * 0.20
			Caso "a":
				descuento = precio * 0.10
			Caso "b":
				descuento = precio * 0.15
			Caso "c":
				descuento = precio * 0.20
			De Otro Modo:
			Escribir "Tipo de membresía no válido"
	Fin Segun

precioConDescuento = precio - descuento

Escribir "Precio original: ", precio
Escribir "Descuento: ", descuento
Escribir "Precio con descuento: ", precioConDescuento
FinProceso
