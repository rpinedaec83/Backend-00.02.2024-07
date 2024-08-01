Proceso Ejercicio23
	//23. Hacer un algoritmo en Pseint para calcular la suma de los n?meros impares menores o iguales a n.	
	Escribir "Ejercicio 23, calcular la suma de los números impares."
	Escribir "Por favor ingrese el número a revisar: "
	leer numeroN
	resultado<-0
	
	si numeroN<=0 Entonces
		Escribir "El valor ingresado es invalido, por favor ingresar numeros enteros positivos"
	SiNo
		Para i <- 1 Hasta numeroN
			si i mod 2<>0 Entonces
				resultado <- resultado + i
			FinSi
		FinPara
		Escribir "El resultado de la suma de los números impares menores a ", numeroN, " es: ",resultado
	FinSi
FinProceso
