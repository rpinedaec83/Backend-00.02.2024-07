Proceso Ejercicio04
	//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
	Definir numero1,numero2, numero3 Como entero
	Escribir "Ingrese primer numero"
	Leer numero1
	Escribir "Ingrese segundo numero"
	Leer numero2
	Escribir "ingrese tercer numero"
	Leer numero3
	//se comprar los 3 numeros ingresados entre ellos para determinar quien es mayor, medio y menor
	Si numero1 < numero2 y numero1 < numero3 Entonces
        numeromenor = numero1
        Si numero2 < numero3 Entonces
            numeromedio = numero2
            numeromayor = numero3
        SiNo
            numeromedio = numero3
            numeromayor = numero2
        FinSi
    SiNo
        Si numero2 < numero1 y numero2 < numero3 Entonces
            numeromenor = numero2
            Si numero1 < numero3 Entonces
                numeromedio = numero1
                numeromayor = numero3
            SiNo
                numeromedio = numero3
                numeromayor = numero1
            FinSi
        SiNo
            numeromenor = numero3
            Si numero1 < numero2 Entonces
                numeromedio = numero1
                numeromayor = numero2
            SiNo
                numeromedio = numero2
                numeromayor = numero1
            FinSi
        FinSi
    FinSi
	Escribir "Numero menor ",numeromenor
	Escribir "Numero medio ",numeromedio
	Escribir "Numero mayor ",numeromayor
FinProceso
