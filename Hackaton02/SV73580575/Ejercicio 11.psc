Proceso Ejercicio11
	//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
	Escribir "Ingrese 3 numeros a comparar"
	Definir a, b, c Como Real
	Leer a, b, c
	
	si a > b y a > c Entonces
		Escribir "El numero mayor es:" a
	SiNo
		si a < b y b > c Entonces
			Escribir "El numero mayor es:" b
		SiNo
			Escribir "El numero mayor es:" c
		FinSi
	FinSi
FinProceso
