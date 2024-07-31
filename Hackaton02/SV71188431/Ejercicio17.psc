//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Proceso Ejercicio17
	Definir hora, minuto, segundo Como Entero
    Escribir "Ingresar la hora:"
    Leer hora
    Escribir "Ingresar el minuto:"
    Leer minuto
    Escribir "Ingresar el segundo:"
    Leer segundo
    segundo <- segundo + 1
    Si segundo >= 60 Entonces
        segundo <- 0
        minuto <- minuto + 1
        Si minuto >= 60 Entonces
            minuto <- 0
            hora <- hora + 1
            Si hora >= 24 Entonces
                hora <- 0
            FinSi
        FinSi
    FinSi
    Escribir "La hora después de un segundo es: ", hora, ":", minuto, ":", segundo
FinProceso
