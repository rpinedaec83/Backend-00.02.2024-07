Algoritmo Ejercicio36
//Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.	
	Definir n, i, primero, segundo, siguiente Como Entero
    Escribir "Ingrese el número de términos de la serie de Fibonacci:"
    Leer n
    Escribir sin saltar "Los ", n, " primeros términos de la serie de Fibonacci son:" 
    primero <- 0
    segundo <- 1
    Para i <- 1 Hasta n Con Paso 1 Hacer
        Escribir Sin Saltar primero "," 
        siguiente <- primero + segundo
        primero <- segundo
        segundo <- siguiente
    FinPara
	
FinAlgoritmo
