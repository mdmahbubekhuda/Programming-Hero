// arguments
function getArguments() {
    const args = [...arguments]
    for (const arg of args) {
        console.log(arg);
    }
}
getArguments(1, 2, 3, 4, 5, 6)
console.log(getArguments.length); // returns argument length

