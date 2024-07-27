Proceso Ejercicio5
    // Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promocion de descuento para vender al mayor,
    // esta dependera del numero de zapatos que se compren. Si son mas de diez, se les dara un 10% de descuento sobre el total de la compra;
    // si el numero de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son mas de treinta zapatos
    // se otorgara un 40% de descuento. El precio de cada zapato es de $80.
    
    // Definir las variables
    definir numerozapatos Como Entero;
    definir resultado1 Como Real;
    
    // Solicitar al usuario el numero de zapatos
    Escribir "Ingrese el numero de zapatos a comprar";
    Leer numerozapatos;
    
    // Calcular el costo con el descuento correspondiente
    Si numerozapatos > 30 Entonces
        resultado1 <- (numerozapatos * 80) * 0.6
    Sino Si numerozapatos > 20 Entonces
			resultado1 <- (numerozapatos * 80) * 0.8
		Sino Si numerozapatos > 10 Entonces
				resultado1 <- (numerozapatos * 80) * 0.9
			Sino
				resultado1 <- numerozapatos * 80
			FinSi
		FinSi
	FinSi
			// Mostrar el resultado
			Escribir "El costo total es: $", resultado1;
FinProceso
