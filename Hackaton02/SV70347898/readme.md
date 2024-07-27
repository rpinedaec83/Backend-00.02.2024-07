Pesudocódigos del 1 al 13
Proceso Ejercicio1
	Escribir "Digite un número para determinar si tiene 3 dígitos"
	Leer a
	Si a > 99 Y a < 1000 Entonces
		Escribir "El número sí tiene 3 cifras"
	SiNo
		Escribir "El número no tiene 3 cifras"
	Fin Si
	
FinProceso

Proceso Ejercicio2
	Escribir "Introduzca un número para determinar si es negativo"
	Leer a
	Si a < 0 Entonces
		Escribir "El número es negativo"
	SiNo
		Escribir "El número es positivo"
	FinSi
FinProceso

Proceso Ejercicio3
	Escribir "Ingrese un número entero para determinar si termina en 4"
	Leer a
	Si a mod 10 = 4 Entonces
		Escribir "El número termina en 4"
	SiNo
		Escribir "El número no temrmina en 4"
	FinSi
FinProceso

Proceso Ejercicio4
	Escribir "Introduzca 3 numeros enteros para poder ordenarlos de menor a mayor. Introduzca el primero"
	Leer a
	Escribir "Introduzca el segundo"
	Leer b
	Escribir "Introduzca el tercero"
	Leer c
	Si a > b y b > c Entonces
		Escribir a ","  b ","  c
			SiNo Si a > c Y c > b Entonces
				Escribir a "," c "," b
					SiNo Si b>a Y a>c Entonces
						Escribir b "," a "," c	
							SiNo Si b>c Y c>a Entonces
								Escribir b "," c "," a	
									SiNo Si c>a Y a>b Entonces
											Escribir c "," a "," b	
										SiNo Si c>b Y b>a Entonces
												Escribir c "," b "," a	
											FinSi
										Finsi
									FinSi
								FinSi
							FinSi
						FinSi
FinProceso

Proceso Ejercicio5
	Escribir "Buen día, indique la cantidad de zapatos a comprar para poder determinar el descuento sobre el total de la compra"
	Leer a
	b<-80
	Si a<10 Entonces
		Escribir "Lo sentimos, su compra no tiene descuento"
	SiNo
		si a>=10 Y a<=20 Entonces
			Escribir "Felicidades, Usted tiene un descuento del 10%"
			Escribir "El valor de su compra es:$" b*a*0.9
		SiNo
			Si a>=21 Y a<=30
				Escribir "Felicidades, Usted tiene un descuento del 20%"
				Escribir "El valor de su compra es:$" b*a*0.8
			SiNo
				si a>30
					Escribir "Felicidades, Usted tiene un descuento del 30%"
					Escribir "El valor de su compra es:$" b*a*0.7
				FinSi
			FinSi
		FinSi
	FinSi
FinProceso

Proceso Ejercicio6
	Escribir "Señor Colaborador, buenos dias. Indique la cantidad de horas de trabajo a la semana para determinar su remuneración semanal."
	Escribir "Se considerará una escala de 20$ la hora por 40 horas o menos, y 25$ la hora extra por encima de las 40 horas."
	Leer a
	Si a <=40 Entonces
		Escribir "Su remuneración semanal será:$" a*20
	SiNo
		si a>40 Entonces
			Escribir "Su remuneración semanal será:$" ((a-(a-40))*20)+((a-40)*(25))
		FinSi
	FinSi
FinProceso

Proceso Ejercicio7
	Definir membresia Como Caracter
	Escribir "Estimado cliente, indique su tipo de membresía para poder calcularle el descuento obtenido"
	Leer membresia
		Si membresia == "A" Entonces
		Escribir "Su descuento será del 10%" 
	SiNo 
		si membresia == "B" Entonces
			Escribir "Su descuento será del 15%" 
			SiNo
			si membresia == "C" Entonces
				Escribir "Su descuento será del 20%" 
			FinSi
		Finsi
		
	FinSi
	
FinProceso

