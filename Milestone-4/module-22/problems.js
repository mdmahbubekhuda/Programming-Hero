// foobar function approach
function foobar(num) {
    for (let i = 1; i <= num; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log('foobar');
        }
        else if (i % 3 === 0) {
            console.log('foo');
        }
        else if (i % 5 === 0) {
            console.log('bar');
        }
        else {
            console.log(i);
        }
    }
}

const foobarNum = 50;
foobar(foobarNum);


// foobar simple approach
for (let i = 1; i <= 50; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('foobar');
    }
    else if (i % 3 === 0) {
        console.log('foo');
    }
    else if (i % 5 === 0) {
        console.log('bar');
    }
    else {
        console.log(i);
    }
}

// wood required calculator
function woodCalculator(chairQty, tableQty, bedQty) {
    const perChair = chairQty * 3;
    const perTable = tableQty * 10;
    const perBed = bedQty * 50;

    const totalWood = perChair + perTable + perBed;

    return totalWood;
}

const chairQty = 1;
const tableQty = 1;
const bedQty = 1;
const totalWood = woodCalculator(chairQty, tableQty, bedQty);
console.log(totalWood, 'cft wood required');

// cheapest price
const phone = [
    { name: 'SamSung', camera: 12, storage: '128gb', price: 36000, color: 'silver' },
    { name: 'Walton', camera: 10, storage: '64gb', price: 22000, color: 'silver' },
    { name: 'iPhone', camera: 16, storage: '512gb', price: 80000, color: 'silver' },
    { name: 'xaomi', camera: 10, storage: '128gb', price: 22000, color: 'silver' },
    { name: 'Oppo', camera: 8, storage: '64gb', price: 20000, color: 'silver' },
    { name: 'Nokia', camera: 6, storage: '64gb', price: 21000, color: 'silver' },
    { name: 'HTC', camera: 16, storage: '64gb', price: 22000, color: 'silver' },
];

function cheapestPhone(arr) {
    let cheapestPrice = arr[0].price;
    for (let i = 0; i < arr.length; i++) {
        if (cheapestPrice > arr[i].price) {
            cheapestPrice = arr[i].price;
        }
    }
    return cheapestPrice;
}

const cheapestPrice = cheapestPhone(phone);
console.log(cheapestPrice);

// discount advance




