Proceso Calculadora
	Escribir "Digite el primer numero"
	Leer primerNumero
	Escribir "Digite el segundo numero"
	Leer segundoNumero
	Escribir "Escriba 1 para sumar; 2 para restar; 3 para multiplicar; 4 para dividir"
	Leer operacion
	si operacion == 1 Entonces
		resultado = primerNumero + segundoNumero
		Escribir "El resultado es: ", resultado
	SiNo
		si operacion == 2 Entonces
			resultado = primerNumero - segundoNumero
			Escribir "El resultado es: ", resultado
		
		SiNo
			
		si operacion == 3 Entonces
			resultado = primerNumero * segundoNumero
			Escribir "El resultado es: ", resultado
		SiNo
			si operacion == 4 Entonces
				resultado = primerNumero / segundoNumero
				Escribir "El resultado es: ", resultado
			FinSi
		FinSi
	FinSi
	
FinSi

	
FinProceso
