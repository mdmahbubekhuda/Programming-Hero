// Call Stack

function a() {
    console.log('a');
    b()
    console.log('aa');
}
function b() {
    console.log('b');
    console.log('bb');
}
function x() {
    console.log('x');
    y()
    console.log('xx');
}
function y() {
    console.log('y');
    console.log('yy');
}
// Concurrency - handling multiple instruction sequence at the same time
// & 
// Event-loop - puts async is task queue until a call stack is cleared
setTimeout(() => console.log('async'), 1000) // async - waiting in queue
a() // queue 1 
x() // queue 2

