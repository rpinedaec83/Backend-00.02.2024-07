const obtenerTipo = (valor) => {
    return typeof valor;
};

function mostrarTipo() {
    // Obtener el valor ingresado por el usuario
    const valorInput = document.getElementById('valor').value;
    
    // Intentar interpretar el valor como un número, booleano o cadena
    let valor;
    if (valorInput === "true" || valorInput === "false") {
        valor = valorInput === "true";
    } else if (!isNaN(Number(valorInput)) && valorInput.trim() !== "") {
        valor = Number(valorInput);
    } else {
        valor = valorInput;
    }

    // Obtener el tipo del valor
    const tipo = obtenerTipo(valor);

    // Mostrar el tipo en el párrafo con id="resultado"
    document.getElementById('resultado').textContent = `El tipo del valor es: ${tipo}`;
}
