//27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.
Proceso Ejercicio27
	Definir suma, contador, num, media Como Real;
	suma<-0;
	contador<-0;
	Escribir "Ingrese un numero positivo";
	Leer num;
	Mientras num>=0 Hacer
		suma<-suma+num;
		contador<-contador+1;
		Escribir "Ingrese otro numero positivo o negativo";
		Leer num;
	FinMientras
	Si contador>0 Entonces
		media<-suma/contador;
	SiNo
		Escribir "No se ingresaron numeros positivos";
	FinSi
FinProceso
