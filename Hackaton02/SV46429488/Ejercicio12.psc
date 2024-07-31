Proceso Ejercicio12
	//12. Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.
	Escribir "Ejercicio 12, Determinar que numero es mayor."
	Dimensionar datos[2]
	Escribir "Ingresar el primer número: "
	Leer datos[1]
	Escribir "Ingresar el segundo número: "
	Leer datos[2]
		
	Si datos[1]>datos[2] Entonces
		temp <- datos[1]
		datos[1] <- datos[2]
		datos[2] <- temp
	Fin Si
	
	Escribir "Se muestra la informacion del número mayor: ", datos[2]
	
FinProceso