Proceso Ejercicio8
	Escribir "Estimado alumno, ingrese sus 3 notas para poder determinar si ha pasado el curso"
	Escribir "Ingrese la primera nota"
	Leer a
	Escribir "Ingrese la segunda nota"
	Leer b
	Escribir "Ingrese la tercera nota"
	Leer c
	Escribir "Su promedio actual es:" (a+b+c)/3
	Si (a+b+c)/3 >=16 Y (a+b+c)/3 <=20 Entonces
		Escribir "Usted esta aprobado por tener 16 o más de nota"
	SiNo
		Escribir "Usted se encuentra desaprobado por tener menos de 16"
	FinSi
FinProceso

Proceso Ejercicio9
	Escribir "Señor trabajador, por favor ingresar el monto que ha generado para determinar su aumento"
	Leer a
	Si a>=2000 Entonces
		Escribir "Usted se ha hecho acreedor a un aumento del 5%, esto quiere decir que percibirá un total de:$" a*1.05
	SiNo
		Si a<2000 Entonces
			Escribir "Usted se ha hecho acreedor a un aumento del 10%, esto quiere decir que percibirá un total de:$" a*1.1
		FinSi
	FinSi
	
FinProceso

Proceso Ejercicio10
	Escribir "Introduzca el número para determinar si es par o impar"
	Leer a
	Si a%2 == 0  Entonces
		Escribir "El número es par"
	SiNo
		Escribir "El número es impar"
	FinSi
	
FinProceso


Proceso Ejercicio11
	Escribir "Introduzca 03 números para determinar cual es mayor"
	Leer a
	Leer b
	Leer c
	Si a > b y b > c Entonces
		Escribir a ","  b ","  c
	SiNo Si a > c Y c > b Entonces
			Escribir a "," c "," b
		SiNo Si b>a Y a>c Entonces
				Escribir b "," a "," c	
			SiNo Si b>c Y c>a Entonces
					Escribir b "," c "," a	
				SiNo Si c>a Y a>b Entonces
						Escribir c "," a "," b	
					SiNo Si c>b Y b>a Entonces
							Escribir c "," b "," a	
						FinSi
					Finsi
				FinSi
			FinSi
		FinSi
	FinSi
FinProceso

Proceso Ejercicio12
	Escribir "Introduzca 2 numeros para determinar cual es el mayor"
	Leer a
	Leer b
	Si a>b Entonces
		Escribir "El número " a " el mayor"
	SiNo
		Escribir "El número " b " es el mayor"
	FinSi
	
FinProceso


Proceso Ejercicio13
	Definir a Como Caracter
	Escribir "Introduzca una letra para determinar si es vocal"
	Leer a
	Si a == "a" O a =="e" O a=="i" O a=="o" O a=="u" O a == "A" O a =="E" O a=="I" O a=="O" O a=="U" Entonces  
		Escribir "La letra " a " es vocal"
	SiNo
		Escribir "La letra " a " es consonante"
	FinSi
	
FinProceso

Proceso Ejercicio24
Definir rpta, contador Como Entero;
contador<-0;
suma<-0;
Para contador<-2 Hasta 1000 Con Paso 2 Hacer
	suma<-suma+contador;
Fin Para
Escribir "La suma de todos los numeros pares hasta 1000 es:", suma;

FinProceso

Proceso Ejercicio25
	Definir n, contador, factorial Como Entero;
	Escribir "Ingrese el número para calcular el factorial de un número de una forma distinta"
	Leer n;
	contador<-1;
	factorial<-1;
	Mientras contador <= n Hacer
		factorial<-factorial*contador;
		contador<-contador+1;
	Fin Mientras
	Escribir "El Factorial de: ",n,"es: ",factorial; 
	
	
FinProceso


Proceso Ejercicio26
	Definir dividendo, divisor, cociente, resto Como Entero;
	Escribir "Ingresa el dividendo:";
	Leer dividendo;
	Escribir "Ingresa el divisor:";
	Leer divisor;
	cociente <- 0;
	resto <- dividendo;
	Mientras resto >= divisor Hacer
		resto<-resto - divisor;
		cociente<- cociente + 1;
	FinMientras
	Escribir "El cociente es: ", cociente, " y el resto es: ", resto;
FinProceso

