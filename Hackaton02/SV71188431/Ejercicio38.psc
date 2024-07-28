//38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
Proceso Ejercicio38
	Definir numero1, sumadivisores Como Entero
    Escribir "Ingresar un numero:"
    Leer numero1
    sumadivisores <- 0
    Para x <- 1 Hasta numero1 / 2 Con Paso 1 Hacer
        Si numero1 mod x = 0 Entonces
            sumadivisores <- sumadivisores + x
        FinSi
    FinPara
    Si sumadivisores = numero1 Entonces
        Escribir "El numero es perfecto."
    Sino
        Escribir "El numero no es perfecto."
    FinSi
FinProceso