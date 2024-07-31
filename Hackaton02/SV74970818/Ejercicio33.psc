Proceso Ejercicio33
	// 33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
	Repetir
		Escribir "Elija las siguientes opciones: "
		Escribir " 1. Continuar con el programa"
		Escribir " 0. Terminar el programa"
		Leer op
		Segun op Hacer
			1:
				Escribir " Felicidades, ha decidido continuar con el programa"
			0:
				Escribir " Hasta luego"
			De Otro Modo:
				Escribir "Opcion invalida"
		FinSegun
	Hasta Que op = 0 
FinProceso
