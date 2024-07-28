Proceso Ejercicio19
	//19. Hacer un algoritmo en Pseint para una heladeria se tienen 4 tipos de empleados ordenados de la siguiente forma con su 
	//numero identificador y salario diario correspondiente:
	
    //Cajero (56$/dia).
	
    //Servidor (64$/dia).
	
    //Preparador de mezclas (80$/dia).
	
    //Mantenimiento (48$/dia).
	
    //El dueno de la tienda desea tener un programa donde solo ingrese dos numeros enteros que representen al numero identificador del empleado y la cantidad de dias que trabaja en la semana (6 dias maximos). Y el programa le mostrara por pantalla la cantidad de dinero que el dueno le debe pagar al empleado que ingres?
	
	Definir identificador Como Entero
	Definir cargo Como Caracter
	Definir diassalario Como Entero
	Definir Salariodiario Como Entero
	Definir PagoTotal Como Entero
	
	Escribir "Escribir nro identificador, 1 para Cajero, 2 para Servidor, 3 para Preparador de mezclas y 4 para Mantenimiento"
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
		Escribir "Dias superiores a la semana, por favor, reiniciar el sistema"
		Escribir diassalario
		continuar <- Falso
	FinSi
	
	PagoTotal <- diassalario * Salariodiario
	
	Escribir "El cargo seleccionado fue: " cargo " y su salario segun los " diassalario " dias de trabajo fue $" PagoTotal
	
FinProceso
