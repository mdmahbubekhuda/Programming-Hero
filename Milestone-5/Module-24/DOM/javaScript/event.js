console.log('javaScript - Events');

// option-1 (embed in HTML tag)
// onclick="document.body.style.backgroundColor='blue'"

// option-2 (embed in HTML tag) - may use sometimes
{/* <button id="btn-blue" onclick="makeBlue()">Make it Blue</button> */ }
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option-3 using onclick
const btnSkyblue = document.getElementById('btn-skyblue');
btnSkyblue.onclick = makeSkyblue; // can also write the function here instead

function makeSkyblue() {
    document.body.style.backgroundColor = '#87CEEB';
}

// option-4 - using addEventListener - most useful - use anonymous function
document.getElementById('btn-yellow').addEventListener('click', function () {
    document.body.style.backgroundColor = 'yellow';
});

// get input text using addEventListener and display text
document.getElementById('btn-update').addEventListener('click', function () {
    const getInputValue = document.getElementById('input-field').value;
    // display input text
    document.getElementById('display-text').innerText = getInputValue;
    // clear input field
    document.getElementById('input-field').value = '';
})