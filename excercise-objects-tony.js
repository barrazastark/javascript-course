var palabra = prompt("escribe una palabra");

var letters = {};
var maxCount = 0;
var letterMostRepeated = null;

for (var i = 0; i < palabra.length; i++) {

    var letter = palabra[i];
    letters[letter] = letters[letter] ? letters[letter]+ 1 : 1;

    if (letters[letter] > maxCount) { // if (letters["h"])
        maxCount = letters[letter];
        letterMostRepeated = letter;
    }
    /*else {
        // es la primera vez que se cuenta la letra
        letters[letter] = 1;
    }*/

}

console.log(letterMostRepeated,maxCount)