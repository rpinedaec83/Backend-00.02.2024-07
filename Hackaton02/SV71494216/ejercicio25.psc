Proceso ejercicio25
	//Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
	Definir num, resultado Como Entero
    Escribir "Ingrese un número:"
    Leer num
    factorial <- 1
    Mientras num > 1 Hacer
        factorial <- factorial * num
        num <- num - 1
    FinMientras
    Escribir "El factorial es: ", factorial
	
FinProceso
