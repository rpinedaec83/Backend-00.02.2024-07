Algoritmo Ejercicio17
	//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
	
	definir seg, min, horas como entero
	Escribir "Ingrese la hora a modificar en segundos, minutos y horas:"
	Leer seg
	leer min 
	leer horas
	
	segf = seg  + 1
	
	si segf >= 60 Entonces
		segf  = 00
		min = min + 1
	FinSi
	
	si min  = 60 Entonces
		min = 00
		horas = horas + 1                            
	FinSi
	si horas >= 24 Entonces
		horas = 00
	FinSi
	
	Escribir "La hora luego de 1 segundo sera:" horas, ":" min, ":" segf
FinAlgoritmo
