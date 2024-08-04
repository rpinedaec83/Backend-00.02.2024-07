const validateNumber = (num) => {
    if (Number(num) === parseInt(num)) {
        return true;
    }

    alert('( ! ) No es un dato válido');
    return false;
}

const validateNumberLimits = (num, max, min) => {    
    if (Number(num) === parseInt(num)) {
        num = parseInt(num);
        if (num >= min && num <= max) {
            return true;
        }
    }

    alert('( ! ) No es un dato válido');
    return false;
}

const validateArray = (valor, arrPermissibles = [], showAlert, onlyNumbers = false) => {
    let indexPermissibles;

    if (onlyNumbers) {
        valor = parseFloat(valor);
     } else {
        valor = valor.toUpperCase();
    }

    indexPermissibles = arrPermissibles.findIndex((item) => item === valor);

    if (indexPermissibles < 0) {
        showAlert ? alert('( ! ) No es un dato permisible'): '';
        return false;
    }

    return true;
}

const ejercicio_1 = () => {
    let num = prompt("Ingrese un número");
    let isCondition = false;

    if (validateNumber(num)) {
        if (num > 99 && num < 1000) isCondition = !isCondition;

        alert(`${num} ${!isCondition ? 'no' : ''} es un número de 3 cifras`);
    }
}

const ejercicio_2 = () => {
    let num = prompt("Ingrese un número");
    let isCondition = false;

    if (validateNumber(num)) {
        if (num < 0) isCondition = !isCondition;

        alert(`${num} ${!isCondition ? 'no' : ''} es un número negativo`);
    }
}

const ejercicio_3 = () => {
    let num = prompt("Ingrese un número");
    let isCondition = false;

    if (validateNumber(num)) {
        let lenNumber = num.length;

        if (num[lenNumber - 1] === '4') isCondition = !isCondition;

        alert(`${num} ${!isCondition ? 'no' : ''} termina en 4`);
    }
}

const ejercicio_4 = () => {
    let numbers = [];
    
    for (let _i = 1; _i < 4; _i++) {
        let num = prompt(`Ingrese el (${_i}) número:`);
        if (validateNumber(num)) {
            numbers.push(parseFloat(num));
        } else {
            return;
        }
    }

    let suma = 0;
    let menor = numbers[0];
    let mayor = numbers[0];

    numbers.forEach((num) => {
        suma += num;

        if (mayor < num) {
            mayor = num;
        }

        if (menor > num) {
            menor = num;
        }
    });

    alert(`Lista de menor a mayor: ${menor}, ${suma - mayor - menor}, ${mayor}`);
}

const ejercicio_5 = () => {
    let num = prompt('Ingrese el número de pares de zapatos comprados:');

    if (validateNumber(num)) {
        num = parseInt(num);

        if (num > 0) {
            let subTotal = num * 80;
            let descuento = 0;

            if (num > 10 && num < 21) {
                descuento = subTotal * 0.1;
            }

            if (num > 20 && num < 30) {
                descuento = subTotal * 0.2;
            }

            if (num > 30) {
                descuento = subTotal * 0.4;
            }

            alert(`
                SUB-TOTAL: ${subTotal}
                TOTAL DESCUENTO: ${descuento}
                ------------------------------
                TOTAL A PAGAR: ${subTotal - descuento}
            `);
        } else {
            alert('( ! ) No es un número válidos para compra de zapatos');
        }
    }
}

const ejercicio_6 = () => {
    let horas = prompt('Ingrese el total de horas que trabajó esta semana');

    if (validateNumber(horas)) {
        let calculo = 0;

        if (horas > 0) {
            if (horas > 40) {
                let horasExtra = horas - 40;
                let pagoExtra = 25 * horasExtra;
                
                calculo = (40 * 20) + pagoExtra;
            } else {
                calculo = horas * 20;
            }

            alert(`Se le pagará un total de: ${calculo}`);
        } else {
            alert('( ! ) No ingreso las horas suficientes para realizar el cálculo');
        }
    }
}

