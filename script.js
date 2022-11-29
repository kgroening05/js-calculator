// Array containing all operators
const operators = ["+", "-", "*", "/", "^", "="]
let operator = "";
let entryString = "";
let firstNumber = "";
let secondNumber = "";
let result = "";

// Variables for Display fields on HTML
const firstEntryField = document.querySelector(".first-number");
const secondEntryField = document.querySelector(".second-number");
const operatorEntryField = document.querySelector(".operator");
const numberDiv = document.querySelector(".numbers")
const operatorButtons = document.querySelectorAll(".operator-button")
const equalsButton = document.querySelector(".equals-button");
const numberButtons = document.querySelectorAll(".number-button")

// Populate HTML with buttons for all operators, special class for "="
const operatorDiv = document.querySelector(".operators");
operators.forEach(element => {
    const opBtn = document.createElement('button');
    if (element == "="){
        opBtn.classList.add(`equals-button`);
    }else{
        opBtn.classList.add(`operator-button`);
    }
    opBtn.textContent = element;
    operatorDiv.appendChild(opBtn);
});

// Populate HTML with buttons for all numbers 0-9
for (let number = 0; number <= 9; number++) {
    const numBtn = document.createElement('button');
    numBtn.classList.add(`number-button`);
    numBtn.textContent = number;
    numberDiv.appendChild(numBtn);
}

// Add event listener to all operator buttons
operatorButtons.forEach(element => {
    element.addEventListener("click", event =>{
        // Push the entryString value to the first empty number string
        if (firstNumber == ""){
            firstNumber = entryString;
        } else {
            secondNumber = entryString;
        }
        // If secondNumber has numbers, run the calc function before getting next operator
        if (!secondNumber == ""){
            runCalculation(firstNumber, operator, secondNumber);
        }
        // Get the operator being entered
        operator = event.target.textContent;

        // reset entryString
        entryString = "";
        displayNumbers(event);
    });
});

// Add event listener to equals button
equalsButton.addEventListener("click",(event)=>{
    // When pressed, push the entryString value to the secondNumber string
    secondNumber = entryString;
    entryString = "";
    // Run calculation
    runCalculation(firstNumber, operator, secondNumber);
    displayNumbers(event);

})

// Add event listener to all number buttons
numberButtons.forEach(element => {
    element.addEventListener("click", event =>{
        // Add numbers entered to the entryString
        entryString = entryString.concat(event.target.textContent);
        displayNumbers(event);
    })
});

// Handle Dislaying numbers and results in the screen
function displayNumbers(event) {
    const target = event.target.textContent;
    if (!isNaN(target)){
        if (firstNumber == "") {
            firstEntryField.textContent = entryString;
        } else {
            secondEntryField.textContent = entryString;
        }
    } else if(target == "="){
        firstEntryField.textContent = firstNumber;
        secondEntryField.textContent = ""
        operatorEntryField.textContent = ""
        console.log("Result: " + result)
    } else {
        operatorEntryField.textContent = operator;
        firstEntryField.textContent = firstNumber;
        secondEntryField.textContent = secondNumber;
    }
}

// Determine which calculation function to run based on operator
function runCalculation(first, oper, second){

    // evaluate the operator to determine what function to run
    switch (oper) {
        case "+":
            result = add(first, second);
            break;
        case "-":
            result = subtract(first, second);
            break;
        case "*":
            result = multiply(first, second);
            break;
        case "/":
            result = divide(first, second);
            break;
        case "^":
            result = power(first, second);
            break;
        default:
            break;
    }
    // reset global variables
    firstNumber = result;
    secondNumber = "";
    operator = ""
}


// Math Functions
function add(first, second) {
    return +first + +second
};

function subtract(first, second) {
    return first - second
};

function multiply(first, second) {
    return first * second;
};

function divide(first, second) {
    return first / second;
}

function power(number, toThePowerOf) {
    return number ** toThePowerOf
};
