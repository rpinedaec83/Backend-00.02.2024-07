//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se
//le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.


Proceso Ejercicio6
	Definir horasTrabajo, sueldoBase, sueldoExtra, sueldoTotal Como Real
	Escribir "Ingrese la cantidad de horas trabajadas"
	Leer horasTrabajo
	
	sueldoBase= 20
	sueldoExtra= 25
	
	Si horasTrabajo <= 40 Entonces
		sueldoTotal = horasTrabajo * sueldoBase
	Sino
		sueldoTotal = (40 * sueldoBase) + ((horasTrabajo - 40) * sueldoExtra)
	Fin Si
	
	Escribir "Sueldo semanal: ", sueldoTotal
	
FinProceso
