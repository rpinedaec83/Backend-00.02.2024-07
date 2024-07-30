Proceso Ejercicio06
	//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, 
	//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
	//pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.	
	Escribir "Ejercicio06: Por favor ingrese la cantidad de horas trabajadas en la semana: "
	Leer numHoras
	PagoSemanal=0
	
	Si numHoras<=40 Entonces
		PagoSemanal=numHoras*20
	SiNo
		PagoSemanal=40*20+(numHoras-40)*25
	FinSi
	
	Escribir "El empleado trabajo ",numHoras," horas y el sueldo semanal calculado es: ", PagoSemanal
	
FinProceso
