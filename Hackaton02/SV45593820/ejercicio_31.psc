Proceso ejercicio_31
	Escribir "Hallando la suma de los primeros 1000 números pares"
	suma = 2
	impar = 3
	par = 2
	
	sumaPar = 0
	sumaImpar = 0
	mulImpar = 2
	mulPar = 0
	contadorPar = 0
	contadorImpar = 0
	
	paso = 0
	limite = 12
	
	Repetir
		si mulImpar <= limite Entonces
			sumaImpar = sumaImpar + mulImpar
			contadorImpar = contadorImpar +1
		FinSi
		
		si mulPar <= limite Entonces
			sumaPar = sumaPar + mulPar
			contadorPar = contadorPar + 1
		FinSi
		
		paso = paso + 2
		
		mulPar = paso * 2
		mulImpar = (paso + 1) * 2		
	Hasta Que paso >= limite
	
	mediaImpar = sumaImpar / contadorImpar
	mediaPar = sumaPar / contadorPar
	Escribir "suma de impares: ", sumaImpar, ", la media es: ", mediaImpar
	Escribir "suma de pares: ", sumaPar, ", la media es: ", mediaPar
	
FinProceso
