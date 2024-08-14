Algoritmo Ejercicio18
	
//Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribuci�n de CD v�rgenes. Los clientes pueden adquirir los art�culos (supongamos un �nico producto de una �nica marca) por cantidad. Los precios son:
	
//  $10. Si se compran unidades separadas hasta 9.				
//	$8. Si se compran entre 10 unidades hasta 99.					
//	$7. Entre 100 y 499 unidades.					
//	$6. Para mas de 500 unidades.						
//	La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado un n�mero de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

	
	Escribir "Ingrese la cantidad de CDs a comprar:"
	leer cant
	
	si cant <= 9 Entonces
		precio = cant * 10
	SiNo
		si cant <= 99 Entonces
			precio = cant * 8
		SiNo
			si cant <= 499 Entonces
				precio = cant * 7
			FinSi
		precio = cant * 6
		FinSi
	
			FinSi
			
			ganancia = precio * (8/100)
			
			Escribir "El precio total para el cliente sera de:" precio
			Escribir "La ganancia para el vendedor sera de:" ganancia
FinAlgoritmo
