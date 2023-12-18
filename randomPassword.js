// check if password is valid

// 1. The password must have 8 characters
// 2. The password must have at least 1 number
// 3. at least 1 capital letter


var passwordFromUser = prompt("Enter your password");

var isLengthCorrect = passwordFromUser.length >= 8;
var hasANumber = false;

// operadores logicos: ||, && , !, > , <, >=, <=

// 2cr.
for(var i = 0; i < passwordFromUser.length; i++) {

    // check  is number
    if(typeof Number(passwordFromUser[i]) === "number") {
        hasANumber = true;
        break;
    }
}

if (hasANumber && isLengthCorrect) {
    console.log("password valid")
} else {
    console.log("is invalid")
}


