//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
Proceso Ejercicio08
	Definir nota1, nota2, nota3, promedio Como Real
    Escribir "Ingresar la primera nota:"
    Leer nota1
    Escribir "Ingresar la segunda nota:"
    Leer nota2
    Escribir "Ingresar la tercera nota:"
    Leer nota3
    promedio <- (nota1 + nota2 + nota3) / 3
    Escribir "El promedio es: ", promedio
    Si promedio >= 10 Entonces
        Escribir "El estudiante aprobó."
    Sino
        Escribir "El estudiante no aprobó."
    FinSi
	
FinProceso
