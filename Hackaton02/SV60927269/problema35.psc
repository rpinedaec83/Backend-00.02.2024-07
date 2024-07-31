Proceso prob35
	Definir i, num, mayor, menor Como Entero;
	
    // Leer el primer número e inicializar mayor y menor con ese valor
    Escribir "Ingrese el número 1: ";
    Leer num;
    mayor <- num;
    menor <- num;
	
    // Leer los siguientes 19 números
    Para i <- 2 Hasta 20 Hacer
        Escribir "Ingrese el número ", i, ": ";
        Leer num;
		
        // Comparar el número ingresado con el mayor y el menor
        Si num > mayor Entonces
            mayor <- num;
        FinSi
		
        Si num < menor Entonces
            menor <- num;
        FinSi
    FinPara
	
    // Mostrar el número mayor y el número menor
    Escribir "El número mayor es: ", mayor;
    Escribir "El número menor es: ", menor;
FinProceso
