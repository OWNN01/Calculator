const testHeader = document.querySelector(".header1");

testHeader.addEventListener("click", () => { alert("testing") });


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


const displayNum1 = 0;
const displayNum2 = 0;
const displayOperator = "";

const displayFunction = document.createElement("p");
displayFunction.textContent = "0 + 1";
testHeader.appendChild(displayFunction);



const numContainer = document.querySelector(".numContainer");

let currentNum = 1;
for (let i = 0; i < 3; i++) {
    let row = document.createElement("div");
    for (let i = 0; i < 3; i++) {
        let num = document.createElement("button");
        num.textContent = currentNum;
        currentNum++;
        row.appendChild(num);
    }
    numContainer.appendChild(row);
}


const opContainer = document.querySelector(".operatorContainer");

const ad = document.createElement("button");
ad.textContent = "+";
opContainer.appendChild(ad);

const sub = document.createElement("button");
sub.textContent = "-";
opContainer.appendChild(sub);

const mult = document.createElement("button");
mult.textContent = "*";
opContainer.appendChild(mult);

const div = document.createElement("button");
div.textContent = "/";
opContainer.appendChild(div);

const equal = document.createElement("button");
equal.textContent = "="
opContainer.appendChild(equal);

const clear = document.createElement("button");
clear.textContent = "C";
opContainer.appendChild(clear);


