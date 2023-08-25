/* callback - a function that is passed as argument for another function */

// callback - 1
function morning(name) {
    console.log('Good morning,', name);
}
// callback - 2
function night(name) {
    console.log('Good night,', name);
}
// main function
function greetings(name = 'Rnk', callback) {
    callback(name)
}

greetings('Mahbub', morning)
greetings('Ronok', night)
