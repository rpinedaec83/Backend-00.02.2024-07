Proceso Ejercicio27
    // Hacer un algoritmo en PSeInt para determinar la media de una lista indefinida de numeros positivos, 
	//se debe acabar el programa al ingresar un numero negativo.
    Definir numero, suma, contador, media Como Real
    Definir continuar Como Logico
    
    suma = 0
    contador = 0
    continuar = Verdadero
    
    Mientras continuar Hacer
        Escribir "Ingrese un numero positivo (o un numero negativo para terminar):"
        Leer numero
        
        Si numero < 0 Entonces
            continuar = Falso
        SiNo
            suma = suma + numero
            contador = contador + 1
        FinSi
    FinMientras
    
    Si contador > 0 Entonces
        media = suma / contador
        Escribir "La media de los numeros ingresados es: ", media
    SiNo
        Escribir "No se ingresaron numeros positivos."
    FinSi
FinProceso