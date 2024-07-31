Proceso Ejercicio9
    // 9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
    // se debe tomar en cuenta que si ganaba mas de $2000 tendra un aumento del 5%, 
    // si ganaba menos de $2000 su aumento sera de un 10%.
	
    // Definir las variables
    Definir sueldotrabajador Como Real
    Definir aumentodinero Como Real 
    
    // Solicitar el sueldo actual del trabajador
    Escribir "Escribir el sueldo actual"
    Leer sueldotrabajador
    
    // Determinar el aumento segun el sueldo actual
    Si sueldotrabajador > 2000 Entonces
        aumentodinero <- sueldotrabajador * 0.05
    Sino
        aumentodinero <- sueldotrabajador * 0.1
    FinSi
    
    // Mostrar el resultado
    Escribir "Debido a que el sueldo es $", sueldotrabajador, ", su aumento sera de: $", aumentodinero
FinProceso
