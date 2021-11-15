const firstNumberInput = document.getElementById('number1');
const secondNumberInput = document.getElementById('number2');
const operationsElement = document.getElementById('operations');
const paragraphElement = document.getElementById('resultP');
const clearBtn = document.getElementById('clear-btn');

function sendInput() {
    let firstNumber = firstNumberInput.value;
    let secondNumber = secondNumberInput.value;
    let operation = operationsElement.value;

    if (validateInput(firstNumber, secondNumber, operation)) {
        paragraphElement.innerHTML = `${firstNumber} ${operation} ${secondNumber} = 
        ${calculate(firstNumber, secondNumber, operation)}`;
        paragraphElement.style.visibility = 'visible';
        clearBtn.style.visibility = 'visible';
        clearInput();
    }

}

function clearResult() {
    paragraphElement.style.visibility = 'hidden';
    clearBtn.style.visibility = 'hidden';
}

function validateInput(firstNumber, secondNumber, operation) {
    let isFirstNumEmpty, isSecondNumEmpty, isNumber, isSecondDenZero;

    if (firstNumber === '') {
        firstNumberInput.classList.add('input-warn');
        isFirstNumEmpty = true;
    } else {
        firstNumberInput.classList.remove('input-warn');
        isFirstNumEmpty = false;
    }

    if (secondNumber === '') {
        secondNumberInput.classList.add('input-warn');
        isSecondNumEmpty = true;
    } else {
        secondNumberInput.classList.remove('input-warn');
        isSecondNumEmpty = false;
    }

    firstNumber = +firstNumber;
    secondNumber = +secondNumber;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Please enter a number!')
        isNumber = false;
    }
    else {
        isNumber = true;
    }

    if (operation === '/' && secondNumber === 0) {
        alert('cannot divide by 0!')
        isSecondDenZero = true;
    }


    return !isFirstNumEmpty && !isSecondNumEmpty && isNumber && !isSecondDenZero;

}

function calculate(firstNumber, secondNumber, operation) {
    switch (operation) {
        case '+':
            return (+firstNumber) + (+secondNumber);
        case '-':
            return (+firstNumber) - (+secondNumber);
        case '*':
            return (+firstNumber) * (+secondNumber);
        case '/':
            return (+firstNumber) / (+secondNumber);
    }
}

function clearInput() {
    firstNumberInput.value = '';
    secondNumberInput.value = '';
    operationsElement.value = '+';
}