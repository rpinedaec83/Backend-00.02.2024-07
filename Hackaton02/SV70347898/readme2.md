/Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo.
Proceso Ejercicio14
	Definir num Como Entero;
	Escribir "Buenos dias, ingrese un numero del 1 al 10 para leerlo y determinar si es primo";
	Leer num;
	contador<-0;
	Para contador<-0 Hasta num Con Paso 1 Hacer
		Si num/num<-1
			Entonces
			acciones_por_verdadero
		SiNo
			acciones_por_falso
		FinSi
	FinPara
	
	
	
FinProceso


/ Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
Proceso Ejercicio15
	Definir a, b Como Real;
	Definir c Como Entero;
Escribir "Presione 1 si va a cambiar CM a PULGADAS, o presione 2 si va cambiar LB a kilos";
Leer c;
Si c=1 Entonces
	Escribir "Ingrese cuantos centímetros quiere transformar";
	Leer a;
	Escribir a, " centimetros equivale a: ", a/2.54, " pulgadas";
SiNo
	Si c=2 Entonces
		Escribir "Ingrese cuantas libras quiere transformar";
		Leer b;
		Escribir b, " libras equivale a: ", b*0.55, " kilos";
	FinSi
FinSi
FinProceso


/Hacer un algoritmo en Pseint que lea un número y según ese número, indique el día que corresponde.
Proceso Ejercicio16
	Definir Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo Como Caracter;
	Definir i, dia Como Entero;
	i<-1;
	Mientras i<=7 Hacer
		Escribir "Ingrese un número del 1 al 7 para designar el día que corresponda. El proceso se repetirá hasta 7 veces";
			Leer dia;
			Segun dia Hacer
				1:
					Escribir "Lunes";
				2:
					Escribir "Martes";
				3:
					Escribir "Miercoles";
				4:
					Escribir "Jueves";
				5:
					Escribir "Viernes";
				6:
					Escribir "Sabado";
				7:
					Escribir "Domingo";
				De Otro Modo:
					Escribir "Escriba un número del 1 al 7";
			FinSegun
			i<-i+1;
		FinMientras;
FinProceso


//18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. 
//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. 
//Los precios son:
//$10. Si se compran unidades separadas hasta 9.
//$8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
//$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. 
//Realizar un algoritmo en Pseint que dado un número de CDs a vender calcule el precio total para el cliente y 
//la ganancia para el vendedor.
Proceso Ejercicio18
	Definir unidades, i Como Entero;
	Definir ganancia Como Real;
	i<-1;
	Mientras i<=10 Hacer
		Escribir "Introduzca la cantidad de unidades vendidas. Tienes hasta 10 iteraciones";
		Leer unidades;
		Si unidades<=9 Entonces
			Escribir "El precio total es: $", unidades*10, " y la ganancia es de: $", unidades*10*0.0825;
		SiNo
			Si unidades>10 O unidades <=99 Entonces
				Escribir "El precio total es: $", unidades*8, " y la ganacia es de: $", unidades*8*0.0825;
				Si unidades>100 O unidades <=499 Entonces
					Escribir "El precio total es: $", unidades*7, " y la ganacia es de: $", unidades*7*0.0825;
					Si unidades>500 Entonces
						Escribir "El precio total es: $", unidades*6, " y la ganacia es de: $", unidades*6*0.0825;
					FinSi
				FinSi
			FinSi
		FinSi
	i<-i+1;
	FinMientras
FinProceso


//19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente 
//forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número 
//identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le 
//mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
Proceso Ejercicio19
	definir id, dias, salario Como Entero;
	Escribir "Ingrese el código de empleado. 1-> cajero 2->servidor 3->preparador de mezclas 4->mantenimiento";
	Leer id;
		Si id<=4 Entonces
			Escribir "Ingrese la cantidad de días trabajados";
			Leer dias;
			Si dias<=6 Entonces
				Segun id Hacer
					1:
						Escribir "El salario semanal del Cajero es de: $", dias*56;
					2:
						Escribir "El salario semanal del Servidor es de: $", dias*64;
					3:
						Escribir "El salario semanal del Preparador de Mezclas es de: $", dias*80;
					4:
						Escribir "El salario semanal del de Mantenimiento es de: $", dias*48;
					De Otro Modo:
						Escribir "Repita el proceso indicando un numero del 1 al 4";
				FinSegun
			Sino 
				Escribir "Los dias a la semana tienen que ser 6 o menos";
			FinSi
		SiNo
			Escribir "Los codigos son del 1 al 4";
		FinSi
FinProceso


Proceso Ejercicio20
	Definir n1, n2, n3, n4, num, mayor Como Entero;
	num<-0;
	mayor<-0;
	Escribir "Ingrese 4 numeros enteros positivos";
	Leer n1;
	Leer n2;
	Leer n3;
	Leer n4;
	Si n1%2=0 Entonces
		num<-num+1;
	Sino
		num<-num+0;
	Finsi
	Si n2%2=0 Entonces
		num<-num+1;
	Sino
		num<-num+0;	
	FinSi
	Si n3%2=0 Entonces
		num<-num+1;
	Sino
		num<-num+0;	
	FinSI
	Si n4%2=0 Entonces
		num<-num+1;
	SiNo
		num<-num+0;
	FinSi
	
	mayor<-n1;
	si n2>n1 Entonces
		mayor<-n2;
	FinSi
	si n3>n2 Entonces
		mayor<-n3;
	FinSi
	si n4>n3 Entonces
		mayor<-n4;
	FinSi
	Escribir "La cantidad de pares es:", num;
	Escribir "El número mayor es: ", mayor;
	Si n1<n4 Entonces
		Escribir "La media de los cuatro es: ", (n1+n2+n3+n4)/4;
	SiNo
		Escribir "No corresponde la media de los cuatro por ser el 4to numero mayor al primero";
	FinSi
	Si n2>n3 Entonces
		Si n3>=50 Y n3<=700 Entonces
			Escribir "La suma de los 4 números es: ", n1+n2+n3+n4;
		SiNo
			Escribir "No cumple con las condiciones para sumar los 4";
		FinSi
	Sino 
		Escribir "No cumple con las condiciones para sumar los 4";
	FinSi
FinProceso


