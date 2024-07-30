Proceso Ejercicio8
	// 8. Hacer un algoritmo en Pseint para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
	Escribir "Digite el primer numero"
	Leer num1
	Escribir "Digite el segundo numero"
	Leer num2
	Escribir "Digite el tercer numero"
	Leer num3
	promedio=(num1+num2+num3)/3
	aprueba=""
	Si promedio >=10.5 Entonces
		aprueba="Si aprueba"
	SiNo
		aprueba="No aprueba"
	FinSi
	Escribir "La nota minima para aprobar es 10.5(11)"
	Escribir "Su promedio es de: ",promedio
	Escribir "Usted ", aprueba
FinProceso
