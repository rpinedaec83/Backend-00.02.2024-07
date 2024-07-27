//35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
Proceso Ejercicio35
	Definir num, i, mayor, menor Como Entero;
	Escribir "Ingrese los numeros";
	Leer num;
	mayor<-num;
	menor<-num;
	Para i<-1 Hasta 20 Con Paso 1 Hacer
		Escribir "Ingrese el numero " , i, ";";
		Leer num;
		Si num>mayor Entonces
			mayor<-num;
		FinSi
		Si num<menor Entonces
			menor<-num;
		FinSi
	FinPara
	Escribir "El numero mayor es: ", mayor;
	Escribir "El numero mayor es: ", menor;
FinProceso
