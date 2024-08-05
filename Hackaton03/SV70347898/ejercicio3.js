//3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.

function ejecutarEjercicio3(){
    let input = prompt ("Por favor, ingrese un número para determinar si termina en 4");
    let numero = parseInt(input);
    console.log(typeof (numero))
    
    if (numero % 10 === 4) {
        alert("El número termina en 4");
    }
    else {
        alert("El número no termina en 4");
    }
    }