Proceso Ejercicio07
	//7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a
	//sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, t
	//ipo A, tipo B y tipo C. Los descuentos son los siguientes:
	//Tipo A 10% de descuento
	//Tipo B 15% de descuento
	//Tipo C 20% de descuento  
	Escribir "Ejercicio07"
	Escribir "Por favor escriba el tipo de membresia del cliente Tipo A, Tipo B o Tipo C: "
	Leer tipoMembresia
	Desc=""
	
	
	Si tipoMembresia="A" O tipoMembresia="a" Entonces
		Desc<-"10% de descuento"
		Escribir "El descuento que tiene el cliente por el tipo de membresia ",tipoMembresia, " es: ",Desc
	SiNo
		Si tipoMembresia="B" o tipoMembresia="b" Entonces
			Desc<-"15% de descuento"
			Escribir "El descuento que tiene el cliente por el tipo de membresia ",tipoMembresia, " es: ",Desc
		SiNo
			Si tipoMembresia="C" O tipoMembresia="c" Entonces
				Desc<-"20% de descuento"
				Escribir "El descuento que tiene el cliente por el tipo de membresia ",tipoMembresia, " es: ",Desc
			SiNo
				Escribir "Opcion no valida, no existe tipo de cliente"
			FinSi
		FinSi
	FinSi
	
FinProceso
