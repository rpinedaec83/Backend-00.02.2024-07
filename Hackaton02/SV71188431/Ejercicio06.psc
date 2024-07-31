//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, 
//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
Proceso Ejercicio06
	Definir horasTrabajadas, sueldo Como Real
    Definir sueldoBase, sueldoExtra Como Real
    sueldoBase <- 20
    sueldoExtra <- 25
    Escribir "Ingrese las horas trabajadas en la semana:"
    Leer horasTrabajadas
    Si horasTrabajadas <= 40 Entonces
        sueldo <- horasTrabajadas * sueldoBase
    Sino
        sueldo <- 40 * sueldoBase + (horasTrabajadas - 40) * sueldoExtra
    FinSi
    Escribir "El sueldo semanal es: ", sueldo
	
FinProceso
