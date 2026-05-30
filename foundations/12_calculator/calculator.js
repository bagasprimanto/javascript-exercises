const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let totalSum = arr.reduce((tempSum, elem) => {
    tempSum += elem;
    return tempSum;
  }, 0);

  return totalSum;
};

const multiply = function (arr) {
  let totalMultiply = arr.reduce((tempMult, elem) => {
    tempMult *= elem;
    return tempMult;
  });

  return totalMultiply;
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
