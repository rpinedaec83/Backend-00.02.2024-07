Proceso Ejercicio36
	//36.Hacer un algoritmo en Pseint para calcular la serie de Fibonacci
	Definir n, i, inicio, final, siguiente Como Entero
    Escribir "Ingrese el numero de terminos de la serie de Fibonacci:"
    Leer n
    Escribir "Los ", n, " primeros terminos de la serie de Fibonacci son:"
    inicio <- 0
    final <- 1
    Para i <- 1 Hasta n Con Paso 1 Hacer
        Escribir inicio
        siguiente <- inicio + final
        inicio <- final
        final <- siguiente
    FinPara
FinProceso
