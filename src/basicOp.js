'use strict';

/**
 * Your task is to create a function that does four basic mathematical
 * operations.
 *
 * Implement basicOp function:
 *
 * The function should return result of numbers after applying
 * the chosen operation.
 *
 * Examples:
 *
 * basicOp('+', 4, 7)                     // return 11
 * basicOp('-', 15, 18)                   // return -3
 * basicOp('*', 5, 5)                     // return 25
 * basicOp('/', 49, 7)                    // return 7
 * basicOp('something else', 45, 45)      // return 0
 *
 * @param {string} operation
 * @param {number} value1
 * @param {number} value2
 *
 * @return {number}
 */
function basicOp(operation, value1, value2) {
  // write code here
  let result;

  switch (operation) {
    case '+':
      result = value1 + value2;
      break;
    case '*':
      result = value1 * value2;
      break;
    case '-':
      result = value1 - value2;
      break;
    case '/':
      result = value1 / value2;
      break;
    default:
      result = 0;
  }

  return result;
}

module.exports = basicOp;
