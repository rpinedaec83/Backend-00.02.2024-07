Proceso Ejercicio04
	//4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor
	Dimension datos[3]
	
	Escribir "Ejercicio04: Por favor, ingrese el primer numero entero a Leer"
	Leer datos[1]
	Escribir "Por favor, ingrese el segundo numero entero a Leer"
	Leer datos[2]
	Escribir "Por favor, ingrese el tercer numero entero a Leer"
	Leer datos[3]	 
	
	Si datos[1]>datos[2] Entonces
		temp <- datos[1]
		datos[1] <- datos[2]
		datos[2] <- temp
	Fin Si
	
	Si datos[1]>datos[3] Entonces
		temp <- datos[1]
		datos[1] <- datos[3]
		datos[3] <- temp
	Fin Si
	
	Si datos[2]>datos[3] Entonces
		temp <- datos[2]
		datos[2] <- datos[3]
		datos[3] <- temp
	Fin Si
	
	
    Escribir "Se muestra la informacion en orden de menor a mayor:"
    Escribir "Dato numero 01: ", datos[1]
	Escribir "Dato numero 02: ", datos[2]
	Escribir "Dato numero 03: ", datos[3]
FinProceso
