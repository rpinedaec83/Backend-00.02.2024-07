Proceso Ejercicio39
//39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi 
//con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
	//    Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	Escribir "Ejercicio 39, Determinar la aproximacion del numero pi con la serie de Gregory-Leibniz."
	Escribir "Por favor ingrese el número de terminos a sumar"
	Leer numTer
	 	
    numPi <- 0
	
    Para i <- 0 Hasta numTer-1 Con Paso 1
        denominador <- 2 * i + 1
        termino <- 4 / denominador
        Si (i Mod 2) = 0 Entonces
            numPi <- numPi + termino
        Sino
            numPi <- numPi - termino
        FinSi
    FinPara
	
    Escribir "Se determina la aproximación de pi es: ", numPi
	
FinProceso
