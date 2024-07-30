Proceso Ejercicio37
	// 37. Hacer un algoritmo en Pseint para conseguir el M.C.D de un número por medio del algoritmo de Euclides.
	Escribir "Ingrese el primer número: "
    Leer num1
    Escribir "Ingrese el segundo número: "
    Leer num2
	
	var =0
	Mientras num2 <> 0 Hacer
		var= num2
        num2 = num1 % num2
        num1 = var
	FinMientras
	
	Escribir"El MCD es: ", num1
FinProceso
