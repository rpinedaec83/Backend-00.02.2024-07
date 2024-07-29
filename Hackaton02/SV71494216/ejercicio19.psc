Proceso ejercicio19
//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados 
//de la siguiente forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador 
//del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla
//la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
	
	//Definir identificador, diasTrabajados, salarioDiario, salarioTotal Como Real
    
    // Solicitar el identificador del empleado y los días trabajados
    Escribir "Ingrese el número identificador, 1 para cajero, 2 para servidor, 3 para preparador de mezclas, 4 para mantenimiento:"
    Leer identificador
    Escribir "Ingrese la cantidad de días trabajados en la semana (6 dias maximo):"
    Leer diastrabajados
	
    Si diastrabajados < 1 O diastrabajados > 6 Entonces
        Escribir "La cantidad de días trabajados debe estar entre 1 y 6."
		Escribir "Intentelo de nuevo"
	FinSi
	
	Segun identificador Hacer
		1:  
			salariodiario <- 56 // Cajero
		2: 
			salariodiario <- 64 // Servidor
		3: 
			salariodiario <- 80 // Preparador de mezclas
		4:  
			salariodiario <- 48 // Mantenimiento
	De Otro Modo:
		Escribir "El numero de identificacion del empleado no es valido, debe ser entre 1 y 4."
		Escribir "Intentelo de nuevo"
	FinSegun

	salariototal <- salariodiario * diastrabajados
	Escribir "El salario total a pagar al empleado es: $", salariototal
	
FinProceso
