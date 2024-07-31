//Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
Proceso Ejercicio14
	Definir num, contador Como Entero
	Definir esPrimo Como Logico
	Escribir "Ingrese un numero positivo del 1 al 10"
	Leer num
	
	Si num < 1 O num > 10 Entonces
		Escribir "Número fuera de rango"
	SiNo
		esPrimo = Verdadero
		
		Para contador = 2 Hasta num - 1 Con Paso 1 Hacer
			Si num MOD contador == 0 Entonces
				esPrimo = Falso
			Fin Si
		Fin Para
		
		Si esPrimo Entonces
			Escribir num, " es un número primo"
		Sino
			Escribir num, " no es un número primo"
		Fin Si
	Fin Si
FinProceso
