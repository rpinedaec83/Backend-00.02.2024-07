Proceso Ejercicio17
	// 17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
	Escribir "Ingrese la hora 0-23(hh): "
	Leer hora
	Escribir "Ingrese los minutos 0-59(mm): "
	Leer min
	Escribir "Ingrese los segundos 0-59(ss): "
	Leer seg
	hora2=0
	min2=0
	seg2=0
	Si seg+1=60 Entonces
		seg2=0
		Si min+1=60 Entonces
			min2=0
			Si hora+1=24 Entonces
				hora2=0
			SiNo
				hora2=hora+1
			FinSi
		SiNo
			min2=min+1
			hora2=hora
		FinSi
	SiNo
		seg2=seg+1
		min2=min
		hora2=hora
	FinSi
	Escribir "La hora dentro de un segundo es: ", hora2,":",min2,":",seg2
FinProceso
