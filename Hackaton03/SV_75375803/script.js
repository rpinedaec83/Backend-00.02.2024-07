//*1. Hacer un algoritmo en JavaScript que lea un número por el teclado y determinar si tiene tres dígitos.*//

function ejercicio1() {
    try {
        console.log("Ejercicio 1");
    let strNumero = prompt("Digita un numero");
    let intNumero = parseInt(strNumero);
    if (!isNaN(intNumero)) {
        let arrNumero = strNumero.split("");
        if (arrNumero.length == 3) {
        alert("Si tiene 3 digitos");
        } else {
        alert("No tiene 3 digitos");
        }
    } else {
        throw "No es un numero"
    }
        } catch (error) {
            alert("No es un numero");
    }
}


//*2. Hacer un algoritmo en JavaScript que lea un número entero por el teclado y determinar si es negativo.
function ejercicio2() {
    try {
        console.log("Ejercicio 2");
        let strNumero = prompt("Digita un número entero");

        // Convertir la entrada a número
        let numero = parseInt(strNumero, 10);

        // Verificar si la entrada es un número válido
        if (isNaN(numero)) {
            alert("Por favor, ingresa un número entero válido.");
            return;
        }

        // Verificar si el número es negativo
        if (numero < 0) {
            alert("El número es negativo.");
        } else {
            alert("El número no es negativo.");
        }
    } catch (error) {
        alert("Ocurrió un error:", error);
    }
}


//*3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.*//
function ejercicio3() {
    try {
        console.log("Ejercicio 3");
        let strNumero = prompt("Digita un número entero");

        // Convertir la entrada a número
        let numero = parseInt(strNumero, 10);

        // Verificar si la entrada es un número válido
        if (isNaN(numero)) {
            alert("Por favor, ingresa un número entero válido.");
            return;
        }

        // Verificar si el numero termina en 4 (ya sea positivo o negativo)
        if (numero % 10 === 4 || numero % 10 === -4) {
            alert("El número termina en 4.");
        } else {
            alert("El número no termina en 4.");
        }
    } catch (error) {
        alert("Ocurrió un error:", error);
    }
}


//*4. Hacer un algoritmo en JavaScript que lea tres números enteros y los muestre de menor a mayor.*//
function ejercicio4() {
    try {
        console.log("Ejercicio 4");
        let strNumero1 = prompt("Digita el primer número entero");
        let strNumero2 = prompt("Digita el segundo número entero");
        let strNumero3 = prompt("Digita el tercer número entero");

        // Convertir las entradas a números
        let numero1 = parseInt(strNumero1, 10);
        let numero2 = parseInt(strNumero2, 10);
        let numero3 = parseInt(strNumero3, 10);

        // Verificar si las entradas son números válidos
        if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
            alert("Por favor, ingresa números enteros válidos.");
            return;
        }

        // Crear un array con los números
        let numeros = [numero1, numero2, numero3];

        // Ordenar el array de menor a mayor
        numeros.sort(function(a, b) {
            return a - b;
        });

        // Mostrar los números ordenados
        console.log("Números ordenados de menor a mayor: " + numeros.join(", "));
        alert("Números ordenados de menor a mayor: " + numeros.join(", "));
    } catch (error) {
        alert("Ocurrió un error:", error);
    }
}

//*5. Hacer un algoritmo en JavaScript para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.*//

