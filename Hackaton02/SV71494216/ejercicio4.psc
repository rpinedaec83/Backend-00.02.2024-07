Proceso ejercicio4
	//Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor
	Definir n1,n2,n3 Como Entero
	Escribir "Ingrese el primer número: "
    Leer n1
    Escribir "Ingrese el segundo número: "
    Leer n2
    Escribir "Ingrese el tercer número: "
    Leer n3
	Si (n1 <= n2 Y n1 <= n3) Entonces
        Si (n2 <= n3) Entonces
            Escribir "Los números en orden de menor a mayor: ", n1, ", ", n2, ", ", n3
        Sino
            Escribir "Los números en orden de menor a mayor: ", n1, ", ",n3, ", ", n2
        FinSi
    Sino
        Si (n2 <= n1 Y n2 <= n3) Entonces
            Si (n1 <= n3) Entonces
                Escribir "Los números en orden de menor a mayor: ", n2, ", ", n1, ", ", n3
            Sino
                Escribir "Los números en orden de menor a mayor: ", n2, ", ", n3, ", ", n1
            FinSi
        Sino
            Si (n1 <= n2) Entonces
                Escribir "Los números en orden de menor a mayor: ", n3, ", ", n1, ", ", n2
            Sino
                Escribir "Los números en orden de menor a mayor: ", n3, ", ", n2, ", ", n1
            FinSi
        FinSi
    FinSi

FinProceso
