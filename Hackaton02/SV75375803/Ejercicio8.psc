Proceso Ejercicio8
	//8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobo o no.
	
	//Voy a considerar que las notas menores a 14 son desaprobatorias
	
	Definir nota1, nota2, nota3 Como Real
	Definir promedionota Como Real
    Definir resultadonota Como Caracter
	
	// Solicitar los tres numeros al usuario
    Escribir "Escribe la nota 1";
    Leer nota1;
    Escribir "Escribe la nota 2";
    Leer nota2;
    Escribir "Escribe la nota 3";
    Leer nota3;
	
	promedionota <- ((nota1 + nota2 + nota3)/3)
	
	Si promedionota >= 14 Entonces
		resultadonota <- "Aprobado"
		SiNo resultadonota <- "Desaprobado"
	FinSi
	
	Escribir "El alumno tiene un promedio de " promedionota ", por que se encuentra: " resultadonota
	
FinProceso
