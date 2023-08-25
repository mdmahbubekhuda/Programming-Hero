/* 8 ways to get undefined */

// 1. when variable is not initialized
let a
console.log('1. ' + a);
// 2. when value is set as undefined
const b = undefined
console.log('2. ' + b);
// 3. function that return nothing
function c() {
    return
}
console.log('3. ' + c());
// 4. function that returns nothing but stored in a variable
function d(x, y) {
    const sum = x + y
}
const result = d(1, 1)
console.log('4.', result);
// 5. argument is not passed as parameter of function
function e(x, y) {
    console.log('5.', x, y);
}
e(1)
// 6. accessing object property that doesn't exist
const f = { x: 123, y: 123 }
console.log('6.', f.x, f.y, f.z);
// 7. accessing array with index number that doesn't exist
const g = [1, 2, 3]
console.log('7.', g[3]);
// 8. delete an item of array - not recommended at all
const h = [1, 2, 3]
delete h[1]
console.log('8.', h);
