Proceso Ejercicio21
	// 21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.
	Escribir "Digite un numero"
	Leer num
	factorial=1
	Si num	<> 0 Entonces
		Para i<-1 Hasta num Hacer
			factorial=factorial*i
		FinPara
	FinSi
	Escribir "El factorial de ", num, " es: ", factorial
FinProceso
