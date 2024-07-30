Proceso Ejercicio32
	// 32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en Pseint que nos permita saber eso. (NO HAY DATOS SUFICIENTES)
	mayor=0
	numeroCiudad =0 
	Para i<-1 Hasta 11 Hacer
		Escribir "Ingrese el numero de habitantes de la ciudad ", i
		Leer num
		Si num > mayor Entonces
			mayor = num
			numeroCiudad = i
		FinSi
	FinPara
	Escribir "La ciudad con la poblacion de mas personas es la ciudad ", numeroCiudad, " con ",mayor," personas"
FinProceso
