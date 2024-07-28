//38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
Proceso Ejercicio38
	Definir numero, suma, i Como Entero;
	Escribir "Ingrese un numero: ";
	Leer numero;
	suma <- 0;
	Para i <- 1 Hasta numero-1 Hacer;
		Si numero % i = 0 Entonces
			suma <- suma + 1;
		FinSi
	FinPara
	Si suma = numero Entonces
		Escribir numero, " es un numero perfecto.";
	SiNo
		Escribir numero, " no es un numero perfecto.";
	FinSi
FinAlgoritmo
