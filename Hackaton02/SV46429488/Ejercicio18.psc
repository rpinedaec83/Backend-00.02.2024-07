Proceso Ejercicio18
	//18. Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución 
	//de CD vírgenes. 
	//Los clientes pueden adquirir los artículos (supongamos un único producto 
	//de una única marca) por cantidad. Los precios son:
	
	//$10. Si se compran unidades separadas hasta 9.
	//$8. Si se compran entre 10 unidades hasta 99.
	//$7. Entre 100 y 499 unidades.
	//$6. Para mas de 500 unidades.
	//La ganancia para el vendedor es de 8,25 % de la venta. 
	//Realizar un algoritmo en Pseint que dado un número de CDs a vender 
	//calcule el precio total para el cliente y la ganancia para el vendedor.
	
	Escribir "Ejercicio 18, Venta y Distribucion de CD virgenes"
	Escribir "Por favor ingresar la cantidad de unidades a vender: "
	Leer cantCDs
	precioTotal=0
	gananciaVendedor=0
	
	si cantCDs<=9 Entonces
		precioTotal=cantCDs*10
		gananciaVendedor=precioTotal*0.0825
		Escribir "El precio total por ",cantCDs," unidades es: $",precioTotal
		Escribir "La ganancia para el vendedor es: $", gananciaVendedor
	SiNo
		si cantCDs>9 Y cantCDs<=99 Entonces
			precioTotal=cantCDs*8
			gananciaVendedor=precioTotal*0.0825
			Escribir "El precio total por ",cantCDs," unidades es: $",precioTotal
			Escribir "La ganancia para el vendedor es: $", gananciaVendedor
		sino 
			si cantCDs>99 Y cantCDs<=499 Entonces
				precioTotal=cantCDs*7
				gananciaVendedor=precioTotal*0.0825
				Escribir "El precio total por ",cantCDs," unidades es: $",precioTotal
				Escribir "La ganancia para el vendedor es: $", gananciaVendedor
			SiNo
				si cantCDs>499 Entonces
					precioTotal=cantCDs*6
					gananciaVendedor=precioTotal*0.0825
					Escribir "El precio total por ",cantCDs," unidades es: $",precioTotal
					Escribir "La ganancia para el vendedor es: $", gananciaVendedor
				FinSi		
			FinSi
		FinSi
	FinSi
	
FinProceso
