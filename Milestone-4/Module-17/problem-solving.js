
// practice problem 1
let fruits = ['apple', 'banana', 'orange'];


console.log(fruits.indexOf('banana'));
fruits[1] = 'mango';
fruits.pop();
fruits.push('watermelon');

console.log(fruits);

// practice problem 2
let totalScore = 80;

if (totalScore >= 80) {
    console.log("You've got A");
}
else if (totalScore >= 60) {
    console.log("You've got B");
}
else if (totalScore >= 50) {
    console.log("You've got C");
}
else if (totalScore >= 40) {
    console.log("You've got D");
}
else {
    console.log("You've got F");
}

// practice problem 3
let x = 13;
let y = 79;
let z = 45;

if (x > y && x > z) {
    console.log(x + " is largest");
}
else if (y > x && y > z) {
    console.log(y + " is largest");
}
else {
    console.log(z + " is largest");
}


let a = 9;
let b = 8;
let c = 9;

if (a == b || a == c || b == c) {
    console.log('The triangle is Isosceles');
}
else {
    console.log('The triangle is not Isosceles');
}