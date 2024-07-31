Proceso Ejercicio14
	// 14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
	Escribir "Digite un numero del 1 al 10: "
	Leer num
	contador =0
	Para i<-1 hasta num Hacer
		si num mod i = 0
			contador = contador + 1
		FinSi
	FinPara
	
	Si contador = 2 Entonces
		Escribir "El numero SI es primo"
	SiNo
		Escribir "El numero NO es primo"
	FinSi
FinProceso
