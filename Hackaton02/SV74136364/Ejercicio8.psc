//Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
Proceso Ejercicio8
	Definir nota1, nota2, nota3, promedio Como Real
	Escribir "Ingrese primera nota"
	Leer nota1
	Escribir "Ingrese segunda nota"
	Leer nota2
	Escribir "Ingrese tercera nota"
	Leer nota3
	
	promedio = (nota1 + nota2 + nota3) / 3
	
	Escribir "Promedio: ", promedio
	
	Si promedio >= 12.5 Entonces
		Escribir "El alumno esta Aprobado"
	Sino
		Escribir "El alumno esta Desaprobado"
	Fin Si
FinProceso
