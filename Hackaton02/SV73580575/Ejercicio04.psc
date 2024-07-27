Proceso Ejercicio04
	Escribir "Ingrese primer numero"
	Leer numero1
	Escribir "Ingrese segundo numero"
	Leer numero2
	Escribir "ingrese tercer numero"
	Leer numero3
	
	Si numero1 < numero2 y numero1<numero3 Entonces
		numeromenor=numero1
		Si numero2 < numero3 Entonces
			numeromedio=numero2
			numeromayor=numero3
		SiNo
			numeromayor=numero3
		Fin Si
		
		SiNo
		numeromenor=numero3
		si numero1<numero2 Entonces
			numeromedio=numero1
			numeromayor=numero2
		FinSi
	Fin Si
	Escribir "Numero menor ",numeromenor
	Escribir "Numero medio ",numeromedio
	Escribir "Numero mayor ",numeromayor
FinProceso
