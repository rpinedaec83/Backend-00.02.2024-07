Proceso Ejercicio23
	//Hacer un algoritmo en Pseint para calcular la suma de los numeros impares menores o iguales a n.
		Definir n, i, suma Como Entero
		
		// Inicializar la suma a 0
		suma = 0
		
		// Leer el valor de n
		Escribir "Ingrese un numero entero positivo n:"
		Leer n
		
		// Calcular la suma de los numeros impares menores o iguales a n
		Para i = 1 Hasta n Con Paso 1 Hacer
			Si i mod 2 <> 0 Entonces
				suma = suma + i
			FinSi
		FinPara
		
		// Escribir el resultado
		Escribir "La suma de los numeros impares menores o iguales a ", n, " es: ", suma
FinProceso
