//Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. 
//Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. 
//El precio de cada zapato es de $80.
Proceso Ejercicio05
	precio=80
	Escribir "ingrese la cantidad de zapatos que desea comprar"
	Leer numerodezapatos
	preciototal = numerodezapatos * precio
	Si numerodezapatos > 30 Entonces
		descuento = 0.40
	SiNo
		
		Si numerodezapatos >= 20 Entonces
			descuento = 0.20
		SiNo
			Si numerodezapatos >= 10 Entonces
				descuento = 0.10
			SiNo 
				descuento = 0
			FinSi
		FinSi
	FinSi
	preciofinal = preciototal - (precio * descuento)
	
	Escribir "La cantidad ingresada es: ", numerodezapatos
	Escribir "El precio original es: ", preciototal
	Escribir "El descuento es: ", descuento * 100 "%"
	Escribir "El precio descuentado es: ", preciofinal
	
FinProceso
