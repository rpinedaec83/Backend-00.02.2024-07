Proceso Ejercicio20
	// Hacer un algoritmo en Pseint que que lea 4 n�meros enteros positivos y verifique y realice las siguientes operaciones:
	// �Cu�ntos n�meros son Pares?
	// �Cu�l es el mayor de todos?
	// Si el tercero es par, calcular el cuadrado del segundo.
	// Si el primero es menor que el cuarto, calcular la media de los 4 n�meros.
	// Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condici�n, calcular la suma de los 4 n�meros.
	
	Definir num1, num2, num3, num4 Como Entero
    Definir mayorNum, pares Como Entero
    Escribir "Ingrese el primer n�mero:"
    Leer num1
    Escribir "Ingrese el segundo n�mero:"
    Leer num2
    Escribir "Ingrese el tercer n�mero:"
    Leer num3
    Escribir "Ingrese el cuarto n�mero:"
    Leer num4
    mayorNum <- num1
    Si num2 > mayorNum Entonces 
		mayorNum <- num2 
	FinSi
    Si num3 > mayorNum Entonces 
		mayorNum <- num3 
	FinSi
    Si num4 > mayorNum Entonces 
		mayorNum <- num4
	FinSi
    pares <- 0
    Si num1 MOD 2 = 0 Entonces 
		pares <- pares + 1
	FinSi
    Si num2 MOD 2 = 0 Entonces 
		pares <- pares + 1
	FinSi
    Si num3 MOD 2 = 0 Entonces 
		pares <- pares + 1
	FinSi
    Si num4 MOD 2 = 0 Entonces 
		pares <- pares + 1
	FinSi
    Escribir "Cantidad de n�meros pares: ", pares
    Escribir "El mayor n�mero es: ", mayorNum
    Si num3 MOD 2 = 0 Entonces
        Escribir "El cuadrado del segundo n�mero es: ", num2 * num2
    FinSi
    Si num1 < num4 Entonces
        Escribir "La media de los n�meros es: ", (num1 + num2 + num3 + num4) / 4
    FinSi
    Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
        Escribir "La suma de los n�meros es: ", num1 + num2 + num3 + num4
    FinSi
FinProceso
