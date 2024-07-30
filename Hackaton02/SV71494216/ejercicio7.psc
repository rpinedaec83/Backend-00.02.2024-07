Proceso ejercicio7
//Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo
//de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	
	//Tipo A 10% de descuento
	//Tipo B 15% de descuento
	//Tipo C 20% de descuento
	
	preciohelado = 5
	Escribir "Ingrese la cantidad de helado a comprar: "
	leer cantidadHelado
	Escribir "Ingrese el tipo de membresia que tiene (A, B, C). "
	leer membresia 
	// esta asignacion es para reconocer minuscula y mayuscula 
    membresia <- Mayusculas(membresia)
	
	
	Segun membresia Hacer
		"A":
			totalprecio = cantidadHelado * preciohelado
			descuento = totalprecio * 10/100
			Escribir "Usted tiene la membresia Tipo ",membresia," y se le aplicara el descuento de 10% "
			Escribir "El total a pagar es : ", descuento , " soles "
		"B":
			totalprecio = cantidadHelado * preciohelado
			descuento = totalprecio * 15/100
			Escribir "Usted tiene la membresia Tipo ",membresia," y se le aplicara el descuento de 15% "
			Escribir "El total a pagar es : ", descuento , " soles "
		"C":
			totalprecio = cantidadHelado * preciohelado
			descuento = totalprecio * 20/100
			Escribir "Usted tiene la membresia Tipo ",membresia," y se le aplicara el descuento de 20% "
			Escribir "El total a pagar es : ", descuento , " soles "
			
		De Otro Modo:
			Escribir "Membresia no valida"
	Fin Segun
	
FinProceso
