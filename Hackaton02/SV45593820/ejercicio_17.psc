Proceso ejercicio_17
	flag = Verdadero
	
	Escribir "Ingrese la hora en formato HH:m:s, 24 horas"
	Escribir "Hora (H):"
	Leer hora
	
	Escribir "Minuto (m):"
	Leer minuto
	
	Escribir "Segundos (s):"
	Leer segundo
	
	si hora < 0 o hora > 23 Entonces
		flag = Falso
	FinSi
	
	si minuto < 0 o minuto > 59 Entonces
		flag = Falso
	FinSi
	
	si segundo < 0 o segundo > 59 Entonces
		flag = Falso
	FinSi
	
	si flag == Verdadero Entonces
		nuevaHora = hora
		nuevoMinuto = minuto
		nuevoSegundo = segundo + 1
		
		si nuevoSegundo > 59 Entonces
			nuevoSegundo = 0
			nuevoMinuto = minuto + 1
			
			si nuevoMinuto > 59 Entonces
				nuevoMinuto = 0
				
				nuevaHora = hora + 1
				si nuevaHora > 23 Entonces
					nuevaHora = 0
				FinSi
			FinSi
		FinSi
		
		Escribir "Dentro de 1 segundo serán las:"
		Escribir nuevaHora, " hora(s)"
		Escribir nuevoMinuto, " minuto(s)"
		Escribir nuevoSegundo, " segundo(s)"
	SiNo
		Escribir "(!) no ingreso un valor válido"
	FinSi
		
FinProceso
