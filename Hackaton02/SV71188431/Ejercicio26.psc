//26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
Proceso Ejercicio26
	Definir dividendo, divisor, cociente, resto Como Entero;
	Escribir "Ingresa el dividendo:";
	Leer dividendo;
	Escribir "Ingresa el divisor:";
	Leer divisor;
	cociente <- 0;
	resto <- dividendo; 
	Mientras resto >= divisor Hacer
		resto<-resto - divisor;
		cociente<- cociente + 1;
	FinMientras
	Escribir "El cociente es: ", cociente, " y el resto es: ", resto;
FinProceso
