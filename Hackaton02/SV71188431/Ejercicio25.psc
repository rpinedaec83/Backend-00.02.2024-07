//25. Hacer un algoritmo en Pseint para calcular el factorial de un número de una forma distinta.
Proceso Ejercicio25
	Definir n, contador, factorial Como Entero;
	Escribir "ingrese el numero para calcular el factorial de un numero de forma distinta";
	Leer n;
	contador<-1;
	factorial<-1;
	Mientras contador <= n Hacer
		factorial<-factorial*contador;
		contador<-contador+1;
	FinMientras
	Escribir "El factorial del: " ,n, "es: ",factorial;
	
FinProceso
