// scope is javascript: global, local

// scope: is the visibility of a variable

var something = "something global";

function sayHello(nombre) {
    var message = "Hello " + name;
    console.log(message);
}

function suma(person) {
    
    
    var copyPerson = person.age = 40;

    return person.age + person.money;
}

var person = {
    age: 30,
    money: 1000,
};


var result = suma(person);
console.log(result);

console.log(person);

// sendToUi(person);

// el pase por valor y el pase por referencia

// los primitivos se pasan por valor

// los objetos (no primitivos) se pasan por referencia

// Caracteristicas de las funciones:


// se dicen que las funciones son first class citizens (first class functions) porque:

// 1- son objetos
// 2- pueden ser asignadas a una variable
// 3- pueden ser pasadas como argumentos a otra funcion
// 4- pueden ser retornadas por otra funcion

console.log(typeof suma) // function

function A(callBack) {
    // haz algo y luego llama a la funcion B



    callBack("jose");
}

function B(nombre){
    console.log("dentro de B")

    console.log("hello", nombre);
}

A(B);

// funciones puras o pure functions

// funcion pura: dado un input, siempre retorna el mismo output

function suma(a, b) {
    return a + b ;
}