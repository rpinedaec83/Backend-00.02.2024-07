Proceso Ejercicio22
	//22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.
	
	Escribir "Ejercicio 22, calcular la suma de los N primeros números."
	Escribir "Por favor ingrese el número a revisar: "
	leer numeroN
		
	resultado <- 0
	Si numeroN <= 0 Entonces
		Escribir "El valor ingresado es invalido, por favor ingresar numeros enteros positivos"
	SiNo
		Para i <- 1 Hasta numeroN
			resultado <- resultado + i
		FinPara
		Escribir "El resultado de la suma de los primeros ", numeroN, " números es: ",resultado
	FinSi
	

FinProceso
