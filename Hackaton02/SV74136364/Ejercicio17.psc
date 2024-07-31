//Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Proceso Ejercicio17
	Definir h, m, s, nuevaHora Como Entero
	
	Escribir "Ingrese Hora"
	Leer h
	Escribir "Ingrese Minutos"
	Leer m
	Escribir "Ingrese Segundos"
	Leer s
	
	s = s + 1
	
	Si s == 60 Entonces
		s = 0
		m = m + 1
		Si m == 60 Entonces
			m = 0
			h = h + 1
			Si h == 24 Entonces
				h = 0
			Fin Si
		Fin Si
	Fin Si
	
	nuevaHora = h * 10000 + m * 100 + s
	
	Escribir "La hora dentro de un segundo es: ", nuevaHora
FinProceso
