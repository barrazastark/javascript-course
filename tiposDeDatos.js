/*
// javascript engine en chrome: V8
// javasript engine en firefox: SpiderMonkey

// both implements ECMAScript

// Ecmascript: es un estandar de javascript

// Node: es un entorno de ejecucion de javascript

// Primitive types in javascript:

// 1- Number

var age = "25";

var typeOfage = typeof age;
console.log(typeof age);


if(typeOfage === "string"){
    age = Number(age);
    console.log("dentro del if");
}
console.log(typeof age); // 


// Ejercicio: cambiar los valores de 2 numeros dados. (sin utilizar otras variables)

var a = 5;
var b = 10;

a = b + a; // 15
b = a - b; // 15 - 10 = 5
a = a - b; // 15 - 5 = 10

console.log("a:", a, "b:", b); //  8, 7;


// Ejercicio: dado N, dame la sumatoria de 1 hasta N

var n = 100;

var sum = (n * (n + 1)) / 2;

console.log(sum); // 5050

// 2- String

var name = "6465465";
typeof name; // string

var frase = "anita lava la tina";

var primerCaracter = frase.charAt(2);
var tamano = frase.length; // 19
var posicion = frase.indexOf("lava"); // 6

console.log( primerCaracter )

var num = 10;

num = String(num);

// OSO, anita lava la tina, ada, ana, o
*/

// 3- Boolean

var age = 40;

var isAdult = age > 17; 

var hasAPet = false;

console.log(typeof isAdult); // boolean

// operadores logicos: >, <, >=, <=, ==, ===, !=, !==, &&, ||, !

console.log(isAdult);

if (isAdult || hasAPet) {
    console.log("dentro del if");
} else {
    console.log("dentro del else");
}

// Falsy values: false, 0, "", null, undefined, NaN

// Truthy values: todos los que no son falsy

var suma = 16 + 78; // 94

if (suma) {
    console.log("dentro del if", suma);
}

// var person = prompt("Please enter your name", "Harry Potter");

// console.log(person);

// console.log("hola", person)

// crear una UI para mostrar algo en el navegador

// 4- undefined

// undefined: is always assigned by the javascript engine

var petName;

console.log(petName);


if (!petName) {
    petName = "Luna";
}

// 5- null

// null: is always assigned by the developer

var petName = null;
// calculos

console.log(petName);

if (petName === undefined) {
    petName = "Luna";
    // esto no entra
}

// 6- Symbol

// Symbol: is a unique identifier

var id = Symbol("id");

// 7- BigInt

// BigInt: is a numeric value that represents integers with arbitrary precision

var num = 100_000;
var mil = 1_000;

console.log(1000 === 1_000);

var bigNumber = 12345678901234567890123456787327836872363872637862786283628768901234567890n;

console.log(bigNumber);

// Difference between == and ===