

document.getElementById('deposit').addEventListener('click', function () {

    const newInput = getElentFromInputField('input-value-deposit');
    const newText = getElementByIdFromHtml('total-deposit-value');
    const totalDepo = newText + newInput;
    setElemetValue('total-deposit-value', totalDepo);

    const prevTotal = getElementByIdFromHtml('total-balance-value');
    setElemetValue('total-balance-value', prevTotal + newInput)


})

document.getElementById('withdraw').addEventListener('click', function () {
    const newInput = getElentFromInputField('input-value-withdraw');
  
    const newTextValue = getElementByIdFromHtml('total-withdraw-value');


    const depositTotal = newInput + newTextValue;

    setElemetValue('total-withdraw-value', depositTotal);

    const money = getElementByIdFromHtml('total-balance-value');

    setElemetValue('total-balance-value', money - newInput)


})

document.getElementById('logout').addEventListener('click', function () {
    window.location.href = "index.html"
})
