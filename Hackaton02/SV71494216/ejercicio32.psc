Proceso ejercicio32
	
	//Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades,
	//hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
	Definir poblacion, mayorpoblacion Como Real
    Definir ciudadMayorPoblacion Como Entero
    Definir i Como Entero
	
    
    mayorpoblacion <- 0
    ciudadconmasPoblacion <- 0
    
    Para i <- 1 Hasta 11 Hacer
        Escribir "Ingrese la cantidad población de la ciudad ", i, ": "
        Leer poblacion
		
        Si poblacion > mayorpoblacion Entonces
            mayorpoblacion <- poblacion
            ciudadconmasPoblacion <- i
        FinSi
    FinPara
    
    Escribir "La ciudad con la mayor población es la ciudad número: ", ciudadconmasPoblacion
    Escribir "Con una población de: ", mayorpoblacion
	
	
FinProceso
