Proceso Ejercicio4
	//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
	Definir num1, num2, num3, x como entero
	Escribir "Ingrese el primer numero"
	Leer num1
	Escribir "Ingrese el segundo numero"
	Leer num2
	Escribir "Ingrese el tercer numero"
	Leer num3
	
	Si num1 > num2 entonces 
		x <- num1
		num1 <- num2
		num2 <- x
	FinSi
	Si num2 > num3 entonces 
		x <- num2
		num2 <- num3
		num3 <- x
	FinSi
	Si num1 > num2 entonces 
		x <- num1
		num1 <- num2
		num2 <- x
	FinSi
	
	Escribir "Los numeros ordenados de menor a mayor son: "
	Escribir num1
	Escribir num2
	Escribir num3
FinProceso
