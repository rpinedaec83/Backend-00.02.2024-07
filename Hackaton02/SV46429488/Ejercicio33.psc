Proceso Ejercicio33
	//33. Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
	Escribir "Ejercicio 33, Programa que permita al usuario continuar."
	continuar <- ""
    
    Repetir
        Escribir "Confirmar, ¿Sí desea continuar con el programa? (S/N): "
        Leer continuar
        
        Segun continuar Hacer
            "S" o "s":
                Escribir "De acuerdo, continua en ejecucion el programa..."
                // Aquí iría el código para continuar con el programa.
            "N" o "n":
                Escribir "De acuerdo, programa finalizado." 
            De Otro Modo:
                Escribir "Opción no válida. Por favor ingrese S para continuar o N para finalizar."
        FinSegun
    Hasta Que continuar = "S" O continuar = "N" o continuar = "s" o continuar = "n"
	 
	
FinProceso
