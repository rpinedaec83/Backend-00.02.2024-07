Algoritmo Ejercicio39
//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:	
// Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
	
	Definir phi, denominador, signo Como Real
    phi <- 0
    signo <- 1
    Para i <- 1 Hasta 100000 Con Paso 1 Hacer
        phi <- phi + signo * (4 / ((i * 2) - 1))
        signo <- signo * 1
    FinPara
    Escribir "El valor aproximado de pi es: ", pi
	
	
FinAlgoritmo
