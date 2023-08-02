
// while loop
let x = 0;                                                      //loop variable
while (x < 7) {                                                 //loop condition
    console.log("'1' is added to x, so x is: " + x);            //loop body
    x++;
    //changes loop variable (to break out infinite loop press ctrl+c)
    // console.log("'1' is added to x, so x is: " + x);
}

// for loop

for (let i = 0; i < 7; i++) {
    console.log(i);
}

// for loop - array element
let numbers = [11, 22, 33, 44, 55];
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    console.log(number);

    // console.log(numbers[i]);
}

// break - stops loop
let firstNames = ['rnk', 'rips', 'loops'];
for (let i = 0; i < firstNames.length; i++) {
    let firstName = firstNames[i];
    if (firstName == 'rips') {
        break;
    }
    console.log('stops at rnk - ' + firstName);
}

// continue - skips / continue loop
for (i = 0; i < firstNames.length; i++) {
    let firstName = firstNames[i];
    if (firstName == 'rnk') {
        continue;
    }
    console.log('skips rnk - ' + firstName);
}

// reverse loop
for (i = 10; i >= 1; i--) {
    console.log(i);
}






