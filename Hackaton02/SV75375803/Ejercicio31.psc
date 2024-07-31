Proceso Ejercicio31
	//31. Hacer un algoritmo en PSeInt para calcular la media de los numeros pares e impares, solo se ingresaran diez numeros.
	
		Definir numero, sumaPares, sumaImpares, contadorPares, contadorImpares Como Entero
		Definir mediaPares, mediaImpares Como Real
		
		sumaPares = 0
		sumaImpares = 0
		contadorPares = 0
		contadorImpares = 0
		
		Para i = 1 Hasta 10 Con Paso 1 Hacer
			Escribir "Ingrese un numero:"
			Leer numero
			
			Si numero mod 2 = 0 Entonces
				sumaPares = sumaPares + numero
				contadorPares = contadorPares + 1
			SiNo
				sumaImpares = sumaImpares + numero
				contadorImpares = contadorImpares + 1
			FinSi
		FinPara
		
		Si contadorPares > 0 Entonces
			mediaPares = sumaPares / contadorPares
			Escribir "La media de los numeros pares es: ", mediaPares
		SiNo
			Escribir "No se ingresaron numeros pares."
		FinSi
		
		Si contadorImpares > 0 Entonces
			mediaImpares = sumaImpares / contadorImpares
			Escribir "La media de los numeros impares es: ", mediaImpares
		SiNo
			Escribir "No se ingresaron numeros impares."
		FinSi
FinProceso
