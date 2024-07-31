
//Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados
//de la siguiente forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que
//representen al número identificador del empleado y la cantidad de días que trabajó en la
//semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el
//dueño le debe pagar al empleado que ingresó
Proceso Ejercicio19
	Definir idEmpl, diasTrabajados, pagoSemanal Como Entero
	Definir Cargo Como Caracter
	Escribir"Digitar 1: Cajero, 2: Servidor, 3: Preparador de Mezclas, 4: Mantenimiento"
	Leer idEmpl
	Escribir"Cantidad de Dias trabajados"
	Leer diasTrabajados
	
	Segun idEmpl Hacer
			Caso 1:
				pagoSemanal = 56 * diasTrabajados
				Cargo = "Cajero"
			Caso 2:
				pagoSemanal = 64 * diasTrabajados
				Cargo = "Servidor"
			Caso 3:
				pagoSemanal = 80 * diasTrabajados
				Cargo = "Preparador de Mezclas"
			Caso 4:
				pagoSemanal = 48 * diasTrabajados
				Cargo = "Mantenimiento"
			De Otro Modo:
			Escribir "Número identificador de empleado no válido"
	Fin Segun

	Si diasTrabajados > 6 Entonces
		Escribir "Número de días trabajados no válido (máximo 6 días)"
	SiNo
		Escribir "El cargo del empleado es: " cargo
		Escribir "Pago semanal: $", pagoSemanal
	Fin Si

		
	FinProceso
