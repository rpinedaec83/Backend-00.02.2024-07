Proceso Ejercicio15
	// 15. Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
		Definir menu Como Entero
		Definir n, resultado Como Real
		Escribir "Seleccione la conversión que desea realizar:"
		Escribir "1. Centímetros a Pulgadas"
		Escribir "2. Libras a Kilogramos"
		Leer menu
		Segun menu Hacer
				Caso 1:
				Escribir "Ingrese el valor en centímetros:"
				Leer n
				resultado = n / 2.54
				Escribir n, " centímetros son ", resultado, " pulgadas."
				Caso 2:
				Escribir "Ingrese el valor en libras:"
				Leer n
				resultado = n * 0.453592
				Escribir n, " libras son ", resultado, " kilogramos."
			De Otro Modo:				
					Escribir "Opción no válida. Por favor, seleccione 1 o 2."
			FinSegun
FinProceso
