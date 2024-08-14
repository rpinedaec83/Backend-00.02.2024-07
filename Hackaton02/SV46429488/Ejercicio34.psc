Proceso Ejercicio34
	//34. Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los números del uno al nueve.
	Escribir "Ejercicio 34, Tabla de multiplicar del 1 al 9."
	Escribir "Ingresar el número de la tabla de multiplicar que se quiere mostrar: "
	Leer datoNum
	
    Si datoNum < 1 O datoNum > 9 Entonces
        Escribir "El número a ingresar debe estar entre 1 y 9. Por favor pruebe nuevamente"
    Sino
        Escribir "Tabla de multiplicar del ", datoNum, ":"
		
        Para i <- 1 Hasta 12
            Escribir datoNum, " x ", i, " = ", datoNum * i
        FinPara
    FinSi
	
FinProceso
