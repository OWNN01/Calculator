
// TODO think of some more out of the box ways to clean up this mess of code. 


// Sets up the operator functions.

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}

// Does the operation calls.

function operate(operator, num1, num2) {
    if (operator === "+") {
        result = add(parseInt(num1), parseInt(num2));
        displayFunction.textContent = result;
    } else if (operator === "-") {
        result = subtract(parseInt(num1), parseInt(num2));
        displayFunction.textContent = result;
    } else if (operator === "*") {
        result = multiply(parseInt(num1), parseInt(num2));
        displayFunction.textContent = result;
    } else if (operator === "/") {
        result = divide(parseInt(num1), parseInt(num2));
        displayFunction.textContent = result;
    }
}

// Set up the display.

const display = document.querySelector(".display")
const displayFunction = document.createElement("p");
displayFunction.textContent = "0";
display.appendChild(displayFunction);


let displayNum1 = "";
let displayNum2 = "";
let displayOperator = "";
let result = 0;


// Updates the display to show current function or result. TODO: Debug this code. 

function updateDisplay(character, type) {
    if ((type === "number") && !displayOperator) {
        displayNum1 = displayNum1 + "" + character;
    } else if ((type === "number") && !!displayOperator) {
        displayNum2 = displayNum2 + "" + character;
    } else if (type === "operator" && (!displayOperator && !!displayNum1)) {
        displayOperator = character;
    } else if (type === "operator" && (!!displayOperator && !!displayNum2)) {
        operate(displayOperator, displayNum1, displayNum2);
        displayNum1 = result;
        displayNum2 = "";
        displayOperator = character;
    };
    displayFunction.textContent = displayNum1 + " " + displayOperator + " " + displayNum2;
}


// Sets up the number buttons.


const numContainer = document.querySelector(".numContainer");

let currentNum = 1;
for (let i = 0; i < 3; i++) {
    let row = document.createElement("div");
    for (let i = 0; i < 3; i++) {
        let num = document.createElement("button");
        num.className = "numButton";
        num.textContent = currentNum;
        let buttonNum = currentNum;
        num.addEventListener("click", () => {
            updateDisplay(buttonNum, "number");
        });
        currentNum++;
        row.appendChild(num);
    }
    numContainer.appendChild(row);
}

let zero = document.createElement("button");
zero.className = "zeroButton";
let zeroNum = 0;
zero.textContent = 0;
zero.addEventListener("click", () => {
    updateDisplay(zeroNum, "number");
});
numContainer.appendChild(zero);


// sets up the operator buttons.


const opContainer = document.querySelector(".operatorContainer");

let operatorArr = ["+", "-", "*", "/"]

operatorArr.forEach(function (operator) {
    const currentOp = document.createElement("button");
    currentOp.className = "operatorButton";
    currentOp.textContent = operator;
    currentOp.addEventListener("click", () => {
        updateDisplay(operator, "operator");
    });
    opContainer.appendChild(currentOp);
});



// Set up the result and clear functions.


const equal = document.createElement("button");
equal.textContent = "="
equal.className = "equalsButton"
opContainer.appendChild(equal);

equal.addEventListener("click", () => {
    operate(displayOperator, displayNum1, displayNum2);
    displayNum1 = result;
    displayNum2 = "";
    displayOperator = "";
});



// Set up the clear function to wipe all of the variables. 

const clear = document.createElement("button");
clear.textContent = "C";
opContainer.appendChild(clear);

clear.addEventListener("click", () => {
    displayNum1 = "";
    displayNum2 = "";
    displayOperator = "";
    displayFunction.textContent = "0";
});





