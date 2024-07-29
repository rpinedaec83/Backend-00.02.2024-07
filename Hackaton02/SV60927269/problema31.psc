Proceso prob31
	Definir i, num, sumaPares, sumaImpares, contadorPares, contadorImpares Como Entero;
    Definir mediaPares, mediaImpares Como Real;
    
    // Inicializar las variables
    sumaPares <- 0;
    sumaImpares <- 0;
    contadorPares <- 0;
    contadorImpares <- 0;
	
    // Leer diez números y calcular las sumas y los contadores
    Para i <- 1 Hasta 10 Hacer
        Escribir "Ingrese un número: ";
        Leer num;
		
        Si num % 2 = 0 Entonces
            // Es par
            sumaPares <- sumaPares + num;
            contadorPares <- contadorPares + 1;
        Sino
            // Es impar
            sumaImpares <- sumaImpares + num;
            contadorImpares <- contadorImpares + 1;
        FinSi
    FinPara
	
    // Calcular las medias
    Si contadorPares > 0 Entonces
        mediaPares <- sumaPares / contadorPares;
    Sino
        mediaPares <- 0;
    FinSi
	
    Si contadorImpares > 0 Entonces
        mediaImpares <- sumaImpares / contadorImpares;
    Sino
        mediaImpares <- 0;
    FinSi
	
    // Mostrar las medias
    Escribir "La media de los números pares es: ", mediaPares;
    Escribir "La media de los números impares es: ", mediaImpares;
FinProceso

