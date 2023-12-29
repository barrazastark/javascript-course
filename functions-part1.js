// Functions are a way to group a set of instructions together to perform a specific task.
// Functions are reusable, and make code more readable and easier to debug.

// firma o signature, is the way to declare a function

//Function declaration
function sayHello(name, isMarried = true) {
    console.log("Hello", name, isMarried);
}

var x = sayHello("jose", false); // el thread se va al cuerpo de la funcion

sayHello("jose");


// Function expression
var myFunction = function(a, b, ...numbers) {
    
    console.log(a, b, numbers);
}

var result = myFunction(1,2,3,4,5,6,7,8,9,10);


function suma(a, b) {
    return a + b;
}

var result = suma(1, 2);
console.log(result);

// escribe una function que retorne el area de un triangulo

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

var area = areaTriangulo(10, 5);
sendToUi(area);

console.log(area);

// scope
