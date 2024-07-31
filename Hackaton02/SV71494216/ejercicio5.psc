Proceso ejercicio5
	//Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción
	//de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. 
	//Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor 
	//de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento.
	//El precio de cada zapato es de $80.
	Definir precioZapato Como Real
	precioZapato = 80
	Escribir "Ingrese la cantidad de zapatos que va a comprar"
	Leer nZapatos
	si (nZapatos >= 1 Y nZapatos <= 9)  Entonces
		total = nZapatos * precioZapato
		Escribir "El precio total es : " , total 
	SiNo
		si (nZapatos >= 10 Y nZapatos <= 20)  Entonces
			total = nZapatos * precioZapato
			Escribir "El precio total es : " , total 
			Escribir "Por la compra de 10 a mas zapatos se le dara un descuento de 10%"
			descuento = total * 10/100
			Escribir "El precio total de ",nZapatos," zapatos aplicando el descuento de 10% es : " , descuento ," soles"
		SiNo
			si (nZapatos >= 21 Y nZapatos <= 30)  Entonces
				total = nZapatos * precioZapato
				Escribir "El precio total es : " , total 
				Escribir "Por la compra de 20 a mas zapatos se le dara un descuento de 20%"
				descuento = total * 20/100
				Escribir "El precio total de ",nZapatos," zapatos aplicando el descuento de 20% es : " , descuento ," soles"
			SiNo
				si nZapatos >= 31  Entonces
					total = nZapatos * precioZapato
					Escribir "El precio total es : " , total 
					Escribir "Por la compra de 30 a mas zapatos se le dara un descuento de 40%"
					descuento = total * 40/100
					Escribir "El precio total de ",nZapatos," zapatos aplicando el descuento de 40% es : " , descuento ," soles"
				SiNo
					Escribir "la cantidad ingresada de (",nZapatos,") zapatos no es valida"
					
				FinSi
			FinSi
		FinSi
		
	FinSi
	
FinProceso
