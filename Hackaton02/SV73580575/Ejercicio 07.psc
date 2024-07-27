//7
Algoritmo DescuentoHelados
    Definir tipo_membresia Como Caracter
    Definir precio_original, precio_final, descuento Como Real
	
    // Variavkes
    Escribir "Ingrese el tipo de membresía (A, B, C): "
    Leer tipo_membresia
    Escribir "Ingrese el precio original del helado: "
    Leer precio_original
	
    // Según el tipo de membresía
    Segun tipo_membresia Hacer
        Caso "A":
            descuento = 0.10
        Caso "B":
            descuento = 0.15
        Caso "C":
            descuento = 0.20
        De Otro Modo:
            Escribir "Tipo de membresía no válido. No se aplicará descuento."
            descuento = 0
    Fin Segun
	
    // Calcular el precio final 
    precio_final = precio_original - (precio_original * descuento)
	
    // Mostrar el precio final
    Escribir "El precio final con descuento es: ", precio_final
FinAlgoritmo
