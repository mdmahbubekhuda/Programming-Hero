// object declaration - properties/keys and vlues
let student = {
    name: 'Ronok',
    height: 6,
    marks: 99,
};

console.log(student);

// get key and set value - using dot notation (when property/key name is known)
let myName = student.name; // get key name
student.name = 'rnk'; // set key value
console.log(student.name);

// alternate way to get keys (knwon) and set values
let myHeight = student['height']; // get keys
student['height'] = "6 feet"; // set value
console.log(myHeight);

// when property/key names are unknown
let objectProperties = Object.keys(student); //returns keys in an array
console.log(objectProperties);
// to get the 'unknown' key values of objects
let objectValues = Object.values(student); //returns values in an array
console.log(objectValues);

// another way - to get and set keys and values
let myMarks = 'marks';
student[myMarks] = 100;
console.log(student);


// loop through object
let shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
};









