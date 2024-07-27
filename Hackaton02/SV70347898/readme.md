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