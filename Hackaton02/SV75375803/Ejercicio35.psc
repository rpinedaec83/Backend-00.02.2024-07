Proceso Ejercicio35
	//35. Hacer un algoritmo en Pseint que nos permita saber cual es el numero mayor y menor, se debe ingresar solo veinte numeros.
    Escribir "Ingrese el numero 1:"
    Leer numero
    mayor = numero
    menor = numero
    
    Para i = 2 Hasta 20 Con Paso 1 Hacer
        Escribir "Ingrese el numero ", i, ":"
        Leer numero
        
        Si numero > mayor Entonces
            mayor = numero
        FinSi
        
        Si numero < menor Entonces
            menor = numero
        FinSi
    FinPara
    
    Escribir "El numero mayor es: ", mayor
    Escribir "El numero menor es: ", menor
FinProceso