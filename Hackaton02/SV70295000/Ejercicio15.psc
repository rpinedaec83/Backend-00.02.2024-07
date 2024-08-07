Proceso Ejercicio15
	//Hacer un algoritmo en Pseint que convierta cent�metros a pulgadas y libras a kilogramos.
	x = real
	A = logico
	Escribir "Ingrese la medida a comvertir:"
	Leer x
	Escribir "Ingrese el tipo de conversion, para centimetros a pulgadas ingrese P y para libras a Kilos ingrese K:"
	Leer A
	
	si A = "p" o  A ="P" Entonces
		resultado = x / 2.54
		Escribir "La conversion seria:" resultado " Pulgadas"
	sino
		si A = "K" o A ="k" Entonces
			resultado = x * 0.45
			Escribir "La conversion seria:" resultado " Kilos"
		FinSi
		
	FinSi
	
FinProceso
