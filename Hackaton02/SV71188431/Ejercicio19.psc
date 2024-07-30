//19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
// El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). 
//Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
Proceso Ejercicio19
	
	Definir idempleado, diastrabajados Como Entero
    Escribir "Ingresar el número identificador del empleado:"
    Leer idempleado
    Escribir "Ingresar la cantidad de días trabajados en la semana (máx. 6 días):"
    Leer diastrabajados
    Segun idempleado Hacer
        1: Escribir "El monto a pagar al cajero es: ", diastrabajados * 56
        2: Escribir "El monto a pagar al servidor es: ", diastrabajados * 64
        3: Escribir "El monto a pagar al preparador de mezclas es: ", diastrabajados * 80
        4: Escribir "El monto a pagar al personal de mantenimiento es: ", diastrabajados * 48
        De Otro modo: Escribir "El numero de empleado no es valido."
    FinSegun
	
FinProceso