const ejercicio_7 = () => {
    let subTotal = prompt("Ingrese el valor de su compra");
    let cat = prompt("Ingrese la categoría del cliente: A, B, C");
    let categories = ['A', 'B', 'C'];

    if (validateNumber(subTotal) && validateArray(cat, categories, true)) {
        let descuento = 0;

        switch (cat.toUpperCase()) {
            case 'A':
                descuento = subTotal * 0.1;
                break;
            case 'B':
                descuento = subTotal * 0.15;
                break;
            case 'C':
                descuento = subTotal * 0.2;
                break;
        }

        alert(`
            Sub-total: ${subTotal}
            Descuento: ${descuento}
            -----------------------------
            Total: ${subTotal - descuento}
        `);
    }
}

const ejercicio_8 = () => {
    let cont = 1;
    let suma = 0;

    while (cont < 4) {
        let nota = prompt(`Ingrese (${cont}) nota:`);

        if (!validateNumber(nota)) return;

        if (nota >= 0) {
            suma += parseFloat(nota);
            cont++;
        } else {
            alert('( ! ) Nota no válida');
            return;
        }
        
    }
    console.log(suma);

    let promedio = suma / (cont - 1);

    alert(`
        promedio: ${promedio}
        ------------------------------
        ${promedio > 10.5 ? 'APROBADO' : 'DESAPROBADO'}
    `);
}

const ejercicio_9 = () => {
    let num = prompt('Ingrese el monto del sueldo del trabajor por mes');

    if (validateNumber(num)) {
        num = parseFloat(num);

        if (num > 0) {
            let aumento = 0;

            if (num > 2000) {
                aumento = num * 0.05;
            } else {
                aumento = num * 0.1;
            }

            alert(`
                Sueldo base: ${num}
                aumento es de: ${aumento}
            `);
        } else {
            alert('( ! ) No es un monto válido para un sueldo');
        }
    }
}

const ejercicio_10 = () => {
    let num = prompt('Ingrese un número:');

    if (validateNumber(num)) {
        let resto = num % 2;

        if (resto > 0) {
            alert(`${num} no es un número par`);
        } else {
            alert(`${num} es un número par`);
        }
    }
}

const ejercicio_11 = () => {
    let mayor = 0;

    for (let _i = 1; _i < 4; _i++) {
        let num = prompt(`Ingrese (${_i}) número:`);

        if (validateNumber(num)) {
            if (mayor < parseFloat(num)) {
                mayor = parseFloat(num);
            }
        } else {
            return;
        }
    }

    alert(`El número mayor es: ${mayor}`);
}

const ejercicio_12 = () => {
    let mayor = 0;

    for (let _i = 1; _i < 3; _i++) {
        let num = prompt(`Ingrese (${_i}) número:`);

        if (validateNumber(num)) {
            if (mayor < parseFloat(num)) {
                mayor = parseFloat(num);
            }
        } else {
            return;
        }
    }

    alert(`El número mayor es: ${mayor}`);
}

const ejercicio_13 = () => {
    let arrVocales = ['A', 'E', 'I', 'O', 'U'];
    let letra = prompt('Ingrese una letra');

    if (validateArray(letra, arrVocales, false)) {
        alert(`${letra} es una vocal`);
    } else {
        alert(`${letra} no es una vocal`);
        return;
    }

}

const ejercicio_14 = () => {
    let num = prompt('Ingrese un número entre 1 y 10');
    num = parseInt(num);

    if (validateNumber(num)) {
        if (num >= 1 && num <= 10) {
            let numNoPrimos = [1, 2];
            let limite = 10;
            let mult = limite / 2;

            for (let _i = mult; _i > 1; _i--) {
                let multiplicando = 2;
                let calculo = multiplicando * _i;

                do {
                    if (numNoPrimos.findIndex((item) => item === calculo) === -1) {
                        numNoPrimos.push(calculo);
                    }
                    
                    multiplicando++;
                    
                    calculo = multiplicando * _i
                } while (calculo <= limite)
            }

            if (numNoPrimos.findIndex((item) => item === num) > -1) {
                alert(`${num} no es un número primo`);
            } else {
                alert(`${num} es un número primo`);
            }
        } else {
            alert('( ! ) valor no válido');
        }
    } else {
        return;
    }
}

