Proceso Ejercicio29
	//29. Hacer un algoritmo en Pseint para calcular la suma de los primeros
	//cien números con un ciclo mientras.
	Escribir "Ejercicio 29, Determinar la suma de los 100 primeros números con CICLO MIENTRAS."
	Escribir "Por favor ingrese el número a revisar: "
	leer numeroN
	
	si numeroN<=0 o numeroN>100  Entonces
		Escribir "El valor ingresado debe ser entero positivo y menor a 101"
	SiNo
	inicio=Verdadero
	i=0
	Mientras inicio Hacer
		i=i+1
		resultado<-resultado+i
		si i==numeroN Entonces
			inicio=Falso
		FinSi
	FinMientras
	Escribir "El resultado de la suma de los primeros ", numeroN, " números es: ",resultado
	FinSi

FinProceso
