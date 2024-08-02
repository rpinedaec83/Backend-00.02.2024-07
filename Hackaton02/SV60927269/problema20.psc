Proceso prob20
	
    Definir num1, num2, num3, num4, pares, mayor, cuadradoSegundo, media, suma Como Entero;
	
   
    Escribir "Ingrese el primer número:";
    Leer num1;
    Escribir "Ingrese el segundo número:";
    Leer num2;
    Escribir "Ingrese el tercer número:";
    Leer num3;
    Escribir "Ingrese el cuarto número:";
    Leer num4;
	
   
    pares <- 0;
    mayor <- num1;
	
   
    Si num1 % 2 = 0 Entonces
        pares <- pares + 1;
    FinSi;
    Si num2 % 2 = 0 Entonces
        pares <- pares + 1;
    FinSi;
    Si num3 % 2 = 0 Entonces
        pares <- pares + 1;
    FinSi;
    Si num4 % 2 = 0 Entonces
        pares <- pares + 1;
    FinSi;
	
    
    Si num2 > mayor Entonces
        mayor <- num2;
    FinSi;
    Si num3 > mayor Entonces
        mayor <- num3;
    FinSi;
    Si num4 > mayor Entonces
        mayor <- num4;
    FinSi;
	
    
    Escribir "La cantidad de números pares es: ", pares;
    Escribir "El mayor de los cuatro números es: ", mayor;
	
    
    Si num3 % 2 = 0 Entonces
        cuadradoSegundo <- num2 * num2;
        Escribir "El cuadrado del segundo número es: ", cuadradoSegundo;
    FinSi;
	
    
    Si num1 < num4 Entonces
        media <- (num1 + num2 + num3 + num4) / 4;
        Escribir "La media de los cuatro números es: ", media;
    FinSi;
	
    
    Si num2 > num3 Entonces
        Si num3 >= 50 y num3 <= 700 Entonces
            suma <- num1 + num2 + num3 + num4;
            Escribir "La suma de los cuatro números es: ", suma;
        FinSi;
    FinSi;
FinProceso
