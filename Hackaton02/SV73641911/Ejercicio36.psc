Proceso Ejercicio36
	// 36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.

	Definir n, primero, segundo_num, siguiente Como Entero
    Escribir "Ingrese el número de términos de la serie de Fibonacci:"
    Leer n
    Escribir "Los ", n, " primeros términos de la serie de Fibonacci son:"
    primero <- 0
    segundo_num <- 1
    Para i <- 1 Hasta n Con Paso 1 Hacer
        Escribir primero
        siguiente <- primero + segundo_num
        primero <- segundo_num
        segundo_num <- siguiente
    FinPara
FinProceso
