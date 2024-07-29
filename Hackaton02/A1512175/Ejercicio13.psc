Proceso Ejercicio13
	// 13. Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
	Definir letra Como Caracter
	Escribir "Ingrese una letra:"
	Leer letra
	letra = Minusculas(letra)
	Segun letra Hacer
		Caso "a":
		Caso "e":
		Caso "i":
		Caso "o":
		Caso "u":
			Escribir letra, " es una vocal."
		De Otro Modo:
			Escribir letra, " no es una vocal."
	FinSegun
FinProceso
