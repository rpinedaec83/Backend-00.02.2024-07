Proceso Ejercicio18
	// 18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribuci�n de CD v�rgenes. 
	// Los clientes pueden adquirir los art�culos (supongamos un �nico producto de una �nica marca) por cantidad. Los precios son:
    // $10. Si se compran unidades separadas hasta 9.
	// $8. Si se compran entre 10 unidades hasta 99.
	// $7. Entre 100 y 499 unidades.
	// $6. Para mas de 500 unidades.
	// La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un n�mero de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.
	
	Definir cantidad, precio Como Entero
	Definir ganancia_vendedor Como Real
    Escribir "Ingrese la cantidad de CDs a vender:"
    Leer cantidad
    Si cantidad <= 9 Entonces
        precio <- cantidad * 10
	Sino
	Si cantidad <= 99 Entonces
        precio <- cantidad * 8
	Sino
	Si cantidad <= 499 Entonces
        precio <- cantidad * 7
    Sino
        precio <- cantidad * 6
    FinSi
	FinSi
	FinSi 
    ganancia_vendedor <- precio * 0.0825
    Escribir "El precio total para el cliente es: ", precio
    Escribir "La ganancia para el vendedor es: ", ganancia_vendedor
FinProceso
