// swap using temporary variables
let a = 'Ronok';
let b = 'Rnk';
let temp;
console.log(a, b, temp);

temp = a;
a = b;
b = temp;
console.log(a, b, temp);

// destructuring
[a, b] = [b, a];
console.log(a, b);

// using math operation only works with numeric value
let x = 10;
let y = 20;

x = x + y;
y = x - y;
x = x - y;

console.log(x, y);