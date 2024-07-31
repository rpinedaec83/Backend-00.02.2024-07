Proceso Sumadora
	Escribir "Ingresa el primer numero para sumar"
	Leer primerNumero
	Escribir "Ingresa el segundo numero para sumar"
	Leer segundoNumero
	resultado = primerNumero + segundoNumero
	Escribir "Escriba 1 para sumar; 2 para restar; 3 para multiplicar"
	Leer operacion
	si operacion == 1 Entonces
		resultado = primerNumero + segundoNumero
		Escribir "El resultado es ", resultado
	SiNo
		si operacion == 2 Entonces
			resultado = primerNumero - segundoNumero
			Escribir "El resultado es ", resultado
	SiNo
		si operacion == 3 Entonces
			resultado = primerNumero * segundoNumero
			Escribir "El resultado es ", resultado
		FinSi
	FinSi
FinProceso
