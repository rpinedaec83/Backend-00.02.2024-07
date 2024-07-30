Proceso ejercicio5
	precio=80
	Escribir "La cantidad de zapatos que desea comprar:"
	Leer numerozapatos
	preciototal=numerozapatos*precio
	
	Si numerozapatos > 30 Entonces
		descuento = 0.40
	SiNo
		si numerozapatos >=  20 Entonces
			descuento=0.20
		SiNo
			si numerozapatos >= 10 Entonces
				descuento = 0.10
			sino 
				descuento=0
			FinSi
		FinSi
	FinSi
	preciofinal=preciototal - (preciototal-descuento)
	Escribir "La cantidad ingresada es" numerozapatos
	Escribir "El precio original es" precio total
	Escribir "El descuento es de " descuento *100 "%"
	Escribir "El precio con descuento es", preciototal
FinProceso
