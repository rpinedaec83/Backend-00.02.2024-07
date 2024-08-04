Algoritmo DescuentoZapatos
    Definir cantidad, precio, descuento Como Entero
    precio <- 80
    Escribir "Ingrese la cantidad de zapatos:"
    Leer cantidad
    Si cantidad > 30 Entonces
        descuento <- 40
		Si cantidad > 20 Entonces
        descuento <- 20
		Si cantidad > 10 Entonces
				descuento <- 10
			FinSi
		FinSi
		
    Sino
        descuento <- 0
    FinSi
    Escribir "El total a pagar es: ", cantidad * precio * (100 - descuento) / 100, " con un descuento del ", descuento, "%"
FinAlgoritmo