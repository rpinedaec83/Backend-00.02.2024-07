Proceso Ejercicio21
	//21. Hacer un algoritmo en Pseint que permita calcular el factorial de un número.	
	Escribir "Ejercicio 21, Determinar el factorial de un número."
	Escribir "Por favor ingresar el número a factorizar"
	Leer numFactorizar
	resultado=0
	
	
	Si numFactorizar < 0 Entonces
        Escribir "El valor ingresado es invalido, debe ser un entero positivo."
    Sino
		expresion <- ""
		Para i <- numFactorizar Hasta 1 
			Si i = numFactorizar Entonces 
				expresion <- ConvertirATexto(i)
			Sino
				expresion <- expresion + "x" + ConvertirATexto(i)
			FinSi
		Fin Para
		Escribir "Cálculo del factorial de !", numFactorizar, "=",expresion
		
		resultado <- 1
        Para i <- 1 Hasta numFactorizar
            resultado <- resultado * i
        FinPara
		
        Escribir "El resultado de la operacion !", numFactorizar, " es:",resultado
    FinSi
	
	
FinProceso
