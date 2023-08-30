// async operations

// Timeout
console.log(1);
// returns timeoutId - on console(browser) use timeoutId keyword to get id
// only execute once
const timeoutId = setTimeout(() => { console.log('delay to call is 3s') }, 3000) // returns timeoutId
// timeoutId // to get id
// clearTimeout(timeoutId) // to stop timeout
console.log(3);

// Interval - create a digital watch challenge
console.log(1);
let num = 0
// returns intervalId - on console(browser) use intervalId keyword to get id
const intervalId = setInterval(() => {  // returns intervalId
    console.log(++num)
    // use condition to stop interval
    if (num === 5) clearInterval(intervalId)
    // note post-increment vs pre-increment differences
}, 1000)
// intervalId // to get id
// clearInterval(intervalId) // to stop interval
console.log(2);