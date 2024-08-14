Algoritmo Ejercicio35
//Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
	
	Definir num, num_mayor, num_menor Como Entero
    Escribir "Ingrese veinte números:"
    Leer num
    num_mayor <- numero
    num_menor <- numero
    Para i <- 1 Hasta 19 Con Paso 1 Hacer
        Leer num
        Si num > num_mayor Entonces
			num_mayor <- num
		FinSi
	    Si num < num_menor Entonces 
		      num_menor <- num
	    FinSi
    FinPara
    Escribir "El mayor número es: ", num_mayor
    Escribir "El menor número es: ", num_menor
	
FinAlgoritmo
