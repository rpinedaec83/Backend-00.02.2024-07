Proceso prob5
	
	Definir cantidadZapatos Como Entero;
	Definir precioZapato, totalCompra, descuento Como Real;
	
	
	precioZapato <-80;
	

	Escribir "Ingrese la cantidad de zapatos que desea comprar:";
	Leer cantidadZapatos;
	
	
	totalCompra <- cantidadZapatos * precioZapato;
	
	
	Si cantidadZapatos > 30 Entonces
		descuento <- 0.40;
	SiNo
		Si cantidadZapatos > 20 Entonces
			descuento <- 0.20;
		SiNo
			Si cantidadZapatos > 10 Entonces
				descuento <-0.10;
			SiNo
				descuento <- 0;
			FinSi
		FinSi
	FinSi
	
	
	totalCompra <- totalCompra - (totalCompra * descuento);
	
	
	Escribir "El total de su compra con el descuento aplicado es: $", totalCompra;
FinProceso
