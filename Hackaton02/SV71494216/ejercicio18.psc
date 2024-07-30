Proceso ejercicio18
//Hacer un algoritmo en Pseint para una empresa se encarga de la venta y distribución de CD vírgenes. 
//Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad.
//Los precios son:
//$10. Si se compran unidades separadas hasta 9.					
//$8. Si se compran entre 10 unidades hasta 99.
//$7. Entre 100 y 499 unidades.
//$6. Para mas de 500 unidades.
//La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en Pseint que dado
//un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.

    Escribir "Ingrese la cantidad de CDs a vender:"
	Leer cantidad 
	
	si (cantidad >= 1 Y cantidad <= 9) Entonces
		precioPorCD = 10
	SiNo
		si (cantidad >= 10 Y cantidad <= 99) Entonces
			precioPorCD = 8
		SiNo
			si (cantidad >= 100 Y cantidad <= 499) Entonces
				precioPorCD = 7
			SiNo
				si cantidad >= 500 Entonces
					precioPorCD = 6
				FinSi
				
			FinSi
		FinSi
	FinSi

	preciototal = cantidad * precioPorCD
	Escribir "Precio total a pagar por el cliente es ",precioTotal," soles"
	gananciavende = precioTotal * 8.25/100
	Escribir "La ganancia para el vendendor es ",gananciavende, " soles"

    
FinProceso
