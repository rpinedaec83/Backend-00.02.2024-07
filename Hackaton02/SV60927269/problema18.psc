Proceso prob18
	
    Definir cantidad, precioUnitario, totalVenta, ganancia Como Real;
	
    
    Escribir "Ingrese la cantidad de CDs a comprar:";
    Leer cantidad;
	
    
    Si cantidad >= 500 Entonces
        precioUnitario <- 6;
    SiNo
        Si cantidad >= 100 Entonces
            precioUnitario <- 7;
        SiNo
            Si cantidad >= 10 Entonces
                precioUnitario <- 8;
            SiNo
                precioUnitario <- 10;
            FinSi;
        FinSi;
    FinSi;
	
   
    totalVenta <- cantidad * precioUnitario;
    ganancia <- totalVenta * 0.0825;
	
    
    Escribir "El precio total para el cliente es: $", totalVenta;
    Escribir "La ganancia del vendedor es: $", ganancia;
FinProceso
