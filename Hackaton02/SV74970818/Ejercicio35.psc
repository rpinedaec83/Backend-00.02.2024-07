Proceso Ejercicio35
	// 35. Hacer un algoritmo en Pseint que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.
	mayor = 0
	menor = 0
	Para i<-1 Hasta 20 Hacer
		Escribir "Ingrese el numero ",i
		Leer num
		Si i==1 Entonces
			mayor=num
			menor=num	
		SiNo
			Si mayor < num Entonces
				mayor=num
			FinSi
			Si menor>num Entonces
				menor=num
			FinSi
		FinSi
	FinPara
	Escribir "EL numero mayor es: ", mayor
	Escribir "EL numero menor es: ", menor
FinProceso
