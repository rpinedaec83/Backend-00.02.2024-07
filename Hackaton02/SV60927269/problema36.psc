Proceso prob36
	Definir n, a, b, c, i Como Entero;
	
    // Leer el número de términos de la serie de Fibonacci a generar
    Escribir "Ingrese el número de términos de la serie de Fibonacci: ";
    Leer n;
	
    // Inicializar los primeros dos términos de la serie
    a <- 0;
    b <- 1;
	
    // Mostrar los primeros dos términos de la serie si n es al menos 1
    Si n >= 1 Entonces
        Escribir a;
    FinSi
	
    Si n >= 2 Entonces
        Escribir b;
    FinSi
	
    // Calcular y mostrar los siguientes términos de la serie
    Para i <- 3 Hasta n Hacer
        c <- a + b;
        Escribir c;
        a <- b;
        b <- c;
    FinPara
FinProceso
