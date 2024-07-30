Proceso Ejercicio38
	// 38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
    Definir n, suma, i Como Entero
    Escribir "Ingrese un número: "
    Leer n
    suma = 0
    Para i = 1 Hasta n - 1 Hacer
        Si n % i = 0 Entonces
            suma <- suma + i
        FinSi
    FinPara
    Si suma = n Entonces
        Escribir "El número ", n, " es un número perfecto."
    SiNo
        Escribir "El número ", n, " no es un número perfecto."
    FinSi
FinProceso
