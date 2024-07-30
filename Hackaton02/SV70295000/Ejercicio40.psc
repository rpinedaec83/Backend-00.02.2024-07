Algoritmo Ejercicio40
//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
	
	Definir aproximacion_pi, signo Como Real
    Definir i Como Entero
    aproximacion_pi <- 3
    signo <- 1
	
    Para i <- 2 Hasta 100000 Con Paso 2 Hacer
        aproximacion_pi <- aproximacion_pi + signo * (4 / (i * (i + 1) * (i + 2)))
        signo <- signo * (-1)
    FinPara
	
    Escribir "El valor aproximado de pi es: ", aproximacion_pi
	
FinAlgoritmo
