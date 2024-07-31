Proceso ejercicio_21
	Escribir "Ingrese un número no negativo"
	leer numero
	
	si numero > -1 Entonces
		
		factorial = 1
		Para _i <- 1 Hasta numero Con Paso 1 Hacer
			factorial = factorial * _i
		Fin Para
		
		Escribir "El factorial de ", numero, " es: ", factorial
	SiNo
		Escribir "(!) VALOR NO VÁLIDO"
	FinSi
	
FinProceso
