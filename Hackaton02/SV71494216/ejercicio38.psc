Proceso ejercicio38
	
	//Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
	
	Escribir "Ingrese un número:"
    Leer num
	
    Si num <= 0 Entonces
        Escribir "El número ingresado debe ser positivo."
    Sino
        suma <- 0

        Para i <- 1 Hasta (num / 2) Hacer
            Si num MOD i = 0 Entonces
                suma <- suma + i
            FinSi
        FinPara
		
        Si suma = num Entonces
            Escribir num, " es un número perfecto."
        Sino
            Escribir num, " no es un número perfecto."
        FinSi
    FinSi
	
FinProceso
