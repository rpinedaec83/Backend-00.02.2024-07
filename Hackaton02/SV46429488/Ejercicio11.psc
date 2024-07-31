Proceso Ejercicio11
	//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
	Escribir "Ejercicio 11, Determinar que numero es mayor."
	Dimensionar datos[3]
	Escribir "Ingresar el primer número: "
	Leer datos[1]
	Escribir "Ingresar el segundo número: "
	Leer datos[2]
	Escribir "Ingresar el tercer número: "
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
	
	Escribir "Se muestra la informacion del número mayor: ", datos[3]
	
FinProceso
