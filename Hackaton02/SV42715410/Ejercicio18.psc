Algoritmo VentaCDs
    Definir cantidad, precio, ganancia_vendedor Como Entero
    Escribir "Ingrese la cantidad de CDs a vender:"
    Leer cantidad
    Si cantidad <= 9 Entonces
        precio <- cantidad * 10
		SinoSi cantidad <= 99 Entonces
        precio <- cantidad * 8
		SinoSi cantidad <= 499 Entonces
        precio <- cantidad * 7
    Sino
        precio <- cantidad * 6
    FinSi
    ganancia_vendedor <- precio * 0.0825
    Escribir "El precio total para el cliente es: ", precio
    Escribir "La ganancia para el vendedor es: ", ganancia_vendedor
FinAlgoritmo