
// map: Returns an array populated processing each element

var numbers = [1,3,7,6,4,12];
var numbersSq = [];

numbers.forEach((element) => {
    numbersSq.push(element * element);
});

console.log(numbers)
console.log(numbersSq);

var numbersSqWithMap = numbers.map((element) => {
    // you can do whatever logic in the body
   /* if (element % 2 === 0) {
        return element;
    } */

    return element * element;
});

console.log(numbersSqWithMap);

// filter: filter elements in an array based on a boolean value
var filteredNumbers = numbersSqWithMap.filter((element) => {

    if (element % 2 === 0) {
        return true;
    }

    return false;
});

console.log(filteredNumbers)

// reduce: return a value, process the elements.
var sum = filteredNumbers.reduce((acc, current) => {
    return acc + current;
}, 0);

console.log(sum);