const ejercicio_15 = () => {
    let arrPermissibles = [1, 2];
    let modo = prompt('Ingrese 1 para convertir longitudes, 2 para convertir pesos');

    if (validateArray(modo, arrPermissibles, true, true)) {
        modo = parseInt(modo);
        let convertir = '';
        let equivalencia = 0;

        switch(modo) {
            case 1:
                let centimetros = prompt('Ingrese el valor de la longitud en centímetros');

                if (validateNumber(centimetros)) {
                    convertir = "pulgadas";
                    equivalencia = parseFloat(centimetros) / 2.54;
                } else {
                    return;
                }
                break;
            case 2:
                let libras = prompt('Ingrese el valor del peso en libras');

                if (validateNumber(libras)) {
                    convertir = 'kilogramos';
                    equivalencia = libras / 2.205;
                } else {
                    return;
                }
                break;
        }

        alert(`Su equivalencia en ${convertir} es: ${equivalencia}`);
    }
}

const ejercicio_16 = () => {
    let num = prompt('Ingrese un número del 1 al 7 para indicar el día de la semana');
    let arrDiaSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

    if (validateNumber(num)) {
        num = parseInt(num);

        if (num >= 1 && num <= 7) {
            alert(`${num} corresponde al día de semana ${arrDiaSemana[num - 1]}`);
        } else {
            alert('( ! ) No es un número válido para día de semana');
        }
    }
}

const ejercicio_17 = () => {
    alert('Ingrese la hora en formato HH:m:s, 24 horas');

    let hora = prompt('Hora (H):');
    if (!validateNumberLimits(hora, 24, 0)) return;

    let minuto = prompt('Minuto (m):');
    if (!validateNumberLimits(minuto, 59, 0)) return;

    let segundo = prompt('Segundos (s):');
    if (!validateNumberLimits(segundo, 59, 0)) return;

    let nuevaHora = parseInt(hora);
    let nuevoMinuto = parseInt(minuto);
    let nuevoSegundo = parseInt(segundo) + 1;

    if (nuevoSegundo > 59) {
        nuevoSegundo = 0;
        nuevoMinuto++;
    }

    if (nuevoMinuto > 59) {
        nuevoMinuto = 0;
        nuevaHora++;

        if (nuevaHora > 23) {
            nuevaHora = 0;
        }
    }

    alert(`
        Dentro de 1 segundo serán las:
        ${nuevaHora} hora(S)
        ${nuevoMinuto} minuto(s)
        ${nuevoSegundo} segundo(s)
    `);
}

const ejercicio_18 = () => {
    let num = prompt('Ingrese el número de discos adquiridos');

    if (validateNumber(num)) {
        num = parseInt(num);

        if (num > 0) {
            let precioVenta = 0;
            if (num < 10) {
                precioVenta = 10;
            }

            if (num > 9 && num < 100) {
                precioVenta = 8;
            }

            if (num > 99 && num < 500) {
                precioVenta = 7;
            }

            if (num > 499) {
                precioVenta = 6;
            }

            let total = precioVenta * num;

            alert(`
                Unidades adquiridas: ${num}
                Precio por unidad: ${precioVenta}
                ----------------------------------
                Total venta: ${total}
                ----------------------------------
                * Ganancia: ${total * 0.825}
            `);
        } else {
            alert('( ! ) No es un número válido de compras');
        }
    }
}

