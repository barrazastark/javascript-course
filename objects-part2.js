
// Objects
// why are non primitive data types important?


// original object
var person = {
    name: "John",
    age: 32,
}; // allocation space in memory

// copy of object (wrong way to do it)
var person2 = person;

person2.name = "Jane";

console.log(person2.name);
console.log(person.name);

// objects are reference types 
// objects are stored in memory ( we are storing the reference to the object in memory)
// when you copy an object, you are copying the reference to the object

// the correct way to copy an object is using the spread operator
 // or you can use Object.assign({}, person)

 var person3 = {
    ...person,
 }

 person3.name = "Bob";

 console.log(person3.name);

if (person  === person2) {
    console.log("They are the same object")
}

var arr = [1, 2, 3];
var arr2 = [...arr];


arr2.push(4); // we are mutating the array by adding a new element 

console.log(arr);

var numero1 = 10;
var numero2 = numero1;

numero2 = 20;

console.log(numero1, numero2);

// diference between primitive and non primitive data types
// primitive data types are immutable
// non primitive data types are mutable

// dictionary in python is the same as an object in javascript

// dictionary (or mapa/map) of streamears

// key value pairs
var streamers = {
    ibai: 11,
    auronplay: 12,
    elrubius: 13,
    thegrefg: 14,
};

// object of streamer
var streamer = {
    name: "ibai",
    viewers: 11,
    nationality: "Spain",
};
