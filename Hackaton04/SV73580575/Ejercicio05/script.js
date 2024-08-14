function realizarCalculo() {
    // Obtener los valores ingresados por el usuario
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const operacion = document.getElementById('operacion').value.trim();
    const numero2 = parseFloat(document.getElementById('numero2').value);

    // Verificar si los valores son números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }

    // Llamar a la función calculator
    const resultado = calculator(numero1, operacion, numero2);

    // Mostrar el resultado en el párrafo con id="resultado"
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}

function calculator(num1, operacion, num2) {
    switch (operacion) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case 'x':
        case '*':
            return num1 * num2;
        case '%':
            return num1 % num2;
        default:
            return "El parámetro no es reconocido";
    }
}
