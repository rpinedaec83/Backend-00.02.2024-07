Proceso Ejercicio31
	// 31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.

	Definir suma_pares, suma_impares, contador_pares, contador_impares, num Como Real
    suma_pares <- 0
    suma_impares <- 0
    contador_pares <- 0
    contador_impares <- 0
    Para i <- 1 Hasta 10 Con Paso 1 Hacer
        Escribir "Ingrese un número:"
        Leer num
        Si num MOD 2 = 0 Entonces
            suma_pares <- suma_pares + num
            contador_pares <- contador_pares + 1
        Sino
            suma_impares <- suma_impares + num
            contador_impares <- contador_impares + 1
        FinSi
    FinPara
    Si contador_pares > 0 Entonces
        Escribir "La media de los números pares es: ", suma_pares / contador_pares
    Sino
        Escribir "No se ingresaron números pares."
    FinSi
    Si contador_impares > 0 Entonces
        Escribir "La media de los números impares es: ", suma_impares / contador_impares
    Sino
        Escribir "No se ingresaron números impares."
    FinSi
FinProceso	
