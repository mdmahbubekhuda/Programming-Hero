// optional chaining (?) - used for error checking (Cannot read properties of undefined (reading 'zxcv'))
const obj = { name: 'Rnk', age: 35, height: "6'", interest: 'software engineering' }
console.log(obj.asdf?.zxcv);

// map - array>loops>callback>return new array
const arr = [11, 65, 24, 3, 94, 2, 897, 984, 5, 86, 21, 49, 928, 95, 1, 97, 22]
const map = arr.map(num => num * 2)
console.log(map);

// forEach - array>loops>callback>no return 
arr.forEach(element => {
    element * 2
});

// filter - returns new array based on condition
const filter = arr.filter(n => n > 10 && n % 2 === 0)
console.log(filter);

// find - returns only the first element that matches condition
const find = arr.find(n => n > 900)
console.log(find);

// reduce - (previousValue(accumulator), currentValue), initialValue(previousValue)
const sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
console.log(sum);
