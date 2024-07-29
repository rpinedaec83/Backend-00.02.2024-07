//20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
Proceso Ejercicio20
	
	Definir numero1, numero2, numero3, numero4 Como Entero
    Definir mayor, pares Como Entero
    Escribir "Ingresar primer numero:"
    Leer numero1
    Escribir "Ingresar segundo numero:"
    Leer numero2
    Escribir "Ingresar tercer numero:"
    Leer numero3
    Escribir "Ingresar cuarto numero:"
    Leer numero4
    mayor <- numero1
    Si numero2 > mayor Entonces mayor <- numero2 
	FinSi
	Si numero3 > mayor Entonces mayor <- numero3 
	FinSi
	Si numero4 > mayor Entonces mayor <- numero4 
	FinSi
    pares <- 0
    Si numero1 mod 2 = 0 Entonces pares <- pares + 1 
	FinSi
	Si numero2 mod 2 = 0 Entonces pares <- pares + 1 
	FinSi
	Si numero3 mod 2 = 0 Entonces pares <- pares + 1 
	FinSi
	Si numero4 mod 2 = 0 Entonces pares <- pares + 1 
	FinSi
    Escribir "Cantidad de numeros pares: ", pares
    Escribir "El mayor numero es: ", mayor
    Si numero3 mod 2 = 0 Entonces
        Escribir "El cuadrado del segundo numero es: ", numero2 * numero2
    FinSi
    Si numero1 < numero4 Entonces
        Escribir "La media de los numeros es: ", (numero1 + numero2 + numero3 + numero4) / 4
    FinSi
    Si numero2 > numero3 Y numero3 >= 50 Y numero3 <= 700 Entonces
        Escribir "La suma de los numeros es: ", numero1 + numero2 + numero3 + numero4
    FinSi

	
FinProceso


