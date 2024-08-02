Proceso Ejercicio17
	// 17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
	Definir hora, min, seg Como Entero
	Escribir "Ingrese la hora actual (hh:mm:ss): "
		Leer hora, min, seg
		Si seg >= 60 Entonces
			seg = 0
			min = min + 1
		FinSi
		Si min >= 60 Entonces
			min = 0
			hora = hora + 1
		FinSi
		Si hora >= 24 Entonces
			hora = 0
		FinSi
	Escribir "La hora es: ", hora, ":", min, ":", seg;
FinProceso