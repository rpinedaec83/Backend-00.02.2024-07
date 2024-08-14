Proceso Ejercicio26
	//26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
	Escribir "Ejercicio 26, Determinar el resto y cociente."
	Escribir "Por favor ingresar el dividendo:"
    Leer varDividendo
    Escribir "Por favor ingresar el divisor:"
    Leer varDivisor
	
	
	Si varDividendo <= 0 O varDivisor <= 0 Entonces
        Escribir "El dividendo o divisor debe ser un número entero positivo mayor que 0."
    Sino
        varCociente <- 0
        varResto <- varDividendo
		 
        Mientras varResto >= varDivisor
            varResto <- varResto - varDivisor
            varCociente <- varCociente + 1
        FinMientras
		
        Escribir "El valor calculado del cociente es: ", varCociente
        Escribir "El valor calculado del resto es: ", varResto
    FinSi	
	
FinProceso