Proceso Ejercicio27
	Definir suma, contador, num, media Como Real;
	suma<-0; 
	contador<-0;
	Escribir "Ingrese un número positivo";
	Leer num;
	Mientras num>=0 Hacer
		suma<-suma+num;
		contador<-contador+1;
		Escribir "Ingrese otro número positivo o negativo";
		Leer num;
		FinMientras
		Si contador>0 Entonces
			media<-suma/contador;
		SiNo
			Escribir "No se ingresaron números positivos";
		FinSi
FinProceso


Proceso Ejercicio28
	Definir suma, contador Como Entero;
	suma<-0;
	contador<-1;
	Repetir
		suma<-suma+contador;
		contador<-contador+1;
	Hasta Que contador>100;
	Escribir "La suma de los primeros 100 numeros es: ", suma;
	
FinProceso

Proceso Ejercicio29
	Definir suma,contador Como Entero;
	suma<-0;
	contador<-1;
	Mientras contador<=100 Hacer
		suma<-suma+contador;
		contador<-contador+1;
		FinMientras
	Escribir "La suma de los primeros cien numeros es: ", suma;
FinProceso


Proceso Ejercicio30
	Definir i, suma Como Entero;
	suma<-0;
	i<-1;
	Para i<-1 Hasta 100 Con Paso 1 Hacer
		suma<-suma+i;
	FinPara
	Escribir "La suma de los primeros cien números es de: ", suma;
	
FinAlgoritmo


Proceso Ejercicio31
	Definir i, num, sumapares, sumaimpares, contadorpares, contadorimpares Como Entero;
	Definir mediapares, mediaimpares Como Real;
	sumapares<-0;
	sumaimpares<-0;
	contadorimpares<-0;
	contadorpares<-0;
	Para i<-1 Hasta 10 Con Paso 1 Hacer
		Escribir "Ingrese un número";
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
	Escribir "La media de los números impares es: ", mediaimpares;
	
FinProceso


Proceso Ejercicio34
Definir i, j Como Entero;
Para i<-1 Hasta 9 Con Paso 1 Hacer
	Escribir "Tabla de multiplicar del ", i, ":";
	Para j<-1 Hasta 12 Con Paso 1 Hacer
		Escribir i," x ", j ," = ", i*j;
	FinPara
	Escribir "";
FinPara

FinProceso


Proceso Ejercicio35
	Definir num, i, mayor, menor Como Entero;
	Escribir "Ingrese los numeros";
	Leer num;
	mayor<-num;
	menor<-num;
	Para i<-1 Hasta 20 Con Paso 1 Hacer
		Escribir "Ingrese el numero ", i, ":";
		Leer num;
		Si num>mayor Entonces
			mayor<-num;
		FinSi
		Si num<menor Entonces
			menor<-num;
		FinSi
	FinPara
	Escribir "El número mayor es: ", mayor;
	Escribir "El número menor es: ", menor;
		
FinProceso


Proceso Ejercicio36
	Definir a, b, n, c, i Como Entero;
	a <-0;
    b <-1;
	Escribir "Ingrese el número de términos de la serie Fibonacci";
	Leer n;
    Escribir a;
    Escribir b;
    Para i<-3 Hasta n Hacer;
        c<-a + b;
        Escribir c;
        a<-b;
        b<-c;
    FinPara

FinProceso


Definir a, b, temp Como Entero;
	
    Escribir "Ingrese el primer número: ";
    Leer a;
    Escribir "Ingrese el segundo número: ";
    Leer b;
	
    Si a < 0 Entonces
        a <- -a;
    FinSi
    Si b < 0 Entonces
        b <- -b;
    FinSi
	
    Mientras b <> 0 Hacer
        temp <- b;
        b <- a % b;
        a <- temp;
    FinMientras
	
    Escribir "El M.C.D. de los dos números es: ", a;
FinProceso


Proceso Ejercicio38
	Definir numero, suma, i Como Entero;
    Escribir "Ingrese un número: ";
    Leer numero;
    suma <- 0;
    Para i <- 1 Hasta numero-1 Hacer
        Si numero % i = 0 Entonces
            suma <- suma + i;
        FinSi
    FinPara
    Si suma = numero Entonces
        Escribir numero, " es un número perfecto.";
    Sino
        Escribir numero, " no es un número perfecto.";
    FinSi
FinAlgoritmo


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
