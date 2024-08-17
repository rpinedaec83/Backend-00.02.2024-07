Proceso Ejercicio39
	// 39. Hacer un algoritmo en Pseint que cumpla con la aproximaci�n del n�mero pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
	// Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ... 
	
	Definir pi_num, denominador, signo Como Real
    pi_num <- 0
    signo <- 1
    Para i <- 1 Hasta 100000 Con Paso 1 Hacer
        pi_num <- pi_num + signo * (4 / ((i * 2) - 1))
        signo <- signo * (-1)
    FinPara
    Escribir "El valor aproximado de pi es: ", pi_num
FinProceso
