Proceso Ejercicio20
	//20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique 
	//y realice las siguientes operaciones:
	//¿Cuántos números son Pares?
	//¿Cuál es el mayor de todos?
	//Si el tercero es par, calcular el cuadrado del segundo.
	//Si el primero es menor que el cuarto, calcular la media de los 4 números.
	//Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido 
	//entre los valores 50 y 700. Si cumple se cumple la segunda condición, 
	//calcular la suma de los 4 números.
	Escribir "Ejercicio 20, Evaluar 04 números enteros"
	dimensionar datos[4]
	Escribir "Por favor ingrese el primer número entero"
	leer datos[1]
	Escribir "Por favor ingrese el segundo número entero"
	leer datos[2]
	Escribir "Por favor ingrese el tercer número entero"
	leer datos[3]
	Escribir "Por favor ingrese el cuarto número entero"
	leer datos[4]
	
    cantPares <- 0
    numMayor <- 0
	 
	 
    Si datos[1] MOD 2 = 0 Entonces
        cantPares <- cantPares + 1
    FinSi
    Si datos[2] MOD 2 = 0 Entonces
        cantPares <- cantPares + 1
    FinSi
    Si datos[3] MOD 2 = 0 Entonces
        cantPares <- cantPares + 1
    FinSi
    Si datos[4] MOD 2 = 0 Entonces
        cantPares <- cantPares + 1
    FinSi
	
	numMayor <- datos[1]
    Si datos[2] > numMayor Entonces
        numMayor <- datos[2]
    FinSi
    Si datos[3] > numMayor Entonces
        numMayor <- datos[3]
    FinSi
    Si datos[4] > numMayor Entonces
        numMayor <- datos[4]
    FinSi
	
    Escribir "Ope1. La cantidad de números pares es: ", cantPares
    Escribir "Ope2. El número mayor de los cuatro es: ", numMayor
	
    Si datos[3] MOD 2 = 0 Entonces
        cuadradoSegundo <- datos[2] * datos[2]
        Escribir "Ope3. El tercer valor es par y el cuadrado del segundo número es: ", cuadradoSegundo
    FinSi
	
	Si datos[1] < datos[4] Entonces
        media <- (datos[1] + datos[2] + datos[3] + datos[4]) / 4
        Escribir "Ope4. El primer número es menor que el cuarto, la media de los cuatro números es: ", media
    FinSi
	
	Si datos[2] > datos[3] Entonces
        Si datos[3] >= 50 Y datos[3] <= 700 Entonces
            suma <- datos[1] + datos[2] + datos[3] + datos[4]
            Escribir "Ope5. El segundo es mayor que el tercero, la suma de los cuatro números es: ", suma
        FinSi
    FinSi
	
FinProceso
 
