// remove duplicate

function removeDuplicate(arr) {
    let uniqueNames = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueNames.includes(arr[i]) === false) {
            uniqueNames.push(arr[i]);
        }
    }
    return uniqueNames;
}

const array = ['ronok', 'rnk', 'ronok'];
const uniqueNames = removeDuplicate(array);
console.log(uniqueNames);