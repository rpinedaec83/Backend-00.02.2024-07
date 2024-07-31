Proceso Ejercicio38
	//38. Hacer un algoritmo en Pseint que nos permita saber si un numero es un numero perfecto.
	
	Definir num, suma_divisores Como Entero
    Escribir "Ingrese un numero:"
    Leer num
    suma_divisores <- 0
    Para i <- 1 Hasta num / 2 Con Paso 1 Hacer
        Si num MOD i = 0 Entonces
            suma_divisores <- suma_divisores + i
        FinSi
    FinPara
    Si suma_divisores = num Entonces
        Escribir "El numero es perfecto."
    Sino
        Escribir "El numero no es perfecto."
    FinSi
	
FinProceso
