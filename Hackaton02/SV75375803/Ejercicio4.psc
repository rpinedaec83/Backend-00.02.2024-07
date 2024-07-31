Proceso Ejercicio4
    // 4. Hacer un algoritmo en Pseint que lea tres numeros enteros y los muestre de menor a mayor.
    definir num1, num2, num3, temp Como Entero;
    
    // Solicitar los tres numeros al usuario
    Escribir "Escribe el primer numero";
    Leer num1;
    Escribir "Escribe el segundo numero";
    Leer num2;
    Escribir "Escribe el tercer numero";
    Leer num3;
    
    Si num1 > num2 Entonces
        temp <- num1;
        num1 <- num2;
        num2 <- temp;
    FinSi
    
    Si num1 > num3 Entonces
        temp <- num1;
        num1 <- num3;
        num3 <- temp;
    FinSi
    
    Si num2 > num3 Entonces
        temp <- num2;
        num2 <- num3;
        num3 <- temp;
    FinSi
    
    // Mostrar los numeros de menor a mayor
    Escribir "Los numeros ordenados de menor a mayor son: ", num1, ", ", num2, ", ", num3;
FinProceso
