Proceso CalculandoHora
	Hora1=0;
	Hora2=0;
	Minuto1=0;
	Minuto2=0;
	Segundo1=0;
	Segundo2=0;
	Numero1=0;
	Numero2=0;
	DosPuntos = ":";
	Leer Hora1;
	Leer Minuto1;
	Leer Segundo1;
	
	Numero1 = Segundo1 + (Minuto1*60) + (Hora1*3600);
	Numero1 = Numero1 + 1;
	//Imprimir Numero1;
	Hora2 = redon(Numero1/3600);
	//Imprimir Hora2;
	Numero2 = Numero1 - (Hora2*3600);
	//Imprimir Numero2;
	Minuto2 = redon(Numero2/60);
	Numero2 = Numero2 - (Minuto2*60); 
	Segundo2 = Numero2;
	Escribir "La Hora, Minuto y Segundo siguiente es:"
	Imprimir Hora2, DosPuntos, Minuto2, DosPuntos, Segundo2;
	
FinProceso
