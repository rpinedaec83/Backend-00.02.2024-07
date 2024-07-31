Proceso Ejercicio4
	// 4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
	Dimension lista[3]
	// Obtener 3 numeros
	Para i<-1 Hasta 3 Con Paso 1 Hacer
		Escribir "Ingrese un número entero"
		Leer num
		lista[i] = num
	Fin Para
	// Ordenar los numeros
	Para i<-1 Hasta 2 Con Paso 1 Hacer
		posMenor = i
		Para j<-i+1 Hasta 3 Con Paso 1 Hacer
			Si lista[j] < lista[posMenor] Entonces
				posMenor = j
			FinSi
		Fin Para
		// intercambiar posicion
		temp = lista[i]
		lista[i] = lista[posMenor]
		lista[posMenor] = temp
	Fin Para
	// Mostrar los numeros de menor a mayor
	Para i<-1 Hasta 3 Con Paso 1 Hacer
		Escribir lista[i]
	Fin Para
FinProceso
