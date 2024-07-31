Proceso ejercicio_13
	Escribir "Ingrese una letra"
	Leer letra
	frase = "AEIOU"
	resultado = ""
	
	si Longitud(letra) == 1 Entonces
		mayus = Mayusculas(letra)
		
		
		Para ini<-1 Hasta 5 Con Paso 1 Hacer
			extraer = Subcadena(frase, ini, ini)
			si extraer == mayus Entonces
				resultado = Concatenar(letra, " es una vocal")
			FinSi
		Fin Para
		
		si resultado == "" Entonces
			Escribir letra, " no es una vocal"
		sino
			Escribir resultado
		FinSi
	FinSi
	
FinProceso
