//Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.
Proceso Ejercicio15
	Definir cm, pulg, lib, kg Como Real
	Escribir "Ingresar Cantidad de Centimetros"
	Leer cm
	Escribir "Ingresar Cantidad de Libras"
	Leer lib
	
	pulg = cm / 2.54
	kg = lib * 0.453592
	
	Escribir cm, " centímetros son ", pulg, " pulgadas"
	Escribir lib, " libras son ", kg, " kilogramos"
FinProceso
