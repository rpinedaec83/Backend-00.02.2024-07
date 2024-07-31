Proceso Ejercicio11
	// 11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
	Escribir "Digite el primer numero"
	Leer num1
	Escribir "Digite el segundo numero"
	Leer num2
	Escribir "Digite el tercer numero"
	Leer num3
	mayor=0
	Si num1 > num2 y num1 > num3 Entonces
		mayor = num1
	FinSi
	Si  num2 > num1 y num2 > num3 Entonces
		mayor = num2
	FinSi
	Si  num3 > num1 y num3 > num2 Entonces
		mayor = num3
	FinSi
	Escribir "El numero mayor es: ",mayor
FinProceso
