Proceso ejercicio13
	//Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
	Definir letra Como Caracter
    Escribir "Ingrese una letra: "
    Leer letra
    // esta asignacion es para reconocer minuscula y mayuscula 
    letra = Mayusculas(letra)
	
    Segun letra Hacer
        "A":
            Escribir "La letra ",letra," es una vocal."
        "E":
            Escribir "La letra ",letra," es una vocal."
        "I":
            Escribir "La letra ",letra," es una vocal."
        "O":
            Escribir "La letra ",letra," es una vocal."
        "U":
            Escribir "La letra ",letra," es una vocal."
        De Otro Modo:
            Escribir "La letra ",letra," no es una vocal."
    FinSegun
	
FinProceso