function ejercicio5() {
    try {
        console.log("Tienda de Zapatos - Promoción de Descuento");
        let strCantidad = prompt("Ingresa la cantidad de zapatos que deseas comprar");
        
        // Convertir la entrada a número
        let cantidad = parseInt(strCantidad, 10);

        // Verificar si la entrada es un número válido
        if (isNaN(cantidad) || cantidad <= 0) {
            console.log("Por favor, ingresa una cantidad válida de zapatos.");
            return;
        }

        // Definir el precio de cada zapato
        const precioPorZapato = 80;
        
        // Calcular el total sin descuento
        let totalSinDescuento = cantidad * precioPorZapato;
        let descuento = 0;

        // Aplicar el descuento según la cantidad de zapatos
        if (cantidad > 30) {
            descuento = 0.40;
        } else if (cantidad > 20) {
            descuento = 0.20;
        } else if (cantidad > 10) {
            descuento = 0.10;
        }

        // Calcular el total con descuento
        let totalConDescuento = totalSinDescuento * (1 - descuento);

        // Mostrar el total a pagar
        console.log("Total sin descuento: $" + totalSinDescuento.toFixed(2));
        console.log("Descuento aplicado: " + (descuento * 100) + "%");
        console.log("Total con descuento: $" + totalConDescuento.toFixed(2));
        alert("Total sin descuento: $" + totalSinDescuento.toFixed(2) + "\nDescuento aplicado: " + (descuento * 100) + "%\nTotal con descuento: $" + totalConDescuento.toFixed(2));
    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}


//*6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora*//

function ejercicio6() {
    try {
        console.log("Sueldo semanal + pago por hora extra");
        let strHorasTrabajo = prompt("Ingresa las horas trabajadas esta semana");
        
        // Convertir la entrada a número
        let horasTrabajo = parseInt(strHorasTrabajo, 10);

        // Verificar si la entrada es un número válido
        if (isNaN(horasTrabajo) || horasTrabajo < 0) {
            console.log("Por favor, ingresa una cantidad válida de horas laborales.");
            return;
        }

        // Definir el pago por hora laboral y el pago por hora extra
        const pagoPorHora = 20;
        const pagoPorHoraExtra = 25;

        // Inicializar las variables para el cálculo del pago
        let pagoRegular = 0;
        let pagoExtra = 0;

        // Calcular el pago regular y el pago extra
        if (horasTrabajo <= 40) {
            pagoRegular = horasTrabajo * pagoPorHora;
        } else {
            pagoRegular = 40 * pagoPorHora;
            let horasExtras = horasTrabajo - 40;
            pagoExtra = horasExtras * pagoPorHoraExtra;
        }

        // Calcular el total de pago semanal
        let totalPagoLaboral = pagoRegular + pagoExtra;

        // Mostrar el total a pagar
        console.log("Total de pago semanal: $" + totalPagoLaboral.toFixed(2));
        alert("Total de pago semanal: $" + totalPagoLaboral.toFixed(2));
    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}


//*7. Hacer un algoritmo en JavaScript para una tienda de helado que da un descuento por compra a sus clientes con membresía dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos son los siguientes://

//*Tipo A 10% de descuento*//
//*Tipo B 15% de descuento*//
//*Tipo C 20% de descuento*//

function ejercicio7() {
    try {
        let entradaTipo = prompt("Ingresa tu tipo de membresía: A, B o C");

        if (entradaTipo === null || entradaTipo.trim() === "") {
            alert("No ingresaste ninguna membresía.");
            return;
        }

        // Convertir la entrada a mayúsculas para manejar entradas en minúsculas
        entradaTipo = entradaTipo.trim().toUpperCase();

        // Inicializar la variable para el descuento
        let descuento = 0;

        // Definir el descuento
        if (entradaTipo === "A") {
            descuento = 0.10;
        } else if (entradaTipo === "B") {
            descuento = 0.15;
        } else if (entradaTipo === "C") {
            descuento = 0.20;
        } else {
            console.log("No existe un tipo de membresía válido.");
            alert("No existe un tipo de membresía válido.");
            return;
        }

        // Mostrar el descuento indicado
        console.log("Elegiste el tipo " + entradaTipo + ", por lo que tu descuento es de: " + (descuento * 100) + "%");
        alert("Elegiste el tipo " + entradaTipo + ", por lo que tu descuento es de: " + (descuento * 100) + "%");

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*8. Hacer un algoritmo en JavaScript para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.//

function ejercicio8() {
    try {
        console.log("Ejercicio 4");
        let strNota1 = prompt("Digita el primer número entero");
        let strNota2 = prompt("Digita el segundo número entero");
        let strNota3 = prompt("Digita el tercer número entero");

        // Convertir las entradas a números
        let Nota1 = parseFloat(strNota1, 10);
        let Nota2 = parseFloat(strNota2, 10);
        let Nota3 = parseFloat(strNota3, 10);

        // Verificar si las entradas son números válidos y no son negativas
        if (isNaN(Nota1) || isNaN(Nota2) || isNaN(Nota3) || Nota1 < 0 || Nota2 < 0 || Nota3 < 0) {
            alert("Por favor, ingresa notas válidas y mayores o iguales a 0.");
            return;
        }

        //Calcular el promedio de notas
        let promedionotas = (Nota1 + Nota2 + Nota3) / 3; 

        
        //Indicar si aprobó o desaprobó
        if (promedionotas >= 14) {
            resultadoFinal = "Aprobado"
        } else {
            resultadoFinal = "Desaprobado"
        }

        // Mostrar el promedio de notas
        console.log("El promedio minimo es 14, y el alumno obtuvo " + promedionotas.toFixed(2) + " , por lo que el alumno está: " + resultadoFinal);
        alert("El promedio minimo es 14, y el alumno obtuvo " + promedionotas.toFixed(2) + " , por lo que el alumno está: " + resultadoFinal);
    } catch (error) {
        alert("Ocurrió un error:", error);
    }
}


//*9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.//

function ejercicio9() {
    try {
        console.log("Calcular aumento de salario");

        let strSalario = prompt("Ingresa tu salario actual");

        // Convertir la entrada a número
        let salario = parseFloat(strSalario);

        // Verificar si la entrada es un número válido y no negativa
        if (isNaN(salario) || salario < 0) {
            alert("Por favor, ingresa un salario válido y mayor o igual a 0.");
            return;
        }

        // Inicializar la variable para el aumento
        let aumento = 0;

        // Definir el aumento basado en el salario actual
        if (salario > 2000) {
            aumento = 0.05;
        } else {
            aumento = 0.10;
        }

        // Calcular el nuevo salario
        let nuevoSalario = salario + (salario * aumento);

        // Mostrar el nuevo salario y el porcentaje de aumento
        console.log("Salario actual: $" + salario.toFixed(2));
        console.log("Aumento: " + (aumento * 100) + "%");
        console.log("Nuevo salario: $" + nuevoSalario.toFixed(2));
        alert("Salario actual: $" + salario.toFixed(2) + "\nAumento: " + (aumento * 100) + "%\nNuevo salario: $" + nuevoSalario.toFixed(2));

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}


//*10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.//

function ejercicio10() {
    try {
        console.log("Determinar si un número es par o impar");

        let strNumero = prompt("Ingresa un número");

        // Convertir la entrada a número
        let numero = parseFloat(strNumero);

        // Verificar si la entrada es un número válido
        if (isNaN(numero)) {
            alert("Por favor, ingresa un número válido.");
            console.log("Entrada inválida: ", strNumero);
            return;
        }

        //? Determinar si el número es par o impar, el uso de "?"" omite el uso de "IF" "ELSE"
        let resultado = (numero % 2 === 0) ? "par" : "impar";

        // Mostrar el resultado
        console.log("El número " + numero + " es " + resultado);
        alert("El número " + numero + " es " + resultado);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}


//*11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.//

function ejercicio11() {
    try {
        console.log("Determinar el mayor de tres números");

        let strNumero1 = prompt("Ingresa el primer número");
        let strNumero2 = prompt("Ingresa el segundo número");
        let strNumero3 = prompt("Ingresa el tercer número");

        // Convertir las entradas a números
        let numero1 = parseFloat(strNumero1);
        let numero2 = parseFloat(strNumero2);
        let numero3 = parseFloat(strNumero3);

        // Verificar si las entradas son números válidos
        if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
            alert("Por favor, ingresa números válidos.");
            console.log("Entrada inválida: ", strNumero1, strNumero2, strNumero3);
            return;
        }

        // Determinar el mayor número
        let mayor = Math.max(numero1, numero2, numero3);

        // Mostrar el resultado
        console.log("El mayor de los tres números es: " + mayor);
        alert("El mayor de los tres números es: " + mayor);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}


//*12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.//*

function ejercicio12() {
    try {
        console.log("Determinar el mayor de dos números");

        let strNumero1 = prompt("Ingresa el primer número");
        let strNumero2 = prompt("Ingresa el segundo número");

        // Convertir las entradas a números
        let numero1 = parseFloat(strNumero1);
        let numero2 = parseFloat(strNumero2);

        // Verificar si las entradas son números válidos
        if (isNaN(numero1) || isNaN(numero2)) {
            alert("Por favor, ingresa números válidos.");
            console.log("Entrada inválida: ", strNumero1, strNumero2);
            return;
        }

        // Determinar el mayor número
        let mayor = Math.max(numero1, numero2);

        // Mostrar el resultado
        console.log("El mayor de los dos números es: " + mayor);
        alert("El mayor de los dos números es: " + mayor);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.//*

function ejercicio13() {
    try {
        console.log("Determinar si una letra es una vocal");

        let letra = prompt("Ingresa una letra");

        // Verificar si la entrada es válida y tiene una sola letra
        if (letra === null || letra.trim().length !== 1 || !isNaN(letra)) {
            alert("Por favor, ingresa una sola letra válida.");
            console.log("Entrada inválida: ", letra);
            return;
        }

        // Convertir la letra a minúscula para simplificar la comparación
        letra = letra.toLowerCase();

        // Verificar si la letra es una vocal
        let esVocal = "aeiou".includes(letra);

        // Mostrar el resultado
        if (esVocal) {
            console.log("La letra " + letra + " es una vocal.");
            alert("La letra " + letra + " es una vocal.");
        } else {
            console.log("La letra " + letra + " no es una vocal.");
            alert("La letra " + letra + " no es una vocal.");
        }

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}


//*14. Hacer un algoritmo en JavaScript que lea un entero positivo del 1 al diez y determine si es un número primo.//*

function ejercicio14() {
    try {
        console.log("Determinar si un número entre 1 y 10 es primo");

        let strNumero = prompt("Ingresa un número entero positivo del 1 al 10");

        // Convertir la entrada a número
        let numero = parseInt(strNumero, 10);

        // Verificar si la entrada es un número válido y está en el rango de 1 a 10
        if (isNaN(numero) || numero < 1 || numero > 10) {
            alert("Por favor, ingresa un número entero válido entre 1 y 10.");
            console.log("Entrada inválida: ", strNumero);
            return;
        }

        // Determinar si el número es primo
        let esPrimo = true;
        if (numero === 1) {
            esPrimo = false;
        } else {
            for (let i = 2; i <= Math.sqrt(numero); i++) {
                if (numero % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
        }

        // Mostrar el resultado
        if (esPrimo) {
            console.log("El número " + numero + " es primo.");
            alert("El número " + numero + " es primo.");
        } else {
            console.log("El número " + numero + " no es primo.");
            alert("El número " + numero + " no es primo.");
        }

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.//*

function ejercicio15() {
    try {
        console.log("Convertir centímetros a pulgadas y libras a kilogramos");

        let strCentimetros = prompt("Ingresa una cantidad en centímetros");
        let strLibras = prompt("Ingresa una cantidad en libras");

        // Convertir las entradas a números
        let centimetros = parseFloat(strCentimetros);
        let libras = parseFloat(strLibras);

        // Verificar si las entradas son números válidos
        if (isNaN(centimetros) || isNaN(libras)) {
            alert("Por favor, ingresa valores numéricos válidos.");
            console.log("Entrada inválida: ", strCentimetros, strLibras);
            return;
        }

        // Convertir centímetros a pulgadas
        let pulgadas = centimetros / 2.54;

        // Convertir libras a kilogramos
        let kilogramos = libras * 0.453592;

        // Mostrar los resultados
        console.log(centimetros + " centímetros son " + pulgadas.toFixed(2) + " pulgadas.");
        console.log(libras + " libras son " + kilogramos.toFixed(2) + " kilogramos.");
        alert(centimetros + " centímetros son " + pulgadas.toFixed(2) + " pulgadas.\n" + libras + " libras son " + kilogramos.toFixed(2) + " kilogramos.");

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*16. Hacer un algoritmo en JavaScript que lea un número y según ese número, indique el día que corresponde.//*

function ejercicio16() {
    try {
        console.log("Determinar el día de la semana según un número");

        let strNumero = prompt("Ingresa un número del 1 al 7");

        // Convertir la entrada a número
        let numero = parseInt(strNumero, 10);

        // Verificar si la entrada es un número válido y está en el rango de 1 a 7
        if (isNaN(numero) || numero < 1 || numero > 7) {
            alert("Por favor, ingresa un número válido del 1 al 7.");
            console.log("Entrada inválida: ", strNumero);
            return;
        }

        // Determinar el día de la semana
        let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
        let dia = diasSemana[numero - 1];

        // Mostrar el resultado
        console.log("El número " + numero + " corresponde a " + dia);
        alert("El número " + numero + " corresponde a " + dia);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}


//*17. Hacer un algoritmo en JavaScript donde se ingrese una hora y nos calcule la hora dentro de un segundo.//*

function ejercicio17() {
    try {
        console.log("Calcular la hora dentro de un segundo");

        let strHora = prompt("Ingresa la hora en formato HH:MM:SS");

        // Verificar si la entrada es válida
        if (!strHora.match(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/)) {
            alert("Por favor, ingresa una hora válida en formato HH:MM:SS.");
            console.log("Entrada inválida: ", strHora);
            return;
        }

        // Convertir la hora a un objeto Date
        let partes = strHora.split(":");
        let date = new Date();
        date.setHours(parseInt(partes[0]));
        date.setMinutes(parseInt(partes[1]));
        date.setSeconds(parseInt(partes[2]));

        // Añadir un segundo
        date.setSeconds(date.getSeconds() + 1);

        // Formatear la hora resultado
        let horas = date.getHours().toString().padStart(2, '0');
        let minutos = date.getMinutes().toString().padStart(2, '0');
        let segundos = date.getSeconds().toString().padStart(2, '0');

        let nuevaHora = `${horas}:${minutos}:${segundos}`;

        // Mostrar el resultado
        console.log("La hora dentro de un segundo será: " + nuevaHora);
        alert("La hora dentro de un segundo será: " + nuevaHora);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y distribución de CD vírgenes. Los clientes pueden adquirir los artículos (supongamos un único producto de una única marca) por cantidad. Los precios son://*

    //*$10. Si se compran unidades separadas hasta 9.//*

    //*$8. Si se compran entre 10 unidades hasta 99.//*

    //*$7. Entre 100 y 499 unidades.//*

    //*$6. Para mas de 500 unidades.//*

    //*La ganancia para el vendedor es de 8,25 % de la venta. Realizar un algoritmo en JavaScript que dado un número de CDs a vender calcule el precio total para el cliente y la ganancia para el vendedor.//*

    function ejercicio18() {
        try {
            console.log("Calcular el precio total para el cliente y la ganancia para el vendedor");
    
            let strCantidad = prompt("Ingresa la cantidad de CDs a comprar");
    
            // Convertir la entrada a número
            let cantidad = parseInt(strCantidad, 10);
    
            // Verificar si la entrada es un número válido
            if (isNaN(cantidad) || cantidad < 1) {
                alert("Por favor, ingresa una cantidad válida de CDs.");
                console.log("Entrada inválida: ", strCantidad);
                return;
            }
    
            // Determinar el precio por unidad
            let precioPorUnidad;
            if (cantidad <= 9) {
                precioPorUnidad = 10;
            } else if (cantidad <= 99) {
                precioPorUnidad = 8;
            } else if (cantidad <= 499) {
                precioPorUnidad = 7;
            } else {
                precioPorUnidad = 6;
            }
    
            // Calcular el precio total
            let precioTotal = cantidad * precioPorUnidad;
    
            // Calcular la ganancia del vendedor
            let ganancia = precioTotal * 0.0825;
    
            // Mostrar el resultado
            console.log("El precio total para el cliente es: $" + precioTotal.toFixed(2));
            console.log("La ganancia para el vendedor es: $" + ganancia.toFixed(2));
            alert("El precio total para el cliente es: $" + precioTotal.toFixed(2) + "\nLa ganancia para el vendedor es: $" + ganancia.toFixed(2));
    
        } catch (error) {
            console.error("Ocurrió un error:", error);
        }
    }

//*19. Hacer un algoritmo en JavaScript para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente://*

    //*Cajero (56$/día).//*

    //*Servidor (64$/día).//*

    //*Preparador de mezclas (80$/día).//*

    //*Mantenimiento (48$/día).//*

    //*El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó.//*

    function ejercicio19() {
        try {
            console.log("Calcular el salario de un empleado en una heladería");
    
            let strIdentificador = prompt("Ingresa el número identificador del empleado (1: Cajero, 2: Servidor, 3: Preparador de mezclas, 4: Mantenimiento)");
            let strDiasTrabajados = prompt("Ingresa la cantidad de días trabajados en la semana (máximo 6)");
    
            // Convertir las entradas a números
            let identificador = parseInt(strIdentificador, 10);
            let diasTrabajados = parseInt(strDiasTrabajados, 10);
    
            // Verificar si las entradas son números válidos
            if (isNaN(identificador) || identificador < 1 || identificador > 4 || isNaN(diasTrabajados) || diasTrabajados < 1 || diasTrabajados > 6) {
                alert("Por favor, ingresa valores válidos.");
                console.log("Entrada inválida: ", strIdentificador, strDiasTrabajados);
                return;
            }
    
            // Determinar el salario diario basado en el identificador
            let salarioDiario;
            switch (identificador) {
                case 1:
                    salarioDiario = 56;
                    break;
                case 2:
                    salarioDiario = 64;
                    break;
                case 3:
                    salarioDiario = 80;
                    break;
                case 4:
                    salarioDiario = 48;
                    break;
                default:
                    alert("Identificador de empleado no válido.");
                    console.log("Identificador no válido: ", identificador);
                    return;
            }
    
            // Calcular el salario total
            let salarioTotal = salarioDiario * diasTrabajados;
    
            // Mostrar el resultado
            console.log("El salario total para el empleado es: $" + salarioTotal.toFixed(2));
            alert("El salario total para el empleado es: $" + salarioTotal.toFixed(2));
    
        } catch (error) {
            console.error("Ocurrió un error:", error);
        }
    }


//*20. Hacer un algoritmo en JavaScript que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones://*

    //*¿Cuántos números son Pares?//*

    //*¿Cuál es el mayor de todos?//*

    //*Si el tercero es par, calcular el cuadrado del segundo.//*

    //*Si el primero es menor que el cuarto, calcular la media de los 4 números.//*

    //*Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.//*

    function ejercicio20() {
        try {
            console.log("Operaciones con 4 números enteros positivos");
    
            let strNumero1 = prompt("Ingresa el primer número entero positivo");
            let strNumero2 = prompt("Ingresa el segundo número entero positivo");
            let strNumero3 = prompt("Ingresa el tercer número entero positivo");
            let strNumero4 = prompt("Ingresa el cuarto número entero positivo");
    
            // Convertir las entradas a números
            let numero1 = parseInt(strNumero1, 10);
            let numero2 = parseInt(strNumero2, 10);
            let numero3 = parseInt(strNumero3, 10);
            let numero4 = parseInt(strNumero4, 10);
    
            // Verificar si las entradas son números válidos y positivos
            if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4) || numero1 <= 0 || numero2 <= 0 || numero3 <= 0 || numero4 <= 0) {
                alert("Por favor, ingresa números enteros positivos válidos.");
                console.log("Entrada inválida: ", strNumero1, strNumero2, strNumero3, strNumero4);
                return;
            }
    
            // Contar cuántos números son pares
            let pares = [numero1, numero2, numero3, numero4].filter(num => num % 2 === 0).length;
    
            // Determinar el mayor número
            let mayor = Math.max(numero1, numero2, numero3, numero4);
    
            // Calcular el cuadrado del segundo número si el tercero es par
            let cuadradoSegundo = numero3 % 2 === 0 ? Math.pow(numero2, 2) : null;
    
            // Calcular la media de los 4 números si el primero es menor que el cuarto
            let media = numero1 < numero4 ? (numero1 + numero2 + numero3 + numero4) / 4 : null;
    
            // Verificar condiciones y calcular la suma de los 4 números si el segundo es mayor que el tercero y el tercero está entre 50 y 700
            let suma = null;
            if (numero2 > numero3 && numero3 >= 50 && numero3 <= 700) {
                suma = numero1 + numero2 + numero3 + numero4;
            }
    
            // Mostrar los resultados
            console.log("Cantidad de números pares: " + pares);
            console.log("El mayor de todos los números es: " + mayor);
            if (cuadradoSegundo !== null) {
                console.log("El cuadrado del segundo número es: " + cuadradoSegundo);
            }
            if (media !== null) {
                console.log("La media de los 4 números es: " + media);
            }
            if (suma !== null) {
                console.log("La suma de los 4 números es: " + suma);
            }
    
            alert("Cantidad de números pares: " + pares +
                "\nEl mayor de todos los números es: " + mayor +
                (cuadradoSegundo !== null ? "\nEl cuadrado del segundo número es: " + cuadradoSegundo : "") +
                (media !== null ? "\nLa media de los 4 números es: " + media : "") +
                (suma !== null ? "\nLa suma de los 4 números es: " + suma : "")
            );
    
        } catch (error) {
            console.error("Ocurrió un error:", error);
        }
    }
    

//*21. Hacer un algoritmo en JavaScript que permita calcular el factorial de un número.//*

function ejercicio21() {
    try {
        console.log("Calcular el factorial de un número");

        let strNumero = prompt("Ingresa un número entero positivo");

        // Convertir la entrada a número
        let numero = parseInt(strNumero, 10);

        // Verificar si la entrada es un número válido y positivo
        if (isNaN(numero) || numero < 0) {
            alert("Por favor, ingresa un número entero positivo.");
            console.log("Entrada inválida: ", strNumero);
            return;
        }

        // Calcular el factorial
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }

        // Mostrar el resultado
        console.log("El factorial de " + numero + " es: " + factorial);
        alert("El factorial de " + numero + " es: " + factorial);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*22. Hacer un algoritmo en JavaScript para calcular la suma de los n primeros números.//*

function ejercicio22() {
    try {
        console.log("Calcular la suma de los n primeros números");

        let strNumero = prompt("Ingresa un número entero positivo");

        // Convertir la entrada a número
        let numero = parseInt(strNumero, 10);

        // Verificar si la entrada es un número válido y positivo
        if (isNaN(numero) || numero < 1) {
            alert("Por favor, ingresa un número entero positivo mayor que 0.");
            console.log("Entrada inválida: ", strNumero);
            return;
        }

        // Calcular la suma de los n primeros números
        let suma = (numero * (numero + 1)) / 2;

        // Mostrar el resultado
        console.log("La suma de los primeros " + numero + " números es: " + suma);
        alert("La suma de los primeros " + numero + " números es: " + suma);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}


//*23. Hacer un algoritmo en JavaScript para calcular la suma de los números impares menores o iguales a n.//*

function ejercicio23() {
    try {
        console.log("Calcular la suma de los números impares menores o iguales a n");

        let strNumero = prompt("Ingresa un número entero positivo");

        // Convertir la entrada a número
        let numero = parseInt(strNumero, 10);

        // Verificar si la entrada es un número válido y positivo
        if (isNaN(numero) || numero < 1) {
            alert("Por favor, ingresa un número entero positivo mayor que 0.");
            console.log("Entrada inválida: ", strNumero);
            return;
        }

        // Calcular la suma de los números impares menores o iguales a n
        let suma = 0;
        for (let i = 1; i <= numero; i += 2) {
            suma += i;
        }

        // Mostrar el resultado
        console.log("La suma de los números impares menores o iguales a " + numero + " es: " + suma);
        alert("La suma de los números impares menores o iguales a " + numero + " es: " + suma);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*24. Hacer un algoritmo en JavaScript para realizar la suma de todos los números pares hasta el 1000.//*

function ejercicio24() {
    try {
        console.log("Calcular la suma de todos los números pares hasta el 1000");

        // Calcular la suma de todos los números pares hasta el 1000
        let suma = 0;
        for (let i = 2; i <= 1000; i += 2) {
            suma += i;
        }

        // Mostrar el resultado
        console.log("La suma de todos los números pares hasta el 1000 es: " + suma);
        alert("La suma de todos los números pares hasta el 1000 es: " + suma);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*25. Hacer un algoritmo en JavaScript para calcular el factorial de un número de una forma distinta.//*

function ejercicio25() {
    try {
        console.log("Calcular el factorial de un número usando recursión");

        let strNumero = prompt("Ingresa un número entero positivo");

        // Convertir la entrada a número
        let numero = parseInt(strNumero, 10);

        // Verificar si la entrada es un número válido y positivo
        if (isNaN(numero) || numero < 0) {
            alert("Por favor, ingresa un número entero positivo.");
            console.log("Entrada inválida: ", strNumero);
            return;
        }

        // Calcular el factorial usando recursión
        function factorial(n) {
            if (n === 0 || n === 1) {
                return 1;
            }
            return n * factorial(n - 1);
        }

        let resultado = factorial(numero);

        // Mostrar el resultado
        console.log("El factorial de " + numero + " es: " + resultado);
        alert("El factorial de " + numero + " es: " + resultado);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}


//*26. Hacer un algoritmo en JavaScript para calcular el resto y cociente por medio de restas sucesivas.//*

function ejercicio26() {
    try {
        console.log("Calcular el resto y cociente por medio de restas sucesivas");

        let strDividendo = prompt("Ingresa el dividendo");
        let strDivisor = prompt("Ingresa el divisor");

        // Convertir las entradas a números
        let dividendo = parseInt(strDividendo, 10);
        let divisor = parseInt(strDivisor, 10);

        // Verificar si las entradas son números válidos y el divisor no es cero
        if (isNaN(dividendo) || isNaN(divisor) || divisor === 0) {
            alert("Por favor, ingresa números válidos y asegúrate de que el divisor no sea cero.");
            console.log("Entrada inválida: ", strDividendo, strDivisor);
            return;
        }

        // Calcular el cociente y el resto por restas sucesivas
        let cociente = 0;
        let resto = dividendo;

        while (resto >= divisor) {
            resto -= divisor;
            cociente++;
        }

        // Mostrar el resultado
        console.log("El cociente es: " + cociente);
        console.log("El resto es: " + resto);
        alert("El cociente es: " + cociente + "\nEl resto es: " + resto);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*27. Hacer un algoritmo en JavaScript para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.//*

function ejercicio27() {
    try {
        console.log("Determinar la media de una lista indefinida de números positivos");

        let suma = 0;
        let contador = 0;

        while (true) {
            let strNumero = prompt("Ingresa un número positivo (o un número negativo para terminar)");

            // Convertir la entrada a número
            let numero = parseFloat(strNumero);

            // Verificar si la entrada es un número válido
            if (isNaN(numero)) {
                alert("Por favor, ingresa un número válido.");
                console.log("Entrada inválida: ", strNumero);
                continue;
            }

            // Verificar si el número es negativo para terminar
            if (numero < 0) {
                break;
            }

            // Sumar el número y contar
            suma += numero;
            contador++;
        }

        // Calcular la media
        let media = (contador === 0) ? 0 : suma / contador;

        // Mostrar el resultado
        console.log("La media de los números positivos ingresados es: " + media);
        alert("La media de los números positivos ingresados es: " + media);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*28. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo repetir.//*

function ejercicio28() {
    try {
        console.log("Calcular la suma de los primeros cien números con un ciclo repetir");

        let suma = 0;
        let i = 1;

        do {
            suma += i;
            i++;
        } while (i <= 100);

        // Mostrar el resultado
        console.log("La suma de los primeros cien números es: " + suma);
        alert("La suma de los primeros cien números es: " + suma);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}


//*29. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo mientras.//*

function ejercicio29() {
    try {
        console.log("Calcular la suma de los primeros cien números con un ciclo mientras");

        let suma = 0;
        let i = 1;

        while (i <= 100) {
            suma += i;
            i++;
        }

        // Mostrar el resultado
        console.log("La suma de los primeros cien números es: " + suma);
        alert("La suma de los primeros cien números es: " + suma);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}


//*30. Hacer un algoritmo en JavaScript para calcular la suma de los primeros cien números con un ciclo para.//*

function ejercicio30() {
    try {
        console.log("Calcular la suma de los primeros cien números con un ciclo para");

        let suma = 0;

        for (let i = 1; i <= 100; i++) {
            suma += i;
        }

        // Mostrar el resultado
        console.log("La suma de los primeros cien números es: " + suma);
        alert("La suma de los primeros cien números es: " + suma);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*31. Hacer un algoritmo en JavaScript parar calcular la media de los números pares e impares, sólo se ingresará diez números.//*

function ejercicio31() {
    try {
        console.log("Calcular la media de los números pares e impares, sólo se ingresarán diez números");

        let sumaPares = 0;
        let sumaImpares = 0;
        let contadorPares = 0;
        let contadorImpares = 0;

        for (let i = 1; i <= 10; i++) {
            let strNumero = prompt("Ingresa el número " + i);

            // Convertir la entrada a número
            let numero = parseInt(strNumero, 10);

            // Verificar si la entrada es un número válido
            if (isNaN(numero)) {
                alert("Por favor, ingresa un número válido.");
                console.log("Entrada inválida: ", strNumero);
                i--;
                continue;
            }

            // Sumar y contar los números pares e impares
            if (numero % 2 === 0) {
                sumaPares += numero;
                contadorPares++;
            } else {
                sumaImpares += numero;
                contadorImpares++;
            }
        }

        // Calcular las medias
        let mediaPares = (contadorPares === 0) ? 0 : sumaPares / contadorPares;
        let mediaImpares = (contadorImpares === 0) ? 0 : sumaImpares / contadorImpares;

        // Mostrar los resultados
        console.log("La media de los números pares es: " + mediaPares);
        console.log("La media de los números impares es: " + mediaImpares);
        alert("La media de los números pares es: " + mediaPares + "\nLa media de los números impares es: " + mediaImpares);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)//*

function ejercicio32() {
    console.log("No hay datos suficientes");
    alert("No hay datos suficientes");
}

//*33. Hacer un algoritmo en JavaScript que permita al usuario continuar con el programa.//*

function ejercicio33() {
    try {
        console.log("Permitir al usuario continuar con el programa");

        let continuar = true;

        while (continuar) {
            let respuesta = prompt("¿Deseas continuar? (sí/no)").toLowerCase();

            if (respuesta === "no" || respuesta === "n") {
                continuar = false;
                console.log("El usuario decidió no continuar.");
                alert("Has decidido no continuar. El programa ha terminado.");
            } else if (respuesta === "sí" || respuesta === "si" || respuesta === "s") {
                console.log("El usuario decidió continuar.");
                alert("Has decidido continuar. El programa seguirá.");
                // Aquí puedes agregar el código para continuar con el programa
            } else {
                alert("Por favor, responde 'sí' o 'no'.");
            }
        }

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}


//*34. Hacer un algoritmo en JavaScript que imprima la tabla de multiplicar de los números del uno al nueve.//*

function ejercicio34() {
    try {
        console.log("Tabla de multiplicar del 1 al 9");

        let resultado = "";
        for (let i = 1; i <= 9; i++) {
            for (let j = 1; j <= 10; j++) {
                resultado += `${i} x ${j} = ${i * j}\n`;
            }
            resultado += "\n"; // Separar cada tabla con una línea en blanco
        }

        console.log(resultado);
        alert(resultado);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*35. Hacer un algoritmo en JavaScript que nos permita saber cuál es el número mayor y menor, se debe ingresar sólo veinte números.//*

function ejercicio35() {
    try {
        console.log("Determinar el número mayor y menor, ingresando sólo veinte números");

        let numeros = [];

        for (let i = 1; i <= 20; i++) {
            let strNumero = prompt(`Ingresa el número ${i}`);

            // Convertir la entrada a número
            let numero = parseFloat(strNumero);

            // Verificar si la entrada es un número válido
            if (isNaN(numero)) {
                alert("Por favor, ingresa un número válido.");
                console.log("Entrada inválida: ", strNumero);
                i--; // Disminuir el contador para repetir la entrada
                continue;
            }

            numeros.push(numero);
        }

        // Encontrar el número mayor y menor
        let mayor = Math.max(...numeros);
        let menor = Math.min(...numeros);

        // Mostrar los resultados
        console.log("El número mayor es: " + mayor);
        console.log("El número menor es: " + menor);
        alert("El número mayor es: " + mayor + "\nEl número menor es: " + menor);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*36. Hacer un algoritmo en JavaScript para calcular la serie de Fibonacci.//*

function ejercicio36() {
    try {
        console.log("Calcular la serie de Fibonacci");

        let strN = prompt("Ingresa el número de términos de la serie de Fibonacci que deseas ver");

        // Convertir la entrada a número
        let n = parseInt(strN, 10);

        // Verificar si la entrada es un número válido y positivo
        if (isNaN(n) || n <= 0) {
            alert("Por favor, ingresa un número entero positivo.");
            console.log("Entrada inválida: ", strN);
            return;
        }

        // Calcular la serie de Fibonacci
        let fibo = [0, 1];
        for (let i = 2; i < n; i++) {
            fibo.push(fibo[i - 1] + fibo[i - 2]);
        }

        // Mostrar la serie
        let resultado = fibo.slice(0, n).join(", ");
        console.log("La serie de Fibonacci es: " + resultado);
        alert("La serie de Fibonacci es: " + resultado);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*37. Hacer un algoritmo en JavaScript para conseguir el M.C.D de un número por medio del algoritmo de Euclides.//*

function ejercicio37() {
    try {
        console.log("Calcular el M.C.D. de dos números por medio del algoritmo de Euclides");

        let strNumero1 = prompt("Ingresa el primer número");
        let strNumero2 = prompt("Ingresa el segundo número");

        // Convertir las entradas a números
        let numero1 = parseInt(strNumero1, 10);
        let numero2 = parseInt(strNumero2, 10);

        // Verificar si las entradas son números válidos
        if (isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <= 0) {
            alert("Por favor, ingresa números enteros positivos válidos.");
            console.log("Entrada inválida: ", strNumero1, strNumero2);
            return;
        }

        // Calcular el M.C.D. usando el algoritmo de Euclides
        let mcd = (a, b) => {
            while (b !== 0) {
                let temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        };

        let resultado = mcd(numero1, numero2);

        // Mostrar el resultado
        console.log("El M.C.D. de " + numero1 + " y " + numero2 + " es: " + resultado);
        alert("El M.C.D. de " + numero1 + " y " + numero2 + " es: " + resultado);

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*38. Hacer un algoritmo en JavaScript que nos permita saber si un número es un número perfecto.//*

function ejercicio38() {
    try {
        console.log("Determinar si un número es perfecto");

        let strNumero = prompt("Ingresa un número entero positivo");

        // Convertir la entrada a número
        let numero = parseInt(strNumero, 10);

        // Verificar si la entrada es un número válido y positivo
        if (isNaN(numero) || numero <= 0) {
            alert("Por favor, ingresa un número entero positivo.");
            console.log("Entrada inválida: ", strNumero);
            return;
        }

        // Calcular la suma de los divisores propios
        let sumaDivisores = 0;
        for (let i = 1; i <= numero / 2; i++) {
            if (numero % i === 0) {
                sumaDivisores += i;
            }
        }

        // Determinar si el número es perfecto
        let esPerfecto = sumaDivisores === numero;

        // Mostrar el resultado
        if (esPerfecto) {
            console.log("El número " + numero + " es un número perfecto.");
            alert("El número " + numero + " es un número perfecto.");
        } else {
            console.log("El número " + numero + " no es un número perfecto.");
            alert("El número " + numero + " no es un número perfecto.");
        }

    } catch (error) {
        console.error("Ocurrió un error:", error);
    }
}

//*39. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es://*

    //*Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

    function ejercicio39() {
        try {
            console.log("Aproximación del número pi con la serie de Gregory-Leibniz");
    
            let strIteraciones = prompt("Ingresa el número de iteraciones para la aproximación");
    
            // Convertir la entrada a número
            let iteraciones = parseInt(strIteraciones, 10);
    
            // Verificar si la entrada es un número válido y positivo
            if (isNaN(iteraciones) || iteraciones <= 0) {
                alert("Por favor, ingresa un número entero positivo.");
                console.log("Entrada inválida: ", strIteraciones);
                return;
            }
    
            // Calcular la aproximación de pi
            let pi = 0;
            for (let i = 0; i < iteraciones; i++) {
                let divisor = 2 * i + 1;
                let termino = 4 / divisor;
                if (i % 2 === 0) {
                    pi += termino;
                } else {
                    pi -= termino;
                }
            }
    
            // Mostrar el resultado
            console.log("La aproximación de pi con " + iteraciones + " iteraciones es: " + pi);
            alert("La aproximación de pi con " + iteraciones + " iteraciones es: " + pi);
    
        } catch (error) {
            console.error("Ocurrió un error:", error);
        }
    }

//*40. Hacer un algoritmo en JavaScript que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es://*

    //*Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...//*

    function ejercicio40() {
        try {
            console.log("Aproximación del número pi con la serie de Nilakantha");
    
            let strIteraciones = prompt("Ingresa el número de iteraciones para la aproximación");
    
            // Convertir la entrada a número
            let iteraciones = parseInt(strIteraciones, 10);
    
            // Verificar si la entrada es un número válido y positivo
            if (isNaN(iteraciones) || iteraciones <= 0) {
                alert("Por favor, ingresa un número entero positivo.");
                console.log("Entrada inválida: ", strIteraciones);
                return;
            }
    
            // Calcular la aproximación de pi
            let pi = 3;
            let signo = 1;
    
            for (let i = 2; i < 2 * iteraciones; i += 2) {
                pi += signo * (4 / (i * (i + 1) * (i + 2)));
                signo *= -1;
            }
    
            // Mostrar el resultado
            console.log("La aproximación de pi con " + iteraciones + " iteraciones es: " + pi);
            alert("La aproximación de pi con " + iteraciones + " iteraciones es: " + pi);
    
        } catch (error) {
            console.error("Ocurrió un error:", error);
        }
    }