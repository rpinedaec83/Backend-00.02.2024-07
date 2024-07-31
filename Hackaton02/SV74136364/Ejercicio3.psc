//Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
Proceso Ejercicio3
	Definir num, digito Como Entero
	Escribir "Ingresar un numero:"
	Leer num
	digito = num mod 10
	Si digito ==4  Entonces
		Escribir "el ultimo digito es 4"
	SiNo
		Escribir "El ultimo digito no es 4"
	FinSi
FinProceso
