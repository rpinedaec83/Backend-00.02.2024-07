Proceso Ejercicio11
	//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
		Definir n1, n2, n3 Como Real
		Escribir "Ingrese primer número:"
		Leer n1
		Escribir "Ingrese segundo número:"
		Leer n2
		Escribir "Ingrese tercer número:"
		Leer n3
		Si n1 >= n2 Y n1 >= n3 Entonces
			Escribir "El número mayor es: ", n1
		SiNo
			Si n2 >= n1 Y n2 >= n3 Entonces
				Escribir "El número mayor es: ", n2
			SiNo
				Escribir "El número mayor es: ", n3
			Fin Si
		Fin Si
FinProceso
