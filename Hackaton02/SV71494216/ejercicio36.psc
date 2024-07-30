Proceso ejercicio36
	//Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
	
    Escribir "Ingrese la cantidad de números -de la serie de Fibonacci:"
    Leer n
    Escribir "Los ", n, " primeros términos de la serie de Fibonacci son:"
    n1 <- 0
    n2 <- 1
    Para i <- 1 Hasta n Con Paso 1 Hacer
        Escribir n1
        siguiente <- n1 + n2
        n1 <- n2
        n2 <- siguiente
    FinPara
	
FinProceso
