Algoritmo Pi_Gregory_Leibniz
    Definir pi, denominador, signo Como Real
    pi <- 0
    signo <- 1
    Para i <- 1 Hasta 100000 Con Paso 1 Hacer
        pi <- pi + signo * (4 / ((i * 2) - 1))
        signo <- signo * -1
    FinPara
    Escribir "El valor aproximado de pi es: ", pi
FinAlgoritmo