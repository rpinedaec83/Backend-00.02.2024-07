Proceso Ejercicio23
	// 23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
	Escribir "Digite un numero"
	Leer num
	suma=0
	Para i<-1 Hasta num Hacer
		Si i%2<>0 Entonces
			suma=suma+i	
		FinSi
	FinPara
	Escribir "la suma de los números impares menores o iguales a ", num, " es: ", suma
FinProceso
