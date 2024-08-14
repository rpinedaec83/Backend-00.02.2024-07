// Función que toma una matriz de estudiantes y devuelve una matriz de nombres
const getStudentNames = (students) => {
    return students.map(student => student.name).sort();
};

// Exponer la función para que pueda ser utilizada desde el HTML
window.getStudentNames = getStudentNames;

// Función para manejar la entrada del usuario y mostrar los resultados
const setup = () => {
    document.getElementById('botonMostrar').addEventListener('click', () => {
        try {
            // Obtener los nombres del área de texto, separados por nuevas líneas
            const inputNames = document.getElementById('inputNames').value.trim().split('\n');

            // Crear la matriz de objetos
            const students = inputNames
                .map(name => ({ name: name.trim() }))
                .filter(student => student.name !== ''); // Filtrar nombres vacíos

            // Obtener los nombres de los estudiantes usando la función getStudentNames
            const sortedNames = window.getStudentNames(students);

            // Mostrar el resultado en el párrafo con id="resultado"
            document.getElementById('resultado').textContent = `Nombres de estudiantes: ${sortedNames.join(', ')}`;
        } catch (error) {
            alert('Ocurrió un error: ' + error.message);
        }
    });
};

// Asegurarse de que el DOM esté completamente cargado antes de configurar los eventos
document.addEventListener('DOMContentLoaded', setup);
