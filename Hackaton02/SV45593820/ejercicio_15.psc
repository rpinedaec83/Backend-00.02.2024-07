Proceso ejercicio_15
	Escribir "Ingrese 1 para convertir longitudes, 2 para convertir pesos"
	leer tipo
	
	flag = Verdadero
	convertir = ""
	equivalencia = 0
	Segun tipo Hacer
		1:
			Escribir "Ingrese el valor de la Longitud en centimetros: "
			leer centimetros
			
			convertir = "pulgadas"
			
			equivalencia = centimetros / 2.54
		2:
			Escribir "Ingrese el valor del peso en libras"
			leer libras
			
			convertir = "kilogramos"
			
			equivalencia = libras / 2.205
		De Otro Modo:
			Escribir "No es una opción válida"
			flag = Falso
	Fin Segun
	
	si flag == Verdadero Entonces
		Escribir "Su equivalente en ", convertir, " es: ", equivalencia
	FinSi
	
FinProceso
