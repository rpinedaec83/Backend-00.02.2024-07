Proceso Ejercicio25
	// 25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
	Escribir "Digite un numero"
	Leer num
	fact=factorial(num)
	Escribir "El factorial de ", num, " es: ", fact
FinProceso

SubProceso resultado <- factorial(n)
	Si n=0 o n=1 Entonces
		resultado <- 1
	SiNo
		resultado<-n*factorial(n-1)
	FinSi
FinSubProceso