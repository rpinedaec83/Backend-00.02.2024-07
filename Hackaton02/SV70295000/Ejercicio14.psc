Algoritmo Ejercicio14
	Definir num, a, contador Como Entero
    Escribir "Ingrese un n�mero del 1 al 9:"
    Leer num
    cont <- 0
    Para a <- 1 Hasta num Con Paso 1 Hacer
        Si num MOD a = 0 Entonces
            cont <- cont + 1
        FinSi
    FinPara
    Si cont = 2 Entonces
        Escribir "El n�mero es primo."
    Sino
        Escribir "El n�mero no es primo."
    FinSi
FinAlgoritmo

