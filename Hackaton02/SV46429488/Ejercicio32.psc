Proceso Ejercicio32
	//32. Se quiere saber cuál es la ciudad con la población de más personas, 
	//son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso. 
	//(NO HAY DATOS SUFICIENTES)
	Escribir "Ejercicio 32, Determinar la ciudad con la poblacion con mas personas."
	mayorPoblacion <- -1 
    ciudadMayorPoblacion <- ""
	provincia=0
	ciudad=0
	
    Para provincia <- 1 Hasta 3
        Escribir "Por favor ingrese el nombre de la provincia número ", provincia, ":"
		Leer nombrePro
        Para ciudad <- 1 Hasta 11
            Escribir "Por favor ingrese el nombre de la ciudad número ", ciudad, ":"
            Leer ciudadNombre
            Escribir "Por favor ingrese la cantidad de la población ", ciudadNombre, ":"
            Leer poblacionActual
            Si poblacionActual > mayorPoblacion Entonces
                mayorPoblacion <- poblacionActual
                ciudadMayorPoblacion <- ciudadNombre
            FinSi
        FinPara
    FinPara
	
    Escribir "Se determina la ciudad con la mayor población es ", ciudadMayorPoblacion, " con una población de ", mayorPoblacion
	
	
FinProceso
