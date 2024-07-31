Proceso Ejercicio6
	//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
Escribir"Ingrese la cantidad de horas trabajadas"
	definir x Como Real
	Leer x
	
		si x <= 40 Entonces
			monto = x * 20
			Escribir "Su sueldo sera de:$" monto
			
		sino
			hextras = (x - 40) * 25
			monto =  hextras  + 800 
			Escribir "El pago por horas extras seria:" hextras
			Escribir "Su sueldo sera de:$" monto
			
		FinSi

FinProceso
