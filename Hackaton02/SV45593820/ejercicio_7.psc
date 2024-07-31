Proceso ejercicio_7
	Escribir "Ingrese el valor total de compra"
	leer subtotal
	
	Escribir "Ingrese la categoría del cliente: A, B, C"
	leer categoria
	
	descuento = 0
	Segun categoria Hacer
		"A":
		"a":
			descuento = subtotal * 0.1
		"B":
		"b":
			descuento = subtotal * 0.15
		"C":
		"c":
			descuento = subtotal * 0.2
	Fin Segun
	total = subtotal - descuento
	
	Escribir "------------------------"
	Escribir "subtotal: ", subtotal
	Escribir "descuento: ", descuento
	Escribir "Total a pagar: ", total
	
FinProceso
