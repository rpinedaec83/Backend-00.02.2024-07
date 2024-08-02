Proceso Ejercicio20
	// Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
	// ¿Cuántos números son Pares?
	// ¿Cuál es el mayor de todos?
	// Si el tercero es par, calcular el cuadrado del segundo.
	// Si el primero es menor que el cuarto, calcular la media de los 4 números.
	// Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	
	Definir num1, num2, num3, num4 Como Entero
    Definir mayorNum, pares Como Entero
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
    Escribir "Ingrese el tercer número:"
    Leer num3
    Escribir "Ingrese el cuarto número:"
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
    Escribir "Cantidad de números pares: ", pares
    Escribir "El mayor número es: ", mayorNum
    Si num3 MOD 2 = 0 Entonces
        Escribir "El cuadrado del segundo número es: ", num2 * num2
    FinSi
    Si num1 < num4 Entonces
        Escribir "La media de los números es: ", (num1 + num2 + num3 + num4) / 4
    FinSi
    Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
        Escribir "La suma de los números es: ", num1 + num2 + num3 + num4
    FinSi
FinProceso
