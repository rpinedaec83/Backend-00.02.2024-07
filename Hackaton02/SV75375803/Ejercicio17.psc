Proceso Ejercicio17
	//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
	
		Definir horas, minutos, segundos Como Entero
		
		Escribir "Ingrese la hora (0-23):"
		Leer horas
		
		Escribir "Ingrese los minutos (0-59):"
		Leer minutos
		
		Escribir "Ingrese los segundos (0-59):"
		Leer segundos
		
		// Incrementar un segundo
		segundos = segundos + 1
		
		// Ajustar el tiempo si los segundos pasan de 59
		Si segundos = 60 Entonces
			segundos = 0
			minutos = minutos + 1
		FinSi
		
		Si minutos = 60 Entonces
			minutos = 0
			horas = horas + 1
		FinSi
		
		Si horas = 24 Entonces
			horas = 0
		FinSi
		
		Escribir "La hora dentro de un segundo será: ", horas, ":", minutos, ":", segundos
FinProceso
