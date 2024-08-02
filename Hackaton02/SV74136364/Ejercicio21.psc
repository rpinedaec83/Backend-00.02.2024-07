//Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
Proceso Ejercicio21
	Definir num, factorial, contador Como Entero
	Escribir "Ingrese numero para calacular el factorial"
	Leer num
	
	factorial = 1
	
	Para contador = 1 Hasta num Con Paso 1 Hacer
		factorial = factorial * contador
	Fin Para
	
	Escribir "El factorial de ", num, " es: ", factorial
FinProceso
