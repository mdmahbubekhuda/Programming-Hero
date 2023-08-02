
// function declaration
// function functionName() {
//     console.log('functionBody');
// }

// // function call
// functionName();

// funtion parameter & argument
// function functionName(parameter) {
//     console.log('argument value is passed to parameter1: ' + parameter);
// }

// functionName('argument');

//note value can be a variable also
// let value1 = 'hello world';
// functionName(value1);

// fuction return
function functionName(parameter1, parameter2) {
    let sum = parameter1 + parameter2;
    return sum;
}

let value1 = 10;
let value2 = 20;
let returnValue = functionName(value1, value2);
console.log(returnValue);
