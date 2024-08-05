Proceso Ejercicio28
	//28. Hacer un algoritmo en Pseint para calcular la 
	//suma de los primeros cien números con un ciclo repetir.
	Escribir "Ejercicio 28, Determinar la suma de los 100 primeros números con CICLO REPETIR."
	Escribir "Por favor ingrese el número a revisar: "
	leer numeroN
		
	si numeroN<=0 o numeroN>100  Entonces
		Escribir "El valor ingresado debe ser entero positivo y menor a 101"
	SiNo
		inicio=falso
		i=0
		Repetir
			i=i+1
			resultado<-resultado+i
			si i==numeroN Entonces
				inicio=Verdadero
			FinSi
		Hasta Que inicio
		Escribir "El resultado de la suma de los primeros ", numeroN, " números es: ",resultado
    FinSi

	
FinProceso
