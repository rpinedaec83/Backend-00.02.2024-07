Proceso Ejercicio31
	// 31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
	sumaPar=0
	sumaImpar=0
	contadorPar=0
	contadorImpar=0
	
	Para i<-1 Hasta 10 Hacer
		Escribir "Ingrese el numero ", i
		Leer num
		Si num%2==0 Entonces
			sumaPar=sumaPar+num
			contadorPar=contadorPar+1
		SiNo
			sumaImpar=sumaImpar+num
			contadorImpar=contadorImpar+1
		FinSi
	FinPara
	mediaPar=sumaPar/contadorPar
	mediaImpar=sumaImpar/contadorImpar
	Escribir "La media de los numeros pares ingresados es: ", mediaPar
	Escribir "La media de los numeros impares ingresados es: ", mediaImpar
FinProceso
