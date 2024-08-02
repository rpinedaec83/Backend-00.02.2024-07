//37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
Proceso Ejercicio37
	Definir numero1, numero2, residuo Como Entero;
	
    Escribir "Ingrese el primer número: ";
    Leer numero1;
    Escribir "Ingrese el segundo número: ";
    Leer numero2;
	
    Si numero1 < 0 Entonces
        numero1 <- -numero1;
    FinSi
    Si numero2 < 0 Entonces
        numero2 <- -numero2;
    FinSi
	
    Mientras numero2 <> 0 Hacer
        residuo <- numero2;
        numero2 <- numero1 % numero2;
        numero1 <- residuo;
    FinMientras
	
    Escribir "El M.C.D. de los dos números es: ", numero1;
	
FinProceso
