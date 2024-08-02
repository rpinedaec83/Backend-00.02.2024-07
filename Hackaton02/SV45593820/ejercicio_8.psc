Proceso ejercicio_8
	sumaNotas = 0
	Para contador<-1 Hasta 3 Con Paso 1 Hacer
		Escribir "Ingrese nota ", contador
		Leer nota
		
		sumaNotas = sumaNotas + nota
	Fin Para
	
	promedio = sumaNotas / (contador - 1)

	Escribir "-----------------"
	Escribir "Promedio: ", promedio
	si promedio > 10.5 Entonces
		Escribir "Aprobado"
	SiNo
		Escribir "Desaprobado"
	FinSi
FinProceso
