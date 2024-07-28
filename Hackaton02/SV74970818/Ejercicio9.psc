Proceso Ejercicio9
	// 9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
	Escribir "Digite su sueldo"
	Leer num
	porcentaje=0
	aumento=0
	Si num >= 2000
		porcentaje=5
		aumento=num*0.05
	SiNo
		porcentaje=10
		aumento=num*0.1
	FinSi
	Escribir "Le corresponde un aumento de ",porcentaje,"%: $",aumento
FinProceso
