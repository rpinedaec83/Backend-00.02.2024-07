//Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta
Proceso Ejercicio25
	Definir num, factorial, contador Como Entero
	Escribir "Ingresa Numero"
	Leer num
	
	factorial = 1
	contador = 1
	
	Mientras contador <= num Hacer
		factorial = factorial * contador
		contador = contador + 1
	Fin Mientras
	
	Escribir "El factorial de ", num, " es: ", factorial
FinProceso