const ejercicio_21 = () => {
    let num = prompt('Ingrese un número no negatico');

    if (validateNumber(num)) {
        num = parseFloat(num);
        if (num >= 0) {
            let factorial = 1;

            for (let _i = 1; _i <= num; _i ++) {
                factorial *= _i;
            }

            alert(`El factorial de ${num} es: ${factorial}`);
        } else {
            alert('( ! ) Valor no válido');
        }
    }
}

const ejercicio_22 = () => {
    let num = prompt('Ingrese un número positivo');

    if (validateNumber(num)) {
        num = parseInt(num);
        if (num >= 0) {
            let suma = 0;

            for (let _i = 1; _i <= num; _i++) {
                suma += _i;
            }

            alert(`La suma de los ${num} primeros números es: ${suma}`);
        } else {
            alert('( ! ) Valor no válido');
        }
    }
}

const ejercicio_23 = () => {
    let num = prompt('Ingrese un número mayor a 0');

    if (validateNumber(num)) {
        num = parseInt(num);
        suma = 0;

        if (num > 0) {
            for (let _i = 1; _i <= num; _i = _i + 2) {
                suma += _i;
            }

            alert(`La suma de los primeros números impares hasta ${num} es: ${suma}`);
        } else {
            alert('( ! ) Valor no válido');
        }
    }
}

const ejercicio_24 = () => {
    alert('Hallando la suma de todos los números pares hasta 1000');

    let suma = 0;

    let multPar = 0;
    let multImpar = 2;

    let paso = 0;

    let limite = 42;

    do {
        if (multImpar <= limite) {
            suma += multImpar;
        }

        if (multPar <= limite) {
            suma += multPar;
        }

        paso += 2;

        multPar = paso * 2;
        multImpar = (paso + 1) * 2;
    } while (multPar <= limite && multImpar <= limite)

    alert(`La suma es: ${suma}`);
}

const ejercicio_28 = () => {
    alert('Suma de los primeros 100 números con ciclo repetir');

    let contador = 1;
    let suma = 0;
    let limite = 100;

    do {
        suma += contador;
        contador += 1;
    } while (contador <= limite);

    alert(`La suma es: ${suma}`);
}

const ejercicio_29 = () => {
    alert('Suma de los primeros 100 números con ciclo mientras');

    let contador = 1;
    let suma = 0;
    let limite = 100;

    while (contador <= limite) {
        suma += contador;
        contador += 1;
    }

    alert(`La suma es: ${suma}`);
}

const ejercicio_30 = () => {
    alert('Suma de los primeros 100 números con ciclo para');

    let suma = 0;
    let limite = 100;

    for (let _i = 1; _i <= limite; _i++) {
        suma += _i;
    }

    alert(`La suma es: ${suma}`);
}

const ejercicio_31 = () => {
    alert('Media de los números pares e impares hasta el número 10');

    let sumaPar = 0;
    let sumaImpar = 0;
    let paso = 2;
    let limite = 10;
    let contadorPar = 0;
    let contadorImpar = 0;

    do {
        sumaImpar += paso - 1;
        contadorImpar++;

        if (paso <= limite) {
            sumaPar += paso;
            contadorPar++;
        }
        
        paso += 2;
    } while ((paso - 1) <= limite);

    let mediaPar = sumaPar / contadorPar;
    let mediaImpar = sumaImpar / contadorImpar;

    alert(`
        Suma de pares es: ${sumaPar}, media de pares es: ${mediaPar}
        Suma de impares es: ${sumaImpar}, media de pares es: ${mediaImpar}
    `);


}

const ejercicio_34 = () => {
    alert('Tablas de multiplicar. (Ver consola)');

    for (let _i = 1; _i < 10; _i++) {
        console.log(`Tabla de multiplicar del ${_i}`);

        for (let _j = 1; _j < 13; _j++ ) {
            let calculo = _j * _i;

            console.log(`${_i} x ${_j} = ${calculo}`);
        }
        console.log('---------------------------');
    }
}