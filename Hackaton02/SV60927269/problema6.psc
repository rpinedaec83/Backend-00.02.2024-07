Proceso prob6
	
	Definir horasTrabajadas, horasExtras Como Entero;
	Definir TARIFA_NORMAL,TARIFA_EXTRA, LIMITE_HORAS Como Real;
	Definir sueldoSemanal Como Real;
	
	TARIFA_NORMAL <- 20;
	TARIFA_EXTRA <- 25;
	LIMITE_HORAS <- 40;
	
	
	Escribir "Ingrese la cantidad de horas trabajadas en la semana:";
	Leer horasTrabajadas;
	
	
	sueldoSemanal <- 0;
	
	
	Si horasTrabajadas <= LIMITE_HORAS Entonces
		sueldoSemanal <- horasTrabajadas * TARIFA_NORMAL;
	SiNo
		
		horasExtras <- horasTrabajadas - LIMITE_HORAS;
		
		sueldoSemanal <- LIMITE_HORAS * TARIFA_NORMAL;
		
		sueldoSemanal <- sueldoSemanal + (horasExtras * TARIFA_EXTRA);
	FinSi
	
	
	Escribir "El sueldo semanal es: $", sueldoSemanal;
FinProceso
