//Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en
//cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000
//su aumento será de un 10%.
Proceso Ejercicio9
	Definir sueldo, aumento, sueldoNuevo Como Real
	Escribir "Ingrese sueldo de Trabajador: "
	Leer sueldo
	
	Si sueldo > 2000 Entonces
		aumento = sueldo * 0.05
	Sino
		aumento = sueldo * 0.10
	Fin Si
	
	sueldoNuevo = sueldo + aumento
	
	Escribir "Sueldo actual: ", sueldo
	Escribir "Aumento: ", aumento
	Escribir "Sueldo nuevo: ", sueldoNuevo
FinProceso
