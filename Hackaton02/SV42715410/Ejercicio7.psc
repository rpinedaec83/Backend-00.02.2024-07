Algoritmo DescuentoHeladeria
    Definir precio, descuento Como Real
    Definir membresia Como Car�cter
    precio <- 100
    Escribir "Ingrese el tipo de membres�a (A, B o C):"
    Leer membresia
    Segun membresia Hacer
        "A": descuento <- 10
        "B": descuento <- 15
        "C": descuento <- 20
        Otro: Escribir "Tipo de membres�a no v�lido."
    FinSegun
    Escribir "El total a pagar es: ", precio * (100 - descuento) / 100, " con un descuento del ", descuento, "%"
FinAlgoritmo