Proceso Ejercicio26
	//	26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
	Escribir "Digite el numero dividendo"
	Leer num1
	Escribir "Digite el numero divisor"
	Leer num2
	cociente=0
	resto=num1
	Para i<-1 hasta num1 Con Paso num2 Hacer
		Si resto >= num2 Entonces
			resto=resto-num2
			cociente=cociente+1	
		FinSi
	FinPara
	Escribir "El cociente es: ", cociente
	Escribir "El resto es: ", resto
FinProceso
