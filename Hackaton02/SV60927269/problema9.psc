Proceso prob9
	
    Definir salarioActual, aumento, nuevoSalario Como Real;
    
   
    Escribir "Ingrese el salario actual:";
    Leer salarioActual;
    
   
    aumento <- 0;
    
   
    Si salarioActual > 2000 Entonces
        aumento <- salarioActual * 0.05;
    SiNo
        aumento <- salarioActual * 0.10;
    FinSi;
    
   
    nuevoSalario <- salarioActual + aumento;
    
   
    Escribir "El aumento es: $", aumento;
    Escribir "El nuevo salario es: $", nuevoSalario;
FinProceso
