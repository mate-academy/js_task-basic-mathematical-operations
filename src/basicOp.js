'use strict';

function basicOp(operation, value1, value2) {
  const operators = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2,
  };

  return (operators[operation]) ? operators[operation] : 0;
}

module.exports = basicOp;
