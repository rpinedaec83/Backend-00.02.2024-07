Proceso Ejercicio36
	//36. Hacer un algoritmo en Pseint para calcular la serie de Fibonacci.
	Escribir "Ejercicio 36, Determinar la serie de Fibonacci."
	Escribir "Por favor ingrese la cantidad de datos a determinar en la serie de Fibonacci "
    Leer datoNum
		
    Si datoNum <= 0 Entonces
        Escribir "La cantidad de datos debe ser mayor o igual a 1."
    Sino
        a <- 0
        b <- 1		
        Escribir "La serie de Fibonacci calculada es: "
        Si datoNum > 1 Entonces
            Escribir "Inicio  = ",b
        FinSi
        Para i <- 2 Hasta datoNum
            c <- a + b
            Escribir a, "  +  ",b, " = ",c
            a <- b
            b <- c
        FinPara
	FinSi
	
FinProceso
