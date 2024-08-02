Proceso Ejercicio7
	// 7. Hacer un algoritmo en Pseint para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes:
	Escribir "Ingrese el tipo de cliente(A,B,C): "
	Leer tipo
	descuento = 0
	Si tipo ="A" Entonces
		descuento=10
	FinSi
	Si tipo ="B" Entonces
		descuento=15
	FinSi
	Si tipo ="C" Entonces
		descuento=20
	FinSi
	Escribir "Tiene un descuento de ", descuento,"%"
FinProceso
