Proceso Ejercicio14
		// Hacer un algoritmo en PSeInt que lea un entero positivo del 1 al 10 y determine si es un numero primo.
		Definir numeroIngresado, contador Como Entero
		Escribir "Ingrese un numero positivo del 1 al 10:"
		Leer numeroIngresado
		
		// Validaci�n del n�mero ingresado
		Mientras numeroIngresado < 1 O numeroIngresado > 10 Hacer
			Escribir "Numero inv�lido. Ingrese un n�mero positivo del 1 al 10:"
			Leer numeroIngresado
		FinMientras
		
		contador = 0
		
		Para i = 1 Hasta numeroIngresado Hacer
			Si numeroIngresado mod i = 0 Entonces
				contador = contador + 1
			FinSi
		FinPara
		
		Si contador = 2 Entonces
			Escribir "El numero ingresado es primo"
		SiNo
			Escribir "El numero ingresado no es primo"
		FinSi
FinProceso
