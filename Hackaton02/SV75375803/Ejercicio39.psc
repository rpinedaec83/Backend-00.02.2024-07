Proceso Ejercicio39
	//39. Hacer un algoritmo en Pseint que cumpla con la aproximacion del numero pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
	
    //Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	
    Definir aproximacion_pi, denominador, signo Como Real
    aproximacion_pi <- 0
    signo <- 1
    
    Para i <- 1 Hasta 100000 Con Paso 1 Hacer
        denominador <- (i * 2) - 1
        aproximacion_pi <- aproximacion_pi + signo * (4 / denominador)
        signo <- signo * (-1)
    FinPara
    
    Escribir "El valor aproximado de pi es: ", aproximacion_pi
	
FinProceso
