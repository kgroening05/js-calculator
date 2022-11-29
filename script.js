// Array containing all operators
const operators = ["+", "-", "*", "/", "="]
let operator = "";
let entryString = "";
let firstNumber = "";
let secondNumber = "";
let result = "";


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
const numberDiv = document.querySelector(".numbers")
for (let number = 0; number <= 9; number++) {
    const numBtn = document.createElement('button');
    numBtn.classList.add(`number-button`);
    numBtn.textContent = number;
    numberDiv.appendChild(numBtn);
}

// Add event listener to all operator buttons
const operatorButtons = document.querySelectorAll(".operator-button")
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
    });
});

// Add event listener to equals button
const equalsButton = document.querySelector(".equals-button");
equalsButton.addEventListener("click",()=>{
    // When pressed, push the entryString value to the secondNumber string
    secondNumber = entryString;
    entryString = "";
    // Run calculation
    runCalculation(firstNumber, operator, secondNumber);

})

// Add event listener to all number buttons
const numberButtons = document.querySelectorAll(".number-button")
numberButtons.forEach(element => {
    element.addEventListener("click", event =>{
        // Add numbers entered to the entryString
        entryString = entryString.concat(event.target.textContent);
    })
});

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
