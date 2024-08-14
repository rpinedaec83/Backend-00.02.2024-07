Algoritmo Ejercicio20
//Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//  ¿Cuántos números son Pares?	
//¿Cuál es el mayor de todos?
//Si el tercero es par, calcular el cuadrado del segundo.
//Si el primero es menor que el cuarto, calcular la media de los 4 números.
//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	
	Definir a, b, c, d como entero
	Escribir "Ingrese 4 valores positivos:"
	Leer a, b, c, d
	pares = 0
	
	si a  % 2 = 0 Entonces
		pares = pares  + 1
	FinSi
	
	si b % 2 = 0  Entonces
		pares = pares  + 1
	FinSi
	
	si c % 2 = 0 Entonces
		pares = pares  + 1
	FinSi
	
	si d % 2 = 0 Entonces
		pares = pares  + 1
	FinSi
	
	Escribir "La cantidad de numeros pares es:" pares
	
	si a > b y a > c y a > d Entonces
		nummayor = a
		Escribir "El numero mayor es:" nummayor 
	sino 
		si a < b y b > c y b > d entonces
			nummayor = b
			Escribir "El numero mayor es:" nummayor 
		sino 
			si c > a y c > b y c > d Entonces
				nummayor = c
				Escribir "El numero mayor es:" nummayor 
			sino 
				si d > a y d > b y d > c Entonces
					nummayor = d
					Escribir "El numero mayor es:" nummayor 
				FinSi
			FinSi
		FinSi
		
	FinSi
	
	si c % 2 = 0 Entonces
		resultado = b * b
		Escribir "Ya que " c " es par, el cuadrado de " b " es: " resultado
	sino 
		Escribir c  " NO ES PAR"
	FinSi
	
	si b > c y c >= 50 y c <= 700 Entonces
		suma= (a + b + c + d) / 4
		Escribir "La  media de los numeros es:" suma
	sino 
		Escribir  "Ya que " b " no es mayor a " c " y/o " c " no es mayor o igual a 50 y a su vez menor o igual a 700, no se calcula la media"
	FinSi
	
	
	
FinAlgoritmo
