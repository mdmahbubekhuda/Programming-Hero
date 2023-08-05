// string immutable (unchangeable) object

// .toLocaleLowerCase() for specific country wise

// .includes()

// indexOf() 
// indexOf("sth") !== -1

// startsWith()

// endsWith()

// .split(' ') splits white spaces

// .split('') splits every character 

// .slice()

// .substring()

// .trim()

// .concat()

// .join(':')

// string reverse
function strReverse(str) {
    let chrReverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        chrReverse += str[i];
        // console.log(chrReverse);
    }
    return chrReverse;
}

const string = "hello world";
// const funcReturn = strReverse(string);
// console.log(funcReturn);

// string word reverse
function strWordReverse(str) {
    str = str.split(' ');
    let result = [];
    for (let i = str.length - 1; i >= 0; i--) {
        result.push(str[i]);
    }
    result = result.join(' ');
    return result;
}

let reverseWord = strWordReverse(string);
console.log(reverseWord);