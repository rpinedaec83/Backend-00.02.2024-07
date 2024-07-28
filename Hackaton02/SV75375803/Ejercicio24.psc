Proceso Ejercicio24
	//24.Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.
    Definir i, suma Como Entero
    
    // Inicializar la suma a 0
    suma = 0
    
    // Calcular la suma de los números pares desde 1 hasta 1000
    Para i = 1 Hasta 1000 Con Paso 1 Hacer
        Si i mod 2 = 0 Entonces
            suma = suma + i
        FinSi
    FinPara
    
    // Escribir el resultado
    Escribir "La suma de todos los números pares hasta 1000 es: ", suma
FinProceso