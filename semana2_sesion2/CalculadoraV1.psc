Proceso CalculadoraV1
	Escribir "Digíte el primer número"
	Leer primerNumero
	
	Escribir "Digíte el segundo número"
	Leer segundoNumero
	
	Escribir "Escirba 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir"
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
			Escribir "Opción no válida"
	Fin Segun
	
	Escribir "el resultado es: ", res
FinProceso
