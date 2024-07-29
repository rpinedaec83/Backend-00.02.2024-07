Proceso Ejercicio05
	//5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento 
	//para vender al mayor, esta dependerá del número de zapatos que se compren. 
	//Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; 
	//si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
	//y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
	Escribir "Ejercicio05: Por favor ingrese el numero de zapatos a comprar "
	Leer zapatosNum
	
	costoxZapato=80
	MontoTotal=0
	
	Si zapatosNum <= 10 Entonces
		MontoTotal = zapatosNum*80
		Escribir "El costo total de los zapatos es :",MontoTotal
	FinSi
	
	Si zapatosNum > 10 Y zapatosNum <= 20 Entonces
		MontoTotal = zapatosNum*80
		PrecioFinal = MontoTotal-0.10*MontoTotal
		Escribir "El costo total de los zapatos es :",PrecioFinal
	FinSi
	
	Si zapatosNum > 20 Y zapatosNum < 30 Entonces
		MontoTotal = zapatosNum*80
		PrecioFinal = MontoTotal-0.20*MontoTotal
		Escribir "El costo total de los zapatos es :",PrecioFinal
	Fin Si
	
	Si zapatosNum >= 30 Entonces
		MontoTotal = zapatosNum*80
		PrecioFinal = MontoTotal-0.40*MontoTotal
		Escribir "El costo total de los zapatos es :",PrecioFinal
	FinSi

	
	
FinProceso
