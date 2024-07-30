Proceso prob37
	Definir a, b, temp Como Entero;
	
    
    Escribir "Ingrese el primer n�mero: ";
    Leer a;
    Escribir "Ingrese el segundo n�mero: ";
    Leer b;
	
   
    Si a < 0 Entonces
        a <- -a;
    FinSi
    Si b < 0 Entonces
        b <- -b;
    FinSi
	
    
    Mientras b <> 0 Hacer
        temp <- b;
        b <- a % b;
        a <- temp;
    FinMientras
	
   
    Escribir "El M.C.D. de los dos n�meros es: ", a;
FinProceso
