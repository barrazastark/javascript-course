var frase= "osso";
var numOfLetters = frase.length;
var isPalindromo = true;
var lastIndexOfFrase = frase.length - 1;
// var result= null;
console.log(numOfLetters);

if(frase[0] === frase[frase.length - 1] ){
    console.log("si es igual");
}

/*for(i=0; i < numOfLetters; i++, lastIndexOfFrase--){
    if(frase[0] === frase[numOfLetters - 1]){
        palindromo= frase.slice(1, -1)
        console.log(palindromo);
        if(palindromo === null){
            console.log("yacasi");
        }

    }
}*/

/* for(var i=0; i < numOfLetters; i++){

    if(frase[i] === frase[lastIndexOfFrase]){
        console.log("es palindromo");
        break;
    }
    else {
        console.log("no es palindromo");
    }
        
    lastIndexOfFrase--;
} */

for(var i=0; i < numOfLetters / 2; i++){
    
    if (frase[i] != frase[lastIndexOfFrase]){
        isPalindromo = false;
        break;
    }
    lastIndexOfFrase--;
}

// no se como quedo el isPalindromo

if (isPalindromo){
    console.log("es palindromo");
}
else {
    console.log("no es palindromo");
}