Proceso ejercicio40
	
//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie 
//de Nilakantha. La formula que se debe aplicar es:
//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...

  	n <- 1000   
    suma <- 3
    denominador1 <- 2
    denominador2 <- 3
	
    Para i <- 1 Hasta n Hacer
        termino <- 4 / (denominador1 * (denominador1 + 1) * (denominador1 + 2)) - 4 / ((denominador2 + 2) * (denominador2 + 3) * (denominador2 + 4))
        suma <- suma + termino
        denominador1 <- denominador1 + 2
        denominador2 <- denominador2 + 2
    FinPara
	
    Escribir "La aproximación de pi con ", n, " términos es: ", suma

FinProceso
