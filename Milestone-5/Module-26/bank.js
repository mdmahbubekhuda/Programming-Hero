// sum function
function sum(a, b) {
    const sum = parseFloat(a) + parseFloat(b);
    return sum.toFixed(2);
}
// subtraction function
function subtraction(a, b) {
    const subtraction = parseFloat(a) - parseFloat(b);
    return subtraction.toFixed(2);
}

// deposit
document.getElementById('btn-deposit').addEventListener('click', function (event) {

    const selectDepositInput = document.getElementById('deposit-amount');
    const selectDepositDisplay = document.querySelector('#deposit span');
    const depositAmount = selectDepositInput.value;
    const depositDisplayAmount = selectDepositDisplay.innerText;
    const selectBalanceOutput = document.querySelector('#balance span');
    const balanceDisplayAmount = selectBalanceOutput.innerText;

    selectDepositInput.value = '';

    selectDepositDisplay.innerText = sum(depositAmount, depositDisplayAmount);
    selectBalanceOutput.innerText = sum(balanceDisplayAmount, depositAmount);
})

// withdrawal
document.getElementById('btn-withdraw').addEventListener('click', function (event) {
    const selectWithdrawInput = document.getElementById('withdraw-amount');
    const selectWithdrawDisplay = document.querySelector('#withdraw span');
    const withdrawAmount = selectWithdrawInput.value;
    const withdrawDisplayAmount = selectWithdrawDisplay.innerText;
    const selectBalanceOutput = document.querySelector('#balance span');
    const balanceDisplayAmount = selectBalanceOutput.innerText;

    selectWithdrawInput.value = '';

    if (withdrawAmount > parseFloat(balanceDisplayAmount)) {
        return alert('Insufficient balance');
    }

    selectWithdrawDisplay.innerText = sum(withdrawAmount, withdrawDisplayAmount);
    selectBalanceOutput.innerText = subtraction(balanceDisplayAmount, withdrawAmount);
})