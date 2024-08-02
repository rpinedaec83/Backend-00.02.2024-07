Proceso prob15
	
    Definir cm, pulgadas, libras, kg Como Real;
	
    
    Escribir "Ingrese la cantidad en centímetros:";
    Leer cm;
    Escribir "Ingrese la cantidad en libras:";
    Leer libras;
	
   
    pulgadas <- cm / 2.54;
    kg <- libras / 2.20462;
	
    // Mostrar los resultados
    Escribir cm, " centímetros son ", pulgadas, " pulgadas.";
    Escribir libras, " libras son ", kg, " kilogramos.";
FinProceso
