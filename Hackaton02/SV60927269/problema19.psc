Proceso prob19
	
    Definir idEmpleado, diasTrabajados, salarioDiario, salarioTotal Como Real;
	
    
    Escribir "Ingrese el identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento):";
    Leer idEmpleado;
    Escribir "Ingrese la cantidad de días trabajados en la semana (máximo 6):";
    Leer diasTrabajados;
	
    
    Segun idEmpleado Hacer
        1: salarioDiario <- 56;
        2: salarioDiario <- 64;
        3: salarioDiario <- 80;
        4: salarioDiario <- 48;
		De Otro Modo:
			Escribir "Identificador de empleado no válido.";
    FinSegun;


salarioTotal <- salarioDiario * diasTrabajados;


Escribir "El salario total es: $", salarioTotal;
FinProceso
