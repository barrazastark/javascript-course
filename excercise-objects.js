
// crear un programa que lea una palabra y muestra en la consola cual es la letra mas repetida y cuantas veces se repite

// hola mundo
// la letra mas repetida es: o

var palabra = prompt("escribe una palabra");

for (var i = 0; i < palabra.length; i++) {

    var letter = palabra[i];

    if (letters[letter]) { // if (letters["h"])
        letters[letter] = letters[letter] + 1;
    }
    else {
        // es la primera vez que se cuenta la letra
        letters[letter] = 1;
    }

}

var maxCount = 0;
var letterMostRepeated = null;

for (var i = 0; i < Object.keys(letters).length; i++) {

    var lettersOfDictiornary = Object.keys(letters);
    var letter = lettersOfDictiornary[i];

    if ( letters[letter] > maxCount) {
        maxCount = letters[letter]
        letterMostRepeated  = letter;
    }


}

console.log(letterMostRepeated, maxCount, letters)