Proceso ejercicio20
// Hacer un algoritmo en Pseint que que lea 4 números enteros positivos
//y verifique y realice las siguientes operaciones:
//¿Cuántos números son Pares?
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
//Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	
	Definir num1, num2, num3, num4 Como Entero
	contador = 0
	cuadrado = 0
	media = 0
	suma = 0
    Definir mayor, pares Como Entero
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2
    Escribir "Ingrese el tercer número:"
    Leer num3
    Escribir "Ingrese el cuarto número:"
    Leer num4
	
	si num1 mod 2 = 0 Entonces
		contador = contador + 1 
	FinSi
	si num2 mod 2 = 0 Entonces
		contador = contador + 1 
	FinSi
	si num3 mod 2 = 0 Entonces
		contador = contador + 1 
		cuadrado = num2 * num2
	FinSi
	si num4 mod 2 = 0 Entonces
		contador = contador + 1 
	FinSi
	
	suma = num1 + num2 + num3 + num4
	
	si num1 < num4 Entonces
		media = suma / 4
		Escribir "La media de los cuatros numeros ingresados es  : " , media	 
	FinSi
	si num2 > num3 Entonces
		si num2 >= 50  Y num2 <= 700 Entonces
			Escribir "El tercer valor esta comprendido entre 50 y 700"
		SiNo
			Escribir "El tercer valor no esta comprendido entre 50 y 700"
		FinSi
	FinSi
	Escribir "Cantidad de números pares: ", contador
	Escribir "La suma de los 4 numeros es : " , suma

FinProceso
