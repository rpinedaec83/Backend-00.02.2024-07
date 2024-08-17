Proceso Ejercicio05
	//Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de 
	//descuento para vender al mayor, esta dependerá del número de zapatos que se compren. 
	//Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; 
	//si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 
	//20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
	precio=80
	Escribir "Ingrese la cantidad de zapatos que desea comprar: "
	Leer numerozapatos
	preciototal=numerozapatos*precio
	
	Si numerozapatos > 30 Entonces
		descuento=0.40
	SiNo
		
		Si numerozapatos >= 20 Entonces
			descuento=0.20
		SiNo
			Si numerozapatos >= 10 Entonces
				descuento=0.10
			SiNo
				descuento=0
			FinSi
		FinSi
	FinSi
	preciofinal= preciototal - (preciototal*descuento)
	
	Escribir "La cantidad ingresas es: ",numerozapatos
	Escribir "El precio original es :",preciototal
	Escribir "El descuento es de :", descuento *100 "%"
	Escribir "El precio con descuento es: ", preciofinal
FinProceso
