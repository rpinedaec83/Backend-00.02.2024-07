Proceso Prob3
	//Hacer un algoritmo en Pseint que lea un n�mero y determinar si termina en 4. 
	Definir num Como Entero;
    Definir ultimo_digito Como real;
	
    Escribir "Ingrese un n�mero: ";
    Leer num;

    ultimo_digito <- num % 10;
	
    Si ultimo_digito = 4 Entonces
        Escribir "El n�mero termina en 4.";
    Sino
        Escribir "El n�mero no termina en 4.";
    FinSi
FinProceso
