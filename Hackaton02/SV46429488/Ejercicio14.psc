Proceso Ejercicio14
	//14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y 
	//determine si es un número primo.
	
	Escribir "Ejercicio 14, Determinar si un número es Primo." 
	Escribir "Por favor ingrese un número entero positivo entre 1 y 10:"
	Leer numPrimo
		
	Si numPrimo < 1 o numPrimo > 10 Entonces
		Escribir "Opcion no valida, por favor ingrese un numero permitido"
	Sino
		esPrimo = Verdadero
		Si numPrimo = 1 Entonces
			esPrimo = Falso
		Sino
			Si numPrimo = 2 o numPrimo = 3 o numPrimo = 5 o numPrimo = 7 Entonces
				esPrimo = Verdadero
			Sino
				esPrimo = Falso
			FinSi
		FinSi
			Si esPrimo Entonces
				Escribir "El número ",numPrimo," es primo."
			Sino
				Escribir "El número ",numPrimo," NO es primo."
			FinSi
	FinSi

	
FinProceso
