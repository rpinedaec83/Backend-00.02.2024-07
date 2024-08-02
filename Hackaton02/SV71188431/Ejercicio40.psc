//40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:

//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
Proceso Ejercicio40
	Definir palabra, longitud, x Como Entero
    Definir palindromo Como Lógico
    Escribir "Ingresar una palabra: "
    Leer palabra
    longitud <- Longitud(palabra)
    palindromo <- Verdadero
    Para x <- 1 Hasta longitud / 2 Con Paso 1 Hacer
        Si Subcadena(palabra, x, 1) <> Subcadena(palabra, longitud - x + 1, 1) Entonces
            palindromo <- Falso 
			Salir 
	FinSi
    FinPara
    Si palindromo Entonces
        Escribir "La palabra es un palindromo."
    Sino
        Escribir "La palabra no es un palindromo."
    FinSi
	
FinProceso
