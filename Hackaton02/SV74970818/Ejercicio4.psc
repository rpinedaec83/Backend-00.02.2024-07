Proceso Ejercicio4
	// 4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
	Escribir "Digite el primer numero"
	Leer num1
	Escribir "Digite el segundo numero"
	Leer num2
	Escribir "Digite el tercer numero"
	Leer num3
	menor=0
	medio=0
	mayor=0
	Si num1 < num2 y num1< num3 Entonces
		menor =  num1
		Si num2 < num3 Entonces
			medio = num2
			mayor = num3
		SiNo
			medio = num3
			mayor = num2
		FinSi
	FinSi
	Si  num2 < num1 y num2 < num3 Entonces
        menor = num2
        Si num1 < num3 Entonces
            medio = num1
            mayor = num3
        Sino
            medio = num3
            mayor = num1
        FinSi
	FinSi
	Si  num3 < num1 y num3 < num2 Entonces
        menor = num3
        Si num1 < num2 Entonces
            medio = num1
            mayor = num2
        Sino
            medio = num2
            mayor = num1
        FinSi
    FinSi	
	Escribir "De menor a mayor: ", menor,"->",medio,"->",mayor
FinProceso
