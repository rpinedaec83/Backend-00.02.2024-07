Proceso ejercicio14
	//Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo
	Definir n1, contador Como Entero
	Escribir "Ingrese un numero positivo del 1 al 10 : "
	Leer n1
	contador = 0
	
	Para i <- 1 Hasta n1 Hacer
		si n1 mod 1 = 0 Entonces
			contador = contador +1
		FinSi
	Fin Para
	si contador = 2 Entonces
		Escribir " El numero ingresado es primo"
	SiNo
		Escribir "El numero ingresado no es primo"
	FinSi
FinProceso
