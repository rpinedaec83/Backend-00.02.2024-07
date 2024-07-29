Proceso ejercicio9
	//Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá 
	//un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
	Escribir "Ingrese su salario : "
	Leer salario
	si salario > 2000 Entonces
		aumento = salario * 5/100
		Escribir "El salario aumentado del trabajador es:", aumento, " soles"
		nuevosalario = salario + aumento
		Escribir "El total del salario actual del trabajador es : ", nuevosalario, " soles "
	sino
		aumento = salario * 10/100
		Escribir "El salario aumentado del trabajador es:", aumento, " soles"
		nuevosalario = salario + aumento
		Escribir "El total del salario actual del trabajador es : ", nuevosalario, " soles "
		
	FinSi
	
FinProceso
