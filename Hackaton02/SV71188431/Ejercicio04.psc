//4. Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor.
Proceso Ejercicio04
	Definir digito1, digito2, digito3 Como Entero
    Escribir "Ingrese el primer digito:"
    Leer digito1
    Escribir "Ingrese el segundo digito:"
    Leer digito2
    Escribir "Ingrese el tercer digito:"
    Leer digito3
    Si digito1 <= digito2 Y digito1 <= digito3 Entonces
        Escribir digito1
        Si digito2 <= digito3 Entonces
            Escribir digito2
            Escribir digito3
        Sino
            Escribir digito3
            Escribir digito2
        FinSi
		Sino Si digito2 <= digito1 Y digito2 <= digito3 Entonces
        Escribir digito2
        Si digito1 <= digito3 Entonces
            Escribir digito1
            Escribir digito3
        Sino
            Escribir digito3
            Escribir digito1
        FinSi
    Sino
        Escribir digito3
        Si digito1 <= digito2 Entonces
            Escribir digito1
            Escribir digito2
        Sino
            Escribir digito2
            Escribir digito1
        FinSi
    FinSi
	FinSi
FinProceso

