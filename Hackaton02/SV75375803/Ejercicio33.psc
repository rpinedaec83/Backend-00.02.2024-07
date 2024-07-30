Proceso Ejercicio33
		//33. Hacer un algoritmo en PSeInt que permita al usuario continuar con el programa.
		Definir continuar Como Caracter
		Definir dato Como Entero
		
		Repetir
			Escribir "Ingrese un numero:"
			Leer dato
			Escribir "El numero ingresado es: ", dato
			
			Escribir "¿Desea continuar? (SI/NO)"
			Leer continuar
		Hasta Que continuar = "NO" O continuar = "no"
FinProceso
