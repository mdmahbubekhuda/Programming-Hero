// Problem - 1
function foo() {
    console.log('foo');
    bar();
}
function bar() {
    console.log('bar');
}
foo();

// problem - 2
function make_avg(num1, num2, num3) {
    let avg = (num1 + num2 + num3) / 3;
    return avg;
}
console.log(make_avg(1, 2, 3));

// problem - 3

function make_array_avg(array) {
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        avg = sum / array.length;
        // console.log(avg);
    }
    return avg;
}

let arrayInt = [1, 2, 3, 4, 5];
let returnedAvg = make_array_avg(arrayInt);
console.log(returnedAvg);

// problem - 4
// using return
function odd_even_return(int) {
    if ((int % 2) === 0) {
        return 'Even number';
    }
    else {
        return 'Odd number';
    }
}
let intiger = 21;
let number = odd_even_return(intiger);
console.log(number);

// without using return
function odd_even_no_return(int) {
    if ((int % 2) === 0) {
        console.log('Even number');
    }
    else {
        console.log('Odd number');
    }
}

odd_even_no_return(2);

// problem - 5
let signal = 'gReEn';

// using if-else
if (signal.toLocaleLowerCase() === 'green') {
    console.log('You are good to cross');
}
else if (signal.toLocaleLowerCase() === 'yellow') {
    console.log('Wait a while to cross');
}
else if (signal.toLocaleLowerCase() === 'red') {
    console.log('Do not cross');
}
else {
    console.log("Please select either 'Green', 'Yellow', or 'Red'");
}

// using switch
switch (signal.toLocaleLowerCase()) {
    case 'green':
        console.log('You are good to cross');
        break;
    case 'red':
        console.log('Do not cross');
        break;
    case 'yellow':
        console.log('Wait to cross');
        break;
    default:
        console.log("Please select either 'Green', 'Yellow', or 'Red'");
}