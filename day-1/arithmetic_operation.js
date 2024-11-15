// function to calculate sum of positive numbers in an array

function getSumOfPositiveNumbers(arr) {
  const positiveSum = arr.reduce((acc, num) => (num > 0 ? acc + num : acc), 0);

  return positiveSum;
}

// performs arithmetic operation by a given operator on given operands

function calculate(operand1, operand2, operator) {
  // throws error when operands are not numbers
  if (typeof operand1 !== "number" || typeof operand2 !== "number") {
    throw new Error("Non-numeric operands not allowed");
  }

  switch (operator) {
    // addtion
    case "+":
      return operand1 + operand2;

    // subtraction
    case "-":
      return operand1 - operand2;

    // multiplication
    case "*":
      return operand1 / operand2;

    // division
    case "/":
      // handles zero devision
      if (operand2 === 0) {
        throw new RangeError("Zero division error");
      } else {
        return operand1 / operand2;
      }

    // modulo
    case "%":
      return operand1 % operand2;

    // exponent
    case "**":
      return operand1 ** operand2;

    // and
    case "&&":
      return operand1 && operand2;

    // or
    case "||":
      return operand1 || operand2;

    default:
      throw new Error("Invalid operator");
  }
}

const numArr = [1, 0, -2, -1, 1];

console.log(getSumOfPositiveNumbers(numArr));

console.log(calculate(1, 5, "||"));
