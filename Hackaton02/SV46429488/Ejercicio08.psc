Proceso Ejercicio08
	//8. Hacer un algoritmo en Pseint para calcular 
	//el promedio de tres notas y determinar si el estudiante aprobó o no.
	Escribir "Ejercicio 08, Calcular el promedio de 03 notas."
	dimensionar datos[3]
	Escribir "Ingresar la primera nota del estudiante: " 
	Leer datos[1]
	Escribir "Ingresar la segunda nota del estudiante: " 
	Leer datos[2]
	Escribir "Ingresar la tercera nota del estudiante: " 
	Leer datos[3]
	
	cantNotas=3
	NotaPromedio=0
	
	NotaPromedio=(datos[1]+datos[2]+datos[3])/cantNotas
	
	Si NotaPromedio>10 Entonces
		Escribir "El alumno aprobo la materia con una nota promedio de: ",NotaPromedio
	SiNo
		Escribir "El alumno desaprobo la materia con una nota promedio de: ",NotaPromedio
	FinSi
		
	
FinProceso
