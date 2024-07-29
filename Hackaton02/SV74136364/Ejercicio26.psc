//Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas
Proceso Ejercicio26
	
	Definir dividendo, divisor, cociente, resto Como Entero
	
	Escribir"Ingresa primer numero"
	Leer dividendo
	Escribir"Ingresa segundo numero"
	Leer divisor
	
	cociente = 0
	resto = dividendo
	
	Mientras resto >= divisor Hacer
		resto = resto - divisor
		cociente = cociente + 1
	Fin Mientras
	
	Escribir "Cociente: ", cociente
	Escribir "Resto: ", resto
	
FinProceso
