Proceso Ejercicio19
	// Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
	// Cajero (56$/día).
	// Servidor (64$/día).
	// Preparador de mezclas (80$/día).
	// Mantenimiento (48$/día).
	// El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó/
	Definir id, salarioTotal, salarioDiario Como Entero
	Escribir "Ingrese el ID del empleado (1: Cajero, 2: Servidor, 3: Preparador, 4: Mantenimiento): "
		Leer id
		Escribir "Ingrese el número de días trabajados: "
		Leer dias
		Si id == 1 Entonces
			salarioDiario = 56
		Sino
			Si id == 2 Entonces
				salarioDiario = 64
			Sino
				Si id == 3 Entonces
					salarioDiario = 80
				Sino
					Si id == 4 Entonces
						salarioDiario = 48
					Sino
						Escribir "ID de empleado inválido."
					FinSi
				FinSi
			FinSi
		FinSi
		salarioTotal = salarioDiario * dias
	Escribir "El salario total a pagar es: $", salarioTotal
FinProceso
