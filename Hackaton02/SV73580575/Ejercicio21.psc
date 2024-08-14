Proceso Ejercicio21
	// 21. Hacer un algoritmo en Pseint que permita calcular el factorial de un n�mero.

	Definir num, factorial Como Entero
    Escribir "Ingrese un n�mero:"
    Leer num
    factorial <- 1
    Para i <- 1 Hasta num Con Paso 1 Hacer
        factorial <- factorial * i
    FinPara
    Escribir "El factorial de ", num, " es: ", factorial
FinProceso
