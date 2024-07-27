
Proceso bucles
	
	Para inicio<-0 Hasta 10 Con Paso 1 Hacer
		escribir inicio
	Fin Para
	
	bandera = Verdadero
	numero1  = 0
	Mientras bandera Hacer
		Escribir numero1
		numero1 = numero1+ 1
		si numero1 == 10 Entonces
			bandera = Falso
		FinSi
	Fin Mientras
	
	Repetir
		numero1 = numero1 - 1
		escribir numero1
		si numero1 == 0 Entonces
			bandera = Verdadero
		FinSi
	Hasta Que bandera
	
	
FinProceso
