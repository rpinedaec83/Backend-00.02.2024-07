Proceso Ejercicio35
	//  35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
    Definir n, mayor, menor Como Entero
    Escribir "Ingrese el número 1: "
    Leer n
    mayor = n
    menor = n
    Para i <- 2 Hasta 20 Hacer
        Escribir "Ingrese el número ", i, ": "
        Leer n
        Si n > mayor Entonces
            mayor = n
        FinSi
        Si numero < menor Entonces
            menor = n
        FinSi
    FinPara
    Escribir "El número mayor es: ", mayor
    Escribir "El número menor es: ", menor
FinProceso
