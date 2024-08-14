//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.

function ejecutarEjercicio13() {
    let input = prompt("Por favor, ingrese una letra para determinar si es vocal o consonante");
    let letra = input.toUpperCase();
    console.log(typeof (letra))

    if (letra == 'A' || letra == "E" || letra == "I" || letra == "O" || letra == "U") {
        alert("Es una vocal");
    }
    else {
        alert("Es una consonante")
    }
}

    