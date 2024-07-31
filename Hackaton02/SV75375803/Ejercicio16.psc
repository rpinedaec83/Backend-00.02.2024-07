Proceso Ejercicio16
	//16. Hacer un algoritmo en Pseint que lea un numero y según ese número, indique el dia que corresponde.
	Definir numerodia Como Entero
	
	Escribir "Indicar un numero del 1 al 7 (Domingo inicia con 1 y sabado termina en 7)"
	leer numerodia
	
	Si numerodia = 1 Entonces
		Escribir "Elegiste domingo"
		SiNo si numerodia = 2 Entonces
				Escribir "Elegiste lunes"
				SiNo si numerodia = 3 Entonces
					Escribir "Elegiste martes"
					SiNo si numerodia = 4 Entonces
						Escribir "Elegiste miercoles"					
						SiNo si numerodia = 5 Entonces
								Escribir "Elegiste jueves"
								SiNo si numerodia = 6 Entonces
										Escribir "Elegiste viernes"
										SiNo si numerodia = 7 Entonces
												Escribir "Elegiste sabado"
											SiNo Escribir "Numero incorrecto, volver a escoger un número del 1 al 7"
										FinSi
								FinSi
						FinSi
					FinSi
				FinSi
		FinSi
	FinSi
FinProceso
