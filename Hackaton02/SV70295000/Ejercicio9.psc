Proceso  Ejercicio9
	//Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
	Escribir "Ingrese el monto del sueldo a evaluar"
	x = real
	Leer x
	
	si x > 2000 Entonces
		aumento = x*(5/100)
		Escribir "el aummento sera de:$" aumento
	FinSi
	si x <= 2000 Entonces
		aumento = x*(10/100)
		Escribir "el aummento sera de:$" aumento
	FinSi
FinProceso
