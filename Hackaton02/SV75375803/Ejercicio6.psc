Proceso Ejercicio6
	//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cual sera su sueldo semanal, se sabe que si trabaja 40 horas o menos, 
	//se le pagara $20 por hora, pero si trabaja m�s de 40 horas entonces las horas extras se le pagaran a $25 por hora.
	Definir horashombre Como Entero
	Definir sueldo Como Entero
	
	Escribir "Indicar las horas hombre realizadas de la semana"
	leer horashombre
	
	Si horashombre <= 40 Entonces
		sueldo <- horashombre * 20
	SiNo
		sueldo <- (40 * 20 + ((horashombre - 40) * 25))
	Fin Si
	
	Escribir "Su sueldo semanal es: $" sueldo
FinProceso
