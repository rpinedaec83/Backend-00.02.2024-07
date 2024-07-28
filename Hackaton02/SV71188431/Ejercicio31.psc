//31. Hacer un algoritmo en Pseint parar calcular la media de los números pares e impares, sólo se ingresará diez números.
Proceso Ejercicio31
Definir i, num, sumapares, sumaimpares, contadorpares, contadorimpares Como Entero;
Definir mediapares, mediaimpares Como Real;
sumapares<-0;
sumaimpares<-0;
contadorimpares<-0;
contadorpares<-0;
Para i<-1 Hasta 10 Con Paso 1 Hacer
	Escribir "Ingrese un numero";
	Leer num;
	Si num%2 = 0 Entonces
		sumapares<-sumapares+num;
		contadorpares<-contadorpares+1;
	SiNo
		sumaimpares<-sumaimpares+num;
		contadorimpares<-contadorimpares+1;
	FinSi
	Si contadorpares>0 Entonces
		mediapares<-sumapares/contadorpares;
	SiNo
		mediapares<-0;
	FinSi
	Si contadorimpares>0 Entonces
		mediaimpares<-sumaimpares/contadorimpares;
	SiNo
		mediaimpares<-0;
	FinSi
	
FinPara
Escribir "La media de los numeros pares es: ", mediapares;
Escribir "La media de los numeros pares es: ", mediaimpares;
FinProceso
