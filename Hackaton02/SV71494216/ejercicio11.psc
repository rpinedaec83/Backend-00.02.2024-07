Proceso ejercicio11
	//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
	Escribir "Ingresa el primer numero : "
	Leer  n1
	Escribir "Ingresa el segundo numero : "
	Leer  n2
	Escribir "Ingresa el tercer numero : "
	Leer  n3
	si (n1 > n2 Y n1 > n3 ) Entonces
		Escribir "El primer numero (",n1,") es mayor "
	SiNo
		si (n2 > n1 Y n2 > n3 ) Entonces
			Escribir "El segundo numero (",n2,")  es mayor "
		SiNo
			si (n3 > n1 Y n3 > n2 ) Entonces
				Escribir "El tercer numero (",n3,") es mayor "
			SiNo
				Escribir "los numeros ingresados son iguales"
			FinSi
		
		FinSi
		
	FinSi
	
	
FinProceso
