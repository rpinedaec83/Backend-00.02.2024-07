Proceso ejercicio_24
	Escribir "Hallando la suma de los primeros 1000 números pares"
	suma = 2
	impar = 3
	par = 2
	
	suma = 0
	mulImpar = 2
	mulPar = 0
	
	paso = 0
	limite = 1000
	
	Repetir
		si mulImpar <= limite Entonces
			suma = suma + mulImpar
		FinSi
		
		si mulPar <= limite Entonces
			suma = suma + mulPar
		FinSi
		
		
		paso = paso + 2
		
		mulPar = paso * 2
		mulImpar = (paso + 1) * 2		
	Hasta Que mulPar > limite y mulImpar > limite
	
	Escribir "La suma es: ", suma
	
FinProceso
