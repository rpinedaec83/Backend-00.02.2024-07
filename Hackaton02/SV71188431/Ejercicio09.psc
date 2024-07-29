//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
//se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
Proceso Ejercicio09
	Definir ganancia, aumento Como Real
    Escribir "Ingrese el pago actual del trabajador:"
    Leer ganancia
    Si ganancia > 2000 Entonces
        aumento <- ganancia * 0.05
    Sino
        aumento <- ganancia * 0.10
    FinSi
    Escribir "El aumento es de: ", aumento
FinProceso
