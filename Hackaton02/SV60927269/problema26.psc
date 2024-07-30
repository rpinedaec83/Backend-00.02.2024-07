Proceso prob26
	Definir dividendo, divisor, cociente, resto Como Entero;
	
    // Leer el dividendo y el divisor ingresados por el usuario
    Escribir "Ingrese el dividendo: ";
    Leer dividendo;
    Escribir "Ingrese el divisor: ";
    Leer divisor;
	
    // Inicializar las variables
    cociente <- 0;
    resto <- dividendo;
	
    // Calcular el cociente y el resto mediante restas sucesivas
    Mientras resto >= divisor Hacer
        resto <- resto - divisor;
        cociente <- cociente + 1;
    FinMientras
	
    // Mostrar los resultados
    Escribir "El cociente es: ", cociente;
    Escribir "El resto es: ", resto;
FinProceso
