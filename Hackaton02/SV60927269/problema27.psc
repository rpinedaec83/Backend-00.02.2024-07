Proceso prob27
	Definir suma, contador, numero, media Como Real;
    
    // Inicializar las variables
    suma <- 0;
    contador <- 0;
	
    // Leer números hasta que se ingrese un número negativo
    Escribir "Ingrese un número positivo (o un número negativo para terminar): ";
    Leer numero;
	
    Mientras numero >= 0 Hacer
        suma <- suma + numero;
        contador <- contador + 1;
        
        Escribir "Ingrese otro número positivo (o un número negativo para terminar): ";
        Leer numero;
    FinMientras
	
    // Calcular la media si se han ingresado números válidos
    Si contador > 0 Entonces
        media <- suma / contador;
        Escribir "La media de los números ingresados es: ", media;
    Sino
        Escribir "No se ingresaron números positivos.";
    FinSi
FinProceso
