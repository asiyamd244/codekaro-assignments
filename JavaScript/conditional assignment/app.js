//Task1:

let a = 5;
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    } else if (num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(checkNumber(a));

//Task2:
let score = 100;

if (score >= 90 && score <= 100) {
    console.log("A");
} else if (score >= 80 && score <= 89) {
    console.log("B");
} else if (score >= 70 && score <= 79) {
    console.log("C");
} else if (score >= 60 && score <= 69) {
    console.log("D");
} else {
    console.log("F");
}
//Task3:
function checkString(input) {
    if (input) {
        return "Truthy";
    } else {
        return "Falsy";
    }
}

console.log(checkString("Hello"));  // Truthy
console.log(checkString(""));       // Falsy
