Proceso ejercicio6
	//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que 
	//si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras 
	//se le pagarán a $25 por hora.
	
	Definir precioxhora, horaextras Como Real
	precioxhora = 20
	horaextras = 25
	Escribir "Ingrese la cantidad de horas trabajadas: "
	Leer cantidadHoras
	si (cantidadHoras >= 1 Y cantidadHoras <= 40 ) Entonces
		totalhoras = cantidadHoras * precioxhora
		Escribir "EL sueldo semanal por la cantidad de ",cantidadHoras," horas trabajadas es : " , totalhoras, " soles"
	SiNo
		si cantidadHoras >= 41 Entonces
			totalhoras = cantidadHoras * horaextras
			Escribir "EL sueldo semanal por la cantidad de ",cantidadHoras," horas trabajadas mas horas extras es : " , totalhoras, " soles"
		SiNo
			Escribir "La cantidad de ",cantidadHoras," horas ingresadas no es valida"
		FinSi
		
	FinSi
	
FinProceso
