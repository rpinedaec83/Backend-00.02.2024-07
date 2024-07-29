//13. Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
Proceso Ejercicio13
	Definir letra Como Carácter
    Escribir "Ingrese una letra:"
    Leer letra
	letra <- minusculas (letra)
    Segun letra Hacer
        "a", "e", "i", "o", "u": Escribir "Es una vocal."
        De Otro modo: Escribir "No es una vocal."
    FinSegun
	
FinProceso
