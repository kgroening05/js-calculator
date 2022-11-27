// Array containing all operators
const operators = ["+", "-", "*", "/", "="]
let operator = "";
let numbers = [];

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
        operator = event.target.textContent;
    });
});

// Add event listener to equals button
const equalsButton = document.querySelector(".equals-button");
equalsButton.addEventListener("click",()=>calculate(operator,numbers))

// Add event listener to all number buttons
const numberButtons = document.querySelectorAll(".number-button")
numberButtons.forEach(element => {
    element.addEventListener("click", event =>{
        numbers.push(event.target.textContent);
    })
});

// Calculation handler function to be run when equals button is pressed
function calculate(operator,numbers){
    // Use Last operator to call approprate calc fn
    switch (operator[operator.length-1]) {
        case "*":
            multiply(numbers);
            break;
        case "/":
            divide(numbers);
        default:
            break;
    }
}

// Math Functions
function add(first, second) {
    return first + second
};

function subtract(first, second) {
    return first - second
};

function multiply(array) {
    let intProduct = array[0];
    for (let index = 1; index < array.length; index++) {
        intProduct *= array[index]
    }
    return intProduct
};

function divide(array) {
    let intQuotient = array[0];
    for (let index = 1; index < array.length; index++) {
        intQuotient /= array[index]
    }
    return intQuotient
}

function power(number, toThePowerOf) {
    return number ** toThePowerOf
};
