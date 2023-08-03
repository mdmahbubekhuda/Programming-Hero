// problem - 3

function make_array_avg(arrayInt) {
    let sum = 0;
    for (let i = 0; i < arrayInt.length; i++) {
        sum += arrayInt[i];
    }
    let avg = sum / arrayInt.length;
    return avg;
}

let arrayInt = [1, 2, 3, 4, 5];
let returnedAvg = make_array_avg(arrayInt);
console.log(returnedAvg);