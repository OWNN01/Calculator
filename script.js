
// TODO add a backspace sometime.


// Sets up the operator functions.

function add(firstNum, secondNum) {
    let result = firstNum + secondNum;
    return result.toFixed(2);
}

function subtract(firstNum, secondNum) {
    let result = firstNum - secondNum;
    return result.toFixed(2);
}

function multiply(firstNum, secondNum) {
    let result = firstNum * secondNum;
    return result.toFixed(2);
}

function divide(firstNum, secondNum) {
    let result = firstNum / secondNum;
    if (secondNum === 0) { // Capture a divide by zero case
        alert("Don't divide by 0!");
        displayNum2 = "";
        displayOperator = "";
        displayFunction.textContent = "0";
        console.log(displayNum1);
        return "";
    } else {
        return result.toFixed(2);
    }

}

// Does the operation calls.

function operate(operator, num1, num2) {
    if (operator === "+") {
        result = add(parseFloat(num1), parseFloat(num2));
        displayFunction.textContent = result;
    } else if (operator === "-") {
        result = subtract(parseFloat(num1), parseFloat(num2));
        displayFunction.textContent = result;
    } else if (operator === "*") {
        result = multiply(parseFloat(num1), parseFloat(num2));
        displayFunction.textContent = result;
    } else if (operator === "/") {
        result = divide(parseFloat(num1), parseFloat(num2));
        displayFunction.textContent = result;
    }
}

// Set up the display.

const display = document.querySelector(".display")
const displayFunction = document.createElement("p");
displayFunction.style.margin = "auto";
displayFunction.style.width = "50%";
displayFunction.style.textAlign = "center";
displayFunction.textContent = "";
display.appendChild(displayFunction);


let displayNum1 = "";
let displayNum2 = "";
let displayOperator = "";
let result = 0;


// Updates the display to show current function or result. TODO: Debug this code. 

function updateDisplay(character, type) {
    if ((type === "number") && !displayOperator) { // Fill in the first number
        if (!displayNum1 && character === 0) {
            displayNum1 = "0";
        } else if (character === "." && !displayNum1.includes(".")) {
            displayNum1 = displayNum1 + "" + character;
        } else if (character === "." && displayNum1.includes(".")) { // Excuse the spaghetti

        } else if (displayNum1 === 0) {
            displayNum1 = character;
        } else {
            displayNum1 = displayNum1 + "" + character;
        }
    } else if ((type === "number") && !!displayOperator) { // Fill in the second number
        if (!displayNum2 && character === 0) {
            displayNum2 = "0";
        } else if (character === "." && !displayNum2.includes(".")) {
            displayNum2 = displayNum2 + "" + character;
        } else if (character === "." && displayNum2.includes(".")) {

        } else if (displayNum2 === 0) {
            displayNum2 = character;
        }
        else {
            displayNum2 = displayNum2 + "" + character;
        }
    } else if (type === "operator" && (!displayOperator && !!displayNum1)) { // Fill in the operator
        displayOperator = character;
    } else if (type === "operator" && (!!displayOperator && !!displayNum2)) { // Avoid adding more operators
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
        num.style.width = "50px";
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
zero.style.width = "150px";
zero.className = "zeroButton";
let zeroNum = 0;
zero.textContent = 0;
zero.addEventListener("click", () => {
    updateDisplay(zeroNum, "number");
});
numContainer.appendChild(zero);

let decimal = document.createElement("button");
decimal.style.width = "150px";
decimal.className = "decimalButton";
let decimalChar = ".";
decimal.textContent = ".";
decimal.addEventListener("click", () => {
    updateDisplay(decimalChar, "number");
});
numContainer.appendChild(decimal);


// sets up the operator buttons.


const opContainer = document.querySelector(".operatorContainer");

let operatorArr = ["+", "-", "*", "/"]

operatorArr.forEach(function (operator) {
    const currentOp = document.createElement("button");
    currentOp.style.width = "37.5px";
    currentOp.style.height = "37.5px";
    currentOp.className = "operatorButton";
    currentOp.textContent = operator;
    currentOp.addEventListener("click", () => {
        updateDisplay(operator, "operator");
    });
    opContainer.appendChild(currentOp);
});



// Set up the result and clear functions.


const equal = document.createElement("button");
equal.style.height = "37.5px";
equal.style.width = "75px";
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
clear.style.height = "37.5px";
clear.style.width = "75px";
clear.textContent = "C";
opContainer.appendChild(clear);

clear.addEventListener("click", () => {
    displayNum1 = "";
    displayNum2 = "";
    displayOperator = "";
    displayFunction.textContent = "";
});





