// Función que toma una matriz de objetos y devuelve la suma de los presupuestos
const getBudgets = (people) => {
    return people.reduce((total, person) => total + person.budget, 0);
};

// Exponer la función para que pueda ser utilizada desde el HTML
window.getBudgets = getBudgets;

// Función para manejar la entrada del usuario y mostrar los resultados
const setup = () => {
    document.getElementById('botonMostrar').addEventListener('click', () => {
        try {
            // Obtener los valores de los inputs
            const names = document.getElementById('inputNames').value.split(',');
            const ages = document.getElementById('inputAges').value.split(',');
            const budgets = document.getElementById('inputBudgets').value.split(',');
            
            // Verificar que las entradas tienen el mismo tamaño
            if (names.length !== ages.length || names.length !== budgets.length) {
                throw new Error("Por favor, asegúrese de que todos los campos tengan el mismo número de entradas.");
            }
            
            // Crear la matriz de objetos
            const people = names.map((name, index) => ({
                name: name.trim(),
                age: parseInt(ages[index].trim(), 10),
                budget: parseFloat(budgets[index].trim())
            }));
            
            // Calcular la suma de los presupuestos usando la función getBudgets
            const totalBudget = window.getBudgets(people);

            // Mostrar el resultado en el párrafo con id="resultado"
            document.getElementById('resultado').textContent = `Total de presupuestos: ${totalBudget}`;
        } catch (error) {
            alert(error.message);
        }
    });
};

document.addEventListener('DOMContentLoaded', setup);
