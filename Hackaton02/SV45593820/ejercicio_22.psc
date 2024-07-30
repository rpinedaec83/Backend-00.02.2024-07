Proceso ejercicio_22
	Escribir "Ingrese un número positivo"
	leer numero
	
	si numero > -1 Entonces
		suma = 0
		Para _i <- 1 Hasta numero Con Paso 1 Hacer
			suma = suma + _i
		Fin Para
		
		Escribir "La suma de los ", numero, " primeros números es: ", suma
	SiNo
		Escribir "(!) VALOR NO VÁLIDO"
	FinSi
FinProceso
