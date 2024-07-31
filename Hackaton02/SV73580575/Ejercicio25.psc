SubProceso facto <- factorial ( n )
	Si n <= 1 Entonces
		facto = 1
	SiNo
		facto = n * factorial(n - 1)
	FinSi
Fin SubProceso

Proceso Ejercicio25
	// 25. Hacer un algoritmo en Pseint para calcular el factorial de un n�mero de una forma distinta.

	Definir num Como Entero
	Escribir "Ingrese un n�mero"
	Leer num
	resultado = factorial(num)
	Escribir "El factorial de ", num, " es: ", resultado
FinProceso
