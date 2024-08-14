Algoritmo Ejercicio19
//Hacer un algoritmo en Pseint para una helader�a se tienen 4 tipos de empleados ordenados de la siguiente forma con su n�mero identificador y salario diario correspondiente:			
//  Cajero (56$/d�a).			
//	Servidor (64$/d�a).			
//	Preparador de mezclas (80$/d�a).			
//	Mantenimiento (48$/d�a).			
//El due�o de la tienda desea tener un programa donde s�lo ingrese dos n�meros enteros que representen al n�mero identificador del empleado y la cantidad de d�as que trabaj� en la semana (6 d�as m�ximos). Y el programa le mostrar� por pantalla la cantidad de dinero que el due�o le debe pagar al empleado que ingres�
	
	Definir identificador, dias_trabajados Como Entero
    Escribir "Ingrese el n�mero identificador del empleado 1 al 4 segun corresponda:"
    Leer identificador
    Escribir "Ingrese la cantidad de d�as trabajados en la semana (m�x. 6 d�as):"
    Leer cant_dias
    Segun identificador Hacer
        1: Escribir "El monto a pagar al cajero es: ", cant_dias * 56
        2: Escribir "El monto a pagar al servidor es: ", cant_dias * 64
        3: Escribir "El monto a pagar al preparador de mezclas es: ", cant_dias * 80
        4: Escribir "El monto a pagar al personal de mantenimiento es: ", cant_dias * 48
        Otro: Escribir "N�mero de empleado no v�lido."
    FinSegun
	
FinAlgoritmo
