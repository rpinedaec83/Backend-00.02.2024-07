Proceso ejercicio4
    Definir num1, num2, num3 Como Entero
    Escribir "Ingrese el primer n�mero:"
    Leer num1
    Escribir "Ingrese el segundo n�mero:"
    Leer num2
    Escribir "Ingrese el tercer n�mero:"
    Leer num3
    Si num1 <= num2 Y num1 <= num3 Entonces
        Escribir num1
        Si num2 <= num3 Entonces
            Escribir num2
            Escribir num3
        Sino
            Escribir num3
            Escribir num2
        FinSi
		SinoSi num2 <= num1 Y num2 <= num3 Entonces
        Escribir num2
        Si num1 <= num3 Entonces
            Escribir num1
            Escribir num3
        Sino
            Escribir num3
            Escribir num1
        FinSi
    Sino
        Escribir num3
        Si num1 <= num2 Entonces
            Escribir num1
            Escribir num2
        Sino
            Escribir num2
            Escribir num1
        FinSi
    FinSi
FinAlgoritmo