
// Non-Primitive Data Types

// Arrays

// Array: ordered collection of data (list)

var calificaciones = [9, 8, 10, 5];
var nombres = [];

// index starts at 0

var numberOfSubjects = calificaciones.length; // 4

var lastCalificacion = calificaciones[numberOfSubjects - 1] // undefined

var average = null;
var sum = 0;

for(var i = numberOfSubjects - 1; i >= 0; i--) {
    sum = sum + calificaciones[i];
}

average = sum / numberOfSubjects
console.log(average)


var frase = prompt("Escribe una frase");

var isPalindromo = false;

/*
    if(frase[0] === frase[3] && frase[1] === frase[2]) {
        isPalindromo = true;
    } else {
        isPalindromo = false;
    }
*/

for(var i = 0; i < frase.length; i++) {

    

}


console.log(isPalindromo)

// anita lava la tina