Proceso Ejercicio35
	//35. Hacer un algoritmo en Pseint que nos permita saber cuál 
	//es el número mayor y menor, se debe ingresar sólo veinte números.
	Escribir "Ejercicio 35, Determinar que número es el mayor y menor."
	Escribir "Por favor ingrese 20 números a evaluar "
	Leer datoNum
    numMayor <- datoNum
    numMenor <- datoNum
	
    Para i <- 2 Hasta 20
        Escribir "Por favor ingrese el siguiente número ", i, ":"
        Leer datoNum
		
        Si datoNum > numMayor Entonces
            numMayor <- datoNum
        FinSi
		Si datoNum < numMenor Entonces
            numMenor <- datoNum
        FinSi
    FinPara
	
    Escribir "El valor determinado como número mayor es ", numMayor
    Escribir "El valor determinado como número menor es ", numMenor
	
	
FinProceso
