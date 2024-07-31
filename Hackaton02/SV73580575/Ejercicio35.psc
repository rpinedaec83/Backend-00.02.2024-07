Proceso Ejercicio35
	// 35. Hacer un algoritmo en Pseint que nos permita saber cu�l es el n�mero mayor y menor, se debe ingresar s�lo veinte n�meros.

	Definir num, mayor_num, menor_num Como Entero
    Escribir "Ingrese veinte n�meros:"
    Leer num
    mayor_num <- num
    menor_num <- num
    Para i <- 1 Hasta 19 Con Paso 1 Hacer
        Leer num
        Si num > mayor_num Entonces 
			mayor_num <- num
		FinSi
        Si num < menor_num Entonces 
			menor_num <- num
		FinSi
    FinPara
    Escribir "El mayor n�mero es: ", mayor_num
    Escribir "El menor n�mero es: ", menor_num
FinProceso
