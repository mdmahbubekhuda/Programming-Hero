// hours to minutes
function hoursToMinutes(hrs) {
    let min = hrs * 60;
    return hrs + ' hrs ' + 'is equal to ' + min + ' minutes';
}

let hrs = 10;
let hrsToMin = hoursToMinutes(hrs);
console.log(hrsToMin);

// miles to km
function milesToKm(miles) {
    let km = miles * 1.60934;
    return km;
}

let miles = 60;
let km = milesToKm(miles);
console.log(km);

// even and odd (return)
function evenAndOdd(num) {
    if (parseInt(num) % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

let inputNumber = 2;
const returnedValue = evenAndOdd(inputNumber);
console.log(returnedValue);

// sum of odd numbers
function findOddSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            let oddElement = array[i];
            sum += oddElement;
            // console.log(oddElement, sum);
        }
    }
    return sum;
}

let array = [5, 7, 8, 10, 45, 30];
let sumOfOddNumbers = findOddSum(array);
console.log(sumOfOddNumbers);

// leap year
function leapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(year, " is a leap year.");
    }
    else {
        console.log(year, " is not a leap year.");
    }
}

leapYear(1900);

// leap year in an array
function findLeapYear(array) {
    let leapYearArray = [];
    for (let i = 0; i < array.length; i++) {
        if ((array[i] % 4 === 0 && array[i] % 100 !== 0) || array[i] % 400 === 0) {
            leapYearArray.push(array[i]);
        }
    }
    return leapYearArray;
}

let inputArray = [2023, 2024, 2025, 2028, 2030];
let leapYearArray = findLeapYear(inputArray);
console.log(leapYearArray);

// factorial forward

function factorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
        // console.log(factorial);
    }
    return factorial;
}

let returnedFactorial = factorial(9);
console.log(returnedFactorial);

// factorial reverse

function factorialReverse(num) {
    let result = 1;
    for (let i = num; i >= 1; i--) {
        result *= i;
    }
    return result;
}

let returnedFactorialReverse = factorialReverse(5);
console.log(returnedFactorialReverse);
