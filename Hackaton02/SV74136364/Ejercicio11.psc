//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso Ejercicio11
	Definir num1, num2, num3, mayor Como Real
	Escribir  "Ingrese primer numero"
	Leer num1
	Escribir  "Ingrese segundo numero"
	Leer num2
	Escribir  "Ingrese tercer numero"
	Leer num3
	
	Si num1 > num2 Y num1 > num3 Entonces
		mayor = num1
	Sino
		Si num2 > num1 Y num2 > num3 Entonces
			mayor = num2
		Sino
			mayor = num3
		Fin Si
	Fin Si
	
	Escribir "El numero mayor es: ", mayor
FinProceso
