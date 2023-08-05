
function maxNumber() {
    return Math.max()
}

function mathMax(x, y, z) {

    switch (maxNumber(x, y, z)) {
        case x:
            return x + ' is highest';

        case y:
            return y + ' is highest';

        default:
            return z + ' is highest';
    }
}

const x = 11;
const y = 22;
const z = 33;

console.log(mathMax(x, y, z));

// array tallest

function maxHeight(arr) {
    let maxHeight = 0;
    for (const element of arr) {
        (element > maxHeight) ? maxHeight = element : null;
    }
    return maxHeight;
}

const array = [1, 21, 333, 4, 11, 22, 33];
console.log(maxHeight(array));

// fibonacci
function fibonacci(num) {
    const result = [0, 1];
    for (let i = 2; i <= num; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result;
}

let result = fibonacci(15);
console.log(result);


