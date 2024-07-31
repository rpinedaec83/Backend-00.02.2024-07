Proceso prob14
	
    Definir num, i, esPrimo Como Entero;
	
  
    Escribir "Ingrese un número del 1 al 9:";
    Leer num;
	
  
    Si num < 1 O num > 9 Entonces
        Escribir "El número no está en el rango permitido.";
    SiNo
        // Inicialización de la variable esPrimo
        esPrimo <- 1;
		
        // Determinar si el número es primo
        Para i <- 2 Hasta num - 1 Con Paso 1 Hacer
            Si num % i = 0 Entonces
                esPrimo <- 0;
            FinSi;
        FinPara;
		

        Si esPrimo = 1 Entonces
            Escribir "El número es primo.";
        SiNo
            Escribir "El número no es primo.";
        FinSi;
    FinSi;
FinProceso
