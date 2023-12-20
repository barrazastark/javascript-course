
// Array: is non primitive data type


// camel case , wordWordWord (usada por convencion en javascript)
// snake case, snake_case
var numerosPares = [];

// Crear un programa que genere 10 numeros random, entre 1 y 100 y guardar en el arreglos solo los pares

for (var i = 0; i < 10; i++) {

    var random = Math.random() * 100;
    var integer = Math.floor(random);

    if (integer % 2 === 0) {
        numerosPares.push(integer)
    }

}

// console.log(numerosPares)

numerosPares.forEach((element, index) => {

    console.log(element);
    console.log(index);

});
