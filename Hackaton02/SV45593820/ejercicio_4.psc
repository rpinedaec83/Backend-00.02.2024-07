Proceso ejercicio_4
	suma = 0
	mayr = 0
	menr = 0
	
	Escribir "Digite un número"
	leer num
	suma = suma + num
	si mayr < num Entonces
		mayr = num
		menr = num
	SiNo
		si menr > num Entonces
			menr = num
		FinSi
	FinSi
	
	Para ini<-1 Hasta 2 Con Paso 1 Hacer
		Escribir "Digite un número"
		leer num
		suma = suma + num
		si mayr < num Entonces
			mayr = num
		SiNo
			si menr > num Entonces
				menr = num
			FinSi
			
		FinSi
		
	Fin Para
	
	medio = suma - (mayr + menr)
	
	Escribir "de menor a mayor: ", menr, " ", medio, " ", mayr
FinProceso
