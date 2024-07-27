//37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
Proceso Ejercicio37
	Definir a, b, temp Como Entero;
	
    Escribir "Ingrese el primer número: ";
    Leer a;
    Escribir "Ingrese el segundo número: ";
    Leer b;
	
    Si a < 0 Entonces
        a <- -a;
    FinSi
    Si b < 0 Entonces
        b <- -b;
    FinSi
	
    Mientras b <> 0 Hacer
        temp <- b;
        b <- a % b;
        a <- temp;
    FinMientras
	
    Escribir "El M.C.D. de los dos números es: ", a;
FinProceso
