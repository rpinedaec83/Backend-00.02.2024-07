Proceso Ejercicio35
	// 35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.

	Definir num, mayor_num, menor_num Como Entero
    Escribir "Ingrese veinte números:"
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
    Escribir "El mayor número es: ", mayor_num
    Escribir "El menor número es: ", menor_num
FinProceso
