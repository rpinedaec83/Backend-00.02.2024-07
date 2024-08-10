const presentarPersona = (nombre, apellido, edad) => 
    `Hola, mi nombre es ${nombre.toLowerCase()} ${apellido.toLowerCase()} y mi edad es ${edad}`;

function mostrarPresentacion() {
    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = parseInt(document.getElementById('edad').value, 10);

    // Verificar si los valores son válidos
    if (!nombre || !apellido || isNaN(edad)) {
        alert("Por favor, ingrese todos los campos correctamente.");
        return;
    }

    // Llamar a la función presentarPersona
    const resultado = presentarPersona(nombre, apellido, edad);

    // Mostrar el resultado en el párrafo con id="resultado"
    document.getElementById('resultado').textContent = resultado;
}
