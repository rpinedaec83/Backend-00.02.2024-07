Proceso Ejercicio19
	//19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su 
	//número identificador y salario diario correspondiente:
	
    //Cajero (56$/día).
	
    //Servidor (64$/día).
	
    //Preparador de mezclas (80$/día).
	
    //Mantenimiento (48$/día).
	
    //El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
	
	Definir identificador Como Entero
	Definir cargo Como Caracter
	Definir diassalario Como Entero
	Definir Salariodiario Como Entero
	Definir PagoTotal Como Entero
	
	Escribir "Escribir n° identificador, 1 para Cajero, 2 para Servidor, 3 para Preparador de mezclas y 4 para Mantenimiento"
	leer identificador
	
	Si	identificador = 1 Entonces
		cargo = "Cajero"
		Salariodiario = 56
		SiNo Si identificador = 2 Entonces
				cargo = "Servidor"
				Salariodiario = 64
			SiNo Si identificador = 3 Entonces
					cargo = "Preparador de mezclas"
					Salariodiario = 80
				SiNo Si identificador = 4 Entonces
						cargo = "Mantenimiento"
						Salariodiario = 48
					SiNo cargo = "Desconocido, volver a iniciar el sistema por favor"
						Escribir cargo
				FinSi
			FinSi		
		FinSi		
	FinSi
	
	Escribir "El cargo seleccionado es: " cargo
	
	Escribir "Si el cargo es identificado, por favor indicar los dias laborados"
	Leer diassalario
	
	Si	diassalario > 6 Entonces
		Escribir "Días superiores a la semana, por favor, reiniciar el sistema"
		Escribir diassalario
		continuar <- Falso
	FinSi
	
	PagoTotal <- diassalario * Salariodiario
	
	Escribir "El cargo seleccionado fue: " cargo " y su salario según los " diassalario " días de trabajo fue $" PagoTotal
	
FinProceso
