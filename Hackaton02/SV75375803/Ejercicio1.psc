Proceso Ejercicio1
	//1. Hacer un algoritmo en Pseint que lea un n?mero por el teclado y determinar si tiene tres d?gitos.
    definir num, cifras Como Entero;
    
    // 2. Solicitar el numero al usuario
    Escribir "Escribe un numero";
    Leer num;
    
    // 3. Obtener el valor absoluto del numero para tratar correctamente con negativos
    num <- abs(num);
    
    // 4. Contar las cifras del numero convirtiendolo a texto
    cifras <- longitud(ConvertirATexto(num));
    
    // 5. Verificar si el numero tiene tres digitos y mostrar el resultado
    Si cifras = 3 Entonces
        Escribir "El numero tiene tres digitos";
    Sino
        Escribir "El numero no tiene tres digitos";
    FinSi
FinProceso

