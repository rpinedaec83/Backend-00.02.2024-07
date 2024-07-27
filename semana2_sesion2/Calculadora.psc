Proceso Calculadora
	Escribir "Digíte el primer número"
	Leer primerNumero
	
	Escribir "Digíte el segundo número"
	Leer segundoNumero
	
	Escribir "Escirba 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir"
	Leer operacion
	
	Si operacion == 1 Entonces
		suma = primerNumero + segundoNumero
		Escribir "el resultado es: ", suma
	SiNo
		si operacion == 2 Entonces
			resta = primerNumero - segundoNumero
			Escribir "el resultado es: ", resta
		SiNo
			si operacion == 3 Entonces
				multiplicar = primerNumero * segundoNumero
				Escribir "el resultado es: ", multiplicar
			SiNo
				si operacion == 4 Entonces
					dividir = primerNumero / segundoNumero
					Escribir "el resultado es: ", dividir
				FinSi
			FinSi
		FinSi
	Fin Si
FinProceso
