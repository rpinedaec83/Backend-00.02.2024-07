Proceso ejercicio_34
	Escribir "Tablas de multiplicar"
	Escribir "==========================="
	
	Para _i <- 1 Hasta 9 Con Paso 1 Hacer
		Escribir "Tabla de multiplicar del ", _i
		
		Para _j <- 1 Hasta 12 Con Paso 1 Hacer
			calculo = _j * _i
			Escribir _i, " x ", _j, " = ", calculo
		Fin Para
	Fin Para
FinProceso
