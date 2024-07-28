//39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:

//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
Proceso Ejercicio39
	Definir n, i Como Entero;
    Definir PY, termino Como Real;
	
    Escribir "Ingrese la cantidad de términos para la aproximación: ";
    Leer n;
	
    PY <- 0;
	
    Para i <- 0 Hasta n-1 Hacer
        Si i % 2 = 0 Entonces
            termino <- 4 / (2 * i + 1);
        Sino
            termino <- -4 / (2 * i + 1);
        FinSi
        PY <- PY + termino;
    FinPara
	
    Escribir "La aproximación de pi con ", n, " términos es: ", PY;
FinProceso