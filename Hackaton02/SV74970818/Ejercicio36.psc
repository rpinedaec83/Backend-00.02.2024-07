Proceso Ejercicio36
	// 36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
	Escribir "Digite el termino n de la serie Fibonacci: "
	Leer num
	suma=0
	Para i<-1 Hasta num Hacer
		suma=suma+fibonacci(i)	
	FinPara
	Escribir "El termino ", num," de Fibonacci es: ", fibonacci(num)
	Escribir "La suma de los ", num, " primeros terminos Fibonacci es: ", suma
FinProceso

SubProceso resultado <- fibonacci(n)
	Si n=0 Entonces
		resultado <- 0
	SiNo
		Si n=1 o n=2 Entonces
			resultado <- 1
		SiNo
			resultado<-fibonacci(n-1)+fibonacci(n-2)
		FinSi
	FinSi
	
FinSubProceso
