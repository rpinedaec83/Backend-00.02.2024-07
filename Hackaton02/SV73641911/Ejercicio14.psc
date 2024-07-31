Proceso Ejercicio14
	// 14. Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
	
	Definir num, contador Como Entero
    Escribir "Ingrese un número del 1 al 9:"
    Leer num
    contador <- 0
    Para i <- 1 Hasta num Con Paso 1 Hacer
        Si num MOD i = 0 Entonces
            contador <- contador + 1
        FinSi
    FinPara
    Si contador = 2 Entonces
        Escribir "El número es primo."
    Sino
        Escribir "El número no es primo."
    FinSi
FinProceso
