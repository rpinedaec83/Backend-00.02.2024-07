Proceso CalculadoraV1
	// Pregunta al usuario el primer numero para operar
	Escribir "Digite el primer numero"
	Leer primerNumero
	Escribir "Digite el segundo numero"
	Leer segundoNumero
	Escribir "Escriba 1 para sumar; 2 para restar; 3 para multiplicar; 4 para dividir"
	Leer operacion
	resultado = 0
	Segun operacion Hacer
		1:
			resultado = primerNumero + segundoNumero
		2:
			resultado = primerNumero - segundoNumero
		3:
			resultado = primerNumero * segundoNumero
		4:
			resultado = primerNumero / segundoNumero
		De Otro Modo:
			Escribir "Opcion no valida"
	Fin Segun
	Escribir "El resultado es: ", resultado
FinProceso
