

const add = function(first,second) {
	return first + second
};

const subtract = function(first,second) {
	return first - second
};

const multiply = function(array) {
    let intProduct = array[0];
    for (let index = 1; index < array.length; index++) {
      intProduct *= array[index]
    }
    return intProduct
  };

const power = function(number, toThePowerOf) {
	return number ** toThePowerOf
};
