Proceso Ejercicio6
	// 6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
	// pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
	
	Definir horas_trabajadas, sueldo, sueldo_base, sueldo_extra Como Real
    sueldo_base <- 20
    sueldo_extra <- 25
    Escribir "Ingrese las horas trabajadas en la semana:"
    Leer horas_trabajadas
    Si horas_trabajadas <= 40 Entonces
        sueldo <- horas_trabajadas * sueldo_base
    Sino
        sueldo <- 40 * sueldo_base + (horas_trabajadas - 40) * sueldo_extra
    FinSi
    Escribir "El sueldo semanal es: ", sueldo
FinProceso
