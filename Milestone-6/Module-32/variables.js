// strict typed programming language (c++, java) - need to declare data type before initialize
// javaScript is dynamic typed programming language - no need to declare data type before initialize

// primitive data types 
const number = 123
const string = 'string'
const boolean = true // or false
const specialTypeI = undefined
const specialTypeII = null // typeof null is object - javaScript creator's mistake
// non-primitive data types
const array = ['index-0', 'index-1', 'index-n']
const object = { key: 'value' }
console.log(typeof specialTypeII);

// memory reference value - only for non primitive type
const objX = { name: 'Ronok' }
const objY = objX
objY.name = 'Rnk'
console.log(objX, objY);