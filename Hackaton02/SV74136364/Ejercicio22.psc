//Hacer un algoritmo en Pseint para calcular la suma de los n primeros números
Proceso Ejercicio22
	Definir num, suma, contador Como Entero
	
	Escribir "Ingresar numero"
	Leer num
	
	suma = 0
	
	Para contador = 1 Hasta num Con Paso 1 Hacer
		suma = suma + contador
	Fin Para
	
	Escribir "La suma de los primeros ", num, " números es: ", suma
FinProceso
