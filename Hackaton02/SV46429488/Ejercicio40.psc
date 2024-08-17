Proceso Ejercicio40
	//40. Hacer un algoritmo en Pseint que cumpla con la aproximación del 
	//número pi con la serie de Nilakantha. La formula que se debe aplicar es:
	//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
	Escribir "Ejercicio 40, Determinar la aproximacion del numero pi con la serie de Nilakantha."
	Escribir "Por favor ingrese el número de terminos a sumar"
	Leer numTer
	
    numPi <- 3 
	
    Para i <- 1 Hasta numTer Con Paso 1
        denominador1 <- 2 * i
        denominador2 <- denominador1 + 1
        denominador3 <- denominador2 + 1
        termino <- 4 / (denominador1 * denominador2 * denominador3)
        Si (i Mod 2) = 1 Entonces
            numPi <- numPi + termino
        Sino
            numPi <- numPi - termino
        FinSi
    FinPara
	
    Escribir "Se determina la aproximación de pi es: ", numPi
	
	
FinProceso
