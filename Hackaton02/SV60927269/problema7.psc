Algoritmo prob7
	
	Definir tipoMembresia Como entero;
	Definir totalCompra, descuento, totalConDescuento Como Real;
	
	
	Escribir "Ingrese el tipo de membresía (1_A, 2_B, 3_C):";
	Leer tipoMembresia;
	
	
	Escribir "Ingrese el total de la compra:";
	Leer totalCompra;
	
	
	descuento <- 0;
	
	
	Segun tipoMembresia Hacer
		1:descuento <- 0.10;
		2: descuento <- 0.15;
		3: descuento <- 0.20;
		De Otro Modo:
			Escribir "Tipo de membresía no válido. No se aplicará descuento.";
	FinSegun;
	
	
	totalConDescuento <- totalCompra - (totalCompra * descuento);
	
	
	Escribir "El total de su compra con el descuento aplicado es: $", totalConDescuento;
FinAlgoritmo
