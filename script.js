
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


function operate(operator, num1, num2) {

}


let displayNum1 = "";
let displayNum2 = "";
let displayOperator = "";

function updateDisplay(num) {

    //console.log(num.target.textContent)
    if ((num.target.className === "numButton") && !displayOperator) {
        displayNum1 = displayNum1 + "" + num.target.textContent;
    } else if (num.target.className === "numButton") {
        displayNum2 = displayNum2 + "" + num.target.textContent;
    }

    //This is broken??? TODO
    if (num.target.classname === "operator") {
        let opString = num.target.textContent
        displayOperator = num.target.textContent;
    }


    displayFunction.textContent = displayNum1;
}


const display = document.querySelector(".display")
const displayFunction = document.createElement("p");
displayFunction.textContent = "0";
display.appendChild(displayFunction);



// Sets up the number buttons.

const numContainer = document.querySelector(".numContainer");

let currentNum = 1;
for (let i = 0; i < 3; i++) {
    let row = document.createElement("div");
    for (let i = 0; i < 3; i++) {
        let num = document.createElement("button");
        num.className = "numButton";
        num.textContent = currentNum;
        currentNum++;
        row.appendChild(num);
    }
    numContainer.appendChild(row);
}

const numButtons = document.querySelectorAll(".numButton");

numButtons.forEach((e) => {
    e.addEventListener("click", (e) => {
        updateDisplay(e);
    });
});


// sets up the operator buttons.

const opContainer = document.querySelector(".operatorContainer");

const ad = document.createElement("button");
ad.className = "operator";
ad.textContent = "+";
opContainer.appendChild(ad);

const sub = document.createElement("button");
sub.className = "operator";
sub.textContent = "-";
opContainer.appendChild(sub);

const mult = document.createElement("button");
mult.className = "operator";
mult.textContent = "*";
opContainer.appendChild(mult);

const div = document.createElement("button");
div.className = "operator";
div.textContent = "/";
opContainer.appendChild(div);

const operators = document.querySelectorAll(".operator")

operators.forEach((e) => {
    e.addEventListener("click", (e) => {
        updateDisplay(e);
    });
});





const equal = document.createElement("button");
equal.textContent = "="
opContainer.appendChild(equal);

const clear = document.createElement("button");
clear.textContent = "C";
opContainer.appendChild(clear);

clear.addEventListener("click", () => {
    displayNum1 = "";
    displayNum2 = "";
    displayOperator = "";
    displayFunction.textContent = "0";
});





