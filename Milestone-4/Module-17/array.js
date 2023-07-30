// array declaration
let friendsName = ['Ronok', 'Rnk', 'Ripa', 'Lopa'];
let friendsAge = [21, 45, 55, 68];

console.log(friendsName);

//length of array
console.log('length of array: ' + friendsAge.length);
// get element's value by index
console.log('index position 1 is: ' + friendsName[1]); //array index

// set element's value by index
friendsName[1]='Faraz';
console.log(friendsName);

// to find out index of an array element
console.log(friendsAge.indexOf(55));

// add element to the last position of array
friendsName.push('Prince'); //array push
console.log('Prince is added at the end of array: ' + friendsName);

// add element at the begining of array
friendsName.unshift('Ammu');
console.log('Ammu is added at the begining of array: ' + friendsName);

// remove the first element of array
friendsName.shift();
console.log('Ammu is removed from the begining of array: ' + friendsName);

// remove the last element from array 
friendsName.pop(); //array pop
console.log('Removes the last element in array: ' +  friendsName);

// storing the popped element into a variable
let poppedElement = friendsName.pop();
console.log('lopa is stored in a variable called poppedElement: ' + poppedElement);












