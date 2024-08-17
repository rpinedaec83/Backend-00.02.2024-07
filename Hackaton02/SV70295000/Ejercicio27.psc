Algoritmo Ejercicio27
//Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
	
	Definir suma, cantidad_numeros, numero Como Real
    suma <- 0
    cantidad_numeros <- 0
    Escribir "Ingrese números positivos. Ingrese un número negativo para terminar."
    Leer numero
	
    Mientras numero >= 0 Hacer
        suma <- suma + numero
        cantidad_numeros <- cantidad_numeros + 1
        Escribir "Ingrese otro número:"
        Leer numero
    FinMientras
	
    Si cantidad_numeros > 0 Entonces
        Escribir "La media de los números es: ", suma / cantidad_numeros
    Sino
        Escribir "No se ingresaron números positivos."
    FinSi
	
FinAlgoritmo
