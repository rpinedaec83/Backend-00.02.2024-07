Proceso Ejercicio20
	//20. Hacer un algoritmo en Pseint que que lea 4 n�meros enteros positivos y verifique y realice las siguientes operaciones:
	
    //¿Cuantos numeros son Pares?
	
    //¿Cual es el mayor de todos?
	
    //Si el tercero es par, calcular el cuadrado del segundo.
		
	//Si el primero es menor que el cuarto, calcular la media de los 4 numeros.
			
	//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
	//Si cumple se cumple la segunda condicion, calcular la suma de los 4 numeros.

		// Definir las variables
		Definir num1, num2, num3, num4, pares, mayor, suma Como Entero
		Definir media, cuadradoSegundo Como Real
		
		// Leer los 4 numeros enteros positivos
		Escribir "Ingrese el primer numero positivo:"
		Leer num1
		Escribir "Ingrese el segundo numero positivo:"
		Leer num2
		Escribir "Ingrese el tercer numero positivo:"
		Leer num3
		Escribir "Ingrese el cuarto numero positivo:"
		Leer num4
		
		// Inicializar el contador de numeros pares
		pares = 0
		
		// Verificar cuuntos numeros son pares
		Si num1 mod 2 = 0 Entonces
			pares = pares + 1
		FinSi
		
		Si num2 mod 2 = 0 Entonces
			pares = pares + 1
		FinSi
		
		Si num3 mod 2 = 0 Entonces
			pares = pares + 1
		FinSi
		
		Si num4 mod 2 = 0 Entonces
			pares = pares + 1
		FinSi
		
		Escribir "Cantidad de numeros pares: ", pares
		
		// Determinar el mayor de todos
		mayor = num1
		Si num2 > mayor Entonces
			mayor = num2
		FinSi
		
		Si num3 > mayor Entonces
			mayor = num3
		FinSi
		
		Si num4 > mayor Entonces
			mayor = num4
		FinSi
		
		Escribir "El mayor de todos los numeros es: ", mayor
		
		// Si el tercero es par, calcular el cuadrado del segundo
		Si num3 mod 2 = 0 Entonces
			cuadradoSegundo = num2 * num2
			Escribir "El cuadrado del segundo numero es: ", cuadradoSegundo
		FinSi
		
		// Si el primero es menor que el cuarto, calcular la media de los 4 numeros
		Si num1 < num4 Entonces
			media = (num1 + num2 + num3 + num4) / 4
			Escribir "La media de los 4 numeros es: ", media
		FinSi
		
		// Si el segundo es mayor que el tercero, verificar si el tercero est� comprendido entre 50 y 700
		Si num2 > num3 Entonces
			Si num3 >= 50 Y num3 <= 700 Entonces
				suma = num1 + num2 + num3 + num4
				Escribir "La suma de los 4 numeros es: ", suma
			FinSi
		FinSi
FinProceso
