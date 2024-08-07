//8 Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
Algoritmo PromedioNotas
    Definir nota1, nota2, nota3, promedio Como Real
	
    // Solicitar las tres notas al usuario
    Escribir "Ingrese la primera nota:"
    Leer nota1
    Escribir "Ingrese la segunda nota:"
    Leer nota2
    Escribir "Ingrese la tercera nota:"
    Leer nota3
	
    // Calcular el promedio
    promedio <- (nota1 + nota2 + nota3) / 3
	
    // Mostrar el promedio
    Escribir "El promedio es: ", promedio
	
    // Determinar si el estudiante aprobó o no 
    Si promedio >= 12.5 Entonces
        Escribir "El estudiante ha aprobado."
    Sino
        Escribir "El estudiante ha desaprobado."
    FinSi
FinAlgoritmo
