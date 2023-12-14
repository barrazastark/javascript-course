
// if

var numberBetweenOneAndTen = Math.random() * 10; // random number between 0 and 10

// random number between 

if (numberBetweenOneAndTen < 3) {
  console.log("numberBetweenOneAndTen is less than 3", numberBetweenOneAndTen);
} 
else if(numberBetweenOneAndTen < 5) {
  console.log("numberBetweenOneAndTen is less than 5", numberBetweenOneAndTen);
}
else if(numberBetweenOneAndTen < 7) {
  console.log("numberBetweenOneAndTen is less than 7", numberBetweenOneAndTen); 
}
else {
  console.log("numberBetweenOneAndTen is greater than 7", numberBetweenOneAndTen);
}

// switch

var day = "Monday";

switch (day) {
    // esto es como un if
    case "Monday":
        console.log("Today is Monday");

        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    default: 
        console.log("Today is not Monday, Tuesday, Wednesday or Thursday");
}

/*
// coercion en javascript: La coerción es la conversión automática o implicita de valores de un tipo de dato a otro 
(Ejemplo: de cadena de texto a número). 
La conversión es similar a la coerción porque ambas convierten valores de un tipo de dato a otro pero con una diferencia clave - 
la coerción es implícita mientras que la conversión puede ser implícita o explícita.
*/


var a = 10;
var b = "9";

var suma = a + b;

console.log(suma);

// si estas concatenando strings, el resultado es un string

var isAdult = true;

console.log(isAdult + 7); // this is implicit coercion

Number("10"); // 10 is number (this is explicit coercion)

var money = prompt("How much money do you have?");

var moneyTonumber = Number(money);

console.log(typeof Number(money))

if (money === 5000) {
    console.log("You have 5000");
    console.log(typeof money);
}

// send(moneyTonumber) // store imoneyTonumber db

// diferencias entre == y ===

// === no hace coercion

// == hace coercion

// === es el unico que debes usar en javascript