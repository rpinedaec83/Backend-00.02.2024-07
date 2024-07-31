Proceso Ejercicio7
    // Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresia
    // dependiendo de su tipo, solo existen tres tipos de membresia, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
    // Tipo A: 10%, Tipo B: 15%, Tipo C: 20%
    
    // Definir las variables
    Definir Tipo Como Caracter
    Definir Descuento Como Caracter
    
    // Solicitar el tipo de membresia al usuario
    Escribir "Ingrese el tipo de membresia (A, B, C):"
    Leer Tipo
    
    // Determinar el descuento segun el tipo de membresia
    Si Tipo = "A" Entonces
        Descuento <- "10%"
    Sino Si Tipo = "B" Entonces
			Descuento <- "15%"
		Sino Si Tipo = "C" Entonces
				Descuento <- "20%"
			Sino
				Descuento <- "desconocido"
			FinSi
		FinSi
	FinSi
			// Mostrar el resultado
			Escribir "El cliente tiene la membresia ", Tipo, ", por lo que su descuento es " Descuento
FinProceso