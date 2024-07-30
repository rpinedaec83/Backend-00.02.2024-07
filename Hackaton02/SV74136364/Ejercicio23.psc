//Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Proceso Ejercicio23
	Definir num, suma, contador Como Entero
	
	Escribir "Ingresa numero"
	Leer num
	
	suma = 0
	
	Para contador = 1 Hasta num Con Paso 2 Hacer
		suma = suma + contador
	Fin Para
	
	Escribir "La suma de los números impares menores o iguales a ", num, " es: ", suma
FinProceso
