Proceso Ejercicio40
	// 40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
	Escribir "Ingrese el termino n para aproximar PI con la serie de Nilakantha: "
    Leer num
	sum=3
	Para i<-1 Hasta num Hacer
		Si i%2=0 Entonces
			sum=sum-4/((i*2)*(i*2+1)*(i*2+2))
		SiNo
			sum=sum+4/((i*2)*(i*2+1)*(i*2+2))
		FinSi
	FinPara
	Escribir "El valor aproximado de Pi es: ", sum
FinProceso
