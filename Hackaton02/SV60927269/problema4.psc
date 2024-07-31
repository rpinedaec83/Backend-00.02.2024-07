Proceso prob4
	//Hacer un algoritmo en Pseint que lea tres n�meros enteros y los muestre de menor a mayor.
	Definir a,b,c Como Entero;
	Escribir "Escribe 3 numeros que sean diferentes";
	Leer a;
	Leer b;
	Leer c;
	Si a > b Entonces
        Si a > c Entonces
            Si b > c Entonces
                Escribir "El orden es: ", c, " ", b, " ", a;
            Sino
                Escribir "El orden es: ", b, " ", c, " ", a;
            FinSi
        Sino
            Escribir "El orden es: ", b, " ", a, " ", c;
        FinSi
    Sino
        Si b > c Entonces
            Si a > c Entonces
                Escribir "El orden es: ", c, " ", a, " ", b;
            Sino
                Escribir "El orden es: ", a, " ", c, " ", b;
            FinSi
        Sino
            Escribir "El orden es: ", a, " ", b, " ", c;
        FinSi
    FinSi
FinProceso
