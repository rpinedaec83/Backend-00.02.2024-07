Proceso Ejercicio19
	//19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados 
	//de la siguiente forma con su número identificador y salario diario correspondiente:
	
	//Cajero (56$/día).
	//Servidor (64$/día).
	//Preparador de mezclas (80$/día).
	//Mantenimiento (48$/día).
	//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros 
	//que representen al número identificador del empleado y la cantidad de días que trabajó 
	//en la semana (6 días máximos). Y el programa le mostrará por pantalla 
	//la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
	Escribir "Ejercicio 19, Heladeria Frio Rico"
	Escribir "Por favor ingresar el número identificador del empleado segun la siguiente descricion; Cajero -> 1, Servidor -> 2, Preparador de mezclas -> 3, Mantenimiento -> 4: "
	Leer idEmpleado
	Escribir "Por favor ingresar la cantidad de días que trabajo en la semana (max. 6 días): "
	Leer cantDias
	posicion=""
	montoSueldo=0
	
	segun idEmpleado hacer
		1: posicion<-"Cajero"
			si cantDias>6 Entonces
				Escribir "La cantidad de días maxima son 06 días y no se puede superar"
			SiNo
				montoSueldo=56*cantDias
				Escribir "El monto a pagar al empleado tipo ",posicion," es $",montoSueldo
			FinSi
		2: posicion<-"Servidor"
			si cantDias>6 Entonces
				Escribir "La cantidad de días maxima son 06 días y no se puede superar"
			SiNo
				montoSueldo=64*cantDias
				Escribir "El monto a pagar al empleado tipo ",posicion," es $",montoSueldo
			FinSi
		3: posicion<-"Preparador de mezclas"
			si cantDias>6 Entonces
				Escribir "La cantidad de días maxima son 06 días y no se puede superar"
			SiNo
				montoSueldo=80*cantDias
				Escribir "El monto a pagar al empleado tipo ",posicion," es $",montoSueldo
			FinSi
		4: posicion<-"Mantenimiento"
			si cantDias>6 Entonces
				Escribir "La cantidad de días maxima son 06 días y no se puede superar"
			SiNo
				montoSueldo=48*cantDias
				Escribir "El monto a pagar al empleado tipo ",posicion," es $",montoSueldo
			FinSi
	De Otro Modo:
		Escribir	"Id de empleado no valido"
	Fin Segun
	
FinProceso
