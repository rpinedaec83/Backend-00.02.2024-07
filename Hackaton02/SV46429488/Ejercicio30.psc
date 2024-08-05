Proceso Ejercicio30
	//30. Hacer un algoritmo en Pseint para calcular la suma 
	//de los primeros cien n?meros con un ciclo para.
	Escribir "Ejercicio 30, Determinar la suma de los 100 primeros números con CICLO PARA."
	Escribir "Por favor ingrese el número a revisar: "
	leer numeroN
	
	resultado <- 0
	Si numeroN < 1  o numeroN > 100 Entonces
		Escribir "El valor ingresado es invalido, por favor ingresar numeros enteros positivos menores a 101"
	SiNo
		Para i <- 1 Hasta numeroN
		resultado <- resultado + i
		FinPara
		Escribir "El resultado de la suma de los primeros ", numeroN, " números es: ",resultado
	FinSi 
	
	
FinProceso



 