const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {
    id: 121,
    class: 11,
    name: 'agun'
};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2) {
    return num1 + num2;
}

// check data types
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// check array returns true
console.log(Array.isArray(friends));
console.log(typeof add);

// array includes
console.log(friends.includes(19));
// array indexOf returns index position (-1 if doesn't exist)
console.log(friends.indexOf(19));
console.log(friends.indexOf(19) !== -1);

// concat()
const newFriends = [11, 12, 13, 14];
const totalFriends = newFriends.concat(friends);
console.log(totalFriends);

// splice()
// splice() -syntax => array.splice(index, howmany, item1, ....., itemX)
let splice = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // changes original array
splice.splice(0, 5); // only removes elements

splice.splice(1, 0, 123, 987); // added 2 new elements

console.log(splice);

