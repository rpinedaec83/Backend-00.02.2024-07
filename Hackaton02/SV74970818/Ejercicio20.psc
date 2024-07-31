Proceso Ejercicio20
	// 20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
	Escribir "Digite el primer numero"
	Leer num1
	Escribir "Digite el segundo numero"
	Leer num2
	Escribir "Digite el tercer numero"
	Leer num3
	Escribir "Digite el cuarto numero"
	Leer num4
	contadorPar=0
	mayor=0
	cuadrado=0
	media=0
	suma=0
	//¿Cuántos números son Pares?
	Si num1 % 2 = 0 Entonces
		contadorPar=contadorPar+1
	FinSi
	Si num2 % 2 = 0 Entonces
		contadorPar=contadorPar+1
	FinSi
	Si num3 % 2 = 0 Entonces
		contadorPar=contadorPar+1
		cuadrado=num2*num2
	FinSi
	Si num4 % 2 = 0 Entonces
		contadorPar=contadorPar+1
	FinSi
	Escribir "La cantidad de pares es: ",contadorPar
	
	//¿Cuál es el mayor de todos?
	Si num1 > num2 y num1 > num3 y num1 > num4 Entonces
		mayor = num1
	FinSi
	Si  num2 > num1 y num2 > num3 y num2 > num4 Entonces
		mayor = num2
	FinSi
	Si  num3 > num1 y num3 > num2 y num3 > num4 Entonces
		mayor = num3
	FinSi
	Si  num4 > num1 y num4 > num2 y num4 > num3 Entonces
		mayor = num4
	FinSi
	Escribir "El mayor de todos es: ",mayor
		
	//Si el tercero es par, calcular el cuadrado del segundo.\
	Si cuadrado<>0 Entonces
		Escribir "El cuadrado del segundo es: ",cuadrado
	FinSi
	
	//Si el primero es menor que el cuarto, calcular la media de los 4 números.
	Si	num1<num4 Entonces
		media=(num1+num2+num3+num4)/4
		Escribir "La media de los 4 numeros es: ", media
	FinSi
	
	// Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
	Si	num2>num3 Entonces
		Si num3 >= 50 y num3 <= 70 Entonces
			suma=num1+num2+num3+num4
			Escribir "La suma de los 4 numeros es: ", suma
		FinSi
	FinSi
	
FinProceso
