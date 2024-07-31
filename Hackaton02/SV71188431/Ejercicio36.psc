//Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
Proceso Ejercicio36 
	Definir a, b, n, c, x Como Entero;
	a<-0;
	b<-1;
	Escribir "Ingrese el numero de terminos de la serie Fibonacci";
	Leer n;
	Escribir a;
	Escribir b;
	Para x<-3 Hasta n Hacer;
		c<-a + b;
		Escribir c;
		a<-b;
		b<-c;
	FinPara
	
FinProceso
