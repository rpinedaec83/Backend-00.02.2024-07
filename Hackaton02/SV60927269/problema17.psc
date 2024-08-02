Proceso prob17
	

    Definir horas, minutos, segu Como Entero;
	
    
    Escribir "Ingrese la hora (formato 24h):";
    Leer horas;
    Escribir "Ingrese los minutos:";
    Leer minutos;
    Escribir "Ingrese los segundos:";
    Leer seg;
	
   
    seg <- seg + 1;
	
   
    Si seg = 60 Entonces
        seg <- 0;
        minutos <- minutos + 1;
    FinSi;
	
    Si minutos = 60 Entonces
        minutos <- 0;
        horas <- horas + 1;
    FinSi;
	
    Si horas = 24 Entonces
        horas <- 0;
    FinSi;


    Escribir "La hora dentro de un segundo será: ", horas, ":", minutos, ":", seg;
FinProceso
