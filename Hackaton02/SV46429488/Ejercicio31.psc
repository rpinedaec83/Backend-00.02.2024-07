Proceso Ejercicio31
	//31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, 
	//sólo se ingresará diez números.
	Escribir "Ejercicio 31, Determinar la media de los números pares e impares"
	dimensionar datos[10]
	Escribir "Por favor ingrese el primer número entero"
	leer datos[1]
	Escribir "Por favor ingrese el segundo número entero"
	leer datos[2]
	Escribir "Por favor ingrese el tercer número entero"
	leer datos[3]
	Escribir "Por favor ingrese el cuarto número entero"
	leer datos[4]
	Escribir "Por favor ingrese el quinto número entero"
	leer datos[5]
	Escribir "Por favor ingrese el sexto número entero"
	leer datos[6]
	Escribir "Por favor ingrese el septimo número entero"
	leer datos[7]
	Escribir "Por favor ingrese el octavo número entero"
	leer datos[8]
	Escribir "Por favor ingrese el noveno número entero"
	leer datos[9]
	Escribir "Por favor ingrese el decimo número entero"
	leer datos[10]
	
	totalPar <- 0
	totalImpar <- 0
    cantPares <- 0
    cantImpares <- 0
	
	Si datos[1] MOD 2 = 0 Entonces
        cantPares <- cantPares + 1
		totalPar<-datos[1]
		SiNo
			cantImpares <- cantImpares +1
			totalImpar<-datos[1]
    FinSi
    Si datos[2] MOD 2 = 0 Entonces
        cantPares <- cantPares + 1
		totalPar<-datos[2]+totalPar
		SiNo
			cantImpares <- cantImpares +1
			totalImpar<-datos[2]+totalImpar
    FinSi
    Si datos[3] MOD 2 = 0 Entonces
        cantPares <- cantPares + 1
		totalPar<-datos[3]+totalPar
		SiNo
			cantImpares <- cantImpares +1
			totalImpar<-datos[3]+totalImpar
    FinSi
    Si datos[4] MOD 2 = 0 Entonces
        cantPares <- cantPares + 1
		totalPar<-datos[4]+totalPar
		SiNo
			cantImpares <- cantImpares +1
			totalImpar<-datos[4]+totalImpar
    FinSi
	Si datos[5] MOD 2 = 0 Entonces
        cantPares <- cantPares + 1
		totalPar<-datos[5]+totalPar
		SiNo
			cantImpares <- cantImpares +1
			totalImpar<-datos[5]+totalImpar
    FinSi
    Si datos[6] MOD 2 = 0 Entonces
        cantPares <- cantPares + 1
		totalPar<-datos[6]+totalPar
		SiNo
			cantImpares <- cantImpares +1
			totalImpar<-datos[6]+totalImpar
    FinSi
    Si datos[7] MOD 2 = 0 Entonces
        cantPares <- cantPares + 1
		totalPar<-datos[7]+totalPar
		SiNo
			cantImpares <- cantImpares +1
			totalImpar<-datos[7]+totalImpar
    FinSi
    Si datos[8] MOD 2 = 0 Entonces
        cantPares <- cantPares + 1
		totalPar<-datos[8]+totalPar
		SiNo
			cantImpares <- cantImpares +1
			totalImpar<-datos[8]+totalImpar
    FinSi
	Si datos[9] MOD 2 = 0 Entonces
        cantPares <- cantPares + 1
		totalPar<-datos[9]+totalPar
		SiNo
			cantImpares <- cantImpares +1
			totalImpar<-datos[9]+totalImpar
    FinSi
    Si datos[10] MOD 2 = 0 Entonces
        cantPares <- cantPares + 1
		totalPar<-datos[10]+totalPar
		SiNo
			cantImpares <- cantImpares +1
			totalImpar<-datos[10]+totalImpar
    FinSi
	
	Si 0 < cantPares Entonces
        media <- (totalPar) / cantPares
        Escribir "La cantidad de pares es ",cantPares," y la suma de pares es ",totalPar," por lo que la media de pares es: ", media
    FinSi
	
	Si 0 < cantImpares Entonces
        mediaI <- (totalImpar) / cantImpares
        Escribir "La cantidad de impares es ",cantImpares," y la suma de impares es ",totalImpar," por lo que la media de impares es: ", mediaI
    FinSi
	
	
	
FinProceso
