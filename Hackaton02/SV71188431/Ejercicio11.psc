//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso Ejercicio11
	Escribir "Ingresar 3 numeros"
	Definir numero1, numero2, numero3 Como Real
	Leer numero1, numero2, numero3
	Si numero1 > numero2 y numero1 > numero3 Entonces
		Escribir "El numero mayor es:" numero1
	SiNo
		Si numero1 < numero2 y numero2 > numero3 Entonces
			Escribir "El numero mayor es:" numero2
		SiNo
			Escribir "El numero mayor es:" numero3
			
			
		FinSi
	FinSi	
FinProceso
