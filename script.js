// Array containing all operators
const operators = ["+","-","*", "/"]

// Populate HTML with buttons for all operators
const operatorDiv = document.querySelector(".operators");
operators.forEach(element => {
    const opBtn = document.createElement('button');
    opBtn.classList.add(`operator-button`);
    opBtn.textContent = element;
    operatorDiv.appendChild(opBtn);
});

function add(first,second) {
	return first + second
};

function subtract(first,second) {
	return first - second
};

function multiply(array) {
    let intProduct = array[0];
    for (let index = 1; index < array.length; index++) {
      intProduct *= array[index]
    }
    return intProduct
};

function divide(array){
    let intQuotient = array[0];
    for (let index = 1; index < array.length; index++) {
      intQuotient /= array[index]
    }
    return intQuotient
}

function power(number, toThePowerOf) {
	return number ** toThePowerOf
};
