Proceso Ejercicio6
	// 6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
	Escribir "Cuantas horas trabajara esta semana?"
	Leer horas
	pago=0
	Si horas >40 Entonces
		pago=40*20+(horas-40)*25
	SiNo
		pago=horas*20
	FinSi
	Escribir "Su sueldo de esta semana sera: $",pago
FinProceso
