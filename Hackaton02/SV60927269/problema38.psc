Proceso prob38
	Definir num, sumaDivisores, i Como Entero;
	
    // Leer el n�mero
    Escribir "Ingrese un n�mero: ";
    Leer num;
	
    // Inicializar la suma de los divisores
    sumaDivisores <- 0;
	
    // Encontrar y sumar los divisores propios del n�mero
    Para i <- 1 Hasta num- 1 Hacer
        Si num % i = 0 Entonces
            sumaDivisores <- sumaDivisores + i;
        FinSi
    FinPara
	
    // Determinar si el n�mero es perfecto
    Si sumaDivisores = num Entonces
        Escribir num, " es un n�mero perfecto.";
    Sino
        Escribir num, " no es un n�mero perfecto.";
    FinSi
FinProceso
