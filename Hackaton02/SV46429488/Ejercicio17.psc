Proceso Ejercicio17
	//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
	Escribir "Ejercicio 17, Determinar la hora dentro de un segundo."
	Escribir "Por favor, ingresar la hora en formato hh24:mm:ss"
	Leer horaIngresada
	
	hora=Subcadena(horaIngresada,1,2)
	minuto=Subcadena(horaIngresada,4,2)
	segundo=Subcadena(horaIngresada,7,2)
	
    thora = ConvertirANumero(hora)
	tminuto = ConvertirANumero(minuto)
	tsegundo = ConvertirANumero(segundo)
    
    tsegundo = tsegundo + 1
    
    Si tsegundo = 60 Entonces
        tsegundo = 0
        tminuto = tminuto + 1
        Si tminuto = 60 Entonces
            tminuto = 0
            thora = thora + 1
            Si thora = 24 Entonces
                thora = 0
            FinSi
        FinSi
    FinSi
    
    horaFormatted = ""
    minutoFormatted = ""
    segundoFormatted = ""
    
    
    Si thora < 10 Entonces
        horaFormatted = "0" + ConvertirATexto(thora)
    Sino
        horaFormatted = ConvertirATexto(thora)
    FinSi
    
    Si tminuto < 10 Entonces
        minutoFormatted = "0" + ConvertirATexto(tminuto)
    Sino
        minutoFormatted = ConvertirATexto(tminuto)
    FinSi
    
    Si tsegundo < 10 Entonces
        segundoFormatted = "0" + ConvertirATexto(tsegundo)
    Sino
        segundoFormatted = ConvertirATexto(tsegundo)
    FinSi
    
    Escribir "La hora después de un segundo es: ", horaFormatted, ":", minutoFormatted, ":", segundoFormatted

		
		
FinProceso
