//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso Ejercicio21
	Definir numeroingresado, contador Como Entero
	contador = 1
	Escribir "Ingresar un numero:"
	Leer numeroingresado
	
	para x <- 1 hasta numeroingresado hacer
		contador = contador * x
		
	FinPara
	
	Escribir "El factorial del numero es:", contador 
	
FinProceso
