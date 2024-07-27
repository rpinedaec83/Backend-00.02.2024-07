Proceso bucles
	Para inicio<-0 Hasta 10 Con Paso 1 Hacer
		Escribir inicio
	Fin Para
	
	bandera = Verdadero
	numero1 = -1
	Mientras bandera Hacer
		numero1 = numero1 + 1
		si numero1 == 10 Entonces
			bandera = Falso
		FinSi
		Escribir  numero1
	Fin Mientras
	
	bandera = Falso
	numero1 = 11
	Repetir
		numero1 = numero1 - 1
		Escribir numero1
		si numero1 == 0 Entonces
			bandera = Verdadero
		FinSi
	Hasta Que bandera
FinProceso
